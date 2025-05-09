import { Button } from "@/components/ui/button";
import { countries } from "@/lib/countries";
import { Check, X } from "lucide-react";
import { Crimson_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const TEXTS = [
  "Find a Helpline é patrocinado pela ThroughLine, a maior e mais fidedigna fonte de recursos de linhas de apoio a nível mundial.",
  "Estabelecemos parcerias com organizações de linhas de apoio e centros de crise em mais de 130 países, que validam as suas informações diretamente junto de nós.",
  "Enquanto outros serviços e sites disponibilizam longas listas com informações desatualizadas, nós trabalhamos diariamente para manter as nossas informações corretas e fáceis de usar – tanto para as pessoas que precisam de ajuda imediata como para os parceiros que confiam em nós.",
];

const COMPARISON = [
  ["Alguns países", "Cobertura em toda a Europa"],
  [
    "Sites e números de telefone desatualizados",
    "Dados verificados, atualizados diariamente",
  ],
  [
    "Dificuldades em encontrar o serviço certo",
    "Classificação inteligente com AI",
  ],
];

export default function HelpLineSection() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className="w-full flex justify-center items-center bg-bg-0 py-16">
      <div className="w-def flex flex-col gap-7">
        <div className="relative w-full h-64">
          <Image
            fill
            src="/img/woman-on-phone-chatting-to-crisis-counselor-transparent.png"
            alt="woman-on-phone-chatting-to-crisis-counselor-transparent"
          />
        </div>

        <h2>
          Temos parcerias com linhas de apoio verificadas em mais de 130 países
        </h2>

        {TEXTS.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <table>
          <thead>
            <tr>
              {["Outros Serviços", "Find a Helpline"].map((header, i) => (
                <th
                  key={i}
                  className={`${
                    crimsonText.className
                  } font-semibold text-2xl text-start ${
                    i === 0 ? "text-texts-5" : "text-texts-4"
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map(([left, right], i) => (
              <tr className="h-16" key={i}>
                <td className="border-b border-border-0 pr-5 py-3">
                  <div className="flex items-center gap-2">
                    <X
                      color="rgb(232, 136, 108)"
                      size={20}
                      className="min-w-[20px]"
                    />
                    <span className="">{left}</span>
                  </div>
                </td>
                <td className="border-b border-border-0 pr-5 py-3">
                  <div className="flex items-center gap-2">
                    <Check
                      color="rgb(148, 188, 217)"
                      size={20}
                      className="min-w-[20px]"
                    />
                    <span>{right}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2
          className={
            crimsonText.className +
            " text-2xl font-semibold mt-6 mb-2 text-gray-800"
          }
        >
          Linhas de apoio e linhas diretas por país
        </h2>
        <div
          className={`${
            dropDownOpen ? "max-h-screen" : "max-h-14"
          } w-full transition-all duration-300 bg-white px-4 pt-2 pb-4 rounded-lg overflow-hidden flex flex-col items-start justify-start`}
        >
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => setDropDownOpen(!dropDownOpen)}
          >
            <Button
              variant={"ghost"}
              className={
                crimsonText.className +
                " px-0 hover:bg-transparent text-2xl font-semibold text-texts-4"
              }
            >
              Europa
            </Button>
            <div
              className={` transition-all duration-300 ${
                dropDownOpen ? "rotate-180" : ""
              }`}
            >
              <IoChevronDownOutline size={20} color="rgb(148, 188, 217)" />
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-3 mt-6">
            {countries.map((country, index) => (
              <Link
                href={`/country/${country.code}`}
                key={index}
                className="flex px-5 py-2 hover:shadow-theme rounded-lg text-sm bg-zinc-100 hover:bg-zinc-200 justify-between items-center"
              >
                {country.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
