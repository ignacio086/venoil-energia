import { popt } from "@/app/fonts/Fonts";
import InteractMap from "../../InteractMap";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Mapa() {
  const { language, toggleLanguage } = useLanguage();
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
            {language == "en"
              ? "Our Presence in the Country"
              : "Nuestra Presencia en el Pais"}
          </h1>
          <p className="py-3">
            {language == "en"
              ? "We have strategic operations in various oil wells located in Argentina, among which the following stand out:"
              : "  Contamos con operaciones estratégicas en diversos pozos petroleros ubicados en Argentina, entre los cuales se destacan:"}
          </p>

          <div className="flex-col space-y-2">
            <p>• El Manzano (San Rafael, Mendoza)</p>
            <p>• Cañadón Salto (Río Gallegos, Santa Cruz)</p>
            <p>• Cóndor (Río Gallegos, Santa Cruz)</p>
            <p>• La Maggie (Río Gallegos, Santa Cruz)</p>
            <p>• Chimen Aike (Río Gallegos, Santa Cruz)</p>
          </div>

          <p className="py-3">
            {language == "en"
              ? "These locations reflect our commitment to energy development and our active presence in key regions of the country."
              : " Estas locaciones reflejan nuestro compromiso con el desarrollo energético y la presencia activa en regiones clave del país."}
          </p>
        </div>
      </div>
    </section>
  );
}
