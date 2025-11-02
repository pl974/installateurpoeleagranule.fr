export interface Brand {
  name: string;
  logo: string;
  description: string;
  priceRange: string;
  rating: number;
  warranty: string;
  madeTo: string;
  specialFeatures: string[];
}

export const brands: Brand[] = [
  {
    name: "Palazzetti",
    logo: "/images/brands/palazzetti.svg",
    description: "Marque italienne premium reconnue pour son innovation et son design",
    priceRange: "3 500€ - 8 000€",
    rating: 4.8,
    warranty: "2 ans + extension possible",
    madeTo: "Italie",
    specialFeatures: ["Système de nettoyage automatique", "Connexion Wi-Fi", "Design haut de gamme"]
  },
  {
    name: "Extraflame",
    logo: "/images/brands/extraflame.svg",
    description: "Leader européen dans la fabrication de poêles à granulés",
    priceRange: "2 800€ - 6 500€",
    rating: 4.7,
    warranty: "2 ans",
    madeTo: "Italie",
    specialFeatures: ["Technologie Maestro+", "Faible consommation", "Large gamme"]
  },
  {
    name: "MCZ",
    logo: "/images/brands/mcz.svg",
    description: "Innovation italienne avec technologies de pointe",
    priceRange: "3 200€ - 7 500€",
    rating: 4.8,
    warranty: "2 ans",
    madeTo: "Italie",
    specialFeatures: ["No Air Technology", "Design primé", "Très silencieux"]
  },
  {
    name: "Rika",
    logo: "/images/brands/rika.svg",
    description: "Fabricant autrichien de poêles ultra-performants",
    priceRange: "4 000€ - 9 000€",
    rating: 4.9,
    warranty: "3 ans",
    madeTo: "Autriche",
    specialFeatures: ["Rendement > 95%", "Multiair", "Qualité premium"]
  },
  {
    name: "Edilkamin",
    logo: "/images/brands/edilkamin.svg",
    description: "Marque italienne proposant un excellent rapport qualité-prix",
    priceRange: "2 500€ - 5 500€",
    rating: 4.6,
    warranty: "2 ans",
    madeTo: "Italie",
    specialFeatures: ["Économique", "Fiable", "Large choix"]
  },
  {
    name: "Invicta",
    logo: "/images/brands/invicta.svg",
    description: "Fabricant français historique dans le chauffage au bois",
    priceRange: "2 200€ - 4 800€",
    rating: 4.5,
    warranty: "2 ans",
    madeTo: "France",
    specialFeatures: ["Fabrication française", "Prix attractifs", "SAV de proximité"]
  }
];

export interface Financing {
  name: string;
  description: string;
  amount: string;
  conditions: string[];
  eligibility: string;
  icon: string;
}

