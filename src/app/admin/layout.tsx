"use client";

import React, { useState } from "react";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/nextjs";

import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <SignedIn>
        <div className="min-h-screen flex bg-gray-900 text-gray-100">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

          <div className="flex flex-col flex-1">
            <Navbar
              toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
              profile={<UserButton />}
            />

            <main className="flex-grow p-6 bg-gray-300 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn redirectUrl="/admin-login" />
      </SignedOut>
    </>
  );
}
