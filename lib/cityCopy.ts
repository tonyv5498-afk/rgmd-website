// Long-form copy for the 30 city pages, carried over from the WordPress site
// (data/city-copy/*.json) with the audit fixes applied. "std" entries use the
// shared step and card text in _std.json with the city name filled in.

import std from "@/data/city-copy/_std.json";
import b1 from "@/data/city-copy/batch1.json";
import b2 from "@/data/city-copy/batch2.json";
import b3 from "@/data/city-copy/batch3.json";
import b4 from "@/data/city-copy/batch4.json";
import b5 from "@/data/city-copy/batch5.json";
import b6 from "@/data/city-copy/batch6.json";
import { SERVICES } from "@/data/services";

type Raw = {
  eyebrow: string;
  lede: string;
  local: string[];
  driversHeading: string;
  drivers: string[];
  processIntro: string;
  steps: string | [string, string][];
  riskEyebrow: string;
  risk: string[];
  riskList: string[];
  docsEyebrow: string;
  docs: string[];
  cards: string | string[];
  cta: string;
};

export type CityCopy = Omit<Raw, "steps" | "cards"> & {
  steps: { title: string; body: string }[];
  cards: { slug: string; name: string; body: string }[];
};

const ALL: Record<string, Raw> = { ...b1, ...b2, ...b3, ...b4, ...b5, ...b6 } as unknown as Record<string, Raw>;

const fill = (s: string, city: string) => s.split("{city}").join(city);

export function cityCopy(slug: string, place: string): CityCopy | undefined {
  const r = ALL[slug];
  if (!r) return undefined;

  const stdName = (v: string) => (v.startsWith("std:") ? v.slice(4) : place);

  const steps = typeof r.steps === "string"
    ? (std.steps as [string, string][]).map(([t, b]) => ({ title: t, body: fill(b, stdName(r.steps as string)) }))
    : r.steps.map(([t, b]) => ({ title: t, body: b }));

  let bodies: string[];
  if (r.cards === "summary") bodies = SERVICES.map((s) => s.summary);
  else if (typeof r.cards === "string") bodies = (std.cards as string[]).map((b) => fill(b, stdName(r.cards as string)));
  else bodies = r.cards;

  const cards = SERVICES.map((s, i) => ({ slug: s.slug, name: s.name, body: bodies[i] ?? s.summary }));

  return { ...r, steps, cards };
}

export const CITY_COPY_SLUGS = Object.keys(ALL);
