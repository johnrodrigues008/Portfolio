"use client";

import Image from "next/image";
import Link from "next/link";

import Photo from "../../../public/img/person.jpeg";
import { useLocale, useTranslations } from "../i18n";

export default function Hero() {
  const t = useTranslations();
  const { locale } = useLocale();
  const resumePath = locale === "en" ? t.resume.en : t.resume.pt;

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="scroll-mt-24 px-4 pt-6 pb-10 sm:px-6 md:py-[100px] lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="max-w-2xl">
          <h1
            id="hero-title"
            className="mb-6 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl lg:text-6xl"
          >
            {t.hero.greeting}
          </h1>

          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {t.hero.bio.map((part, index) =>
              part.highlight ? (
                <strong
                  key={index}
                  className="font-semibold text-cream underline decoration-accent decoration-2 underline-offset-[5px]"
                >
                  {part.text}
                </strong>
              ) : (
                <span key={index}>{part.text}</span>
              )
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href={encodeURI(resumePath)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-cream px-6 text-sm font-semibold text-navy"
            >
              {t.hero.downloadCv}
            </Link>

            <button
              type="button"
              onClick={scrollToExperience}
              className="cursor-pointer text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              {t.hero.viewExperience}
            </button>
          </div>
        </div>

        <div className="mx-auto lg:mx-0">
          <Image
            src={Photo}
            alt={t.hero.imageAlt}
            width={340}
            height={340}
            priority
            className="h-56 w-56 rounded-full border-4 border-cream object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}
