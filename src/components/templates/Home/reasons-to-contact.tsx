import Image from "next/image";
import { crimsonText } from "@/fonts/crismonText";
import { useTranslations } from "@/hooks/useTranslations";

export default function ReasonsToContact() {
  const t = useTranslations("ReasonToContact");
  return (
    <div className="w-full flex justify-center items-center bg-bg-2 py-16">
      <div className="w-full px-6 sm:px-0 sm:w-def flex flex-col gap-7">
        <div className="flex justify-center items-center">
          <div className="relative w-[80%] sm:w-full h-[250px] sm:h-[400px]">
            <Image
              fill
              src="/img/man-in-screen-talking-with-stranger.png"
              alt="Homem numa videochamada"
            />
          </div>
        </div>

        <h2
          className={`${crimsonText.className} text-2xl font-semibold mt-6 mb-2 text-gray-800`}
        >
          {t("title")}
        </h2>

        <p>{t("text-1")}</p>

        <ul className="list-disc pl-6 space-y-3">
          {Array.from({ length: 6 }, (_, i) => (
            <li key={i}>{t(`li.li-${i + 1}`)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
