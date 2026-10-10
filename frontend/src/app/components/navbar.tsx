"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "../i18n";
import Translate from "./translate";

const SECTION_IDS = ["home", "education", "experience"] as const;

export default function Navbar() {
  const t = useTranslations();
  const [active, setActive] = useState<(typeof SECTION_IDS)[number]>("home");

  const links = [
    { id: "home" as const, label: t.nav.brand },
    { id: "education" as const, label: t.nav.education },
    { id: "experience" as const, label: t.nav.experience },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "auto", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-5 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:px-6">
        <div className="hidden sm:block" />

        <nav
          aria-label={t.nav.menuLabel}
          className="flex max-w-[calc(100%-3rem)] items-center overflow-x-auto rounded-full border border-cream/10 bg-card px-1.5 py-1.5 sm:max-w-none sm:overflow-visible sm:px-2"
        >
          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`font-heading cursor-pointer rounded-full px-2.5 py-2 text-xs tracking-wide whitespace-nowrap sm:px-4 sm:text-sm ${
                  isActive ? "text-cream" : "text-accent"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="flex justify-end">
          <Translate />
        </div>
      </div>
    </header>
  );
}
