// app/layout.tsx
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutWrapper from "./LayoutWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ClerkProvider>
      </body>
    </html>
  );
}
