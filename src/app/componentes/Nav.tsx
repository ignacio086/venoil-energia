"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { pop } from "../fonts/Fonts";
import { Globe } from "lucide-react";
import ToggleSwitch from "./toggleSwitch";
import { useLanguage } from "@/app/context/LanguageContext";
import textos from "@/lib/textos";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { useAnimation } from "motion/react";
export default function Nav() {

const controls = useAnimation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      controls.start({
        backgroundColor: isScrolled
          ? 'rgba(0, 48, 107, 0.95)' // #00306B
          : 'rgba(255, 255, 255, 0.1)', // efecto glass
        backdropFilter: isScrolled ? 'none' : 'blur(12px)',
        boxShadow: isScrolled
          ? '0 2px 8px rgba(0,0,0,0.2)'
          : '0 0px 0px transparent',
        transition: { duration: 0.3 },
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);
  const { language } = useLanguage();
  const text = textos[language].nav;
  const pathname = usePathname();
  const [lang, setLang] = useState("spanish");
  const [mobile, setMobile] = useState(true);
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
    <motion.nav animate={controls} className="h-24 fixed top-0 left-0 z-50 w-screen text-white  ">
      <div className="collapse lg:visible h-24 w-screen absolute lg:flex justify-around text-white  p-12">
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
            <Link
              href="/"
              className={`hover:text-verde transition-all relative`}
            >
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
          <ToggleSwitch />
        </div>
      </div>
      <div className="visible lg:invisible h-24 w-screen flex justify-around text-white   p-12">
        <a href="/" className="w-1/4 flex items-center justify-center">
          <Image
            src="/LOGO HORIZONTAL-02 1.png"
            width={250}
            height={50}
            alt="VenOil Logo"
          />
        </a>
        <motion.div
          transition={{
            layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
          }}
          layout
          className={`fixed origin-top-right flex flex-col items-center justify-center gap-2 ${
            mobile
              ? "w-0 h-0 rounded-full"
              : "border-b-verde border-b-2 rounded-xl w-screen h-[50vh]"
          } top-20 bg-azul z-50 `}
        >
          <Link
              href="/"
              className={`hover:text-verde transition-all visible lg:invisible ${mobile?'invisible opacity-0':"opacity-1 visible"} relative`}
            >
              {text.inicio}
              {pathname === "/" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
              )}
            </Link>
          <Link
              href="/operadora"
              className={`hover:text-verde transition-all visible lg:invisible ${mobile?'invisible opacity-0':"opacity-1 visible"} relative`}
            >
              {text.operadora}
              {pathname === "/operadora" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
              )}
            </Link>
          <Link
              href="/gestion"
              className={`hover:text-verde transition-all visible lg:invisible ${mobile?'invisible opacity-0':"opacity-1 visible"} relative`}
            >
              {text.gestion}
              {pathname === "/gestion" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
              )}
            </Link>
          <Link
              href="/workWithUs"
              className={`hover:text-verde transition-all visible lg:invisible ${mobile?'invisible opacity-0':"opacity-1 visible"} relative`}
            >
              {text.trabaja}
              {pathname === "/workWithUs" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-verde"></span>
              )}
            </Link>
        </motion.div>
        <div className=" flex items-center justify-around w-1/4">
          <ToggleSwitch />
        </div>
        <motion.button
          layout
          className="flex transition-all text-3xl items-center justify-center"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {mobile ? <CiMenuBurger /> : <CiMenuFries />}
        </motion.button>
      </div>
    </motion.nav>
  );
}
