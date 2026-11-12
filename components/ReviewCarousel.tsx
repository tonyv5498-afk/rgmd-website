"use client";

import { useEffect, useRef, useState } from "react";
import { Stars, IconArrow } from "@/components/Icons";

type Review = { quote: string; author: string; source: string; service: string };

// Auto-advancing review carousel. Pauses on hover, focus or touch; no auto-play
// for visitors who prefer reduced motion. Arrow buttons move it by hand.
export default function ReviewCarousel({ reviews, interval = 6000 }: { reviews: Review[]; interval?: number }) {
  const track = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [open, setOpen] = useState<Set<string>>(new Set());

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>(".rc-card"));
    if (!cards.length) return;
    const behavior: ScrollBehavior = reduced ? "auto" : "smooth";
    const pos = cards.map((c) => c.offsetLeft - cards[0].offsetLeft);
    const cur = el.scrollLeft;
    const max = el.scrollWidth - el.clientWidth;
    let target: number;
    if (dir === 1) {
      const next = pos.find((x) => x > cur + 4);
      target = next === undefined || cur >= max - 4 ? 0 : Math.min(next, max);
    } else {
      const prev = [...pos].reverse().find((x) => x < cur - 4);
      target = prev === undefined ? max : prev;
    }
    el.scrollTo({ left: target, behavior });
  };

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") step(1);
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, reduced, interval]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="rc"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="rc-track" ref={track} role="region" aria-roledescription="carousel" aria-label="Client reviews" tabIndex={0}>
        {reviews.map((r) => {
          const long = r.quote.length > 320;
          const isOpen = open.has(r.author);
          return (
            <figure key={r.author} className="review rc-card">
              <Stars />
              <blockquote className={long && !isOpen ? "clamped" : undefined}>“{r.quote}”</blockquote>
              {long && (
                <button type="button" className="rc-more" aria-expanded={isOpen}
                  onClick={() => setOpen((o) => { const n = new Set(o); if (n.has(r.author)) n.delete(r.author); else n.add(r.author); return n; })}>
                  {isOpen ? "Show less" : "Read full review"}
                </button>
              )}
              <figcaption>{r.author}{r.source ? ` — ${r.source}` : ""}<span>{r.service}</span></figcaption>
            </figure>
          );
        })}
      </div>
      <div className="rc-controls">
        <button type="button" className="rc-btn" onClick={() => step(-1)} aria-label="Previous reviews">
          <IconArrow size={18} className="rc-flip" />
        </button>
        <button type="button" className="rc-btn" onClick={() => step(1)} aria-label="Next reviews">
          <IconArrow size={18} />
        </button>
      </div>
    </div>
  );
}
