import React from "react";
import Hero from "./hero";
import Partners from "./partners";
import CountryCarousel from "@/components/ui/country-carousel";
import HelpLineSection from "./help-line-section";
import ReasonsToContact from "./reasons-to-contact";
import CompaniesAndOrganization from "./companies-and-organization";

export default function HomeSection() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <Partners />
      <HelpLineSection />
      <ReasonsToContact />  
      <CompaniesAndOrganization />
      {/* <CountryCarousel /> */}
    </div>
  );
}
