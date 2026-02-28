import { useEffect, useMemo, useRef, useState } from "react";
import { createClient, type Session } from "@supabase/supabase-js";
import svgPaths from "../imports/svg-pgtixnbxan";
import { MenuxLogo, CortexLogo, AtomLogo, AuraLogo } from "./components/BrandLogos";

const mono = "'Basis Grotesque Pro Mono', 'InterDisplay', sans-serif";
const heading = "'Inter Tight', 'InterDisplay', sans-serif";
const body = "'InterDisplay', 'Inter Tight', sans-serif";
const display = "'InterDisplay', 'Inter Tight', sans-serif";
const audienceTextHalo =
  "0 0 0 #F2F3EF, 1px 0 0 #F2F3EF, -1px 0 0 #F2F3EF, 0 1px 0 #F2F3EF, 0 -1px 0 #F2F3EF, 2px 0 0 #F2F3EF, -2px 0 0 #F2F3EF, 0 2px 0 #F2F3EF, 0 -2px 0 #F2F3EF, 0 0 12px #F2F3EF, 0 0 22px #F2F3EF, 0 0 34px #F2F3EF";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? "https://cjoyxelowsfkhgswkipd.supabase.co";
const supabasePublishableKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? "sb_publishable_EWydN_Aqm9YbtXkQUNGfrA_BpB8LD4R";
const hasSupabaseConfig = Boolean(supabaseUrl && supabasePublishableKey);
const supabase = hasSupabaseConfig
  ? createClient(supabaseUrl, supabasePublishableKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
  : null;
const fallbackSiteUrl = "https://shiftlabs.digital";
const configuredSiteUrl = ((import.meta.env.VITE_SITE_URL as string | undefined) ?? fallbackSiteUrl).trim();
const siteUrl = configuredSiteUrl.replace(/\/+$/, "") || fallbackSiteUrl;
const seoDefaultDescription =
  "A ShiftLabs estrutura produto, tecnologia, growth e operacoes para empresas crescerem com previsibilidade e execucao coordenada.";
const seoDefaultImagePath = "/fav-icon.svg";

/* ─── Reusable sub-components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      data-reveal="text"
      className="text-[#5f644c] text-[14px] md:text-[16px] uppercase"
      style={{ fontFamily: mono }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      data-reveal="title"
      className={`text-[#101700] leading-[normal] ${className}`}
      style={{ fontFamily: heading, fontWeight: 500 }}
    >
      {children}
    </div>
  );
}

function BorderBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden className="absolute inset-0 border border-[#d6dace] pointer-events-none" />
      {children}
    </div>
  );
}

function XlHelper({ className = "" }: { className?: string }) {
  return <div className={`hidden xl:block w-[192px] shrink-0 ${className}`} />;
}

function SectionBorderTicks({
  positions,
  showTop = true,
  showBottom = true,
}: {
  positions: string[];
  showTop?: boolean;
  showBottom?: boolean;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block z-10">
      {showTop &&
        positions.map((left) => (
          <div key={`top-${left}`} className="absolute top-0" style={{ left }}>
            <span className="absolute top-0 -translate-x-1/2 h-[2px] w-[14px] bg-[#5f644c]" />
            <span className="absolute top-0 -translate-x-1/2 h-[12px] w-[2px] bg-[#5f644c]" />
          </div>
        ))}
      {showBottom &&
        positions.map((left) => (
          <div key={`bottom-${left}`} className="absolute bottom-0" style={{ left }}>
            <span className="absolute bottom-0 -translate-x-1/2 h-[2px] w-[14px] bg-[#5f644c]" />
            <span className="absolute bottom-0 -translate-x-1/2 h-[12px] w-[2px] bg-[#5f644c]" />
          </div>
        ))}
    </div>
  );
}

function AsciiStarfield({ className = "" }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [asciiFrame, setAsciiFrame] = useState("");
  const asciiFontSizePx = 11;
  const asciiLineHeightPx = 12;
  const asciiLetterSpacingPx = 0.2;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    type Star = { x: number; y: number; z: number; speed: number };
    type AmbientStar = { x: number; y: number; char: "." | ":" | "+" };
    let stars: Star[] = [];
    let ambientStars: AmbientStar[] = [];
    let cols = 0;
    let rows = 0;
    let cellWidth = 7.2;
    let cellHeight = asciiLineHeightPx;
    let rafId = 0;
    let visibilityObserver: IntersectionObserver | null = null;
    let isVisible = typeof IntersectionObserver === "undefined";
    let lastTime = performance.now();
    let accumulator = 0;
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const stepIntervalMs = 92;

    const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const measureAsciiCell = () => {
      const probe = document.createElement("span");
      probe.textContent = "0".repeat(40);
      Object.assign(probe.style, {
        position: "absolute",
        visibility: "hidden",
        whiteSpace: "pre",
        fontFamily: mono,
        fontSize: `${asciiFontSizePx}px`,
        lineHeight: `${asciiLineHeightPx}px`,
        letterSpacing: `${asciiLetterSpacingPx}px`,
        fontVariantLigatures: "none",
      });
      host.appendChild(probe);
      const rect = probe.getBoundingClientRect();
      const computed = window.getComputedStyle(probe);
      const measuredLineHeight = Number.parseFloat(computed.lineHeight) || asciiLineHeightPx;
      probe.remove();
      cellWidth = Math.max(rect.width / 40, 4);
      cellHeight = Math.max(measuredLineHeight, 8);
    };

    const resetStar = (star: Star, far = false) => {
      star.x = rand(-1, 1);
      star.y = rand(-1, 1);
      star.z = far ? rand(0.75, 1) : rand(0.12, 1);
      star.speed = rand(0.126, 0.342);
    };

    const buildFrame = () => {
      if (!cols || !rows) return;
      const grid = Array.from({ length: rows }, () => Array(cols).fill(" "));

      for (const ambient of ambientStars) {
        if (ambient.x >= 0 && ambient.x < cols && ambient.y >= 0 && ambient.y < rows) {
          grid[ambient.y][ambient.x] = ambient.char;
        }
      }

      for (const star of stars) {
        const sx = ((star.x / star.z) * 0.5 + 0.5) * cols;
        const sy = ((star.y / star.z) * 0.5 + 0.5) * rows;
        const x = Math.floor(sx);
        const y = Math.floor(sy);
        if (x < 0 || x >= cols || y < 0 || y >= rows) continue;

        const depth = 1 - star.z;
        const char =
          depth > 0.84 ? "@" :
          depth > 0.7 ? "#" :
          depth > 0.56 ? "*" :
          depth > 0.42 ? "+" :
          depth > 0.3 ? ":" :
          ".";
        grid[y][x] = char;

        if (depth > 0.6 && x > 0 && grid[y][x - 1] === " ") {
          grid[y][x - 1] = ".";
        }
      }

      setAsciiFrame(grid.map((line) => line.join("")).join("\n"));
    };

    const rebuild = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      measureAsciiCell();
      cols = clamp(Math.ceil(width / cellWidth) + 2, 36, 420);
      rows = clamp(Math.ceil(height / cellHeight) + 2, 14, 160);
      const count = clamp(Math.floor(cols * rows * 0.075), 160, 520);
      stars = Array.from({ length: count }, () => {
        const star: Star = { x: 0, y: 0, z: 0, speed: 0 };
        resetStar(star);
        return star;
      });
      const ambientCount = clamp(Math.floor(cols * rows * 0.009), 36, 180);
      ambientStars = Array.from({ length: ambientCount }, () => {
        const charRoll = Math.random();
        const char: "." | ":" | "+" = charRoll > 0.9 ? "+" : charRoll > 0.65 ? ":" : ".";
        return {
          x: Math.floor(Math.random() * cols),
          y: Math.floor(Math.random() * rows),
          char,
        };
      });
      buildFrame();
    };

    const stopAnimation = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const animate = (now: number) => {
      if (prefersReduced || !isVisible) {
        stopAnimation();
        return;
      }

      const delta = now - lastTime;
      lastTime = now;
      accumulator += delta;

      if (accumulator >= stepIntervalMs) {
        for (const star of stars) {
          star.z -= star.speed * (accumulator / 1000);
          if (star.z <= 0.08) resetStar(star, true);
        }
        buildFrame();
        accumulator = 0;
      }

      rafId = requestAnimationFrame(animate);
    };

    rebuild();
    if (!prefersReduced && isVisible) {
      rafId = requestAnimationFrame(animate);
    }

    const resizeObserver = new ResizeObserver(() => rebuild());
    resizeObserver.observe(host);

    if (typeof IntersectionObserver !== "undefined") {
      visibilityObserver = new IntersectionObserver(
        (entries) => {
          const nextVisible = entries.some((entry) => entry.isIntersecting);
          if (nextVisible === isVisible) return;
          isVisible = nextVisible;
          if (!prefersReduced && isVisible) {
            lastTime = performance.now();
            accumulator = 0;
            stopAnimation();
            rafId = requestAnimationFrame(animate);
            return;
          }
          stopAnimation();
        },
        { threshold: 0.08 },
      );
      visibilityObserver.observe(host);
    }

    return () => {
      resizeObserver.disconnect();
      visibilityObserver?.disconnect();
      stopAnimation();
    };
  }, []);

  return (
    <div ref={hostRef} aria-hidden className={`pointer-events-none overflow-hidden ${className}`}>
      <pre
        className="absolute inset-0 m-0 select-none whitespace-pre"
        style={{
          fontFamily: mono,
          fontSize: `${asciiFontSizePx}px`,
          lineHeight: `${asciiLineHeightPx}px`,
          color: "#70745A",
          letterSpacing: `${asciiLetterSpacingPx}px`,
          fontVariantLigatures: "none",
          display: "block",
          width: "100%",
          height: "100%",
          userSelect: "none",
        }}
      >
        {asciiFrame}
      </pre>
    </div>
  );
}

/* ─── ShiftLabs Logo ─── */
function ShiftLabsIcon() {
  return (
    <div className="h-[34px] w-[34px] relative shrink-0">
      <svg className="block size-full" fill="none" viewBox="0 0 33.9148 34.0638">
        <path d={svgPaths.p32570e00} fill="#101700" />
        <path d={svgPaths.p2aaefb00} fill="#101700" />
        <path d={svgPaths.p6d58c60} fill="#101700" />
        <path d={svgPaths.pdb9af80} fill="#101700" />
        <path d={svgPaths.p366c4780} fill="#101700" />
        <path d={svgPaths.p219d7300} fill="#101700" />
        <path d={svgPaths.p28330940} fill="#101700" />
      </svg>
    </div>
  );
}

function ShiftLabsWordmark() {
  return (
    <div className="h-[15px] w-[80px] relative shrink-0">
      <svg className="block size-full" fill="none" viewBox="0 0 79.7793 14.8396">
        <path d={svgPaths.pc4be800} fill="#101700" />
        <path d={svgPaths.p303e5b80} fill="#101700" />
        <path d={svgPaths.p29dd9600} fill="#101700" />
        <path d={svgPaths.p24aff100} fill="#101700" />
        <path d={svgPaths.p7460f80} fill="#101700" />
        <path d={svgPaths.p26df5d00} fill="#101700" />
        <path d={svgPaths.p2d07ed00} fill="#101700" />
        <path d={svgPaths.p3cf36d00} fill="#101700" />
        <path d={svgPaths.p27734e00} fill="#101700" />
      </svg>
    </div>
  );
}

/* ─── Social icons ─── */
function LinkedInIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <path d={svgPaths.p5160f00} fill="#101700" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <path d={svgPaths.p14360c80} fill="#101700" />
      <path d={svgPaths.p27980d00} fill="#101700" />
      <path d={svgPaths.p1b767a00} fill="#101700" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <path clipRule="evenodd" d={svgPaths.p27f75600} fill="#101700" fillRule="evenodd" />
    </svg>
  );
}

function CareersLocationIcon() {
  return (
    <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 14 14">
      <path d="M7 12.2C7 12.2 11 8.7 11 5.8C11 3.9 9.4 2.4 7.5 2.4C7.3 2.4 7.1 2.4 7 2.5C6.9 2.4 6.7 2.4 6.5 2.4C4.6 2.4 3 3.9 3 5.8C3 8.7 7 12.2 7 12.2Z" stroke="#0E0E0C" strokeWidth="1.25" />
      <circle cx="7" cy="5.8" r="1.1" stroke="#0E0E0C" strokeWidth="1.25" />
    </svg>
  );
}

function CareersClockIcon() {
  return (
    <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 14 14">
      <circle cx="7" cy="7" r="4.9" stroke="#0E0E0C" strokeWidth="1.25" />
      <path d="M7 4.4V7L8.8 8.1" stroke="#0E0E0C" strokeLinecap="round" strokeWidth="1.25" />
    </svg>
  );
}

function CareersWorkModeIcon() {
  return (
    <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 14 14">
      <rect height="6.2" rx="1.2" stroke="#0E0E0C" strokeWidth="1.25" width="8.8" x="2.6" y="5.2" />
      <path d="M5 5.2V4.5C5 3.6 5.7 2.9 6.6 2.9H7.4C8.3 2.9 9 3.6 9 4.5V5.2" stroke="#0E0E0C" strokeWidth="1.25" />
      <path d="M2.6 8.1H11.4" stroke="#0E0E0C" strokeWidth="1.25" />
    </svg>
  );
}

function CareersBackIcon() {
  return (
    <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
      <path d="M11.2 4.2L6.5 8.9L11.2 13.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      <path d="M6.9 8.9H14.1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function CareersPill({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-none border border-[#d6dace] bg-[#f2f3ef] p-2 text-[15px] text-[#5f644c]"
      style={{ fontFamily: mono, fontWeight: 400, lineHeight: "normal" }}
    >
      <span>{children}</span>
    </span>
  );
}

/* ─── Framework icons ─── */
function IdentityLayerIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="10.5" stroke="#b6bea1" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4.5" stroke="#b6bea1" strokeWidth="1.5" />
      <path d="M20 4.5V9.5" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M20 30.5V35.5" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M4.5 20H9.5" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M30.5 20H35.5" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function FundamentalsLayerIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 40 40">
      <rect height="5.5" rx="1.2" stroke="#b6bea1" strokeWidth="1.5" width="23" x="8.5" y="25.5" />
      <rect height="5.5" rx="1.2" stroke="#b6bea1" strokeWidth="1.5" width="17" x="11.5" y="18.2" />
      <rect height="5.5" rx="1.2" stroke="#b6bea1" strokeWidth="1.5" width="11" x="14.5" y="10.9" />
    </svg>
  );
}

function ArchitectureLayerIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 40 40">
      <rect height="23" rx="2" stroke="#b6bea1" strokeWidth="1.5" width="23" x="8.5" y="8.5" />
      <path d="M8.5 16.2H31.5" stroke="#b6bea1" strokeWidth="1.5" />
      <path d="M16.2 8.5V31.5" stroke="#b6bea1" strokeWidth="1.5" />
      <path d="M22 22H31.5" stroke="#b6bea1" strokeWidth="1.5" />
      <path d="M22 31.5V22" stroke="#b6bea1" strokeWidth="1.5" />
    </svg>
  );
}

function OperatingSystemLayerIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="6.2" stroke="#b6bea1" strokeWidth="1.5" />
      <path d="M20 7.2V11.2" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M20 28.8V32.8" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M7.2 20H11.2" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M28.8 20H32.8" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M11 11L13.8 13.8" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M26.2 26.2L29 29" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M29 11L26.2 13.8" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M13.8 26.2L11 29" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function IntelligenceLayerIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 40 40">
      <circle cx="10" cy="11" fill="#b6bea1" r="2.2" />
      <circle cx="29.8" cy="10.5" fill="#b6bea1" r="2.2" />
      <circle cx="20" cy="20" fill="#b6bea1" r="2.2" />
      <circle cx="10.5" cy="29.2" fill="#b6bea1" r="2.2" />
      <circle cx="30" cy="29" fill="#b6bea1" r="2.2" />
      <path d="M12 12.5L18.3 18.2" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M27.8 12L21.7 18.1" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12.4 27.8L18.1 21.9" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M27.8 27.4L21.9 21.7" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12.2 11.1H27.6" stroke="#b6bea1" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

/* ─── Footer big wordmark ─── */
function BigWordmark() {
  return (
    <div className="w-full overflow-hidden">
      <svg className="w-full h-auto" fill="none" viewBox="0 0 1128 209.816" preserveAspectRatio="xMidYMid meet">
        <path d={svgPaths.p7ab8900} fill="#101700" />
        <path d={svgPaths.p3b0eb280} fill="#101700" />
        <path d={svgPaths.p80dcd80} fill="#101700" />
        <path d={svgPaths.p2ab56d00} fill="#101700" />
        <path d={svgPaths.p16d8bc00} fill="#101700" />
        <path d={svgPaths.p16f12c00} fill="#101700" />
        <path d={svgPaths.p20f31800} fill="#101700" />
        <path d={svgPaths.p33ec1870} fill="#101700" />
        <path d={svgPaths.p20d98480} fill="#101700" />
      </svg>
    </div>
  );
}

/* ─── Data ─── */
const problemCards = [
  {
    id: 1,
    text: "Produto evolui sem alinhamento com comercial.",
    textMaxClass: "max-w-[207px]",
    illustrationSrc: "/illustrations/problem-01-produto-comercial.svg",
    illustrationClassName: "w-[128px] sm:w-[122px]",
    illustrationDesktopClassName: "left-[55px] top-[38px] w-[140px]",
  },
  {
    id: 2,
    text: "Marketing gera demanda que a operação não absorve.",
    textMaxClass: "max-w-[207px]",
    illustrationSrc: "/illustrations/problem-02-marketing-operacao.svg",
    illustrationClassName: "w-[118px] sm:w-[104px]",
    illustrationDesktopClassName: "left-[65px] top-[38px] w-[118px]",
  },
  {
    id: 3,
    text: "Tecnologia acumula decisões sem arquitetura clara.",
    textMaxClass: "max-w-[225px]",
    illustrationSrc: "/illustrations/problem-03-tecnologia-arquitetura.svg",
    illustrationClassName: "w-[132px] sm:w-[124px]",
    illustrationDesktopClassName: "left-[53px] top-[38px] w-[143px]",
  },
  {
    id: 4,
    text: "Gestão decide por percepção, não por sistema.",
    textMaxClass: "max-w-[207px]",
    illustrationSrc: "/illustrations/problem-04-gestao-percepcao.svg",
    illustrationClassName: "w-[122px] sm:w-[110px]",
    illustrationDesktopClassName: "left-[61px] top-[34px] w-[127px]",
  },
];

const serviceTags = ["Produto", "Tecnologia", "Comercial", "Operações", "Growth", "Inteligência Artificial"];

