import Image from "next/image";
import React from "react";
import PartnerCard from "@/components/ui/partner-card";
import Rapido from "@/assets/rápido";
import Confidencial from "@/assets/confidencial";
import FaleComAPessoa from "@/assets/fale-com-a-pessoa";
import { crimsonText } from "@/fonts/crismonText";
import { useTranslations } from "@/hooks/useTranslations";
import { Link } from "@/i18n/nagivation";

export default function Partners({
  countHelplines,
  countCountries,
}: {
  countHelplines: number;
  countCountries: number;
}) {
  const t = useTranslations("Partners");
  const cards = [Rapido,FaleComAPessoa,Confidencial];
  return (
    <div className="w-full flex justify-center pb-14 items-center bg-bg-2">
      <div className="min-h-96 w-def flex flex-col items-center py-5 gap-4">
        <div className="w-full flex flex-col gap-5 mb-8">
          <h1 className="border-b border-border-0 text-texts-1 text-center pb-4">
            {t("title")}
          </h1>
          <div className="flex justify-center gap-4">
            <div className="relative w-56 h-10">
              <Image fill src="/img/iasp-logo-grey.png" alt="IASP Logo" />
            </div>
            <div className="relative w-24 h-10">
              <Image fill src="/svg/LLI-logo-grey.svg" alt="LLI Logo" />
            </div>
          </div>
          {countHelplines && countCountries && (
            <p className="border-b border-border-0 text-texts-1 text-center pb-4">
              {t("text-1", { countHelplines, countCountries })}
            </p>
          )}
        </div>

        <h2
          id="about"
          className={`${crimsonText.className} text-texts-3 text-center leading-8 font-semibold text-3xl`}
        >
          {t("text-2")}
        </h2>

        <div className="relative w-[80%] h-44 my-5">
          <Image
            fill
            src="/img/man-in-hammock-texting-hotline.png"
            alt="man-in-hammock-texting-hotline"
          />
        </div>

        <div className="flex flex-col justify-center gap-4">
          {Array.from({ length: 3 }, (_, i) => (
            <PartnerCard
              classSets="bg-bg-0 text-texts-4"
              key={i}
              name={t(`cards.card-${i + 1}-title`)}
              logo={cards[i]()}
              info={t(`cards.card-${i + 1}-info`)}
            />
          ))}
        </div>

        <div className="mt-5">
          <h1
            className={
              crimsonText.className + " text-3xl font-bold mb-4 text-gray-800"
            }
          >
            {t("aloneTitle")}
          </h1>
          <p className=" mb-4 text-lg font-semibold ">{t("aloneSubtitle")}</p>

          <div>
            <h2
              className={
                crimsonText.className +
                " text-2xl font-semibold mt-6 mb-2 text-gray-800"
              }
            >
              {t("helplineConcept")}
            </h2>
            {Array.from({ length: 2 }, (_, i) => (
              <p key={i} className="text-gray-700 mb-4">
                {t(`helplineConceptText-${i + 1}`)}
              </p>
            ))}
          </div>
          <div>
            <h2
              className={
                crimsonText.className +
                " text-2xl font-semibold mt-6 mb-2 text-gray-800"
              }
            >
              {t("helplineConceptSupport")}
            </h2>
            {Array.from({ length: 2 }, (_, i) => (
              <p key={i} className="text-gray-700 mb-4">
                {t(`helplineConceptSupportText-${i + 1}`)}
              </p>
            ))}
          </div>

          <div>
            <h2
              className={
                crimsonText.className +
                " text-2xl font-semibold mt-6 mb-2 text-gray-800"
              }
            >
              {t("talkTohelpleAbout")}
            </h2>
            {Array.from({ length: 3 }, (_, i) => (
              <p key={i} className="text-gray-700 mb-4">
                {t(`talkTohelpleAboutText-${i + 1}`)}
              </p>
            ))}
          </div>
          <div>
            <h2
              className={
                crimsonText.className +
                " text-2xl font-semibold mt-6 mb-2 text-gray-800"
              }
            >
              {t("findHelpline")}
            </h2>
            {Array.from({ length: 3 }, (_, i) => (
              <p key={i} className="text-gray-700 mb-4">
                {t(`findHelplineText-${i + 1}`)}
              </p>
            ))}
          </div>
        </div>
        <Link
          href="/faq"
          className="mt-5 bg-bg-1 py-2 text-white font-semibold hover:bg-bg-5 flex items-center rounded-xl justify-center gap-2 w-full"
        >
          {t("whatToExpectButton")} &rarr;
        </Link>
      </div>
    </div>
  );
}
