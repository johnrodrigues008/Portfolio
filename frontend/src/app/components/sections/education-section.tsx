"use client";

import { useTranslations } from "../../i18n";

export default function EducationSection() {
  const t = useTranslations();

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="education-title"
          className="mb-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
        >
          {t.education.title}
        </h2>
        <p className="mb-10 max-w-2xl text-base leading-7 text-muted">
          {t.education.intro}
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="font-heading mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {t.education.degreesTitle}
            </h3>
            <ul className="space-y-5">
              {t.education.degrees.map((degree) => (
                <li
                  key={`${degree.institution}-${degree.program}`}
                  className="rounded-3xl border border-cream/10 bg-card p-5"
                >
                  <p className="font-heading font-semibold text-cream">
                    {degree.institution}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-foreground/80">
                    {degree.program}
                  </p>
                  <p className="mt-2 text-xs text-muted">{degree.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {t.education.certificationsTitle}
            </h3>
            <ul className="space-y-5">
              {t.education.certifications.map((cert) => (
                <li
                  key={`${cert.name}-${cert.year}`}
                  className="rounded-3xl border border-cream/10 bg-card p-5"
                >
                  <p className="font-heading font-semibold text-cream">{cert.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {cert.provider} · {cert.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {t.education.languagesTitle}
            </h3>
            <ul className="space-y-3">
              {t.education.languages.map((language) => (
                <li
                  key={language}
                  className="rounded-3xl border border-cream/10 bg-card px-5 py-4 text-sm text-foreground/80"
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
