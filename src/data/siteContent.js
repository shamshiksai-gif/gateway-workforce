export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Why India?', href: '#why-india' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  titleLines: [
    'Connecting Global',
    'Businesses',
    "To India's Educated &",
    'Motivated Talent',
  ],
  highlightedWord: 'Talent',
  description:
    "We connect global companies with India's skilled talent, enabling business growth and global career opportunities.",
  ctaPrimary: 'Explore Services',
  ctaSecondary: 'Schedule 15 Min Call',
}

export const stats = [
  { value: '70+', label: 'Professionals Placed' },
  { value: '25+', label: 'Global Clients' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '2+', label: 'Years Excellence' },
]

/** Copy + assets for the “Why Hire Indian Talent?” graphic section (layout is fixed in WhyIndia.jsx). */
export const whyIndiaSection = {
  titleBefore: 'Why Hire Indian ',
  titleAccent: 'Talent?',
  lead:
    "Access India's highly skilled, educated, and motivated workforce. Our talent pool offers exceptional value with tech expertise, cultural alignment, and cost-effectiveness.",
}

/** Landscape 1200×750 crops; `focus` = object-position for nicer framing under 16:10 cards. */
export const whyIndiaPoints = [
  {
    title: 'Global Impact',
    description: 'One job uplifts families, education & local economies',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=750&q=82',
    focus: 'center 40%',
    icon: 'globe',
  },
  {
    title: 'Top Skills',
    description: 'Millions of STEM graduates with in-demand technical abilities',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=750&q=82',
    focus: 'center 48%',
    icon: 'code',
  },
  {
    title: 'Cost-Effective',
    description: 'High quality talent at competitive rates for better ROI',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=750&q=82',
    focus: 'center 55%',
    icon: 'dollar',
  },
  {
    title: 'English Proficiency',
    description: 'Strong communication skills with excellent English fluency',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&h=750&q=82',
    focus: 'center 42%',
    icon: 'chat',
  },
  {
    title: 'Time Zone Sync',
    description: 'Overlaps with US/EU for real-time collaboration',
    image:
      'https://images.unsplash.com/photo-1495025410349-d5cbbf22110b?auto=format&fit=crop&w=1200&h=750&q=82',
    focus: 'center 35%',
    icon: 'clock',
  },
  {
    title: 'Driven Professionals',
    description: 'Motivated talent focused on long-term growth and outcomes',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&h=750&q=82',
    focus: 'center 38%',
    icon: 'spark',
  },
]

/**
 * Each service = one full-width panel (text left, image right), like gatewayworkforce.com service pages.
 * `theme` maps to `service-panel--{theme}` in CSS.
 * `slug` links home slides + “Learn more” pages. Put your art in `public/learn-more/{slug}.jpg` and set `image` to that path.
 */
