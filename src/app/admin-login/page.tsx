"use client";

import { SignIn } from "@clerk/nextjs";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      {/* Logo */}
      <img
        src="/logo.png" // Put your logo image in public/logo.png
        alt="Company Logo"
        className="mb-8 w-40"
      />

      {/* Clerk SignIn component */}
      <SignIn path="/admin-login" routing="path" signUpUrl="/admin-signup" />

      {/* Optionally, add a note or footer */}
      <p className="mt-6 text-gray-400 text-sm">
        Please sign in with your admin account.
      </p>
    </div>
  );
}
