// Google Tag Manager. Set the container ID here or in Vercel as NEXT_PUBLIC_GTM_ID.
// While it is empty, no Tag Manager code loads.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

type DL = Record<string, unknown>[];

// Push an event to the GTM data layer. Never include personal details (name, phone, email).
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: DL };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