const services = [
  {
    title: "Produto & Estratégia",
    desc: "Estruturamos proposta de valor, arquitetura e roadmap com base em pesquisa e validação.",
    titleMaxClass: "max-w-[146px]",
    illustrationSrc: "/illustrations/services-01-produto-estrategia.svg",
    illustrationClassName: "w-[126px] sm:w-[112px]",
    illustrationDesktopClassName: "left-[59px] top-[37px] w-[130px]",
  },
  {
    title: "Tecnologia & Arquitetura",
    desc: "Projetamos arquiteturas escaláveis com stack moderna e bem definida.",
    titleMaxClass: "max-w-[175px]",
    illustrationSrc: "/illustrations/services-02-tecnologia-arquitetura.svg",
    illustrationClassName: "w-[150px] sm:w-[150px]",
    illustrationDesktopClassName: "left-[32px] top-[51px] w-[184px]",
  },
  {
    title: "Growth & Comercial",
    desc: "Estruturamos posicionamento, pricing e funis com lógica de margem e LTV.",
    titleMaxClass: "max-w-[143px]",
    illustrationSrc: "/illustrations/services-03-growth-comercial.svg",
    illustrationClassName: "w-[136px] sm:w-[122px]",
    illustrationDesktopClassName: "left-[55px] top-[51px] w-[139px]",
  },
  {
    title: "Inteligência & Operação",
    desc: "Modelamos indicadores, automatizamos processos e reduzimos fricção operacional.",
    titleMaxClass: "max-w-[169px]",
    illustrationSrc: "/illustrations/services-04-inteligencia-operacao.svg",
    illustrationClassName: "w-[154px] sm:w-[146px]",
    illustrationDesktopClassName: "left-[39px] top-[51px] w-[171px]",
  },
];

const frameworkLayers = [
  { label: "Identidade", widthClass: "w-[85px]", Icon: IdentityLayerIcon },
  { label: "Fundamentos", widthClass: "w-[96px]", Icon: FundamentalsLayerIcon },
  { label: "Arquitetura", widthClass: "w-[85px]", Icon: ArchitectureLayerIcon },
  { label: "Sistema Operacional", widthClass: "w-[86px]", Icon: OperatingSystemLayerIcon },
  { label: "Camada de Inteligência", widthClass: "w-[85px]", Icon: IntelligenceLayerIcon },
];

const audienceItems = [
  { text: "Empresas que já validaram mercado.", textMaxClass: "max-w-[162px]" },
  { text: "Fundadores que querem previsibilidade.", textMaxClass: "max-w-[171px]" },
  { text: "Negócios que cresceram rápido demais.", textMaxClass: "max-w-[194px]" },
  { text: "Produtos que precisam de estrutura.", textMaxClass: "max-w-[162px]" },
];

const featureItems = ["Design isolado.", "Código isolado.", "Marketing isolado."];
const marqueeText = "Most players optimize pieces. We optimize the system.";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/shiftlabs-br/", Icon: LinkedInIcon },
  { name: "Instagram", href: "https://instagram.com/shiftlabs.br", Icon: InstagramIcon },
  { name: "GitHub", href: "https://github.com/shiftlabs-br", Icon: GitHubIcon },
];

const careersSocialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/shiftlabs-br/", Icon: LinkedInIcon },
  { name: "Instagram", href: "https://instagram.com/shiftlabs.br", Icon: InstagramIcon },
  { name: "GitHub", href: "https://github.com/shiftlabs-br", Icon: GitHubIcon },
];

type CareersRole = {
  slug: string;
  title: string;
  displayTitle?: string;
  displaySeniority?: string;
  displayCommitment?: string;
  location: string;
  commitment: string;
  model: string;
  area: string;
  displayArea?: string;
  intro: string;
  cardSummary?: string;
  roleOneLiner?: string;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  stack: string[];
  process: string[];
  whyTitle?: string;
  roleTitle?: string;
  doTitle?: string;
  bringTitle?: string;
  stackTitle?: string;
  processTitle?: string;
  joinTitle?: string;
  joinUs?: string[];
  bodyMarkdown?: string;
};

type CareersRoleRow = {
  id: string;
  slug: string;
  title: string;
  display_title?: string | null;
  display_seniority?: string | null;
  display_commitment?: string | null;
  location: string;
  commitment: string;
  model: string;
  area: string;
  display_area?: string | null;
  intro: string;
  card_summary?: string | null;
  role_one_liner: string | null;
  body_markdown: string | null;
  about: string[] | null;
  responsibilities: string[] | null;
  requirements: string[] | null;
  stack: string[] | null;
  process: string[] | null;
  why_title: string | null;
  role_title: string | null;
  do_title: string | null;
  bring_title: string | null;
  stack_title: string | null;
  process_title: string | null;
  join_title: string | null;
  join_us: string[] | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

function toTextArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function normalizeSearchText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isGenericArea(value: string | undefined): boolean {
  const normalized = normalizeSearchText(value ?? "");
  return !normalized || normalized === "geral" || normalized === "general";
}

function inferRoleArea({
  area,
  title,
  intro,
  roleOneLiner,
  aboutFirst,
  bodyMarkdown,
}: {
  area?: string;
  title?: string;
  intro?: string;
  roleOneLiner?: string;
  aboutFirst?: string;
  bodyMarkdown?: string;
}): string {
  const trimmedArea = (area ?? "").trim();
  if (trimmedArea && !isGenericArea(trimmedArea)) {
    return trimmedArea;
  }

  const detectArea = (haystack: string): string | null => {
    if (/(finance|contab|fiscal|tesouraria|controlador|analista financeiro)/.test(haystack)) return "Financeiro";
    if (/(rh|people|recrut|talent|human)/.test(haystack)) return "Pessoas";
    if (/(customer success|suporte|atendimento|cx|operac)/.test(haystack)) return "Operações";
    if (/(video|criador|editor|conteudo|content)/.test(haystack)) return "Conteúdo";
    if (/(design|ui|ux)/.test(haystack)) return "Design";
    if (/(backend|frontend|fullstack|dev|engenhari|software|tech|tecnolog)/.test(haystack)) return "Tecnologia";
    if (/(produto|product|pm|manager)/.test(haystack)) return "Produto";
    if (/(growth|marketing|comercial|sdr|closer|venda|sales)/.test(haystack)) return "Growth & Comercial";
    return null;
  };

  const titleMatch = detectArea(normalizeSearchText(`${title ?? ""} ${area ?? ""}`));
  if (titleMatch) return titleMatch;

  const fullMatch = detectArea(
    normalizeSearchText(`${title ?? ""} ${intro ?? ""} ${roleOneLiner ?? ""} ${aboutFirst ?? ""} ${bodyMarkdown ?? ""}`),
  );
  if (fullMatch) return fullMatch;

  return "Geral";
}

function stripRoleSenioritySuffix(title: string): string {
  const trimmed = title.trim();
  if (!trimmed) return trimmed;

  const hasSeniorityTokens = (value: string) => {
    const normalized = normalizeSearchText(value);
    if (!normalized) return false;

    const tokens = normalized.split(" ").filter(Boolean);
    if (!tokens.length || tokens.length > 8) return false;

    const allowed = new Set([
      "junior",
      "jr",
      "pleno",
      "senior",
      "especialista",
      "lead",
      "lider",
      "mid",
      "middle",
      "nivel",
      "i",
      "ii",
      "iii",
      "iv",
      "v",
      "ou",
      "e",
      "de",
    ]);
    const levelTokens = new Set(["junior", "jr", "pleno", "senior", "especialista", "lead", "lider", "mid", "middle"]);

    let hasLevel = false;
    for (const token of tokens) {
      if (!allowed.has(token)) return false;
      if (levelTokens.has(token)) hasLevel = true;
    }
    return hasLevel;
  };

  const separatorMatch = trimmed.match(/^(.*?)(?:\s[-–—]\s|\s\|\s)([^|]+)$/);
  if (separatorMatch) {
    const base = separatorMatch[1].trim();
    const tail = separatorMatch[2].trim();
    if (base && hasSeniorityTokens(tail)) return base;
  }

  const parentheticalMatch = trimmed.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (parentheticalMatch) {
    const base = parentheticalMatch[1].trim();
    const tail = parentheticalMatch[2].trim();
    if (base && hasSeniorityTokens(tail)) return base;
  }

  return trimmed;
}

function applyRoleTitleAlias(title: string): string {
  const trimmed = title.trim();
  if (!trimmed) return trimmed;

  const normalized = normalizeSearchText(trimmed);

  if (/^executivo comercial\b/.test(normalized) && /(sdr|closer)/.test(normalized)) {
    return "Sales Executive";
  }

  if (/^(rh|recursos humanos)\b/.test(normalized)) {
    return "Gestor de RH";
  }

  if (/^(criador editor de video com i a|videomaker i a first)\b/.test(normalized)) {
    return "Videomaker I.A First";
  }

  return trimmed;
}

function getDisplayRoleTitle(title: string, precomputedDisplayTitle?: string): string {
  const sourceTitle = precomputedDisplayTitle?.trim() || title;
  return stripRoleSenioritySuffix(applyRoleTitleAlias(sourceTitle));
}

function detectSeniorityLabelInText(normalizedText: string): string | undefined {
  if (!normalizedText) return undefined;

  const firstMatchIndex = (patterns: RegExp[]): number => {
    let best = Number.POSITIVE_INFINITY;
    for (const pattern of patterns) {
      const index = normalizedText.search(pattern);
      if (index >= 0 && index < best) {
        best = index;
      }
    }
    return Number.isFinite(best) ? best : -1;
  };

  const matches = [
    { label: "JUNIOR", index: firstMatchIndex([/\bjunior\b/, /\bjr\b/]) },
    { label: "PLENO", index: firstMatchIndex([/\bpleno\b/]) },
    { label: "SENIOR", index: firstMatchIndex([/\bsenior\b/]) },
    { label: "ESPECIALISTA", index: firstMatchIndex([/\bespecialista\b/]) },
    { label: "LEAD", index: firstMatchIndex([/\blead\b/, /\blider\b/]) },
    { label: "MID", index: firstMatchIndex([/\bmid\b/, /\bmiddle\b/]) },
  ].filter((entry) => entry.index >= 0);

  if (!matches.length) return undefined;

  matches.sort((first, second) => first.index - second.index);
  return matches[0].label;
}

function inferRoleSeniorityLabel(title: string, slug?: string): string | undefined {
  const fromTitle = detectSeniorityLabelInText(normalizeSearchText(title));
  if (fromTitle) return fromTitle;

  const slugAsText = (slug ?? "").replace(/-/g, " ");
  return detectSeniorityLabelInText(normalizeSearchText(slugAsText));
}

function getRoleSeniorityBadge(title: string, precomputedDisplaySeniority?: string, slug?: string): string | undefined {
  const persisted = precomputedDisplaySeniority?.trim();
  if (persisted) return persisted.toUpperCase();
  return inferRoleSeniorityLabel(title, slug);
}

function toRoleIntroPreview(value: string): string {
  return value
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-–—]{2,}\s*/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/[*_`~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isGenericRoleSummary(value: string): boolean {
  const normalized = normalizeSearchText(value);
  if (!normalized || normalized.length < 20) return true;
  return (
    normalized === "missao do cargo" ||
    normalized === "descricao da vaga" ||
    normalized === "detalhes da vaga" ||
    normalized === "the role" ||
    normalized === "role summary" ||
    normalized === "summary" ||
    normalized === "about the role" ||
    normalized === "sobre a vaga"
  );
}

function firstMeaningfulMarkdownLine(markdown?: string): string {
  if (!markdown?.trim()) return "";
  const lines = markdown
    .split("\n")
    .map((line) => toRoleIntroPreview(line))
    .filter(Boolean);
  return lines.find((line) => !isGenericRoleSummary(line)) ?? "";
}

function getRoleCardSummary(
  role: Pick<CareersRole, "intro" | "roleOneLiner" | "bodyMarkdown" | "about" | "cardSummary">,
): string {
  const persistedSummary = role.cardSummary?.trim();
  if (persistedSummary) return persistedSummary;

  const candidates = [
    toRoleIntroPreview(role.intro),
    toRoleIntroPreview(role.roleOneLiner ?? ""),
    firstMeaningfulMarkdownLine(role.bodyMarkdown),
    toRoleIntroPreview(role.about[0] ?? ""),
  ];
  return (
    candidates.find((candidate) => candidate && !isGenericRoleSummary(candidate)) ??
    "Detalhes da vaga disponíveis na página completa."
  );
}

function getRoleCardArea(
  role: Pick<CareersRole, "area" | "displayArea" | "title" | "intro" | "roleOneLiner" | "about" | "bodyMarkdown">,
): string {
  const persistedArea = role.displayArea?.trim();
  if (persistedArea) return persistedArea;
  return inferRoleArea({
    area: role.area,
    title: role.title,
    intro: role.intro,
    roleOneLiner: role.roleOneLiner,
    aboutFirst: role.about?.[0],
    bodyMarkdown: role.bodyMarkdown,
  });
}

function getRoleDisplayCommitment(commitment: string, precomputedDisplayCommitment?: string): string {
  const persisted = precomputedDisplayCommitment?.trim();
  if (persisted) return persisted;

  const normalized = normalizeSearchText(commitment);
  if (normalized === "tempo integral") {
    return "Segunda à Sexta, 09h às 18h";
  }

  return commitment;
}

type SeoPayload = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  type?: "website" | "article";
  imagePath?: string;
  pageSchema?: Record<string, unknown> | Array<Record<string, unknown>> | null;
};

const hiddenCareerRoleSlugs = new Set(["social-media"]);

function filterVisibleCareersRoles<T extends { slug: string }>(roles: T[]): T[] {
  return roles.filter((role) => !hiddenCareerRoleSlugs.has(role.slug));
}

function truncateWithEllipsis(value: string, maxLength = 160): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const truncated = normalized.slice(0, maxLength - 1);
  const safeBreak = truncated.lastIndexOf(" ");
  if (safeBreak <= 60) return `${truncated.trim()}...`;
  return `${truncated.slice(0, safeBreak).trim()}...`;
}

function toAbsoluteUrl(pathname: string): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const finalPath = normalizedPath === "/" ? "/" : normalizedPath.replace(/\/+$/, "");
  return `${siteUrl}${finalPath}`;
}

function upsertMetaByName(name: string, content: string): void {
  const selector = `meta[name="${name}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string): void {
  const selector = `meta[property="${property}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string): void {
  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function upsertJsonLdScript(id: string, payload: Record<string, unknown> | Array<Record<string, unknown>> | null): void {
  const scriptId = `seo-jsonld-${id}`;
  const current = document.getElementById(scriptId);
  if (!payload) {
    if (current) current.remove();
    return;
  }

  let script = current as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
}

function mapCommitmentToEmploymentType(commitment: string): string {
  const normalized = normalizeSearchText(commitment);
  if (/(part time|meio periodo|parttime)/.test(normalized)) return "PART_TIME";
  if (/(estagio|intern)/.test(normalized)) return "INTERN";
  if (/(freela|freelance|contract|pj)/.test(normalized)) return "CONTRACTOR";
  return "FULL_TIME";
}

function buildOrganizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ShiftLabs",
    url: `${siteUrl}/`,
    logo: toAbsoluteUrl(seoDefaultImagePath),
    sameAs: careersSocialLinks.map((link) => link.href),
  };
}

function buildLandingPageSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ShiftLabs",
    url: `${siteUrl}/`,
    description: seoDefaultDescription,
    inLanguage: "pt-BR",
  };
}

function buildCareersCollectionSchema(roles: CareersRole[]): Record<string, unknown> {
  const sorted = [...filterVisibleCareersRoles(roles)].sort((first, second) =>
    getDisplayRoleTitle(first.title, first.displayTitle).localeCompare(getDisplayRoleTitle(second.title, second.displayTitle), "pt-BR", {
      sensitivity: "base",
    }),
  );

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vagas ShiftLabs",
    url: toAbsoluteUrl("/vagas"),
    description:
      "Lista de vagas abertas da ShiftLabs para areas de produto, tecnologia, growth, comercial e operacoes.",
    inLanguage: "pt-BR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sorted.map((role, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: getDisplayRoleTitle(role.title, role.displayTitle),
        url: toAbsoluteUrl(`/vagas/${role.slug}`),
      })),
    },
  };
}

function buildJobPostingSchema(role: CareersRole): Record<string, unknown> {
  const displayRoleTitle = getDisplayRoleTitle(role.title, role.displayTitle);
  const displayArea = getRoleCardArea(role);
  const normalizedDescription = truncateWithEllipsis(
    toRoleIntroPreview(role.bodyMarkdown ?? role.intro ?? getRoleCardSummary(role)),
    5000,
  );
  const isRemoteModel = /(remot|remote)/i.test(role.model);

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: displayRoleTitle,
    description: normalizedDescription,
    identifier: {
      "@type": "PropertyValue",
      name: "ShiftLabs",
      value: role.slug,
    },
    employmentType: mapCommitmentToEmploymentType(role.commitment),
    hiringOrganization: {
      "@type": "Organization",
      name: "ShiftLabs",
      sameAs: `${siteUrl}/`,
      logo: toAbsoluteUrl(seoDefaultImagePath),
    },
    industry: displayArea,
    workHours: role.commitment,
    jobLocationType: isRemoteModel ? "TELECOMMUTE" : undefined,
    applicantLocationRequirements: isRemoteModel
      ? {
          "@type": "Country",
          name: "Brasil",
        }
      : undefined,
    jobLocation: isRemoteModel
      ? undefined
      : {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: role.location,
            addressCountry: "BR",
          },
        },
    url: toAbsoluteUrl(`/vagas/${role.slug}`),
  };
}

function applySeoPayload(payload: SeoPayload): void {
  const normalizedTitle = payload.title.includes("ShiftLabs") ? payload.title : `${payload.title} | ShiftLabs`;
  const normalizedDescription = truncateWithEllipsis(payload.description, 160);
  const canonicalUrl = toAbsoluteUrl(payload.path);
  const imageUrl = toAbsoluteUrl(payload.imagePath ?? seoDefaultImagePath);

  document.documentElement.lang = "pt-BR";
  document.title = normalizedTitle;

  upsertMetaByName("description", normalizedDescription);
  upsertMetaByName("robots", payload.noindex ? "noindex, nofollow, noarchive" : "index, follow, max-image-preview:large");
  upsertMetaByName("theme-color", "#f2f3ef");
  upsertMetaByName("author", "ShiftLabs");

  upsertMetaByProperty("og:site_name", "ShiftLabs");
  upsertMetaByProperty("og:locale", "pt_BR");
  upsertMetaByProperty("og:type", payload.type ?? "website");
  upsertMetaByProperty("og:title", normalizedTitle);
  upsertMetaByProperty("og:description", normalizedDescription);
  upsertMetaByProperty("og:url", canonicalUrl);
  upsertMetaByProperty("og:image", imageUrl);
  upsertMetaByProperty("og:image:alt", "ShiftLabs");

  upsertMetaByName("twitter:card", "summary_large_image");
  upsertMetaByName("twitter:title", normalizedTitle);
  upsertMetaByName("twitter:description", normalizedDescription);
  upsertMetaByName("twitter:image", imageUrl);

  upsertLink("canonical", canonicalUrl);
  upsertJsonLdScript("organization", buildOrganizationSchema());
  upsertJsonLdScript("page", payload.pageSchema ?? null);
}

function rowToCareersRole(row: CareersRoleRow): CareersRole {
  const about = toTextArray(row.about);
  const responsibilities = toTextArray(row.responsibilities);
  const requirements = toTextArray(row.requirements);
  const stack = toTextArray(row.stack);
  const process = toTextArray(row.process);
  const joinUs = toTextArray(row.join_us);
  const area = inferRoleArea({
    area: row.area,
    title: row.title,
    intro: row.intro,
    roleOneLiner: row.role_one_liner ?? undefined,
    aboutFirst: about[0],
    bodyMarkdown: row.body_markdown ?? undefined,
  });

  return {
    slug: row.slug,
    title: row.title,
    displayTitle: row.display_title?.trim() || undefined,
    displaySeniority: row.display_seniority?.trim() || undefined,
    displayCommitment: row.display_commitment?.trim() || getRoleDisplayCommitment(row.commitment),
    location: row.location,
    commitment: row.commitment,
    model: row.model,
    area,
    displayArea: row.display_area?.trim() || area,
    intro: row.intro,
    cardSummary: row.card_summary?.trim() || undefined,
    roleOneLiner: row.role_one_liner ?? undefined,
    about,
    responsibilities,
    requirements,
    stack,
    process,
    whyTitle: row.why_title ?? undefined,
    roleTitle: row.role_title ?? undefined,
    doTitle: row.do_title ?? undefined,
    bringTitle: row.bring_title ?? undefined,
    stackTitle: row.stack_title ?? undefined,
    processTitle: row.process_title ?? undefined,
    joinTitle: row.join_title ?? undefined,
    joinUs,
    bodyMarkdown: row.body_markdown ?? undefined,
  };
}

function roleToCareersRowPayload(role: CareersRole) {
  const area = inferRoleArea({
    area: role.area,
    title: role.title,
    intro: role.intro,
    roleOneLiner: role.roleOneLiner,
    aboutFirst: role.about[0],
    bodyMarkdown: role.bodyMarkdown,
  });

  return {
    slug: role.slug,
    title: role.title,
    location: role.location,
    commitment: role.commitment,
    model: role.model,
    area,
    intro: role.intro,
    role_one_liner: role.roleOneLiner ?? null,
    body_markdown: role.bodyMarkdown ?? null,
    about: role.about ?? [],
    responsibilities: role.responsibilities ?? [],
    requirements: role.requirements ?? [],
    stack: role.stack ?? [],
    process: role.process ?? [],
    why_title: role.whyTitle ?? null,
    role_title: role.roleTitle ?? null,
    do_title: role.doTitle ?? null,
    bring_title: role.bringTitle ?? null,
    stack_title: role.stackTitle ?? null,
    process_title: role.processTitle ?? null,
    join_title: role.joinTitle ?? null,
    join_us: role.joinUs ?? [],
    is_published: true,
  };
}

function slugifyRole(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function splitEditorList(value: string): string[] {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function joinEditorList(items?: string[]): string {
  return items?.join("\n") ?? "";
}

function toOptionalTrimmed(value: string): string | undefined {
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

function extractIntroFromMarkdown(markdown: string): string | undefined {
  const lines = markdown
    .split("\n")
    .map((line) =>
      line
        .trim()
        .replace(/^#{1,6}\s+/, "")
        .replace(/^[-*]\s+/, "")
        .replace(/^\d+\.\s+/, ""),
    )
    .filter(Boolean);
  return lines[0];
}

function roleToMarkdown(role: CareersRole): string {
  if (role.bodyMarkdown?.trim()) return role.bodyMarkdown.trim();

  const blocks: string[] = [];

  if (role.about.length) {
    blocks.push(`## ${role.whyTitle ?? "Why ShiftLabs?"}`);
    blocks.push(...role.about);
  }

  if (role.intro || role.roleOneLiner) {
    blocks.push(`## ${role.roleTitle ?? "The Role"}`);
    if (role.intro) blocks.push(role.intro);
    if (role.roleOneLiner) blocks.push(role.roleOneLiner);
  }

  if (role.responsibilities.length) {
    blocks.push(`## ${role.doTitle ?? "What you'll do"}`);
    blocks.push(...role.responsibilities.map((item) => `- ${item}`));
  }

  if (role.requirements.length) {
    blocks.push(`## ${role.bringTitle ?? "What you'll bring"}`);
    blocks.push(...role.requirements.map((item) => `- ${item}`));
  }

  if (role.stack.length) {
    blocks.push(`## ${role.stackTitle ?? "Stack"}`);
    blocks.push(...role.stack.map((item) => `- ${item}`));
  }

  if (role.process.length) {
    blocks.push(`## ${role.processTitle ?? "Hiring process"}`);
    blocks.push(...role.process.map((item, index) => `${index + 1}. ${item}`));
  }

  if (role.joinUs?.length) {
    blocks.push(`## ${role.joinTitle ?? "Join Us"}`);
    blocks.push(...role.joinUs);
  }

  return blocks.join("\n\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripInlineMarkdown(value: string): string {
  return value
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .trim();
}

type StyledRoleSectionHeading = {
  canonical: string;
  patterns: RegExp[];
};

const styledRoleSectionHeadings: StyledRoleSectionHeading[] = [
  {
    canonical: "Missão do cargo",
    patterns: [/\bmissao do cargo\b/],
  },
  {
    canonical: "Responsabilidades no dia a dia",
    patterns: [/\bresponsabilidades (no|do|de) dia a dia\b/],
  },
  {
    canonical: "Perfil esperado",
    patterns: [/\bperfil esperado\b/],
  },
  {
    canonical: "O que esperamos nos primeiros 60–90 dias",
    patterns: [/\bo que esperamos nos primeiros 60(?: a)? 90 dias\b/],
  },
];

function resolveStyledRoleSectionHeading(rawHeading: string): string | null {
  const normalized = normalizeSearchText(stripInlineMarkdown(rawHeading));
  for (const entry of styledRoleSectionHeadings) {
    if (entry.patterns.some((pattern) => pattern.test(normalized))) {
      return entry.canonical;
    }
  }
  return null;
}

function isStyledRoleSectionHeading(rawHeading: string): boolean {
  return resolveStyledRoleSectionHeading(rawHeading) !== null;
}

function formatRoleSectionHeading(rawHeading: string): string {
  const canonicalHeading = resolveStyledRoleSectionHeading(rawHeading);
  const heading = (canonicalHeading ?? stripInlineMarkdown(rawHeading))
    .replace(/^\/+/, "")
    .replace(/[:–—-]+$/g, "")
    .trim();
  return `/${heading.toLocaleUpperCase("pt-BR")}`;
}

function inlineMarkdownToHtml(value: string): string {
  const links: Array<{ token: string; html: string }> = [];
  const withTokens = value.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_match, label: string, url: string) => {
    const token = `@@LINKTOKEN${links.length}@@`;
    links.push({
      token,
      html: `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`,
    });
    return token;
  });

  let html = escapeHtml(withTokens)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_]+)__/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/_([^_]+)_/g, "<em>$1</em>");

  for (const link of links) {
    html = html.replace(link.token, link.html);
  }

  return html;
}

