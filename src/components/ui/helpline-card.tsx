"use client"
import React from "react";
import Link from "next/link";
import { Clock3, SquareArrowOutUpRight } from "lucide-react";
import { IoPersonCircle, IoCallSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import Verified from "@/assets/verified";

import { Helpline } from "@/types/types";
import { extractDomain, isOpen } from "@/lib/utils-functions";
import { useTranslations } from "@/hooks/useTranslations";

interface HelplineCardProps {
  helpline: Helpline;
}

export default function HelplineCard({ helpline }: HelplineCardProps) {
  const isOpenNow = isOpen(helpline.hours ?? "");
  const isAlwaysOpen = helpline?.hours?.includes("24/7");

  const formattedName = helpline.name.replace(/\s/g, "-");

  const t = useTranslations("HelplineCard")
  const c = useTranslations("helpline-and-Country")

  return (
    <div className="w-def flex flex-col rounded-xl p-6 bg-white shadow-theme">

      <div className="flex justify-between items-center">
        <Link  className="text-xl font-semibold max-w-[80%]" href={`/organizations/${formattedName}`}>
          {helpline.name}
        </Link>
        <Verified />
      </div>


      {helpline.specializations?.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-2">
          {helpline.specializations.map((spec, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-lg text-sm bg-zinc-100 text-texts-1"
            >
              {
                c(`topics.${spec}`)
              }
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 mt-3 px-2 py-2 -ml-3">
        <Clock3 size={20} />
        <div className="font-semibold text-texts-6">
          {isAlwaysOpen ? (
            <p className="text-green-600">{t("open")}</p>
          ) : isOpenNow ? (
            <p>{t("open")}</p>
          ) : (
            <p>{t("closed")}</p>
          )}
        </div>

        {isAlwaysOpen ? (
          <span className="px-3 py-1 rounded-lg text-sm bg-texts-4 text-white">
            {t("alwaysOpen")}
          </span>
        ) : (
          <Link
            href={`/organizations/${formattedName}?expand=true`}
            target="_blank"
            className="flex items-center gap-2 px-2 py-2 hover:bg-teal-50 rounded-lg"
          >
            <span className="text-sm font-semibold text-texts-6">
              {t("see")}
            </span>
            <SquareArrowOutUpRight size={16} color="#2B8E94" />
          </Link>
        )}
      </div>

      <div className="flex items-center gap-2 px-2 py-2 -ml-3">
        <IoPersonCircle size={20} />
        <p>{t("Counselors")}</p>
      </div>

      {helpline.phone && (
        <div className="flex">
          <Link
            href={`tel:${helpline.phone}`}
            className="flex items-center gap-2 px-2 py-2 -ml-3 hover:bg-teal-50 rounded-lg"
          >
            <IoCallSharp size={20} />
            <span className="font-bold text-texts-6">{helpline.phone}</span>
          </Link>
        </div>
      )}

      {helpline.website && (
        <div className="flex">
          <Link
            href={helpline.website}
            target="_blank"
            className="flex items-center gap-2 px-2 py-2 -ml-3 hover:bg-teal-50 rounded-lg"
          >
            <TbWorld size={20} />
            <span className="font-bold text-texts-6">
              {extractDomain(helpline.website)}
            </span>
          </Link>
        </div>
      )}

      <hr className="w-full bg-texts-1 my-4" />

      {helpline.phone && (
        <div className="flex flex-col gap-2 pl-8 mt-2">
          <Link
            href={`tel:${helpline.phone}`}
            className="bg-texts-6 w-14 h-14 flex items-center justify-center rounded-full"
          >
            <IoCallSharp size={30} color="white" />
          </Link>
          <p className="uppercase">{t("call")}</p>
        </div>
      )}
    </div>
  );
}
