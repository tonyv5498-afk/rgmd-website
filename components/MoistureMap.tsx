"use client";

// Illustrative basement moisture map. It shows how RGMD logs readings while a
// structure dries; the plan and the numbers are an example, labeled as such.
import { useEffect, useRef, useState } from "react";

type Pt = { x: number; y: number; wet: number; dry: number; label: string };
const POINTS: Pt[] = [
  { x: 262, y: 92, wet: 38, dry: 11, label: "A" },
  { x: 236, y: 214, wet: 34, dry: 12, label: "B" },
  { x: 330, y: 250, wet: 29, dry: 10, label: "C" },
  { x: 150, y: 268, wet: 24, dry: 11, label: "D" },
  { x: 420, y: 300, wet: 19, dry: 9, label: "E" },
  { x: 92, y: 96, wet: 16, dry: 10, label: "F" },
];
const DAYS = [0, 0.55, 1]; // Day 1, Day 2, Day 3
const WET = [226, 102, 28];
const DRY = [10, 100, 168];
const mix = (t: number) => {
  const c = WET.map((w, i) => Math.round(w + (DRY[i] - w) * t));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
};
const easeOut = (t: number) => 1 - Math.pow(2, -10 * t);

export default function MoistureMap() {
  const [t, setT] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const tRef = useRef(0);
  tRef.current = t;

  function animateTo(target: number, ms = 1800) {
    if (raf.current) cancelAnimationFrame(raf.current);
    const from = tRef.current;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / ms);
      setT(from + (target - from) * easeOut(p));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  }

  function goDay(i: number) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setT(DAYS[i]);
    else animateTo(DAYS[i], 1400);
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setT(1); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        setTimeout(() => { animateTo(1, 2600); }, 500);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); if (raf.current) cancelAnimationFrame(raf.current); };
  }, []);

  const reached = t > 0.97;
  const shownDay = t >= 0.97 ? 2 : t >= 0.5 ? 1 : 0;

  return (
    <div className="map-ticket" ref={ref}>
      <div className="ticket-head">
        <span className="ticket-title">Moisture map</span>
        <span className="mono ticket-tag">Example</span>
      </div>

      <svg viewBox="0 0 560 380" className="map-svg" role="img"
        aria-label="Example moisture map of a basement, with readings drying from wet on Day 1 to dry on Day 3">
        <defs>
          <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#e2661c" strokeWidth="2" />
          </pattern>
        </defs>
        {/* wet zone */}
        <path d="M200 30 H330 V170 H392 L410 300 L300 352 L150 330 L96 250 L170 180 L200 170 Z"
          fill="url(#hatch)" opacity={0.42 * (1 - t) + 0.04} />
        {/* walls */}
        <g fill="none" stroke="#14264a" strokeLinecap="square">
          <rect x="24" y="24" width="512" height="332" strokeWidth="6" />
          <path d="M200 24 V120 M200 150 V170 H24" strokeWidth="4" />
          <path d="M330 24 V170 H290 M240 170 H200" strokeWidth="4" />
          <path d="M436 24 V128 H536" strokeWidth="4" />
        </g>
        {/* stair treads */}
        <g stroke="#14264a" strokeWidth="1.5">
          {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1={448 + i * 14} y1="36" x2={448 + i * 14} y2="116" />)}
        </g>
        {/* room labels */}
        <g className="map-room">
          <text x="40" y="52">Utility</text>
          <text x="214" y="52">Laundry</text>
          <text x="450" y="148">Stairs</text>
          <text x="40" y="340">Finished rec room</text>
        </g>
        {/* readings */}
        {POINTS.map((p) => {
          const v = Math.round(p.wet + (p.dry - p.wet) * t);
          const col = mix(t);
          return (
            <g key={p.label} transform={`translate(${p.x} ${p.y})`}>
              <circle r="15" fill="#fff" stroke={col} strokeWidth="3" />
              <circle r="5" fill={col} />
              <text x="22" y="-4" className="map-id">{p.label}</text>
              <text x="22" y="14" className="map-val" fill={col}>{v}%</text>
            </g>
          );
        })}
      </svg>

      <div className="ticket-foot">
        <div className="day-switch" role="group" aria-label="Show readings for">
          {["Day 1", "Day 2", "Day 3"].map((d, i) => (
            <button key={d} type="button" aria-pressed={shownDay === i} onClick={() => goDay(i)}>{d}</button>
          ))}
        </div>
        <div className="legend">
          <span><i className="sw sw-wet" /> Wet</span>
          <span><i className="sw sw-dry" /> Dry</span>
          <span className={reached ? "dry-stamp on" : "dry-stamp"} aria-live="polite">{reached ? "Dry standard reached" : "Drying in progress"}</span>
        </div>
      </div>
    </div>
  );
}
