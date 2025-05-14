import React from "react";
import Hero from "./hero";
import Partners from "./partners";
import HelpLineSection from "./help-line-section";
import ReasonsToContact from "./reasons-to-contact";
import CompaniesAndOrganization from "./companies-and-organization";
import { useConfig } from "@/context/useContext";
import { countries } from "@/lib/countries";

export default function HomeSection() {
  const { filteredHelplines, helplines } = useConfig();
  return (
    <div className="w-full flex flex-col items-center">
      <Hero filteredHelplines={filteredHelplines} />
      {filteredHelplines.length === 0 && (
        <>
          <Partners
            countHelplines={helplines.length}
            countCountries={countries.length}
          />
          <HelpLineSection />
          <ReasonsToContact />
          <CompaniesAndOrganization />
        </>
      )}
    </div>
  );
}
