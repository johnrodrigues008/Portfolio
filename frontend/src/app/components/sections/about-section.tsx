"use client";

import { useTranslations } from "../../i18n";

export default function AboutSection() {
  const t = useTranslations();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="experience-title"
          className="mb-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
        >
          {t.about.experience}
        </h2>
        <p className="mb-10 max-w-2xl text-base leading-7 text-muted">
          {t.about.introLead}
        </p>

        <ul className="space-y-4">
          {t.about.experienceEntries.map((entry) => (
            <li
              key={`${entry.company}-${entry.period}`}
              className="rounded-3xl border border-cream/10 bg-card p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-heading text-lg font-semibold text-cream">
                  {entry.role}
                </p>
                <p className="text-sm text-muted">{entry.period}</p>
              </div>
              <p className="mt-1 text-sm font-semibold text-accent">
                {entry.company} · {entry.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/80">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <blockquote className="mt-8 rounded-3xl border border-cream/10 bg-card p-6">
          <p className="font-heading text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {t.about.quoteTitle}
          </p>
          <p className="mt-3 text-base leading-7 text-cream italic">{t.about.quote}</p>
          <p className="mt-2 text-sm text-muted">{t.about.quoteNote}</p>
        </blockquote>
      </div>
    </section>
  );
}
