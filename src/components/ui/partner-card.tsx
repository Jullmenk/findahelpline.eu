
import React from "react";
import { Crimson_Text } from 'next/font/google'
const crimsonText = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] })

type PartnerCard = {
  name: string;
  logo: React.JSX.Element;
  info: string;
  classSets: string;
};


export default function PartnerCard({ name, logo, info, classSets }: PartnerCard) {
  return (
    <div key={name} className={`flex gap-6 items-center p-4 justify-center rounded-xl ${classSets}`}>
      {logo}
      <div className="w-[80%] ">
        <h2 className={crimsonText.className + " font-semibold text-2xl"}>{name}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
}
