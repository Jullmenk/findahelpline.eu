import React from "react";
import Link from "next/link";
import Image from "next/image";
import PartnerCard from "@/components/ui/partner-card";
import World from "@/assets/world";
import HeartAndPeople from "@/assets/heart-and-people";
import ProductsExperience from "@/assets/productsExperience";
import { crimsonText } from "@/fonts/crismonText";


export default function CompaniesAndOrganization() {
  const cards = [
    {
      name: "Alcance todos os utilizadores",
      logo: <World />,
      info: "Linhas de apoio verificadas em mais de 130 países.",
    },
    {
      name: "Preste apoio a necessidades diversas",
      logo: <HeartAndPeople />,
      info: "Cobertura para 21 tópicos e 15 especialidades.",
    },
    {
      name: "Acesso simplificado para poder ajudar",
      logo: <ProductsExperience />,
      info: "Experiências de produto prontas a serem usadas e personalizáveis.",
    },
  ];

  const logos = [
    "/svg/google-logo-white.svg",
    "/svg/grammarly-logo-white.svg",
    "/svg/padlet-logo-white.svg",
    "/svg/konami-logo-white.svg",
    "/svg/inflection-logo-white.svg",
    "/svg/oliva-logo-white.svg",
    "/svg/btwf-white.svg",
  ];

  return (
    <div className="w-full flex justify-center items-center bg-bg-3 py-12 text-white">
      <div className="w-def flex flex-col gap-3 justify-center items-center">
        <p className=" text-base font-semibold border-[2px] px-3 py-2 border-white rounded-lg">
          Para empresas e organizações
        </p>

        <h2
          className={
            crimsonText.className +
            " text-3xl text-center font-semibold mt-6 mb-2 "
          }
        >
          Ajustar a dimensão e preservar os recursos de apoio globais é
          desafiante e acarreta custos. Nós facilitamos.
        </h2>
        <p className="text-center">
          Find A Helpline é um serviço público da ThroughLine. Atenuar cada
          crise emocional, em todo o mundo, faz parte da nossa missão.
        </p>
        <p className="text-center">
          A ThroughLine capacita comunidades e plataformas online para
          protegerem os seus utilizadores e a reputação das suas marcas através
          de recursos de apoio à crise comprovados.
        </p>
        <div className="flex gap-2 justify-center items-center flex-col">
          <p>Confiado por</p>
          <div className="flex gap-x-6 w-[90%] justify-center items-center flex-wrap">
            {logos.map((logo, idx) => (
              <div className="relative w-24 h-10" key={idx}>
                <Image
                  fill
                  src={logo}
                  alt={logo.slice(logo.lastIndexOf("/"))}
                />
              </div>
            ))}
          </div>
          <Link className="underline flex items-center text-sm gap-1" href={"/"}>
          Torne-se um parceiro
          &rarr;
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-4 mt-6">
          {cards.map((card, idx) => (
            <PartnerCard classSets="bg-bg-6 text-bg-1" key={idx} {...card} />
          ))}
        </div>
        <Link target="_blank" href={"https://www.throughlinecare.com/"} className="mt-5 bg-bg-6 hover:bg-zinc-200 hover:shadow-theme flex items-center rounded-lg text-black font-semibold py-2 justify-center gap-2 w-full">
          Mais Informações &rarr;
        </Link>
      </div>
    </div>
  );
}
