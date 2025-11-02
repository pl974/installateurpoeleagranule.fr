export const siteConfig = {
  name: "Installateur Poêle à Granulé",
  domain: "installateurpoeleagranule.fr",
  url: "https://installateurpoeleagranule.fr",
  description: "Installation de poêle à granulé certifiée RGE partout en France. Devis gratuit, aides financières MaPrimeRénov', et installation professionnelle en 48h. Économisez jusqu'à 60% sur vos factures de chauffage.",
  author: "Installateur Poêle à Granulé",
  contactPhone: "+33 1 23 45 67 89",
  contactEmail: "contact@installateurpoeleagranule.fr"
};

export const keywords = {
  primary: [
    "installateur poêle à granulé",
    "installation poêle à granulé",
    "poêle à granulé prix",
    "poêle à pellets",
    "chauffage granulés",
    "installateur RGE poêle granulé"
  ],
  secondary: [
    "devis poêle à granulé",
    "prix installation poêle granulé",
    "aide poêle à granulé",
    "MaPrimeRénov poêle granulé",
    "poêle à granulé étanche",
    "poêle à granulé ventouse",
    "poêle à granulé silencieux",
    "poêle à granulé design",
    "entretien poêle à granulé",
    "meilleur poêle à granulé"
  ],
  brands: [
    "poêle Palazzetti",
    "poêle Extraflame",
    "poêle MCZ",
    "poêle Rika",
    "poêle Edilkamin",
    "poêle Jotul",
    "poêle Invicta",
    "poêle Godin",
    "poêle Deville",
    "poêle Hoben"
  ],
  longTail: [
    "combien coûte l'installation d'un poêle à granulé",
    "quel poêle à granulé choisir",
    "comment installer un poêle à granulé",
    "avantages poêle à granulé",
    "consommation poêle à granulé",
    "poêle à granulé sans électricité",
    "poêle à granulé étanche ou non étanche",
    "réglementation poêle à granulé",
    "distance sécurité poêle à granulé"
  ]
};

export function generatePageMeta(params: {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
}) {
  const {
    title,
    description,
    canonical,
    keywords: pageKeywords = [],
    image = '/images/og-image.jpg',
    type = 'website'
  } = params;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    canonical: canonical || siteConfig.url,
    keywords: [...keywords.primary, ...pageKeywords].join(', '),
    og: {
      title: `${title} | ${siteConfig.name}`,
      description,
      image: `${siteConfig.url}${image}`,
      url: canonical || siteConfig.url,
      type,
      siteName: siteConfig.name
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      image: `${siteConfig.url}${image}`
    }
  };
}
