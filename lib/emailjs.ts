// EmailJS settings for the service request form (same EmailJS account as guardianbuild.com).
// The public key and service ID are safe to ship in the browser; EmailJS is designed that way.
// Restrict sending to your domains in EmailJS → Account → Security → Allowed Origins.

export const EMAILJS = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "CD8OUYLrXJaz3o4rm",
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_pp03dbu",
  // RGMD service request template (sends to info@metrodetroitrestoration.com).
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_k6pheft",
};
