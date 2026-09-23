import React from "react";
import {
  Workflow,
  Zap,
  Sparkles,
  BarChart3,
} from "lucide-react";

export type ProjectDetail = {
  company: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  images?: string[];
  htmlUrl?: string;
  aspectRatio?: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  accent: "blue" | "pink";
  projects: string[];
  projectsDetail: ProjectDetail[];
  cardTitle?: string;
  banner: string;
};

export const EN_SERVICES: Service[] = [
  {
    number: "01",
    title: "AUTOMATION WITH N8N & ZAPIER",
    description:
      "Design and optimization of scalable workflows that connect your favorite tools to eliminate repetitive tasks and reduce operational costs.",
    tags: ["n8n", "Zapier", "APIs", "Integrations"],
    icon: Workflow,
    accent: "blue",
    banner: "/assets/images/projects/Automatización-n8n_make(BANNER)Ingles.webp",
    projects: [
      "Tool Integration",
      "Report Automation",
      "Custom Workflows"
    ],
    projectsDetail: [
      {
        company: "Joseph Clavijo",
        title: "Ecommerce AI Content Production & Social Media Automation System",
        description:
          "Automated AI workflow for visual asset creation, dynamic video and scheduled multi-platform publishing.",
        image: "/assets/images/projects/Shampoo Prai.webp",
        aspectRatio: "16 / 9",
        htmlUrl: "/assets/images/resultados/ecommerce-ai-content-production-social-media-automation-system.html",
      },
    ],
  },
  {
    number: "02",
    title: "AI AGENTS & CHATBOTS",
    description:
      "Development of virtual assistants and intelligent chatbots integrated with WhatsApp and CRMs to automate customer support and boost sales.",
    tags: ["AI Agents", "Chatbots", "WhatsApp API", "OpenAI"],
    icon: Sparkles,
    accent: "pink",
    banner: "/assets/images/projects/AgentesdeIA&Chatbots(Ingles).webp",
    projects: [
      "Interactive WhatsApp Chatbots",
      "Smart Customer Agents",
      "Automated Lead Qualification"
    ],
    projectsDetail: [
      {
        company: "Joseph Clavijo",
        title: "Pagureo - Omnichannel Sales & CRM Automation System",
        description:
          "Automated sales messaging with WhatsApp AI bots, smart lead scoring and centralized pipeline CRM.",
        image: "/assets/images/projects/AI Agent.webp",
        aspectRatio: "16 / 9",
        htmlUrl: "/assets/images/resultados/pagureo-omnichannel-sales-crm-automation-system.html",
      },
    ],
  },
  {
    number: "03",
    title: "CRM & LEAD AUTOMATION",
    description:
      "Implementation and optimization of GoHighLevel, HubSpot, and other CRMs to manage prospects, automate follow-ups, and provide real-time business reports.",
    tags: ["CRM", "GoHighLevel", "HubSpot", "Lead Nurturing"],
    icon: Zap,
    accent: "blue",
    banner: "/assets/images/projects/Banner CRM (Ingles).webp",
    projects: [
      "Automated Sales Funnel",
      "Real-time Sales Reporting",
      "Lead Nurturing & Email Marketing"
    ],
    projectsDetail: [
      {
        company: "Joseph Clavijo",
        title: "Ecommerce Retention & Customer Lifecycle System",
        description:
          "Customer 360 retention in GoHighLevel turning one-time buyers into loyal repeat brand customers.",
        image: "/assets/images/projects/ghl-logo.webp",
        aspectRatio: "16 / 9",
        htmlUrl: "/assets/images/resultados/ecommerce-retention-customer-lifecycle-system.html",
      },
    ],
  },
  {
    number: "04",
    title: "SALES OPS & REPORTING",
    description:
      "Synchronization of CRM and Meta Ads data into interactive real-time dashboards to optimize commercial performance and make data-driven decisions.",
    tags: ["Sales Ops", "Reporting", "Dashboards", "Meta Ads"],
    icon: BarChart3,
    accent: "blue",
    banner: "/assets/images/projects/Sales Ops & Reporting(Ingles).webp",
    projects: [
      "Real-time Interactive Dashboards",
      "Automated Reporting Systems",
      "Funnel & Conversion Analysis"
    ],
    projectsDetail: [
      {
        company: "Joseph Clavijo",
        title: "Ecommerce Revenue Operating System & Commercial Reporting",
        description:
          "Central analytics hub unifying ad attribution, paid traffic performance and financial metrics.",
        image: "/assets/images/projects/n8n-portada.webp",
        aspectRatio: "16 / 9",
        htmlUrl: "/assets/images/resultados/ecommerce-revenue-operating-system.html",
      },
    ],
  },
];

