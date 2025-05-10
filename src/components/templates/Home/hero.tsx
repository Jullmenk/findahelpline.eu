import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useConfig } from "@/context/config";

export default function Hero() {

  const {userCountry,setSearchQuery} = useConfig()

  return (
    <div className="w-full flex justify-center items-center bg-bg-0">
      <div className="min-h-96 py-16 w-def flex justify-center items-center bg-bg-0 flex-col gap-4">
        <div className="relative w-64 h-14">
          <Image
            fill
            src="/svg/findahelpline-logo.svg"
            alt="Find a Helpline Logo"
          />
        </div>
        <h1 className="text-texts-0 text-lg text-center">
          Apoio confidencial e gratuito de uma linha de apoio ou direta perto de
          si. Chat online, mensagem ou telefone.
        </h1>
        <SearchBar onSearch={setSearchQuery} />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-sm text-texts-1">Ligações rápidas</h2>
          {userCountry && <Button
            variant={"ghost"}
            className="underline hover:bg-transparent hover:text-texts-0 text-texts-0 font-normal"
            onClick={() => setSearchQuery(userCountry.name)}
          >
            Linhas de apoio em {userCountry.name}
          </Button>}
          <Link className="underline text-texts-0 font-normal" href={"/faq"}>
            Usar uma linha de apoio: o que esperar
          </Link>
        </div>
      </div>
    </div>
  );
}
