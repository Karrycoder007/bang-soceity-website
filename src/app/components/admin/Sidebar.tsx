"use client";

import React from "react";
import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";
import { FiHome, FiUsers, FiLogOut } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { user, isLoaded } = useUser();
  const clerk = useClerk();

  if (!isLoaded) return null;

  const fullName = user?.fullName || "User";
  const email = user?.emailAddresses[0]?.emailAddress || "No email";

  return (
    <>
      {/* Mobile sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 z-50 bg-white text-gray-800 w-64 h-full p-6 space-y-8 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-700 hover:text-gray-800 pointer"
            >
              Close ✕
            </button>

            <div className="mb-8">
              <div className="text-lg font-semibold mb-1 select-none">{fullName}</div>
              <div className="text-sm text-gray-900 select-none">{email}</div>
            </div>

            <nav className="flex flex-col space-y-3">
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition" onClick={() => setIsOpen(false)}>
                <FiHome />
                <span>Dashboard</span>
              </Link>

              <Link href="/admin/members" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition" onClick={() => setIsOpen(false)}>
                <FiUsers />
                <span>Members</span>
              </Link>

              <button
                onClick={() => clerk.signOut()}
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition w-full text-left mt-auto"
              >
                <FiLogOut />
                <span>Logout</span>
              </button>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col bg-white text-gray-900 w-64 min-h-screen p-6 space-y-8">
        <div className="mb-8">
          <div className="text-lg font-semibold mb-1 select-none">{fullName}</div>
          <div className="text-sm text-gray-700 select-none">{email}</div>
        </div>

        <nav className="flex flex-col space-y-3">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-300 transition">
            <FiHome />
            <span>Dashboard</span>
          </Link>

          <Link href="/admin/members" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-300 transition">
            <FiUsers />
            <span>Members</span>
          </Link>

          <button
            onClick={() => clerk.signOut()}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-300 transition w-full text-left mt-auto"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </nav>
      </aside>
    </>
  );
}
