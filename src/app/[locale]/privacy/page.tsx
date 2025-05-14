import TermsAndPrivacyHeader from "@/components/ui/terms-and-privacy-header";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function Privacy() {
  const t = await getTranslations("privacy");

  return (
    <div className="w-full bg-white flex items-center justify-center py-10">
      <div className="w-def">
        <TermsAndPrivacyHeader />
        <h1 className="text-4xl font-semibold my-8">{t("title")}</h1>
        <ul className="list-decimal list-outside">
          <li className="text-2xl font-semibold ">
            <span>{t("sections.introduction.title")}</span>
            <ul className="pl-5 text-base flex flex-col gap-4 mt-6 font-normal list-decimal list-outside">
              {Array.from({ length: 4 }, (_, i) => (
                <li key={i}>{t(`sections.introduction.content.p${1 + i}`)}</li>
              ))}
            </ul>
          </li>
          <li className="text-2xl font-semibold mt-6 ">
            <span>{t("sections.changes.title")}</span>
            <ul className="pl-5 text-base flex flex-col gap-4 mt-6 font-normal list-decimal list-outside">
              <li>{t(`sections.changes.content.p1`)}</li>
            </ul>
          </li>
          <li className="text-2xl font-semibold mt-6">
            <span>{t("sections.definitions.title")}</span>
            <p className="text-base pl-6 font-normal mt-5">
              {t("sections.definitions.content")}
            </p>
            <p className="text-base pl-6 font-normal mt-5">
              {t("sections.definitions.terms.PII.term")}{" "}
              {t("sections.definitions.terms.PII.definition")}
            </p>

            <ul className="pl-10 text-base flex flex-col mt-6 font-normal list-disc list-outside">
              {Array.from({ length: 6 }, (_, i) => (
                <li key={i}>
                  {t(
                    `sections.definitions.terms.PIIExamples.list.item${1 + i}`
                  )}
                </li>
              ))}
            </ul>
            <p className="text-base pl-6 font-normal mt-5">
              {t("sections.definitions.terms.PIIExamples.excludes")}
            </p>
            <ul className="pl-10 text-base flex flex-col mt-6 font-normal list-disc list-outside">
              {Array.from({ length: 3 }, (_, i) => (
                <li key={i}>
                  {t(
                    `sections.definitions.terms.nonPIIExamples.list.item${
                      1 + i
                    }`
                  )}
                </li>
              ))}
            </ul>
            <p className="text-base pl-6 font-normal mt-5">
              {t("sections.definitions.terms.services.definition")}
            </p>
            <p className="text-base pl-6 font-normal mt-5">
              {t("sections.definitions.terms.websites.term")}{" "}
              {t("sections.definitions.terms.websites.definition")}
            </p>
            <p className="text-base pl-6 font-normal mt-5">
              {t("sections.definitions.terms.we.term")}{" "}
              {t("sections.definitions.terms.we.definition")}
            </p>
            <p className="text-base pl-6 font-normal mt-5">
              {t("sections.definitions.terms.you.term")}{" "}
              {t("sections.definitions.terms.you.definition")}
            </p>
          </li>

          <li className="text-2xl font-semibold mt-6">
            <span>{t("sections.collection.title")}</span>
            <ul className="pl-5 text-base flex flex-col gap-4 mt-6 font-normal list-decimal list-outside">
              {Array.from({ length: 4 }, (_, i) => (
                <li key={i}>{t(`sections.collection.content.p${1 + i}`)}</li>
              ))}
            </ul>
          </li>
          <li className="text-2xl font-semibold mt-6">
            <span>{t("sections.usePII.title")}</span>
            <p className="text-base font-normal mt-1">
              {t("sections.usePII.content.p1")}
            </p>
            <ul className="pl-5 text-base flex flex-col gap-4 mt-6 font-normal list-decimal list-outside">
              {Array.from({ length: 3 }, (_, i) => (
                <li key={i}>{t(`sections.usePII.list.item${1 + i}`)}</li>
              ))}
            </ul>
          </li>
          <li className="text-2xl font-semibold mt-6">
            <span>{t("sections.useAggregated.title")}</span>
            <p className="text-base font-normal mt-1">
              {t("sections.useAggregated.content.p1")}
            </p>
            <ul className="pl-5 text-base flex flex-col gap-4 mt-6 font-normal list-decimal list-outside">
              {Array.from({ length: 6 }, (_, i) => (
                <li key={i}>{t(`sections.useAggregated.list.item${1 + i}`)}</li>
              ))}
            </ul>
          </li>
          <li className="text-2xl font-semibold mt-6">
            <span>{t("sections.retention.title")}</span>
            <p className="text-base font-normal mt-1">
              {t("sections.retention.content.p1")}
            </p>
          </li>
          <li className="text-2xl font-semibold mt-6">
            <span>{t("sections.disclosure.title")}</span>
            <p className="text-base font-normal mt-1">
              {t("sections.disclosure.contentPII.p1")}
            </p>
            <ul className="pl-5 text-base flex flex-col gap-4 mt-6 font-normal list-decimal list-outside">
              {Array.from({ length: 3 }, (_, i) => (
                <li key={i}>{t(`sections.disclosure.listPII.item${1 + i}`)}</li>
              ))}
            </ul>
            <p className="text-base font-normal mt-6">
              {t("sections.disclosure.contentAggregated.p1")}
            </p>
            <ul className="pl-5 text-base flex flex-col gap-4 mt-6 font-normal list-decimal list-outside">
              {Array.from({ length: 4 }, (_, i) => (
                <li key={i}>
                  {t(`sections.disclosure.listAggregated.item${1 + i}`)}
                </li>
              ))}
            </ul>
            <p className="text-base font-normal mt-6">
              {t("sections.disclosure.note")}
            </p>
          </li>
          <li className="text-2xl font-semibold mt-6">
            <span>{t("sections.cookies.title")}</span>
            <ul className="pl-5 text-base flex flex-col gap-4 mt-6 font-normal list-decimal list-outside">
              {Array.from({ length: 4 }, (_, i) => (
                <li key={i}>{t(`sections.cookies.content.p${1 + i}`)}</li>
              ))}
            </ul>
          </li>
          <li className="text-2xl font-semibold mt-6">
            <span>{t("sections.security.title")}</span>
            <ul className="pl-5 text-base flex flex-col gap-4 mt-6 font-normal list-decimal list-outside">
              {Array.from({ length: 3 }, (_, i) => (
                <li key={i}>{t(`sections.security.content.p${1 + i}`)}</li>
              ))}
            </ul>
          </li>
          <li className="text-2xl font-semibold mt-6">
            <span>{t("sections.rights.title")}</span>
            <ul className="pl-5 text-base flex flex-col gap-4 mt-6 font-normal list-decimal list-outside">
              <li>{t(`sections.rights.eu.title`)}</li>
              <p className="text-base font-normal mt-6">
                {t("sections.rights.eu.content.p1")}
              </p>
              <li>{t(`sections.rights.nz.title`)}</li>
              <p className="text-base font-normal mt-6">
                {t("sections.rights.nz.content.p1")}
              </p>
              <li>{t(`sections.rights.instructions`)}</li>
              <li>{t(`sections.rights.costNote`)}</li>
              <p className="text-base font-normal mt-6">
                {t("sections.rights.contact")}
              </p>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
