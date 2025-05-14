"use client";
import { crimsonText } from "@/fonts/crismonText";
import { useTranslations } from "@/hooks/useTranslations";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { InputField } from "@/components/ui/input-field";
import { TextAreaField } from "@/components/ui/text-area";
import { Button } from "@/components/ui/button";
import { validateEmail } from "@/lib/utils";

export default function ContactPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [sucess, setSucess] = useState<boolean>(false);

  const handleSubmit = async (formData: FormData) => {
    const { email, subject, message } = Object.fromEntries(formData) as {
      email: string;
      subject: string;
      message: string;
    };

    if (!email || !validateEmail(email)) {
      setErr("Email");
      return;
    }
    if (!subject) {
      setErr("Subject");
      return;
    }
    if (!message) {
      setErr("Message");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErr(data.error);
        console.error("Erro:", data.error);
        return;
      }

      console.log("Contato enviado:", data);
      setSucess(true);
    } catch (err) {
      console.error("Erro de rede:", err);
    }
  };

  const t = useTranslations("contact");
  return (
    <div className="w-full py-5 flex items-center justify-center bg-white">
      <div className="w-def flex flex-col gap-4">
        <div>
          <h2
            className={`${crimsonText.className} text-2xl font-semibold mt-6 mb-2 text-gray-800`}
          >
            {t("title")}
          </h2>
          <p className="text-texts-1">{t("text-1")}</p>
        </div>
        <RadioGroup
          value={selected}
          onValueChange={(val) => setSelected(val)}
          className="w-full"
          defaultValue="option-one"
        >
          {Array.from({ length: 5 }, (_, index) => index + 1).map((index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem
                value={`option-${index}`}
                id={`option-${index}`}
              />
              <Label
                className="font-normal text-base"
                htmlFor={`option-${index}`}
              >
                {t(`subjects.p${index}`)}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {selected ? (
          selected === "option-1" ? (
            <div>
              <p>{t("introduction.text-1")}</p>
              <p className="mt-5">{t("introduction.text-2")}</p>
              <ul className="list-disc list-outside mt-5 pl-12">
                <li>{t("introduction.list.p1")}</li>
                <li>{t("introduction.list.p2")}</li>
              </ul>
            </div>
          ) : (
            <form className="flex flex-col gap-4" action={handleSubmit}>
              <InputField
                id="email"
                placeholder={t("form.emailPlaceholder")}
                label="Email"
                type="email"
                errorMessage={err === "Email" ? t("form.emailError") : ""}
              />
              <InputField
                id="subject"
                placeholder={t("form.subjectPlaceholder")}
                type="text"
                errorMessage={err === "Subject" ? t("form.subjectError") : ""}
              />
              <TextAreaField
                id="message"
                placeholder={t("form.messagePlaceholder")}
                errorMessage={err === "Message" ? t("form.messageError") : ""}
              />
              <Button className="mt-5 bg-bg-1 py-2 text-white font-semibold hover:bg-bg-5 flex items-center rounded-xl justify-center gap-2 w-full">
                {t("form.send")}
              </Button>
            </form>
          )
        ) : null}

        {sucess && (
          <div className="bg-green-50 p-5 rounded-xl">
            <p className="text-green-500">{t("success.title")}</p>
            <p className="text-green-500">{t("success.p1")}</p>
          </div>
        )}
        {err !== "Message" && err !== "Subject" && err !== "Email" && (
          <p className="text-red-500">{err}</p>
        )}
      </div>
    </div>
  );
}
