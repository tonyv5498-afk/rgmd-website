// Every photo spot on the site reads from this file.
// To add a photo: put the image in public/images/jobs/ and set `src` on the matching entry,
// e.g. src: "/images/jobs/basement-before.webp". Leave `src` out and the spot shows a placeholder.

export type Photo = { src?: string; alt: string; label: string };
export type Project = { title: string; service: string; before: Photo; after: Photo };

export const PHOTOS = {
  waterResponse: { alt: "RGMD crew extracting water and setting drying equipment", label: "Crew on a water job" },
  commercial: { alt: "RGMD crew working in a commercial property", label: "Commercial job" },
  featuredReview: { alt: "Completed RGMD project", label: "Finished job" },
} satisfies Record<string, Photo>;

// Homepage "Recent Projects" before & after pairs.
export const PROJECTS: Project[] = [
  {
    title: "Basement Water Damage",
    service: "basement-flood-cleanup",
    before: { alt: "Flooded basement before cleanup", label: "Before" },
    after: { alt: "Basement after drying and repairs", label: "After" },
  },
  {
    title: "Attic Mold Remediation",
    service: "mold-remediation",
    before: { alt: "Mold on attic sheathing before remediation", label: "Before" },
    after: { alt: "Attic sheathing after remediation", label: "After" },
  },
  {
    title: "Water Damage Reconstruction",
    service: "reconstruction-repairs",
    before: { alt: "Room opened up after water damage", label: "Before" },
    after: { alt: "Room after reconstruction", label: "After" },
  },
];

// One before & after pair per service page. Services not listed show placeholders.
export const SERVICE_PROJECTS: Partial<Record<string, Project>> = {};

export function serviceProject(slug: string, name: string): Project {
  return SERVICE_PROJECTS[slug] ?? {
    title: name,
    service: slug,
    before: { alt: `${name} before`, label: "Before" },
    after: { alt: `${name} after`, label: "After" },
  };
}
