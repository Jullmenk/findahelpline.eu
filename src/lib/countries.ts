export interface Country {
  name: string;
  code: string;
  languages: string[];
}

// Default languages for all countries
const DEFAULT_LANGUAGES = ['Inglês'];

export const countries: Country[] = [
  {
    name: "Portugal",
    code: "PT",
    languages: ["Português"]
  },
  {
    name: "Espanha",
    code: "ES",
    languages: ["Espanhol", "Catalão"]
  },
  {
    name: "França",
    code: "FR",
    languages: ["Francês"]
  },
  {
    name: "Itália",
    code: "IT",
    languages: ["Italiano"]
  },
  {
    name: "Alemanha",
    code: "DE",
    languages: ["Alemão"]
  },
  {
    name: "Holanda",
    code: "NL",
    languages: ["Holandês"]
  },
  {
    name: "Bélgica",
    code: "BE",
    languages: ["Holandês", "Francês"]
  },
  {
    name: "Suíça",
    code: "CH",
    languages: ["Alemão", "Francês", "Italiano", "Romansh"]
  },
  {
    name: "Áustria",
    code: "AT",
    languages: ["Alemão"]
  },
  {
    name: "Irlanda",
    code: "IE",
    languages: ["Irlandês"]
  },
  {
    name: "Reino Unido",
    code: "GB",
    languages: ["Gales", "Escocês"]
  },
  {
    name: "Dinamarca",
    code: "DK",
    languages: ["Dinamarquês"]
  },
  {
    name: "Finlândia",
    code: "FI",
    languages: ["Finlandês", "Sueco"]
  },
  {
    name: "Suécia",
    code: "SE",
    languages: ["Sueco"]
  },
  {
    name: "Noruega",
    code: "NO",
    languages: ["Norueguês"]
  },
  {
    name: "Polônia",
    code: "PL",
    languages: ["Polonês"]
  },
  {
    name: "República Tcheca",
    code: "CZ",
    languages: ["Tcheco"]
  },
  {
    name: "Hungria",
    code: "HU",
    languages: ["Húngaro"]
  },
  {
    name: "Slováquia",
    code: "SK",
    languages: ["Eslovaco"]
  },
  {
    name: "Eslovênia",
    code: "SI",
    languages: ["Esloveno"]
  },
  {
    name: "Croácia",
    code: "HR",
    languages: ["Croata"]
  },
  {
    name: "Bulgária",
    code: "BG",
    languages: ["Búlgaro"]
  },
  {
    name: "Romênia",
    code: "RO",
    languages: ["Romeno"]
  },
  {
    name: "Grécia",
    code: "GR",
    languages: ["Grego"]
  },
  {
    name: "Estonia",
    code: "EE",
    languages: ["Estoniano"]
  },
  {
    name: "Letônia",
    code: "LV",
    languages: ["Letão"]
  },
  {
    name: "Lituânia",
    code: "LT",
    languages: ["Lituano"]
  },
  {
    name: "Malta",
    code: "MT",
    languages: ["Maltês"]
  }
];

export const getCountryByCode = (code: string) => {
  const country = countries.find(country => country.code === code);
  return country ? {
    ...country,
    languages: [...country.languages, ...DEFAULT_LANGUAGES]
  } : null;
};

export const getCountryByName = (name: string) => {
  const country = countries.find(country => country.name.toLowerCase() === name.toLowerCase());
  return country ? {
    ...country,
    languages: [...country.languages, ...DEFAULT_LANGUAGES]
  } : null;
};
