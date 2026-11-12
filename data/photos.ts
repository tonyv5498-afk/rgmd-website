// Every photo spot on the site reads from this file.
// To add a photo: put the image in public/images/jobs/ and set `src` on the matching entry,
// e.g. src: "/images/jobs/basement-before.webp". Leave `src` out and the spot shows a placeholder.

export type Photo = { src?: string; alt: string; label: string; position?: string };
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
    title: "Mold Remediation, Under-Stair Framing",
    service: "mold-remediation",
    before: { src: "/images/jobs/mold-stairs-before.webp", position: "50% 38%", alt: "Mold growth on the wood stair risers under a staircase before remediation", label: "Before" },
    after: { src: "/images/jobs/mold-stairs-after.webp", position: "50% 38%", alt: "Clean wood stair risers and treads under the same staircase after RGMD mold remediation", label: "After" },
  },
  {
    title: "Water Damage Reconstruction",
    service: "reconstruction-repairs",
    before: { alt: "Room opened up after water damage", label: "Before" },
    after: { alt: "Room after reconstruction", label: "After" },
  },
];

// Optional main photo shown in the opening section of a service page.
export const SERVICE_PHOTOS: Partial<Record<string, Photo>> = {
  "mold-remediation": {
    src: "/images/jobs/mold-crawlspace-crew.webp",
    alt: "RGMD technician in a Tyvek suit and full-face respirator treating mold on crawlspace framing",
    label: "Crew in a crawlspace",
    position: "55% 40%",
  },
};

// One before & after pair per service page. Services not listed show placeholders.
export const SERVICE_PROJECTS: Partial<Record<string, Project>> = {
  "mold-remediation": PROJECTS[1],
};

export function serviceProject(slug: string, name: string): Project {
  return SERVICE_PROJECTS[slug] ?? {
    title: name,
    service: slug,
    before: { alt: `${name} before`, label: "Before" },
    after: { alt: `${name} after`, label: "After" },
  };
}
