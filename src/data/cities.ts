export interface City {
  name: string;
  slug: string;
  department: string;
  region: string;
  population: number;
  description: string;
  nearbyAreas: string[];
}

export const cities: City[] = [
  {
    name: "Paris",
    slug: "paris",
    department: "75",
    region: "Île-de-France",
    population: 2161000,
    description: "Capitale française où la demande en chauffage écologique et économique ne cesse de croître",
    nearbyAreas: ["Boulogne-Billancourt", "Saint-Denis", "Montreuil", "Nanterre", "Créteil"]
  },
  {
    name: "Lyon",
    slug: "lyon",
    department: "69",
    region: "Auvergne-Rhône-Alpes",
    population: 516092,
    description: "Métropole dynamique où les installations de poêles à granulés se multiplient",
    nearbyAreas: ["Villeurbanne", "Vénissieux", "Caluire-et-Cuire", "Vaulx-en-Velin", "Bron"]
  },
  {
    name: "Marseille",
    slug: "marseille",
    department: "13",
    region: "Provence-Alpes-Côte d'Azur",
    population: 870018,
    description: "Ville méditerranéenne où le chauffage aux granulés gagne en popularité",
    nearbyAreas: ["Aix-en-Provence", "Aubagne", "Martigues", "Istres", "Salon-de-Provence"]
  },
  {
    name: "Toulouse",
    slug: "toulouse",
    department: "31",
    region: "Occitanie",
    population: 479553,
    description: "Métropole occitane où l'installation de poêles à granulés est en forte croissance",
    nearbyAreas: ["Colomiers", "Tournefeuille", "Blagnac", "Muret", "Balma"]
  },
  {
    name: "Nice",
    slug: "nice",
    department: "06",
    region: "Provence-Alpes-Côte d'Azur",
    population: 340017,
    description: "Ville azuréenne où les solutions de chauffage écologique séduisent de plus en plus",
    nearbyAreas: ["Antibes", "Cannes", "Grasse", "Cagnes-sur-Mer", "Menton"]
  },
  {
    name: "Nantes",
    slug: "nantes",
    department: "44",
    region: "Pays de la Loire",
    population: 309346,
    description: "Métropole ligérienne pionnière dans l'adoption des chauffages aux granulés",
    nearbyAreas: ["Saint-Nazaire", "Saint-Herblain", "Rezé", "Orvault", "Vertou"]
  },
  {
    name: "Strasbourg",
    slug: "strasbourg",
    department: "67",
    region: "Grand Est",
    population: 280966,
    description: "Capitale alsacienne où le climat rigoureux encourage l'installation de poêles performants",
    nearbyAreas: ["Mulhouse", "Colmar", "Haguenau", "Schiltigheim", "Illkirch-Graffenstaden"]
  },
  {
    name: "Montpellier",
    slug: "montpellier",
    department: "34",
    region: "Occitanie",
    population: 290053,
    description: "Ville méditerranéenne où le chauffage aux granulés connaît un essor remarquable",
    nearbyAreas: ["Béziers", "Sète", "Nîmes", "Castelnau-le-Lez", "Lunel"]
  },
  {
    name: "Bordeaux",
    slug: "bordeaux",
    department: "33",
    region: "Nouvelle-Aquitaine",
    population: 254436,
    description: "Métropole girondine où l'installation de poêles à granulés est très demandée",
    nearbyAreas: ["Mérignac", "Pessac", "Talence", "Villenave-d'Ornon", "Bègles"]
  },
  {
    name: "Lille",
    slug: "lille",
    department: "59",
    region: "Hauts-de-France",
    population: 232787,
    description: "Métropole nordiste où les hivers froids rendent le poêle à granulés particulièrement attractif",
    nearbyAreas: ["Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Dunkerque", "Valenciennes"]
  },
  {
    name: "Rennes",
    slug: "rennes",
    department: "35",
    region: "Bretagne",
    population: 217728,
    description: "Capitale bretonne où le chauffage écologique aux granulés séduit de nombreux foyers",
    nearbyAreas: ["Saint-Malo", "Fougères", "Vitré", "Cesson-Sévigné", "Bruz"]
  },
  {
    name: "Reims",
    slug: "reims",
    department: "51",
    region: "Grand Est",
    population: 182592,
    description: "Ville champenoise où l'installation de poêles à granulés gagne du terrain",
    nearbyAreas: ["Épernay", "Châlons-en-Champagne", "Tinqueux", "Cormontreuil", "Bétheny"]
  },
  {
    name: "Le Havre",
    slug: "le-havre",
    department: "76",
    region: "Normandie",
    population: 170352,
    description: "Port normand où le chauffage aux granulés offre confort et économies",
    nearbyAreas: ["Rouen", "Dieppe", "Fécamp", "Montivilliers", "Sainte-Adresse"]
  },
  {
    name: "Saint-Étienne",
    slug: "saint-etienne",
    department: "42",
    region: "Auvergne-Rhône-Alpes",
    population: 172565,
    description: "Ville ligérienne où les poêles à granulés s'imposent comme solution de chauffage privilégiée",
    nearbyAreas: ["Firminy", "Roanne", "Montbrison", "Saint-Chamond", "Rive-de-Gier"]
  },
  {
    name: "Toulon",
    slug: "toulon",
    department: "83",
    region: "Provence-Alpes-Côte d'Azur",
    population: 176198,
    description: "Port varois où l'installation de poêles à granulés connaît une forte croissance",
    nearbyAreas: ["Hyères", "La Seyne-sur-Mer", "Six-Fours-les-Plages", "Sanary-sur-Mer", "Draguignan"]
  },
  {
    name: "Grenoble",
    slug: "grenoble",
    department: "38",
    region: "Auvergne-Rhône-Alpes",
    population: 158198,
    description: "Ville alpine où le poêle à granulés est la solution idéale face aux hivers rigoureux",
    nearbyAreas: ["Échirolles", "Saint-Martin-d'Hères", "Fontaine", "Voiron", "Vienne"]
  },
  {
    name: "Dijon",
    slug: "dijon",
    department: "21",
    region: "Bourgogne-Franche-Comté",
    population: 156920,
    description: "Capitale bourguignonne où le chauffage aux granulés séduit par son efficacité",
    nearbyAreas: ["Beaune", "Chenôve", "Talant", "Fontaine-lès-Dijon", "Quetigny"]
  },
  {
    name: "Angers",
    slug: "angers",
    department: "49",
    region: "Pays de la Loire",
    population: 154508,
    description: "Ville angevine où l'installation de poêles à granulés est en plein essor",
    nearbyAreas: ["Cholet", "Saumur", "Avrillé", "Trélazé", "Les Ponts-de-Cé"]
  },
  {
    name: "Nîmes",
    slug: "nimes",
    department: "30",
    region: "Occitanie",
    population: 150610,
    description: "Ville gardoise où les poêles à granulés offrent confort et économies d'énergie",
    nearbyAreas: ["Alès", "Bagnols-sur-Cèze", "Beaucaire", "Vauvert", "Marguerittes"]
  },
  {
    name: "Villeurbanne",
    slug: "villeurbanne",
    department: "69",
    region: "Auvergne-Rhône-Alpes",
    population: 149019,
    description: "Ville limitrophe de Lyon où la demande en installation de poêles à granulés est forte",
    nearbyAreas: ["Lyon", "Vénissieux", "Caluire-et-Cuire", "Bron", "Vaulx-en-Velin"]
  },
  {
    name: "Clermont-Ferrand",
    slug: "clermont-ferrand",
    department: "63",
    region: "Auvergne-Rhône-Alpes",
    population: 143886,
    description: "Capitale auvergnate où le climat continental favorise l'adoption des poêles à granulés",
    nearbyAreas: ["Chamalières", "Beaumont", "Cournon-d'Auvergne", "Aubière", "Riom"]
  },
  {
    name: "Aix-en-Provence",
    slug: "aix-en-provence",
    department: "13",
    region: "Provence-Alpes-Côte d'Azur",
    population: 145133,
    description: "Ville provençale où les installations de poêles à granulés se multiplient",
    nearbyAreas: ["Marseille", "Salon-de-Provence", "Gardanne", "Bouc-Bel-Air", "Les Pennes-Mirabeau"]
  },
  {
    name: "Brest",
    slug: "brest",
    department: "29",
    region: "Bretagne",
    population: 139926,
    description: "Port breton où le poêle à granulés s'impose comme solution de chauffage privilégiée",
    nearbyAreas: ["Quimper", "Landerneau", "Guipavas", "Plougastel-Daoulas", "Morlaix"]
  },
  {
    name: "Tours",
    slug: "tours",
    department: "37",
    region: "Centre-Val de Loire",
    population: 136463,
    description: "Ville tourangelle où le chauffage aux granulés gagne en popularité",
    nearbyAreas: ["Joué-lès-Tours", "Saint-Pierre-des-Corps", "Saint-Cyr-sur-Loire", "Chambray-lès-Tours", "La Riche"]
  },
  {
    name: "Amiens",
    slug: "amiens",
    department: "80",
    region: "Hauts-de-France",
    population: 133891,
    description: "Préfecture picarde où l'installation de poêles à granulés connaît un fort développement",
    nearbyAreas: ["Longueau", "Rivery", "Glisy", "Camon", "Dury"]
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
