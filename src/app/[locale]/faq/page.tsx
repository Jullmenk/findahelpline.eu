"use client";
import { Button } from "@/components/ui/button";
import { crimsonText } from "@/fonts/crismonText";
import Image from "next/image";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import { useLocale } from "next-intl";

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const locale = useLocale();
  const t = useTranslations("Faqs");

  return (
    <div className="w-full flex justify-center items-center bg-white py-16">
      <div className="w-full px-6 sm:px-0 sm:w-def flex flex-col gap-3">
        <h2
          className={
            crimsonText.className +
            " text-3xl font-semibold mt-6 mb-2 text-gray-800 leading-8"
          }
        >
          {t("title")}
        </h2>

        <div className="flex flex-col">
          <div className="flex flex-col gap-6">
            <div className="flex justify-center items-center w-full">
              <div className="relative w-[90%] h-60">
                <Image
                  fill
                  src="/img/two-people-bandaging-heart.png"
                  alt="Helpline Illustration"
                />
              </div>
            </div>

            <p
              className={
                crimsonText.className +
                " text-2xl font-semibold  text-gray-800 text-start"
              }
            >
              {t("intro.p1")}
            </p>
            {
              Array.from({ length: 4 }, (_, index) => index + 1).map((index) => (
                <p key={index}>{t(`intro.p${index+1}`)}</p>
              ))
            }

            <div className="text-left w-full space-y-2">

              
              {Array.from({ length: 8 }, (_, index) => index + 1).map((index) => (
                <div
                  key={index}
                  className={`${
                    open === index ? "max-h-[100vh]" : "max-h-14"
                  } w-full transition-all border-b border-border-0 duration-100 bg-white pt-2 pb-4 overflow-hidden flex flex-col items-start justify-start`}
                >
                  <div
                    className="w-full flex flex-nowrap justify-between items-center cursor-pointer"
                    onClick={() => setOpen(open === index ? null : index)}
                  >
                    <Button
                      variant={"ghost"}
                      className={
                        crimsonText.className +
                        " px-0 hover:bg-transparent text-wrap text-left hover:text-texts-4 text-2xl font-semibold text-texts-4"
                      }
                    >
                      {t(`questions.title-${index}.q`)}
                    </Button>
                    <div
                      className={` transition-all duration-300 ${
                        open === index ? "rotate-180" : ""
                      }`}
                    >
                      <IoChevronDownOutline
                        size={20}
                        color="rgb(148, 188, 217)"
                      />
                    </div>
                  </div>
                  <div
                    className="w-full formated flex flex-col gap-3 mt-6"
                  >
                    {
                      Array.from({ length: 9 }, (_, i) => i + 1).map((i) => {
                        if(t(`questions.title-${index}.a.p${i}`) === "") return null;
                        return(
                        <p key={i}>{t(`questions.title-${index}.a.p${i}`)}</p>
                      )})
                    }
                    </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={`/${locale}`}
                className="mt-5 bg-bg-1 py-2 text-white font-semibold hover:bg-bg-5 flex items-center rounded-xl justify-center gap-2 w-full"
              >
                {t("findAHelpline")} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
