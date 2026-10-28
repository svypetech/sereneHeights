"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

/**
 * Cloudflare Turnstile bot check. Usually invisible; shows a checkbox only when
 * Cloudflare needs one. Renders nothing when no site key is configured.
 * Tokens are single-use: bump `resetKey` after a failed submit to get a new one.
 */
export default function Turnstile({ onToken, resetKey = 0 }) {
  const container = useRef(null);
  const widgetId = useRef(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  const render = () => {
    if (!TURNSTILE_SITE_KEY || !window.turnstile || !container.current) return;
    if (widgetId.current !== null) return;
    widgetId.current = window.turnstile.render(container.current, {
      sitekey: TURNSTILE_SITE_KEY,
      appearance: "interaction-only",
      callback: (token) => onTokenRef.current(token),
      "expired-callback": () => onTokenRef.current(""),
      "error-callback": () => onTokenRef.current(""),
    });
  };

  useEffect(() => {
    render();
    return () => {
      if (widgetId.current !== null) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
    };
  }, []);

  useEffect(() => {
    if (!resetKey || widgetId.current === null) return;
    onTokenRef.current("");
    window.turnstile?.reset(widgetId.current);
  }, [resetKey]);

  if (!TURNSTILE_SITE_KEY) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={render}
      />
      <div ref={container} className="mt-3 flex justify-center" />
    </>
  );
}
