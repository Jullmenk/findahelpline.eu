"use client";

import React, { memo, useEffect, useState } from "react";
import { useConfig } from "@/context/config";
import HelplineCard from "@/components/ui/helpline-card";
import { Country } from "@/lib/countries";
import Link from "next/link";
import { specializations } from "@/data/utils";
import LoadingContainer from "../loading/loading-container";
import NotFound from "@/app/[locale]/not-found";

type Props = {
  country: string;
  selectedCountry?: Country;
  topic?: string;
  selectedTopics?: string[];
};

export default memo(function CountryAndHelplines({
  country,
  selectedCountry,
  topic,
  selectedTopics
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

  const pageTopic = specializations.find(
    (spec) => spec.en.toLowerCase() === topic?.replace(/-/g, " ").toLowerCase()
  );

  if (loading) {
    return <LoadingContainer />;
  }
  if (
    !loading &&
    (filteredHelplines.length === 0 ||
      (filteredHelplines.length > 0 && topic && !pageTopic))
  ) {
    return <NotFound />;
  }


  return (
    <>
      <div className="w-full bg-bg-0 flex flex-col justify-center items-center">
        <div className="w-def min-h-[80dvh] flex flex-col gap-4 py-10 ">
          <h2 className="text-xl">
            Linhas de apoio de {selectedCountry?.name}{" "}
            {pageTopic?.pt && `sobre ${pageTopic?.pt}`}
          </h2>
          {filteredHelplines
            .filter((helpline) =>
              helpline.specializations.some((spec) => {
                const normalizedSpec = spec.toLowerCase();

                if (selectedTopics) {
                  return selectedTopics.some((t) =>
                    normalizedSpec.includes(t.replace(/-/g, " ").toLowerCase())
                  );
                }

                return normalizedSpec.includes(
                  topic?.replace(/-/g, " ").toLowerCase() ?? ""
                );
              })
            )
            .map((helpline, index) => (
              <HelplineCard key={helpline.id ?? index} helpline={helpline} />
            ))}
        </div>
        <div className="w-full bg-white py-10 flex justify-center items-center">
          <div className="w-def flex flex-col gap-4">
            <h2 className="text-xl font-semibold">
              Encontre assistência em
              <Link
                className="mx-1 underline"
                href={`/countries/${selectedCountry?.code.toLowerCase()}`}
              >
                {selectedCountry?.name}
              </Link>
              por tópico
            </h2>
            <ul className="pl-12 list-disc">
              {spec.map((spec, index) => (
                <li key={index}>
                  <Link
                    href={`/countries/${country}/topics/${spec.en
                      .replace(/\s/g, "-")
                      .toLowerCase()}`}
                    className="underline"
                  >
                    {spec.pt}
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
