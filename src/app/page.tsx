"use client";

import { SearchBar } from "@/components/SearchBar";
import HomeSection from "@/components/templates/Home";
import { Button } from "@/components/ui/button";
import { Helpline } from "@/types/types";
import { CloudCog } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [helplines, setHelplines] = useState<Helpline[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchHelplines() {
      try {
        const response = await fetch("/api/helplines");
        const data: Helpline[] = await response.json();
        setHelplines(data);
      } catch (error) {
        console.error("Error fetching helplines:", error);
      }
    }
    fetchHelplines();
  }, []);

  const filteredHelplines = helplines.filter((helpline) => {
    const query = searchQuery.toLowerCase();
    return (
      helpline.name.toLowerCase().includes(query) ||
      helpline.countryRel.name.toLowerCase().includes(query) ||
      helpline.languages.some((lang) => lang.toLowerCase().includes(query))
    );
  });

  return (
    <main >    
      <HomeSection/>
      {/* <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Find a Helpline
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto">
              Connect with helplines around the world for support and assistance
            </p>
          </div>

          <div className="mt-8">
            <SearchBar 
              onSearch={setSearchQuery} 
            />
          </div>

          <div className="mt-12">
            <div className="bg-white shadow rounded-lg">
              <div className="p-6">
                <div className="flow-root">
                  <ul className="-my-5 divide-y divide-gray-200">
                    {filteredHelplines.map((helpline) => (
                      <li key={helpline.id} className="py-5">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {helpline.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {helpline.countryRel.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              Languages: {helpline.languages.join(", ")}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            {helpline.phone ? (
                              <a
                                href={`tel:${helpline.phone}`}
                                className="text-blue-600 hover:text-blue-800"
                              >
                                {helpline.phone}
                              </a>
                            ) : (
                              <span className="text-gray-400">No phone</span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
