"use client";

import { useState } from "react";
import SearchIcons from "@/assets/search";
import { Input } from "./input";
import { IoChevronDownOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { countries } from "@/lib/countries";
import { useConfig } from "@/context/config";
import { X } from "lucide-react";


export function SearchBar() {
  const { setSearchQuery,updateFilteredHelplines,setFilteredHelplines } = useConfig();
  const [search, setSearch] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const filteredOptions = search
    ? countries.filter((option) =>
        option.name.toLowerCase().includes(search.toLowerCase())
      )
    : countries;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOptionClick = (option: string, code: string) => {
    updateFilteredHelplines(code)
    setSearch(option)
    setSearchQuery(code)
    setShowDropdown(false);
  };

  return (
    <div className="w-[94%] relative">
      <div className="w-full flex gap-2">
        <div
          className={`relative shadow-theme flex-1 px-12 py-2 w-full ${
            showDropdown ? "rounded-b-none" : ""
          } bg-white rounded-[2rem]`}
        >
          <Input
            type="text"
            value={search}
            onClick={() => setShowDropdown(true)}
            onChange={handleInputChange}
            className="border-none focus:outline-none focus:ring-0 focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none"
            placeholder="Começa a escrever o nome do teu país..."
          />
          <div className="absolute left-7 top-1/2 -translate-y-1/2 h-full w-5 text-bg-1 flex items-center justify-center">
            <SearchIcons fill="rgb(43, 143, 148)" />
          </div>
          <div className="absolute right-7 top-1/2 -translate-y-1/2 h-full flex items-center justify-center">
           { search.length > 0 && <button
              onClick={() => {
                setSearchQuery("");
                setSearch("");
                setFilteredHelplines([])
              }}
              className="active:bg-slate-200 hover:bg-slate-50 rounded-full p-[5px] flex justify-center items-center"
            >
              <X size={10} color="black" />
            </button>}
            <div
              className={` ${
                showDropdown ? "rotate-180" : ""
              } text-bg-1 flex items-center justify-center cursor-pointer`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <button className="active:bg-slate-200 hover:bg-slate-50 rounded-full p-[5px] flex justify-center items-center">
                <IoChevronDownOutline height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDropdown && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute w-full bg-white top-12 rounded-b-2xl overflow-hidden shadow-lg z-10"
        >
          <div className="max-h-80 overflow-y-auto">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 text-sm hover:bg-zinc-100 cursor-pointer"
                onClick={() => handleOptionClick(option.name, option.code)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
