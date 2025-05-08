import Image from "next/image";
import React from "react";
import { Crimson_Text } from "next/font/google";
import PartnerCard from "@/components/ui/partner-card";
import Rapido from "@/assets/rápido";
import Confidencial from "@/assets/confidencial";
import FaleComAPessoa from "@/assets/fale-com-a-pessoa";
import { Button } from "@/components/ui/button";
import { MdArrowRightAlt } from "react-icons/md";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const partners = [
  {
    name: "Rápido",
    logo: <Rapido />,
    info: "Entre em contacto com uma linha de apoio hoje",
  },
  {
    name: "Fale com a Pessoa",
    logo: <FaleComAPessoa />,
    info: "Receba apoio de um voluntário com formação, psicólogo ou de um colega",
  },
  {
    name: "Confidencial",
    logo: <Confidencial />,
    info: "Sinta-se confortável em partilhar o que está a sentir",
  },
];

const sections = [
  {
    title: "O que são as linhas de apoio?",
    content: [
      "As linhas de apoio (também conhecidas como linhas diretas ou linhas de crise) disponibilizam apoio imediato em situações de crise, apoio emocional e informações – de forma gratuita.",
      "A maioria dos números de telefone de linhas de apoio são gratuitos e muitas linhas de apoio estão disponíveis por mensagem ou chat online. As linhas de apoio costumam estar disponíveis 24 horas por dia, todos os dias, portanto pode entrar em contacto com as mesmas em qualquer hora do dia ou da noite.",
    ],
  },
  {
    title: "De que forma é que uma linha de apoio me irá ajudar?",
    content: [
      "As linhas de apoio oferecem um espaço isento de julgamento para falar sobre emoções e experiências difíceis, receber apoio e ligar-se a outros recursos que lhe podem ser úteis.",
      "Falar ajuda e estudos provaram que as pessoas se sentem menos angustiadas depois de contactarem linhas de apoio.",
    ],
  },
  {
    title: "Que assuntos posso abordar numa linha de apoio?",
    content: [
      "As linhas de apoio mais comuns são as linhas de apoio de prevenção ao suicídio, violência doméstica e violência sexual.",
      "No entanto, há linhas de apoio direcionadas para diversas dificuldades a nível emocional e de saúde mental, incluindo ansiedade, depressão, género ou identidade sexual, uso de substâncias e muito mais.",
      "Não tem de ter pensamentos suicidas ou de estar numa situação grave para entrar em contacto com uma linha de apoio. Pode precisar apenas de falar ou querer informações sobre ajudar outras pessoas.",
    ],
  },
  {
    title: "Como posso encontrar a melhor linha de apoio para o meu caso?",
    content: [
      "Em alguns países, há muitas linhas de apoio disponíveis. Por exemplo, se vive nos Estados Unidos, as linhas de apoio populares a nível nacional incluem a 988 Suicide & Crisis Lifeline, Crisis Text Line e TrevorLifeline.",
      "Quando procura por uma linha de apoio em Find A Helpline, o nosso algoritmo inteligente de classificação irá recomendar as melhores linhas de apoio para si.",
      "Também pode filtrar esta lista de acordo com as suas necessidades, assim como ler as descrições da linha de apoio para obter mais informações sobre os serviços prestados por cada linha de apoio.",
      "Como as linhas de apoio são gratuitas, pode contactar mais do que um serviço até encontrar aquele que é mais adequado para si.",
    ],
  },
];

export default function Partners() {
  return (
    <div className="w-full flex justify-center items-center bg-bg-2">
      <div className="min-h-96 w-def flex flex-col items-center py-5 gap-4">
        <div className="w-full flex flex-col gap-5 mb-8">
          <h1 className="border-b border-texts-1 text-texts-1 text-center pb-4">
            Principais Parceiros
          </h1>
          <div className="flex justify-center gap-4">
            <div className="relative w-56 h-10">
              <Image fill src="/img/iasp-logo-grey.png" alt="IASP Logo" />
            </div>
            <div className="relative w-24 h-10">
              <Image fill src="/svg/LLI-logo-grey.svg" alt="LLI Logo" />
            </div>
          </div>
          <p className="border-b border-texts-1 text-texts-1 text-center pb-4">
            Mais de 1300 linhas de apoio em mais de 130 países
          </p>
        </div>

        <h2
          className={`${crimsonText.className} text-texts-3 text-center leading-8 font-semibold text-3xl`}
        >
          Apoio emocional gratuito em qualquer lugar, a qualquer hora
        </h2>

        <div className="relative w-[80%] h-44 my-5">
          <Image
            fill
            src="/img/man-in-hammock-texting-hotline.png"
            alt="man-in-hammock-texting-hotline"
          />
        </div>

        <div className="flex flex-col justify-center gap-4">
          {partners.map((partner, idx) => (
            <PartnerCard key={idx} {...partner} />
          ))}
        </div>

        <div className="mt-5">
          <h1
            className={
              crimsonText.className + " text-3xl font-bold mb-4 text-gray-800"
            }
          >
            Não tem de passar por isto sozinho.
          </h1>
          <p className=" mb-4 text-lg font-semibold ">
            Se está a passar por dificuldades, precisa de ajuda com a sua saúde
            mental ou experienciou um evento traumático, pondere entrar em
            contacto com uma linha de apoio. É gratuita, anónima e confidencial.
          </p>

          {sections.map((section, idx) => (
            <div key={idx}>
              <h2
                className={
                  crimsonText.className +
                  " text-2xl font-semibold mt-6 mb-2 text-gray-800"
                }
              >
                {section.title}
              </h2>
              {section.content.map((para, i) => (
                <p key={i} className="text-gray-700 mb-4">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
        <Button className="mt-5 bg-bg-1 flex items-center rounded-xl justify-center gap-2 w-full">
          <span>O Que Esperar</span>
          <MdArrowRightAlt />
        </Button>
      </div>
    </div>
  );
}
