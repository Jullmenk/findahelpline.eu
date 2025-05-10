import React, { useEffect } from "react";
import { Button } from "./button";
import Link from "next/link";
import { useConfig } from "@/context/config";

export default function CountryCard() {

    const {filteredHelplines,searchQuery} = useConfig()

    useEffect(() => {
        console.log("searchQuery:",searchQuery)
        console.log("filteredHelplines:",filteredHelplines)
    }, [filteredHelplines])

  return (
    <div
      className="max-h-screen w-def transition-all duration-300 bg-white px-4 pt-2 pb-4 rounded-lg flex flex-col items-center justify-center"
    >
      <h2 className=" text-2xl font-semibold mt-6 mb-2 text-gray-800">
        Gostarias de ter ajuda em relação a que assunto?
      </h2>
      <div className="flex flex-col gap-2 w-full justify-center">
        <p className="text-sm text-texts-4">Tópicos comuns</p>
        <Link
          href={`/topics/suicidal-thoughts`}
          className="flex px-5 w-44 py-2 hover:shadow-theme rounded-lg font-semibold text-white bg-texts-4 hover:bg-bg-7 justify-between items-center"
        >
          Ideação Suicida &rarr;
        </Link>
        <p className="text-sm text-texts-4">Ou selecione o tópico ou os tópicos &#40;opcional&#41;</p>
      </div>
      <div className="w-full flex flex-wrap gap-3 mt-6">
        {/* {countries.map((country, index) => (
          <Link
            href={`/country/${country.code}`}
            key={index}
            className="flex px-5 py-2 hover:shadow-theme rounded-lg text-sm bg-zinc-100 hover:bg-zinc-200 justify-between items-center"
          >
            {country.name}
          </Link>
        ))} */}
      </div>
    </div>
  );
}