function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const html: string[] = [];
  let index = 0;

  const isBlank = (line: string) => line.trim().length === 0;

  while (index < lines.length) {
    const current = lines[index];
    const trimmed = current.trim();

    if (isBlank(current)) {
      index += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = Math.min(6, headingMatch[1].length);
      const headingText = headingMatch[2].trim();
      if (isStyledRoleSectionHeading(headingText)) {
        html.push(
          `<h2 class="role-section-label" style="font-family: 'Basis Grotesque Pro Mono', 'InterDisplay', sans-serif;">${escapeHtml(formatRoleSectionHeading(headingText))}</h2>`,
        );
      } else {
        html.push(`<h${level}>${inlineMarkdownToHtml(headingText)}</h${level}>`);
      }
      index += 1;
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
        index += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${inlineMarkdownToHtml(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      html.push(`<ol>${items.map((item) => `<li>${inlineMarkdownToHtml(item)}</li>`).join("")}</ol>`);
      continue;
    }

    const paragraph: string[] = [];
    while (
      index < lines.length &&
      !isBlank(lines[index]) &&
      !/^(#{1,6})\s+/.test(lines[index].trim()) &&
      !/^[-*]\s+/.test(lines[index].trim()) &&
      !/^\d+\.\s+/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    if (paragraph.length === 1 && isStyledRoleSectionHeading(paragraph[0])) {
      html.push(
        `<h2 class="role-section-label" style="font-family: 'Basis Grotesque Pro Mono', 'InterDisplay', sans-serif;">${escapeHtml(formatRoleSectionHeading(paragraph[0]))}</h2>`,
      );
    } else {
      html.push(`<p>${inlineMarkdownToHtml(paragraph.join(" "))}</p>`);
    }
  }

  return html.join("");
}

function normalizeCareersRole(raw: unknown): CareersRole | null {
  if (!raw || typeof raw !== "object") return null;
  const entry = raw as Partial<CareersRole>;
  if (
    !entry.slug ||
    !entry.title ||
    !entry.location ||
    !entry.commitment ||
    !entry.model ||
    !entry.area ||
    !entry.intro
  ) {
    return null;
  }
  const toList = (value: unknown) => (Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0) : []);
  const about = toList(entry.about);
  const responsibilities = toList(entry.responsibilities);
  const requirements = toList(entry.requirements);
  const stack = toList(entry.stack);
  const process = toList(entry.process);
  const joinUs = toList(entry.joinUs);
  const area = inferRoleArea({
    area: entry.area,
    title: entry.title,
    intro: entry.intro,
    roleOneLiner: entry.roleOneLiner,
    aboutFirst: about[0],
    bodyMarkdown: entry.bodyMarkdown,
  });

  return {
    slug: entry.slug.trim(),
    title: entry.title.trim(),
    displayTitle: getDisplayRoleTitle(entry.title.trim()),
    displaySeniority: getRoleSeniorityBadge(entry.title.trim(), undefined, entry.slug.trim()),
    displayCommitment: getRoleDisplayCommitment(entry.commitment.trim()),
    location: entry.location.trim(),
    commitment: entry.commitment.trim(),
    model: entry.model.trim(),
    area,
    displayArea: area,
    intro: entry.intro.trim(),
    cardSummary: getRoleCardSummary({
      intro: entry.intro.trim(),
      roleOneLiner: entry.roleOneLiner?.trim() || undefined,
      bodyMarkdown: entry.bodyMarkdown?.trim() || undefined,
      about,
      cardSummary: undefined,
    }),
    roleOneLiner: entry.roleOneLiner?.trim() || undefined,
    about,
    responsibilities,
    requirements,
    stack,
    process,
    whyTitle: entry.whyTitle?.trim() || undefined,
    roleTitle: entry.roleTitle?.trim() || undefined,
    doTitle: entry.doTitle?.trim() || undefined,
    bringTitle: entry.bringTitle?.trim() || undefined,
    stackTitle: entry.stackTitle?.trim() || undefined,
    processTitle: entry.processTitle?.trim() || undefined,
    joinTitle: entry.joinTitle?.trim() || undefined,
    joinUs,
    bodyMarkdown: entry.bodyMarkdown?.trim() || undefined,
  };
}

type CareersEditorFormState = {
  slug: string;
  title: string;
  location: string;
  commitment: string;
  model: string;
  area: string;
  intro: string;
  roleOneLiner: string;
  about: string;
  responsibilities: string;
  requirements: string;
  stack: string;
  process: string;
  whyTitle: string;
  roleTitle: string;
  doTitle: string;
  bringTitle: string;
  stackTitle: string;
  processTitle: string;
  joinTitle: string;
  joinUs: string;
  bodyMarkdown: string;
};

function createEditorFormState(role?: CareersRole): CareersEditorFormState {
  return {
    slug: role?.slug ?? "",
    title: role?.title ?? "",
    location: role?.location ?? "Remoto, Brasil",
    commitment: role?.commitment ?? "Tempo integral",
    model: role?.model ?? "Remoto",
    area: role?.area ?? "",
    intro: role?.intro ?? "",
    roleOneLiner: role?.roleOneLiner ?? "",
    about: joinEditorList(role?.about),
    responsibilities: joinEditorList(role?.responsibilities),
    requirements: joinEditorList(role?.requirements),
    stack: joinEditorList(role?.stack),
    process: joinEditorList(role?.process),
    whyTitle: role?.whyTitle ?? "",
    roleTitle: role?.roleTitle ?? "",
    doTitle: role?.doTitle ?? "",
    bringTitle: role?.bringTitle ?? "",
    stackTitle: role?.stackTitle ?? "",
    processTitle: role?.processTitle ?? "",
    joinTitle: role?.joinTitle ?? "",
    joinUs: joinEditorList(role?.joinUs),
    bodyMarkdown: role ? roleToMarkdown(role) : "",
  };
}

const defaultCareersRoles: CareersRole[] = [
  {
    slug: "ai-software-engineer",
    title: "AI Software Engineer",
    location: "Belgrade, Serbia & San Francisco, CA",
    commitment: "Full-time",
    model: "On-site",
    area: "AI research, back-end engineering, and orchestration",
    intro:
      "We're looking for an AI Software Engineer to build the intelligence layer of Wonder. You'll turn research and experimentation into production-ready systems.",
    roleOneLiner:
      "In one sentence: Train, tune, and orchestrate AI systems that help people design in real time.",
    whyTitle: "Why Wonder?",
    roleTitle: "The Role",
    doTitle: "What you'll do",
    bringTitle: "What we're looking for",
    stackTitle: "Our Tech Stack",
    processTitle: "How we hire",
    joinTitle: "Join Us",
    about: [
      "Wonder is an AI-native design tool that bridges the gap between idea and experience. Today's tools stop at static mock-ups - Wonder goes further, letting designers shape how products behave and respond through an intelligent, interactive canvas. It's not about designing screens. It's about designing experiences - dynamic, contextual, and powered by AI from the start.",
      "We're building the next generation of design software where AI is not an assistant sitting on the side - it's a co-creator. Think next-generation interface design, but smarter.",
      "We're a small, talent-dense team building a generation-defining company. We value autonomy, ownership, high velocity, and low-ego collaboration. We seek out people who care deeply, ship fast, and are eager to make a dent in the world. No corporate bureaucracy - just engineers who care deeply about craft, performance, and building things that feel magical.",
    ],
    responsibilities: [
      "Fine-tune and evaluate models that power Wonder's design generation and iteration loop.",
      "Build and improve context retrieval engines and agentic flows that understand user intent.",
      "Collaborate closely with other engineers to integrate AI seamlessly into Wonder's creative canvas.",
      "Explore, benchmark, and push the limits of emerging open and proprietary models.",
      "Shape early technical culture, coding standards, and long-term architecture decisions.",
    ],
    requirements: [
      "Led or contributed AI / LLM systems at top AI labs or fast-moving startups.",
      "Deep understanding of transformer architectures, fine-tuning, retrieval-augmented generation (RAG), and agentic workflows.",
      "Experience managing the end-to-end lifecycle of ML models, including data preparation, experiment tracking, and performance monitoring.",
      "Software development experience, specifically back-end or infrastructure engineering.",
    ],
    stack: [
      "Frontend: Svelte 5, TypeScript, Tailwind",
      "Backend: Golang",
      "Infra: GCP, Firebase, Amazon Bedrock, Azure AI Foundry",
      "Always exploring what's next",
    ],
    process: [
      "Apply for the position.",
      "Join an initial exploratory call.",
      "Go through a technical interview focused on problem-solving and creativity.",
      "Meet the team and talk about what we could build together.",
    ],
    joinUs: [
      "Wonder is a well-funded startup where you'll get stock options and a salary based on your expertise.",
      "We love working together in person and often organize team-building events. If you want to help shape the future of design - where AI isn't an add-on but the foundation - join us. Come build the next chapter of creative software at Wonder.",
      "P.S. - We're equal opportunity employers who believe diverse teams build better products.",
    ],
  },
  {
    slug: "product-strategist",
    title: "Product Strategist",
    location: "Remoto, Brasil",
    commitment: "Tempo integral",
    model: "Remoto",
    area: "Produto",
    intro:
      "Buscamos alguém para estruturar direção de produto com visão de negócio, pesquisa e entregas orientadas a impacto.",
    about: [
      "A função conecta discovery, priorização e execução para que produto deixe de ser uma sequência de pedidos e vire sistema de crescimento.",
      "Você vai trabalhar com times multidisciplinares para alinhar proposta de valor, roadmap e decisões de escopo com evidência real.",
    ],
    responsibilities: [
      "Conduzir discovery contínuo com usuários e stakeholders.",
      "Definir estratégias de produto orientadas por resultado de negócio.",
      "Priorizar roadmap com critérios claros e transparentes.",
      "Garantir qualidade de handoff entre produto, design e engenharia.",
      "Acompanhar métricas de adoção, retenção e valor entregue.",
    ],
    requirements: [
      "Experiência em produto digital B2B ou B2C.",
      "Domínio de técnicas de discovery e experimentação.",
      "Capacidade analítica para suportar priorização com dados.",
      "Excelente escrita e facilitação de discussões estratégicas.",
    ],
    stack: ["Figma", "Amplitude", "Mixpanel", "Notion", "Linear"],
    process: [
      "Triagem inicial.",
      "Entrevista com Product Lead.",
      "Case de priorização de roadmap.",
      "Conversa final com founders.",
    ],
  },
  {
    slug: "tech-lead-systems",
    title: "Tech Lead (Systems)",
    location: "São Paulo, BR",
    commitment: "Tempo integral",
    model: "Híbrido",
    area: "Tecnologia",
    intro:
      "A vaga é para liderança técnica com foco em arquitetura, qualidade de entrega e decisões de engenharia com impacto no negócio.",
    about: [
      "Você será responsável por orientar o desenho técnico das soluções e elevar o nível de execução dos squads.",
      "Procuramos alguém que mantenha alta barra de engenharia sem perder pragmatismo em ambientes de crescimento rápido.",
    ],
    responsibilities: [
      "Definir arquitetura de soluções escaláveis e sustentáveis.",
      "Liderar code reviews e padrões de qualidade técnica.",
      "Apoiar planejamento técnico e desdobramento de iniciativas.",
      "Atuar como ponte entre necessidades de negócio e decisões de engenharia.",
      "Mentorar devs e fortalecer cultura técnica do time.",
    ],
    requirements: [
      "Experiência sólida com liderança técnica em produtos digitais.",
      "Base forte em backend, integrações e desenho de sistemas.",
      "Capacidade de priorizar dívida técnica com racional de negócio.",
      "Boa comunicação e tomada de decisão em cenários de pressão.",
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    process: [
      "Screening técnico.",
      "Entrevista com Engineering Lead.",
      "Case de arquitetura.",
      "Entrevista final cultural e de liderança.",
    ],
  },
  {
    slug: "growth-systems-analyst",
    title: "Growth Systems Analyst",
    location: "Remoto, Brasil",
    commitment: "Tempo integral",
    model: "Remoto",
    area: "Growth",
    intro:
      "Você vai desenhar e operar sistemas de growth com foco em previsibilidade de aquisição, ativação e retenção.",
    about: [
      "A posição combina visão analítica e execução operacional para criar mecanismos de crescimento consistentes.",
      "Você atuará na interseção entre marketing, produto e vendas, organizando dados e processos para acelerar decisões.",
    ],
    responsibilities: [
      "Estruturar funis de growth com métricas de ponta a ponta.",
      "Definir rotinas e dashboards para acompanhamento semanal.",
      "Conduzir experimentos de aquisição e conversão.",
      "Mapear gargalos operacionais e propor automações.",
      "Trabalhar com squads para transformar aprendizado em playbooks.",
    ],
    requirements: [
      "Experiência com growth analytics e operação de funil.",
      "Conhecimento de métricas como CAC, LTV, retenção e conversão.",
      "Capacidade de análise quantitativa e organização de hipóteses.",
      "Perfil colaborativo para atuar com times de diferentes áreas.",
    ],
    stack: ["GA4", "HubSpot", "Looker Studio", "SQL", "Zapier"],
    process: [
      "Triagem e conversa inicial.",
      "Entrevista de contexto e problema.",
      "Case prático de growth.",
      "Entrevista final e proposta.",
    ],
  },
];

type CaseLogoKey = "menux" | "cortex";

type HeroContactFormState = {
  name: string;
  whatsapp: string;
  email: string;
  company: string;
  subject: string;
};

type HeroContactFeedback = {
  type: "success" | "error";
  message: string;
};

const initialHeroContactFormState: HeroContactFormState = {
  name: "",
  whatsapp: "",
  email: "",
  company: "",
  subject: "",
};

/* ════════════════════════════════════════════ */
function LandingPage() {
  const [activeCaseLogo, setActiveCaseLogo] = useState<CaseLogoKey>("menux");
  const [isHeaderCondensed, setIsHeaderCondensed] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [heroContactForm, setHeroContactForm] = useState<HeroContactFormState>(initialHeroContactFormState);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [heroContactFeedback, setHeroContactFeedback] = useState<HeroContactFeedback | null>(null);
  const isContactSuccess = heroContactFeedback?.type === "success";
  const isContactError = heroContactFeedback?.type === "error";

  const updateHeroContactField = (field: keyof HeroContactFormState, value: string) => {
    setHeroContactForm((current) => ({ ...current, [field]: value }));
  };

  const openContactModal = () => {
    setHeroContactFeedback(null);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setHeroContactFeedback(null);
  };

  const resetContactModalFeedback = () => {
    setHeroContactFeedback(null);
  };

  const submitHeroContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isContactSubmitting) return;

    const name = heroContactForm.name.trim();
    const whatsapp = heroContactForm.whatsapp.trim();
    const email = heroContactForm.email.trim();
    const company = heroContactForm.company.trim();
    const subject = heroContactForm.subject.trim();

    if (!name || !whatsapp || !email || !company || !subject) {
      setHeroContactFeedback({
        type: "error",
        message: "Preencha todos os campos para enviar.",
      });
      return;
    }

    if (!supabase) {
      setHeroContactFeedback({
        type: "error",
        message: "Configuração de backend indisponível no momento.",
      });
      return;
    }

    setIsContactSubmitting(true);
    setHeroContactFeedback(null);
    const { error } = await supabase.from("contact_leads").insert({
      name,
      whatsapp,
      email,
      company,
      subject,
      source_page: typeof window !== "undefined" ? window.location.pathname : "/",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    });
    setIsContactSubmitting(false);

    if (error) {
      setHeroContactFeedback({
        type: "error",
        message: "Não foi possível enviar agora. Tente novamente.",
      });
      return;
    }

    setHeroContactForm(initialHeroContactFormState);
    setHeroContactFeedback({
      type: "success",
      message: "Contato enviado com sucesso. Retornaremos em breve.",
    });
  };

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!revealNodes.length) return;
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }, []);

  useEffect(() => {
    let rafId = 0;

    const updateHeaderMode = () => {
      const shouldCondense = window.scrollY > 28 && window.innerWidth >= 1024;
      setIsHeaderCondensed((current) => (current === shouldCondense ? current : shouldCondense));
    };

    const scheduleHeaderUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateHeaderMode();
      });
    };

    updateHeaderMode();
    window.addEventListener("scroll", scheduleHeaderUpdate, { passive: true });
    window.addEventListener("resize", scheduleHeaderUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleHeaderUpdate);
      window.removeEventListener("resize", scheduleHeaderUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    if (!isContactModalOpen) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeContactModal();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isContactModalOpen]);

  return (
    <div className="bg-[#f2f3ef] min-h-screen w-full overflow-x-hidden pt-[72px]">
      {/* ===== FIXED TOP BAR ===== */}
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-out ${
          isHeaderCondensed ? "pt-3" : "pt-0"
        }`}
      >
        <div className={isHeaderCondensed ? "mx-auto w-full max-w-[1040px] px-4" : "w-full"}>
          <header
            className={`transition-all duration-300 ease-out ${
              isHeaderCondensed
                ? "rounded-[16px] border border-[#d6dace] bg-[#f2f3ef]"
                : "border-b border-[#d6dace] bg-[#f2f3ef]"
            }`}
          >
            <div
              className={`mx-auto h-[72px] flex items-center justify-between gap-6 transition-[padding,max-width] duration-300 ease-out ${
                isHeaderCondensed ? "max-w-none px-6" : "max-w-[1512px] px-6 xl:px-[192px]"
              }`}
            >
              <a href="/" aria-label="ShiftLabs" title="ShiftLabs" className="inline-flex min-h-[44px] items-center gap-2 py-1">
                <ShiftLabsIcon />
                <ShiftLabsWordmark />
              </a>
              <div className="flex items-center gap-4 md:gap-6">
                <a
                  href="/vagas"
                  className="inline-flex min-h-[44px] items-center px-2 text-[#5f644c] hover:text-[#101700] transition-colors text-[14px]"
                  style={{ fontFamily: mono, fontWeight: 400, lineHeight: "normal" }}
                >
                  /VAGAS
                </a>
                <span aria-hidden className="h-4 w-px bg-[#d6dace]" />
                <div className="flex items-center gap-3 md:gap-4">
                  {socialLinks.map(({ name, href, Icon }) => (
                    <a
                      key={`header-${name}`}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      title={name}
                      className="inline-flex h-11 w-11 items-center justify-center opacity-70 transition-opacity hover:opacity-100"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      <main className="text-[#101700]">
      {/* ===== HERO ===== */}
      <div id="inicio" data-reveal="section" className="border-y border-[#d6dace] scroll-mt-[96px]">
        <div className="max-w-[1512px] mx-auto flex relative">
          <XlHelper className="border-r border-[#d6dace]" />
          <div className="flex flex-col lg:flex-row flex-1 min-w-0">
            <div className="flex flex-col justify-between p-6 w-full lg:w-1/2 min-h-[360px] lg:h-[462px]">
              <div className="flex flex-col gap-12 max-w-[450px]">
                <div className="flex flex-col gap-6">
                  <SectionLabel>Engineering Predictable Growth</SectionLabel>
                  <SectionTitle className="text-[28px] md:text-[36px] lg:text-[40px]">
                    <p className="mb-0">{`We don’t build ideas. `}</p>
                    <p>We engineer businesses.</p>
                  </SectionTitle>
                </div>
                <p
                  data-reveal="text"
                  className="text-[#5f644c] text-[14px] md:text-[16px] max-w-[343px]"
                  style={{ fontFamily: body, lineHeight: 1.333 }}
                >
                  A Shift Labs transforma ideias, operações confusas ou produtos mal estruturados em negócios organizados, previsíveis e escaláveis.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <button
                  type="button"
                  onClick={openContactModal}
                  className="inline-flex bg-[#101700] text-[#f2f3ef] px-4 py-4 text-[14px] md:text-[16px] uppercase cursor-pointer"
                  style={{ fontFamily: mono }}
                >
                  conhecer mais
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 w-full lg:w-1/2 min-h-[300px] lg:h-[462px] lg:border-l border-[#d6dace]">
              <div className="bg-white w-full max-w-[532px] aspect-[532/430] overflow-hidden">
                <video
                  className="w-full h-full object-cover pointer-events-none"
                  src="/videos/hero-header.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Video institucional da ShiftLabs"
                />
              </div>
            </div>
          </div>
          <XlHelper className="border-l border-[#d6dace]" />
          <SectionBorderTicks positions={["192px", "calc(100% - 192px)"]} />
        </div>
      </div>

      {/* ===== ECOSYSTEM ===== */}
      <div data-reveal="section" className="border-b border-[#d6dace]">
        <div className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex flex-col gap-6 max-w-[405px]">
              <SectionLabel>/Nosso Ecossistema</SectionLabel>
              <SectionTitle className="text-[20px] md:text-[24px]">
                Plataformas e operações coordenadas pela mesma engenharia.
              </SectionTitle>
            </div>
            <div className="flex flex-wrap items-center gap-6 md:gap-12">
              <MenuxLogo /><CortexLogo /><AtomLogo /><AuraLogo />
            </div>
          </div>
        </div>
      </div>

      {/* ===== PROBLEM HEADER ===== */}
      <div id="problema" data-reveal="section" className="border-b border-[#d6dace] scroll-mt-[96px]">
        <div className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex flex-col gap-6 max-w-[499px]">
              <SectionLabel>/problema</SectionLabel>
              <SectionTitle className="text-[28px] md:text-[36px] lg:text-[40px]">
                Crescer não é o problema. Crescer desorganizado é.
              </SectionTitle>
            </div>
            <p
              data-reveal="text"
              className="text-[#5f644c] text-[14px] md:text-[16px] max-w-[335px]"
              style={{ fontFamily: body, lineHeight: 1.022 }}
            >
              A maioria das empresas cresce mais rápido do que sua própria estrutura consegue sustentar.
            </p>
          </div>
        </div>
      </div>

      {/* ===== PROBLEM CARDS ===== */}
      <div data-reveal="section" className="border-b border-[#d6dace]">
        <div className="max-w-[1512px] mx-auto flex relative">
          <XlHelper />
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 border-x border-[#d6dace]">
            {problemCards.map((card, index) => (
              <div
                key={card.id}
                className={`relative flex flex-col p-6 min-h-[248px] md:h-[231px] md:pr-[249px] ${
                  index > 0 ? "border-t border-[#d6dace]" : ""
                } ${index % 2 === 1 ? "sm:border-l sm:border-[#d6dace]" : ""} ${
                  index >= 2 ? "sm:border-t sm:border-[#d6dace]" : ""
                } ${index === 1 ? "sm:border-t-0" : ""}`}
              >
                <div className="pointer-events-none mb-4 flex w-full justify-end md:hidden">
                  <img
                    alt=""
                    aria-hidden
                    src={card.illustrationSrc}
                    className={`h-auto w-auto object-contain ${card.illustrationClassName}`}
                  />
                </div>
                <div className="pointer-events-none absolute right-0 top-0 hidden h-[232px] w-[249px] md:block">
                  <img
                    alt=""
                    aria-hidden
                    src={card.illustrationSrc}
                    className={`absolute h-auto object-contain ${card.illustrationDesktopClassName}`}
                  />
                </div>
                <p data-reveal="text" className={`relative z-[1] max-w-[250px] text-[#101700] text-[14px] md:text-[16px] md:mt-auto ${card.textMaxClass}`} style={{ fontFamily: display, fontWeight: 500, lineHeight: "normal" }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
          <XlHelper />
          <SectionBorderTicks positions={["192px", "756px", "calc(100% - 192px)"]} />
        </div>
      </div>

      {/* ===== FRAGMENT QUOTE ===== */}
      <div data-reveal="section" className="border-b border-[#d6dace]">
        <div className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-12">
          <div className="flex justify-end">
            <p
              data-reveal="text"
              className="text-[#101700] text-[18px] md:text-[20px] lg:text-[24px] max-w-[472px]"
              style={{ fontFamily: display, fontWeight: 500, lineHeight: "normal" }}
            >
              O resultado não é visível no início. É fragmentação. E fragmentação não quebra no dia um. Ela corrói aos poucos empresas que “estavam indo bem”.
            </p>
          </div>
        </div>
      </div>

      {/* ===== THE SHIFT APPROACH ===== */}
      <div id="abordagem" data-reveal="section" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] pt-16 pb-9 scroll-mt-[96px]">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12">
          <div className="flex flex-col gap-8 max-w-[649px]">
            <SectionLabel>/The Shift Approach</SectionLabel>
            <SectionTitle className="text-[36px] md:text-[48px] lg:text-[64px]">
              From chaos to coordinated systems.
            </SectionTitle>
          </div>
          <p
            data-reveal="text"
            className="text-[#5f644c] text-[14px] md:text-[16px] max-w-[320px]"
            style={{ fontFamily: body, lineHeight: 1.022 }}
          >
            <span>A Shift Labs não é </span>
            <span className="text-[#101700]" style={{ fontFamily: display, fontWeight: 500 }}>agência. </span>
            <span>Não é </span>
            <span className="text-[#101700]" style={{ fontFamily: display, fontWeight: 500 }}>consultoria tradicional.</span>
            <span> Não é </span>
            <span className="text-[#101700]" style={{ fontFamily: display, fontWeight: 500 }}>software factory.</span>
          </p>
        </div>
      </div>

      {/* ===== SERVICE TAGS ===== */}
      <div data-reveal="section" className="border-y border-[#d6dace]">
        <div className="max-w-[1512px] mx-auto flex relative">
          <XlHelper className="border-r border-[#d6dace]" />
          <div className="flex flex-col lg:flex-row flex-1 min-w-0">
            <div className="flex flex-col justify-between p-6 border-b lg:border-b-0 lg:border-r border-[#d6dace] w-full lg:w-1/2 min-h-[140px] lg:h-[174px]">
              <SectionTitle className="text-[20px] md:text-[24px] max-w-[242px]">
                Somos a engenharia estrutural do negócio.
              </SectionTitle>
              <p
                data-reveal="text"
                className="text-[#5f644c] text-[14px] md:text-[16px] uppercase mt-4"
                style={{ fontFamily: mono }}
              >
                Trabalhamos na interseção de:
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:hidden">
              {serviceTags.map((tag, index) => (
                <div
                  key={`mobile-${tag}`}
                  className={`flex items-end p-4 h-[87px] ${index % 2 === 1 ? "border-l border-[#d6dace]" : ""} ${
                    index >= 2 ? "border-t border-[#d6dace]" : ""
                  }`}
                >
                  <p data-reveal="text" className="text-[#101700] text-[14px] md:text-[16px]" style={{ fontFamily: display, fontWeight: 500, lineHeight: "normal" }}>
                    {tag}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden sm:grid flex-1 grid-cols-3">
              {serviceTags.map((tag, index) => (
                <div
                  key={`desktop-${tag}`}
                  className={`flex items-end p-4 h-[87px] ${index % 3 !== 0 ? "border-l border-[#d6dace]" : ""} ${
                    index >= 3 ? "border-t border-[#d6dace]" : ""
                  }`}
                >
                  <p data-reveal="text" className="text-[#101700] text-[14px] md:text-[16px]" style={{ fontFamily: display, fontWeight: 500, lineHeight: "normal" }}>
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <XlHelper className="border-l border-[#d6dace]" />
          <SectionBorderTicks positions={["192px", "756px", "944px", "1132px", "calc(100% - 192px)"]} />
        </div>
      </div>

      {/* ===== O QUE FAZEMOS ===== */}
      <div id="servicos" data-reveal="section" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] pt-16 pb-9 scroll-mt-[96px]">
        <div className="flex flex-col gap-6 max-w-[499px]">
          <SectionLabel>/O QUE FAZEMOS</SectionLabel>
          <SectionTitle className="text-[28px] md:text-[36px] lg:text-[40px]">
            <p className="mb-0">Como estruturamos</p>
            <p>negócios.</p>
          </SectionTitle>
        </div>
      </div>

      {/* ===== SERVICES GRID ===== */}
      <div data-reveal="section" className="max-w-[1512px] mx-auto flex relative">
        <XlHelper className="border-t border-[#d6dace]" />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 border-x border-t border-[#d6dace]">
          {services.map((svc, index) => (
            <div
              key={svc.title}
              className={`relative flex flex-col p-6 min-h-[286px] md:h-[231px] md:pr-[249px] ${
                index > 0 ? "border-t border-[#d6dace]" : ""
              } ${index % 2 === 1 ? "md:border-l md:border-[#d6dace]" : ""} ${
                index >= 2 ? "md:border-t md:border-[#d6dace]" : ""
              } ${index === 1 ? "md:border-t-0" : ""}`}
            >
              <div className="pointer-events-none mb-4 flex w-full justify-end md:hidden">
                <img
                  alt=""
                  aria-hidden
                  src={svc.illustrationSrc}
                  className={`h-auto w-auto object-contain ${svc.illustrationClassName}`}
                />
              </div>
              <div className="pointer-events-none absolute right-0 top-0 hidden h-[232px] w-[249px] md:block">
                <img
                  alt=""
                  aria-hidden
                  src={svc.illustrationSrc}
                  className={`absolute h-auto object-contain ${svc.illustrationDesktopClassName}`}
                />
              </div>
              <div className="relative z-[1] flex max-w-[250px] flex-col gap-4 md:max-w-none md:mt-auto">
                <p data-reveal="text" className={`text-[#101700] text-[14px] md:text-[16px] ${svc.titleMaxClass}`} style={{ fontFamily: display, fontWeight: 500, lineHeight: "normal" }}>
                  {svc.title}
                </p>
                <p data-reveal="text" className="text-[#5f644c] text-[14px] md:text-[16px] max-w-[235px]" style={{ fontFamily: body, lineHeight: 1.076 }}>
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <XlHelper className="border-t border-[#d6dace]" />
        <SectionBorderTicks positions={["192px", "756px", "calc(100% - 192px)"]} />
      </div>

      {/* ===== SERVICES QUOTE ===== */}
      <div data-reveal="section" className="border-t border-[#d6dace]">
        <div className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-12">
          <div className="flex justify-end">
            <p
              data-reveal="text"
              className="text-[#101700] text-[18px] md:text-[20px] lg:text-[24px] max-w-[221px]"
              style={{ fontFamily: display, fontWeight: 500, lineHeight: "normal" }}
            >
              Decisão deixa de ser opinião e passa a ser engenharia.
            </p>
          </div>
        </div>
      </div>

      {/* ===== FRAMEWORK (DARK) ===== */}
      <div data-reveal="section" className="border-y border-[#d6dace]">
        <div className="max-w-[1512px] mx-auto flex">
          <div className="hidden xl:block w-[192px] shrink-0 border-y border-[#d6dace]" />
          <div className="flex-1 bg-[#101700] px-6 py-16 flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-6 text-center max-w-[450px]">
              <p data-reveal="text" className="text-[#b6bea1] text-[14px] md:text-[16px] uppercase" style={{ fontFamily: mono }}>
                Engineering Predictable Growth
              </p>
              <p data-reveal="title" className="text-[#f2f3ef] text-[20px] md:text-[24px]" style={{ fontFamily: heading, fontWeight: 500 }}>
                The Business Engineering Framework™
              </p>
              <p
                data-reveal="text"
                className="text-[#b6bea1] text-[14px] md:text-[16px] max-w-[343px]"
                style={{ fontFamily: heading, fontWeight: 400, lineHeight: 1.1 }}
              >
                Estruturamos cada projeto em camadas:
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-center gap-8 md:gap-10 lg:gap-12">
              {frameworkLayers.map((layer) => (
                <div
                  key={layer.label}
                  className={`flex flex-col items-center gap-6 ${layer.widthClass}`}
                >
                  <div className="w-[85px] h-[85px] rounded-full border border-[#b6bea1] flex items-center justify-center">
                    <layer.Icon />
                  </div>
                  <p data-reveal="text" className="text-[#b6bea1] text-[14px] md:text-[16px] text-center" style={{ fontFamily: body, lineHeight: 1.3 }}>
                    {layer.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden xl:block w-[192px] shrink-0 border-y border-[#d6dace]" />
        </div>
      </div>

      {/* ===== CASES ===== */}
      <div id="cases" data-reveal="section" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] pt-16 pb-9 scroll-mt-[96px]">
        <div className="flex flex-col gap-6 max-w-[499px]">
          <SectionLabel>/cases</SectionLabel>
          <SectionTitle className="text-[28px] md:text-[36px] lg:text-[40px]">
            Onde a estratégia virou sistema.
          </SectionTitle>
        </div>
      </div>

      <div data-reveal="section" className="border-y border-[#d6dace]">
        <div className="max-w-[1512px] mx-auto flex relative">
          <XlHelper />
          <div className="flex flex-col lg:flex-row flex-1 min-w-0">
            <div className="flex flex-col w-full lg:w-1/2 border-x border-b lg:border-b-0 border-[#d6dace]">
              {/* Case 1 */}
              <div
                className="flex flex-col justify-between p-6 min-h-[200px] lg:h-[231px]"
                onMouseEnter={() => setActiveCaseLogo("menux")}
                onClick={() => setActiveCaseLogo("menux")}
              >
                <MenuxLogo />
                <div className="flex flex-col gap-4 mt-6">
                  <p data-reveal="text" className="text-[#101700] text-[14px] md:text-[16px]" style={{ fontFamily: display, fontWeight: 500 }}>The AI at the table.</p>
                  <p data-reveal="text" className="text-[#5f644c] text-[14px] md:text-[16px] max-w-[315px]" style={{ fontFamily: body, lineHeight: 1.076 }}>
                    IA aplicada à experiência de restaurante, conectando cliente, equipe e gestor.
                  </p>
                </div>
              </div>
              {/* Case 2 */}
              <div
                className="flex flex-col justify-between p-6 min-h-[200px] lg:h-[231px] border-t border-[#d6dace]"
                onMouseEnter={() => setActiveCaseLogo("cortex")}
                onClick={() => setActiveCaseLogo("cortex")}
              >
                <CortexLogo />
                <div className="flex flex-col gap-4 mt-6">
                  <p data-reveal="text" className="text-[#101700] text-[14px] md:text-[16px]" style={{ fontFamily: display, fontWeight: 500 }}>Organizational Intelligence Layer.</p>
                  <p data-reveal="text" className="text-[#5f644c] text-[14px] md:text-[16px] max-w-[315px]" style={{ fontFamily: body, lineHeight: 1.076 }}>
                    Estrutura organizacional inteligente para empresas que crescem mais rápido que sua capacidade operacional.
                  </p>
                </div>
              </div>
            </div>
            {/* Case image */}
            <div className="flex items-center justify-center p-6 w-full lg:w-1/2 min-h-[300px] lg:h-[462px] border-x lg:border-l-0 border-[#d6dace]">
              <div className="relative bg-white w-full max-w-[532px] aspect-[532/430] overflow-hidden">
                <img
                  src="/case-logos/logo-menux.svg"
                  alt="Logo menux"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                    activeCaseLogo === "menux" ? "opacity-100" : "opacity-0"
                  }`}
                />
                <img
                  src="/case-logos/logo-cortex.svg"
                  alt="Logo cortex"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                    activeCaseLogo === "cortex" ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </div>
          <XlHelper />
          <SectionBorderTicks positions={["192px", "756px", "calc(100% - 192px)"]} />
        </div>
      </div>

      {/* ===== AUDIENCE ===== */}
      <div data-reveal="section">
        <div className="max-w-[1512px] mx-auto flex">
          <XlHelper />
          <div className="relative overflow-hidden flex-1 flex flex-col items-center justify-center p-6 min-h-[300px] lg:h-[462px] border-x border-[#d6dace]">
            <AsciiStarfield className="absolute inset-0 hidden md:block" />
            <div className="relative z-[1] flex flex-col items-center gap-6 text-center">
              <p
                data-reveal="text"
                className="text-[#5f644c] text-[14px] md:text-[16px] uppercase"
                style={{ fontFamily: mono, textShadow: audienceTextHalo }}
              >
                /Para Quem é a Shift Labs
              </p>
              <div
                data-reveal="title"
                className="text-[#101700] leading-[normal] text-[28px] md:text-[36px] lg:text-[40px] text-center max-w-[454px]"
                style={{ fontFamily: heading, fontWeight: 500, textShadow: audienceTextHalo }}
              >
                Estrutura que acompanha crescimento.
              </div>
            </div>
          </div>
          <XlHelper />
        </div>
      </div>

      <div data-reveal="section" className="border-y border-[#d6dace]">
        <div className="max-w-[1512px] mx-auto flex relative">
          <XlHelper />
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 border-x border-[#d6dace]">
            {audienceItems.map((item, index) => (
              <div
                key={item.text}
                className={`flex items-end p-6 min-h-[100px] md:h-[118px] ${
                  index > 0 ? "border-t border-[#d6dace]" : ""
                } ${index === 1 ? "sm:border-t-0" : ""} ${
                  index > 1 ? "sm:border-t sm:border-[#d6dace]" : ""
                } ${index % 2 === 1 ? "sm:border-l sm:border-[#d6dace]" : ""}`}
              >
                <p data-reveal="text" className={`text-[#101700] text-[14px] md:text-[16px] ${item.textMaxClass}`} style={{ fontFamily: display, fontWeight: 500, lineHeight: "normal" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <XlHelper />
          <SectionBorderTicks positions={["192px", "756px", "calc(100% - 192px)"]} />
        </div>
      </div>

      {/* ===== WHAT MAKES US DIFFERENT ===== */}
      <div data-reveal="section" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-9 flex flex-col items-center text-center gap-8">
        <div className="flex flex-col items-center gap-8 max-w-[430px]">
          <p
            data-reveal="text"
            className="text-[#5f644c] text-[12px] md:text-[14px] uppercase"
            style={{ fontFamily: mono }}
          >
            Não somos para quem quer apenas “uma landing page”.
          </p>
          <SectionTitle className="text-[20px] md:text-[24px] text-center">
            What makes us different
          </SectionTitle>
        </div>
      </div>

      {/* Marquee text */}
      <div data-reveal="section" className="overflow-x-hidden overflow-y-visible py-4">
        <div className="w-full overflow-x-hidden overflow-y-visible">
          <div className="marquee-track flex w-max whitespace-nowrap ">
            <p
              className="text-[#101700] text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px] text-left pr-10 lg:pr-14"
              style={{ fontFamily: heading, fontWeight: 500, lineHeight: "normal" }}
            >
              {marqueeText}
            </p>
            <p
              aria-hidden
              className="text-[#101700] text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px] text-left pr-10 lg:pr-14"
              style={{ fontFamily: heading, fontWeight: 500, lineHeight: "normal" }}
            >
              {marqueeText}
            </p>
          </div>
        </div>
      </div>

      {/* Feature tags */}
      <div data-reveal="section" className="border-y border-[#d6dace]">
        <div className="max-w-[1512px] mx-auto flex relative">
          <XlHelper />
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 border-x border-[#d6dace]">
            {featureItems.map((item, index) => (
              <div
                key={item}
                className={`flex items-end p-6 min-h-[100px] md:h-[118px] ${
                  index > 0 ? "border-t border-[#d6dace]" : ""
                } ${index > 0 ? "sm:border-t-0 sm:border-l sm:border-[#d6dace]" : ""}`}
              >
                <p data-reveal="text" className="text-[#101700] text-[14px] md:text-[16px]" style={{ fontFamily: heading, fontWeight: 500, lineHeight: "normal" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
          <XlHelper />
          <SectionBorderTicks positions={["192px", "568px", "944px", "calc(100% - 192px)"]} />
        </div>
      </div>

      {/* Coordination message */}
      <div data-reveal="section" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-9 flex justify-center">
        <SectionTitle className="text-[20px] md:text-[24px] text-center ">
          A ShiftLabs entrega coordenação.
        </SectionTitle>
      </div>

      {/* ===== CTA ===== */}
      <div data-reveal="section" className="border-y border-[#d6dace]">
        <div className="max-w-[1512px] mx-auto flex relative">
          <XlHelper className="border-r border-[#d6dace]" />
          <div className="flex flex-col lg:flex-row flex-1 min-w-0 bg-[#b4eb38]">
            <div className="flex flex-col justify-between p-6 w-full lg:w-1/2 min-h-[360px] lg:h-[462px]">
              <div className="flex flex-col gap-6 max-w-[450px]">
                <p data-reveal="text" className="text-[#456300] text-[14px] md:text-[16px] uppercase" style={{ fontFamily: mono }}>
                  /Call to Action
                </p>
                <SectionTitle className="text-[28px] md:text-[36px] lg:text-[40px]">
                  Ready to structure what you’re building?
                </SectionTitle>
              </div>
              <p
                data-reveal="text"
                className="text-[#456300] text-[14px] md:text-[16px] max-w-[360px] mt-8"
                style={{ fontFamily: body, lineHeight: 1.076 }}
              >
                Se você sente que sua empresa poderia estar melhor organizada, mais previsível e mais eficiente, o problema provavelmente não é esforço.
              </p>
            </div>
            <div className="flex items-end justify-end p-6 w-full lg:w-1/2 min-h-[120px] lg:h-[462px]">
              <button
                type="button"
                onClick={openContactModal}
                className="inline-flex bg-[#101700] text-[#f2f3ef] px-4 py-4 text-[14px] md:text-[16px] uppercase cursor-pointer"
                style={{ fontFamily: mono }}
              >
                conhecer mais
              </button>
            </div>
          </div>
          <XlHelper className="border-l border-[#d6dace]" />
          <SectionBorderTicks positions={["192px", "calc(100% - 192px)"]} />
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div id="contato" data-reveal="section" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-9 scroll-mt-[96px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-9">
          <div className="flex flex-col gap-8 max-w-[356px]">
            <ShiftLabsIcon />
            <p
              data-reveal="text"
              className="text-[#5f644c] text-[14px] md:text-[16px]"
              style={{ fontFamily: body, lineHeight: 1.3 }}
            >
              Arquitetamos produto, tecnologia, comercial e operação em fluxos coordenados, com inteligência aplicada de ponta a ponta.
            </p>
            <p
              data-reveal="text"
              className="text-[#5f644c] text-[14px] md:text-[16px]"
              style={{ fontFamily: body, lineHeight: 1.3 }}
            >
              <span className="text-[#101700]" style={{ fontFamily: display, fontWeight: 500 }}>© 2026 ShiftLabs.</span>
              <span> Todos os direitos reservados.</span>
            </p>
          </div>
            <div className="flex flex-col gap-6">
              <p data-reveal="text" className="text-[#5f644c] text-[14px] md:text-[16px] uppercase" style={{ fontFamily: mono }}>
                /Call to Action
              </p>
              <div className="flex items-center gap-5">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 py-1"
                >
                  <Icon />
                  <span className="text-[#5f644c] text-[14px] md:text-[16px]" style={{ fontFamily: body, lineHeight: 1.3 }}>
                    {name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Big wordmark */}
        <div className="pt-9">
          <BigWordmark />
        </div>
      </div>
      </main>

      {isContactModalOpen ? (
        <div className="fixed inset-0 z-[140] flex items-center justify-center px-4 py-6" onClick={closeContactModal}>
          <div className="absolute inset-0 bg-[#101700]/45 backdrop-blur-[1px]" />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Formulário de contato"
            className="relative w-full max-w-[760px] border border-[#d6dace] bg-[#f2f3ef]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-[#d6dace] px-5 py-4 md:px-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[#5f644c] text-[13px] md:text-[14px] uppercase" style={{ fontFamily: mono }}>
                  {isContactSuccess ? "/contato enviado" : "/contato"}
                </p>
                <button
                  type="button"
                  onClick={closeContactModal}
                  disabled={isContactSubmitting}
                  className="inline-flex min-h-[44px] items-center border border-[#d6dace] px-4 py-3 text-[12px] uppercase text-[#5f644c] hover:text-[#101700]"
                  style={{ fontFamily: mono, lineHeight: "normal" }}
                >
                  fechar
                </button>
              </div>
              <p className="mt-3 text-[#101700] text-[24px] md:text-[30px]" style={{ fontFamily: heading, fontWeight: 500, lineHeight: "normal" }}>
                {isContactSuccess ? "Contato confirmado" : "Fale com a ShiftLabs"}
              </p>
            </div>

            {isContactSuccess ? (
              <div className="p-5 md:p-6">
                <div className="shiftlabs-success-shell border border-[#d6dace] p-5 md:p-6">
                  <div className="relative z-[1] flex flex-col gap-5 md:gap-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-3">
                        <span aria-hidden className="shiftlabs-success-orb">
                          <span className="shiftlabs-success-check">✓</span>
                        </span>
                        <div className="flex flex-col gap-1">
                          <p className="text-[12px] uppercase text-[#5f644c]" style={{ fontFamily: mono }}>
                            /envio concluído
                          </p>
                          <p className="text-[25px] md:text-[36px] text-[#101700]" style={{ fontFamily: heading, fontWeight: 500, lineHeight: 1.03 }}>
                            Obrigado. Sua mensagem chegou.
                          </p>
                        </div>
                      </div>
                      <span className="shiftlabs-success-chip" style={{ fontFamily: mono }}>
                        STATUS: RECEBIDO
                      </span>
                    </div>

                    <p className="text-[#50543f] text-[15px] md:text-[18px] max-w-[560px]" style={{ fontFamily: body, lineHeight: 1.35 }}>
                      {heroContactFeedback?.message}
                    </p>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <div className="shiftlabs-success-step border border-[#d6dace] p-3">
                        <p className="text-[11px] uppercase text-[#5f644c]" style={{ fontFamily: mono }}>/passo 01</p>
                        <p className="mt-1 text-[14px] text-[#101700]" style={{ fontFamily: body, lineHeight: 1.3 }}>
                          Lead registrado no nosso pipeline.
                        </p>
                      </div>
                      <div className="shiftlabs-success-step border border-[#d6dace] p-3">
                        <p className="text-[11px] uppercase text-[#5f644c]" style={{ fontFamily: mono }}>/passo 02</p>
                        <p className="mt-1 text-[14px] text-[#101700]" style={{ fontFamily: body, lineHeight: 1.3 }}>
                          Time de estratégia valida contexto e objetivo.
                        </p>
                      </div>
                      <div className="shiftlabs-success-step border border-[#d6dace] p-3">
                        <p className="text-[11px] uppercase text-[#5f644c]" style={{ fontFamily: mono }}>/passo 03</p>
                        <p className="mt-1 text-[14px] text-[#101700]" style={{ fontFamily: body, lineHeight: 1.3 }}>
                          Retorno em breve para alinhar próximos passos.
                        </p>
                      </div>
                    </div>

                    <div aria-hidden className="shiftlabs-success-progress" />

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={resetContactModalFeedback}
                        className="inline-flex min-h-[44px] items-center border border-[#d6dace] px-4 py-3 text-[13px] uppercase text-[#5f644c] hover:text-[#101700]"
                        style={{ fontFamily: mono, lineHeight: "normal" }}
                      >
                        enviar novo contato
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={submitHeroContactForm} className="p-5 md:p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Nome</span>
                    <input
                      type="text"
                      required
                      autoFocus
                      value={heroContactForm.name}
                      onChange={(event) => updateHeroContactField("name", event.target.value)}
                      className="h-11 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body }}
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Whatsapp</span>
                    <input
                      type="tel"
                      required
                      value={heroContactForm.whatsapp}
                      onChange={(event) => updateHeroContactField("whatsapp", event.target.value)}
                      className="h-11 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body }}
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Email</span>
                    <input
                      type="email"
                      required
                      value={heroContactForm.email}
                      onChange={(event) => updateHeroContactField("email", event.target.value)}
                      className="h-11 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body }}
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Empresa</span>
                    <input
                      type="text"
                      required
                      value={heroContactForm.company}
                      onChange={(event) => updateHeroContactField("company", event.target.value)}
                      className="h-11 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body }}
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 md:col-span-2">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Assunto</span>
                    <input
                      type="text"
                      required
                      value={heroContactForm.subject}
                      onChange={(event) => updateHeroContactField("subject", event.target.value)}
                      className="h-11 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body }}
                    />
                  </label>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={closeContactModal}
                    disabled={isContactSubmitting}
                    className="inline-flex min-h-[44px] items-center border border-[#d6dace] px-4 py-3 text-[13px] uppercase text-[#5f644c] hover:text-[#101700]"
                    style={{ fontFamily: mono, lineHeight: "normal" }}
                  >
                    cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isContactSubmitting}
                    className="inline-flex min-h-[44px] items-center bg-[#101700] px-4 py-3 text-[13px] uppercase text-[#f2f3ef]"
                    style={{ fontFamily: mono, lineHeight: "normal" }}
                  >
                    {isContactSubmitting ? "enviando..." : "enviar contato"}
                  </button>
                </div>
                {isContactError ? (
                  <div className="mt-3 border border-[#d8bbb9] bg-[#f8eceb] px-3 py-2">
                    <p className="text-[13px] text-[#9f2b2b]" style={{ fontFamily: body }}>
                      {heroContactFeedback?.message}
                    </p>
                  </div>
                ) : null}
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function CareersHeader() {
  return (
    <header className="fixed left-0 top-0 z-[120] w-full border-b border-[#d6dace] bg-[#f2f3ef]">
      <div className="mx-auto flex h-[66px] w-full max-w-[1512px] items-center justify-between px-6 py-4 md:px-8">
        <a href="/" aria-label="ShiftLabs" title="ShiftLabs" className="inline-flex min-h-[44px] items-center py-1">
          <ShiftLabsIcon />
        </a>
        <div className="flex items-center gap-2.5">
          <a
            href="/vagas"
            className="inline-flex min-h-[44px] items-center px-2 text-[16px] text-[#5f644c] transition-colors hover:text-[#101700]"
            style={{ fontFamily: body, fontWeight: 400, lineHeight: "normal" }}
          >
            Vagas
          </a>
          <a
            href="https://instagram.com/shiftlabs.br"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center px-2 text-[16px] text-[#5f644c] transition-colors hover:text-[#101700]"
            style={{ fontFamily: body, fontWeight: 400, lineHeight: "normal" }}
          >
            @shiftlabs.br
          </a>
        </div>
      </div>
    </header>
  );
}

function RoleMetaPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center border border-[#d6dace] bg-[#ecefe7] px-2.5 py-1.5 text-[12px] text-[#5f644c] md:px-3 md:py-2 md:text-[14px]"
      style={{ fontFamily: body, fontWeight: 400, lineHeight: "normal" }}
    >
      {children}
    </span>
  );
}

function RoleSeniorityBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center justify-center self-center border border-[#d6dace] bg-[#f2f3ef] px-3 py-2 text-[13px] text-[#5f644c] uppercase md:text-[14px]"
      style={{ fontFamily: body, lineHeight: "normal" }}
    >
      {label}
    </span>
  );
}

function RoleContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const usesLabelStyle = isStyledRoleSectionHeading(title);
  const renderedTitle = usesLabelStyle ? formatRoleSectionHeading(title) : title;

  return (
    <section className="pt-6 md:pt-7">
      <h2
        className={usesLabelStyle ? "text-[16px] text-[#5f644c] uppercase tracking-[0.02em]" : "text-[24px] text-[#101700]"}
        style={{
          fontFamily: usesLabelStyle ? mono : heading,
          fontWeight: usesLabelStyle ? 400 : 500,
          lineHeight: usesLabelStyle ? 1.1 : 1.08,
        }}
      >
        {renderedTitle}
      </h2>
      <div aria-hidden className="mt-3 h-px w-full bg-[#d6dace]" />
      <div className="mt-4">{children}</div>
    </section>
  );
}

function MarkdownBody({ markdown }: { markdown: string }) {
  const html = useMemo(() => markdownToHtml(markdown), [markdown]);

  return (
    <div
      className="pt-2 text-[16px] text-[#101700] leading-[1.42] [&_h1]:mt-7 [&_h1]:text-[28px] [&_h1]:font-medium [&_h2]:mt-7 [&_h2]:text-[24px] [&_h2]:font-medium [&_h3]:mt-6 [&_h3]:text-[20px] [&_h3]:font-medium [&_h2.role-section-label]:mt-12 [&_h2.role-section-label]:text-[16px] [&_h2.role-section-label]:font-normal [&_h2.role-section-label]:uppercase [&_h2.role-section-label]:tracking-[0.02em] [&_h2.role-section-label]:text-[#5f644c] [&_h2.role-section-label]:leading-[1.1] [&_h3.role-section-label]:mt-12 [&_h3.role-section-label]:text-[16px] [&_h3.role-section-label]:font-normal [&_h3.role-section-label]:uppercase [&_h3.role-section-label]:tracking-[0.02em] [&_h3.role-section-label]:text-[#5f644c] [&_h3.role-section-label]:leading-[1.1] [&_p]:m-0 [&_p+p]:mt-3 [&_p+ul]:mt-3 [&_p+ol]:mt-3 [&_p+h2.role-section-label]:mt-12 [&_p+h3.role-section-label]:mt-12 [&_ul]:m-0 [&_ul]:list-disc [&_ul]:pl-6 [&_ul+*]:mt-3 [&_ul+h2.role-section-label]:mt-12 [&_ul+h3.role-section-label]:mt-12 [&_ol]:m-0 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol+*]:mt-3 [&_ol+h2.role-section-label]:mt-12 [&_ol+h3.role-section-label]:mt-12 [&_li]:mb-2 [&_li:last-child]:mb-0 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:opacity-80 [&_code]:rounded-none [&_code]:border [&_code]:border-[#d6dace] [&_code]:bg-[#ecefe7] [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[14px]"
      style={{ fontFamily: body }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function CareerRolePage({ role }: { role: CareersRole }) {
  const [isHeaderCondensed, setIsHeaderCondensed] = useState(false);
  const displayRoleTitle = getDisplayRoleTitle(role.title, role.displayTitle);
  const seniorityBadge = getRoleSeniorityBadge(role.title, role.displaySeniority, role.slug);
  const displayCommitment = getRoleDisplayCommitment(role.commitment, role.displayCommitment);
  const displayArea = getRoleCardArea(role);
  const roleSummary = getRoleCardSummary(role);
  const applyHref = `mailto:careers@shiftlabs.digital?subject=${encodeURIComponent(`Candidatura - ${displayRoleTitle}`)}`;

  useEffect(() => {
    let rafId = 0;

    const updateHeaderMode = () => {
      const shouldCondense = window.scrollY > 28 && window.innerWidth >= 1024;
      setIsHeaderCondensed((current) => (current === shouldCondense ? current : shouldCondense));
    };

    const scheduleHeaderUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateHeaderMode();
      });
    };

    updateHeaderMode();
    window.addEventListener("scroll", scheduleHeaderUpdate, { passive: true });
    window.addEventListener("resize", scheduleHeaderUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleHeaderUpdate);
      window.removeEventListener("resize", scheduleHeaderUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="bg-[#f2f3ef] min-h-screen w-full overflow-x-hidden pt-[72px]">
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-out ${
          isHeaderCondensed ? "pt-3" : "pt-0"
        }`}
      >
        <div className={isHeaderCondensed ? "mx-auto w-full max-w-[1040px] px-4" : "w-full"}>
          <header
            className={`transition-all duration-300 ease-out ${
              isHeaderCondensed
                ? "rounded-[16px] border border-[#d6dace] bg-[#f2f3ef]"
                : "border-b border-[#d6dace] bg-[#f2f3ef]"
            }`}
          >
            <div
              className={`mx-auto h-[72px] flex items-center justify-between gap-6 transition-[padding,max-width] duration-300 ease-out ${
                isHeaderCondensed ? "max-w-none px-6" : "max-w-[1512px] px-6 xl:px-[192px]"
              }`}
            >
              <a href="/" aria-label="ShiftLabs" title="ShiftLabs" className="inline-flex min-h-[44px] items-center gap-2 py-1">
                <ShiftLabsIcon />
                <ShiftLabsWordmark />
              </a>
              <div className="flex items-center gap-4 md:gap-6">
                <a
                  href="/vagas"
                  className="inline-flex min-h-[44px] items-center px-2 text-[#101700] transition-colors text-[14px]"
                  style={{ fontFamily: mono, fontWeight: 400, lineHeight: "normal" }}
                >
                  /VAGAS
                </a>
                <span aria-hidden className="h-4 w-px bg-[#d6dace]" />
                <div className="flex items-center gap-3 md:gap-4">
                  {careersSocialLinks.map(({ name, href, Icon }) => (
                    <a
                      key={`careers-role-header-${name}`}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      className="inline-flex h-11 w-11 items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      <main className="text-[#101700]">
        <div className="border-y border-[#d6dace]">
          <div className="max-w-[1512px] mx-auto flex relative">
            <XlHelper className="border-r border-[#d6dace]" />
            <div className="flex-1 border-x border-[#d6dace]">
            <article className="flex min-h-[360px] flex-col justify-between gap-8 p-6 md:p-8 xl:p-10">
              <div className="flex flex-col gap-4 max-w-[880px]">
                <a
                  href="/vagas"
                  aria-label="Voltar para vagas"
                  title="Voltar para vagas"
                  className="inline-flex h-11 w-11 items-center justify-center border border-[#d6dace] text-[#5f644c] hover:text-[#101700] transition-colors"
                >
                  <CareersBackIcon />
                </a>
                <p className="text-[#5f644c] text-[13px] md:text-[14px] uppercase" style={{ fontFamily: mono }}>
                  /{displayArea}
                </p>
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <h1
                    className="text-[#101700] text-[32px] md:text-[44px] lg:text-[56px] leading-[1.03]"
                    style={{ fontFamily: display, fontWeight: 500 }}
                  >
                    {displayRoleTitle}
                  </h1>
                  {seniorityBadge ? <RoleSeniorityBadge label={seniorityBadge} /> : null}
                </div>
                <p
                  className="text-[#5f644c] text-[18px] md:text-[24px] max-w-[980px]"
                  style={{ fontFamily: body, lineHeight: 1.3 }}
                >
                  {roleSummary}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <span
                    className="inline-flex items-center gap-2 border border-[#d6dace] px-3 py-2 text-[13px] md:text-[14px] text-[#5f644c]"
                    style={{ fontFamily: body, lineHeight: "normal" }}
                  >
                    <CareersLocationIcon />
                    {role.location}
                  </span>
                  <span
                    className="inline-flex items-center gap-2 border border-[#d6dace] px-3 py-2 text-[13px] md:text-[14px] text-[#5f644c]"
                    style={{ fontFamily: body, lineHeight: "normal" }}
                  >
                    <CareersClockIcon />
                    {displayCommitment}
                  </span>
                  <span
                    className="inline-flex items-center gap-2 border border-[#d6dace] px-3 py-2 text-[13px] md:text-[14px] text-[#5f644c]"
                    style={{ fontFamily: body, lineHeight: "normal" }}
                  >
                    <CareersWorkModeIcon />
                    {role.model}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/vagas"
                    className="inline-flex min-h-[44px] items-center border border-[#101700] text-[#101700] px-4 py-3 text-[14px] uppercase"
                    style={{ fontFamily: mono, lineHeight: "normal" }}
                  >
                    ver outras vagas
                  </a>
                  <a
                    href={applyHref}
                    className="inline-flex min-h-[44px] items-center bg-[#101700] text-[#f2f3ef] px-4 py-3 text-[14px] uppercase"
                    style={{ fontFamily: mono, lineHeight: "normal" }}
                  >
                    candidatar-se
                  </a>
                </div>
              </div>
            </article>
            </div>
            <XlHelper className="border-l border-[#d6dace]" />
            <SectionBorderTicks positions={["192px", "calc(100% - 192px)"]} />
          </div>
        </div>

        <div className="border-b border-[#d6dace]">
          <div className="max-w-[1512px] mx-auto flex relative">
            <XlHelper className="border-r border-[#d6dace]" />
            <article className="flex-1 border-x border-[#d6dace] px-6 md:px-8 xl:px-10 py-10 md:py-12">
              <div className="mx-auto w-full max-w-[1080px]">
                {role.bodyMarkdown?.trim() ? (
                  <MarkdownBody markdown={role.bodyMarkdown} />
                ) : (
                  <>
                    <RoleContentSection title={role.whyTitle ?? "Why ShiftLabs?"}>
                      <div className="flex flex-col gap-3">
                        {role.about.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-[16px] text-[#101700]"
                            style={{ fontFamily: body, fontWeight: 400, lineHeight: 1.42 }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </RoleContentSection>

                    <RoleContentSection title={role.roleTitle ?? "The Role"}>
                      <div className="flex flex-col gap-3">
                        <p
                          className="text-[16px] text-[#101700]"
                          style={{ fontFamily: body, fontWeight: 400, lineHeight: 1.42 }}
                        >
                          {role.intro}
                        </p>
                        <p
                          className="text-[16px] text-[#101700]"
                          style={{ fontFamily: body, fontWeight: 400, lineHeight: 1.42 }}
                        >
                          {role.roleOneLiner ?? `Área de atuação: ${role.area}.`}
                        </p>
                      </div>
                    </RoleContentSection>

                    <RoleContentSection title={role.doTitle ?? "What you'll do"}>
                      <ul className="m-0 list-disc pl-6">
                        {role.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="mb-2 text-[16px] text-[#101700] last:mb-0"
                            style={{ fontFamily: body, fontWeight: 400, lineHeight: 1.42 }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </RoleContentSection>

                    <RoleContentSection title={role.bringTitle ?? "What you'll bring"}>
                      <ul className="m-0 list-disc pl-6">
                        {role.requirements.map((item) => (
                          <li
                            key={item}
                            className="mb-2 text-[16px] text-[#101700] last:mb-0"
                            style={{ fontFamily: body, fontWeight: 400, lineHeight: 1.42 }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </RoleContentSection>

                    <RoleContentSection title={role.stackTitle ?? "Stack"}>
                      <div className="flex flex-wrap gap-2">
                        {role.stack.map((tool) => (
                          <RoleMetaPill key={tool}>{tool}</RoleMetaPill>
                        ))}
                      </div>
                    </RoleContentSection>

                    <RoleContentSection title={role.processTitle ?? "Hiring process"}>
                      <ol className="m-0 list-decimal pl-6">
                        {role.process.map((step) => (
                          <li
                            key={step}
                            className="mb-2 text-[16px] text-[#101700] last:mb-0"
                            style={{ fontFamily: body, fontWeight: 400, lineHeight: 1.42 }}
                          >
                            {step}
                          </li>
                        ))}
                      </ol>
                    </RoleContentSection>

                    {role.joinUs?.length ? (
                      <RoleContentSection title={role.joinTitle ?? "Join Us"}>
                        <div className="flex flex-col gap-3">
                          {role.joinUs.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-[16px] text-[#101700]"
                              style={{ fontFamily: body, fontWeight: 400, lineHeight: 1.42 }}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </RoleContentSection>
                    ) : null}
                  </>
                )}
              </div>
            </article>
            <XlHelper className="border-l border-[#d6dace]" />
            <SectionBorderTicks positions={["192px", "calc(100% - 192px)"]} />
          </div>
        </div>

        <div className="border-y border-[#d6dace] mt-16">
          <div className="max-w-[1512px] mx-auto flex relative">
            <XlHelper className="border-r border-[#d6dace]" />
            <div className="flex flex-col lg:flex-row flex-1 min-w-0 bg-[#b4eb38]">
              <div className="flex flex-col justify-between p-6 w-full lg:w-1/2 min-h-[300px] lg:h-[360px]">
                <div className="flex flex-col gap-6 max-w-[450px]">
                  <p className="text-[#456300] text-[14px] md:text-[16px] uppercase" style={{ fontFamily: mono }}>
                    /call to action
                  </p>
                  <div className="text-[#101700] text-[28px] md:text-[36px] lg:text-[40px]" style={{ fontFamily: heading, fontWeight: 500, lineHeight: "normal" }}>
                    Curtiu essa vaga?
                  </div>
                </div>
                <p
                  className="text-[#456300] text-[14px] md:text-[16px] max-w-[390px] mt-8"
                  style={{ fontFamily: body, lineHeight: 1.3 }}
                >
                  Candidate-se agora ou explore outras oportunidades abertas no time.
                </p>
              </div>
              <div className="flex items-end justify-end p-6 w-full lg:w-1/2 min-h-[120px] lg:h-[360px] gap-3">
                <a
                  href="/vagas"
                  className="inline-flex min-h-[44px] items-center border border-[#101700] text-[#101700] px-4 py-4 text-[14px] md:text-[16px] uppercase"
                  style={{ fontFamily: mono, lineHeight: "normal" }}
                >
                  ver outras vagas
                </a>
                <a
                  href={applyHref}
                  className="inline-flex min-h-[44px] items-center bg-[#101700] text-[#f2f3ef] px-4 py-4 text-[14px] md:text-[16px] uppercase"
                  style={{ fontFamily: mono, lineHeight: "normal" }}
                >
                  candidatar-se
                </a>
              </div>
            </div>
            <XlHelper className="border-l border-[#d6dace]" />
            <SectionBorderTicks positions={["192px", "calc(100% - 192px)"]} />
          </div>
        </div>

        <div className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-9">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-9">
            <div className="flex flex-col gap-8 max-w-[356px]">
              <ShiftLabsIcon />
              <p className="text-[#5f644c] text-[14px] md:text-[16px]" style={{ fontFamily: body, lineHeight: 1.3 }}>
                Construímos estruturas para produto, tecnologia, comercial e operação evoluírem no mesmo ritmo.
              </p>
              <p className="text-[#5f644c] text-[14px] md:text-[16px]" style={{ fontFamily: body, lineHeight: 1.3 }}>
                <span className="text-[#101700]" style={{ fontFamily: display, fontWeight: 500 }}>© 2026 ShiftLabs.</span>
                <span> Todos os direitos reservados.</span>
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[#5f644c] text-[14px] md:text-[16px] uppercase" style={{ fontFamily: mono }}>
                /social
              </p>
              <div className="flex items-center gap-5">
                {careersSocialLinks.map(({ name, href, Icon }) => (
                  <a key={`careers-role-footer-${name}`} href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 py-1">
                    <Icon />
                    <span className="text-[#5f644c] text-[14px] md:text-[16px]" style={{ fontFamily: body, lineHeight: 1.3 }}>
                      {name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-9">
            <BigWordmark />
          </div>
        </div>
      </main>
    </div>
  );
}

function CareersEditorPage({
  roles,
  isLoadingRoles,
  isAuthenticated,
  authLoading,
  onSignIn,
  onSignOut,
  onSaveRole,
  onDeleteRole,
  onRefreshRoles,
}: {
  roles: CareersRole[];
  isLoadingRoles: boolean;
  isAuthenticated: boolean;
  authLoading: boolean;
  onSignIn: (email: string, password: string) => Promise<{ ok: boolean; message?: string }>;
  onSignOut: () => Promise<void>;
  onSaveRole: (role: CareersRole, previousSlug?: string) => Promise<{ ok: boolean; message?: string }>;
  onDeleteRole: (slug: string) => Promise<{ ok: boolean; message?: string }>;
  onRefreshRoles: () => Promise<void>;
}) {
  const careersBorder = "border-[#d6dace]";
  const [formState, setFormState] = useState<CareersEditorFormState>(() => createEditorFormState());
  const [authState, setAuthState] = useState({ email: "", password: "" });
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isAuthSubmitting, setIsAuthSubmitting] = useState(false);
  const [isSaveSubmitting, setIsSaveSubmitting] = useState(false);
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const baseRoleSlugSet = useMemo(() => new Set(defaultCareersRoles.map((role) => role.slug)), []);
  const orderedRoles = useMemo(
    () => [...roles].sort((a, b) => a.title.localeCompare(b.title, "pt-BR")),
    [roles],
  );

  const setFieldValue = (field: keyof CareersEditorFormState, value: string) => {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const resetEditor = () => {
    setEditingSlug(null);
    setFormState(createEditorFormState());
    setFeedback(null);
  };

  const startEditing = (role: CareersRole) => {
    setEditingSlug(role.slug);
    setFormState(createEditorFormState(role));
    setFeedback(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (slug: string) => {
    const isConfirmed = window.confirm(
      "Excluir esta vaga?",
    );
    if (!isConfirmed) return;
    setDeletingSlug(slug);
    const result = await onDeleteRole(slug);
    setDeletingSlug(null);
    if (!result.ok) {
      setFeedback({
        type: "error",
        message: result.message ?? "Não foi possível excluir a vaga.",
      });
      return;
    }
    if (editingSlug === slug) {
      resetEditor();
    }
    setFeedback({
      type: "success",
      message: "Vaga removida com sucesso.",
    });
  };

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = formState.title.trim();
    const location = formState.location.trim();
    const commitment = formState.commitment.trim();
    const model = formState.model.trim();
    const area = formState.area.trim() || "Geral";
    const bodyMarkdown = formState.bodyMarkdown.trim();
    const intro = formState.intro.trim() || extractIntroFromMarkdown(bodyMarkdown) || "Descrição da vaga.";
    const slug = toOptionalTrimmed(formState.slug) ?? slugifyRole(title);

    if (!title || !location || !commitment || !model || !slug) {
      setFeedback({ type: "error", message: "Preencha os campos obrigatórios: título, localização, regime e modelo." });
      return;
    }

    if (!bodyMarkdown && !intro) {
      setFeedback({ type: "error", message: "Preencha o corpo em Markdown ou o resumo da vaga." });
      return;
    }

    const hasDuplicateSlug = roles.some((role) => role.slug === slug && role.slug !== editingSlug);
    if (hasDuplicateSlug) {
      setFeedback({ type: "error", message: "Já existe uma vaga com esse slug. Use outro slug." });
      return;
    }

    const nextRole: CareersRole = {
      slug,
      title,
      location,
      commitment,
      model,
      area,
      intro,
      roleOneLiner: toOptionalTrimmed(formState.roleOneLiner),
      about: splitEditorList(formState.about),
      responsibilities: splitEditorList(formState.responsibilities),
      requirements: splitEditorList(formState.requirements),
      stack: splitEditorList(formState.stack),
      process: splitEditorList(formState.process),
      whyTitle: toOptionalTrimmed(formState.whyTitle),
      roleTitle: toOptionalTrimmed(formState.roleTitle),
      doTitle: toOptionalTrimmed(formState.doTitle),
      bringTitle: toOptionalTrimmed(formState.bringTitle),
      stackTitle: toOptionalTrimmed(formState.stackTitle),
      processTitle: toOptionalTrimmed(formState.processTitle),
      joinTitle: toOptionalTrimmed(formState.joinTitle),
      joinUs: splitEditorList(formState.joinUs),
      bodyMarkdown: toOptionalTrimmed(bodyMarkdown),
    };

    setIsSaveSubmitting(true);
    const result = await onSaveRole(nextRole, editingSlug ?? undefined);
    setIsSaveSubmitting(false);
    if (!result.ok) {
      setFeedback({
        type: "error",
        message: result.message ?? "Não foi possível salvar a vaga.",
      });
      return;
    }
    setEditingSlug(nextRole.slug);
    setFormState(createEditorFormState(nextRole));
    setFeedback({ type: "success", message: "Vaga salva. Ela já aparece em /vagas e na página interna." });
  };

  const handleSignInSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = authState.email.trim();
    const password = authState.password;
    if (!email || !password) {
      setFeedback({ type: "error", message: "Preencha e-mail e senha para entrar." });
      return;
    }
    setIsAuthSubmitting(true);
    const result = await onSignIn(email, password);
    setIsAuthSubmitting(false);
    if (!result.ok) {
      setFeedback({
        type: "error",
        message: result.message ?? "Falha ao autenticar.",
      });
      return;
    }
    setFeedback({ type: "success", message: "Login realizado com sucesso." });
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefreshRoles();
    setIsRefreshing(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#f2f3ef] text-[#101700]">
      <CareersHeader />

      <main className={`mt-[66px] min-h-[calc(100vh-66px)] border-y ${careersBorder}`}>
        <section className={`border-b ${careersBorder}`}>
          <div className="max-w-[1512px] mx-auto px-6 md:px-8 py-6 md:py-8">
            <h1 className="text-[30px] text-[#101700] md:text-[32px]" style={{ fontFamily: heading, fontWeight: 500, lineHeight: "normal" }}>
              Editor de Vagas
            </h1>
            <p className="mt-2 text-[14px] text-[#5f644c] md:text-[16px]" style={{ fontFamily: body, lineHeight: 1.3 }}>
              Crie, edite e remova vagas. As alterações são salvas no Supabase e ficam disponíveis para todos.
            </p>
          </div>
        </section>

        {!hasSupabaseConfig ? (
          <div className="max-w-[1512px] mx-auto px-6 py-8 md:px-8 md:py-10">
            <div className={`border ${careersBorder} p-5 md:p-6`}>
              <p className="text-[15px] text-[#9f2b2b]" style={{ fontFamily: body }}>
                Configure `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` para usar o editor persistente.
              </p>
            </div>
          </div>
        ) : null}

        {hasSupabaseConfig && authLoading ? (
          <div className="max-w-[1512px] mx-auto px-6 py-8 md:px-8 md:py-10">
            <div className={`mx-auto w-full max-w-[460px] border ${careersBorder} bg-[#f2f3ef] p-5`}>
              <p className="text-[14px] text-[#5f644c]" style={{ fontFamily: body }}>
                Verificando sessão...
              </p>
            </div>
          </div>
        ) : null}

        {hasSupabaseConfig && !isAuthenticated && !authLoading ? (
          <div className="max-w-[1512px] mx-auto px-6 py-8 md:px-8 md:py-10">
            <form onSubmit={handleSignInSubmit} className={`mx-auto w-full max-w-[460px] border ${careersBorder} bg-[#f2f3ef]`}>
              <div className={`border-b ${careersBorder} px-5 py-4`}>
                <h2 className="text-[20px] text-[#101700]" style={{ fontFamily: heading, fontWeight: 500 }}>
                  Entrar no editor
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 p-5">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>E-mail</span>
                  <input
                    type="email"
                    autoComplete="email"
                    value={authState.email}
                    onChange={(event) => setAuthState((current) => ({ ...current, email: event.target.value }))}
                    className="h-11 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                    style={{ fontFamily: body }}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Senha</span>
                  <input
                    type="password"
                    autoComplete="current-password"
                    value={authState.password}
                    onChange={(event) => setAuthState((current) => ({ ...current, password: event.target.value }))}
                    className="h-11 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                    style={{ fontFamily: body }}
                  />
                </label>
              </div>
              <div className={`flex flex-wrap items-center gap-3 border-t ${careersBorder} p-5`}>
                <button
                  type="submit"
                  disabled={isAuthSubmitting || authLoading}
                  className="inline-flex bg-[#101700] px-4 py-3 text-[14px] uppercase text-[#f2f3ef] disabled:cursor-not-allowed disabled:opacity-70"
                  style={{ fontFamily: mono, lineHeight: "normal" }}
                >
                  {isAuthSubmitting || authLoading ? "Entrando..." : "Entrar"}
                </button>
                {feedback ? (
                  <p
                    className={`text-[13px] ${feedback.type === "error" ? "text-[#9f2b2b]" : "text-[#5f644c]"}`}
                    style={{ fontFamily: body }}
                  >
                    {feedback.message}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        ) : null}

        {hasSupabaseConfig && isAuthenticated ? (
          <div className="max-w-[1512px] mx-auto px-6 py-6 md:px-8 md:py-8">
            <div className="mb-4 flex flex-wrap items-center gap-2 md:mb-5">
              <button
                type="button"
                onClick={handleRefresh}
                disabled={isRefreshing || isLoadingRoles}
                className="inline-flex border border-[#d6dace] px-3 py-2 text-[12px] uppercase text-[#5f644c] hover:text-[#101700] disabled:cursor-not-allowed disabled:opacity-70"
                style={{ fontFamily: mono }}
              >
                {isRefreshing || isLoadingRoles ? "Atualizando..." : "Atualizar lista"}
              </button>
              <button
                type="button"
                onClick={() => {
                  void onSignOut();
                }}
                className="inline-flex border border-[#d6dace] px-3 py-2 text-[12px] uppercase text-[#5f644c] hover:text-[#101700]"
                style={{ fontFamily: mono }}
              >
                Sair
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_400px]">
              <form onSubmit={(event) => { void handleSave(event); }} className={`border ${careersBorder} bg-[#f2f3ef]`}>
                <div className={`border-b ${careersBorder} px-4 py-3 md:px-5`}>
                  <h2 className="text-[18px] text-[#101700] md:text-[20px]" style={{ fontFamily: heading, fontWeight: 500 }}>
                    {editingSlug ? "Editar vaga" : "Nova vaga"}
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-5 md:p-5">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Título *</span>
                    <input
                      value={formState.title}
                      onChange={(event) => setFieldValue("title", event.target.value)}
                      className="h-10 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body }}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Slug (opcional)</span>
                    <input
                      value={formState.slug}
                      onChange={(event) => setFieldValue("slug", event.target.value)}
                      placeholder="gerado automaticamente"
                      className="h-10 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: mono }}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Localização *</span>
                    <input
                      value={formState.location}
                      onChange={(event) => setFieldValue("location", event.target.value)}
                      className="h-10 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body }}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Regime *</span>
                    <input
                      value={formState.commitment}
                      onChange={(event) => setFieldValue("commitment", event.target.value)}
                      className="h-10 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body }}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Modelo *</span>
                    <input
                      value={formState.model}
                      onChange={(event) => setFieldValue("model", event.target.value)}
                      className="h-10 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body }}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>Área (opcional)</span>
                    <input
                      value={formState.area}
                      onChange={(event) => setFieldValue("area", event.target.value)}
                      className="h-10 border border-[#d6dace] bg-[#f2f3ef] px-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body }}
                    />
                  </label>
                </div>

                <div className={`border-y ${careersBorder} p-4 md:p-5`}>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#5f644c]" style={{ fontFamily: body }}>
                      Corpo da vaga (Markdown)
                    </span>
                    <textarea
                      value={formState.bodyMarkdown}
                      onChange={(event) => setFieldValue("bodyMarkdown", event.target.value)}
                      rows={22}
                      placeholder={"## Why ShiftLabs?\nCole aqui o texto em Markdown do Notion.\n\n## What you'll do\n- Item 1\n- Item 2"}
                      className="min-h-[460px] border border-[#d6dace] bg-[#f2f3ef] px-3 py-3 text-[14px] text-[#101700] outline-none focus:border-[#5f644c]"
                      style={{ fontFamily: body, lineHeight: 1.45 }}
                    />
                    <p className="text-[12px] text-[#5f644c]" style={{ fontFamily: body }}>
                      Aceita títulos (`##`), listas (`-` e `1.`), negrito (`**texto**`), itálico (`*texto*`) e links (`[texto](url)`).
                    </p>
                  </label>
                </div>

                <div className={`flex flex-wrap items-center gap-3 border-t ${careersBorder} p-4 md:p-5`}>
                  <button
                    type="submit"
                    disabled={isSaveSubmitting}
                    className="inline-flex bg-[#101700] px-4 py-3 text-[14px] uppercase text-[#f2f3ef] disabled:cursor-not-allowed disabled:opacity-70"
                    style={{ fontFamily: mono, lineHeight: "normal" }}
                  >
                    {isSaveSubmitting ? "Salvando..." : "Salvar vaga"}
                  </button>
                  <button
                    type="button"
                    onClick={resetEditor}
                    className="inline-flex border border-[#d6dace] px-4 py-3 text-[14px] uppercase text-[#5f644c]"
                    style={{ fontFamily: mono, lineHeight: "normal" }}
                  >
                    Limpar
                  </button>
                  {feedback ? (
                    <p
                      className={`text-[13px] ${feedback.type === "error" ? "text-[#9f2b2b]" : "text-[#5f644c]"}`}
                      style={{ fontFamily: body }}
                    >
                      {feedback.message}
                    </p>
                  ) : null}
                </div>
              </form>

              <aside className={`border ${careersBorder} bg-[#f2f3ef]`}>
                <div className={`border-b ${careersBorder} px-4 py-3 md:px-5`}>
                  <h2 className="text-[18px] text-[#101700] md:text-[20px]" style={{ fontFamily: heading, fontWeight: 500 }}>
                    Vagas cadastradas
                  </h2>
                </div>
                {isLoadingRoles ? (
                  <p className="p-4 text-[13px] text-[#5f644c] md:p-5" style={{ fontFamily: body }}>
                    Carregando vagas...
                  </p>
                ) : null}
                {!isLoadingRoles && !orderedRoles.length ? (
                  <p className="p-4 text-[13px] text-[#5f644c] md:p-5" style={{ fontFamily: body }}>
                    Nenhuma vaga cadastrada.
                  </p>
                ) : null}
                <ul className="m-0 max-h-[840px] list-none overflow-y-auto p-0">
                  {orderedRoles.map((role) => {
                    const isBase = baseRoleSlugSet.has(role.slug);
                    return (
                      <li key={role.slug} className={`border-b ${careersBorder} p-4 last:border-b-0 md:p-5`}>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-[18px] text-[#101700]" style={{ fontFamily: heading, fontWeight: 500 }}>
                              {role.title}
                            </p>
                            <p className="mt-1 text-[12px] text-[#5f644c]" style={{ fontFamily: mono }}>
                              /{role.slug}
                            </p>
                          </div>
                          <span
                            className={`inline-flex px-2 py-1 text-[11px] uppercase ${isBase ? "bg-[#f2f3ef] text-[#5f644c] border border-[#d6dace]" : "bg-[#ecefe7] text-[#101700]"}`}
                            style={{ fontFamily: mono }}
                          >
                            {isBase ? "base" : "custom"}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => startEditing(role)}
                            className="inline-flex border border-[#d6dace] px-3 py-2 text-[12px] uppercase text-[#5f644c] hover:text-[#101700]"
                            style={{ fontFamily: mono }}
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            disabled={deletingSlug === role.slug}
                            onClick={() => { void handleDelete(role.slug); }}
                            className="inline-flex border border-[#d6dace] px-3 py-2 text-[12px] uppercase text-[#9f2b2b] hover:bg-[#f3e2e2] disabled:cursor-not-allowed disabled:opacity-70"
                            style={{ fontFamily: mono }}
                          >
                            {deletingSlug === role.slug ? "Excluindo..." : "Excluir"}
                          </button>
                          <a
                            href={`/vagas/${role.slug}`}
                            className="inline-flex border border-[#d6dace] px-3 py-2 text-[12px] uppercase text-[#5f644c] hover:text-[#101700]"
                            style={{ fontFamily: mono }}
                          >
                            Ver página
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

function CareersPage({ roles, isLoading = false }: { roles: CareersRole[]; isLoading?: boolean }) {
  const [isHeaderCondensed, setIsHeaderCondensed] = useState(false);
  const sortedRoles = useMemo(
    () =>
      [...roles].sort((first, second) =>
        getDisplayRoleTitle(first.title, first.displayTitle).localeCompare(getDisplayRoleTitle(second.title, second.displayTitle), "pt-BR", {
          sensitivity: "base",
        }),
      ),
    [roles],
  );

  useEffect(() => {
    let rafId = 0;

    const updateHeaderMode = () => {
      const shouldCondense = window.scrollY > 28 && window.innerWidth >= 1024;
      setIsHeaderCondensed((current) => (current === shouldCondense ? current : shouldCondense));
    };

    const scheduleHeaderUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateHeaderMode();
      });
    };

    updateHeaderMode();
    window.addEventListener("scroll", scheduleHeaderUpdate, { passive: true });
    window.addEventListener("resize", scheduleHeaderUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleHeaderUpdate);
      window.removeEventListener("resize", scheduleHeaderUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="bg-[#f2f3ef] min-h-screen w-full overflow-x-hidden pt-[72px]">
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-out ${
          isHeaderCondensed ? "pt-3" : "pt-0"
        }`}
      >
        <div className={isHeaderCondensed ? "mx-auto w-full max-w-[1040px] px-4" : "w-full"}>
          <header
            className={`transition-all duration-300 ease-out ${
              isHeaderCondensed
                ? "rounded-[16px] border border-[#d6dace] bg-[#f2f3ef]"
                : "border-b border-[#d6dace] bg-[#f2f3ef]"
            }`}
          >
            <div
              className={`mx-auto h-[72px] flex items-center justify-between gap-6 transition-[padding,max-width] duration-300 ease-out ${
                isHeaderCondensed ? "max-w-none px-6" : "max-w-[1512px] px-6 xl:px-[192px]"
              }`}
            >
              <a href="/" aria-label="ShiftLabs" title="ShiftLabs" className="inline-flex min-h-[44px] items-center gap-2 py-1">
                <ShiftLabsIcon />
                <ShiftLabsWordmark />
              </a>
              <div className="flex items-center gap-4 md:gap-6">
                <a
                  href="/vagas"
                  className="inline-flex min-h-[44px] items-center px-2 text-[#101700] transition-colors text-[14px]"
                  style={{ fontFamily: mono, fontWeight: 400, lineHeight: "normal" }}
                >
                  /VAGAS
                </a>
                <span aria-hidden className="h-4 w-px bg-[#d6dace]" />
                <div className="flex items-center gap-3 md:gap-4">
                  {careersSocialLinks.map(({ name, href, Icon }) => (
                    <a
                      key={`careers-header-${name}`}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      className="inline-flex h-11 w-11 items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      <main className="text-[#101700]">
        <div className="border-y border-[#d6dace]">
          <div className="max-w-[1512px] mx-auto flex relative">
            <XlHelper className="border-r border-[#d6dace]" />
            <div className="flex flex-col lg:flex-row flex-1 min-w-0">
              <div className="flex flex-col justify-between p-6 w-full lg:w-1/2 min-h-[300px] lg:h-[462px]">
                <div className="flex flex-col gap-8 max-w-[520px]">
                  <p
                    className="text-[#5f644c] text-[14px] md:text-[16px] uppercase"
                    style={{ fontFamily: mono }}
                  >
                    /carreiras shiftlabs
                  </p>
                  <div
                    className="text-[#101700] text-[28px] md:text-[36px] lg:text-[40px] leading-[normal]"
                    style={{ fontFamily: heading, fontWeight: 500 }}
                  >
                    Estruture o futuro com a gente.
                  </div>
                  <p
                    className="text-[#5f644c] text-[14px] md:text-[16px] max-w-[420px]"
                    style={{ fontFamily: body, lineHeight: 1.3 }}
                  >
                    Procuramos pessoas que pensam em sistemas, executam com autonomia e querem construir operações
                    previsíveis em negócios que crescem rápido.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <a
                    href="#lista-vagas"
                    className="inline-flex bg-[#101700] text-[#f2f3ef] px-4 py-4 text-[14px] md:text-[16px] uppercase cursor-pointer"
                    style={{ fontFamily: mono }}
                  >
                    ver vagas abertas
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-[#d6dace] p-6 flex items-center justify-center">
                <div className="w-full max-w-[532px] border border-[#d6dace]">
                  <div className="grid grid-cols-2">
                    <div className="border-b border-r border-[#d6dace] p-6 min-h-[146px] flex flex-col justify-end gap-2">
                      <p className="text-[#5f644c] text-[12px] md:text-[14px] uppercase" style={{ fontFamily: mono }}>
                        vagas ativas
                      </p>
                      <p className="text-[#101700] text-[36px] md:text-[48px]" style={{ fontFamily: heading, fontWeight: 500 }}>
                        {isLoading ? "..." : roles.length}
                      </p>
                    </div>
                    <div className="border-b border-[#d6dace] p-6 min-h-[146px] flex flex-col justify-end gap-2">
                      <p className="text-[#5f644c] text-[12px] md:text-[14px] uppercase" style={{ fontFamily: mono }}>
                        foco
                      </p>
                      <p className="text-[#101700] text-[18px] md:text-[24px]" style={{ fontFamily: heading, fontWeight: 500, lineHeight: 1.1 }}>
                        Produto, Tech, Growth e Operações
                      </p>
                    </div>
                    <div className="border-r border-[#d6dace] p-6 min-h-[146px] flex flex-col justify-end gap-2">
                      <p className="text-[#5f644c] text-[12px] md:text-[14px] uppercase" style={{ fontFamily: mono }}>
                        modelo
                      </p>
                      <p className="text-[#101700] text-[18px] md:text-[24px]" style={{ fontFamily: heading, fontWeight: 500, lineHeight: 1.1 }}>
                        Estruturas enxutas e ownership alto
                      </p>
                    </div>
                    <div className="p-6 min-h-[146px] flex flex-col justify-end gap-2">
                      <p className="text-[#5f644c] text-[12px] md:text-[14px] uppercase" style={{ fontFamily: mono }}>
                        abordagem
                      </p>
                      <p className="text-[#101700] text-[18px] md:text-[24px]" style={{ fontFamily: heading, fontWeight: 500, lineHeight: 1.1 }}>
                        Menos burocracia, mais entrega
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <XlHelper className="border-l border-[#d6dace]" />
            <SectionBorderTicks positions={["192px", "calc(100% - 192px)"]} />
          </div>
        </div>

        <div id="lista-vagas" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] pt-16 pb-9 scroll-mt-[96px]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="flex flex-col gap-6 max-w-[560px]">
              <p
                className="text-[#5f644c] text-[14px] md:text-[16px] uppercase"
                style={{ fontFamily: mono }}
              >
                /vagas abertas
              </p>
              <div
                className="text-[#101700] text-[28px] md:text-[36px] lg:text-[40px] leading-[normal]"
                style={{ fontFamily: heading, fontWeight: 500 }}
              >
                Onde você entra para construir sistema, não só tarefa.
              </div>
            </div>
            <p
              className="text-[#5f644c] text-[14px] md:text-[16px] max-w-[340px]"
              style={{ fontFamily: body, lineHeight: 1.3 }}
            >
              {isLoading
                ? "Carregando vagas..."
                : `${roles.length} oportunidades disponíveis agora.`}
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="border-y border-[#d6dace]">
            <div className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-10">
              <p className="text-[16px] text-[#5f644c]" style={{ fontFamily: body }}>
                Carregando vagas...
              </p>
            </div>
          </div>
        ) : null}

        {!isLoading && !roles.length ? (
          <div className="border-y border-[#d6dace]">
            <div className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-10">
              <p className="text-[16px] text-[#5f644c]" style={{ fontFamily: body }}>
                Nenhuma vaga publicada no momento.
              </p>
            </div>
          </div>
        ) : null}

        {!isLoading && roles.length ? (
          <div className="max-w-[1512px] mx-auto flex relative">
            <XlHelper className="border-t border-[#d6dace]" />
            <ul className="m-0 p-0 list-none flex-1 grid grid-cols-1 md:grid-cols-2 border-x border-t border-[#d6dace]">
              {sortedRoles.map((role, index) => {
                const introPreview = getRoleCardSummary(role);
                const displayArea = getRoleCardArea(role);
                const displayRoleTitle = getDisplayRoleTitle(role.title, role.displayTitle);
                const seniorityBadge = getRoleSeniorityBadge(role.title, role.displaySeniority, role.slug);
                return (
                  <li
                    key={role.slug}
                    className={`${
                      index > 0 ? "border-t border-[#d6dace]" : ""
                    } ${index % 2 === 1 ? "md:border-l md:border-[#d6dace]" : ""} ${
                      index >= 2 ? "md:border-t md:border-[#d6dace]" : ""
                    } ${index === 1 ? "md:border-t-0" : ""}`}
                  >
                    <a href={`/vagas/${role.slug}`} className="group block h-full transition-colors hover:bg-[#ecefe7]">
                      <article className="flex h-full min-h-[318px] flex-col justify-between gap-8 p-6">
                        <div className="flex flex-col gap-4">
                          <p className="text-[#5f644c] text-[13px] md:text-[14px] uppercase" style={{ fontFamily: mono }}>
                            /{displayArea}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 md:gap-3">
                            <h2
                              className="text-[#101700] text-[28px] md:text-[32px] leading-[1.08] transition-transform duration-200 lg:group-hover:translate-x-2"
                              style={{ fontFamily: display, fontWeight: 500 }}
                            >
                              {displayRoleTitle}
                            </h2>
                            {seniorityBadge ? <RoleSeniorityBadge label={seniorityBadge} /> : null}
                          </div>
                          <p
                            className="text-[#5f644c] text-[14px] md:text-[16px] max-w-[480px]"
                            style={{
                              fontFamily: body,
                              lineHeight: 1.3,
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 3,
                              overflow: "hidden",
                            }}
                            title={introPreview}
                          >
                            {introPreview}
                          </p>
                        </div>

                        <div className="flex flex-col gap-4">
                          <div className="flex flex-wrap gap-2">
                            <span
                              className="inline-flex items-center gap-2 border border-[#d6dace] px-3 py-2 text-[13px] md:text-[14px] text-[#5f644c]"
                              style={{ fontFamily: body, lineHeight: "normal" }}
                            >
                              <CareersLocationIcon />
                              {role.location}
                            </span>
                            <span
                              className="inline-flex items-center gap-2 border border-[#d6dace] px-3 py-2 text-[13px] md:text-[14px] text-[#5f644c]"
                              style={{ fontFamily: body, lineHeight: "normal" }}
                            >
                              <CareersWorkModeIcon />
                              {role.model}
                            </span>
                          </div>
                          <span
                            className="inline-flex w-fit bg-[#101700] text-[#f2f3ef] px-4 py-3 text-[14px] uppercase"
                            style={{ fontFamily: mono, lineHeight: "normal" }}
                          >
                            ver vaga
                          </span>
                        </div>
                      </article>
                    </a>
                  </li>
                );
              })}
            </ul>
            <XlHelper className="border-t border-[#d6dace]" />
            <SectionBorderTicks positions={["192px", "756px", "calc(100% - 192px)"]} />
          </div>
        ) : null}

        <div className="border-y border-[#d6dace] mt-16">
          <div className="max-w-[1512px] mx-auto flex relative">
            <XlHelper className="border-r border-[#d6dace]" />
            <div className="flex flex-col lg:flex-row flex-1 min-w-0 bg-[#b4eb38]">
              <div className="flex flex-col justify-between p-6 w-full lg:w-1/2 min-h-[300px] lg:h-[360px]">
                <div className="flex flex-col gap-6 max-w-[450px]">
                  <p className="text-[#456300] text-[14px] md:text-[16px] uppercase" style={{ fontFamily: mono }}>
                    /call to action
                  </p>
                  <div className="text-[#101700] text-[28px] md:text-[36px] lg:text-[40px]" style={{ fontFamily: heading, fontWeight: 500, lineHeight: "normal" }}>
                    Não encontrou a vaga ideal?
                  </div>
                </div>
                <p
                  className="text-[#456300] text-[14px] md:text-[16px] max-w-[390px] mt-8"
                  style={{ fontFamily: body, lineHeight: 1.3 }}
                >
                  Envie seu perfil e contexto. Se fizer sentido para o momento da operação, a gente conversa.
                </p>
              </div>
              <div className="flex items-end justify-end p-6 w-full lg:w-1/2 min-h-[120px] lg:h-[360px]">
                <a
                  href="mailto:careers@shiftlabs.digital?subject=Candidatura%20ShiftLabs"
                  className="inline-flex bg-[#101700] text-[#f2f3ef] px-4 py-4 text-[14px] md:text-[16px] uppercase"
                  style={{ fontFamily: mono, lineHeight: "normal" }}
                >
                  enviar perfil
                </a>
              </div>
            </div>
            <XlHelper className="border-l border-[#d6dace]" />
            <SectionBorderTicks positions={["192px", "calc(100% - 192px)"]} />
          </div>
        </div>

        <div className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-9">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-9">
            <div className="flex flex-col gap-8 max-w-[356px]">
              <ShiftLabsIcon />
              <p className="text-[#5f644c] text-[14px] md:text-[16px]" style={{ fontFamily: body, lineHeight: 1.3 }}>
                Construímos estruturas para produto, tecnologia, comercial e operação evoluírem no mesmo ritmo.
              </p>
              <p className="text-[#5f644c] text-[14px] md:text-[16px]" style={{ fontFamily: body, lineHeight: 1.3 }}>
                <span className="text-[#101700]" style={{ fontFamily: display, fontWeight: 500 }}>© 2026 ShiftLabs.</span>
                <span> Todos os direitos reservados.</span>
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[#5f644c] text-[14px] md:text-[16px] uppercase" style={{ fontFamily: mono }}>
                /social
              </p>
              <div className="flex items-center gap-5">
                {careersSocialLinks.map(({ name, href, Icon }) => (
                  <a key={`careers-footer-${name}`} href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 py-1">
                    <Icon />
                    <span className="text-[#5f644c] text-[14px] md:text-[16px]" style={{ fontFamily: body, lineHeight: 1.3 }}>
                      {name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-9">
            <BigWordmark />
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname.replace(/\/+$/, "") || "/" : "/";
  const isCareersEditorRoute = pathname === "/vagas/editor";
  const isCareersListRoute = pathname === "/vagas";
  const isCareersRoleRoute = pathname.startsWith("/vagas/") && !isCareersEditorRoute;
  const shouldLoadCareersData = isCareersEditorRoute || isCareersListRoute || isCareersRoleRoute;

  const [careersRoles, setCareersRoles] = useState<CareersRole[]>(
    hasSupabaseConfig && shouldLoadCareersData ? [] : defaultCareersRoles,
  );
  const [editorRoles, setEditorRoles] = useState<CareersRole[]>([]);
  const [isLoadingPublicRoles, setIsLoadingPublicRoles] = useState(hasSupabaseConfig && shouldLoadCareersData);
  const [isLoadingEditorRoles, setIsLoadingEditorRoles] = useState(false);
  const [editorSession, setEditorSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(hasSupabaseConfig && shouldLoadCareersData && isCareersEditorRoute);

  const fetchPublishedRoles = async () => {
    if (!supabase) {
      setCareersRoles(defaultCareersRoles);
      setIsLoadingPublicRoles(false);
      return;
    }
    setIsLoadingPublicRoles(true);
    const { data, error } = await supabase
      .from("careers_roles")
      .select("*")
      .eq("is_published", true)
      .order("sort_order", { ascending: true })
      .order("title", { ascending: true });

    if (error) {
      console.error("Erro ao buscar vagas públicas no Supabase:", error.message);
      setCareersRoles(defaultCareersRoles);
      setIsLoadingPublicRoles(false);
      return;
    }

    const mapped = ((data ?? []) as CareersRoleRow[]).map(rowToCareersRole);
    const visibleMapped = filterVisibleCareersRoles(mapped);
    setCareersRoles(visibleMapped.length ? visibleMapped : defaultCareersRoles);
    setIsLoadingPublicRoles(false);
  };

  const fetchEditorRoles = async () => {
    if (!supabase) {
      setEditorRoles(defaultCareersRoles);
      setIsLoadingEditorRoles(false);
      return;
    }
    setIsLoadingEditorRoles(true);
    const { data, error } = await supabase
      .from("careers_roles")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("title", { ascending: true });

    if (error) {
      console.error("Erro ao buscar vagas do editor no Supabase:", error.message);
      setEditorRoles([]);
      setIsLoadingEditorRoles(false);
      return;
    }

    const rows = (data ?? []) as CareersRoleRow[];
    const hasDisplaySeniorityColumn = rows.some((row) => Object.prototype.hasOwnProperty.call(row, "display_seniority"));
    const hasDisplayCommitmentColumn = rows.some((row) => Object.prototype.hasOwnProperty.call(row, "display_commitment"));
    const rowsNeedingNormalization = rows
      .map((row) => ({
        id: row.id,
        currentArea: row.area,
        currentDisplayArea: row.display_area?.trim() ?? "",
        currentDisplayTitle: row.display_title?.trim() ?? "",
        currentCardSummary: row.card_summary?.trim() ?? "",
        currentDisplaySeniority: row.display_seniority?.trim() ?? "",
        currentDisplayCommitment: row.display_commitment?.trim() ?? "",
        inferredArea: inferRoleArea({
          area: row.area,
          title: row.title,
          intro: row.intro,
          roleOneLiner: row.role_one_liner ?? undefined,
          aboutFirst: toTextArray(row.about)[0],
          bodyMarkdown: row.body_markdown ?? undefined,
        }),
        inferredDisplayTitle: getDisplayRoleTitle(row.title),
        inferredCardSummary: getRoleCardSummary({
          intro: row.intro,
          roleOneLiner: row.role_one_liner ?? undefined,
          bodyMarkdown: row.body_markdown ?? undefined,
          about: toTextArray(row.about),
          cardSummary: undefined,
        }),
        inferredDisplaySeniority: getRoleSeniorityBadge(row.title, undefined, row.slug) ?? "",
        inferredDisplayCommitment: getRoleDisplayCommitment(row.commitment),
      }))
      .filter((entry) =>
        entry.inferredArea !== entry.currentArea ||
        entry.currentDisplayArea !== entry.inferredArea ||
        entry.currentDisplayTitle !== entry.inferredDisplayTitle ||
        entry.currentCardSummary !== entry.inferredCardSummary ||
        (hasDisplaySeniorityColumn && entry.currentDisplaySeniority !== entry.inferredDisplaySeniority) ||
        (hasDisplayCommitmentColumn && entry.currentDisplayCommitment !== entry.inferredDisplayCommitment),
      );

    if (rowsNeedingNormalization.length) {
      const results = await Promise.all(
        rowsNeedingNormalization.map(async (entry) => {
          const { error: updateError } = await supabase
            .from("careers_roles")
            .update({ area: entry.inferredArea })
            .eq("id", entry.id);
          return { ...entry, updateError };
        }),
      );

      const failed = results.filter((result) => result.updateError);
      if (failed.length) {
        console.error("Não foi possível atualizar a área de algumas vagas:", failed.map((result) => result.updateError?.message));
      } else {
        void fetchPublishedRoles();
      }
    }

    setEditorRoles(filterVisibleCareersRoles(rows.map(rowToCareersRole)));
    setIsLoadingEditorRoles(false);
  };

  useEffect(() => {
    if (!shouldLoadCareersData) {
      setAuthLoading(false);
      setIsLoadingPublicRoles(false);
      setEditorRoles([]);
      return;
    }

    if (!supabase) {
      setAuthLoading(false);
      setIsLoadingPublicRoles(false);
      setEditorRoles(defaultCareersRoles);
      return;
    }

    let isActive = true;

    if (!isCareersEditorRoute) {
      setAuthLoading(false);
      setEditorSession(null);
      void fetchPublishedRoles();
      return () => {
        isActive = false;
      };
    }

    const initialize = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (!isActive) return;
      if (error) {
        console.error("Erro ao obter sessão do Supabase:", error.message);
      }
      const currentSession = data.session ?? null;
      setEditorSession(currentSession);
      setAuthLoading(false);
      await fetchPublishedRoles();
      if (currentSession) {
        await fetchEditorRoles();
      } else {
        setEditorRoles([]);
      }
    };

    void initialize();

    const { data: authData } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isActive) return;
      setEditorSession(session);
      setAuthLoading(false);
      void fetchPublishedRoles();
      if (session) {
        void fetchEditorRoles();
      } else {
        setEditorRoles([]);
      }
    });

    return () => {
      isActive = false;
      authData.subscription.unsubscribe();
    };
  }, [isCareersEditorRoute, shouldLoadCareersData]);

  const handleSignIn = async (email: string, password: string) => {
    if (!supabase) {
      return { ok: false, message: "Supabase não está configurado." };
    }
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return { ok: false, message: error.message };
    }
    await fetchEditorRoles();
    return { ok: true };
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Erro ao sair da sessão do Supabase:", error.message);
    }
  };

  const handleSaveRole = async (role: CareersRole, previousSlug?: string) => {
    if (!supabase) {
      return { ok: false, message: "Supabase não está configurado." };
    }

    const normalized = normalizeCareersRole(role);
    if (!normalized) {
      return { ok: false, message: "Dados de vaga inválidos." };
    }

    const payload = roleToCareersRowPayload(normalized);

    const { error: upsertError } = await supabase
      .from("careers_roles")
      .upsert(payload, { onConflict: "slug" });
    if (upsertError) {
      return { ok: false, message: upsertError.message };
    }

    if (previousSlug && previousSlug !== normalized.slug) {
      const { error: deletePreviousError } = await supabase
        .from("careers_roles")
        .delete()
        .eq("slug", previousSlug);
      if (deletePreviousError) {
        return { ok: false, message: deletePreviousError.message };
      }
    }

    await Promise.all([fetchEditorRoles(), fetchPublishedRoles()]);
    return { ok: true };
  };

  const handleDeleteRole = async (slug: string) => {
    if (!supabase) {
      return { ok: false, message: "Supabase não está configurado." };
    }

    const { error } = await supabase.from("careers_roles").delete().eq("slug", slug);
    if (error) {
      return { ok: false, message: error.message };
    }

    await Promise.all([fetchEditorRoles(), fetchPublishedRoles()]);
    return { ok: true };
  };

  const handleRefreshRoles = async () => {
    if (editorSession) {
      await Promise.all([fetchEditorRoles(), fetchPublishedRoles()]);
      return;
    }
    await fetchPublishedRoles();
  };

  const roleSlugFromPath = isCareersRoleRoute ? decodeURIComponent(pathname.slice("/vagas/".length)) : null;
  const selectedRole = roleSlugFromPath ? careersRoles.find((role) => role.slug === roleSlugFromPath) : undefined;
  const shouldShowRoleLoadingState = Boolean(isCareersRoleRoute && isLoadingPublicRoles);
  const isUnknownRoleRoute = Boolean(isCareersRoleRoute && !isLoadingPublicRoles && roleSlugFromPath && !selectedRole);

  useEffect(() => {
    if (isCareersEditorRoute) {
      applySeoPayload({
        title: "Editor de Vagas | ShiftLabs",
        description: "Painel interno para publicacao e manutencao das vagas da ShiftLabs.",
        path: "/vagas/editor",
        noindex: true,
        pageSchema: null,
      });
      return;
    }

    if (isCareersRoleRoute && selectedRole) {
      const displayRoleTitle = getDisplayRoleTitle(selectedRole.title, selectedRole.displayTitle);
      applySeoPayload({
        title: `${displayRoleTitle} | Vagas ShiftLabs`,
        description: getRoleCardSummary(selectedRole),
        path: `/vagas/${selectedRole.slug}`,
        type: "article",
        pageSchema: buildJobPostingSchema(selectedRole),
      });
      return;
    }

    if (isCareersListRoute || isCareersRoleRoute) {
      applySeoPayload({
        title: "Vagas na ShiftLabs | Carreiras",
        description:
          "Explore as vagas abertas da ShiftLabs em produto, tecnologia, growth, comercial e operacoes.",
        path: isCareersRoleRoute ? "/vagas" : pathname,
        noindex: Boolean(isUnknownRoleRoute || shouldShowRoleLoadingState),
        pageSchema: buildCareersCollectionSchema(careersRoles),
      });
      return;
    }

    applySeoPayload({
      title: "ShiftLabs | Arquitetura de Produto, Tecnologia e Operacao",
      description: seoDefaultDescription,
      path: "/",
      pageSchema: buildLandingPageSchema(),
    });
  }, [
    pathname,
    isCareersEditorRoute,
    isCareersListRoute,
    isCareersRoleRoute,
    isUnknownRoleRoute,
    shouldShowRoleLoadingState,
    selectedRole,
    careersRoles,
  ]);

  if (isCareersEditorRoute) {
    return (
      <CareersEditorPage
        roles={editorRoles}
        isLoadingRoles={isLoadingEditorRoles}
        isAuthenticated={Boolean(editorSession)}
        authLoading={authLoading}
        onSignIn={handleSignIn}
        onSignOut={handleSignOut}
        onSaveRole={handleSaveRole}
        onDeleteRole={handleDeleteRole}
        onRefreshRoles={handleRefreshRoles}
      />
    );
  }

  if (isCareersListRoute) {
    return <CareersPage roles={careersRoles} isLoading={isLoadingPublicRoles} />;
  }

  if (isCareersRoleRoute) {
    if (shouldShowRoleLoadingState) {
      return <CareersPage roles={[]} isLoading />;
    }
    if (selectedRole) {
      return <CareerRolePage role={selectedRole} />;
    }
    return <CareersPage roles={careersRoles} />;
  }

  return <LandingPage />;
}
