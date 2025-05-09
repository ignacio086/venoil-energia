import { popt } from "@/app/fonts/Fonts";
import { GiSpy } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";
import { TbBottleOff } from "react-icons/tb";
import { useLanguage } from "@/app/context/LanguageContext";
export default function Politicas() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="w-screen lg:h-screen z-10 bg-azul">
      <div className="w-full p-12 flex gap-2 h-1/3 items-center justify-center">
        <div className="w-1/3 h-4 rounded-xl bg-gradient-to-r from-green-900 to-verde"></div>
        <h1 className="text-verde text-center text-xl lg:text-4xl">
        {language=='en'?"Our Politics":'Nuestras Políticas'}
        </h1>
        <div className="w-1/3 h-4 rounded-xl bg-gradient-to-r from-verde to-green-900"></div>
      </div>
      <div className="w-full h-2/3 flex flex-col lg:flex-row items-center justify-center text-center">
        <div className={`bg-[url("/image2.png")] w-full h-full p-2 lg:p-24 bg-cover bg-fixed flex flex-col lg:flex-row gap-2 items-center justify-center`}>
          <div key={1} className="bg-green-400 rounded-xl p-2 lg:w-1/3 h-full items-center justify-center flex flex-col">
            <a target="_blank" href="/PC-01 Política CMASS v.7.pdf" className="rounded-full w-32 h-32 border-2 border-white p-2 flex items-center justify-center">
              <GiSpy className="w-full h-full text-white"/>
            </a>
            <h1 className="text-white text-xl lg:text-2xl" style={popt.style}>{language=='en'?"CMASS Politic":'Política CMASS'}</h1>
          </div>
          <div key={2} className="bg-verde rounded-xl p-2 lg:w-1/3 h-full items-center justify-center flex flex-col">
            <a target="_blank" href="/PC-02 Política Anticorrupción v.6.pdf" className="rounded-full w-32 h-32 border-2 border-white p-2 flex items-center justify-center">
              <FaBalanceScale className="w-full h-full text-white"/>
            </a>
            <h1 className="text-white text-xl lg:text-2xl" style={popt.style}>{language=='en'?"Anti-Corruption Politic":'Política Anti Corrupción'}</h1>
          </div>
          <div key={3} className="bg-azul rounded-xl p-2 lg:w-1/3 h-full items-center justify-center flex flex-col">
            <a target="_blank" href="/PC-03 Política Alcohol y Drogas v.7.pdf" className="rounded-full w-32 h-32 border-2 border-white p-2 flex items-center justify-center">
              <TbBottleOff className="w-full h-full text-white"/>
            </a>
            <h1 className="text-white text-xl lg:text-2xl" style={popt.style}>{language=='en'?"Alcohol and Drugs Politic":'Política de Alcohol y Drogas'}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}