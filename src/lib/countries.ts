export interface Country {
  name: string;
  code: string;
  languages: string[];
}

// Default languages for all countries
const DEFAULT_LANGUAGES = ['English'];

export const countries: Country[] = [
  {
    name: "Portugal",
    code: "PT",
    languages: ["Portuguese"]
  },
  {
    name: "Spain",
    code: "ES",
    languages: ["Spanish", "Catalan"]
  },
  {
    name: "France",
    code: "FR",
    languages: ["French"]
  },
  {
    name: "Italy",
    code: "IT",
    languages: ["Italian"]
  },
  {
    name: "Germany",
    code: "DE",
    languages: ["German"]
  },
  {
    name: "Netherlands",
    code: "NL",
    languages: ["Dutch"]
  },
  {
    name: "Belgium",
    code: "BE",
    languages: ["Dutch", "French"]
  },
  {
    name: "Switzerland",
    code: "CH",
    languages: ["German", "French", "Italian", "Romansh"]
  },
  {
    name: "Austria",
    code: "AT",
    languages: ["German"]
  },
  {
    name: "Ireland",
    code: "IE",
    languages: ["Irish"]
  },
  {
    name: "United Kingdom",
    code: "GB",
    languages: ["Welsh", "Scottish"]
  },
  {
    name: "Denmark",
    code: "DK",
    languages: ["Danish"]
  },
  {
    name: "Finland",
    code: "FI",
    languages: ["Finnish", "Swedish"]
  },
  {
    name: "Sweden",
    code: "SE",
    languages: ["Swedish"]
  },
  {
    name: "Norway",
    code: "NO",
    languages: ["Norwegian"]
  },
  {
    name: "Poland",
    code: "PL",
    languages: ["Polish"]
  },
  {
    name: "Czech Republic",
    code: "CZ",
    languages: ["Czech"]
  },
  {
    name: "Hungary",
    code: "HU",
    languages: ["Hungarian"]
  },
  {
    name: "Slovakia",
    code: "SK",
    languages: ["Slovak"]
  },
  {
    name: "Slovenia",
    code: "SI",
    languages: ["Slovenian"]
  },
  {
    name: "Croatia",
    code: "HR",
    languages: ["Croatian"]
  },
  {
    name: "Bulgaria",
    code: "BG",
    languages: ["Bulgarian"]
  },
  {
    name: "Romania",
    code: "RO",
    languages: ["Romanian"]
  },
  {
    name: "Greece",
    code: "GR",
    languages: ["Greek"]
  },
  {
    name: "Estonia",
    code: "EE",
    languages: ["Estonian"]
  },
  {
    name: "Latvia",
    code: "LV",
    languages: ["Latvian"]
  },
  {
    name: "Lithuania",
    code: "LT",
    languages: ["Lithuanian"]
  },
  {
    name: "Malta",
    code: "MT",
    languages: ["Maltese"]
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
