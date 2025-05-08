
import React from "react";
import { Crimson_Text } from 'next/font/google'
const crimsonText = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] })

type PartnerCard = {
  name: string;
  logo: React.JSX.Element;
  info: string;
};


export default function PartnerCard({ name, logo, info }: PartnerCard) {
  return (
    <div className="flex gap-6 items-center p-4 justify-center rounded-xl bg-bg-0">
      {logo}
      <div className="w-[80%] text-texts-4">
        <h2 className={crimsonText.className + " font-semibold text-2xl"}>{name}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
}
