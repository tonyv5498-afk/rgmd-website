// Company-wide facts. Change a value here and it updates on every page.

export const SITE = {
  name: "Restoration Group of Metro Detroit",
  shortName: "RGMD",
  url: "https://www.restorationgroupmd.com",
  phone: "(313) 771-3673",
  phoneHref: "tel:+13137713673",
  email: "info@restorationgroupmd.com",
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
      "Seen the work they completed in my sister’s room. They cleaned it up really good after she had a three day flood. She wanted to avoid any possible mold and they did a really good job of doing that for the room. Only took an hour to get it done. Great job Tony!",
    author: "Deija C.",
    source: "Google",
    service: "Flood Cleanup",
  },
  {
    quote:
      "I have been dealing with contractors for nine months and have often felt frustrated by their lack of transparency. However, when Tony came to my home to assess for mold, he was not only very professional but also completely honest. Honesty is key, people. I would recommend Tony to anyone who has concerns. Thank you Tony",
    author: "Bob B.",
    source: "Google",
    service: "Mold Assessment",
  },
  {
    quote:
      "A great, attentive company. They came out that week to give us an estimate and scheduled for the next week. They explained the process clearly. I got the results the very next week in an easy to read format. Highly recommended.",
    author: "Paula L.",
    source: "Google",
    service: "Inspection & Testing",
  },
  {
    quote:
      "Thank you Tony & Matt for taking care of the slight mold problem in my attic. I called them and they were out the same day to test the attic. They laid out their plan and explained everything so I could understand what was going on. Very professional, fair price and just super guys! Thanks again!",
    author: "D. L.",
    source: "Google",
    service: "Attic Mold Remediation",
  },
  {
    quote: "Very detail oriented company! Great work as they prepared the job site and got rid of any mold and damage!",
    author: "Kassem E.",
    source: "Google",
    service: "Mold Remediation",
  },
  {
    quote: "…Professional, fast, and reliable service. Tony made the entire process seamless and stress-free. Highly recommend!",
    author: "Brian F.",
    source: "Google",
    service: "Restoration Project",
  },
  {
    quote:
      "Jeryl and Joe came to test my home and I was very pleased with their service. They were able to test and provide a yes or no result on the spot! I also liked that they covered their shoes when they entered my home and that Jeryl (I'm sorry if I'm spelling it wrong) was very thorough, conversational, and kind. I didn't have mold (thank goodness) but will definitely keep them in mind if I ever need service for this. They were great.",
    author: "Tee M.",
    source: "Google",
    service: "Mold Testing",
  },
  {
    quote:
      "Matt and Tony were a pleasure to work with. I was very impressed and will definitely recommend them to anyone I know who needs water removed, mold treated, etc. Great job!",
    author: "Aaron F.",
    source: "Google",
    service: "Water & Mold",
  },
  {
    quote:
      "Matt and Tony have been a pleasure to work with. Gerald responded to our home quickly and the process from beginning to end was seamless. They have been patient with my questions and fully explained every step of the way.",
    author: "Lauren O.",
    source: "Google",
    service: "Restoration Project",
  },
  {
    quote:
      "I highly recommend [Restoration Group] for their quick response to my emergency call. Matthew and Tony both demonstrated professionalism and efficiency throughout the process. They guided me step-by-step.",
    author: "Noe A.",
    source: "Google",
    service: "Emergency Response",
  },
  {
    quote: "Very prompt and professional service! Made me feel at ease",
    author: "Alison K.",
    source: "Google",
    service: "Restoration Project",
  },
  {
    quote: "We were very impressed with the work that [Restoration Group] did on our home. Gerald was prompt and a pleasure to work with. We are so thankful! Great work!",
    author: "Shelby H.",
    source: "Google",
    service: "Restoration Project",
  },
  {
    quote:
      "I couldn’t be happier with [Restoration Group]. They are prompt, professional, and thorough. They quickly assessed and walked me through what my project would entail. The communication was excellent, and they made the whole process smooth and stress-free. Highly recommend them for their expertise.",
    author: "Eran H.",
    source: "Google",
    service: "Restoration Project",
  },
  {
    quote: "Highly recommend! Everyone I’ve worked with has been very professional and so helpful.",
    author: "Joseph F.",
    source: "Google",
    service: "Restoration Project",
  },
  {
    quote: "Called [Restoration Group], ended up not needing restoration work but they were understanding and happy to refer me to get the help I needed. Great experience!",
    author: "Jacob D.",
    source: "Google",
    service: "Free Assessment & Referral",
  },
  {
    quote: "Used them recently. They did an excellent job and really explained every step to us. Very professional. Would recommend them.",
    author: "Susan G.",
    source: "Facebook",
    service: "Restoration Project",
  },
  {
    quote:
      "Very dedicated business, they answer right away and provide a very professional service. Gerald and his team were really supportive, understanding and kind. Highly recommend [Restoration Group]!!!",
    author: "Carolina D.",
    source: "Facebook",
    service: "Restoration Project",
  },
  {
    quote:
      "Matt and Tony were extremely responsive and informative for a much needed quick resolution for a small fire/smoke repair problem we had at our home. They responded within 30 minutes when we reached out, walked us through their process, offered options and quickly scheduled the service. Their service was fast and effective, and they answered all questions we had. The result has been exactly as we hoped and price was more than fair. We would highly recommend them to anyone needing this service.",
    author: "George R.",
    source: "Facebook",
    service: "Fire & Smoke Repair",
  },
  {
    quote:
      "Restoration Group of Metro Detroit was excellent. They were very prompt with a quote and were able to take care of our problem very quickly. I would recommend them to anybody in the area",
    author: "Joel B.",
    source: "Google",
    service: "Restoration Project",
  },
  {
    quote:
      "I couldn't be happier with Restoration Group of Metro Detroit. They not only do a great job, they follow through a full year after their work is completed to be sure that everything is okay. I highly recommend Tony, who is competent, polite, efficient and provides exceptional service.",
    author: "Christa G.",
    source: "Google",
    service: "Restoration Project",
  },
  {
    quote: "Great service from [Restoration Group]!! Would recommend!",
    author: "Matt J.",
    source: "BBB",
    service: "Restoration Project",
  },
  {
    quote: "Great service! Very fast, clean, and professional. And respectful workers!",
    author: "Hanen M.",
    source: "BBB",
    service: "Restoration Project",
  },
  {
    quote:
      "[Restoration Group] was able to test and remove the mold that was found in the crawlspace of a home I just purchased. They responded immediatly and made the process quick and seamless. Tony and the team could not have done a better job!!",
    author: "Kathrine A.",
    source: "BBB",
    service: "Crawlspace Mold Remediation",
  },
  {
    quote:
      "[Tony] and the team quickly assessed my flooding damage and were able to do a complete clean up and remodel in a matter of days 10/10 recommend [Restoration Group].",
    author: "Brian H.",
    source: "BBB",
    service: "Flood Cleanup & Remodel",
  },
  {
    quote:
      "My appraiser suspected mold in the attic. I called [Restoration Group] to see if they came to my area. They did and were out the next day. They did a free sample swipe for mold in my attic. A couple days later they were out within I believe an hour and half the spraying to get rid of it was done. They came back out to get theyre fan for the drying process. I got a green means clean no more mold test done again. Speedy and very informative. I recommend [Restoration Group] for your needs.",
    author: "Rhonda G.",
    source: "BBB",
    service: "Attic Mold Remediation",
  },
  {
    quote: "The team was extremely professional, quick to respond and understanding throughout the duration of our project. Thank you!!",
    author: "Melanie L.",
    source: "BBB",
    service: "Restoration Project",
  },
  {
    quote:
      "I had Tony come out to do an assessment after a plumbing service found potential issues in the wall. He was incredibly thorough and detailed and spent a lot of time trying to investigate if and where the pipes were still leaking to give me a honest answer. He had professional camera equipment that was better than other vendors I've used in the past and was able to visually show me where the problem was, and detail the next steps. Very dependable and trustworthy...highly recommended again!",
    author: "Cheryl D.",
    source: "Google",
    service: "Leak Assessment",
  },
  {
    quote:
      "I've worked with Tony and his crews on multiple homes and they are the best! On time, efficient, and left our properties cleaner than before they started! Highly recommend!",
    author: "Megan E.",
    source: "Google",
    service: "Repeat Client, Multiple Properties",
  },
  {
    quote:
      "We discovered a hidden water leak in our home and were getting absolutely nowhere with our insurance company. It felt like we were constantly getting the runaround, and nobody wanted to take our concerns seriously.\n\nThankfully, we got Restoration Group involved. Their team came out and performed a thorough inspection using thermal imaging cameras and moisture meters to identify and document the water damage that wasn’t even visible to the naked eye. They took detailed photos, gathered readings, and put together the documentation needed to support our claim.\n\nWhat really stood out was how they advocated for us. When our insurance carrier gave us the cold shoulder, they stepped up, communicated with the adjuster, and made sure our concerns weren’t ignored.",
    author: "Ashley L.",
    source: "",
    service: "Water Damage & Insurance Claim",
  },
  {
    quote:
      "Our basement flooded, and our insurance company initially only wanted to pay to have the carpet cleaned. We had a professional carpet cleaner come out, but even after the cleaning, there were still noticeable stains and a lingering smell. We knew the carpet wasn’t going to be the same, but we weren’t getting anywhere with our insurance company.\n\nThat’s when we reached out to Restoration Group. They came out, thoroughly inspected the damage, and documented everything to show why simply cleaning the carpet wasn’t enough. They worked with our insurance adjuster and helped us get the claim properly addressed.\n\nThanks to [Restoration Group]’s help, our insurance company ultimately approved replacing all of our basement carpet, padding, and baseboards instead of just cleaning the carpet!",
    author: "Barb O.",
    source: "",
    service: "Basement Flood & Insurance Claim",
  },
  {
    quote:
      "We had a major kitchen water damage loss, and our insurance company initially only approved around $21,000 for the repairs. We knew that amount wasn’t going to be enough to properly restore our kitchen.\n\nOnce we got Restoration Group involved, everything changed. Their team thoroughly assessed the damage, put together detailed estimates and supporting documentation, and worked directly with our insurance adjuster to make sure the full scope of repairs was accounted for.\n\nThanks to their knowledge and persistence, our insurance company ended up approving over $57,000 for the repairs. [Restoration Group] really went above and beyond to advocate for us and make sure nothing was overlooked. They made a huge difference for us!",
    author: "Zeonica B.",
    source: "",
    service: "Kitchen Water Damage & Insurance Claim",
  },
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
      "From the first contact I had with Tony I knew I had chosen the right company. He was professional, kind, informative and punctual. He took the time to explain the process in detail and put my mind at ease. When they came for treatment he and his crew arrived on time, made sure to cover my carpets to keep them clean and were fast and efficient. They were in and out before I knew it. I would absolutely recommend Restoration Group to anyone needing mold remediation services.",
    author: "Elizabeth M.",
    source: "Google & BBB",
    service: "Mold Remediation",
  },
];

