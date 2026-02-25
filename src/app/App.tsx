import { useEffect, useRef, useState } from "react";
import svgPaths from "../imports/svg-pgtixnbxan";
import { MenuxLogo, CortexLogo, AtomLogo, AuraLogo } from "./components/BrandLogos";

const mono = "'Basis Grotesque Pro Mono', 'Courier New', monospace";
const heading = "'Inter Tight', sans-serif";
const body = "'InterDisplay', 'Inter', sans-serif";
const display = "'InterDisplay', 'Inter', sans-serif";
const audienceTextHalo =
  "0 0 0 #F2F3EF, 1px 0 0 #F2F3EF, -1px 0 0 #F2F3EF, 0 1px 0 #F2F3EF, 0 -1px 0 #F2F3EF, 2px 0 0 #F2F3EF, -2px 0 0 #F2F3EF, 0 2px 0 #F2F3EF, 0 -2px 0 #F2F3EF, 0 0 12px #F2F3EF, 0 0 22px #F2F3EF, 0 0 34px #F2F3EF";

/* ─── Reusable sub-components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      data-reveal="text"
      className="text-[#70745a] text-[14px] md:text-[16px] uppercase"
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
            <span className="absolute top-0 -translate-x-1/2 h-[2px] w-[14px] bg-[#70745a]" />
            <span className="absolute top-0 -translate-x-1/2 h-[12px] w-[2px] bg-[#70745a]" />
          </div>
        ))}
      {showBottom &&
        positions.map((left) => (
          <div key={`bottom-${left}`} className="absolute bottom-0" style={{ left }}>
            <span className="absolute bottom-0 -translate-x-1/2 h-[2px] w-[14px] bg-[#70745a]" />
            <span className="absolute bottom-0 -translate-x-1/2 h-[12px] w-[2px] bg-[#70745a]" />
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
    let lastTime = performance.now();
    let accumulator = 0;
    let prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stepIntervalMs = 68;

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
      const count = clamp(Math.floor(cols * rows * 0.186), 540, 1380);
      stars = Array.from({ length: count }, () => {
        const star: Star = { x: 0, y: 0, z: 0, speed: 0 };
        resetStar(star);
        return star;
      });
      const ambientCount = clamp(Math.floor(cols * rows * 0.024), 120, 640);
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

    const animate = (now: number) => {
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

      if (!prefersReduced) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = (event: MediaQueryListEvent) => {
      prefersReduced = event.matches;
      cancelAnimationFrame(rafId);
      if (!prefersReduced) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(animate);
      } else {
        buildFrame();
      }
    };

    rebuild();
    if (!prefersReduced) {
      rafId = requestAnimationFrame(animate);
    }

    const resizeObserver = new ResizeObserver(() => rebuild());
    resizeObserver.observe(host);
    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      resizeObserver.disconnect();
      mediaQuery.removeEventListener("change", handleMotionPreference);
      cancelAnimationFrame(rafId);
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

/* ─── Framework icons ─── */
function IdentityLayerIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="10.5" stroke="#70745a" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4.5" stroke="#70745a" strokeWidth="1.5" />
      <path d="M20 4.5V9.5" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M20 30.5V35.5" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M4.5 20H9.5" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M30.5 20H35.5" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function FundamentalsLayerIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 40 40">
      <rect height="5.5" rx="1.2" stroke="#70745a" strokeWidth="1.5" width="23" x="8.5" y="25.5" />
      <rect height="5.5" rx="1.2" stroke="#70745a" strokeWidth="1.5" width="17" x="11.5" y="18.2" />
      <rect height="5.5" rx="1.2" stroke="#70745a" strokeWidth="1.5" width="11" x="14.5" y="10.9" />
    </svg>
  );
}

function ArchitectureLayerIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 40 40">
      <rect height="23" rx="2" stroke="#70745a" strokeWidth="1.5" width="23" x="8.5" y="8.5" />
      <path d="M8.5 16.2H31.5" stroke="#70745a" strokeWidth="1.5" />
      <path d="M16.2 8.5V31.5" stroke="#70745a" strokeWidth="1.5" />
      <path d="M22 22H31.5" stroke="#70745a" strokeWidth="1.5" />
      <path d="M22 31.5V22" stroke="#70745a" strokeWidth="1.5" />
    </svg>
  );
}

function OperatingSystemLayerIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="6.2" stroke="#70745a" strokeWidth="1.5" />
      <path d="M20 7.2V11.2" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M20 28.8V32.8" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M7.2 20H11.2" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M28.8 20H32.8" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M11 11L13.8 13.8" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M26.2 26.2L29 29" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M29 11L26.2 13.8" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M13.8 26.2L11 29" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function IntelligenceLayerIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 40 40">
      <circle cx="10" cy="11" fill="#70745a" r="2.2" />
      <circle cx="29.8" cy="10.5" fill="#70745a" r="2.2" />
      <circle cx="20" cy="20" fill="#70745a" r="2.2" />
      <circle cx="10.5" cy="29.2" fill="#70745a" r="2.2" />
      <circle cx="30" cy="29" fill="#70745a" r="2.2" />
      <path d="M12 12.5L18.3 18.2" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M27.8 12L21.7 18.1" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12.4 27.8L18.1 21.9" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M27.8 27.4L21.9 21.7" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12.2 11.1H27.6" stroke="#70745a" strokeLinecap="round" strokeWidth="1.5" />
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
    illustrationClassName: "w-[100px] sm:w-[122px]",
    illustrationDesktopClassName: "left-[55px] top-[38px] w-[140px]",
  },
  {
    id: 2,
    text: "Marketing gera demanda que a operação não absorve.",
    textMaxClass: "max-w-[207px]",
    illustrationSrc: "/illustrations/problem-02-marketing-operacao.svg",
    illustrationClassName: "w-[90px] sm:w-[104px]",
    illustrationDesktopClassName: "left-[65px] top-[38px] w-[118px]",
  },
  {
    id: 3,
    text: "Tecnologia acumula decisões sem arquitetura clara.",
    textMaxClass: "max-w-[225px]",
    illustrationSrc: "/illustrations/problem-03-tecnologia-arquitetura.svg",
    illustrationClassName: "w-[102px] sm:w-[124px]",
    illustrationDesktopClassName: "left-[53px] top-[38px] w-[143px]",
  },
  {
    id: 4,
    text: "Gestão decide por percepção, não por sistema.",
    textMaxClass: "max-w-[207px]",
    illustrationSrc: "/illustrations/problem-04-gestao-percepcao.svg",
    illustrationClassName: "w-[92px] sm:w-[110px]",
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
    illustrationClassName: "w-[95px] sm:w-[112px]",
    illustrationDesktopClassName: "left-[59px] top-[37px] w-[130px]",
  },
  {
    title: "Tecnologia & Arquitetura",
    desc: "Projetamos arquiteturas escaláveis com stack moderna e bem definida.",
    titleMaxClass: "max-w-[175px]",
    illustrationSrc: "/illustrations/services-02-tecnologia-arquitetura.svg",
    illustrationClassName: "w-[120px] sm:w-[150px]",
    illustrationDesktopClassName: "left-[32px] top-[51px] w-[184px]",
  },
  {
    title: "Growth & Comercial",
    desc: "Estruturamos posicionamento, pricing e funis com lógica de margem e LTV.",
    titleMaxClass: "max-w-[143px]",
    illustrationSrc: "/illustrations/services-03-growth-comercial.svg",
    illustrationClassName: "w-[108px] sm:w-[122px]",
    illustrationDesktopClassName: "left-[55px] top-[51px] w-[139px]",
  },
  {
    title: "Inteligência & Operação",
    desc: "Modelamos indicadores, automatizamos processos e reduzimos fricção operacional.",
    titleMaxClass: "max-w-[169px]",
    illustrationSrc: "/illustrations/services-04-inteligencia-operacao.svg",
    illustrationClassName: "w-[126px] sm:w-[146px]",
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
  { name: "LinkedIn", Icon: LinkedInIcon },
  { name: "Instagram", Icon: InstagramIcon },
  { name: "GitHub", Icon: GitHubIcon },
];

type CaseLogoKey = "menux" | "cortex";

