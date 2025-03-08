import { popt } from "@/app/fonts/Fonts";
import InteractMap from "../../InteractMap";

export default function Mapa() {
  return (
    <section className="p-4">
      <div className="flex items-center justify-center gap-20">
        <InteractMap />

        <div>
          <div className="w-1 h-72 bg-[#D9D9D9] rounded-2xl"></div>
          <div className="w-1 h-6 bg-[#D9D9D9] rounded-2xl my-3"></div>
          <div className="w-1 h-72 bg-[#D9D9D9] rounded-2xl"></div>
        </div>

        <div className="font-medium text-venoil-gray">
          <h1 className="text-verde text-3xl font-semibold py-4">
            Nuestro Presencia en el Pais
          </h1>
          <p className="py-3">
            Contamos con operaciones estratégicas en diversos pozos petroleros
            ubicados en Argentina, entre los cuales se destacan:
          </p>

          <div className="flex-col space-y-2">
            <p>• El Manzano (San Rafael, Mendoza)</p>
            <p>• Cañadón Salto (Río Gallegos, Santa Cruz)</p>
            <p>• Cóndor (Río Gallegos, Santa Cruz)</p>
            <p>• La Maggie (Río Gallegos, Santa Cruz)</p>
            <p>• Chimen Aike (Río Gallegos, Santa Cruz)</p>
          </div>

          <p className="py-3">
            Estas locaciones reflejan nuestro compromiso con el desarrollo
            energético y la presencia activa en regiones clave del país.
          </p>
        </div>
      </div>
    </section>
  );
}
