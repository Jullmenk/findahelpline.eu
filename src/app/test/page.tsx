import Link from "next/link";
import { IoMdInformationCircle } from "react-icons/io";

export default function Test() {
  return (
    <div className="flex items-center flex-col justify-center bg-bg-0">
        <h1 className="text-xl mb-4">
          Recurso não encontrado
        </h1>
      <div className="bg-white px-6 pt-4 pb-6 text-start  rounded-lg shadow-md max-w-md ">
        <div className="mb-6 w-full justify-center items-center flex">
          <IoMdInformationCircle color="rgb(148, 188, 217)" size={24} />
        </div>
        <p className=" mb-6">
          Procurámos de alto a baixo, mas não conseguimos encontrar o conteúdo
          que procuras.
        </p>
        <p className=" mb-6">
          Se estás a atravessar uma crise emocional e queres falar com alguém,
          procura pelo teu país e pelo assunto para o qual procuras ajuda{" "}
          <Link href="/" className="underline">
            aqui
          </Link>
          {" "}
          .
          {" "}
          Se não estiveres a postos para conversar, aqui estão algumas outras
          opções:
        </p>
        <ul className="list-disc list-inside text-left space-y-2 pl-6">
          <li>
            <Link href="#" className="underline">
              Vê vídeos
            </Link>{" "}
            sobre como lidar com sentimentos difíceis (via Now Matters Now)
          </li>
          <li>
            <Link href="#" className="underline">
              Faz um plano de segurança
            </Link>{" "}
            (via Saúde Emocional Vibrante)
          </li>
        </ul>
      </div>
    </div>
  );
}
