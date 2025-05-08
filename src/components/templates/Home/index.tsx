import React from "react";
import Hero from "./hero";
import Partners from "./partners";

export default function HomeSection() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Partners />
    </div>
  );
}
