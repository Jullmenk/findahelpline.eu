import { SearchBar } from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useConfig } from "@/context/config";
import { Helpline } from "@/types/types";
import CountryCard from "@/components/ui/country-card";
import { useTranslations } from "@/hooks/useTranslations";

export default function Hero({
  filteredHelplines,
  herotext
}: {
  filteredHelplines: Helpline[];
  herotext?:string
}) {
  const { userCountry,updateFilteredHelplines } = useConfig();

  const t = useTranslations("Hero")

  console.log(t("title"))

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
            <h1 className="text-texts-0 text-xl text-center font-normal">
              {t("title")}
              {/* {
                herotext?
               `Está com dificuldades com ${herotext}? Obtenha apoio gratuito e confidencial de uma linha de apoio ou linha direta perto de si. Chat online, mensagem ou telefone.`
               : 
               (`Apoio confidencial e gratuito de uma linha de apoio ou direta
                perto de si. Chat online, mensagem ou telefone.`)
              } */}
            </h1>
          </>
        )}
        <SearchBar/>

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
