"use client";

import { FormEvent, PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  LayoutTemplate,
  Mail,
  Megaphone,
  Menu,
  MessageCircle,
  Moon,
  Play,
  Search,
  Sparkles,
  Sun,
  Video,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { Service, EN_SERVICES, ES_SERVICES } from "./servicesData";

type Lang = "en" | "es";
type Theme = "dark" | "light";

type Copy = {
  nav: {
    aria: string;
    home: string;
    services: string;
    work: string;
    contact: string;
    diagnosis: string;
    openMenu: string;
    closeMenu: string;
    themeLight: string;
    themeDark: string;
  };
  hero: {
    badge: string;
    title: React.ReactNode;
    text: string;
    work: string;
    system: string;
    visualAria: string;
    video: string;
    variations: string;
  };
  proof: Array<[string, string]>;
  blocks: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
    connected: string;
  };
  services: {
    eyebrow: string;
    title: React.ReactNode;
    text: string;
    selected: string;
    items: Service[];
    viewProjects: string;
    closeModal: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    all: string;
    items: Array<[string, string, string]>;
  };
  cta: {
    title: string;
    text: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    title: React.ReactNode;
    text: string;
    email: string;
    whatsapp: string;
    response: string;
    fields: {
      name: string;
      company: string;
      whatsapp: string;
      web: string;
      business: string;
      services: string;
      multi: string;
      message: string;
      submit: string;
      idle: string;
      sent: string;
    };
    placeholders: {
      name: string;
      company: string;
      whatsapp: string;
      web: string;
      business: string;
      message: string;
    };
    serviceOptions: string[];
  };
  footer: string;
};

// Services data array is imported from servicesData.ts

