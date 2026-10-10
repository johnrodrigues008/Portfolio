"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import TranslateIcon from "../../../public/img/translate.svg";
import {
  LANGUAGE_TO_LOCALE,
  LOCALE_TO_LANGUAGE,
  useLocale,
  useTranslations,
  type LanguageCode,
} from "../i18n";

const languages: LanguageCode[] = ["PT", "EN", "ES"];

export default function Translate() {
  const { locale, setLocale, isReady } = useLocale();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = isReady ? LOCALE_TO_LANGUAGE[locale] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={
          selectedLanguage
            ? t.translate.selected.replace("{language}", selectedLanguage)
            : t.translate.select
        }
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex h-10 w-10 cursor-pointer items-center justify-center text-accent"
      >
        {selectedLanguage ? (
          <span className="font-heading text-sm font-semibold">
            {selectedLanguage}
          </span>
        ) : (
          <Image
            src={TranslateIcon}
            alt=""
            aria-hidden="true"
            width={22}
            height={22}
            className="h-[22px] w-[22px] brightness-0 invert opacity-80"
          />
        )}
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t.translate.available}
          className="absolute top-full right-0 mt-2 flex min-w-[3rem] flex-col items-center gap-1 rounded-2xl border border-cream/10 bg-card px-2 py-2"
        >
          {languages.map((language) => (
            <button
              key={language}
              type="button"
              role="option"
              aria-selected={selectedLanguage === language}
              onClick={() => {
                setLocale(LANGUAGE_TO_LOCALE[language]);
                setIsOpen(false);
              }}
              className={`font-heading cursor-pointer rounded-full px-2 py-1 text-sm ${
                selectedLanguage === language ? "text-cream" : "text-accent"
              }`}
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
