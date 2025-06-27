// SEO Configuration for Cozyartz Media Group
// Professional web development and digital marketing services

export const seoConfig = {
  // Company Information
  company: {
    name: "Cozyartz Media Group",
    tagline: "Crafting Digital Experiences with Heart",
    description: "Professional web development, digital marketing, and creative design services. We build stunning websites and digital solutions that drive results for your business.",
    website: "https://cozyartzmediagroup.com",
    email: "hello@cozyartzmediagroup.com",
    phone: "+1 (555) 123-COZY",
    address: {
      street: "123 Creative Boulevard",
      city: "Innovation City",
      state: "MI",
      zip: "49000",
      country: "United States"
    }
  },

  // Services
  services: [
    "Web Development",
    "Digital Marketing", 
    "SEO Optimization",
    "Brand Design",
    "E-commerce Solutions",
    "Mobile App Development",
    "Content Management Systems",
    "Social Media Marketing",
    "UI/UX Design",
    "Website Maintenance"
  ],

  // Technologies
  technologies: [
    "React",
    "Astro",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "WordPress",
    "Shopify",
    "Supabase",
    "Vercel",
    "Netlify"
  ],

  // Social Media
  social: {
    twitter: "https://twitter.com/cozyartzmedia",
    linkedin: "https://linkedin.com/company/cozyartz-media-group",
    instagram: "https://instagram.com/cozyartzmedia",
    facebook: "https://facebook.com/cozyartzmediagroup",
    github: "https://github.com/cozyartzmedia",
    dribbble: "https://dribbble.com/cozyartzmedia"
  },

  // SEO Meta Tags
  meta: {
    defaultTitle: "Cozyartz Media Group - Professional Web Development & Digital Marketing",
    titleTemplate: "%s | Cozyartz Media Group",
    description: "Transform your digital presence with Cozyartz Media Group. We create stunning websites, powerful digital marketing campaigns, and innovative solutions that grow your business.",
    keywords: [
      "web development",
      "digital marketing",
      "SEO services",
      "website design",
      "brand development",
      "e-commerce",
      "mobile apps",
      "creative agency",
      "Michigan web design",
      "professional websites"
    ],
    author: "Cozyartz Media Group",
    robots: "index, follow",
    language: "en-US",
    type: "website"
  },

  // Open Graph / Social Sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cozyartzmediagroup.com",
    siteName: "Cozyartz Media Group",
    title: "Cozyartz Media Group - Crafting Digital Experiences with Heart",
    description: "Professional web development and digital marketing services that drive real results for your business.",
    image: {
      url: "https://cozyartzmediagroup.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Cozyartz Media Group - Web Development & Digital Marketing"
    }
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@cozyartzmedia",
    creator: "@cozyartzmedia",
    title: "Cozyartz Media Group - Professional Web Development",
    description: "Transform your digital presence with our expert web development and digital marketing services.",
    image: "https://cozyartzmediagroup.com/twitter-card.jpg"
  },

  // Schema.org Structured Data
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cozyartz Media Group",
    "alternateName": "Cozyartz Media",
    "description": "Professional web development, digital marketing, and creative design agency specializing in custom websites and digital solutions.",
    "url": "https://cozyartzmediagroup.com",
    "logo": "https://cozyartzmediagroup.com/logo.png",
    "image": "https://cozyartzmediagroup.com/company-photo.jpg",
    "telephone": "+1-555-123-COZY",
    "email": "hello@cozyartzmediagroup.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Creative Boulevard",
      "addressLocality": "Innovation City",
      "addressRegion": "MI",
      "postalCode": "49000",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.3314",
      "longitude": "-84.5467"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": [
      "Web Development",
      "Digital Marketing",
      "SEO Services",
      "Brand Design",
      "E-commerce Development"
    ],
    "foundingDate": "2020",
    "slogan": "Crafting Digital Experiences with Heart",
    "sameAs": [
      "https://twitter.com/cozyartzmedia",
      "https://linkedin.com/company/cozyartz-media-group",
      "https://instagram.com/cozyartzmedia",
      "https://facebook.com/cozyartzmediagroup"
    ]
  },

  // Analytics & Tracking
  analytics: {
    googleAnalytics: "G-XXXXXXXXXX",
    googleTagManager: "GTM-XXXXXXX",
    facebookPixel: "XXXXXXXXXXXXXXX",
    hotjar: "XXXXXXX"
  },

  // Performance & Technical SEO
  technical: {
    sitemap: "https://cozyartzmediagroup.com/sitemap.xml",
    robotsTxt: "https://cozyartzmediagroup.com/robots.txt",
    canonical: "https://cozyartzmediagroup.com",
    hreflang: "en-US",
    themeColor: "#6366f1",
    backgroundColor: "#ffffff"
  }
};

// Helper function to generate meta tags
export function generateMetaTags(pageData = {}) {
  const config = seoConfig.meta;
  const og = seoConfig.openGraph;
  const twitter = seoConfig.twitter;
  
  return {
    title: pageData.title ? `${pageData.title} | ${config.defaultTitle}` : config.defaultTitle,
    description: pageData.description || config.description,
    keywords: [...config.keywords, ...(pageData.keywords || [])].join(', '),
    canonical: pageData.canonical || seoConfig.technical.canonical,
    openGraph: {
      ...og,
      title: pageData.title || og.title,
      description: pageData.description || og.description,
      url: pageData.url || og.url,
      image: pageData.image || og.image
    },
    twitter: {
      ...twitter,
      title: pageData.title || twitter.title,
      description: pageData.description || twitter.description,
      image: pageData.image || twitter.image
    }
  };
}

export default seoConfig;