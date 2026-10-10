"use client";

import Link from "next/link";

import { useTranslations } from "../../i18n";

const PROJECT_LINKS = [
  { key: "gupeAdmin" as const, preview: "#", github: "https://github.com/johnrodrigues009" },
  { key: "devReceitas" as const, preview: "#", github: "https://github.com/johnrodrigues009" },
  { key: "cardapioOnline" as const, preview: "#", github: "https://github.com/johnrodrigues009" },
  { key: "portfolio" as const, preview: "#", github: "https://github.com/johnrodrigues009" },
] as const;

export default function WorkSection() {
  const t = useTranslations();

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="work-title"
          className="mb-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
        >
          {t.work.title}
        </h2>
        <p className="mb-10 max-w-2xl text-base leading-7 text-muted">
          {t.work.intro}
        </p>

        <ul className="grid gap-4 sm:grid-cols-2">
          {PROJECT_LINKS.map(({ key, preview, github }) => {
            const project = t.work.projects[key];

            return (
              <li
                key={key}
                className="flex flex-col rounded-3xl border border-cream/10 bg-card p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-cream">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-foreground/80">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={preview}
                    className="rounded-full border border-cream/20 px-4 py-2 text-xs font-semibold text-cream"
                  >
                    {t.work.preview}
                  </Link>
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-cream px-4 py-2 text-xs font-semibold text-navy"
                  >
                    {t.work.github}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
