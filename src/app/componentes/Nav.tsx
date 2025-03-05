"use client";
import Image from "next/image";
import { pop } from "../fonts/Fonts";
import { motion } from "motion/react";
import ToggleSwitch from "./toggleSwitch";
export default function Nav() {
  return (
    <nav className="h-24 w-screen flex justify-around text-white  border-b-verde bg-azul p-12">
      <a href="/" className="w-1/4 flex items-center justify-center">
        <Image
          src="/LOGO HORIZONTAL-02 1.png"
          width={250}
          height={50}
          alt="a"
        />
      </a>
      <div
        style={pop.style}
        className="w-2/4 hidden  h-full  lg:flex text-center flex-row items-center text-base justify-around"
      >
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hover:underline hover:decoration-verde transition-all"
          transition={{ duration: 0.2 }}
          href="/"
        >
          Inicio
        </motion.a>
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hover:underline hover:decoration-verde transition-all"
          transition={{ delay: 0.1, duration: 0.2 }}
          href="/operadora"
        >
          Operadora
        </motion.a>
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hover:underline hover:decoration-verde transition-all"
          transition={{ delay: 0.2, duration: 0.2 }}
          href="/gestion"
        >
          Gestion Integrada
        </motion.a>
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hover:underline hover:decoration-verde transition-all"
          transition={{ delay: 0.3, duration: 0.2 }}
          href="/workWithUs"
        >
          Trabaja con nosotros
        </motion.a>
      </div>
      <div className="w-1/4 flex items-center justify-center">
<ToggleSwitch/>
      </div>
    </nav>
  );
}
