"use client";

import { SignIn } from "@clerk/nextjs";

export default function AdminLoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn path="/admin-login" routing="path" afterSignInUrl="/admin" />
    </div>
  );
}