export const financingOptions: Financing[] = [
  {
    name: "MaPrimeRénov'",
    description: "L'aide principale de l'État pour financer votre poêle à granulé",
    amount: "Jusqu'à 2 500€",
    conditions: [
      "Poêle à granulé éligible (rendement ≥ 87%)",
      "Installation par un professionnel RGE Qualibois",
      "Logement construit depuis plus de 2 ans",
      "Résidence principale uniquement"
    ],
    eligibility: "Tous les propriétaires (occupants ou bailleurs)",
    icon: "🏛️"
  },
  {
    name: "Prime CEE (Certificats d'Économies d'Énergie)",
    description: "Aide versée par les fournisseurs d'énergie, cumulable avec MaPrimeRénov'",
    amount: "500€ à 1 000€",
    conditions: [
      "Poêle avec label Flamme Verte 7 étoiles",
      "Installation RGE Qualibois",
      "Démarche avant signature du devis"
    ],
    eligibility: "Tous les ménages",
    icon: "⚡"
  },
  {
    name: "Éco-PTZ (Éco-Prêt à Taux Zéro)",
    description: "Prêt sans intérêt pour financer vos travaux de rénovation énergétique",
    amount: "Jusqu'à 15 000€",
    conditions: [
      "Logement achevé depuis plus de 2 ans",
      "Résidence principale",
      "Installation par professionnel RGE"
    ],
    eligibility: "Propriétaires occupants ou bailleurs",
    icon: "🏦"
  },
  {
    name: "TVA réduite à 5,5%",
    description: "Taux de TVA réduit appliqué sur l'achat et l'installation",
    amount: "Économie de ~14,5% sur le prix TTC",
    conditions: [
      "Logement de plus de 2 ans",
      "Installation par professionnel RGE",
      "Facture acquittée par le professionnel"
    ],
    eligibility: "Tous les propriétaires et locataires",
    icon: "💰"
  },
  {
    name: "Aides locales",
    description: "Subventions complémentaires selon votre région, département ou commune",
    amount: "Variable (300€ à 1 500€)",
    conditions: [
      "Variables selon les collectivités",
      "Souvent cumulables avec les aides nationales"
    ],
    eligibility: "Selon votre localisation",
    icon: "🗺️"
  }
];

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    question: "Quel est le prix d'installation d'un poêle à granulé ?",
    answer: "Le prix total d'installation d'un poêle à granulé varie entre 4 000€ et 10 000€, incluant l'appareil (2 000€ à 7 000€) et la pose (1 500€ à 3 000€). Avec les aides MaPrimeRénov' et la Prime CEE, le reste à charge peut être réduit de 40 à 60%. Demandez votre devis gratuit pour obtenir une estimation précise adaptée à votre projet.",
    category: "Prix"
  },
  {
    question: "Quelles sont les aides financières disponibles en 2024 ?",
    answer: "En 2024, plusieurs aides sont cumulables : MaPrimeRénov' (jusqu'à 2 500€), la Prime CEE (500€ à 1 000€), l'Éco-PTZ (prêt à taux zéro jusqu'à 15 000€), la TVA réduite à 5,5%, et les aides locales. Pour en bénéficier, l'installation doit être réalisée par un professionnel RGE Qualibois et l'appareil doit respecter certaines normes de performance (rendement ≥ 87%, label Flamme Verte 7 étoiles).",
    category: "Aides"
  },
  {
    question: "Quelle marque de poêle à granulé choisir ?",
    answer: "Les marques les plus fiables sont : Rika (haut de gamme autrichien, rendement > 95%), MCZ et Palazzetti (italiennes, design et innovation), Extraflame (leader européen, bon rapport qualité-prix), et Invicta (français, robuste et accessible). Le choix dépend de votre budget, vos préférences esthétiques et vos besoins en puissance. Nos experts vous conseillent gratuitement pour choisir le modèle adapté.",
    category: "Choix"
  },
  {
    question: "Quelle puissance de poêle à granulé pour ma maison ?",
    answer: "La puissance nécessaire dépend de votre surface et de l'isolation : comptez environ 1 kW pour 10 m² dans une maison bien isolée (RT2012), ou 1 kW pour 7-8 m² pour une isolation moyenne. Exemples : 6-7 kW pour 60-70 m², 9-10 kW pour 90-100 m², 12-13 kW pour 120-130 m². Un diagnostic gratuit permet de calculer précisément vos besoins.",
    category: "Technique"
  },
  {
    question: "Un poêle à granulé consomme-t-il beaucoup d'électricité ?",
    answer: "Non, la consommation électrique d'un poêle à granulé est très faible : entre 50 et 150 watts en fonctionnement, soit environ 1€ par jour (24h). Sur une saison de chauffe (6 mois), cela représente environ 180€ d'électricité, largement compensé par les économies sur le chauffage principal (jusqu'à 60% d'économies sur les factures énergétiques).",
    category: "Consommation"
  },
  {
    question: "Poêle étanche ou non étanche : que choisir ?",
    answer: "Un poêle étanche est obligatoire dans les maisons RT2012 et BBC (très bien isolées). Il puise l'air de combustion directement à l'extérieur via une ventouse, préservant ainsi la qualité de l'air intérieur. Dans les maisons anciennes, un poêle non étanche peut suffire si la ventilation est adéquate. Le poêle étanche offre également un meilleur rendement (jusqu'à 95%) et plus de sécurité.",
    category: "Technique"
  },
  {
    question: "Combien de temps dure l'installation d'un poêle à granulé ?",
    answer: "L'installation complète d'un poêle à granulé prend généralement 1 à 2 jours selon la configuration. Cela inclut : la préparation du conduit de fumée (tubage si nécessaire), l'installation du poêle, le raccordement, et les tests de sécurité et de bon fonctionnement. Nos installateurs certifiés RGE Qualibois garantissent une installation conforme aux normes DTU 24.1.",
    category: "Installation"
  },
  {
    question: "Quel entretien pour un poêle à granulé ?",
    answer: "L'entretien d'un poêle à granulé comprend : un nettoyage hebdomadaire du creuset et de la vitre (5 minutes), un aspirage mensuel du cendrier et des conduits internes (30 minutes), et deux ramonages annuels obligatoires par un professionnel (dont un pendant la période de chauffe). Certains modèles disposent d'un système de nettoyage automatique qui réduit la maintenance.",
    category: "Entretien"
  },
  {
    question: "Un poêle à granulé peut-il chauffer toute la maison ?",
    answer: "Oui, un poêle à granulé bien dimensionné peut chauffer toute une maison jusqu'à 150 m² en chauffage principal si celle-ci est de plain-pied et bien isolée. Pour les maisons à étages ou plus grandes, optez pour un poêle canalisable qui redistribue l'air chaud via des gaines dans plusieurs pièces, ou un poêle bouilleur qui s'intègre au système de chauffage central (radiateurs, plancher chauffant).",
    category: "Performance"
  },
  {
    question: "Quelle est la différence entre granulés et pellets ?",
    answer: "Aucune ! Les granulés et les pellets désignent exactement le même combustible. 'Pellets' est le terme anglais, 'granulés' est le terme français. Ce sont des petits cylindres de sciure de bois compressée (6-8 mm de diamètre, 10-30 mm de longueur). Privilégiez des granulés certifiés DIN Plus ou EN Plus A1 pour un rendement optimal et préserver votre poêle.",
    category: "Général"
  },
  {
    question: "Les poêles à granulés sont-ils bruyants ?",
    answer: "Les poêles à granulés modernes sont relativement silencieux : entre 35 et 45 dB selon les modèles, équivalent à une conversation à voix basse. Le bruit provient principalement de la vis d'alimentation et du ventilateur. Les modèles haut de gamme (MCZ, Rika, Palazzetti) intègrent des technologies de réduction sonore pour atteindre 30-35 dB. Les poêles à convection naturelle (sans ventilateur) sont les plus silencieux.",
    category: "Confort"
  },
  {
    question: "Peut-on installer un poêle à granulé sans conduit de cheminée ?",
    answer: "Oui, il est possible d'installer un poêle à granulé sans conduit existant grâce à une sortie ventouse en façade (tube concentrique horizontal). Cette solution est idéale pour les maisons modernes ou rénovées. L'installation en ventouse est plus rapide et moins coûteuse qu'un tubage vertical, mais nécessite le respect de distances de sécurité (limites de propriété, fenêtres) et l'accord de la copropriété le cas échéant.",
    category: "Installation"
  }
];

