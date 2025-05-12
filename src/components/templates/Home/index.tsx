import React from "react";
import Hero from "./hero";
import Partners from "./partners";
import CountryCarousel from "@/components/ui/country-carousel";
import HelpLineSection from "./help-line-section";
import ReasonsToContact from "./reasons-to-contact";
import CompaniesAndOrganization from "./companies-and-organization";
import { useConfig } from "@/context/config";

export default function HomeSection() {
  const {filteredHelplines} = useConfig()
  return (
    <div className="w-full flex flex-col items-center">
      <Hero filteredHelplines={filteredHelplines} />
      {
      filteredHelplines.length===0&&
     ( 
     <>
     <Partners />
      <HelpLineSection />
      <ReasonsToContact />  
      <CompaniesAndOrganization />
      </>)}
      {/* <CountryCarousel /> */}
    </div>
  );
}
