
import React, { useState } from "react";
import Link from "next/link";
import { specializations } from "@/data/utils";
import { Button } from "./button";
import { useConfig } from "@/context/useContext";
import { useLocale } from "next-intl";
import { useTranslations } from "@/hooks/useTranslations";

export default function CountryCard() {
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string[]
  >([]);
  const [showAll, setShowAll] = useState<boolean>(false);
  const { spec, searchQuery } = useConfig();
  const locale = useLocale();

  const toggleSpecialization = (value: string) => {
    setSelectedSpecialization((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const t = useTranslations("helpline-and-Country")
  const c = useTranslations("CountryCard")

  return (
    <div className="max-h-screen w-full sm:w-def transition-all duration-300 text-center bg-white px-4 pt-2 pb-4 rounded-lg flex flex-col items-center justify-center">
      <h2 className=" text-xl font-semibold mt-6 mb-2 text-gray-800">
        {c("title")}
      </h2>
      <div className="flex flex-col gap-2 w-full items-center justify-center">
        <p className="text-sm text-texts-4">{c("common")}</p>
        <Link
          href={`/${locale}/topics/suicidal-thoughts`}
          className="flex px-5 max-w-48 py-2 hover:shadow-theme rounded-lg font-semibold text-white bg-texts-4 hover:bg-bg-7 justify-between items-center"
        >
          {c("suicidal-thoughts")} &rarr;
        </Link>
        <p className="text-sm text-texts-4">
          {c("select")} &#40;{c("optional")}&#41;
        </p>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap gap-2 mt-6">
        {spec
          .slice(0, showAll ? specializations.length : 10)
          .map((spec, index) => (
            <Button
              key={index}
              className={`px-2 py-1 hover:shadow-theme font-normal rounded-lg text-[13px] ${
                selectedSpecialization.includes(spec.en)
                  ? "bg-texts-4 text-white hover:bg-bg-7"
                  : "bg-zinc-100 text-texts-1 hover:bg-zinc-200"
              } `}
              onClick={() => toggleSpecialization(spec.en)}
            >
              {t(`topics.${spec.en}`)}
            </Button>
          ))}
      </div>
      {!showAll && spec.length > 10 && (
        <div>
          <Button
            className="px-5 py-2 mt-2 hover:shadow-theme font-normal rounded-lg text-[13px] bg-zinc-100 text-texts-1 hover:bg-zinc-200"
            onClick={() => setShowAll(true)}
          >
            {c("showMore")}
          </Button>
        </div>
      )}
      <Link
        href={{
          pathname: `/${locale}/countries/${searchQuery.toLowerCase()}`,
          query: selectedSpecialization.length
            ? {
                topic: selectedSpecialization.map((spec) =>
                  spec.toLowerCase().replace(/\s+/g, "-")
                ),
              }
            : {},
        }}
        className="mt-5 bg-bg-1 py-2 text-white font-semibold hover:bg-bg-5 flex items-center rounded-xl justify-center gap-2 w-[80%]"
      >
        {c("procure")} &rarr;
      </Link>
    </div>
  );
}
