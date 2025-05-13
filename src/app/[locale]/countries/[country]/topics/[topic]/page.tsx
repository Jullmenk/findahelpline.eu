import React from 'react'
import { countries } from '@/lib/countries'
import CountryAndHelplines from '@/components/templates/country-and-helplines/country-and-helplines'
import NotFound from '@/app/[locale]/not-found'
import { getTranslations } from 'next-intl/server';


type Props = {
  params: {
    country: string;
    locale: string;
    topic: string;
  }
};

export default async function Topic({ params }: Props) {

  const { country,topic } =   params || {};
  const selectedCountry = countries.find((c)=>c.code.toLowerCase()===country.toLowerCase())

  const t = await getTranslations("CountryAndHelplines")
  const c = await getTranslations("helpline-and-Country")
  
  if (!country || !selectedCountry) return <NotFound />;
  return (
    <CountryAndHelplines
      country={country}
      selectedCountry={selectedCountry}
      HelplinesIn={t("title")}
      Find={t("Find")}
      About={t("About")}
      byTopic={t("byTopic")}
      topic={c(`topics.${topic?.replace(/-/g, " ").toLowerCase()}`)}
    />
  );
}