export const services = [
  {
    slug: 'it-outsourcing',
    name: 'IT Outsourcing',
    theme: 'azure',
    bullets: [
      'Scalable teams for web & mobile development',
      'Empower your digital growth with agile, cross-functional teams tailored to your project needs.',
      'We deliver high-quality, scalable solutions that accelerate time-to-market and drive business impact.',
    ],
    image: '/learn-more/it-outsourcing.svg',
    imageFocus: 'center 42%',
    cta: 'Learn more',
    href: '/IT_Outsourcing/',
  },
  {
    slug: 'healthcare-bpo',
    name: 'Healthcare BPO',
    theme: 'violet',
    bullets: [
      'End-to-end medical billing & telehealth support',
      'Streamline your revenue cycle with accurate billing and seamless virtual care services.',
      'Reduce denials and improve collections with process-driven healthcare operations teams.',
    ],
    image: '/learn-more/healthcare-bpo.svg',
    imageFocus: 'center 40%',
    cta: 'Learn more',
    href: '/Healthcare_BPO/',
  },
  {
    slug: 'us-taxation',
    name: 'US Taxation',
    theme: 'midnight',
    bullets: [
      'Accurate accounting & compliance for firms and CPAs',
      'Ensure financial precision and regulatory adherence with our expert-led services.',
      'We help streamline bookkeeping, reporting, and tax workflows for maximum efficiency and peace of mind.',
    ],
    image: '/learn-more/us-taxation.svg',
    imageFocus: 'center 48%',
    cta: 'Learn more',
    href: '/US_Taxation/',
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud Solutions',
    theme: 'teal',
    bullets: [
      'AWS/Azure deployment, migration & management',
      'Seamlessly deploy, scale, and manage applications across leading cloud platforms.',
      'Our experts ensure secure migration, cost optimization, and high availability for your infrastructure.',
    ],
    image: '/learn-more/cloud-solutions.svg',
    imageFocus: 'center 40%',
    cta: 'Learn more',
    href: '/cloud-solutions/',
  },
  {
    slug: 'saas-experts',
    name: 'SaaS Experts',
    theme: 'coral',
    bullets: [
      'Salesforce, Shopify & HubSpot integration & optimization',
      'Unify your CRM, e-commerce, and marketing platforms for seamless operations.',
      'We tailor integrations to boost productivity, enhance customer experience, and drive revenue growth.',
    ],
    image: '/learn-more/saas-experts.svg',
    imageFocus: 'center 45%',
    cta: 'Learn more',
    href: '/Saas_Experts/',
  },
  {
    slug: 'ai-solutions',
    name: 'AI Solutions',
    theme: 'indigo',
    bullets: [
      'Custom LLMs, automation & data intelligence',
      'Build tailored AI solutions to streamline workflows and uncover deep insights.',
      'Leverage automation and large language models to drive smart, data-led decisions.',
    ],
    image: '/learn-more/ai-solutions.svg',
    imageFocus: 'center 42%',
    cta: 'Learn more',
    href: '/AI_Solutions/',
  },
  {
    slug: 'virtual-assistant',
    name: 'Virtual Assistant',
    theme: 'emerald',
    bullets: [
      'Professional administrative & operational support',
      'Delegate routine tasks and focus on strategic growth.',
      'Our skilled assistants handle scheduling, research, communication, and project coordination with precision.',
    ],
    image: '/learn-more/virtual-assistant.svg',
    imageFocus: 'center 40%',
    cta: 'Learn more',
    href: '/virtual-assistant/',
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null
}

/** Light “hero” panel inside hiring section (gatewayworkforce.com reference). */
export const hiringProcessLight = {
  titleLine1: 'Connecting Global Businesses',
  titleLine2: "To India's Educated & Motivated",
  highlight: 'Talent',
  description:
    "Leverage India's vast pool of skilled professionals to scale your operations, innovate faster, and achieve your business goals with cost-effective, high-quality remote teams.",
  ctaHref: '#contact',
  ctaLabel: 'Schedule 15 Min Call',
}

/** Hiring process — copy aligned with gatewayworkforce.com; each step has a circular image. */
export const hiringProcessIntro = {
  eyebrow: 'Our Hiring Process',
  titleAccent: 'Hiring',
  titleRest: 'Gateway Workforce is as simple as:',
}

export const hiringSteps = [
  {
    step: '01',
    title: 'Send A Job Description',
    description:
      'Send A Job Description to jobs@gatewayworkforce.com',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&h=640&q=82',
  },
  {
    step: '02',
    title: 'Candidate Sourcing',
    description:
      'Gateway Workforce finds qualified candidates from current staff, vetted resumes or the recruiting process',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=640&h=640&q=82',
  },
  {
    step: '03',
    title: 'Interview & Selection',
    description:
      'You meet, interview and select the candidate, and Gateway Workforce onboards',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&h=640&q=82',
  },
]

/** Footer / contact block (last section on the page). */
export const footer = {
  email: 'jobs@gatewayworkforce.com',
  newsletterCaption: "Don't miss any update!",
  copyright: '© 2026 Gateway Global Workforce. All rights reserved',
  companyLinks: [
    { label: 'About Us', href: '#about' },
    { label: 'Terms and Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
  legalLinks: [
    { label: 'Licence', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Security', href: '#' },
  ],
  imageCredits: [
    { label: 'Freepik', href: 'https://www.freepik.com/' },
    { label: 'Unsplash', href: 'https://unsplash.com/' },
    { label: 'Pixabay', href: 'https://pixabay.com/' },
    { label: 'Pexels', href: 'https://www.pexels.com/' },
  ],
  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: 'linkedin',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: 'facebook',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: 'instagram',
    },
  ],
}
