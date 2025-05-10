"use client";
import { findUserCountry } from "@/server/action";
import { Helpline } from "@/types/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ConfigContextType {
  language: string;
  setLanguage: (lang: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  userCountry: { name: string; code: string } | undefined;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredHelplines: Helpline[];
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>("pt");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [helplines, setHelplines] = useState<Helpline[]>([]);
  const [userCountry, setUserCountry] = useState<{ name: string; code: string } | undefined>();
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    findUserCountry().then((country) => {
      setUserCountry(country);
    });

    async function fetchHelplines() {
      try {
        const response = await fetch("/api/helplines");
        const data: Helpline[] = await response.json();
        setHelplines(data);
      } catch (error) {
        console.error("Error fetching helplines:", error);
      }
    }

    fetchHelplines();
  }, []);

  const filteredHelplines = helplines.filter((helpline) => {
    const query = searchQuery.toLowerCase();
    console.log("query:",query,"helpline:",helpline)
    return (
      helpline.countryRel.code.toLowerCase().includes(query)
    );
  });

  return (
    <ConfigContext.Provider
      value={{
        language,
        setLanguage,
        menuOpen,
        setMenuOpen,
        userCountry,
        searchQuery,
        setSearchQuery,
        filteredHelplines,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
}
