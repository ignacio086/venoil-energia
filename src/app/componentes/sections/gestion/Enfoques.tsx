"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { popt } from "@/app/fonts/Fonts";
import textos from "@/lib/textos";
import { motion } from "motion/react";
export default function Enfoques() {
  const { language, toggleLanguage } = useLanguage();
  const lenf = textos[language].gestionintegrada.lenfoques;
  return (
    <div className="w-screen h-screen z-10 bg-white">
      <div className="w-full p-12 flex gap-2 h-1/3 items-center justify-center">
        <div className="w-3/4 h-4 rounded-xl bg-gradient-to-r from-verde to-azul"></div>
        <h1 className="text-azul text-xl lg:text-4xl">
          {language == "en"
            ? "Focus on Operational Safety"
            : "Enfoque a la Seguridad Operacional"}
        </h1>
      </div>
      <div className="w-full h-full flex ">
        <div className="w-1/2 lg:w-full h-2/3 p-2 lg:p-24 flex flex-col lg:flex-row items-center justify-center text-center">
          {lenf.map((text, id) => {
            return (
              <motion.div
                transition={{
                  duration: 0.5,
                  delay: id - id / 2,
                  type: "spring",
                  visualDuration: 0.2,
                  bounce: 0.8,
                }}
                viewport={{ once: true }}
                initial={{ y: -40 }}
                whileInView={{ y: 0 }}
                className="w-full lg:w-1/6  h-full flex flex-col gap-2"
                key={id}
              >
                <div
                  key={id}
                  className={`w-full h-full lg:h-2/3 border-2 border-white bg-${textos[language].gestionintegrada.cenfoques[id]} flex flex-col items-center justify-center`}
                >
                  <h1
                    className="text-white text-xl lg:text-8xl"
                    style={popt.style}
                  >
                    {text}
                  </h1>
                  <div className="p-2 border-2 border-white rounded-full"></div>
                </div>
                <div className="border-r-2 hidden lg:block text-sm  border-slate-700">
                  <p>{textos[language].gestionintegrada.enfoques[id]}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="w-1/2 lg:hidden h-full gap-8 flex flex-col ">
          {lenf.map((text, id) => {
            return (
              <p className="" key={id}>
                {textos[language].gestionintegrada.enfoques[id]}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
