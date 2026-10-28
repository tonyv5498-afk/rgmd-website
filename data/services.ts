// One entry per service page. `name` is the single label used in the menu,
// cards, links and schema, so the names can't drift apart again.
// Copy is carried over from the WordPress pages.

export type Step = { title: string; body?: string };

export type Service = {
  slug: string;
  name: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  summary: string; // card blurb, used on home and hub pages
  h2Intro: string;
  intro: string[];
  listHeading: string;
  list: string[];
  processHeading?: string;
  processIntro: string;
  steps: Step[];
  eyebrowUrgency?: string;
  h2Urgency: string;
  urgency: string[];
  urgencyList: string[];
  h2Docs: string;
  docs: string[];
  related: string[];
  h2Cta: string;
  ctaText?: string;
};

const STD_DOCS = [
  "When you file a claim, your insurance carrier relies on documentation to evaluate scope and determine coverage. We photograph every affected area, log daily readings, inventory all materials removed, and produce a written scope that follows the job from start to finish. Everything is organized and ready for your adjuster.",
];

const CTA_START = "Call now or submit a service request. We’ll confirm availability for your property address and get the process started.";

export const SERVICES: Service[] = [
  {
    slug: "water-damage-restoration",
    name: "Water Damage Restoration",
    title: "Water Damage Restoration in Metro Detroit",
    description: "Professional water extraction, structural drying, and insurance documentation for water damage in Metro Detroit homes and businesses. Call (313) 771-3673.",
    eyebrow: "Water Damage Services",
    h1: "Water Damage Restoration in Metro Detroit",
    lede: "Professional water extraction, structural drying, moisture documentation, and full reconstruction coordination for homes, businesses, and rental properties across select Metro Detroit communities.",
    summary: "Water damage moves fast. Whether it's a burst pipe, appliance failure, or roof leak, our team responds with professional extraction equipment and moisture assessment tools to stop secondary damage before it spreads. We document affected areas, establish a drying plan, and monitor the process from extraction through final dry-out.",
    h2Intro: "What Is Water Damage Restoration?",
    intro: [
      "Water damage restoration is the process of extracting water, drying the affected structure, removing damaged materials, and returning a property to its pre-loss condition. It is not simply mopping up water — when water enters a structure, it moves into wall cavities, under flooring, and into insulation within hours. Without professional extraction and drying equipment, moisture remains hidden and creates conditions for mold growth, structural weakening, and odor.",
      "Restoration Group of Metro Detroit responds to all types of residential and commercial water intrusion across select Metro Detroit communities. We arrive with commercial-grade extraction equipment, moisture meters, and thermal imaging tools to assess the full extent of damage — including areas not visible to the eye. Every job is documented from first contact through final dry-out.",
    ],
    listHeading: "Common Water Damage Situations We Handle",
    list: [
      "Burst and frozen pipes", "Sump pump failures", "Basement flooding from heavy rain",
      "Appliance leaks — dishwashers, washing machines, refrigerators", "Roof leaks and storm-driven water intrusion",
      "Sewage backups and category 3 water", "Wet drywall, insulation, and subfloor",
      "Saturated flooring — hardwood, carpet, laminate", "Hidden moisture behind walls and under slabs",
      "Secondary damage from unresolved prior water events",
    ],
    processHeading: "Our Water Damage Restoration Process",
    processIntro: "A structured, documented approach from first call through project completion. Every step is logged — for your protection and for your insurance carrier.",
    steps: [
      { title: "Call or Submit a Request", body: "Reach us by phone or online form. We confirm availability for your location, gather damage details, and discuss next steps immediately." },
      { title: "Inspection & Moisture Assessment", body: "We inspect all affected areas using moisture meters and thermal imaging to map the full extent of damage — including hidden wet zones inside walls and under flooring." },
      { title: "Water Extraction / Source Control", body: "Standing water is extracted using commercial submersible pumps and wet vacuums. If the source is still active, we coordinate control before extraction begins." },
      { title: "Removal of Affected Materials", body: "Saturated drywall, insulation, flooring, and non-salvageable materials are carefully removed to expose the structure and allow proper drying." },
      { title: "Drying Equipment & Dehumidification", body: "Commercial air movers and dehumidifiers are placed based on moisture readings. Equipment positioning is calculated — not guessed." },
      { title: "Monitoring & Documentation", body: "Daily moisture readings are logged with dates, locations, and readings. Drying conditions and equipment placement are documented throughout." },
      { title: "Insurance Claim Support", body: "We compile photos, moisture logs, affected material inventories, and a written scope of mitigation work for your insurance carrier and adjuster." },
      { title: "Repair & Reconstruction Coordination", body: "Once mitigation is complete, we coordinate the repair phase — drywall, flooring, paint — to return the property to pre-loss condition." },
      { title: "Restored", body: "Mitigation is complete, materials are repaired, and your property has been returned to pre-loss condition. We confirm final moisture clearance, close out documentation, and ensure everything is in order before the job is marked complete." },
    ],
    h2Urgency: "Water Damage Gets Worse Every Minute",
    urgency: [
      "Water doesn’t stop moving once it enters a structure. Within hours, moisture migrates into wall cavities, subfloor, and insulation — creating conditions for mold growth, structural weakening, and odor that compounds the original loss. What starts as a manageable water call can become a mold remediation job within 24–72 hours if extraction and drying don’t begin promptly.",
      "Fast extraction and proper drying aren’t optional steps — they’re the difference between a contained claim and a major rebuild. We respond quickly, assess accurately, and start mitigation before secondary damage turns a water call into something significantly more expensive. Our team is trained in identifying damage extent immediately upon arrival and in taking necessary steps to stop damage in its tracks.",
    ],
    urgencyList: [
      "Mold can begin developing within 24–72 hours of water intrusion", "Wet drywall and insulation lose structural integrity quickly",
      "Hidden moisture causes long-term odor and air quality issues", "Delayed response significantly increases total claim cost",
    ],
    h2Docs: "Documentation Support for Water Damage Claims",
    docs: [
      "When you file a water damage claim, your insurance carrier relies on documentation to evaluate scope, validate losses, and determine coverage. We photograph every affected area at each stage of the process, log daily moisture readings with dates and locations, inventory all materials removed, and produce a written scope that follows the job from extraction through dry-out.",
      "Everything we compile is organized and ready to hand off to your adjuster — so your claim has the documentation it needs to move forward accurately and efficiently.",
    ],
    related: ["sump-pump-failure", "mold-remediation", "reconstruction-repairs"],
    h2Cta: "Need Water Damage Restoration in Metro Detroit?",
  },
  {
    slug: "emergency-water-removal",
    name: "Emergency Water Removal",
    title: "Emergency Water Removal in Metro Detroit",
    description: "Active flooding requires immediate response. Commercial extraction, moisture mapping, and emergency drying in Metro Detroit. Call (313) 771-3673.",
    eyebrow: "Emergency Water Services",
    h1: "Emergency Water Removal in Metro Detroit",
    lede: "Immediate water extraction, moisture mapping, and emergency drying response for active water intrusion in residential and commercial properties across select Metro Detroit communities.",
    summary: "When water is actively entering a property, time is the critical variable. Standing water causes structural saturation, flooring damage, and conditions for mold growth within hours. Our emergency response includes submersible pump extraction, wet vacuuming, and rapid moisture mapping to identify hidden pockets of water inside walls and under flooring.",
    h2Intro: "When Water Is Actively Entering Your Property",
    intro: [
      "Emergency water removal is the first and most critical step when water is actively entering or has just entered a property. Every minute standing water remains, it moves further into the structure — saturating wall cavities, wicking into flooring systems, and creating conditions for mold growth within 24–72 hours. The goal of emergency water removal is not just to pump out visible water, but to extract moisture from every affected surface before secondary damage takes hold.",
      "We respond with commercial submersible pumps, truck-mounted extraction units, and wet vacuums. Once visible water is removed, we deploy moisture meters and thermal imaging to map hidden moisture inside walls, under flooring, and in ceiling assemblies. Nothing is assumed dry until the readings confirm it.",
    ],
    listHeading: "Situations That Require Emergency Water Removal",
    list: [
      "Active basement flooding from heavy rain or sump failure", "Burst or frozen pipe with ongoing water flow",
      "Appliance failure — dishwasher, water heater, washing machine overflow", "Sewage backup or category 3 water intrusion",
      "Roof failure with active interior water entry", "Sprinkler system discharge or HVAC condensate overflow",
      "Any situation with standing water on finished surfaces",
    ],
    processIntro: "Fast, systematic extraction followed by immediate drying setup to stop damage before it spreads.",
    steps: [
      { title: "Initial Contact & Dispatch", body: "Call or submit a form. We confirm availability, gather damage details, and dispatch immediately." },
      { title: "Damage Assessment", body: "We assess the property with moisture meters and thermal imaging before and during extraction." },
      { title: "Primary Water Extraction", body: "Commercial pumps and wet vacuums remove all standing and surface water from affected areas." },
      { title: "Hidden Moisture Mapping", body: "Thermal imaging identifies moisture inside walls, under floors, and in ceiling assemblies." },
      { title: "Emergency Drying Setup", body: "Air movers and dehumidifiers are placed immediately to begin structural drying." },
      { title: "Documentation & Next Steps", body: "Conditions are photographed and logged. We outline the full drying and mitigation plan." },
    ],
    h2Urgency: "Active Water Intrusion Requires Immediate Response",
    urgency: [
      "The window between water entry and permanent structural damage is narrow. Once water saturates drywall and insulation, those materials typically cannot be dried in place — they must be removed. Once moisture reaches wood framing and subfloor, the risk of mold and structural compromise increases significantly.",
      "Emergency water removal is the intervention that separates a manageable claim from an expensive rebuild. The faster extraction begins, the smaller the affected area, the lower the total cost, and the shorter the overall restoration timeline.",
    ],
    urgencyList: [
      "Mold growth can begin within 24–72 hours of water intrusion", "Saturated drywall and insulation require removal, not just drying",
      "Hidden moisture causes long-term odor, air quality, and structural issues", "Fast response directly reduces total claim cost and project scope",
    ],
    h2Docs: "Documentation Support for Water Damage Claims",
    docs: STD_DOCS,
    related: ["water-damage-restoration", "basement-flood-cleanup", "mold-remediation"],
    h2Cta: "Need Emergency Water Removal in Metro Detroit?",
  },
  {
    slug: "basement-flood-cleanup",
    name: "Basement Flood Cleanup",
    title: "Basement Flood Cleanup in Metro Detroit",
    description: "Basement flood cleanup in Metro Detroit: extraction, material removal, structural drying, and insurance documentation. Call (313) 771-3673.",
    eyebrow: "Basement Flooding",
    h1: "Basement Flood Cleanup in Metro Detroit",
    lede: "Systematic water extraction, contaminated material removal, structural drying, and insurance documentation for basement flooding from any source across select Metro Detroit communities.",
    summary: "Basement flooding from heavy rain, sump pump failure, or sewage backup requires systematic removal of water and affected materials. We handle water extraction, wet material removal, drying equipment placement, and dehumidification. We can also document conditions for insurance and coordinate repairs.",
    h2Intro: "Professional Basement Flood Cleanup",
    intro: [
      "Basement flooding is one of the most common property damage events in Metro Detroit — and one of the most mishandled. Many homeowners attempt to address it with shop vacs and fans, not realizing that moisture has already saturated drywall, insulation, flooring, and wood framing well beyond what’s visible. The result is a mold problem weeks later, or structural damage that compounds the original loss.",
      "Professional basement flood cleanup means more than removing standing water. It means assessing every affected material, removing what cannot be dried, placing commercial drying equipment in the right positions based on moisture readings, and monitoring the drying process daily until clearance is confirmed. Every job is documented for insurance purposes from start to finish.",
    ],
    listHeading: "Common Causes of Basement Flooding We Handle",
    list: [
      "Sump pump failure during heavy rain events", "Storm drain backup and municipal sewer overflow",
      "Foundation seepage and window well flooding", "Burst or frozen pipes in basement walls or ceiling",
      "Water heater and appliance failures", "Sewage backup — category 2 and category 3",
      "Roof drainage and gutter overflow into foundation", "Window and door seal failures during heavy rain",
    ],
    processIntro: "Systematic extraction, removal, and drying — documented at every stage for your insurance carrier.",
    steps: [
      { title: "Initial Assessment", body: "We confirm availability, assess the situation remotely, and dispatch with appropriate equipment." },
      { title: "Moisture Mapping", body: "Full moisture assessment of walls, flooring, framing, and contents before extraction begins." },
      { title: "Water Extraction", body: "Commercial pumps remove all standing water. Wet vacuums address surface saturation." },
      { title: "Material Removal", body: "Saturated drywall, insulation, flooring, and non-salvageable contents are removed and documented." },
      { title: "Drying Equipment Setup", body: "Air movers and dehumidifiers positioned based on readings — not standard placement assumptions." },
      { title: "Daily Monitoring", body: "Moisture levels logged daily. Equipment adjusted as structure dries. Insurance documentation compiled." },
    ],
    h2Urgency: "Basement Flooding Gets Worse Fast",
    urgency: [
      "A wet basement isn’t just an inconvenience — it’s a race against secondary damage. Once water saturates the framing, drywall, and insulation of your basement, the clock starts on mold growth, structural weakening, and persistent odor. Finished basements are especially vulnerable because moisture hides behind drywall and under flooring long after the visible water is gone.",
      "The most expensive basement flood jobs we see are the ones that were partially addressed first — shop vacs, rental fans, and a few days of waiting. By the time a professional is called, mold is already establishing and more material has to come out. Fast, complete extraction and drying is always cheaper than delayed partial drying.",
    ],
    urgencyList: [
      "Finished basements trap moisture behind walls and under floors", "Mold can establish within 24–72 hours in a wet basement",
      "Partial drying with consumer equipment almost never achieves clearance", "Early professional response reduces total scope and claim cost",
    ],
    h2Docs: "Documentation Support for Basement Flood Claims",
    docs: STD_DOCS,
    related: ["sump-pump-failure", "water-damage-restoration", "mold-remediation"],
    h2Cta: "Need Basement Flood Cleanup in Metro Detroit?",
  },
  {
    slug: "sump-pump-failure",
    name: "Sump Pump Failure Cleanup",
    title: "Sump Pump Failure Cleanup in Metro Detroit",
    description: "Sump pump failed during a storm? Fast extraction, complete basement drying, and insurance documentation in Metro Detroit. Call (313) 771-3673.",
    eyebrow: "Sump Pump Failure",
    h1: "Sump Pump Failure Cleanup in Metro Detroit",
    lede: "Emergency extraction, structural drying, and full basement cleanup following sump pump failure during heavy rain events across select Metro Detroit communities.",
    summary: "Sump pump failures during heavy rain events are one of the most common causes of basement flooding in Metro Detroit. When your pump fails, water accumulates fast — saturating flooring, drywall, and stored contents within hours. We respond with emergency extraction, moisture mapping, and a full drying plan to stop secondary damage before it compounds the loss.",
    h2Intro: "What Happens When Your Sump Pump Fails",
    intro: [
      "Sump pump failures are one of the most common causes of basement flooding in Metro Detroit — and they almost always happen during the worst possible time: peak rain events when the pump is working hardest. When the pump fails, water accumulates in the pit and quickly overflows onto the basement floor, saturating flooring, drywall, insulation, and stored contents within hours.",
      "The source of the failure varies — power outage, mechanical failure, float switch malfunction, overwhelmed capacity, or a frozen or clogged discharge line. Regardless of cause, the damage response is the same: fast extraction, complete moisture assessment, removal of affected materials, drying equipment, and documentation. We handle the cleanup — the pump repair or replacement is a plumber’s job, and we can help coordinate that as well.",
    ],
    listHeading: "Signs Your Sump Pump Has Failed",
    list: [
      "Standing water in the basement during or after heavy rain", "Pump running continuously without reducing water level",
      "Pump not turning on despite rising water in the pit", "Strange noises or burning smell from the pump unit",
      "Power outage during storm with no battery backup", "Visible water around the perimeter walls",
      "Musty odor developing days after a rain event — hidden moisture",
    ],
    processIntro: "Fast extraction and complete drying — documented for insurance from the moment we arrive.",
    steps: [
      { title: "Emergency Dispatch", body: "We confirm availability and dispatch immediately with commercial extraction equipment." },
      { title: "Source Assessment", body: "We assess pump failure cause, coordinate plumber referral if needed, and begin damage mapping." },
      { title: "Full Water Extraction", body: "Standing water removed with commercial pumps. All surface saturation addressed with wet vacuums." },
      { title: "Moisture Mapping", body: "Thermal imaging and moisture meters identify all hidden wet areas before drying begins." },
      { title: "Material Removal", body: "Saturated flooring, drywall, and insulation removed where necessary to allow proper structural drying." },
      { title: "Drying & Documentation", body: "Equipment placed based on readings. Daily moisture logs compiled for insurance documentation." },
    ],
    h2Urgency: "Sump Pump Failure During a Storm — Every Minute Counts",
    urgency: [
      "Unlike a slow leak that gives you time to react, sump pump failure during an active rain event can put several inches of water in your basement in under an hour. The faster you call, the less material absorbs that water, and the less has to be removed.",
      "Homeowners who wait until the storm passes or until the next day to call often find that what would have been a straightforward extraction job has become a full demolition and drying project. The water doesn’t stop moving just because you’ve stopped watching it.",
    ],
    urgencyList: [
      "Water accumulates fast during peak rain events", "Every hour of delay means more material absorbs moisture",
      "Hidden moisture in walls and under floors causes long-term damage", "Fast response is the single biggest factor in limiting total claim cost",
    ],
    h2Docs: "Documentation Support for Sump Pump Failure Claims",
    docs: STD_DOCS,
    related: ["basement-flood-cleanup", "water-damage-restoration", "mold-remediation"],
    h2Cta: "Need Sump Pump Failure Cleanup in Metro Detroit?",
    ctaText: CTA_START,
  },
  {
    slug: "sewage-cleanup",
    name: "Category 3 Sewage Cleanup",
    title: "Category 3 Sewage Cleanup in Metro Detroit",
    description: "Sewage backup cleanup in Metro Detroit: containment, biohazard removal, antimicrobial treatment, and full insurance documentation. Call (313) 771-3673.",
    eyebrow: "Sewage Cleanup",
    h1: "Category 3 Sewage Cleanup in Metro Detroit",
    lede: "Professional containment, extraction, biohazard removal, antimicrobial treatment, and full documentation for sewage backup events in residential and commercial properties across select Metro Detroit communities.",
    summary: "Sewage backups introduce contaminated black water into your property — a serious health hazard that requires immediate professional response. We contain the affected area, remove contaminated materials, treat surfaces with appropriate antimicrobial agents, and document the full scope of work for your insurance carrier. Category 3 water intrusion is not a DIY situation.",
    h2Intro: "Why Sewage Backup Requires Professional Response",
    intro: [
      "Sewage backup is classified as Category 3 water — the most contaminated category of water intrusion. Unlike clean water from a burst pipe, sewage contains bacteria, pathogens, and biohazard material that presents a serious health risk and cannot be safely addressed with standard cleanup methods. Every surface the water contacted — flooring, drywall, framing, contents — is considered contaminated until proven otherwise.",
      "Category 3 cleanup is not a DIY situation. Improper handling spreads contamination, and inadequate treatment leaves pathogens behind inside walls and under flooring. We follow proper containment procedures, use appropriate personal protective equipment, remove all contaminated materials, treat surfaces with EPA-registered antimicrobial agents, and document the full scope of work for your insurance carrier.",
    ],
    listHeading: "Common Causes of Sewage Backup",
    list: [
      "Municipal sewer line backup during heavy rain events", "Clogged or obstructed main drain line",
      "Tree root intrusion in sewer lateral", "Aging or failed cast iron sewer pipes",
      "Grease and debris accumulation in drain lines", "Sump pit sewage intrusion",
      "Toilet overflow — extended or undetected", "Floor drain backup in basement or utility room",
    ],
    processIntro: "Contaminated material handled properly — contained, removed, treated, and documented.",
    steps: [
      { title: "Emergency Dispatch", body: "Immediate response confirmed. We dispatch with appropriate PPE and containment equipment." },
      { title: "Containment Setup", body: "Affected area is contained to prevent cross-contamination to unaffected areas of the property." },
      { title: "Sewage Extraction", body: "Contaminated water extracted with appropriate commercial equipment. No surface area overlooked." },
      { title: "Contaminated Material Removal", body: "All porous materials — flooring, drywall, insulation — in contact with sewage are removed." },
      { title: "Antimicrobial Treatment", body: "EPA-registered antimicrobial agents applied to all affected surfaces. Treated and documented." },
      { title: "Documentation & Clearance", body: "Full scope documented for insurance. Drying equipment placed. Clearance confirmed before close-out." },
    ],
    h2Urgency: "Category 3 Water — Act Immediately",
    urgency: [
      "Sewage backup is a health emergency, not just a property damage event. The pathogens present in category 3 water can cause serious illness, and contamination spreads quickly as water wicks into porous materials. The longer sewage remains in contact with flooring, drywall, and framing, the more material has to be removed.",
      "Attempting to clean up sewage backup without proper equipment, PPE, and antimicrobial treatment is dangerous and ineffective. It also creates documentation problems for your insurance claim. Professional response protects your health, limits material loss, and ensures your claim has the documentation it needs.",
    ],
    urgencyList: [
      "Category 3 water contains bacteria and pathogens — health risk", "All porous materials in contact with sewage must be removed",
      "Improper cleanup leaves contamination inside walls and under floors", "Insurance carriers require documented professional remediation for sewage claims",
    ],
    h2Docs: "Documentation Support for Sewage Backup Claims",
    docs: STD_DOCS,
    related: ["basement-flood-cleanup", "mold-remediation", "water-damage-restoration"],
    h2Cta: "Need Sewage Cleanup in Metro Detroit?",
    ctaText: CTA_START,
  },
  {
    slug: "pipe-burst-cleanup",
    name: "Pipe Burst Cleanup",
    title: "Pipe Burst Cleanup in Metro Detroit",
    description: "Burst or frozen pipe damage in Metro Detroit? We extract, detect hidden moisture, dry the structure, and document everything. Call (313) 771-3673.",
    eyebrow: "Pipe Burst Cleanup",
    h1: "Pipe Burst Cleanup in Metro Detroit",
    lede: "Emergency extraction, hidden moisture detection, structural drying, and full documentation for burst and frozen pipe water damage in homes and commercial properties across select Metro Detroit communities.",
    summary: "Burst pipes — especially from frozen lines in Michigan winters — can release hundreds of gallons into walls, ceilings, and floors before the source is even found. We locate the affected areas using moisture meters and thermal imaging, extract standing water, remove saturated materials, and establish a drying plan to get your structure back to dry standard as quickly as possible.",
    h2Intro: "Pipe Burst Water Damage — What You're Actually Dealing With",
    intro: [
      "Burst pipes — especially frozen pipes during Michigan winters — can discharge hundreds of gallons into walls, ceilings, and floors before the source is located and shut off. Unlike a basement flood that’s visible on the floor, pipe burst damage often happens inside wall cavities and ceiling assemblies, making the full extent of the damage invisible without professional moisture detection equipment.",
      "We locate all affected areas using moisture meters and thermal imaging, extract standing and absorbed water, remove saturated materials where necessary, and establish a drying plan based on actual readings. If the pipe hasn’t been repaired yet, we coordinate source control before extraction begins. Every step is documented for your insurance carrier.",
    ],
    listHeading: "Common Pipe Burst Situations We Handle",
    list: [
      "Frozen pipes in exterior walls, attics, and crawlspaces", "Supply line failures — sinks, toilets, washing machines, refrigerators",
      "Copper and galvanized pipe corrosion failure", "Water hammer damage to pipe joints and fittings",
      "Pressure-related failures in older plumbing systems", "Pipe joints separated during freeze-thaw cycles",
      "CPVC and PVC pipe failure in cold temperatures", "Hot water heater tank rupture or connection failure",
    ],
    processIntro: "Source control first, then systematic extraction, detection, and drying — all documented.",
    steps: [
      { title: "Emergency Dispatch", body: "We confirm availability and dispatch. If the pipe isn't shut off, we coordinate that first." },
      { title: "Source Control & Assessment", body: "Pipe source identified and controlled if active. Full moisture mapping begins immediately after." },
      { title: "Water Extraction", body: "Standing water extracted. Wet vacuums address surface saturation in all affected rooms." },
      { title: "Hidden Moisture Detection", body: "Thermal imaging and moisture meters locate all water inside walls, ceilings, and under floors." },
      { title: "Material Removal", body: "Saturated drywall, insulation, and flooring removed to expose structure for complete drying." },
      { title: "Drying & Documentation", body: "Air movers and dehumidifiers placed by reading. Daily moisture logs compiled through clearance." },
    ],
    h2Urgency: "Hidden Water Is the Real Danger With Pipe Bursts",
    urgency: [
      "The water you can see on the floor is often the smallest part of the problem with a burst pipe. Water travels through wall cavities, along framing, and under flooring systems — sometimes moving 20 or 30 feet from the source before it appears. Without thermal imaging and moisture meters, affected areas are missed, left wet, and develop mold weeks later.",
      "Many pipe burst jobs we respond to were partially dried by the homeowner first. Shop vacs and box fans dry the surface but leave the structure wet. By the time a professional is called, mold is present and more material has to come out than if we’d been called immediately. Early professional response is always cheaper.",
    ],
    urgencyList: [
      "Pipe burst water travels inside walls and ceilings — often far from the visible damage", "Hidden moisture is only reliably detected with thermal imaging and moisture meters",
      "Partial drying with consumer equipment leaves structure wet and mold-prone", "Michigan winter pipe bursts often affect multiple floors simultaneously",
    ],
    h2Docs: "Documentation Support for Pipe Burst Claims",
    docs: STD_DOCS,
    related: ["water-damage-restoration", "emergency-water-removal", "reconstruction-repairs"],
    h2Cta: "Need Pipe Burst Cleanup in Metro Detroit?",
    ctaText: CTA_START,
  },
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    title: "Mold Remediation in Metro Detroit",
    description: "Mold remediation in Metro Detroit: containment, removal, antimicrobial treatment, and clearance documentation for homes and businesses. Call (313) 771-3673.",
    eyebrow: "Mold Remediation",
    h1: "Mold Remediation in Metro Detroit",
    lede: "Professional containment, removal, antimicrobial treatment, and documentation for mold growth in residential and commercial properties across select Metro Detroit communities.",
    summary: "Mold growth typically follows unresolved moisture intrusion. Our remediation process includes containment, removal of affected materials, treatment of surfaces, and final clearance steps. We follow industry-standard protocols and document the scope of work for insurance and property records.",
    h2Intro: "What Mold Remediation Actually Involves",
    intro: [
      "Mold remediation is the process of safely containing, removing, and treating mold growth in a structure. It is not surface cleaning or painting over discoloration — it is the systematic removal of mold-affected materials, treatment of underlying surfaces with EPA-registered antimicrobial agents, and verification that the affected area has been returned to an acceptable condition. Done correctly, it also addresses the moisture source that allowed mold to develop in the first place.",
      "Mold growth in Metro Detroit properties is almost always the result of unresolved or inadequately addressed water intrusion — basement flooding, pipe leaks, roof water entry, or condensation issues. Treating the mold without addressing the moisture source means the mold returns. We assess moisture conditions as part of every remediation, document everything for insurance purposes, and coordinate with third-party testing when appropriate.",
    ],
    listHeading: "Common Situations That Lead to Mold Growth",
    list: [
      "Water damage that was not fully dried within 24–72 hours", "Basement flooding — even when water was removed quickly",
      "Slow roof or window leaks with repeated moisture exposure", "Crawlspace moisture and ground vapor intrusion",
      "HVAC condensation issues and duct leaks", "Bathroom and kitchen moisture with inadequate ventilation",
      "Finished basement walls concealing moisture-laden framing", "Attic moisture from inadequate ventilation or ice damming",
    ],
    processIntro: "Containment, removal, treatment, and verification — following industry-standard remediation protocols.",
    steps: [
      { title: "Moisture & Mold Assessment", body: "We assess affected areas, identify moisture sources, and determine the scope of remediation needed." },
      { title: "Containment Setup", body: "Affected area contained with poly barriers and negative air pressure to prevent spore migration." },
      { title: "Removal of Affected Materials", body: "Mold-compromised drywall, insulation, and framing removed and disposed of properly." },
      { title: "Antimicrobial Treatment", body: "All treated surfaces receive EPA-registered antimicrobial application. Documented with photos." },
      { title: "HEPA Air Filtration", body: "HEPA air scrubbers run during and after remediation to capture airborne spores." },
      { title: "Documentation & Clearance", body: "Full scope of work documented. Clearance testing coordinated when required by carrier or protocol." },
    ],
    h2Urgency: "Mold Doesn't Stop Growing on Its Own",
    urgency: [
      "Once mold establishes in a structure, it spreads. Spores migrate through air movement into adjacent areas, and the colony expands as long as moisture and organic material are available. A small mold spot behind drywall today can be a significant remediation project in 30 days.",
      "Mold also affects air quality throughout the property — not just in the immediate area of growth. If you can smell mold, spores are already present in the air you’re breathing. Early remediation limits scope, cost, and exposure. Waiting makes all three worse.",
    ],
    urgencyList: [
      "Mold spreads via airborne spores — containment prevents cross-contamination", "Active mold growth continues as long as moisture is present",
      "Mold affects air quality throughout the property, not just in the growth area", "Insurance carriers require documented professional remediation — not DIY cleanup",
    ],
    h2Docs: "Documentation Support for Mold Remediation Claims",
    docs: STD_DOCS,
    related: ["water-damage-restoration", "basement-flood-cleanup", "reconstruction-repairs"],
    h2Cta: "Need Mold Remediation in Metro Detroit?",
    ctaText: "Call now or submit a service request and we’ll confirm availability for your home or business.",
  },
  {
    slug: "fire-smoke-damage",
    name: "Fire, Smoke & Odor Damage",
    title: "Fire, Smoke & Odor Damage Restoration in Metro Detroit",
    description: "Fire, smoke, and odor restoration in Metro Detroit: debris removal, soot cleanup, odor elimination, and reconstruction coordination. Call (313) 771-3673.",
    eyebrow: "Fire & Smoke Damage",
    h1: "Fire, Smoke & Odor Damage Restoration in Metro Detroit",
    lede: "Professional debris removal, smoke and soot cleanup, odor elimination, contents evaluation, and reconstruction coordination for fire-damaged properties across select Metro Detroit communities.",
    summary: "Fire damage includes structural damage and pervasive smoke and soot contamination that can affect areas well beyond the fire's origin. Our team addresses debris removal, smoke odor mitigation, soot cleaning, and content evaluation, coordinating with insurers and contractors.",
    h2Intro: "What Fire and Smoke Damage Actually Involves",
    intro: [
      "Fire damage is not limited to the area that burned. Smoke travels throughout a structure within minutes, depositing soot on walls, ceilings, contents, and inside HVAC systems — often in rooms far from the fire’s origin. Smoke residue is acidic and continues to cause damage to surfaces after the fire is out. Odor from smoke and combustion byproducts penetrates porous materials deeply and requires professional treatment to eliminate, not just mask.",
      "Restoration Group of Metro Detroit handles the full scope of fire and smoke damage response — from initial board-up and debris removal through smoke odor mitigation, soot cleaning, contents evaluation, and reconstruction coordination. Every step is documented for your insurance adjuster, and we work to present an accurate, organized claim package that reflects the true scope of the loss.",
    ],
    listHeading: "What We Address in Fire & Smoke Damage Jobs",
    list: [
      "Structural fire damage — burned framing, floors, and assemblies", "Smoke and soot contamination beyond the fire area",
      "Odor penetration in walls, insulation, HVAC, and contents", "Water damage from fire suppression — sprinklers and fire department hoses",
      "Char and combustion residue on all surfaces", "Contents evaluation — salvageable vs. non-salvageable",
      "HVAC contamination from smoke and soot circulation", "Board-up and property securing after fire department clearance",
    ],
    processIntro: "Systematic debris removal, soot cleanup, odor treatment, and documentation — start to finish.",
    steps: [
      { title: "Initial Response & Board-Up", body: "Property secured after fire department clearance. Emergency board-up and tarping coordinated." },
      { title: "Damage Assessment", body: "Full scope assessment — structural, smoke, soot, water, odor, and contents. Photos document everything." },
      { title: "Debris Removal", body: "Burned materials, char, and non-salvageable contents removed and documented for insurance." },
      { title: "Soot & Smoke Cleaning", body: "Soot removed from all affected surfaces using appropriate cleaning methods per material type." },
      { title: "Odor Mitigation", body: "Smoke odor treated in affected areas. Porous materials assessed for saturation and treatment need." },
      { title: "Reconstruction Coordination", body: "Once mitigation is complete, repair and rebuild phase coordinated to return property to pre-loss condition." },
    ],
    h2Urgency: "Smoke Damage Continues After the Fire Is Out",
    urgency: [
      "Many property owners don’t realize that smoke and soot residue causes ongoing damage to surfaces after the fire is extinguished. The longer soot sits, the more it etches metals, discolors walls, and becomes permanently embedded in porous materials.",
      "Smoke odor is similarly persistent. It penetrates drywall, insulation, wood framing, and fabric at a molecular level. Surface cleaning doesn’t eliminate it — proper treatment requires appropriate agents and methods based on the specific materials affected. Early response limits permanent damage and reduces total restoration cost.",
    ],
    urgencyList: [
      "Soot is acidic and causes ongoing surface damage after the fire", "Smoke penetrates deeply into porous materials — walls, insulation, HVAC",
      "Odor from smoke requires professional treatment, not masking", "Early response prevents soot from permanently bonding to surfaces",
    ],
    h2Docs: "Documentation Support for Fire and Smoke Damage Claims",
    docs: STD_DOCS,
    related: ["reconstruction-repairs", "water-damage-restoration", "mold-remediation"],
    h2Cta: "Need Fire & Smoke Damage Restoration in Metro Detroit?",
  },
  {
    slug: "reconstruction-repairs",
    name: "Reconstruction & Repairs",
    title: "Reconstruction & Repairs After Restoration | Metro Detroit",
    description: "We coordinate the full rebuild after water, mold, and fire mitigation in Metro Detroit: drywall, flooring, paint, and more. Call (313) 771-3673.",
    eyebrow: "Post-Mitigation Reconstruction",
    h1: "Reconstruction & Repairs After Restoration in Metro Detroit",
    lede: "Full repair and rebuild coordination following water, mold, fire, and smoke mitigation — returning residential and commercial properties to pre-loss condition across select Metro Detroit communities.",
    summary: "After mitigation is complete, properties often need repairs ranging from drywall replacement and flooring installation to more significant structural work. We coordinate reconstruction and repair services for properties we've mitigated, helping streamline the path from damage to restored condition.",
    h2Intro: "The Rebuild Phase — What Happens After Mitigation",
    intro: [
      "Mitigation addresses the damage and stops it from spreading — extraction, drying, mold removal, smoke cleanup. But once the structure is dry and cleared, the property still needs to be put back together. Drywall was removed. Flooring was torn out. Insulation was replaced. Paint needs to match. That’s the reconstruction phase, and it’s where many restoration companies leave property owners on their own to find a contractor.",
      "Restoration Group of Metro Detroit coordinates the repair and reconstruction phase for properties we’ve mitigated. We don’t hand you a dry structure and a folder of paperwork and wish you luck — we stay involved through the rebuild to make sure the scope is completed correctly, the insurance documentation supports the repair claim, and the property is actually returned to pre-loss condition.",
    ],
    listHeading: "Reconstruction Services We Coordinate",
    list: [
      "Drywall installation, taping, mudding, and finishing", "Insulation replacement — batts, blown-in, and spray foam",
      "Flooring installation — hardwood, LVP, carpet, tile", "Interior painting and texture matching",
      "Trim, baseboard, and door casing replacement", "Ceiling repair and texture restoration",
      "Kitchen and bathroom fixture reinstallation after water damage", "Structural framing repair following fire or severe water damage",
    ],
    processIntro: "Coordinated repair and rebuild — with the same documentation discipline we apply to mitigation.",
    steps: [
      { title: "Scope Development", body: "We develop a detailed repair scope based on the mitigation documentation and adjuster review." },
      { title: "Insurance Coordination", body: "Repair scope submitted to carrier. We support the adjuster review process with documentation." },
      { title: "Repair Coordination", body: "Qualified contractors scheduled. Work coordinated to match original materials and finishes where possible." },
      { title: "Interior Restoration", body: "Drywall, insulation, flooring, paint, trim, and finishes restored to pre-loss condition." },
      { title: "Quality Review", body: "Completed work reviewed against scope. Any deficiencies identified and addressed before close-out." },
      { title: "Project Close-Out", body: "Final documentation compiled. Property returned to pre-loss condition and confirmed complete." },
    ],
    eyebrowUrgency: "One Contractor — Start to Finish",
    h2Urgency: "Why Rebuild Coordination Matters",
    urgency: [
      "The biggest frustration property owners face after a loss is the gap between mitigation complete and repairs started. Finding a contractor, getting quotes, managing the insurance supplement for repairs, and coordinating timelines — all of this falls on the property owner at an already stressful time. We eliminate that gap.",
      "Because we handled the mitigation, we have the documentation, the scope, and the relationship with the adjuster already in place. The transition to repairs is coordinated, not handed off. That means less stress, fewer delays, and a property that actually gets finished — not one that sits with open walls for months waiting for a repair contractor to be lined up.",
    ],
    urgencyList: [
      "We hold the documentation from mitigation through reconstruction", "No gap between dry structure and rebuild start",
      "Insurance supplement for repairs coordinated with existing claim documentation", "One point of contact from first call through final walkthrough",
    ],
    h2Docs: "Documentation Support for Reconstruction & Repair Claims",
    docs: STD_DOCS,
    related: ["water-damage-restoration", "fire-smoke-damage", "mold-remediation"],
    h2Cta: "Need Reconstruction & Repairs After Restoration in Metro Detroit?",
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