export const HOME_FAQ = [
  {
    q: "Do I have to file an insurance claim for water damage?",
    a: "No. Not every leak or water problem is worth a claim. For smaller damage, the repair can cost less than your deductible, and some homeowners prefer to keep minor losses off their claim history. We can assess the damage, give you a straightforward price for the repair, and let you decide whether to pay directly or go through insurance. If the damage is larger, we document everything for your carrier. Whether to file is always your decision; your insurance agent can explain how a claim would affect your policy.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. Financing is available. Ask us about payment options when we review your project and price.",
  },
  {
    q: "Is your work warrantied?",
    a: "Yes. Our remediation work (water, mold, fire, odor, and bat and rodent cleanup) carries a 5-year warranty, and reconstruction and repair work carries an 18-month warranty.",
  },
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
    a: "We serve select communities across Wayne, Oakland, Macomb, Livingston, and Washtenaw Counties in Metro Detroit. Service availability varies by ZIP code, project type, and scheduling. Contact us with your property address to confirm availability before scheduling.",
  },
  {
    q: "What should I do first after discovering water damage?",
    a: "Act fast — every hour matters. First, stop the source if it’s safe to do so. Second, turn off electricity to any affected areas if there’s a risk of contact with water. Third, move valuables, documents, electronics, and anything irreplaceable out of the wet area. Fourth, photograph everything before moving or removing anything — your own documentation matters. Fifth, call your insurance company to report the loss. Sixth, contact a restoration professional as quickly as possible. The sooner extraction and drying begin, the less secondary damage occurs. Our team of restoration experts is standing by and available for a call 24/7/365 at (313) 771-3673.",
  },
];

// Warranty and financing terms as confirmed by the owner. Keep wording consistent everywhere.
export const GUARANTEES = [
  { title: "5-Year Warranty", body: "On our remediation work: water, mold, fire, odor, and bat and rodent cleanup." },
  { title: "18-Month Warranty", body: "On reconstruction and repair work." },
  { title: "Financing Available", body: "Ask us about payment options when we review your project." },
];
export const GUARANTEE_LINE = "5-year warranty on remediation · 18-month warranty on repairs · Financing available";

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