export interface Benefit {
  title: string;
  description: string;
  icon: string;
  stat?: string;
}

export const benefits: Benefit[] = [
  {
    title: "Jusqu'à 60% d'économies",
    description: "Réduisez considérablement vos factures de chauffage grâce au prix avantageux des granulés et au rendement exceptionnel des poêles modernes (87 à 95%)",
    icon: "💰",
    stat: "60%"
  },
  {
    title: "Chauffage écologique",
    description: "Les granulés sont une énergie renouvelable et neutre en carbone. Vous contribuez activement à la transition énergétique et à la réduction des émissions de CO2",
    icon: "🌱",
    stat: "Neutre CO2"
  },
  {
    title: "Confort optimal",
    description: "Température stable et homogène, programmation hebdomadaire, allumage automatique, thermostat intégré : votre confort au quotidien sans contrainte",
    icon: "🏠",
    stat: "20°C constant"
  },
  {
    title: "Autonomie prolongée",
    description: "Avec un réservoir de 15 à 35 kg, profitez de 1 à 3 jours d'autonomie selon votre consommation. Rechargement simple et peu contraignant",
    icon: "⏰",
    stat: "3 jours"
  },
  {
    title: "Installation rapide",
    description: "Installation professionnelle en 1 à 2 jours par nos techniciens certifiés RGE Qualibois. Service clé en main avec mise en service et formation à l'utilisation",
    icon: "⚡",
    stat: "48h"
  },
  {
    title: "Aides financières importantes",
    description: "Profitez des aides cumulables : MaPrimeRénov', Prime CEE, Éco-PTZ, TVA 5,5%. Le reste à charge peut être réduit de 40 à 60%",
    icon: "🎁",
    stat: "Jusqu'à 3 500€"
  }
];
