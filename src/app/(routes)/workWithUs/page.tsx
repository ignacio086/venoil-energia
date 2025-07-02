
import FormCV from "@/app/componentes/sections/workWithUs/FormCv";

export default function WorkWithUs() {
  return (
    <section className="bg-azul text-white text-justify">
      <div className="relative w-screen h-screen flex items-center bg-gradient-to-r from-verde p-6 to-azul">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="w-screen lg:w-1/2 flex flex-col justify-center px-16">
            <h1 className="text-2xl lg:text-6xl text-white mb-2">Trabaja con</h1>
            <h2 className="text-3xl lg:text-8xl text-white font-bold mb-4">Nosotros</h2>
            <p className="text-white text-xs lg:text-lg">
              En Venoil Energía, nuestro recurso humano es nuestro principal
              activo. Contamos con personal altamente capacitado, comprometido
              con la excelencia y la calidad. Fomentamos un ambiente que impulsa
              el desarrollo del potencial de cada colaborador.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="Espmen.jpg"
              alt=""
              className="object-cover rounded-full w-3/4 h-3/4 "
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-10 m-4 flex flex-col items-center">
          <img src="lineaPunto.png" alt="Linea y Punto" className="mb-2 w-10" />
          <img src="isotipo.png" alt="Marca de agua" className="w-24" />
        </div>
      </div>
      <FormCV/>
    </section>
  );
}
