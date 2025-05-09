"use client";
import { Button } from "@/components/ui/button";
import { crimsonText } from "@/fonts/crismonText";
import Image from "next/image";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import DOMPurify from "dompurify";
import Link from "next/link";

const faqs = [
  {
    q: "Com quem irei falar?",
    a: `
        <p>Geralmente, terá três opções relativamente a quem irá falar consigo numa linha de apoio ou linha direta:</p>
        <ul>
            <li><b>Voluntários &ndash;</b> pessoas com alguma formação sobre como ouvir e ajudar. O seu trabalho não é remunerado.</li>
            <li><b>Psicólogos &ndash;</b> pessoas cujo trabalho é prestar aconselhamento ou apoio. Poderão ter recebido formação formal.</li>
            <li><b>Colegas &ndash;</b> pessoas que passaram por situações semelhantes à sua. Poderão ter recebido formação. Geralmente, o seu trabalho não é remunerado.</li>
        </ul>
        <p>Independentemente de com quem fale, todos os que trabalham numa linha de apoio são pessoas formadas para ouvir e prestar apoio.</p>
        <p>Quando procura por uma linha de apoio, pode filtrar pelo tipo de apoio que procura.</p>
        `,
  },
  {
    q: "O que devo dizer?",
    a: `
        <p>Muitas pessoas não sabem o que dizer quando ligam a pedir ajuda. Pode ser difícil saber por onde começar quando já se está a sentir assoberbado.</p>
                <h2
          className={
            crimsonText.className +
            " text-3xl font-semibold mt-6 mb-2 text-gray-800 leading-8"
          }
        >
          Começar a conversa
        </h2>
        <p>Tente praticar o que quer dizer ou escreva alguns tópicos para saber sobre que falar.</p>
        <p>Deixamos-lhe algumas frases que poderão ajudar:</p>
        <ul>
            <li>As coisas estão difíceis neste momento porque…</li>
            <li>Ultimamente, tenho-me sentido…</li>
            <li>Estou a lidar com [sentimentou ou situação] neste momento, e…</li>
        </ul>
                        <h2
          className={
            crimsonText.className +
            " text-3xl font-semibold mt-6 mb-2 text-gray-800 leading-8"
          }
        >
         Não há forma errada de o dizer
        </h2>
        <p>A pessoas que lhe irá prestar apoio do outro lado da linha está lá para si. Ela vai querer ouvir a sua história e saber pelo que está a passar. Pode contar-lhes o que quiser, consoante o seu nível de conforto e sem qualquer pressão.</p>
        `,
  },
  {
    q: "De que forma é que me irão ajudar?",
    a: `
        <p>As linhas de apoio são um espaço seguro, isento de julgamento e direcionado a informações e apoio emocional imediatos.</p>
         <h2
          className={
            crimsonText.className +
            " text-3xl font-semibold mt-6 mb-2 text-gray-800 leading-8"
          }
        >
         Pode falar o que quiser
        </h2>
        <p>Pode entrar em contacto uma linha de apoio independentemente da importância que atribua ao assunto. Não tem de estar a passar por uma situação de crise para merecer receber apoio – a pessoa do outro lado da linha irá ouvir e colaborar consigo para determinar quais serão os próximos passos a tomar.</p>
             <h2
          className={
            crimsonText.className +
            " text-3xl font-semibold mt-6 mb-2 text-gray-800 leading-8"
          }
        >
         Vai receber ajuda e sentir-se em segurança
        </h2>
        <p>Se estiver numa situação de crise, e precisar imediatamente de ajuda, a linha de apoio irá ajudá-lo a manter-se calmo e em segurança. Poderão fazer-lhe perguntas para perceber se está a pensar em automutilação. A pessoa irá ouvir para compreender quão intensos os seus pensamentos e sentimentos são, e ajudá-lo a criar um plano para se manter em segurança naquele momento.</p>
             <h2
          className={
            crimsonText.className +
            " text-3xl font-semibold mt-6 mb-2 text-gray-800 leading-8"
          }
        >
         Pode encontrar a ajuda certa
        </h2>
        <p>Algumas linhas de apoio prestam um tipo específico de apoio ou ajudam um determinado grupo de pessoas.</p>
        <p>Por exemplo, membros da comunidade LGBTQ+ podem sentir-se mais confortáveis se contactarem uma linha de apoio com formação específica para os ajudar.</p>
        <p>As linhas de apoio são organizadas por tópico e especialidade. Como tal, irá ser sempre claro para que tópicos prestam apoio, e se prestam apoio a determinado grupo de pessoas.</p>
        `,
  },
  {
    q: "Posso apenas conversar?",
    a: `
        <p>Muitas pessoas sentem isto. A maioria das linhas de apoio não servem só para lidar com os grandes problemas. Estas estão disponíveis para qualquer pessoa que precise de apoio.</p>
        <p>Existe também um tipo de linha de apoio designado "linha de conforto" que existe apenas para falar. Estas linhas de apoio são sustentadas por pessoas que passaram por momentos difíceis.</p>
        <p>Pode encontrar linhas de conforto usando o filtro de especialidade na pesquisa de linhas de apoio.</p>
        `,
  },
  {
    q: "Preciso de um telefone?",
    a: `
        <p>Muitas linhas de apoio disponibilizam os seus serviços por mensagem, WhatsApp ou chat online. Quando procurar por uma linha de apoio, pode ver o tipo de ajuda que cada linha de apoio disponibiliza.</p>
        <p>Algumas pessoas consideram o envio de mensagens menos formal e mais privado, fazendo com que seja mais fácil falar sobre determinados temas.</p>
        `,
  },
  {
    q: "Irão chamar a polícia?",
    a: `
        <p>Algumas pessoas temem que a polícia seja alertada se pedirem ajuda. Tal pode ser uma fonte de muito stress. As linhas de apoio têm muitas vezes a obrigação de manter todas as suas informações em privado exceto se considerarem que a pessoa que está a ligar ou outra pessoa estão em periogo imediato.</p>
        <p>Se tiver ideações suicidas, estas linhas de apoio irão ajudá-lo a manter-se em segurança naquele momento e não irão alertar a polícia exceto se considerarem que está a planear cometer algum ato de automutilação ou que prejudique outra pessoa e não seja possível criar um plano para controlar a situação.</p>
        <p>Pode perguntar à linha de apoio quais são as suas políticas antes de falar sobre a sua situação.</p>
        `,
  },
  {
    q: "E se os meus pensamentos forem demasiado intenso?",
    a: `
        <p>Quando tem pensamentos muito intensos, poderá ocorrer-lhe que é demasiado difícil falar sobre isso com outra pessoa. Poderá ficar preocupado sobre como irão reagir.</p>
        <p>As pessoas que trabalham em linhas de apoio recebem formação para ouvir. Elas sabem como ajudar pessoas que se estão a passar pelo que você está a passar.</p>
        <p>Não irão fazer julgamentos e irão ajudar a perceber o que fazer a seguir, de uma forma que será útil para si.</p>
        `,
  },
  {
    q: "E se eu não confiar nos profissionais?",
    a: `
        <p>Embora o apoio profissional possa ser muito útil, nós percebemos que possa não ser indicado para todos.</p>
        <p>Há outras opções disponíveis:</p>
        <ul>
            <li><b>Voluntários &ndash;</b> a maioria das linhas de apoio é dirigida por voluntários. Estas pessoas fazem trabalho de voluntariado porque querem ajudar pessoas que estão a passar pelo que você está a passar e que podem estar a sentir-se em baixo.</li>
            <li><b>Colegas &ndash;</b> em algumas linhas de apoio, pode falar com pessoas que passaram por situações difíceis.</li>
            <li><b>Linhas de conforto &ndash;</b> linhas de apoio em que todos os que estão a ajudar passaram por dificuldades semelhantes a nível de saúde mental.</li>
        </ul>
        <p>Quando procura por uma linha de apoio, pode filtrar estas opções para que receba o apoio com o qual está mais confortável.</p>
        `,
  },
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="w-full flex justify-center items-center bg-white py-16">
      <div className="w-def flex flex-col gap-3">
        <h2
          className={
            crimsonText.className +
            " text-3xl font-semibold mt-6 mb-2 text-gray-800 leading-8"
          }
        >
          O que esperar quando contactar uma linha de apoio
        </h2>

        <div className="flex flex-col">
          <div className="flex flex-col gap-6">
            <div className="flex justify-center items-center w-full">
              <div className="relative w-[90%] h-60">
                <Image
                  fill
                  src="/img/two-people-bandaging-heart.png"
                  alt="Helpline Illustration"
                />
              </div>
            </div>

            <p
              className={
                crimsonText.className +
                " text-2xl font-semibold  text-gray-800 text-start"
              }
            >
              Pedir ajuda é uma das coisas mais corajosas &ndash; e difíceis
              &ndash; que pode fazer quando está a passar por dificuldades.
            </p>
            <p>
              As linhas de apoio &ndash; também conhecidas como linhas diretas,
              linhas de apoio à crise ou call centers de apoio à crise &ndash;
              disponibilizam apoio emocional imediato a todas as pessoas, em
              todo o mundo!
            </p>
            <p>
              Se está habituado a guardar tudo para si, ou nunca contactou uma
              linha de apoio antes, pode não saber o que esperar. Isto pode
              acrescentar stress extra a uma situação já em si complicada.
            </p>
            <p>
              Para algumas pessoas, saber o que esperar pode aliviar este stress
              e fazer com que seja mais fácil procurar ajuda.
            </p>
            <p>Deixamos-lhe aqui algumas respostas a perguntas frequentes:</p>

            <div className="text-left w-full space-y-2">
              {faqs.map((_, index) => (
                <div
                  className={`${
                    open === index ? "max-h-screen" : "max-h-14"
                  } w-full transition-all border-b border-border-0 duration-100 bg-white pt-2 pb-4 overflow-hidden flex flex-col items-start justify-start`}
                >
                  <div
                    className="w-full flex justify-between items-center cursor-pointer"
                    onClick={() => setOpen(open === index ? null : index)}
                  >
                    <Button
                      variant={"ghost"}
                      className={
                        crimsonText.className +
                        " px-0 hover:bg-transparent hover:text-texts-4 text-2xl font-semibold text-texts-4"
                      }
                    >
                      {faqs[index].q}
                    </Button>
                    <div
                      className={` transition-all duration-300 ${
                        open === index ? "rotate-180" : ""
                      }`}
                    >
                      <IoChevronDownOutline
                        size={20}
                        color="rgb(148, 188, 217)"
                      />
                    </div>
                  </div>
                  <div
                    className="w-full formated flex flex-col gap-3 mt-6"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(faqs[index].a),
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/"
                className="mt-5 bg-bg-1 py-2 text-white font-semibold hover:bg-bg-5 flex items-center rounded-xl justify-center gap-2 w-full"
              >
                Find A Helpline &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
