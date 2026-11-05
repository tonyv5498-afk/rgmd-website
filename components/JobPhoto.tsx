import Image from "next/image";

// Job photo plate. Pass a real RGMD job photo in `src` when one is supplied;
// until then it renders a clearly labeled placeholder frame.
export default function JobPhoto({ src, alt = "", caption }: { src?: string; alt?: string; caption?: string }) {
  return (
    <figure className="job-photo">
      <div className="ticket-head">
        <span className="ticket-title">Job photo</span>
        <span className="ticket-tag">{src ? "RGMD job" : "Coming soon"}</span>
      </div>
      <div className="job-photo-frame">
        {src ? (
          <Image src={src} alt={alt} fill priority sizes="(max-width: 960px) 100vw, 560px" style={{ objectFit: "cover", objectPosition: "50% 30%" }} />
        ) : (
          <div className="job-photo-empty" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square"><rect x="3" y="6" width="18" height="14" /><path d="M8 6l1.5-2.5h5L16 6" /><circle cx="12" cy="13" r="3.5" /></svg>
            <span>Before &amp; after photos from our jobs</span>
          </div>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
