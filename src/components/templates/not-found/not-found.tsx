"use client"
import { useTranslations } from "@/hooks/useTranslations";
import Link from "next/link";
import { IoMdInformationCircle } from "react-icons/io";


export default function NotFound() {

  const t  = useTranslations("notFound");


  return (
    <div className="flex items-center flex-col justify-center bg-bg-0">
        <h1 className="text-xl mb-4">
          {t("title")}
        </h1>
      <div className="bg-white px-6 pt-4 pb-6 text-start  rounded-lg shadow-md max-w-md ">
        <div className="mb-6 w-full justify-center items-center flex">
          <IoMdInformationCircle color="rgb(148, 188, 217)" size={24} />
        </div>
        <p className=" mb-6">
          {t("description1")}
        </p>
        <p className=" mb-6">
          {t("description2.part1")}
          <Link href="/" target="_blank" className="underline">
            {t("description2.linkText")}
          </Link>
          {" "}
          {t("description2.part2")}
        </p>
        <ul className="list-disc list-inside text-left space-y-2 pl-6">
          <li>
            <Link href="https://nowmattersnow.org/" target="_blank" className="underline">
              {t("options.videos")}
            </Link>{" "}
            {t("options.videosDesc")}
          </li>
          <li>
            <Link href="https://www.mysafetyplan.org/" target="_blank" className="underline">
              {t("options.safetyPlan")}
            </Link>{" "}
            {t("options.safetyPlanDesc")}
          </li>
        </ul>
      </div>
    </div>
  );
}
