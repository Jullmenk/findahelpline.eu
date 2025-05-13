import React from "react";
import CountryAndHelplines from "@/components/templates/country-and-helplines/country-and-helplines";
import { countries } from "@/lib/countries";
import NotFound from "@/app/[locale]/not-found";

export default async function Country({ params,searchParams }) {
  const { country } = await  params || {};
  const {topic: selectedTopics} = await searchParams || {};
console.log(selectedTopics)
  const selectedCountry = countries.find((c)=>c.code.toLowerCase()===country.toLowerCase())
  
  if (country && selectedCountry) {
    return <CountryAndHelplines selectedCountry={selectedCountry} country={country} selectedTopics={selectedTopics} />;
  }else{
    return <NotFound />
  }
}
