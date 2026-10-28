// One entry per service page. `name` is the single label used in the menu,
// cards, links and schema, so the names can't drift apart again.
//
// Body copy (`intro`, `steps[].body`, `urgency`, `docs`) is filled in from the
// WordPress export. Until then the page shows the card summary as its intro.

export type Step = { title: string; body?: string };

export type Service = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  summary: string; // card blurb, used on home, hubs and as a fallback intro
  h2Intro: string;
  intro?: string[];
  listHeading: string;
  list?: string[];
  steps: Step[];
  h2Urgency: string;
  urgency?: string[];
  h2Docs: string;
  docs?: string[];
  related: string[];
  h2Cta: string;
};

export const SERVICES: Service[] = [
  {
    slug: "water-damage-restoration",
    name: "Water Damage Restoration",
    title: "Water Damage Restoration in Metro Detroit",
    description: "Professional water extraction, structural drying, and insurance documentation for water damage in Metro Detroit homes and businesses. Call (313) 771-3673.",
    h1: "Water Damage Restoration in Metro Detroit",
    summary: "Water damage moves fast. Whether it's a burst pipe, appliance failure, or roof leak, our team responds with professional extraction equipment and moisture assessment tools to stop secondary damage before it spreads. We document affected areas, establish a drying plan, and monitor the process from extraction through final dry-out.",
    h2Intro: "What Is Water Damage Restoration?",
    listHeading: "Common Water Damage Situations We Handle",
    steps: [
      { title: "Call or Submit a Request" }, { title: "Inspection & Moisture Assessment" },
      { title: "Water Extraction / Source Control" }, { title: "Removal of Affected Materials" },
      { title: "Drying Equipment & Dehumidification" }, { title: "Monitoring & Documentation" },
      { title: "Insurance Claim Support" }, { title: "Repair & Reconstruction Coordination" }, { title: "Restored" },
    ],
    h2Urgency: "Water Damage Gets Worse Every Minute",
    h2Docs: "Documentation Support for Water Damage Claims",
    related: ["sump-pump-failure", "mold-remediation", "reconstruction-repairs"],
    h2Cta: "Need Water Damage Restoration in Metro Detroit?",
  },
  {
    slug: "emergency-water-removal",
    name: "Emergency Water Removal",
    title: "Emergency Water Removal in Metro Detroit",
    description: "Active flooding requires immediate response. Commercial extraction, moisture mapping, and emergency drying in Metro Detroit. Call (313) 771-3673.",
    h1: "Emergency Water Removal in Metro Detroit",
    summary: "When water is actively entering a property, time is the critical variable. Standing water causes structural saturation, flooring damage, and conditions for mold growth within hours. Our emergency response includes submersible pump extraction, wet vacuuming, and rapid moisture mapping to identify hidden pockets of water inside walls and under flooring.",
    h2Intro: "When Water Is Actively Entering Your Property",
    listHeading: "Situations That Require Emergency Water Removal",
    steps: [
      { title: "Initial Contact & Dispatch" }, { title: "Damage Assessment" }, { title: "Primary Water Extraction" },
      { title: "Hidden Moisture Mapping" }, { title: "Emergency Drying Setup" }, { title: "Documentation & Next Steps" },
    ],
    h2Urgency: "Active Water Intrusion Requires Immediate Response",
    h2Docs: "Documentation Support for Water Damage Claims",
    related: ["water-damage-restoration", "basement-flood-cleanup", "mold-remediation"],
    h2Cta: "Need Emergency Water Removal in Metro Detroit?",
  },
  {
    slug: "basement-flood-cleanup",
    name: "Basement Flood Cleanup",
    title: "Basement Flood Cleanup in Metro Detroit",
    description: "Basement flood cleanup in Metro Detroit: extraction, material removal, structural drying, and insurance documentation. Call (313) 771-3673.",
    h1: "Basement Flood Cleanup in Metro Detroit",
    summary: "Basement flooding from heavy rain, sump pump failure, or sewage backup requires systematic removal of water and affected materials. We handle water extraction, wet material removal, drying equipment placement, and dehumidification. We can also document conditions for insurance and coordinate repairs.",
    h2Intro: "Professional Basement Flood Cleanup",
    listHeading: "Common Causes of Basement Flooding We Handle",
    steps: [
      { title: "Initial Assessment" }, { title: "Moisture Mapping" }, { title: "Water Extraction" },
      { title: "Material Removal" }, { title: "Drying Equipment Setup" }, { title: "Daily Monitoring" },
    ],
    h2Urgency: "Basement Flooding Gets Worse Fast",
    h2Docs: "Documentation Support for Basement Flood Claims",
    related: ["sump-pump-failure", "water-damage-restoration", "mold-remediation"],
    h2Cta: "Need Basement Flood Cleanup in Metro Detroit?",
  },
  {
    slug: "sump-pump-failure",
    name: "Sump Pump Failure Cleanup",
    title: "Sump Pump Failure Cleanup in Metro Detroit",
    description: "Sump pump failed during a storm? Fast extraction, complete basement drying, and insurance documentation in Metro Detroit. Call (313) 771-3673.",
    h1: "Sump Pump Failure Cleanup in Metro Detroit",
    summary: "Sump pump failures during heavy rain events are one of the most common causes of basement flooding in Metro Detroit. When your pump fails, water accumulates fast — saturating flooring, drywall, and stored contents within hours. We respond with emergency extraction, moisture mapping, and a full drying plan to stop secondary damage before it compounds the loss.",
    h2Intro: "What Happens When Your Sump Pump Fails",
    listHeading: "Signs Your Sump Pump Has Failed",
    steps: [
      { title: "Emergency Dispatch" }, { title: "Source Assessment" }, { title: "Full Water Extraction" },
      { title: "Moisture Mapping" }, { title: "Material Removal" }, { title: "Drying & Documentation" },
    ],
    h2Urgency: "Sump Pump Failure During a Storm — Every Minute Counts",
    h2Docs: "Documentation Support for Sump Pump Failure Claims",
    related: ["basement-flood-cleanup", "water-damage-restoration", "mold-remediation"],
    h2Cta: "Need Sump Pump Failure Cleanup in Metro Detroit?",
  },
  {
    slug: "sewage-cleanup",
    name: "Category 3 Sewage Cleanup",
    title: "Category 3 Sewage Cleanup in Metro Detroit",
    description: "Sewage backup cleanup in Metro Detroit: containment, biohazard removal, antimicrobial treatment, and full insurance documentation. Call (313) 771-3673.",
    h1: "Category 3 Sewage Cleanup in Metro Detroit",
    summary: "Sewage backups introduce contaminated black water into your property — a serious health hazard that requires immediate professional response. We contain the affected area, remove contaminated materials, treat surfaces with appropriate antimicrobial agents, and document the full scope of work for your insurance carrier. Category 3 water intrusion is not a DIY situation.",
    h2Intro: "Why Sewage Backup Requires Professional Response",
    listHeading: "Common Causes of Sewage Backup",
    steps: [
      { title: "Emergency Dispatch" }, { title: "Containment Setup" }, { title: "Sewage Extraction" },
      { title: "Contaminated Material Removal" }, { title: "Antimicrobial Treatment" }, { title: "Documentation & Clearance" },
    ],
    h2Urgency: "Category 3 Water — Act Immediately",
    h2Docs: "Documentation Support for Sewage Backup Claims",
    related: ["basement-flood-cleanup", "mold-remediation", "water-damage-restoration"],
    h2Cta: "Need Sewage Cleanup in Metro Detroit?",
  },
  {
    slug: "pipe-burst-cleanup",
    name: "Pipe Burst Cleanup",
    title: "Pipe Burst Cleanup in Metro Detroit",
    description: "Burst or frozen pipe damage in Metro Detroit? We extract, detect hidden moisture, dry the structure, and document everything. Call (313) 771-3673.",
    h1: "Pipe Burst Cleanup in Metro Detroit",
    summary: "Burst pipes — especially from frozen lines in Michigan winters — can release hundreds of gallons into walls, ceilings, and floors before the source is even found. We locate the affected areas using moisture meters and thermal imaging, extract standing water, remove saturated materials, and establish a drying plan to get your structure back to dry standard as quickly as possible.",
    h2Intro: "Pipe Burst Water Damage — What You're Actually Dealing With",
    listHeading: "Common Pipe Burst Situations We Handle",
    steps: [
      { title: "Emergency Dispatch" }, { title: "Source Control & Assessment" }, { title: "Water Extraction" },
      { title: "Hidden Moisture Detection" }, { title: "Material Removal" }, { title: "Drying & Documentation" },
    ],
    h2Urgency: "Hidden Water Is the Real Danger With Pipe Bursts",
    h2Docs: "Documentation Support for Pipe Burst Claims",
    related: ["water-damage-restoration", "emergency-water-removal", "reconstruction-repairs"],
    h2Cta: "Need Pipe Burst Cleanup in Metro Detroit?",
  },
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    title: "Mold Remediation in Metro Detroit",
    description: "Mold remediation in Metro Detroit: containment, removal, antimicrobial treatment, and clearance documentation for homes and businesses. Call (313) 771-3673.",
    h1: "Mold Remediation in Metro Detroit",
    summary: "Mold growth typically follows unresolved moisture intrusion. Our remediation process includes containment, removal of affected materials, treatment of surfaces, and final clearance steps. We follow industry-standard protocols and document the scope of work for insurance and property records.",
    h2Intro: "What Mold Remediation Actually Involves",
    listHeading: "Common Situations That Lead to Mold Growth",
    steps: [
      { title: "Moisture & Mold Assessment" }, { title: "Containment Setup" }, { title: "Removal of Affected Materials" },
      { title: "Antimicrobial Treatment" }, { title: "HEPA Air Filtration" }, { title: "Documentation & Clearance" },
    ],
    h2Urgency: "Mold Doesn't Stop Growing on Its Own",
    h2Docs: "Documentation Support for Mold Remediation Claims",
    related: ["water-damage-restoration", "basement-flood-cleanup", "reconstruction-repairs"],
    h2Cta: "Need Mold Remediation in Metro Detroit?",
  },
  {
    slug: "fire-smoke-damage",
    name: "Fire, Smoke & Odor Damage",
    title: "Fire, Smoke & Odor Damage Restoration in Metro Detroit",
    description: "Fire, smoke, and odor restoration in Metro Detroit: debris removal, soot cleanup, odor elimination, and reconstruction coordination. Call (313) 771-3673.",
    h1: "Fire, Smoke & Odor Damage Restoration in Metro Detroit",
    summary: "Fire damage includes structural damage and pervasive smoke and soot contamination that can affect areas well beyond the fire's origin. Our team addresses debris removal, smoke odor mitigation, soot cleaning, and content evaluation, coordinating with insurers and contractors.",
    h2Intro: "What Fire and Smoke Damage Actually Involves",
    listHeading: "What We Address in Fire & Smoke Damage Jobs",
    steps: [
      { title: "Initial Response & Board-Up" }, { title: "Damage Assessment" }, { title: "Debris Removal" },
      { title: "Soot & Smoke Cleaning" }, { title: "Odor Mitigation" }, { title: "Reconstruction Coordination" },
    ],
    h2Urgency: "Smoke Damage Continues After the Fire Is Out",
    h2Docs: "Documentation Support for Fire and Smoke Damage Claims",
    related: ["reconstruction-repairs", "water-damage-restoration", "mold-remediation"],
    h2Cta: "Need Fire & Smoke Damage Restoration in Metro Detroit?",
  },
  {
    slug: "reconstruction-repairs",
    name: "Reconstruction & Repairs",
    title: "Reconstruction & Repairs After Restoration | Metro Detroit",
    description: "We coordinate the full rebuild after water, mold, and fire mitigation in Metro Detroit: drywall, flooring, paint, and more. Call (313) 771-3673.",
    h1: "Reconstruction & Repairs After Restoration in Metro Detroit",
    summary: "After mitigation is complete, properties often need repairs ranging from drywall replacement and flooring installation to more significant structural work. We coordinate reconstruction and repair services for properties we've mitigated, helping streamline the path from damage to restored condition.",
    h2Intro: "The Rebuild Phase — What Happens After Mitigation",
    listHeading: "Reconstruction Services We Coordinate",
    steps: [
      { title: "Scope Development" }, { title: "Insurance Coordination" }, { title: "Repair Coordination" },
      { title: "Interior Restoration" }, { title: "Quality Review" }, { title: "Project Close-Out" },
    ],
    h2Urgency: "Why Rebuild Coordination Matters",
    h2Docs: "Documentation Support for Reconstruction & Repair Claims",
    related: ["water-damage-restoration", "fire-smoke-damage", "mold-remediation"],
    h2Cta: "Need Reconstruction & Repairs After Restoration in Metro Detroit?",
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
