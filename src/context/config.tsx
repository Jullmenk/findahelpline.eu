"use client";
import { specializations } from "@/data/utils";
import { findUserCountry } from "@/server/action";
import { Helpline } from "@/types/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
  useMemo,
} from "react";

interface ConfigContextType {
  userCountry: { name: string; code: string } | undefined;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredHelplines: Helpline[];
  setFilteredHelplines: (helplines: Helpline[]) => void;
  updateFilteredHelplines: (code: string) => void;
  spec: { pt: string; en: string }[];
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: ReactNode }) {

  const [helplines, setHelplines] = useState<Helpline[]>([]);
  const [userCountry, setUserCountry] = useState<
    { name: string; code: string } | undefined
  >();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHelplines, setFilteredHelplines] = useState<Helpline[]>([]);

  useEffect(() => {
    const userCached = sessionStorage.getItem("userCountry");
    if (userCached) {
      setUserCountry(JSON.parse(userCached));
    }else{
      findUserCountry().then((country) => {
        sessionStorage.setItem("userCountry", JSON.stringify(country));
        setUserCountry(country);
      });
    }
  
    async function fetchHelplines() {
      try {
        const cached = sessionStorage.getItem("helplines");
        if (cached) {
          setHelplines(JSON.parse(cached));
          return;
        }
  
        const response = await fetch("/api/helplines");
        const data: Helpline[] = await response.json();
        sessionStorage.setItem("helplines", JSON.stringify(data));
        setHelplines(data);
      } catch (error) {
        console.error("Error fetching helplines:", error);
      }
    }
  
    fetchHelplines();
  }, []);

  const updateFilteredHelplines = useCallback((code: string) => {
    const filteredHelplines = helplines.filter((helpline) => {
      if (!code) {
        return false;
      }
      const query = code.toLowerCase();
      return helpline.countryRel.code.toLowerCase().includes(query);
    });
    setFilteredHelplines(filteredHelplines);
  }, [helplines]);

  const spec = useMemo(() => {
    return specializations.filter((spec) =>
      filteredHelplines.some((helpline) =>
        helpline.specializations.some((hSpec) =>
          spec.en.toLowerCase().includes(hSpec.toLowerCase())
        )
      )
    );
  }, [filteredHelplines]);

  return (
    <ConfigContext.Provider
      value={{
        userCountry,
        searchQuery,
        setSearchQuery,
        filteredHelplines,
        updateFilteredHelplines,
        setFilteredHelplines,
        spec,
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
