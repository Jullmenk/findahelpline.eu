import React from "react";
import { menu } from "@/data/menu";
import Link from "next/link";

export default function MenuContainer({close}: {close: () => void}) {
  return (
    <div className="flex flex-col mt-2 w-[13.5dvw]">
      {menu.map((item, index) => (
        <Link className="px-4 py-3 flex items-center gap-6 hover:bg-zinc-100" key={index} href={item.href} onClick={close}>
          {item.icon}
          <p>{item.pt}</p>
        </Link>
      ))}
      <hr className="bg-border-0" />
      <Link className="px-4 py-3 text-sm text-border-0 flex items-center gap-6 hover:bg-zinc-100" href="/privacy" onClick={close}>
        Política de Privacidade
      </Link>
      <Link className="px-4 py-3 text-sm text-border-0 flex items-center gap-6 hover:bg-zinc-100" href="/terms" onClick={close}>
        Termos de Utilização
      </Link>
    </div>
  );
}
