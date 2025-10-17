import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import "./globals.scss";
import "../public/assets/css/main.css";
import "../public/assets/vendor/bootstrap/css/bootstrap.css";
import "../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/assets/vendor/aos/aos.css";
import "../public/assets/vendor/animate.css/animate.min.css";
import "../public/assets/vendor/glightbox/css/glightbox.min.css";
import "../public/assets/vendor/swiper/swiper-bundle.min.css";

import CustomScript from "@/components/CustomScript";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import BotpressChat from "@/components/BotpressChat";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Fisheries Commission",
  description: "The official website of the Fisheries Commission of Ghana",
  icons: {
    icon: "/assets/img/logo.jpeg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get user locale
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "en";

  // Load messages based on locale
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TopBar />
          <Header />
          {children}
          <BotpressChat />
          <LanguageSwitcher variant="fixed" />
          <CustomScript />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
