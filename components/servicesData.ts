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
    title: "AUTOMATION WITH N8N & MAKE",
    description:
      "Design and optimization of scalable workflows that connect your favorite tools to eliminate repetitive tasks and reduce operational costs.",
    tags: ["n8n", "Make", "APIs", "Integrations"],
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
        title: "Operations Automation",
        description: "Creation of robust workflows connecting CRMs, databases, and messaging systems.",
        image: "/assets/images/projects/Automatización de Operaciones.webp",
        images: [
          "/assets/images/projects/n8n-1.webp",
          "/assets/images/projects/n8n-2.webp",
          "/assets/images/projects/n8n-3.webp"
        ]
      },
      {
        company: "Joseph Clavijo",
        title: "Real-time Synchronization",
        description: "Bi-directional connection between Shopify, Stripe, and CRMs to update data instantly.",
        image: "/assets/images/projects/Sincronización en Tiempo Real.webp",
        images: [
          "/assets/images/projects/n8n-1.webp",
          "/assets/images/projects/n8n-2.webp",
          "/assets/images/projects/n8n-3.webp"
        ]
      }
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
        title: "WhatsApp Sales Chatbots",
        description: "Automated WhatsApp assistant capable of qualifying leads and booking appointments in the CRM.",
        image: "/assets/images/projects/Chatbots de Ventas en WhatsApp.webp",
        images: [
          "/assets/images/projects/Chatbots de Ventas en WhatsApp.webp",
          "/assets/images/projects/AgentesdeIA&Chatbots.webp"
        ]
      },
      {
        company: "Joseph Clavijo",
        title: "Intelligent Support Agent",
        description: "Conversational agent trained on the company's knowledge base to resolve common queries.",
        image: "/assets/images/projects/AgentesdeIA&Chatbots.webp",
        images: [
          "/assets/images/projects/AgentesdeIA&Chatbots.webp",
          "/assets/images/projects/Chatbots(Portada).webp"
        ]
      }
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
        title: "GoHighLevel Sales Funnel",
        description: "Comprehensive GHL setup to capture leads, send email sequences, and automate the sales funnel.",
        image: "/assets/images/projects/AutomatizacióndeCRM&Leads(Portada).webp",
        images: [
          "/assets/images/projects/ghl-1.webp",
          "/assets/images/projects/ghl-2.webp",
          "/assets/images/projects/ghl-3.webp",
          "/assets/images/projects/workflow-go-high-level.webp"
        ]
      },
      {
        company: "Joseph Clavijo",
        title: "Sales Reporting & Dashboards",
        description: "Synchronization of CRM and Meta Ads data into interactive real-time dashboards.",
        image: "/assets/images/projects/Reporting y Sales Ops.webp",
        images: [
          "/assets/images/projects/Dashboard 2 meta ads.webp",
          "/assets/images/projects/Reporting y Sales Ops.webp"
        ]
      }
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
        title: "Sales & Ads Dashboards",
        description: "Integration of acquisition and conversion metrics into a centralized interactive panel.",
        image: "/assets/images/projects/Dashboard 2 meta ads.webp",
        images: [
          "/assets/images/projects/Dashboard 2 meta ads.webp",
          "/assets/images/projects/Reporting y Sales Ops(Ingles).webp"
        ]
      },
      {
        company: "Joseph Clavijo",
        title: "Automated Sales Reporting",
        description: "Daily and weekly performance reports sent directly to Slack or email.",
        image: "/assets/images/projects/Reporting y Sales Ops(Ingles).webp",
        images: [
          "/assets/images/projects/Reporting y Sales Ops(Ingles).webp",
          "/assets/images/projects/Dashboard 2 meta ads.webp"
        ]
      }
    ],
  },
];

export const ES_SERVICES: Service[] = [
  {
    number: "01",
    title: "AUTOMATIZACIÓN CON N8N & MAKE",
    description:
      "Diseño y optimización de flujos de trabajo escalables que conectan tus herramientas favoritas para eliminar tareas repetitivas y reducir costos operativos.",
    tags: ["n8n", "Make", "APIs", "Integraciones"],
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
        title: "Automatización de Operaciones",
        description: "Creación de flujos robustos que conectan CRMs, bases de datos y sistemas de mensajería.",
        image: "/assets/images/projects/Automatización de Operaciones.webp",
        images: [
          "/assets/images/projects/n8n-1.webp",
          "/assets/images/projects/n8n-2.webp",
          "/assets/images/projects/n8n-3.webp"
        ]
      },
      {
        company: "Joseph Clavijo",
        title: "Sincronización en Tiempo Real",
        description: "Conexión bidireccional entre Shopify, Stripe y CRMs para actualizar datos al instante.",
        image: "/assets/images/projects/Sincronización en Tiempo Real.webp",
        images: [
          "/assets/images/projects/n8n-1.webp",
          "/assets/images/projects/n8n-2.webp",
          "/assets/images/projects/n8n-3.webp"
        ]
      }
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
        title: "Chatbots de Ventas en WhatsApp",
        description: "Asistente automatizado en WhatsApp capaz de calificar prospectos y agendar citas en el CRM.",
        image: "/assets/images/projects/Chatbots de Ventas en WhatsApp.webp",
        images: [
          "/assets/images/projects/Chatbots de Ventas en WhatsApp.webp",
          "/assets/images/projects/AgentesdeIA&Chatbots.webp"
        ]
      },
      {
        company: "Joseph Clavijo",
        title: "Agente Inteligente de Soporte",
        description: "Agente conversacional entrenado con la base de conocimientos de la empresa para resolver dudas comunes.",
        image: "/assets/images/projects/AgentesdeIA&Chatbots.webp",
        images: [
          "/assets/images/projects/AgentesdeIA&Chatbots.webp",
          "/assets/images/projects/Chatbots(Portada).webp"
        ]
      }
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
        title: "Embudo de Ventas en GoHighLevel",
        description: "Configuración integral de GHL para capturar leads, enviar secuencias de correos y automatizar el embudo comercial.",
        image: "/assets/images/projects/AutomatizacióndeCRM&Leads(Portada).webp",
        images: [
          "/assets/images/projects/ghl-1.webp",
          "/assets/images/projects/ghl-2.webp",
          "/assets/images/projects/ghl-3.webp",
          "/assets/images/projects/workflow-go-high-level.webp"
        ]
      },
      {
        company: "Joseph Clavijo",
        title: "Reporting Comercial y Dashboards",
        description: "Sincronización de datos CRM y Meta Ads en dashboards interactivos en tiempo real.",
        image: "/assets/images/projects/Reporting y Sales Ops.webp",
        images: [
          "/assets/images/projects/Dashboard 2 meta ads.webp",
          "/assets/images/projects/Reporting y Sales Ops.webp"
        ]
      }
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
        title: "Dashboards de Ventas y Pauta",
        description: "Integración de métricas de adquisición y conversión en un panel interactivo centralizado.",
        image: "/assets/images/projects/Dashboard 2 meta ads.webp",
        images: [
          "/assets/images/projects/Dashboard 2 meta ads.webp",
          "/assets/images/projects/Reporting y Sales Ops.webp"
        ]
      },
      {
        company: "Joseph Clavijo",
        title: "Reportería Comercial Automatizada",
        description: "Envíos diarios y semanales de reportes de performance directamente a Slack o correo.",
        image: "/assets/images/projects/Reporting y Sales Ops.webp",
        images: [
          "/assets/images/projects/Reporting y Sales Ops.webp",
          "/assets/images/projects/Dashboard 2 meta ads.webp"
        ]
      }
    ],
  },
];
