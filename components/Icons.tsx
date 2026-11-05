// One drawn icon set: 2px navy-weight strokes on a 24px grid, square caps.
type P = { className?: string; size?: number };
const base = (size = 20) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 2.25, strokeLinecap: "square" as const, strokeLinejoin: "miter" as const, "aria-hidden": true,
});

export const IconPhone = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" /></svg>
);
export const IconCheck = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M4 12.5l5 5L20 6.5" /></svg>
);
export const IconArrow = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
);
export const IconChevron = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M6 9l6 6 6-6" /></svg>
);
export const IconStar = ({ className, size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
    <path fill="currentColor" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.3 6.1 20.5l1.3-6.5L2.5 9.4l6.6-.8z" />
  </svg>
);
export const Stars = ({ n = 5 }: { n?: number }) => (
  <span className="stars" role="img" aria-label={`Rated ${n} out of 5`}>
    {Array.from({ length: n }, (_, i) => <IconStar key={i} />)}
  </span>
);
