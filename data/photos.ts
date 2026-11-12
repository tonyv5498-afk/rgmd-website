// Every photo spot on the site reads from this file.
// To add a photo: put the image in public/images/jobs/ and set `src` on the matching entry,
// e.g. src: "/images/jobs/basement-before.webp". Leave `src` out and the spot shows a placeholder.

export type Photo = { src?: string; alt: string; label: string; position?: string };
export type Project = { title: string; service: string; before: Photo; after: Photo };

export const PHOTOS = {
  waterResponse: { src: "/images/jobs/water-stained-drywall.webp", alt: "Water-damaged drywall removed by an RGMD crew, showing tide-line staining from water wicking up the wall", label: "Water-damaged drywall", position: "40% 50%" },
  commercial: { alt: "RGMD crew working in a commercial property", label: "Commercial job" },
  featuredReview: { src: "/images/jobs/basement-bar-mitigation.webp", alt: "Finished basement bar during RGMD water mitigation, with flood cuts in the drywall, the counter wrapped in plastic, and drying equipment running", label: "Basement mitigation", position: "45% 50%" },
} satisfies Record<string, Photo>;

// Homepage "Recent Projects" before & after pairs.
export const PROJECTS: Project[] = [
  {
    title: "Bathroom Reconstruction",
    service: "reconstruction-repairs",
    before: { src: "/images/jobs/bathroom-before.webp", alt: "Dated green-tiled bathroom with a tub and sliding shower door before reconstruction", label: "Before", position: "60% 62%" },
    after: { src: "/images/jobs/bathroom-after.webp", alt: "The same bathroom after reconstruction with gray tile, a walk-in shower and a glass sliding door", label: "After", position: "60% 62%" },
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
    before: { src: "/images/jobs/recon-window-wall-before.webp", alt: "Wall below a row of windows opened to the studs and block after water damage, with a dehumidifier drying the room", label: "Before", position: "50% 60%" },
    after: { src: "/images/jobs/recon-window-wall-after.webp", alt: "The same wall below the windows rebuilt with new drywall and primed", label: "After", position: "50% 60%" },
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
  "reconstruction-repairs": PROJECTS[2],
};

export function serviceProject(slug: string, name: string): Project {
  return SERVICE_PROJECTS[slug] ?? {
    title: name,
    service: slug,
    before: { alt: `${name} before`, label: "Before" },
    after: { alt: `${name} after`, label: "After" },
  };
}
