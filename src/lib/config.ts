import { SiteConfig } from "./types";

const email = process.env.CONTACT_EMAIL ?? "";

export const siteConfig: SiteConfig = {
  personal: {
    name: "Tim Kucera",
    role: "Founder, Imaginary Biolabs",
    tagline: "Building AI infrastructure for programmable biology.",
    location: "Munich, Germany",
    profileImage: "/profile.png",
    profileImageAlt: "Portrait of Tim Kucera",
    email,
  },

  socialLinks: [
    {
      label: "Imaginary Biolabs",
      url: "https://imaginary.bio",
      ariaLabel: "Imaginary Biolabs website",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/timkucera",
      ariaLabel: "Tim Kucera on LinkedIn",
    },
    {
      label: "GitHub",
      url: "https://github.com/timkucera",
      ariaLabel: "Tim Kucera on GitHub",
    },
    {
      label: "Scholar",
      url: "https://scholar.google.de/citations?user=ozHzaxgAAAAJ",
      ariaLabel: "Tim Kucera on Google Scholar",
    },
  ],

  currentWork: [
    {
      title: "Founder",
      organization: "Imaginary Biolabs",
      description:
        "Building AI-native infrastructure for molecular machine learning, biomolecule design, and standardized model development workflows.",
      url: "https://imaginary.bio",
    },
    {
      title: "Project Lead: AI Accubator",
      organization: "BioM – Bavarian Biotech Cluster Development",
      description:
        "Setting up a wet-lab validation platform for AI-generated molecule designs to strengthen the Bavarian ecosystem for biotech founders.",
      url: "https://bio-m.org",
    },
  ],

  projects: [
    {
      title: "Imaginary Biolabs",
      summary:
        "AI infrastructure for biomolecule engineering, integrating standardized data pipelines, curated benchmarks, and machine learning tooling to enable computational design of proteins and molecular systems.",
      tags: ["AI", "Biological Design", "Infrastructure"],
      links: [{ label: "Website", url: "https://imaginary.bio" }],
      featured: true,
    },
    {
      title: "Coalescence Apps",
      summary:
        "A modular ecosystem of personal and business productivity apps designed to integrate everyday tools into a coherent, interoperable system.",
      tags: ["Productivity", "Business Tooling", "AI"],
      links: [
        { label: "Website", url: "https://coa.systems" },
      ],
    },
    {
      title: "DropSort",
      summary:
        "Microfluidic sorting technology implemented on an FPGA, for high-throughput droplet sorting on standard fluorescence microscopy systems.",
      tags: ["Microfluidics", "FPGA", "Sorting & Screening"],
      links: [
      ],
    },
  ],

  research: {
    items: [
      {
        title: "Standardized Machine Learning Workflows for Structural Biology",
        context: "ETH Zurich · Max Planck Institute of Biochemistry",
        description:
          "Research on data formats, training pipelines, and evaluation standards for reproducible machine learning on biomolecular structure data.",
        url: "https://scholar.google.de/citations?user=ozHzaxgAAAAJ",
      },
      {
        title: "Geometric Deep Learning for Molecular Structures",
        context: "ETH Zurich · Max Planck Institute of Biochemistry",
        description:
          "Development of geometric learning methods for proteins and molecular systems, with a focus on structure-based representation learning and design.",
        url: "https://scholar.google.de/citations?user=ozHzaxgAAAAJ",
      },
      {
        title: "Protein Design with Self-Supervised Structure Models",
        context: "Max Planck Institute of Biochemistry",
        description:
          "Exploring protein design methods built on self-supervised structural representations and data-efficient workflows for molecular engineering.",
        url: "https://scholar.google.de/citations?user=ozHzaxgAAAAJ",
      },
      {
        title: "Machine Learning for Microfluidic Sorting Systems",
        context: "ETH Zurich",
        description:
          "Applied reinforcement learning and control methods to microfluidic droplet sorting systems, spanning hardware, software, and experimental optimization.",
        url: "https://scholar.google.de/citations?user=ozHzaxgAAAAJ",
      },
    ],
    scholarUrl: "https://scholar.google.de/citations?user=ozHzaxgAAAAJ",
  },

  contact: {
    heading: "Get in touch",
    description:
      "Open to conversations about AI infrastructure for biology, research collaborations, and technical partnerships.",
    email,
    links: [
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/timkucera",
        ariaLabel: "Tim Kucera on LinkedIn",
      },
      {
        label: "Imaginary Biolabs",
        url: "https://imaginary.bio",
        ariaLabel: "Imaginary Biolabs website",
      },
    ],
  },

  theme: {
    defaultMode: "light",
    maxWidth: "max-w-3xl",
    heroAlignment: "left",
  },

  layout: {
    showTags: true,
    openLinksInNewTab: true,
    sections: {
      currentWork: true,
      projects: true,
      research: false,
      contact: true,
    },
  },

  seo: {
    title: "Tim Kucera — Founder, Imaginary Biolabs",
    description:
      "Personal homepage of Tim Kucera, founder of Imaginary Biolabs. Building AI infrastructure for programmable biology across biomolecular machine learning, research, and computational design.",
    url: "https://timkucera.com",
  },

  optional: {
    cv: {
      enabled: false,
      title: "Resume",
      cvUrl: "/cv.pdf",
    },
    writing: {
      enabled: false,
      title: "Writing",
      items: [],
    },
    press: {
      enabled: false,
      title: "Press",
      items: [],
    },
    notes: {
      enabled: false,
      title: "Notes",
      items: [],
    },
  },
};