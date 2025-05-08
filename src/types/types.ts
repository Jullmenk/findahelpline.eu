// Represents the Helpline model
export type Helpline = {
    id: string;
    name: string;
    country: string;
    phone?: string | null;
    website?: string | null;
    languages: string[];
    createdAt: Date;
    updatedAt: Date;
    countryRel: Country;
  };
  
  // Represents the Country model
  export type Country = {
    id: string;
    name: string;
    code: string;
    languages: string[];
    helplines?: Helpline[];
  };