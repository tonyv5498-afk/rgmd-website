import { NextResponse } from "next/server";
import { SITE } from "@/data/site";

// Emails each service request through Resend (https://resend.com).
// Needs RESEND_API_KEY, LEAD_TO_EMAIL and LEAD_FROM_EMAIL in Vercel's environment.

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "The request was empty." }, { status: 400 });
  }

  // Honeypot filled in: pretend success so bots don't retry.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 200),
    street: clean(body.street, 200),
    city: clean(body.city, 100),
    state: clean(body.state, 40),
    zip: clean(body.zip, 10),
    damageType: clean(body.damageType, 20),
    description: clean(body.description),
    source: clean(body.source, 100),
  };

  if (!lead.name || !lead.phone || !/^\d{5}$/.test(lead.zip)) {
    return NextResponse.json({ error: "Please add your name, phone number and a 5-digit ZIP code." }, { status: 400 });
  }

  const excluded = (SITE.excludedZips as readonly string[]).includes(lead.zip);
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || SITE.email;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!key || !from) {
    console.error("Lead form is not configured: set RESEND_API_KEY and LEAD_FROM_EMAIL.", lead);
    return NextResponse.json({ error: "Online requests aren't available right now." }, { status: 503 });
  }

  const rows = Object.entries(lead)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555">${k}</td><td style="padding:4px 0">${esc(v) || "—"}</td></tr>`)
    .join("");

  const subject = `New ${lead.damageType || "service"} request — ${lead.name}, ${lead.city || lead.zip}${excluded ? " (excluded ZIP)" : ""}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email || undefined,
      subject,
      html: `<p>New service request from metrodetroitrestoration.com${excluded ? " — <strong>ZIP is on the excluded list</strong>" : ""}</p><table>${rows}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "We couldn't send your request." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
