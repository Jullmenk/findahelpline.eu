import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useConfig } from "@/context/config";
import { Helpline } from "@/types/types";
import CountryCard from "@/components/ui/country-card";

export default function Hero({
  filteredHelplines,
}: {
  filteredHelplines: Helpline[];
}) {
  const { userCountry, setSearchQuery,updateFilteredHelplines } = useConfig();

  return (
    <div className="w-full flex justify-center items-center bg-bg-0">
      <div className="min-h-96 py-16 w-def flex justify-center items-center bg-bg-0 flex-col gap-4">
        {filteredHelplines.length === 0 && (
          <>
            <div className="relative w-64 h-14">
              <Image
                fill
                src="/svg/findahelpline-logo.svg"
                alt="Find a Helpline Logo"
              />
            </div>
            <h1 className="text-texts-0 text-lg text-center">
              Apoio confidencial e gratuito de uma linha de apoio ou direta
              perto de si. Chat online, mensagem ou telefone.
            </h1>
          </>
        )}
        <SearchBar onSearch={setSearchQuery} />

        {filteredHelplines.length === 0 ? (
          <>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-sm text-texts-1">Ligações rápidas</h2>
              {userCountry && (
                <Button
                  variant={"ghost"}
                  className="underline hover:bg-transparent hover:text-texts-0 text-texts-0 font-normal"
                  onClick={() => updateFilteredHelplines(userCountry.code)}
                >
                  Linhas de apoio em {userCountry.name}
                </Button>
              )}
              <Link
                className="underline text-texts-0 font-normal"
                href={"/faq"}
              >
                Usar uma linha de apoio: o que esperar
              </Link>
            </div>
          </>
        ):
        (
          <CountryCard/>
        )}

      </div>
    </div>
  );
}
