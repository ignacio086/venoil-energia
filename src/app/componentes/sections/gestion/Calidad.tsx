import { useLanguage } from "@/app/context/LanguageContext";
import Acordion from "../../Acordion";

export default function Calidad() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="w-screen h-screen z-10 bg-azul">
      <div className="w-full p-12 flex gap-2 h-1/3 items-center justify-center">
        <h1 className="text-verde text-xl lg:text-4xl">
          {language=='en'?"Our quality principles"
:'Nuestros principios de calidad'}
        </h1>
        <div className="w-3/4 h-4 rounded-xl bg-gradient-to-r from-verde to-green-900"></div>
      </div>
      <div className="w-full h-2/3 p-24">
        <Acordion />
      </div>
    </div>
  );
}
