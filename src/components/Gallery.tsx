'use client';

import { useState } from 'react';
import Lightbox, { LightboxItem } from './Lightbox';
import type { GalleryImage, GalleryVideo } from '@/data/gallery';

interface GalleryProps {
  variant?: 'image' | 'video';
  images?: GalleryImage[];
  videos?: GalleryVideo[];
}

const meta = (...parts: (string | undefined)[]) => parts.filter(Boolean).join(' · ');

/**
 * Thumbnail grid for images or video posters (with a play badge). No videos
 * autoplay in the grid (optimized); clicking opens the shared Lightbox.
 */
export default function Gallery({ variant = 'image', images = [], videos = [] }: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const isVideo = variant === 'video';

  const items: LightboxItem[] = isVideo
    ? videos.map((v) => ({ type: 'video', src: v.src, poster: v.poster, title: v.title, tag: v.service, meta: meta(v.equipment, v.venue) }))
    : images.map((im) => ({ type: 'image', src: im.src, title: im.title, tag: im.service, meta: meta(im.equipment, im.venue) }));

  return (
    <>
      <div className={`gallery-grid ${isVideo ? 'is-video' : ''}`}>
        {isVideo
          ? videos.map((v, i) => (
              <button key={v.src} className="video-card" type="button" onClick={() => setIndex(i)} aria-label={`Play ${v.title}`}>
                <img src={v.poster} alt={v.title} loading="lazy" />
                <span className="play-badge"><span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span></span>
                <span className="thumb-label">{v.title}<small>{v.service}</small></span>
              </button>
            ))
          : images.map((im, i) => (
              <button key={im.src} className="gallery-thumb" type="button" onClick={() => setIndex(i)} aria-label={`View ${im.title}`}>
                <img src={im.src} alt={im.title} loading="lazy" />
                <span className="thumb-label">{im.title}<small>{im.service}</small></span>
              </button>
            ))}
      </div>
      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </>
  );
}
