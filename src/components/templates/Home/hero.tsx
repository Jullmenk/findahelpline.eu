import { SearchBar } from "@/components/SearchBar";
import Image from "next/image";
import React, { useState } from "react";

export default function Hero() {

   const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full h-96 px-[39%] flex justify-center items-center bg-bg-0 flex-col gap-4">
      <div className="relative w-64 h-14">
        <Image
          fill
          src="/vectors/findahelpline-logo.svg"
          alt="Find a Helpline Logo"
        />
      </div>
      <h1 className="text-texts-0 text-lg text-center">
        Apoio confidencial e gratuito de uma linha de apoio ou direta perto de
        si. Chat online, mensagem ou telefone.
      </h1>
      <SearchBar 
        onSearch={setSearchQuery} 
      />
    </div>
  );
}