const COPY: Record<Lang, Copy> = {
  en: {
    nav: {
      aria: "Primary navigation",
      home: "Home",
      services: "Services",
      work: "Work",
      contact: "Contact",
      diagnosis: "Diagnosis",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      themeLight: "Switch to light theme",
      themeDark: "Switch to dark theme",
    },
    hero: {
      badge: "[GROWTH_AUTOMATION_26]",
      title: <>Process Automation & <em>AI for Business</em>.</>,
      text: "I design and integrate digital architectures with n8n, CRM, and AI agents to eliminate repetitive tasks and scale your operations.",
      work: "Contact me",
      system: "View system",
      visualAria: "Joseph Clavijo visual system",
      video: "AUTOMATION ENGINE",
      variations: "saved / month",
    },
    proof: [
      ["EXPERIENCE", "5+ YEARS ACTIVE"],
      ["FOCUS", "AUTOMATION & AI"],
      ["BASE", "COLOMBIA / REMOTE"],
      ["STATUS", "AVAILABLE NOW"],
    ],
    blocks: {
      eyebrow: "WHAT I DO · 4 BLOCKS",
      title: "Scalable operating systems, not simple assets.",
      text: "Each block operates independently, but together they form your business's operating engine.",
      items: [
        "n8n & Zapier Automation",
        "AI Agents & Chatbots",
        "CRM & Lead Automation",
        "Sales Ops & Reporting",
      ],
      connected: "Automation & Integrations",
    },
    services: {
      eyebrow: "SERVICES · 4 PILLARS",
      title: <>Four pillars. <em>One system.</em></>,
      text: "Each block operates independently, but together they form your business's operating system.",
      selected: "Implemented projects",
      items: EN_SERVICES,
      viewProjects: "View projects",
      closeModal: "Close",
    },
    portfolio: {
      eyebrow: "PORTFOLIO · SELECTED WORK",
      title: "Scalable workflows, AI integrations, and real-time reporting.",
      all: "View all",
      items: [
        ["Operations Automation: n8n", "n8n Workflow", "large"],
        ["WhatsApp Sales Chatbots", "AI Agent", "wide"],
        ["GoHighLevel Sales Funnel", "CRM", "small"],
        ["Sales Reporting & Dashboards", "Dashboard", "small"],
        ["Real-time Synchronization", "Automation", "wide"],
        ["Customer Nurturing Flow", "Automation", "small"],
        ["Paid Ads Dashboard", "Reporting", "small"],
      ],
    },
    cta: {
      title: "Automate your business and create an operating system that works 24/7.",
      text: "Free automation audit · 20 minutes · no commitment",
      button: "Contact me",
    },
    contact: {
      eyebrow: "CONTACT · LEAD CAPTURE",
      title: <>Tell us about your business. <em>We automate it.</em></>,
      text: "Send us a message and we will return a free 20-minute automation audit: what to optimize, what to integrate, and what to automate first.",
      email: "josephar2447@hotmail.com",
      whatsapp: "WhatsApp: +57 318 462 5453",
      response: "Typical reply within ~24h, business days",
      fields: {
        name: "Name",
        company: "Company",
        whatsapp: "WhatsApp",
        web: "Website / Instagram",
        business: "Type of business",
        services: "Service needed",
        multi: "(multi-select)",
        message: "Message",
        submit: "Request audit",
        idle: "No spam. Ever.",
        sent: "Brief received. We will contact you soon.",
      },
      placeholders: {
        name: "Your name",
        company: "Your brand name",
        whatsapp: "+57 318 462 5453",
        web: "pagurai.com · @brand",
        business: "E-commerce, Agency, SaaS, etc.",
        message: "Tell us what you need...",
      },
      serviceOptions: ["Automation with n8n & Zapier", "AI Agents & Chatbots", "CRM & Lead Automation", "Sales Ops & Reporting"],
    },
    footer: "HERO → ABOUT ME → SERVICES → PORTFOLIO → CONTACT",
  },
  es: {
    nav: {
      aria: "Navegación principal",
      home: "Inicio",
      services: "Servicios",
      work: "Trabajo",
      contact: "Contacto",
      diagnosis: "Diagnóstico",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      themeLight: "Cambiar a tema claro",
      themeDark: "Cambiar a tema oscuro",
    },
    hero: {
      badge: "[GROWTH_AUTOMATION_26]",
      title: <>Automatización de Procesos e <em>IA para Negocios</em>.</>,
      text: "Diseño e integro arquitecturas digitales con n8n, CRM y agentes de IA para eliminar tareas repetitivas y escalar tus operaciones.",
      work: "Contáctame",
      system: "Ver sistema",
      visualAria: "Sistema de automatización de Joseph Clavijo",
      video: "IA · MOTOR DE AUTOMATIZACIÓN",
      variations: "ahorradas / mes",
    },
    proof: [
      ["EXPERIENCIA", "5+ AÑOS ACTIVO"],
      ["ENFOQUE", "AUTOMATIZACIÓN E IA"],
      ["BASE", "COLOMBIA"],
      ["ESTADO", "DISPONIBLE AHORA"],
    ],
    blocks: {
      eyebrow: "QUÉ HAGO · 4 PILARES",
      title: "Sistemas operativos escalables, no simples piezas sueltas.",
      text: "Cada bloque opera de forma independiente, pero juntos forman el motor operativo de tu negocio.",
      items: [
        "Automatización con n8n & Zapier",
        "Agentes de IA & Chatbots",
        "Automatización de CRM & Leads",
        "Sales Ops & Reporting",
      ],
      connected: "Automatizaciones & Integraciones",
    },
    services: {
      eyebrow: "SERVICIOS · 4 PILARES",
      title: <>Cuatro pilares. <em>Un sistema.</em></>,
      text: "Cada pilar funciona por sí solo, pero están pensados para conectarse en un sistema operativo para tu negocio.",
      selected: "Proyectos implementados",
      items: ES_SERVICES,
      viewProjects: "Ver proyectos",
      closeModal: "Cerrar",
    },
    portfolio: {
      eyebrow: "PORTAFOLIO · TRABAJOS SELECCIONADOS",
      title: "Flujos escalables, integraciones de IA y reportes en tiempo real.",
      all: "Ver todos",
      items: [
        ["Automatización de Operaciones", "Flujo n8n", "large"],
        ["Chatbots de Ventas en WhatsApp", "AI Agent", "wide"],
        ["Embudo de Ventas en GoHighLevel", "CRM", "small"],
        ["Reporting y Sales Ops", "Dashboard", "small"],
        ["Sincronización en Tiempo Real", "Automatización", "wide"],
        ["Flujo de Nutrición de Clientes", "Automatización", "small"],
        ["Dashboard de Pauta Digital", "Reporting", "small"],
      ],
    },
    cta: {
      title: "Automatiza tu negocio y crea un sistema operativo que trabaje 24/7.",
      text: "Diagnóstico de automatización gratis · 20 minutos · sin compromiso",
      button: "Contáctame",
    },
    contact: {
      eyebrow: "CONTACTO · DIAGNÓSTICO DE AUTOMATIZACIÓN",
      title: <>Cuéntanos sobre tu negocio. <em>Nosotros lo automatizamos.</em></>,
      text: "Envíanos un mensaje y te devolvemos un diagnóstico de automatización gratis de 20 min: qué optimizar, qué integrar y qué automatizar primero.",
      email: "josephar2447@hotmail.com",
      whatsapp: "WhatsApp: +57 318 462 5453",
      response: "Respuesta habitual en ~24h, días hábiles",
      fields: {
        name: "Nombre",
        company: "Empresa",
        whatsapp: "WhatsApp",
        web: "Sitio web / Instagram",
        business: "Tipo de negocio",
        services: "Servicio que necesitas",
        multi: "(multi-selección)",
        message: "Mensaje",
        submit: "Solicitar diagnóstico",
        idle: "Sin spam. Nunca.",
        sent: "Brief recibido. Te contactaremos pronto.",
      },
      placeholders: {
        name: "Tu nombre",
        company: "Nombre de tu marca",
        whatsapp: "+57 318 462 5453",
        web: "pagurai.com · @marca",
        business: "E-commerce, Agencia, SaaS, etc.",
        message: "Cuéntanos qué necesitas...",
      },
      serviceOptions: ["Automatización con n8n & Zapier", "Agentes de IA & Chatbots", "Automatización de CRM & Leads", "Sales Ops & Reporting"],
    },
    footer: "HERO → SOBRE MÍ → SERVICIOS → PORTFOLIO → CONTACTO",
  },
};

