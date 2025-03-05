import { popt } from "@/app/fonts/Fonts";

export default function Presentacion() {
  return (
    <div className="w-screen h-screen flex flex-col-reverse lg:flex-row border-b-2 border-b-slate-700">
      <div className=" w-full lg:w-1/2 h-full flex items-end  ">
        <div
          style={{ bottom: "-15vh", right: "5vw" }}
          className={`relative rounded-full bg-[url("/casco.jpg")] bg-fixed w-full h-full bg-cover bg-center`}
        >
          <div className="w-full h-full bg-verde/30 rounded-full"></div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full p-12 flex gap-2 flex-col justify-center text-center lg:items-end">
        <h1 className="text-azul text-xl lg:text-6xl">Gestión</h1>
        <h1 className="text-azul text-xl lg:text-6xl" style={popt.style}>
          Integrada
        </h1>
        <p className="text-sm text-right lg:text-xl">
          En VenOil Energia, nos enfocamos cada dia en la excelencia
          operacional, para ello, contamos con un Sistema de Gestión Integrada
        </p>
      </div>
    </div>
  );
}
