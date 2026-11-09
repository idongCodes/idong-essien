"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

// The sitekey is public by design (it ships in the page HTML).
// NEXT_PUBLIC_TURNSTILE_SITE_KEY can override it per environment.
const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "0x4AAAAAAF5SsyN6vmgZQJPm";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: Record<string, unknown>
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

// Cloudflare Turnstile widget for the intake form.
// Rendered explicitly so it can be reset after a failed submission:
// Turnstile tokens are single-use, so a retry needs a fresh token.
// The widget injects a hidden "cf-turnstile-response" field into the form,
// which the server action verifies with TURNSTILE_SECRET.
export default function Turnstile({ resetSignal = 0 }: { resetSignal?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderWidget = () => {
    if (!window.turnstile || !containerRef.current || widgetIdRef.current) return;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      action: "intake",
      theme: "dark",
      "expired-callback": () => {
        if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current);
      },
    });
  };

  // Parent bumps resetSignal after a failed submission -> fresh token.
  useEffect(() => {
    if (resetSignal > 0 && widgetIdRef.current) {
      window.turnstile?.reset(widgetIdRef.current);
    }
  }, [resetSignal]);

  useEffect(() => {
    renderWidget();
    return () => {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!SITE_KEY) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div className="flex justify-center">
        <div ref={containerRef} />
      </div>
    </>
  );
}
