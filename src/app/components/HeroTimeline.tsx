import { useEffect, useState } from "react";
import { HairlineFigure } from "./HairlineFigure";

const SLIDE_MS = 4000;

type HeroTimelineSlide = {
  step: string;
  title: string;
  figure: Parameters<typeof HairlineFigure>[0]["figure"];
  label: string;
};

export function HeroTimeline({ slides }: { slides: HeroTimelineSlide[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[active];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % slides.length),
      SLIDE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [active, paused, slides.length]);

  return (
    <div
      className="hairline-hero flex w-full flex-col items-center"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <HairlineFigure key={slide.step} figure={slide.figure} label={slide.label} />
    </div>
  );
}
