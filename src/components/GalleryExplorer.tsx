'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lightbox, { LightboxItem } from './Lightbox';
import type { GalleryImage, GalleryVideo } from '@/data/gallery';

interface GalleryExplorerProps {
  images: GalleryImage[];
  videos: GalleryVideo[];
}

type Filter = 'photo' | 'video';

/** Unified tile model so photos and videos share one render + selection path. */
interface GxItem {
  kind: 'photo' | 'video';
  src: string;      // stable unique id — photos are .jpg, videos are .mp4 (never collide)
  thumb: string;    // photo: its own src; video: the poster image
  title: string;
  service: string;  // category label (ready for a future category filter)
  meta: string;     // "equipment · venue"
  poster?: string;  // video only, forwarded to the Lightbox
}

const joinMeta = (...parts: (string | undefined)[]) => parts.filter(Boolean).join(' · ');

const TABS: { key: Filter; label: string }[] = [
  { key: 'photo', label: 'Images' },
  { key: 'video', label: 'Videos' },
];

const EASE = [0.16, 1, 0.3, 1] as const;
const TRANSITION_DURATION = 0.4;
const STAGGER_DELAY = 0.04;
const MAX_STAGGER = 0.35;

/**
 * Single-page gallery: one grid of photos + videos with sticky Images/Videos
 * tabs that filter in place (framer-motion layout reflow + staggered fade).
 * Clicking any tile opens the shared Lightbox. Selection is anchored to the
 * item's `src`, and the Lightbox index is derived from the *filtered* set, so
 * prev/next and the counter stay correct after filtering.
 */
export default function GalleryExplorer({ images, videos }: GalleryExplorerProps) {
  const [reduce, setReduce] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Detect reduced motion after mount to avoid hydration mismatch
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Photos first, then videos. Built once — order stays stable across renders.
  const allItems = useMemo<GxItem[]>(() => {
    const photos: GxItem[] = images.map((im) => ({
      kind: 'photo',
      src: im.src,
      thumb: im.src,
      title: im.title,
      service: im.service,
      meta: joinMeta(im.equipment, im.venue),
    }));
    const clips: GxItem[] = videos.map((v) => ({
      kind: 'video',
      src: v.src,
      thumb: v.poster,
      title: v.title,
      service: v.service,
      meta: joinMeta(v.equipment, v.venue),
      poster: v.poster,
    }));
    return [...photos, ...clips];
  }, [images, videos]);

  const [filter, setFilter] = useState<Filter>('photo');
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  const filteredItems = useMemo(
    () => allItems.filter((i) => i.kind === filter),
    [allItems, filter],
  );

  // Lightbox works off the filtered set, so arrows/counter auto-scope to it.
  const lightboxItems = useMemo<LightboxItem[]>(
    () =>
      filteredItems.map((i) => ({
        type: i.kind === 'video' ? 'video' : 'image',
        src: i.src,
        poster: i.poster,
        title: i.title,
        tag: i.service,
        meta: i.meta,
      })),
    [filteredItems],
  );

  // Derive the index from the selected src; guard so we never index [-1].
  const selectedIndex = useMemo(() => {
    if (selectedSrc == null) return null;
    const i = lightboxItems.findIndex((it) => it.src === selectedSrc);
    return i === -1 ? null : i;
  }, [selectedSrc, lightboxItems]);

  const onSelectFilter = (f: Filter) => {
    setSelectedSrc(null); // close the lightbox before the set changes under it
    setFilter(f);
  };

  // Before mount: render without animations (match server). After mount: use reduce state.
  const animate = mounted && !reduce;
  const initial = animate ? { opacity: 0, scale: 0.92 } : false;
  const exitAnim = animate ? { opacity: 0, scale: 0.92 } : { opacity: 0 };
  const transition = animate
    ? {
        duration: TRANSITION_DURATION,
        ease: EASE,
        layout: { duration: TRANSITION_DURATION * 1.1, ease: EASE },
      }
    : { duration: 0 };

  return (
    <div className="gallery-explorer">
      <div className="gx-filterbar" role="tablist" aria-label="Filter gallery">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={filter === t.key}
            className={`gx-tab ${filter === t.key ? 'is-active' : ''}`}
            onClick={() => onSelectFilter(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <p className="gx-empty">Nothing to show here yet.</p>
      ) : (
        <div className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.button
                key={item.src}
                type="button"
                className="gx-tile"
                layout={animate}
                initial={initial}
                animate={{ opacity: 1, scale: 1 }}
                exit={exitAnim}
                transition={animate ? { ...transition, delay: Math.min(i * STAGGER_DELAY, MAX_STAGGER) } : transition}
                onClick={() => setSelectedSrc(item.src)}
                aria-label={`${item.kind === 'video' ? 'Play' : 'View'} ${item.title}`}
              >
                <img src={item.thumb} alt={item.title} loading="lazy" />
                {item.kind === 'video' && (
                  <span className="play-badge">
                    <span>
                      <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                )}
                <span className="thumb-label">
                  {item.title}
                  <small>{item.service}</small>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      )}

      <Lightbox
        items={lightboxItems}
        index={selectedIndex}
        onClose={() => setSelectedSrc(null)}
        onIndexChange={(i) => setSelectedSrc(lightboxItems[i].src)}
      />
    </div>
  );
}
