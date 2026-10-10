"use client";

import Link from "next/link";

import { useTranslations } from "../../i18n";

export default function ContactSection() {
  const t = useTranslations();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="contact-title"
          className="mb-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
        >
          {t.contact.title}
        </h2>
        <p className="mb-6 max-w-2xl text-base leading-7 text-muted">
          {t.contact.intro}
        </p>

        <address className="flex flex-col gap-2 not-italic text-sm text-foreground/80 sm:flex-row sm:gap-6">
          <Link
            href="mailto:johnrodrigues008@gmail.com"
            className="text-accent underline-offset-4 hover:underline"
          >
            {t.contact.email}
          </Link>
          <Link
            href="tel:+5561991803216"
            className="text-accent underline-offset-4 hover:underline"
          >
            {t.contact.phone}
          </Link>
          <span>{t.contact.location}</span>
        </address>
      </div>
    </section>
  );
}
