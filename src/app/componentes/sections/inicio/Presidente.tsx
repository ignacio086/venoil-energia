import { useLanguage } from "@/app/context/LanguageContext";
import { popt } from "@/app/fonts/Fonts";
import textos from "@/lib/textos";
import Image from "next/image";
import { TiInfo } from "react-icons/ti";
export default function Presidente() {
  const { language } = useLanguage();
  const text = textos[language].inicio.presidente;
  return (
    <div className="w-screen flex flex-col items-center justify-center h-auto ">
      <h1 className="text-verde text-center text-xl lg:text-4xl" style={popt.style}>
        {language=='en'?'Our President':'Nuestro Presidente'}
      </h1>
      <div className="flex flex-col lg:flex-row w-full lg:w-2/3 gap-8 justify items-center p-2 lg:p-6">
        <div className="flex flex-col text-center lg:text-left gap-2">
          <h1 style={popt.style} className="text-lg lg:text-2xl text-white flex"> <span ><TiInfo className="p-2 bg-verde text-white w-8 h-8 rounded-full"/></span>Perfil de Gustavo Naves</h1>
          {text.map((e, i) => {
            return (
              <p key={i} style={popt.style} className="text-xs text-white p-4 text-justify lg:text-lg">
                {e}
              </p>
            );
          })}
        </div>
        <Image src="/gustavonaves.jpg" width={0} height={0} className="rounded-ss-3xl" sizes="100vw" style={{ width: "40%", height: "auto" }}  alt="a" />
      </div>
    </div>
  );
}
