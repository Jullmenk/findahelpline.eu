'use client'
import TermsAndPrivacyHeader from "@/components/ui/terms-and-privacy-header";
import { useTranslations } from "@/hooks/useTranslations";
import Link from "next/link";
import React from "react";

export default function Terms() {
  const t = useTranslations("terms");

  return (
    <div className="w-full bg-white flex items-center justify-center py-10">
      <div className="w-full px-6 sm:px-0 sm:w-def">
        <TermsAndPrivacyHeader />
        <h1 className="text-4xl font-semibold mt-8">{t("title")}</h1>
        <p className="mb-8">{t("lastUpdated")}</p>
        <ul className="list-none list-outside">
          <li className="text-2xl font-semibold ">
            <span>{t("about.title")}</span>
            <p className="text-base font-normal mt-1">{t("about.p1")}</p>
            <ul className="pl-12 text-base flex flex-col gap-1 mt-6 font-normal list-disc list-outside">
              {Array.from({ length: 3 }, (_, i) => (
                <li key={i}>{t(`about.points.${1 + i}`)}</li>
              ))}
            </ul>
            <p className="text-base font-normal mt-4">{t("about.p3")}</p>
            <p className="text-base font-normal mt-4">{t("about.p4")}</p>
          </li>
          <li className="text-2xl font-semibold mt-6 ">
            <span>{t("useOfServices.title")}</span>
            <p className="text-base font-normal mt-1">
              {t("useOfServices.p1")}
            </p>
          </li>
          <li className="text-2xl font-semibold mt-6">
            <span>{t("restrictions.title")}</span>
            <p className="text-base font-normal ">{t("restrictions.intro")}</p>

            <ul className="pl-10 text-base flex flex-col mt-6 font-normal list-decimal list-outside">
              {Array.from({ length: 6 }, (_, i) => (
                <li key={i}>{t(`restrictions.points.${1 + i}`)}</li>
              ))}
            </ul>
            <p className="text-base font-normal mt-1">
              {t("restrictions.compliance")}
            </p>
          </li>

          <li className="text-2xl font-semibold mt-6">
            <span>{t("externalLinks.title")}</span>
            <p className="text-base font-normal mt-1">
              {t("externalLinks.p1")}
            </p>
          </li>

          <li className="text-2xl font-semibold mt-6">
            <span>{t("intellectualProperty.title")}</span>
            <p className="text-base font-normal mt-1">
              {t("intellectualProperty.p1")}
            </p>
            <p className="text-base font-normal mt-3">
              {t("intellectualProperty.p2")}
            </p>
          </li>

          <li className="text-2xl font-semibold mt-6">
            <span>{t("disclaimers.title")}</span>
            {Array.from({ length: 5 }, (_, i) => (
              <p className="text-base font-normal mt-1 mb-4" key={i}>
                {t(`disclaimers.p${1 + i}`)}
              </p>
            ))}
          </li>

          <li className="text-2xl font-semibold mt-6">
            <span>{t("privacy.title")}</span>
            <p className="text-base font-normal mt-1">{t("privacy.p1")}</p>
            <Link
              className="underline text-base"
              href={"https://www.throughlinecare.com/privacy-policy"}
            >
              https://www.throughlinecare.com/privacy-policy
            </Link>
          </li>

          <li className="text-2xl font-semibold mt-6">
            <span>{t("maintenance.title")}</span>
            {Array.from({ length: 2 }, (_, i) => (
              <p className="text-base font-normal mt-1 mb-4" key={i}>
                {t(`maintenance.p${1 + i}`)}
              </p>
            ))}
          </li>

          <li className="text-2xl font-semibold mt-6">
            <span>{t("forceMajeure.title")}</span>
            <p className="text-base font-normal mt-1 mb-4">
              {t(`forceMajeure.p1`)}
            </p>
          </li>

          <li className="text-2xl font-semibold mt-6">
            <span>{t("general.title")}</span>
            {Array.from({ length: 3 }, (_, i) => (
              <p className="text-base font-normal mt-1 mb-4" key={i}>
                {t(`general.p${1 + i}`)}
              </p>
            ))}
          </li>

          <li className="text-2xl font-semibold mt-6">
            <span>{t("definitions.title")}</span>
            <p className="text-base font-normal mt-1">
              {t("definitions.introduction")}
            </p>
            <p className="text-base font-normal mt-1">
              {t("definitions.intellectualProperty")}
            </p>
            <ul className="pl-12 text-base flex flex-col gap-4 mt-6 font-normal list-disc list-outside">
              {Array.from({ length: 2 }, (_, i) => (
                <li key={i}>{t(`definitions.p${1 + i}`)}</li>
              ))}
            </ul>
            <p className="text-base font-normal mt-3">
              {t("definitions.services")}
            </p>
            <p className="text-base font-normal mt-3">{t("definitions.we")}</p>
            <p className="text-base font-normal mt-3">
              {t("definitions.websites")}
            </p>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
