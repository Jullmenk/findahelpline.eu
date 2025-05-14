import React from "react";
import { menu } from "@/data/menu";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "@/hooks/useTranslations";

export default function MenuContainer({close}: {close: () => void}) {
  const locale = useLocale();
  const t = useTranslations("Links");
  return (
    <div className="flex flex-col mt-2 w-[70dvw] px-6 sm:px-0 sm:w-[13.5dvw]">
      {menu.map((item, index) => (
        <Link key={index} className="px-4 py-3 flex items-center gap-6 hover:bg-zinc-100" href={item.href.includes("http") ? item.href : "/" + locale + item.href} onClick={close}>
          {item.icon}
          <p>{t(`name-${index+1}`)}</p>
          {item.href === "https://www.throughlinecare.com/" && <SquareArrowOutUpRight size={14} />}
        </Link>
      ))}
      <hr className="bg-border-0" />
      <Link className="px-4 py-3 text-sm text-border-0 flex items-center gap-6 hover:bg-zinc-100" href={"/" + locale + "/privacy"} onClick={close}>
        {t("name-7")}
      </Link>
      <Link className="px-4 py-3 text-sm text-border-0 flex items-center gap-6 hover:bg-zinc-100" href={"/" + locale + "/terms"} onClick={close}>
        {t("name-6")}
      </Link>
    </div>
  );
}
