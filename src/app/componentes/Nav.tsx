"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as motion from "motion/react-client";
import { pop } from "../fonts/Fonts";
import { Globe } from "lucide-react";
import ToggleSwitch from "./toggleSwitch";
import { useLanguage } from "@/app/context/LanguageContext";
import textos from "@/lib/textos";

export default function Nav() {
  const { language } = useLanguage();
  const text = textos[language].nav;
  const pathname = usePathname();
  const [lang, setLang] = useState("spanish");

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
    <nav className="h-24 w-screen flex justify-around text-white  border-b-verde bg-azul p-12">
      <a href="/" className="w-1/4 flex items-center justify-center">
        <Image
          src="/LOGO HORIZONTAL-02 1.png"
          width={250}
          height={50}
          alt="VenOil Logo"
        />
      </a>
      <div
        style={pop.style}
        className="w-2/4 hidden h-full lg:flex text-center flex-row items-center text-base justify-around"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className={`hover:text-verde transition-all relative`}>
          {text.inicio}
          
            {pathname === "/" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
            )}
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          <Link
            href="/operadora"
            className={`hover:text-verde transition-all relative`}
          >
            {text.operadora}
            {pathname === "/operadora" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
            )}
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <Link
            href="/gestion"
            className={`hover:text-verde transition-all relative`}
          >
            {text.gestion}
            {pathname === "/gestion" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
            )}
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
        >
          <Link
            href="/workWithUs"
            className={`hover:text-verde transition-all relative`}
          >
            {text.trabaja}
            {pathname === "/workWithUs" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
            )}
          </Link>
        </motion.div>
      </div>
      <div className=" flex items-center justify-around w-1/4">
      <ToggleSwitch/>
      </div>
    </nav>
  );
}
