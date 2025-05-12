"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Lang from "@/assets/lang";
import Menu from "@/assets/menu";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import MenuContainer from "./menu-container";
import LangContainer from "./lang-container";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useConfig } from "@/context/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<0 | 1>(0);
  const {setSearchQuery,setFilteredHelplines,filteredHelplines} = useConfig()
  const pathname = usePathname();
  const activeDrawer = [
    <MenuContainer close={() => setOpen(false)} />,
    <LangContainer close={() => setOpen(false)} />,
  ];

  const showLogo = (pathname === "/" && filteredHelplines.length > 0) || pathname !== "/";

  return (
    <header className="w-full flex justify-center bg-bg-0 items-center pb-2 pt-10">
      <div className={`w-[60%] flex ${showLogo? "justify-between" : "justify-end"} gap-3 items-center`}>
        {showLogo && (
          <Link onClick={
            () => {
              setSearchQuery("");
              setFilteredHelplines([])
            }
          } href="/" className="flex gap-3">
            <Image
              src="/svg/findahelpline-logo.svg"
              alt="Find a Helpline Logo"
              width={200}
              height={33}
            />
          </Link>
        )}
        <div className="flex gap-3">
          <Button
            onClick={() => {
              setOpen(true);
              setActive(1);
            }}
            className="hover:bg-white rounded-lg active:bg-slate-200 hover:shadow-md bg-white h-8 w-6"
          >
            <Lang />
          </Button>
          <Button
            onClick={() => {
              setOpen(true);
              setActive(0);
            }}
            className="hover:bg-white rounded-lg active:bg-slate-200 hover:shadow-md bg-white h-8 w-6"
          >
            <Menu />
          </Button>
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent className="shadow-lg">
              {activeDrawer[active]}
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