const BLOCK_IMAGES = [
  "/assets/images/projects/Automatización de Operaciones.webp",
  "/assets/images/projects/Chatbots de Ventas en WhatsApp.webp",
  "/assets/images/projects/AutomatizacióndeCRM&Leads(Portada).webp",
  "/assets/images/projects/Reporting y Sales Ops.webp",
];

const PORTFOLIO_IMAGES = [
  "/assets/images/projects/Automatización de Operaciones.webp",
  "/assets/images/projects/Chatbots de Ventas en WhatsApp.webp",
  "/assets/images/projects/AutomatizacióndeCRM&Leads(Portada).webp",
  "/assets/images/projects/Reporting y Sales Ops.webp",
  "/assets/images/projects/Sincronización en Tiempo Real.webp",
  "/assets/images/projects/Banner CRM.webp",
  "/assets/images/projects/Dashboard 2 meta ads.webp",
];



export function moveGlow(e: ReactPointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  e.currentTarget.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  e.currentTarget.style.setProperty("--px", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--py", `${e.clientY - rect.top}px`);
}

export function DotMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let time = 0;
    let dots: Array<{ x: number; y: number; seed: number; delay: number }> = [];
    let accentColor = [0, 152, 255];

    const hash = (x: number, y: number) =>
      ((Math.sin(x * 127.1 + y * 311.7) * 43758.5453123) % 1 + 1) % 1;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const accentString =
        getComputedStyle(document.documentElement).getPropertyValue("--accent-rgb").trim() ||
        "0, 152, 255";
      accentColor = accentString.split(",").map((value) => Number(value.trim()));
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const grid = 20;
      const cols = Math.ceil(width / grid) + 1;
      const rows = Math.ceil(height / grid) + 1;
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          dots.push({
            x: c * grid + grid / 2,
            y: r * grid + grid / 2,
            seed: hash(c, r),
            delay: hash(c + 0.5, r + 0.5),
          });
        }
      }
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      const cx = width / 2;
      const cy = height / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy) || 1;

      dots.forEach((dot) => {
        const flicker = Math.sin(time * 3.5 + dot.seed * 50) * 0.5 + 0.5;
        const phase = Math.sin(time * 1.5 + dot.delay * 12) * 0.5 + 0.5;
        const blink = Math.sin(time * 1.8 + dot.seed * 100 + dot.delay * 60);
        const blinkOn = blink > (dot.seed > 0.7 ? -0.4 : 0.1) ? 1 : 0;
        const dist = Math.sqrt((dot.x - cx) ** 2 + (dot.y - cy) ** 2);
        const reveal = Math.max(0, Math.min(1, time * 1.2 - (dist / maxDist) * 3));
        let baseOpacity;

        if (dot.seed > 0.85) {
          baseOpacity = (0.46 + flicker * 0.34) * blinkOn;
        } else if (dot.seed > 0.6) {
          baseOpacity = (0.22 + phase * 0.18) * blinkOn;
        } else {
          baseOpacity = (0.07 + flicker * 0.08) * blinkOn;
        }

        const opacity = baseOpacity * reveal;
        if (opacity < 0.01) return;

        const rgb = dot.seed > 0.92 ? accentColor.join(",") : "255,255,255";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${opacity})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="vw-dot-bg" aria-hidden="true">
      <canvas id="matrix-canvas" ref={canvasRef} />
      <div className="vw-dot-fade" />
    </div>
  );
}

