"use client";

import Script from "next/script";

export default function BotpressChat() {
  return (
    <>
      {/* Botpress Webchat Core */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"
        strategy="afterInteractive"
      />
      {/* Botpress config */}
      <Script
        src="https://files.bpcontent.cloud/2025/09/02/16/20250902161543-UT2HB260.js"
        strategy="afterInteractive"
      />
    </>
  );
}
