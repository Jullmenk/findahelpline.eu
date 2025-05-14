import React from "react";
import Link from "next/link";
import Image from "next/image";
import PartnerCard from "@/components/ui/partner-card";
import World from "@/assets/world";
import HeartAndPeople from "@/assets/heart-and-people";
import ProductsExperience from "@/assets/productsExperience";
import { crimsonText } from "@/fonts/crismonText";
import { useTranslations } from "@/hooks/useTranslations";


export default function CompaniesAndOrganization() {
  const cards = [World,HeartAndPeople,ProductsExperience ];

  const logos = [
    "/svg/google-logo-white.svg",
    "/svg/grammarly-logo-white.svg",
    "/svg/padlet-logo-white.svg",
    "/svg/konami-logo-white.svg",
    "/svg/inflection-logo-white.svg",
    "/svg/oliva-logo-white.svg",
    "/svg/btwf-white.svg",
  ];

  const t = useTranslations("Companies");

  return (
    <div className="w-full flex justify-center items-center bg-bg-3 py-12 text-white">
      <div className="w-def flex flex-col gap-3 justify-center items-center">
        <p className=" text-base font-semibold border-[2px] px-3 py-2 border-white rounded-lg">
          {t("title")}
        </p>

        <h2
          className={
            crimsonText.className +
            " text-3xl text-center font-semibold mt-6 mb-2 "
          }
        >
          {t("scaling")}
        </h2>
        <p className="text-center">
          {t("text-1")}
        </p>
        <p className="text-center">
          {t("text-2")}
        </p>
        <div className="flex gap-2 justify-center items-center flex-col">
          <p>{t("trustedBy")}</p>
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
            <p>+ {t("more")}</p>
          </div>
          <Link className="underline flex items-center text-sm gap-1" href={"/https://www.throughlinecare.com/"}>
          {t("becomePartner")}
          &rarr;
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-4 mt-6">
        {Array.from({ length: 3}, (_, i) => (
            <PartnerCard classSets="bg-bg-6 text-bg-1" key={i}  name={t(`cards.card-${i + 1}-title`) } logo={cards[i]()} info={t(`cards.card-${i + 1}-info`)}/>
          ))}
        </div>
        <Link target="_blank" href={"https://www.throughlinecare.com/"} className="mt-5 bg-bg-6 hover:bg-zinc-200 hover:shadow-theme flex items-center rounded-lg text-black font-semibold py-2 justify-center gap-2 w-full">
          {t("learnMore")} &rarr;
        </Link>
      </div>
    </div>
  );
}
