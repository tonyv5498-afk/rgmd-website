// Company-wide facts. Change a value here and it updates on every page.

export const SITE = {
  name: "Restoration Group of Metro Detroit",
  shortName: "RGMD",
  url: "https://metrodetroitrestoration.com",
  phone: "(313) 771-3673",
  phoneHref: "tel:+13137713673",
  email: "info@metrodetroitrestoration.com",
  counties: ["Wayne", "Oakland", "Macomb", "Livingston", "Washtenaw"],
  hours: "Open 24 hours, 7 days a week",
  // Homepage counters. Set a value to null to hide that counter.
  stats: {
    yearsExperience: 15 as number | null,
    projectsCompleted: 1000 as number | null,
    googleRating: 4.8 as number | null,
  },
  // TODO(Tony): confirm this list is current. It currently excludes
  // 48135 (Garden City), 48154 (Livonia) and 48240 (Redford).
  excludedZips: [
    "48101", "48124", "48125", "48126", "48127", "48146", "48207", "48224", "48225", "48236",
    "48021", "48066", "48067", "48069", "48071", "48072", "48082", "48089", "48092", "48135",
    "48138", "48152", "48154", "48174", "48180", "48183", "48184", "48185", "48186", "48192",
    "48195", "48210", "48219", "48221", "48223", "48227", "48228", "48235", "48237", "48239",
    "48240",
  ],
} as const;

export const AVAILABILITY_NOTE =
  "Serving select Metro Detroit communities. Availability may vary by ZIP code and project type.";

export const COVERAGE_DISCLAIMER =
  "We do not make coverage decisions or act as a public adjuster. Coverage is determined solely by the insurance carrier based on the policy terms. Our role is to provide accurate documentation of conditions and scope, invoicing exactly for services rendered.";

export const REVIEWS = [
  {
    quote:
      "In April my basement was flooded with water and sewage after heavy rains. [The RGMD team] arrived and pumped out the water in the basement and his crew removed water damaged [materials]…",
    author: "Gwendolyn M.",
    source: "Yelp",
    service: "Water Damage Restoration",
  },
  {
    quote:
      "We had an EXCELLENT experience with [the RGMD team]. They came out very quickly and fixed a mold issue in our attic. I am so grateful!! We even got a warranty to go with the service.",
    author: "Wren C.",
    source: "Google",
    service: "Mold Remediation",
  },
  {
    quote:
      "From the first contact I knew I had chosen the right company. He was professional, kind, informative and punctual. He took the time to explain the process in detail and put my mind at ease. When they came for treatment, his crew arrived on time, made sure to cover my carpets to keep them clean, and were fast and efficient. I would absolutely recommend [RGMD] to anyone needing mold remediation services.",
    author: "Beth M.",
    source: "BBB",
    service: "Commercial / Property Manager",
  },
];

export const HOME_FAQ = [
  {
    q: "How fast can you respond to water damage in Metro Detroit?",
    a: "We typically respond to water damage calls within 1–2 hours of first contact. When you call, you’ll speak directly with someone who can confirm availability for your location and project type, give you an honest assessment of timing, and get the process started immediately. We don’t route calls through a national dispatch center — you’re talking to the team that will actually show up.",
  },
  {
    q: "Do you work with insurance claims?",
    a: "Yes — we support the insurance process through thorough documentation. We photograph every affected area, log daily moisture readings, inventory all materials removed, and produce a written scope of the mitigation work. That documentation goes directly to you and your adjuster. We do not make coverage decisions, act as a public adjuster, or guarantee any claim outcome. Coverage is determined solely by your insurance carrier based on your policy terms.",
  },
  {
    q: "Do you handle basement flooding?",
    a: "Yes. Basement flooding from sump pump failure, heavy rain, sewage backup, and foundation seepage are among the most common jobs we handle across Metro Detroit. We extract standing water, remove saturated materials when necessary, place drying equipment, and document the full scope for insurance purposes. Service is subject to availability by ZIP code and project type — contact us with your address to confirm.",
  },
  {
    q: "Can you help with mold after water damage?",
    a: "Yes. Mold can begin developing within 24–72 hours of a water intrusion if moisture isn’t properly addressed. If mold is present or suspected following water damage, we assess the affected areas, establish containment, remove compromised materials, treat surfaces with appropriate antimicrobial agents, and document the remediation scope. Availability is for select Metro Detroit properties — contact us to confirm coverage for your location.",
  },
  {
    q: "Do you provide repairs after mitigation?",
    a: "Yes. Once mitigation is complete, we coordinate the repair and reconstruction phase — drywall replacement, flooring installation, painting, trim, and related work — to return the property to pre-loss condition. Repair coordination is handled as a separate scope from mitigation. Coverage for repair work is determined by your insurance policy and carrier.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve select communities across Wayne, Oakland, Macomb, Livingston, and Washtenaw Counties in Metro Detroit. Service availability varies by ZIP code, project type, and scheduling. We do not service all Metro Detroit ZIP codes — a full list of excluded ZIP codes is available on our service area page. Contact us with your property address to confirm availability before scheduling.",
  },
  {
    q: "What should I do first after discovering water damage?",
    a: "Act fast — every hour matters. First, stop the source if it’s safe to do so. Second, turn off electricity to any affected areas if there’s a risk of contact with water. Third, move valuables, documents, electronics, and anything irreplaceable out of the wet area. Fourth, photograph everything before moving or removing anything — your own documentation matters. Fifth, call your insurance company to report the loss. Sixth, contact a restoration professional as quickly as possible. The sooner extraction and drying begin, the less secondary damage occurs. Our team of restoration experts is standing by and available for a call 24/7/365 at (313) 771-3673.",
  },
];

