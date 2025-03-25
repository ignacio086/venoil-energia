"use client";
import Image from "next/image";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ToggleSwitch() {
  const [lang, setLang] = useState("spanish");
  const { language, toggleLanguage } = useLanguage();
  const getLangInfo = () => {
    switch (lang) {
      case "spanish":
        return {
          icon: (
            <Image
              src="/argentina_flag.png"
              width={24}
              height={24}
              alt="Español"
            />
          ),
          name: "Español",
        };
      case "english":
        return {
          icon: (
            <Image
              src="/united_kingdom_flag.png"
              width={24}
              height={24}
              alt="English"
            />
          ),
          name: "English",
        };
      default:
        return {
          icon: <Globe className="h-[1.2rem] w-[1.2rem]" />,
          name: "Idioma",
        };
    }
  };

  return (
    <div className="w-1/4 flex items-center justify-center text-black">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-blue text-white rounded-full"
          >
            {getLangInfo().icon}
            <span>{getLangInfo().name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={()=>{toggleLanguage(); setLang('spanish')}}>
            <Image
              src="/argentina_flag.png"
              width={22}
              height={22}
              alt=""
              className="mr-1"
            />
            Español
          </DropdownMenuItem>
          <DropdownMenuItem onClick={()=>{toggleLanguage(); setLang('english')}}>
            <Image
              src="/united_kingdom_flag.png"
              width={22}
              height={22}
              alt=""
              className="mr-1"
            />
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
