// app/LayoutWrapper.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdmin && <MainNavbar />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
}
