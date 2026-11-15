// Sends website service requests to the RGMD CRM (Firebase project "rgmd-crm") as a
// web lead. They show up under the CRM's "Leads" button, where "Create Job" turns
// one into a job. Uses the Firestore REST API, so the site needs no Firebase SDK.
//
// The CRM's Firestore rules must allow public *create* (only) on webLeads.
// The rule to paste is in README.md under "CRM leads".

const PROJECT = process.env.NEXT_PUBLIC_CRM_FIREBASE_PROJECT || "rgmd-crm";
// Firebase web API keys identify the project; they are meant to ship in browsers.
const API_KEY = process.env.NEXT_PUBLIC_CRM_FIREBASE_API_KEY || "AIzaSyD9huYJE69gbk4JWm3Q24tcXcZCDCK48bU";

// Website damage-type chips → the CRM's Project Type options.
const PROJECT_TYPE: Record<string, string> = {
  Water: "Water Damage",
  Mold: "Mold",
  Fire: "Fire",
  Odor: "Odor",
  "Bat / Rodent": "Other",
  Other: "Other",
};

export type CrmLead = {
  name: string; phone: string; email: string;
  street: string; city: string; state: string; zip: string;
  damageType: string; description: string; source: string; page: string; zipNote: string;
};

const str = (v: string) => ({ stringValue: v });

function newId() {
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const buf = new Uint8Array(20);
  crypto.getRandomValues(buf);
  return Array.from(buf, (b) => a[b % a.length]).join("");
}

export async function sendLeadToCrm(l: CrmLead): Promise<void> {
  const cityLine = [l.city, [l.state, l.zip].filter(Boolean).join(" ")].filter(Boolean).join(", ");
  const address = [l.street, cityLine].filter(Boolean).join(", ");
  const message = [
    l.description,
    l.damageType === "Bat / Rodent" ? "Damage type: Bat / Rodent" : "",
    l.zipNote,
    `Submitted from: ${l.page || l.source}`,
  ].filter(Boolean).join("\n\n");

  const base = `projects/${PROJECT}/databases/(default)/documents`;
  const body = {
    writes: [{
      update: {
        name: `${base}/webLeads/${newId()}`,
        fields: {
          clientName: str(l.name),
          phone: str(l.phone),
          email: str(l.email),
          address: str(address),
          projectType: str(PROJECT_TYPE[l.damageType] ?? ""),
          message: str(message),
          source: str(`website:${l.source}`),
          reviewed: { booleanValue: false },
          dismissed: { booleanValue: false },
        },
      },
      updateTransforms: [{ fieldPath: "submittedAt", setToServerValue: "REQUEST_TIME" }],
      currentDocument: { exists: false },
    }],
  };

  const res = await fetch(`https://firestore.googleapis.com/v1/${base}:commit?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`CRM ${res.status}`);
}
