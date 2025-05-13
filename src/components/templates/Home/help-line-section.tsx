import { Button } from "@/components/ui/button";
import { specializations } from "@/data/utils";
import { crimsonText } from "@/fonts/crismonText";
import { useTranslations } from "@/hooks/useTranslations";
import { countries } from "@/lib/countries";
import { Check, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

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

  const t = useTranslations("helpline-and-Country")
  const c = useTranslations("Hero")
  return (
    <div className="w-full flex justify-center items-center bg-bg-0 py-16">
      <div className="w-def flex flex-col gap-3">
        <div className="w-full flex items-center justify-center">
          <div className="relative w-[80%] h-56">
            <Image
              fill
              src="/img/woman-on-phone-chatting-to-crisis-counselor-transparent.png"
              alt="woman-on-phone-chatting-to-crisis-counselor-transparent"
            />
          </div>
        </div>

        <h2
          className={
            crimsonText.className +
            " text-3xl font-semibold mt-6 mb-2 text-gray-800 leading-8"
          }
        >
         {t("title")}
        </h2>

        <p>{t("InfoText-1")}</p>
        <p>{t("InfoText-2")}</p>
        <p>{t("InfoText-3")}</p>

        <table className="mt-3">
          <thead>
            <tr>
             
                <th
                  className={`${
                    crimsonText.className
                  } font-semibold text-2xl text-start text-texts-5`}
                >
                  {t("OtherServices")}
                </th>
                <th
                  className={`${
                    crimsonText.className
                  } font-semibold text-2xl text-start text-texts-4`}
                >
                  {t("findAHelpline")}
                </th>
            </tr>
          </thead>
          <tbody>

              <tr className="h-16">
                <td className="border-b border-border-0 pr-5 py-3">
                  <div className="flex items-center gap-2">
                    <X
                      color="rgb(232, 136, 108)"
                      size={20}
                      className="min-w-[20px]"
                    />
                    <span className="">{t("OtherServicesText-1")}</span>
                  </div>
                </td>
                <td className="border-b border-border-0 pr-5 py-3">
                  <div className="flex items-center gap-2">
                    <Check
                      color="rgb(148, 188, 217)"
                      size={20}
                      className="min-w-[20px]"
                    />
                    <span>{t("findAHelplineText-1")}</span>
                  </div>
                </td>
              </tr>
              <tr className="h-16">
                <td className="border-b border-border-0 pr-5 py-3">
                  <div className="flex items-center gap-2">
                    <X
                      color="rgb(232, 136, 108)"
                      size={20}
                      className="min-w-[20px]"
                    />
                    <span className="">{t("OtherServicesText-2")}</span>
                  </div>
                </td>
                <td className="border-b border-border-0 pr-5 py-3">
                  <div className="flex items-center gap-2">
                    <Check
                      color="rgb(148, 188, 217)"
                      size={20}
                      className="min-w-[20px]"
                    />
                    <span>{t("findAHelplineText-2")}</span>
                  </div>
                </td>
              </tr>
              <tr className="h-16">
                <td className="border-b border-border-0 pr-5 py-3">
                  <div className="flex items-center gap-2">
                    <X
                      color="rgb(232, 136, 108)"
                      size={20}
                      className="min-w-[20px]"
                    />
                    <span className="">{t("OtherServicesText-3")}</span>
                  </div>
                </td>
                <td className="border-b border-border-0 pr-5 py-3">
                  <div className="flex items-center gap-2">
                    <Check
                      color="rgb(148, 188, 217)"
                      size={20}
                      className="min-w-[20px]"
                    />
                    <span>{t("findAHelplineText-3")}</span>
                  </div>
                </td>
              </tr>

          </tbody>
        </table>
        <h2
          className={
            crimsonText.className +
            " text-2xl font-semibold mt-6 mb-2 text-gray-800"
          }
        >
          {t("hotlinesbycountry")}
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
              {t("europe")}
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
                href={`/countries/${country.code}`}
                key={index}
                className="flex px-5 py-2 hover:shadow-theme rounded-lg text-sm bg-zinc-100 hover:bg-zinc-200 justify-between items-center"
              >
                {c(`countries.${country.code}`)}
              </Link>
            ))}
          </div>
        </div>
        <h2
          className={
            crimsonText.className +
            " text-2xl font-semibold mt-6 mb-2 text-gray-800"
          }
        >
          {t("hotlinesbyTopic")}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-texts-4">{t("Quick")}</p>
          <Link
            href={`/topics/suicidal-thoughts`}
            className="flex px-5 max-w-48 py-2 hover:shadow-theme rounded-lg font-semibold text-white bg-texts-4 hover:bg-bg-7 justify-between items-center"
          >
            {t("Suicidal")} &rarr;
          </Link>
        </div>
        <div
          className={` w-full pt-2 pb-4 flex flex-col items-start justify-start`}
        >
          <div className="w-full flex flex-wrap gap-3 mt-6">
            {specializations.map((elem, index) => (
              <Link
                href={`/topics/${elem.en.replace(/\s/g, "-")}`}
                key={index}
                className="px-5 py-2 hover:shadow-theme rounded-lg text-sm bg-white hover:bg-zinc-200"
              >
                {t(`topics.${elem.en}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
