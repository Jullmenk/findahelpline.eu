import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    {
      name: "Sobre",
      href: "#",
    },
    {
      name: "Perguntas frequentes",
      href: "#",
    },
    {
      name: "Integrações",
      href: "#",
    },
    {
      name: "Termos de Utilização",
      href: "#",
    },
    {
      name: "Contacto",
      href: "#",
    },
    {
      name: "Política de Privacidade",
      href: "#",
    },
    {
      name: "Mapa do site",
      href: "#",
    },
  ];

  return (
    <footer className="bg-[#f5f9fc] flex justify-center items-center text-sm text-gray-700 py-10 px-4">
      <div className="w-def flex flex-col items-center text-center gap-4">
        <Image
          src="/svg/find-a-helpline-brandmark.svg"
          alt="Logo"
          width={70}
          height={70}
        />
        <div>
          <p>
            <div>
              <p className="text-start">
                A Find A Helpline é um serviço público feito com{" "}
                <span className="text-red-400">♡</span> pela
              </p>
              <Link
                href="https://www.throughline.org"
                className="underline hover:text-blue-500"
                target="_blank"
              >
                ThroughLine.
              </Link>
            </div>
            Para utilização comercial,{" "}
            <Link href="#" className="underline hover:text-blue-500">
              entre em contacto connosco
            </Link>
            .
          </p>
        </div>

        <hr className="w-[90%] border-t border-gray-300 my-4" />

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-4">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href} className="text-start underline">
              {link.name}
            </Link>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Direitos de autor {year}©{"  "}
          <Link
            href="https://www.throughline.org"
            className="underline hover:text-blue-500"
            target="_blank"
          >
            ThroughLine Limited
          </Link>
          <br />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