export const WHY_US = [
  { title: "Operator-Led Response", body: "When you call, you're dealing with someone who understands the work — not a dispatcher routing your job to an unknown subcontractor." },
  { title: "Clear Communication", body: "We keep you informed from initial assessment through project completion. No surprise scope changes, no unexplained delays." },
  { title: "Mitigation-First Approach", body: "We focus on stopping damage, drying the structure properly, and documenting the process — not on upselling unnecessary services." },
  { title: "Documentation-Focused", body: "Detailed photos, moisture logs, and scope notes support your insurance claim and protect your property records." },
  { title: "Residential & Commercial", body: "We handle both residential homes and commercial properties, including multi-family, office, and retail restoration projects." },
  { title: "Repair Coordination", body: "We don't just mitigate and walk away. We help coordinate the repair and reconstruction phase to get your property back to normal." },
  { title: "We're From Here", body: "We know Metro Detroit properties — the older housing stock, the basement profiles, the weather patterns, the insurance landscape." },
  { title: "No-Pressure Approach", body: "We tell you what we see, explain your options, and let you make informed decisions. No high-pressure tactics or manufactured urgency." },
];

export const DOC_DELIVERABLES = [
  { title: "Photo Documentation", body: "Systematic photography of affected areas, materials, and damage extent at each stage of the process." },
  { title: "Moisture Readings & Logs", body: "Daily moisture measurements with dates, locations, and readings logged for the adjuster and property owner." },
  { title: "Affected Material Inventory", body: "Itemized documentation of materials removed, including quantities, locations, and conditions at time of removal." },
  { title: "Scope & Drying Reports", body: "Written scope of mitigation work completed, equipment used, drying timelines, and final moisture clearance documentation." },
  { title: "Adjuster Coordination", body: "We're available to walk adjusters through the scope and answer questions about the mitigation process and documentation." },
];

export const WATER_PROCESS = [
  { title: "Call or Submit a Request", body: "Reach us by phone or online form. We gather basic property and damage information to determine if we can assist and discuss next steps." },
  { title: "Inspection & Moisture Assessment", body: "We inspect affected areas with moisture meters and thermal imaging tools to map the extent of damage and identify hidden wet zones inside walls and flooring." },
  { title: "Water Extraction / Source Control", body: "Standing water is extracted using commercial-grade equipment. If the water source is still active, we coordinate source control before extraction begins." },
  { title: "Removal of Affected Materials", body: "Saturated drywall, insulation, flooring, and other non-salvageable materials are carefully removed to expose the structure and allow proper drying." },
  { title: "Drying Equipment & Dehumidification", body: "Commercial air movers and dehumidifiers are positioned to dry the structure efficiently. Equipment placement is based on moisture readings, not guesswork." },
  { title: "Monitoring & Documentation", body: "We monitor drying progress with daily readings and document moisture levels, equipment placement, and drying conditions throughout the process." },
  { title: "Insurance Claim Support", body: "We compile photos, moisture logs, affected material lists, and scope documentation to support your insurance claim. Coverage is determined by your carrier." },
  { title: "Repair & Reconstruction", body: "Once mitigation is complete, we help coordinate the repair and rebuild phase — drywall, flooring, paint, and related work — to return the property to pre-loss condition." },
];

export const COMMERCIAL_CLIENTS = [
  "Property managers & landlords",
  "Small businesses & offices",
  "Multi-family & apartment units",
  "Churches & nonprofits",
  "Retail & commercial spaces",
  "Light industrial properties",
];

export const WATER_SITUATIONS = [
  "Burst pipes", "Sump pump failures", "Basement flooding", "Appliance leaks", "Frozen pipes",
  "Roof leaks", "Sewage backups", "Wet drywall & insulation", "Saturated flooring", "Hidden moisture",
];
