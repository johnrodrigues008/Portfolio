
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "../i18n";

const SKILLS = [
  { name: "TypeScript", color: "#e6dcc8", icon: "TS", iconBg: "#1b3654" },
  { name: "Node.js", color: "#f4f1ea", icon: "JS", iconBg: "#1b3654" },
  { name: "React", color: "#d4c48a", icon: "R", iconBg: "#1b3654" },
  { name: "Next.js", color: "#e6dcc8", icon: "N", iconBg: "#0e1c2c" },
  { name: "Angular", color: "#f4f1ea", icon: "A", iconBg: "#1b3654" },
  { name: "PHP", color: "#d4c48a", icon: "P", iconBg: "#1b3654" },
  { name: "Python", color: "#e6dcc8", icon: "Py", iconBg: "#1b3654" },
  { name: "PostgreSQL", color: "#f4f1ea", icon: "PG", iconBg: "#1b3654" },
] as const;

export default function SkillsCarousel() {
  const t = useTranslations();

  const scrollerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const initialScrollLeft = useRef(0);

  const [progress, setProgress] = useState(0);

  // Atualiza o progresso conforme a rolagem horizontal.
  const updateProgress = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;

    if (maxScroll <= 0) {
      setProgress(1);
      return;
    }

    setProgress(
      Math.min(1, Math.max(0, el.scrollLeft / maxScroll))
    );
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateProgress();

    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    // Atualiza quando o layout ou o tamanho dos cards mudar.
    const observer = new ResizeObserver(updateProgress);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      observer.disconnect();
    };
  }, [updateProgress]);

  // Inicia o arraste com o mouse.
  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    // Apenas o botão esquerdo do mouse.
    if (event.button !== 0) return;

    const el = scrollerRef.current;
    if (!el) return;

    isDragging.current = true;
    startX.current = event.clientX;
    initialScrollLeft.current = el.scrollLeft;
  };

  // Move os cards enquanto o mouse estiver pressionado.
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const el = scrollerRef.current;

    if (!isDragging.current || !el) return;

    event.preventDefault();

    const distance = event.clientX - startX.current;

    el.scrollLeft = initialScrollLeft.current - distance;
  };

  // Encerra o arraste.
  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section
      aria-label={t.about.skills}
      className="px-4 pb-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div
          ref={scrollerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onDragStart={(event) => event.preventDefault()}
          className={[
            "skills-scroll flex gap-4 overflow-x-auto overflow-y-hidden pb-4",
            "overscroll-x-contain touch-pan-x",
            "cursor-grab active:cursor-grabbing select-none",
          ].join(" ")}
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {/* Card de experiência */}
          <article className="flex shrink-0 flex-col justify-end rounded-3xl border border-cream/10 bg-card p-5 ">
            <p className="text-xs text-muted">
              {t.skills.yearsOf}
            </p>

            <p className="font-heading mt-1 text-6xl font-extrabold tracking-tight text-cream">
              {t.skills.xp}
            </p>

            <p className="mt-3 max-w-[9rem] text-xs leading-4 text-muted">
              {t.skills.caption}
            </p>
          </article>

          {/* Cards de tecnologias */}
          {SKILLS.map((skill) => (
            <article
              key={skill.name}
              className="flex h-52 w-48 shrink-0 flex-col justify-end rounded-3xl p-5 sm:h-56 sm:w-52"
              style={{ backgroundColor: skill.color }}
            >
              <span
                draggable={false}
                className="font-heading mb-auto inline-flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-cream"
                style={{ backgroundColor: skill.iconBg }}
              >
                {skill.icon}
              </span>

              <p className="font-heading text-lg font-semibold text-navy">
                {skill.name}
              </p>
            </article>
          ))}
        </div>

        {/* Barra de progresso */}
        <div
          className="skills-track mt-2 h-1 w-full overflow-hidden rounded-full bg-cream/10"
          role="progressbar"
          aria-label="Progresso do carrossel de tecnologias"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
        >
          <div
            className="skills-thumb h-full rounded-full bg-cream transition-[width] duration-100"
            style={{
              width: `${Math.max(0, Math.min(100, progress * 100))}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
