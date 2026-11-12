import Image from "next/image";
import Link from "next/link";
import type { Photo, Project } from "@/data/photos";
import { IconArrow } from "@/components/Icons";

const Camera = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
    <rect x="3" y="6" width="18" height="14" /><path d="M8 6l1.5-2.5h5L16 6" /><circle cx="12" cy="13" r="3.5" />
  </svg>
);

// A photo frame. With `src` it shows the photo; without, a labeled placeholder.
export function PhotoSlot({ photo, ratio = "4 / 3", sizes = "(max-width: 900px) 100vw, 560px", tag, className = "" }:
  { photo: Photo; ratio?: string; sizes?: string; tag?: string; className?: string }) {
  return (
    <figure className={`photo-slot ${photo.src ? "" : "is-empty"} ${className}`} style={{ aspectRatio: ratio }}>
      {photo.src ? (
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} style={{ objectFit: "cover" }} />
      ) : (
        <div className="photo-empty"><Camera /><span>Photo coming soon</span></div>
      )}
      {tag && <span className="photo-tag">{tag}</span>}
    </figure>
  );
}

// Before & after pair with a ruled caption.
export function BeforeAfter({ project, link = true }: { project: Project; link?: boolean }) {
  return (
    <article className="before-after">
      <div className="ba-pair">
        <PhotoSlot photo={project.before} tag="Before" sizes="(max-width: 700px) 50vw, 300px" />
        <PhotoSlot photo={project.after} tag="After" sizes="(max-width: 700px) 50vw, 300px" />
      </div>
      <div className="ba-caption">
        <h3>{project.title}</h3>
        {link && <Link href={`/services/${project.service}/`} className="card-link">See the service <IconArrow size={16} /></Link>}
      </div>
    </article>
  );
}