function useCardGlow() {
  useEffect(() => {
    const selectors = [
      ".glow-card",
      ".service-row",
      ".portfolio-card",
      ".contact-cards div",
      ".lead-form",
      ".hero-visual",
      ".proof-strip div",
      ".modal-container",
      ".modal-banner",
    ].join(",");

    const updateGlow = (event: PointerEvent) => {
      document.querySelectorAll<HTMLElement>(selectors).forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
      });
    };

    document.addEventListener("pointermove", updateGlow);
    return () => document.removeEventListener("pointermove", updateGlow);
  }, []);
}

function Button({
  children,
  href = "#contacto",
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <a className={`site-btn ${variant}`} href={href} onPointerMove={moveGlow}>
      <span className="btn-glow" aria-hidden="true" />
      <span className="btn-content">{children}</span>
    </a>
  );
}

export default function PaguraiLanding() {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState([0, 2]);
  const [sent, setSent] = useState(false);
  const [activeModalService, setActiveModalService] = useState<number | null>(null);
  const [activeModalBlock, setActiveModalBlock] = useState<number | null>(null);

  const copy = COPY[lang];
  useCardGlow();

  const blockToServiceMap: Record<number, number> = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  };

  useEffect(() => {
    if (activeModalService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalService(null);
        setActiveModalBlock(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveModalService(null);
      setActiveModalBlock(null);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLanguage = (nextLang: Lang) => {
    setLang(nextLang);
    setSent(false);
  };

  const toggleService = (serviceIndex: number) => {
    setSelected((current) =>
      current.includes(serviceIndex)
        ? current.filter((item) => item !== serviceIndex)
        : [...current, serviceIndex],
    );
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className={`app-shell theme-${theme}`}>
      <DotMatrix />
      <div className="bg-cover" aria-hidden="true" />
      <div className="bg-glows" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      <header className="site-header">
        <nav className="cyber-nav" aria-label={copy.nav.aria} onPointerMove={moveGlow}>
          <a className="brand-mark" href="#inicio" aria-label="Joseph Clavijo home">
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-color)", fontSize: "20px", letterSpacing: "0.05em" }}>Joseph Clavijo</span>
          </a>

          <div id="primary-navigation" className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#inicio" onClick={() => setMenuOpen(false)}>{copy.nav.home}</a>
            <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>{lang === "es" ? "Sobre Mí" : "About Me"}</a>
            <a href="#servicios" onClick={() => setMenuOpen(false)}>{copy.nav.services}</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>{copy.nav.work}</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>{copy.nav.contact}</a>
          </div>

          <div className="nav-controls" aria-label="Language and theme controls">
            <div className="language-toggle" aria-label="Language selector">
              <button className={lang === "en" ? "active" : ""} type="button" onClick={() => changeLanguage("en")}>
                EN
              </button>
              <button className={lang === "es" ? "active" : ""} type="button" onClick={() => changeLanguage("es")}>
                ES
              </button>
            </div>

            <button
              className="theme-toggle"
              type="button"
              aria-label={theme === "dark" ? copy.nav.themeLight : copy.nav.themeDark}
              onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <Button href="#contacto" variant="secondary">
            {copy.nav.diagnosis} <ArrowRight size={16} />
          </Button>

          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <span className="section-badge">{copy.hero.badge}</span>
            <h1>{copy.hero.title}</h1>
            <p>{copy.hero.text}</p>
          </div>

          <div className="hero-actions">
            <Button href="#contacto">
              {copy.hero.work} <ArrowRight size={18} />
            </Button>
            <Button href="#servicios" variant="ghost">
              <Play size={17} /> {copy.hero.system}
            </Button>
          </div>

          <aside className="hero-visual" aria-label={copy.hero.visualAria}>
            <div className="visual-toolbar">
              <span />
              <span />
              <span />
              <strong>AUTOMATION ENGINE</strong>
            </div>
            <div className="visual-stage">
              <div className="reel-card main-reel" style={{ background: "rgba(18, 18, 26, 0.6)", overflow: "hidden", position: "relative" }}>
                <Image
                  src="/assets/images/projects/HeroSection.webp"
                  alt="Automation Workflow"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span style={{ position: "absolute", zIndex: 10, background: "rgba(0,0,0,0.6)", padding: "4px 8px", borderRadius: "4px", right: "12px", top: "auto", bottom: "12px", left: "auto", height: "auto", fontSize: "11px", fontFamily: "var(--font-display)" }}>
                  {copy.hero.video}
                </span>
              </div>
              <div className="metric-card">
                <BarChart3 size={20} />
                <strong>99.8%</strong>
                <span>{lang === "es" ? "menos errores" : "errors reduced"}</span>
              </div>
              <div className="metric-card pink">
                <Zap size={20} />
                <strong>140h</strong>
                <span>{copy.hero.variations}</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Joseph Clavijo facts">
          {copy.proof.map(([k, v]) => (
            <div key={k}>
              <span>{k}</span>
              <strong>{v}</strong>
            </div>
          ))}
        </section>

        {/* ABOUT ME SECTION */}
        <section className="section-block" id="sobre-mi">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span className="eyebrow" style={{ marginBottom: "24px" }}>Joseph Clavijo</span>
              <h2 className="about-title-styled" style={{ margin: 0 }}>
                {lang === "es" ? "SOBRE MÍ" : "ABOUT ME"}
              </h2>
            </div>
          </div>

          <div className="about-grid">
            {/* Left Column: Portrait Card */}
            <div className="glow-card about-portrait-card" onPointerMove={moveGlow}>
              <div className="about-portrait-wrapper">
                <Image
                  src="/assets/images/projects/JosephImag.webp"
                  alt="Joseph Clavijo"
                  fill
                  className="about-portrait-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right Column Grid */}
            <div className="about-cards-right">
              {/* Top Row */}
              <div className="about-row-top">
                {/* Wide description card */}
                <div className="glow-card about-desc-card" onPointerMove={moveGlow}>
                  <p className="about-text">
                    {lang === "es"
                      ? "Como especialista en automatización de operaciones y crecimiento, me enfoco en construir sistemas escalables que optimizan flujos de trabajo, eliminan tareas repetitivas y reducen la fricción operativa. Diseño e integro arquitecturas digitales con n8n, CRM y plataformas de IA para potenciar el desarrollo de ventas y proveer dashboards comerciales en tiempo real que permiten a los equipos escalar eficientemente."
                      : "As an operations and growth automation specialist, I focus on building scalable systems that optimize workflows, eliminate repetitive tasks, and reduce operational friction. I design and integrate digital architectures with n8n, CRM, and AI platforms to boost sales development and provide real-time business dashboards that enable teams to scale efficiently."}
                  </p>
                </div>

                {/* Experience card */}
                <div className="glow-card about-exp-card" onPointerMove={moveGlow}>
                  <div className="exp-bg-grid" />
                  <div className="exp-content">
                    <span className="exp-num">5+</span>
                    <span className="exp-label">
                      {lang === "es" ? "años de experiencia" : "years of experience"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="about-row-bottom">
                {/* Integrations Card */}
                <div className="glow-card about-mini-card" onPointerMove={moveGlow}>
                  <h3 className="about-mini-title">{lang === "es" ? "Integraciones" : "Integrations"}</h3>
                  <p className="about-mini-desc">
                    {lang === "es"
                      ? "Sincronización en tiempo real de Shopify, Stripe, CRMs y bases de datos."
                      : "Real-time synchronization of Shopify, Stripe, CRMs, and databases."}
                  </p>
                </div>

                {/* AI Agents Card */}
                <div className="glow-card about-mini-card" onPointerMove={moveGlow}>
                  <h3 className="about-mini-title">{lang === "es" ? "AI Agents" : "AI Agents"}</h3>
                  <p className="about-mini-desc">
                    {lang === "es"
                      ? "Chatbots inteligentes en WhatsApp para soporte al cliente y ventas automatizadas."
                      : "Intelligent chatbots on WhatsApp for customer support and automated sales."}
                  </p>
                </div>

                {/* Notifications Card */}
                <div className="glow-card about-mini-card wide-bottom-card" onPointerMove={moveGlow}>
                  <h3 className="about-mini-title">
                    {lang === "es" ? "Notificaciones & Alertas" : "Notifications & Alerts"}
                  </h3>
                  <p className="about-mini-desc">
                    {lang === "es"
                      ? "Alertas automatizadas de inventario, facturas legales PDF y logística enviadas por Slack o WhatsApp."
                      : "Automated inventory alerts, legal PDF invoices, and logistics sent via Slack or WhatsApp."}
                  </p>
                  <div style={{ position: "absolute", bottom: "18px", right: "18px", opacity: 0.12 }}>
                    <Workflow size={32} style={{ color: "var(--accent-color)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech stack icons row (Sliding Marquee) */}
          <div className="about-tech-strip">
            <div className="marquee-track">
              {/* Set 1 */}
              <div className="tech-icon-item" title="n8n">
                <img src="/assets/images/projects/N8N.webp" alt="n8n" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Zapier">
                <img src="/assets/images/projects/Zapier.webp" alt="Zapier" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="GoHighLevel">
                <img src="/assets/images/projects/Logo GoHighLevel.webp" alt="GoHighLevel" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="HubSpot">
                <img src="/assets/images/projects/Hubspot(2).webp" alt="HubSpot" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Claude">
                <img src="/assets/images/projects/Logo Claude.webp" alt="Claude" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Vercel">
                <img src="/assets/images/projects/Vercel.webp" alt="Vercel" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Claude Code">
                <img src="/assets/images/projects/claude-code.webp" alt="Claude Code" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="GitHub">
                <img src="/assets/images/projects/Logo Github.webp" alt="GitHub" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Codex">
                <img src="/assets/images/projects/Codex.webp" alt="Codex" className="tech-logo-img" />
              </div>
              {/* Set 2 */}
              <div className="tech-icon-item" title="n8n">
                <img src="/assets/images/projects/N8N.webp" alt="n8n" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Zapier">
                <img src="/assets/images/projects/Zapier.webp" alt="Zapier" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="GoHighLevel">
                <img src="/assets/images/projects/Logo GoHighLevel.webp" alt="GoHighLevel" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="HubSpot">
                <img src="/assets/images/projects/Hubspot(2).webp" alt="HubSpot" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Claude">
                <img src="/assets/images/projects/Logo Claude.webp" alt="Claude" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Vercel">
                <img src="/assets/images/projects/Vercel.webp" alt="Vercel" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Claude Code">
                <img src="/assets/images/projects/claude-code.webp" alt="Claude Code" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="GitHub">
                <img src="/assets/images/projects/Logo Github.webp" alt="GitHub" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Codex">
                <img src="/assets/images/projects/Codex.webp" alt="Codex" className="tech-logo-img" />
              </div>
              {/* Set 3 */}
              <div className="tech-icon-item" title="n8n">
                <img src="/assets/images/projects/N8N.webp" alt="n8n" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Zapier">
                <img src="/assets/images/projects/Zapier.webp" alt="Zapier" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="GoHighLevel">
                <img src="/assets/images/projects/Logo GoHighLevel.webp" alt="GoHighLevel" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="HubSpot">
                <img src="/assets/images/projects/Hubspot(2).webp" alt="HubSpot" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Claude">
                <img src="/assets/images/projects/Logo Claude.webp" alt="Claude" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Vercel">
                <img src="/assets/images/projects/Vercel.webp" alt="Vercel" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Claude Code">
                <img src="/assets/images/projects/claude-code.webp" alt="Claude Code" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="GitHub">
                <img src="/assets/images/projects/Logo Github.webp" alt="GitHub" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Codex">
                <img src="/assets/images/projects/Codex.webp" alt="Codex" className="tech-logo-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-block" id="servicios">
          <div className="section-head">
            <div>
              <span className="eyebrow">{copy.blocks.eyebrow}</span>
              <h2>{copy.blocks.title}</h2>
            </div>
            <p>{copy.blocks.text}</p>
          </div>

          <div className="block-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {copy.blocks.items.map((block, index) => {
              return (
                <article
                  className="glow-card mini block-card cursor-pointer"
                  key={block}
                  tabIndex={0}
                  aria-label={block}
                  onPointerMove={moveGlow}
                  onClick={() => {
                    setActiveModalBlock(index);
                    setActiveModalService(blockToServiceMap[index] ?? 0);
                  }}
                >
                  <div className="block-card-media" aria-hidden="true">
                    <Image
                      src={BLOCK_IMAGES[index]}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
                    />
                  </div>
                  <div className="block-card-scrim" aria-hidden="true" />
                  <div className="block-card-head">
                    <span className="card-num">{String(index + 1).padStart(2, "0")}</span>
                    {index === 0 && <Workflow size={22} />}
                    {index === 1 && <Sparkles size={22} />}
                    {index === 2 && <Zap size={22} />}
                    {index === 3 && <BarChart3 size={22} />}
                  </div>
                  <h3>{block}</h3>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-block" id="portfolio">
          <div className="section-head">
            <div>
              <span className="eyebrow">{copy.portfolio.eyebrow}</span>
              <h2>{copy.portfolio.title}</h2>
            </div>
            <Button href="#contacto" variant="secondary">
              {copy.portfolio.all} <ArrowRight size={16} />
            </Button>
          </div>

          <div className="portfolio-grid">
            {copy.portfolio.items.map(([title, tag, size], index) => (
              <article
                className={`portfolio-card ${size} cursor-pointer`}
                key={title}
                tabIndex={0}
                aria-label={title}
                onPointerMove={moveGlow}
                onClick={() => {
                  const map = [0, 1, 0, 0, 2, 0, 1];
                  const svcIndex = map[index] ?? 0;
                  setActiveModalBlock(svcIndex);
                  setActiveModalService(svcIndex);
                }}
              >
                <div className="portfolio-media">
                  <Image
                    src={PORTFOLIO_IMAGES[index]}
                    alt=""
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <strong>{title}</strong>
                  <em>{tag}</em>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-band">
          <div>
            <h2>{copy.cta.title}</h2>
            <p>{copy.cta.text}</p>
          </div>
          <Button href="#contacto">
            {copy.cta.button} <ArrowRight size={18} />
          </Button>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-copy">
            <div>
              <span className="eyebrow">{copy.contact.eyebrow}</span>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.text}</p>
            </div>

            <div className="contact-cards">
              <div><Mail size={20} /><span>{copy.contact.email}</span></div>
              <div><MessageCircle size={20} /><span>{copy.contact.whatsapp}</span></div>
              <div><Clock3 size={20} /><span>{copy.contact.response}</span></div>
            </div>
          </div>

          <form className="lead-form" onSubmit={submitForm}>
            <label>
              {copy.contact.fields.name} <span>*</span>
              <input required type="text" placeholder={copy.contact.placeholders.name} />
            </label>
            <label>
              {copy.contact.fields.company} <span>*</span>
              <input required type="text" placeholder={copy.contact.placeholders.company} />
            </label>
            <label>
              {copy.contact.fields.whatsapp} <span>*</span>
              <input required type="tel" placeholder={copy.contact.placeholders.whatsapp} />
            </label>
            <label>
              {copy.contact.fields.web}
              <input type="text" placeholder={copy.contact.placeholders.web} />
            </label>
            <label className="full">
              {copy.contact.fields.business}
              <input type="text" placeholder={copy.contact.placeholders.business} />
            </label>

            <div className="form-services full">
              <span>{copy.contact.fields.services} <small>{copy.contact.fields.multi}</small></span>
              <div>
                {copy.contact.serviceOptions.map((item, index) => (
                  <button
                    className={selected.includes(index) ? "selected" : ""}
                    key={item}
                    type="button"
                    onClick={() => toggleService(index)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="full">
              {copy.contact.fields.message}
              <textarea placeholder={copy.contact.placeholders.message} />
            </label>

            <div className="form-foot full">
              <small>{sent ? copy.contact.fields.sent : copy.contact.fields.idle}</small>
              <button className="submit-btn" type="submit">
                {copy.contact.fields.submit} <ArrowRight size={17} />
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <span>JOSEPH CLAVIJO © 2026</span>
        <span>{copy.footer}</span>
      </footer>

      {activeModalService !== null && (() => {
        let service = copy.services.items[activeModalService];
        if (!service) return null;
        
        let bannerImage = service.banner || '';
        let modalProjectsTitle = service.cardTitle || copy.services.selected;

        return (
          <div className="modal-overlay" onClick={handleBackdropClick}>
            <div className={`modal-container ${service.accent}`} onPointerMove={moveGlow}>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalService(null)}
                aria-label={copy.services.closeModal}
              >
                <X size={20} />
              </button>
              
              <div className="modal-content">
                <div className="modal-header">
                  <span className="modal-number">{service.number}</span>
                  <h2 className="modal-title">{service.title}</h2>
                </div>

                <div className="modal-banner" style={{ height: "auto", aspectRatio: "auto", overflow: "visible" }} onPointerMove={moveGlow}>
                  <div className="modal-banner-scrim" />
                  <img
                    src={bannerImage}
                    alt={service.title}
                    className="modal-banner-image"
                    style={{ position: "relative", display: "block", width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </div>

                <div className="modal-body">
                  <div className="modal-info">
                    <p className="modal-desc">{service.description}</p>
                    
                    <div style={{ marginTop: "16px", marginBottom: "16px" }}>
                      <span className="eyebrow" style={{ fontSize: "11px", color: "var(--ink-muted)", letterSpacing: "0.1em" }}>
                        {lang === "es" ? "HERRAMIENTAS USADAS" : "TOOLS USED"}
                      </span>
                      <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "10px", flexWrap: "wrap" }}>
                        <img src="/assets/images/projects/N8N.webp" alt="n8n" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Zapier.webp" alt="Zapier" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Logo GoHighLevel.webp" alt="GoHighLevel" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Hubspot(2).webp" alt="HubSpot" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Logo Claude.webp" alt="Claude" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Vercel.webp" alt="Vercel" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/claude-code.webp" alt="Claude Code" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Logo Github.webp" alt="GitHub" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Codex.webp" alt="Codex" style={{ height: "38px", width: "auto" }} />
                      </div>
                    </div>

                    <div className="modal-tags">
                      {service.tags.map((tag) => (
                        <em key={tag}>{tag}</em>
                      ))}
                    </div>
                  </div>

                  <div className="modal-projects-box">
                    <h3 className="modal-projects-title">{modalProjectsTitle}</h3>
                    <div className="modal-projects-list">
                      {service.projects.map((project) => (
                        <div className="modal-project-item" key={project}>
                          <CheckCircle2 size={16} />
                          <span>{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {service.projectsDetail && service.projectsDetail.length > 0 && (
                  <div className="modal-footer">
                    <Link
                      className="site-btn"
                      href={`/servicio/${activeModalService}`}
                      onClick={() => setActiveModalService(null)}
                      onPointerMove={moveGlow}
                    >
                      <span className="btn-glow" aria-hidden="true" />
                      <span className="btn-content">
                        {copy.services.viewProjects} <ArrowRight size={16} />
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
