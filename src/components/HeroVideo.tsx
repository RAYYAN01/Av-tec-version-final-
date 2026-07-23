'use client';

interface HeroVideoProps {
  src: string;
  poster: string;
}

/**
 * Background hero video. Autoplays for all visitors (muted + looping). The
 * poster shows while the clip buffers.
 */
export default function HeroVideo({ src, poster }: HeroVideoProps) {
  // preload="metadata" (not "auto") so the browser doesn't eagerly pull the
  // full background clip before first paint; the poster covers the gap while
  // the video buffers. Matters most for large hero files on mobile data.
  return (
    <video autoPlay muted loop playsInline preload="metadata" poster={poster} aria-hidden="true">
      <source src={src} type="video/mp4" />
    </video>
  );
}
