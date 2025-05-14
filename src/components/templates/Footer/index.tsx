"use client"
import React from "react";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import { Link } from "@/i18n/nagivation";
import { SquareArrowOutUpRight } from "lucide-react";


export default function Footer() {
  const year = new Date().getFullYear();


  const t = useTranslations("Footer");
  const l = useTranslations("Links");
  return (
    <footer className="bg-[#f5f9fc] flex justify-center items-center text-sm text-gray-700 py-10 px-4">
      <div className="w-full px-6 sm:px-0 sm:w-def flex flex-col items-center text-center gap-4">
        <Image
          src="/svg/find-a-helpline-brandmark.svg"
          alt="Logo"
          width={70}
          height={70}
        />
        <div>
          <div>
            <div>
              <p className="text-start">
                {t("title-1")}

              </p>
              <Link
                href="https://www.throughline.org"
                className="underline hover:text-blue-500"
                target="_blank"
              >
                throughLine
              </Link>
            </div>
            {t("title-2")},{" "}
            <Link href="https://www.throughline.org" className="underline hover:text-blue-500">
              {t("getIntouch")}
            </Link>
            .
          </div>
        </div>

        <hr className="w-[90%] border-t border-gray-300 my-4" />

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-3">
            <Link href={"/#about"} className="text-start underline">
              {l(`name-2`)}
            </Link>
            <Link href={"/faq"} className="text-start underline">
              {l(`name-3`)}
            </Link>
            <Link href={"https://www.throughline.org"} className="text-start flex items-center gap-1 underline">
              {l(`name-4`)}
              <SquareArrowOutUpRight size={12} />
            </Link>
            <Link href={"/terms"} className="text-start underline">
              {l(`name-6`)}
            </Link>
            <Link href={"/contact"} className="text-start underline">
              {l(`name-5`)}
            </Link>

            <Link href={"/privacy"} className="text-start underline">
              {l(`name-7`)}
            </Link>
          
        </div>

        <p className="text-xs text-gray-500 mt-4">
          {t("Copyright")} {year}©{"  "}
          <Link
            href="https://www.throughline.org"
            className="underline hover:text-blue-500"
            target="_blank"
          >
            ThroughLine Limited
          </Link>
          <br />
          {t("rights")}
        </p>
      </div>
    </footer>
  );
}
