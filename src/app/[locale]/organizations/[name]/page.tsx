"use client";

import Verified from "@/assets/verified";
import NotFound from "@/components/templates/not-found/not-found";
import { useConfig } from "@/context/config";
import { useTranslations } from "@/hooks/useTranslations";
import { extractDomain, isOpen } from "@/lib/utils-functions";
import { Clock3, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCallSharp, IoPersonCircle } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

export default function Organizations({
  params,
}: {
  params: { name: string; locale: string };
}) {
  const { helplines } = useConfig();
  const decodedName = decodeURIComponent(params.name);

  const helpline = helplines.find(
    (helpline) => helpline.name.replaceAll(" ", "-") === decodedName
  );

  const isOpenNow = isOpen(helpline?.hours ?? "");
  const isAlwaysOpen = helpline?.hours?.includes("24/7");
  const formattedName = helpline?.name?.replace(/\s/g, "-");

  const t = useTranslations("HelplineCard");
  const c = useTranslations("helpline-and-Country");
  const h = useTranslations("Hero");
  const o = useTranslations("organizations");
  const l = useTranslations("languages");

  if (!helpline) return <NotFound />;

  return (
    <div className="flex w-full justify-center py-10 items-center">
      <div className="w-organization flex flex-col rounded-xl bg-white">
        <div className="flex items-center gap-2 pb-2 border-b border-border mb-5">
          <Link
          className="hover:underline text-texts-1"
            href={`/${
              params.locale
            }/countries/${helpline?.countryRel.code.toLowerCase()}`}
          >
            {h(`countries.${helpline?.countryRel.code}`)}
          </Link>
          <span>&#62;</span>
          <p>{helpline.name}</p>
        </div>

        <h1 className="text-2xl font-semibold block">
          {helpline.name}{" "}
          <div className="inline-block">
            <Verified size={6} />
          </div>
        </h1>

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
            <p>{helpline.hours}</p>
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

        <div className="w-full flex flex-col gap-3 mt-6">
          <h2 className="font-semibold text-xl">
            {o("where", { name: helpline.name })}
          </h2>
          <p>
            {o("where-answer", {
              country: h(`countries.${helpline?.countryRel.code}`),
            })}
          </p>
          <h2 className="font-semibold text-xl">
            {o("whatLang", { name: helpline.name })}
          </h2>
          <div className="flex gap-1 flex-wrap">
            {helpline.languages.map((elem, i) => (
              <p key={i}>{l(`${elem.toLocaleLowerCase()}`)} {i < helpline.languages.length - 1 && ","}</p>
            ))}
          </div>

          <h2 className="font-semibold text-xl">
            {o("talkto", { name: helpline.name })}
          </h2>
          {helpline.specializations?.length > 0 && (
            <div className="flex gap-2 flex-wrap mt-2">
              {helpline.specializations.map((spec, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-lg text-sm bg-zinc-100 text-texts-1"
                >
                  {c(`topics.${spec}`)}
                </span>
              ))}
            </div>
          )}
        </div>

        <hr className="w-full bg-texts-1 my-4" />
        <div className="relative w-full h-[400px] mt-8">
          <Image
            src={"/img/teletherapy-counselor-supporting-crying-woman.png"}
            alt={"teletherapy-counselor-supporting-crying-woman"}
            fill
          />
        </div>
        <h1 className="text-center text-xl font-semibold mt-6 mb-2 text-gray-800">
          {o("nowWhat")}
        </h1>
        <Link
          href={`/${params.locale}/faq`}
          className="mt-5 bg-bg-1 py-2 text-white font-semibold hover:bg-bg-5 flex items-center rounded-xl justify-center gap-2 w-full"
        >
          {o("findAnother")} &rarr;
        </Link>
      </div>
    </div>
  );
}
