"use client";
import Hero from "@/components/templates/Home/hero";
import React from "react";
import { useConfig } from "@/context/useContext";
import { Button } from "@/components/ui/button";
import { IoChevronDownOutline } from "react-icons/io5";
import Link from "next/link";
import { crimsonText } from "@/fonts/crismonText";
import { countries } from "@/lib/countries";
import { specializations } from "@/data/utils";
import { useTranslations } from "@/hooks/useTranslations";

type Props = {
  params: {
    topic: string;
    locale: string;
  }
};

export default function TopicsPage({params}:Props) {
  const { filteredHelplines } = useConfig();

  const t = useTranslations("topicsPage")
  const c = useTranslations("helpline-and-Country")
  const h = useTranslations("Hero")
  const [dropDownOpen, setDropDownOpen] = React.useState(false);  
  const spec = specializations.find((spec)=>spec.en.toLowerCase()===params?.topic.replace(/-/g, " ").toLowerCase())
  return (
    <div>
      <Hero filteredHelplines={filteredHelplines} herotext={spec?.pt}/>

        <div className="w-full flex flex-col py-16 bg-white justify-center items-center">
          <div className="flex w-def flex-col gap-2">
            <h2
              className={
                crimsonText.className +
                " text-3xl font-semibold mt-6 mb-2 text-gray-800"
              }
            >
              {t("title")} {c(`topics.${spec?.en}`)}
            </h2>
            <p>{t("nearYou")}</p>
          </div>
          <div
            className={`${
              dropDownOpen ? "max-h-screen" : "max-h-14"
            } w-def transition-all duration-300 bg-white pt-2 pb-4 rounded-lg overflow-hidden flex flex-col items-start justify-start`}
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
                {c("europe")}
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
                  href={`/${params.locale}/countries/${country.code.toLowerCase()}/topics/${params.topic}`}
                  key={index}
                  className="flex px-5 py-2 hover:shadow-theme rounded-lg text-sm bg-zinc-100 hover:bg-zinc-200 justify-between items-center"
                >
                  {h(`countries.${country.code}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
