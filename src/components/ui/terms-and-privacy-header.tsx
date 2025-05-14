"use client";
import { Link } from "@/i18n/nagivation";
import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { usePathname } from "next/navigation";

export default function TermsAndPrivacyHeader() {
  const t = useTranslations("Links");
  const path = usePathname();
  const isPrivacy = path.includes("/privacy");
  return (
    <div className="w-full flex items-center justify-between">
      <Link
        href="/privacy"
        className={` ${isPrivacy ? "border-b-[2px] border-black" : "border-b-[1px] border-theme"} w-[50%]  pb-2 text-center`}
      >
        {t("name-7")}
      </Link>
      <Link
        href="/terms"
        className={` ${!isPrivacy ? "border-b-[2px] border-black" : "border-b-[1px] border-theme"} w-[50%]  pb-2 text-center`}
      >
        {t("name-6")}
      </Link>
    </div>
  );
}
