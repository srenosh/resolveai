import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "ResolveAI — Federal AI Automation",
  description: "Intelligent document processing and RPA solutions built for mission-critical federal environments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
