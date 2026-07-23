'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  /** The stat value as authored, e.g. "30+", "2000+", "50k", or "24/7". */
  value: string;
  /** Animation length in ms once the stat scrolls into view. */
  duration?: number;
}

/**
 * Parse a stat string into an animatable number plus its surrounding text.
 * "2000+" -> { prefix: "", number: 2000, suffix: "+" }
 * "50k"   -> { prefix: "", number: 50,   suffix: "k" }
 * "24/7"  -> null  (no single number to count — render the raw string)
 */
function parse(value: string) {
  // Exactly one run of digits, optional non-digit prefix/suffix around it.
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return null;
  return { prefix: match[1], number: Number(match[2]), suffix: match[3] };
}

/**
 * Animates a stat number from 0 up to its target the first time it scrolls
 * into view. Non-numeric stats (e.g. "24/7") render unchanged.
 */
export default function CountUp({ value, duration = 2000 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // margin pulls the trigger up so it fires a bit before the band is centered;
  // low `amount` so it also fires when the band is short or scrolled past fast.
  const inView = useInView(ref, { once: true, amount: 0.2, margin: '0px 0px -15% 0px' });

  // Memoize so the effect below doesn't re-run (and restart the count) every
  // render — parse() would otherwise return a new object each time.
  const parsed = useMemo(() => parse(value), [value]);

  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);

  useEffect(() => {
    if (!parsed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const { prefix, number, suffix } = parsed;
    let raf = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      // easeOutQuart — quick lead-in, long graceful settle onto the target.
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(`${prefix}${Math.round(eased * number)}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed, value, duration]);

  // tabular-nums keeps digit width fixed so the number doesn't jitter/reflow
  // as it counts (e.g. 9 -> 10 -> 100 stays visually stable).
  return (
    <span ref={ref}>
      <span aria-hidden="true" style={{ fontVariantNumeric: 'tabular-nums' }}>{display}</span>
      <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>{value}</span>
    </span>
  );
}