export const ES_SERVICES: Service[] = [
  {
    number: "01",
    title: "AUTOMATIZACIÓN CON N8N & ZAPIER",
    description:
      "Diseño y optimización de flujos de trabajo escalables que conectan tus herramientas favoritas para eliminar tareas repetitivas y reducir costos operativos.",
    tags: ["n8n", "Zapier", "APIs", "Integraciones"],
    icon: Workflow,
    accent: "blue",
    banner: "/assets/images/projects/Automatización-n8n_make(BANNER).webp",
    projects: [
      "Integración de herramientas",
      "Automatización de reportes",
      "Flujos de trabajo personalizados"
    ],
    projectsDetail: [
      {
        company: "Joseph Clavijo",
        title: "Sistema de Producción de Contenido con IA y Automatización de Redes",
        description:
          "Flujo automatizado con IA para generar creativos, video y publicación programada en redes sociales.",
        image: "/assets/images/projects/Shampoo Prai.webp",
        aspectRatio: "16 / 9",
        htmlUrl: "/assets/images/resultados/ecommerce-ai-content-production-social-media-automation-system.html",
      },
    ],
  },
  {
    number: "02",
    title: "AGENTES DE IA & CHATBOTS",
    description:
      "Desarrollo de asistentes virtuales y chatbots inteligentes integrados con WhatsApp y CRMs para automatizar la atención al cliente y potenciar las ventas.",
    tags: ["AI Agents", "Chatbots", "WhatsApp API", "OpenAI"],
    icon: Sparkles,
    accent: "pink",
    banner: "/assets/images/projects/AgentesdeIA&Chatbots.webp",
    projects: [
      "Chatbots interactivos en WhatsApp",
      "Agentes de atención inteligente",
      "Calificación automática de leads"
    ],
    projectsDetail: [
      {
        company: "Joseph Clavijo",
        title: "Pagureo - Sistema de Automatización de Ventas Omnicanal y CRM",
        description:
          "Atención comercial automatizada con agentes IA en WhatsApp, calificación de prospectos y pipeline CRM.",
        image: "/assets/images/projects/AI Agent.webp",
        aspectRatio: "16 / 9",
        htmlUrl: "/assets/images/resultados/pagureo-omnichannel-sales-crm-automation-system.html",
      },
    ],
  },
  {
    number: "03",
    title: "AUTOMATIZACIÓN DE CRM & LEADS",
    description:
      "Implementación y optimización de GoHighLevel, HubSpot y otros CRMs para gestionar prospectos, automatizar el seguimiento y proveer reportes comerciales en tiempo real.",
    tags: ["CRM", "GoHighLevel", "HubSpot", "Lead Nurturing"],
    icon: Zap,
    accent: "blue",
    banner: "/assets/images/projects/Banner CRM.webp",
    projects: [
      "Embudo de ventas automatizado",
      "Reporting comercial en tiempo real",
      "Lead Nurturing & Email Marketing"
    ],
    projectsDetail: [
      {
        company: "Joseph Clavijo",
        title: "Sistema de Retención Ecommerce y Ciclo de Vida del Cliente",
        description:
          "Estrategia Customer 360 en GoHighLevel para fidelizar compradores primerizos en clientes recurrentes.",
        image: "/assets/images/projects/ghl-logo.webp",
        aspectRatio: "16 / 9",
        htmlUrl: "/assets/images/resultados/ecommerce-retention-customer-lifecycle-system.html",
      },
    ],
  },
  {
    number: "04",
    title: "SALES OPS & REPORTING",
    description:
      "Sincronización de datos CRM y Meta Ads en dashboards interactivos en tiempo real para optimizar el rendimiento comercial y tomar decisiones basadas en datos.",
    tags: ["Sales Ops", "Reporting", "Dashboards", "Meta Ads"],
    icon: BarChart3,
    accent: "blue",
    banner: "/assets/images/projects/Reporting y Sales Ops.webp",
    projects: [
      "Dashboards interactivos en tiempo real",
      "Sistemas de reporte automatizados",
      "Análisis de conversión y embudos"
    ],
    projectsDetail: [
      {
        company: "Joseph Clavijo",
        title: "Sistema Operativo de Ingresos Ecommerce y Reportería Comercial",
        description:
          "Panel analítico que unifica adquisición de tráfico, atribución de pauta y métricas clave de negocio.",
        image: "/assets/images/projects/n8n-portada.webp",
        aspectRatio: "16 / 9",
        htmlUrl: "/assets/images/resultados/ecommerce-revenue-operating-system.html",
      },
    ],
  },
];
