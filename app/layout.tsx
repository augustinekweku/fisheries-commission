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
import { Roboto } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Fisheries Commission",
  description: "The official website of the Fisheries Commission of Ghana",
  keywords: "Fisheries, Commission, Ghana, Fishing, Marine Resources",
  icons: {
    icon: "/assets/img/logo.jpeg",
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <CustomScript />
        <Footer />
      </body>
    </html>
  );
}
