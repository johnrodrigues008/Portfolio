"use client";

import Navbar from "./navbar";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
