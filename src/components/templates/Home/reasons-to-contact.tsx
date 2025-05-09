import Image from "next/image";
import { Crimson_Text } from "next/font/google";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ReasonsToContact() {
  const reasons = [
    "Ter uma crise de ideações suicidas, como pensar \"Quero morrer\" ou pensar em formas de se matar, ou querer apoio após tentar suicídio.",
    "Sofrer de abuso ou violência domésticos, abuso sexual, depressão, ansiedade ou angústia emocional.",
    "Estar a passar por dificuldades com automutilação, uma adição ou uso de substâncias, a sua imagem física ou uma perturbação da alimentação.",
    "Reparar em sinais preocupantes numa pessoa próxima de si, sentir que alguém pode estar em risco de causar danos a si próprio ou querer saber como ajudar alguém com quem está preocupado.",
    "Querer aprender mais sobre os serviços de saúde mental em momentos de crise, prevenção do suicídio e recursos gerais sobre saúde mental.",
    "Pensar simplesmente, \"Preciso de ajuda\" e não saber como começar.",
  ];

  return (
    <div className="w-full flex justify-center items-center bg-bg-2 py-16">
      <div className="w-def flex flex-col gap-7">
        <div className="relative w-full h-[400px]">
          <Image
            fill
            src="/img/man-in-screen-talking-with-stranger.png"
            alt="Homem numa videochamada"
          />
        </div>

        <h2 className={`${crimsonText.className} text-2xl font-semibold mt-6 mb-2 text-gray-800`}>
          Razões comuns para entrar em contacto com uma linha de apoio
        </h2>

        <p>
          Não tem a certeza de que entrar em contacto com uma linha de apoio é o mais certo para si?
          Aqui ficam algumas razões pelas quais outras pessoas procuraram apoio gratuito e confidencial:
        </p>

        <ul className="list-disc pl-6 space-y-3">
          {reasons.map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
