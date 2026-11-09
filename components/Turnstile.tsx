"use client";

import Script from "next/script";

// Cloudflare Turnstile widget for the intake form.
// Renders nothing until NEXT_PUBLIC_TURNSTILE_SITE_KEY is set (in Vercel).
// When it renders inside the <form>, Turnstile automatically adds a hidden
// "cf-turnstile-response" field to the submission, which the server action
// verifies against TURNSTILE_SECRET_KEY.
export default function Turnstile() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!siteKey) return null;

  return (
    <div className="flex justify-center">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <div className="cf-turnstile" data-sitekey={siteKey} data-theme="dark" />
    </div>
  );
}
