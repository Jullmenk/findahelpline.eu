import Lang from "@/assets/lang";
import { Button } from "@/components/ui/button";
import { languages } from "@/data/utils";
import { useTranslations } from "@/hooks/useTranslations";
import { Check, X } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type LangContainerProps = {
  close: () => void;
};

export default function LangContainer({ close }: LangContainerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const t = useTranslations("LangContainer");

  const handleLanguageChange = (newLang: string) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");

    router.push(newPath);
    close();
  };

  return (
    <div className="w-[80dvw] sm:w-[30dvw] flex flex-col gap-5 pt-4 px-6">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Lang color="black" />
          <h2 className="text-xl sm:text-2xl font-semibold">{t("title")}</h2>
        </div>
        <Button
          onClick={close}
          className="flex px-5 py-2 hover:shadow-theme rounded-lg text-sm bg-zinc-100 hover:bg-zinc-200 items-center gap-2"
        >
          <p className="text-black">{t("close")}</p>
          <X color="black" size={24} />
        </Button>
      </div>

      <div className="flex flex-col">
        {languages.map((lang, index) => {
          const isActive = locale === lang.path.replace("/", "");

          return (
            <div
              key={index}
              onClick={() => handleLanguageChange(lang.path.replace("/", ""))}
              className={`${
                isActive ? "sm:bg-zinc-100 text-texts-4" : ""
              } pl-5 hover:bg-zinc-50 py-4 flex gap-2 items-center cursor-pointer`}
            >
              <div className="min-w-[20px] mr-3">
                {isActive && <Check color="rgb(148, 188, 217)" size={25} />}
              </div>
              <p>{lang.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
