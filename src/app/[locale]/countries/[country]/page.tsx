

import React from "react";
import CountryAndHelplines from "@/components/templates/country-and-helplines/country-and-helplines";
import { countries } from "@/lib/countries";
import NotFound from "@/components/templates/not-found/not-found";
import { getTranslations } from "next-intl/server";

type Props = {
  params: {
    country: string;
    locale: string;
  };
  searchParams: {
    topic?: string[];
  };
};

export default async function CountryPage({ params, searchParams }: Props) {
  const { country } = params || {};
  const {topic: selectedTopics} =  searchParams || {};

  const selectedCountry = countries.find((c)=>c.code.toLowerCase()===country.toLowerCase())

  const t = await getTranslations("CountryAndHelplines")
  
  if (!country || !selectedCountry) return <NotFound />;
  

  return (
    <CountryAndHelplines
      country={country}
      selectedCountry={selectedCountry}
      selectedTopics={selectedTopics}
      HelplinesIn={t("title")}
      Find={t("Find")}
      About={t("About")}
      byTopic={t("byTopic")}
    />
  );
}