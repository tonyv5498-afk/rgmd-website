"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SITE } from "@/data/site";
import { EMAILJS } from "@/lib/emailjs";

const DAMAGE_TYPES = ["Water", "Mold", "Fire", "Odor", "Other"];

type Status = "idle" | "sending" | "sent" | "error";

export default function RequestForm({ source = "website" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const d = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;

    // Honeypot filled in: pretend success so bots don't retry.
    if (d.company) { setStatus("sent"); return; }

    const zip = (d.zip || "").trim();
    if (!d.name?.trim() || !d.phone?.trim() || !/^\d{5}$/.test(zip)) {
      setStatus("error");
      setError("Please add your name, phone number and a 5-digit ZIP code.");
      return;
    }
    if (!EMAILJS.templateId) {
      setStatus("error");
      setError("Online requests aren't available right now.");
      return;
    }

    const excluded = (SITE.excludedZips as readonly string[]).includes(zip);
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name: d.name.trim(),
          phone: d.phone.trim(),
          email: d.email?.trim() || "",
          street: d.street?.trim() || "",
          city: d.city?.trim() || "",
          state: d.state?.trim() || "",
          zip,
          damage_type: d.damageType || "Not specified",
          description: d.description?.trim() || "",
          source,
          page: typeof window !== "undefined" ? window.location.href : "",
          zip_note: excluded ? "NOTE: this ZIP is on the excluded list." : "",
        },
        { publicKey: EMAILJS.publicKey },
      );
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("We couldn't send your request.");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <p className="form-done-head">Request received.</p>
        <p>Our team will call you shortly, typically within 1 hour. For active flooding or fire, call {SITE.phone} now.</p>
      </div>
    );
  }

  return (
    <form className="request-form" onSubmit={onSubmit} noValidate={false}>
      <div className="field-row">
        <label htmlFor="rf-name">Name <span aria-hidden="true">*</span>
          <input id="rf-name" name="name" required autoComplete="name" />
        </label>
        <label htmlFor="rf-phone">Phone <span aria-hidden="true">*</span>
          <input id="rf-phone" name="phone" type="tel" required autoComplete="tel" />
        </label>
      </div>
      <label htmlFor="rf-email">Email Address
        <input id="rf-email" name="email" type="email" autoComplete="email" />
      </label>
      <label htmlFor="rf-street">Street Address
        <input id="rf-street" name="street" autoComplete="address-line1" />
      </label>
      <div className="field-row three">
        <label htmlFor="rf-city">City
          <input id="rf-city" name="city" autoComplete="address-level2" />
        </label>
        <label htmlFor="rf-state">State
          <input id="rf-state" name="state" defaultValue="MI" autoComplete="address-level1" />
        </label>
        <label htmlFor="rf-zip">ZIP <span aria-hidden="true">*</span>
          <input id="rf-zip" name="zip" required inputMode="numeric" pattern="[0-9]{5}" autoComplete="postal-code" />
        </label>
      </div>
      <fieldset>
        <legend>Damage Type</legend>
        <div className="chips">
          {DAMAGE_TYPES.map((t) => (
            <label key={t} className="chip-opt" htmlFor={`rf-type-${t}`}>
              <input id={`rf-type-${t}`} type="radio" name="damageType" value={t} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label htmlFor="rf-desc">Project Description
        <textarea id="rf-desc" name="description" rows={4} />
      </label>
      {/* Honeypot: hidden from people, filled in by bots. */}
      <label className="hp" aria-hidden="true">Leave this empty
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" className="btn btn-call" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit Request"}
      </button>
      {status === "error" && <p className="form-error" role="alert">{error} Please call {SITE.phone}.</p>}
      <p className="note">Submission does not guarantee service availability. Our team will call you shortly after you submit, typically within 1 hour.</p>
    </form>
  );
}