/* ════════════════════════════════════════════ */
export default function App() {
  const [activeCaseLogo, setActiveCaseLogo] = useState<CaseLogoKey>("menux");

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!revealNodes.length) return;

    const hasReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (hasReducedMotion || typeof IntersectionObserver === "undefined") {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f2f3ef] min-h-screen w-full overflow-x-hidden">
      {/* ===== TOP BAR ===== */}
      <div className="max-w-[1512px] mx-auto px-6 xl:px-[192px] py-4 flex items-center gap-2">
        <ShiftLabsIcon />
        <ShiftLabsWordmark />
      </div>

      {/* ===== HERO ===== */}
      <div data-reveal="section" className="border-y border-[#d6dace]">
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
                  className="text-[#70745a] text-[14px] md:text-[16px] max-w-[343px]"
                  style={{ fontFamily: body, lineHeight: 1.333 }}
                >
                  A Shift Labs transforma ideias, operações confusas ou produtos mal estruturados em negócios organizados, previsíveis e escaláveis.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <button
                  className="bg-[#101700] text-[#f2f3ef] px-4 py-4 text-[14px] md:text-[16px] uppercase cursor-pointer"
                  style={{ fontFamily: mono }}
                >
                  conhecer mais
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 w-full lg:w-1/2 min-h-[300px] lg:h-[462px] lg:border-l border-[#d6dace]">
              <div className="bg-white w-full max-w-[532px] aspect-[532/430] overflow-hidden">
                <video
                  className="w-full h-full object-cover"
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
      <div data-reveal="section" className="border-b border-[#d6dace]">
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
              className="text-[#70745a] text-[14px] md:text-[16px] max-w-[335px]"
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
                className={`relative flex items-end p-6 min-h-[180px] sm:h-[231px] md:pr-[249px] ${
                  index > 0 ? "border-t border-[#d6dace]" : ""
                } ${index % 2 === 1 ? "sm:border-l sm:border-[#d6dace]" : ""} ${
                  index >= 2 ? "sm:border-t sm:border-[#d6dace]" : ""
                } ${index === 1 ? "sm:border-t-0" : ""}`}
              >
                <div className="pointer-events-none absolute inset-x-6 top-6 flex justify-center md:hidden">
                  <img
                    alt=""
                    aria-hidden
                    src={card.illustrationSrc}
                    className={`h-auto object-contain ${card.illustrationClassName}`}
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
                <p data-reveal="text" className={`relative z-[1] text-[#101700] text-[14px] md:text-[16px] ${card.textMaxClass}`} style={{ fontFamily: display, fontWeight: 500, lineHeight: "normal" }}>
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
      <div data-reveal="section" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] pt-16 pb-9">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12">
          <div className="flex flex-col gap-8 max-w-[649px]">
            <SectionLabel>/The Shift Approach</SectionLabel>
            <SectionTitle className="text-[36px] md:text-[48px] lg:text-[64px]">
              From chaos to coordinated systems.
            </SectionTitle>
          </div>
          <p
            data-reveal="text"
            className="text-[#70745a] text-[14px] md:text-[16px] max-w-[320px]"
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
                className="text-[#70745a] text-[14px] md:text-[16px] uppercase mt-4"
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
      <div data-reveal="section" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] pt-16 pb-9">
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
              className={`relative flex flex-col justify-end p-6 min-h-[200px] md:h-[231px] md:pr-[249px] ${
                index > 0 ? "border-t border-[#d6dace]" : ""
              } ${index % 2 === 1 ? "md:border-l md:border-[#d6dace]" : ""} ${
                index >= 2 ? "md:border-t md:border-[#d6dace]" : ""
              } ${index === 1 ? "md:border-t-0" : ""}`}
            >
              <div className="pointer-events-none absolute inset-x-6 top-6 flex justify-center md:hidden">
                <img
                  alt=""
                  aria-hidden
                  src={svc.illustrationSrc}
                  className={`h-auto object-contain ${svc.illustrationClassName}`}
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
              <div className="relative z-[1] flex flex-col gap-4">
                <p data-reveal="text" className={`text-[#101700] text-[14px] md:text-[16px] ${svc.titleMaxClass}`} style={{ fontFamily: display, fontWeight: 500, lineHeight: "normal" }}>
                  {svc.title}
                </p>
                <p data-reveal="text" className="text-[#70745a] text-[14px] md:text-[16px] max-w-[235px]" style={{ fontFamily: body, lineHeight: 1.076 }}>
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
              <p data-reveal="text" className="text-[#70745a] text-[14px] md:text-[16px] uppercase" style={{ fontFamily: mono }}>
                Engineering Predictable Growth
              </p>
              <p data-reveal="title" className="text-[#f2f3ef] text-[20px] md:text-[24px]" style={{ fontFamily: heading, fontWeight: 500 }}>
                The Business Engineering Framework™
              </p>
              <p
                data-reveal="text"
                className="text-[#70745a] text-[14px] md:text-[16px] max-w-[343px]"
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
                  <div className="w-[85px] h-[85px] rounded-full border border-[#70745a] flex items-center justify-center">
                    <layer.Icon />
                  </div>
                  <p data-reveal="text" className="text-[#70745a] text-[14px] md:text-[16px] text-center" style={{ fontFamily: body, lineHeight: 1.3 }}>
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
      <div data-reveal="section" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] pt-16 pb-9">
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
                  <p data-reveal="text" className="text-[#70745a] text-[14px] md:text-[16px] max-w-[315px]" style={{ fontFamily: body, lineHeight: 1.076 }}>
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
                  <p data-reveal="text" className="text-[#70745a] text-[14px] md:text-[16px] max-w-[315px]" style={{ fontFamily: body, lineHeight: 1.076 }}>
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
            <AsciiStarfield className="absolute inset-0" />
            <div className="relative z-[1] flex flex-col items-center gap-6 text-center">
              <p
                data-reveal="text"
                className="text-[#70745a] text-[14px] md:text-[16px] uppercase"
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
            className="text-[#70745a] text-[12px] md:text-[14px] uppercase"
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
                <p data-reveal="text" className="text-[#517400] text-[14px] md:text-[16px] uppercase" style={{ fontFamily: mono }}>
                  /Call to Action
                </p>
                <SectionTitle className="text-[28px] md:text-[36px] lg:text-[40px]">
                  Ready to structure what you’re building?
                </SectionTitle>
              </div>
              <p
                data-reveal="text"
                className="text-[#517400] text-[14px] md:text-[16px] max-w-[360px] mt-8"
                style={{ fontFamily: body, lineHeight: 1.076 }}
              >
                Se você sente que sua empresa poderia estar melhor organizada, mais previsível e mais eficiente, o problema provavelmente não é esforço.
              </p>
            </div>
            <div className="flex items-end justify-end p-6 w-full lg:w-1/2 min-h-[120px] lg:h-[462px]">
              <button
                className="bg-[#101700] text-[#f2f3ef] px-4 py-4 text-[14px] md:text-[16px] uppercase cursor-pointer"
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
      <div data-reveal="section" className="max-w-[1512px] mx-auto px-6 md:px-8 xl:px-[192px] py-9">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-9">
          <div className="flex flex-col gap-8 max-w-[356px]">
            <ShiftLabsIcon />
            <p
              data-reveal="text"
              className="text-[#70745a] text-[14px] md:text-[16px]"
              style={{ fontFamily: body, lineHeight: 1.3 }}
            >
              Arquitetamos produto, tecnologia, comercial e operação em fluxos coordenados, com inteligência aplicada de ponta a ponta.
            </p>
            <p
              data-reveal="text"
              className="text-[#70745a] text-[14px] md:text-[16px]"
              style={{ fontFamily: body, lineHeight: 1.3 }}
            >
              <span className="text-[#101700]" style={{ fontFamily: display, fontWeight: 500 }}>© 2026 ShiftLabs.</span>
              <span> Todos os direitos reservados.</span>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p data-reveal="text" className="text-[#70745a] text-[14px] md:text-[16px] uppercase" style={{ fontFamily: mono }}>
              /Call to Action
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map(({ name, Icon }) => (
                <a
                  key={name}
                  href="#"
                  className="flex items-center gap-2"
                >
                  <Icon />
                  <span className="text-[#70745a] text-[14px] md:text-[16px]" style={{ fontFamily: body, lineHeight: 1.3 }}>
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
    </div>
  );
}
