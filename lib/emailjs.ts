// EmailJS settings for the service request form (same EmailJS account as guardianbuild.com).
// The public key and service ID are safe to ship in the browser; EmailJS is designed that way.
// Restrict sending to your domains in EmailJS → Account → Security → Allowed Origins.

export const EMAILJS = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "CD8OUYLrXJaz3o4rm",
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_pp03dbu",
  // TODO(Tony): create the RGMD template in EmailJS and put its ID here
  // (or set NEXT_PUBLIC_EMAILJS_TEMPLATE_ID in Vercel). Until then the form asks visitors to call.
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
};
