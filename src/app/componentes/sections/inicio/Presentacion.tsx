'use client'
import { useLanguage } from "@/app/context/LanguageContext";
import { ButtonR } from "../../ButtonR";
import { popt } from "@/app/fonts/Fonts";
import Typewriter from "../../TypeWriter";
export default function Presentacion() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <main className="w-screen flex items-center justify-center h-[120vh]">
      <video
        src="/0702.mp4"
        className="w-screen left-0 z-0 object-cover h-[120vh] fill absolute"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-screen h-[120vh] bg-gradient-to-b from-black/40 from-95% to-white/90 dark:to-azul/90"></div>
      <div
        style={popt.style}
        className="w-auto text-white  p-24 rounded-xl flex flex-col gap-5 items-center text-center justify-center h-auto z-10 "
      >
        <h1 className=" text-xl lg:text-6xl">
          Transformamos <span className="text-verde ">desafíos</span> en <span className="text-verde">oportunidades</span>.
        </h1>
        <Typewriter text="Innovando para un futuro sostenible" className="text-sm lg:text-3xl" speed={150}/>
        <div className="w-full h-full flex item-center justify-center gap-5">
          <ButtonR texto={language=='en'?'OUR OIL OPERATIONS':'NUESTRAS OPERACIONES'} color="blanco" dir="/operadora" />
          <ButtonR texto={language=='en'?'GET TO KNOW US':'CONOCENOS'} color="blanco" dir="/gestion" />
        </div>
      </div>
    </main>
  );
}
