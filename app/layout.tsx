import type { Metadata } from "next";
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

//Import fonts from Google
import { Roboto, Raleway } from "next/font/google";
import BotpressChat from "@/components/BotpressChat";

export const metadata: Metadata = {
  title: "Fisheries Commission",
  description: "The official website of the Fisheries Commission of Ghana",
  icons: {
    icon: "/assets/img/logo.jpeg",
  },
};

// Configure fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // main body text weights
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // headings only
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${raleway.variable}`}>
      <body>
        <TopBar />
        <Header />
        {children}
        <BotpressChat />
        <CustomScript />
        <Footer />
      </body>
    </html>
  );
}
