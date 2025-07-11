"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import PagesHeader from "@/components/PagesHeader";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {isHomePage ? <Header /> : <PagesHeader />}
      {children}
    </>
  );
}
