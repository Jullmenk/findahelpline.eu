import { SearchBar } from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "@/i18n/nagivation";
import React from "react";
import { useConfig } from "@/context/useContext";
import { Helpline } from "@/types/types";
import CountryCard from "@/components/ui/country-card";
import { useTranslations } from "next-intl";
export default function Hero({
  filteredHelplines,
  herotext
}: {
  filteredHelplines: Helpline[];
  herotext?:string
}) {
  const { userCountry,updateFilteredHelplines } = useConfig();

  const t = useTranslations("Hero")

  return (
    <div className="w-full flex justify-center items-center bg-bg-0">
      <div className="min-h-96 py-16 px-6 sm:px-0 sm:w-def flex justify-center items-center bg-bg-0 flex-col gap-4">
        {filteredHelplines.length === 0 && (
          <>
            <div className="relative w-64 h-14">
              <Image
                fill
                src="/svg/findahelpline-logo.svg"
                alt="Find a Helpline Logo"
              />
            </div>
            <h1 className="text-texts-0 text-xl text-center font-normal">
              {t("title")}
            </h1>
          </>
        )}
        <SearchBar t={t}/>

        {filteredHelplines.length === 0 ? (
          <>
            <div className="flex flex-col justify-center items-center">
              <p className="text-base text-texts-1">{t("text-3")}</p>
              {userCountry && (
                <Button
                  variant={"ghost"}
                  className="underline text-base hover:bg-transparent hover:text-texts-0 text-texts-0 font-normal"
                  onClick={() => updateFilteredHelplines(userCountry.code)}
                >
                  {t("text-1")} {userCountry.name}
                </Button>
              )}
              <Link
                className="underline text-base text-texts-0 font-normal"
                href={"/faq"}
              >
                {t("text-2")}
              </Link>
            </div>
          </>
        ):
        (
          <CountryCard/>
        )}

      </div>
    </div>
  );
}
