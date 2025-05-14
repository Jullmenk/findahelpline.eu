"use client";

import React, { memo, use, useEffect, useState } from "react";
import { useConfig } from "@/context/useContext";
import HelplineCard from "@/components/ui/helpline-card";
import { Country } from "@/lib/countries";
import Link from "next/link";
import LoadingContainer from "../loading/loading-container";
import NotFound from "@/components/templates/not-found/not-found";
import { useLocale } from "next-intl";

type Props = {
  country: string;
  selectedCountry?: Country;
  topic?: string;
  selectedTopics?: string[];
  HelplinesIn: string;
  About: string;
  Find: string;
  byTopic: string;
  topics?: string;
};

export default memo(function CountryAndHelplines({
  country,
  HelplinesIn,
  About,
  Find,
  byTopic,
  selectedCountry,
  topic,
  selectedTopics,
}: Props) {
  const { filteredHelplines, updateFilteredHelplines, spec } = useConfig();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    updateFilteredHelplines(country);
  }, [country, updateFilteredHelplines]);

  useEffect(() => {
    setLoading(false);
  }, [filteredHelplines]);

  const filtered = filteredHelplines
  .filter((helpline) =>
    helpline.specializations.some((spec) => {
      const normalizedSpec = spec.toLowerCase();
      if (selectedTopics&&Array.isArray(selectedTopics)) {
        return selectedTopics.some((t) =>
          normalizedSpec.includes(t.replace(/-/g, " ").toLowerCase())
        );
      }else if(selectedTopics){
        topic = selectedTopics
      }
      return normalizedSpec.includes(topic?.toLowerCase() ?? "");
    })
  );

  const locale = useLocale();
  
  if (loading) return <LoadingContainer />;

  if (
    !loading &&
    (filteredHelplines.length === 0 ||
    (filteredHelplines.length > 0 && topic && filtered.length===0))) return <NotFound />;


  return (
    <>
      <div className="w-full bg-bg-0 flex flex-col justify-center items-center">
        <div className="w-full px-6 sm:px-0 sm:w-def min-h-[80dvh] flex flex-col gap-4 py-10 ">
          <h2 className="text-xl sm:text-left text-center">
            {HelplinesIn} {selectedCountry?.name}{" "}
            {topic && ` ${About} ${topic}`}
          </h2>
          {filtered
            .map((helpline, index) => (
              <HelplineCard key={helpline.id ?? index} helpline={helpline} />
            ))}
        </div>
        <div className="w-full bg-white py-10 flex justify-center items-center">
          <div className="w-full px-6 sm:px-0 sm:w-def flex flex-col gap-4">
            <h2 className="text-xl font-semibold">
              {Find}
              <Link
                className="mx-1 underline"
                href={`/${locale}/countries/${selectedCountry?.code.toLowerCase()}`}
              >
                {selectedCountry?.name}
              </Link>
              {byTopic}
            </h2>
            <ul className="pl-12 list-disc">
              {spec.map((spec, index) => (
                <li key={index}>
                  <Link
                    href={`/${locale}/countries/${country}/topics/${spec.en
                      .replace(/\s/g, "-")
                      .toLowerCase()}`}
                    className="underline"
                  >
                    {spec.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
