import { useLanguage } from "@/app/context/LanguageContext";
import { popt } from "@/app/fonts/Fonts";

export default function Presentacion() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="w-screen h-screen flex flex-col-reverse lg:flex-row border-b-2 border-b-slate-700">
      <div className=" w-full lg:w-1/2 h-full flex items-end  ">
        <div
          style={{ bottom: "-15vh", right: "5vw" }}
          className={`relative rounded-full bg-[url("/casco.jpg")]  w-full h-full bg-cover bg-center`}
        >
          <div className="w-full h-full bg-verde/30 rounded-full"></div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full p-12 flex gap-2 flex-col justify-center text-center items-end lg:items-end">
        <h1 className="text-azul text-xl lg:text-6xl">
          {language == "en" ? "Managment" : "Gestión"}
        </h1>
        <h1 className="text-azul text-xl lg:text-6xl" style={popt.style}>
          {language == "en" ? "Integrated" : "Integrada"}
        </h1>
        <p className="text-sm text-right lg:text-xl">
          {language == "en"
            ? "At Venoil Energía, we focus every day on operational excellence, for this, we have an Integrated Management System"
            : "En Venoil Energia, nos enfocamos cada dia en la excelencia operacional, para ello, contamos con un Sistema de Gestión Integrada"}
        </p>
        <div className="flex w-72 h-72 items-center justify-center flex-col gap-2">
          <div className="w-24 h-24 border-2 border-azul flex items-center justify-center rounded-full">
            <div className="w-6 h-6 bg-verde rounded-full"></div>
          </div>
          <div className="w-1 h-12 bg-azul"></div>
          <div
            className={`rounded-xl bg-[url("/isotipo-01.png")] bg-cover aspect-square w-1/2 h-full flex items-end justify-center flex-col bg-no-repeat bg-center`}
          ></div>
        </div>
      </div>
    </div>
  );
}
