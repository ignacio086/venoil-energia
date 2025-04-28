import InteractMap from "../../InteractMap";
import { useLanguage } from "@/app/context/LanguageContext";
import * as motion from "motion/react-client";
export default function Mapa() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <section className="p-4 bg-azul">
      <div className="flex flex-col bg-azul lg:flex-row items-center justify-center pl-12 lg:pl-0 gap-20">
        <InteractMap />

        <div>
          <motion.div initial={{backgroundColor:'#D9D9D9'}} animate={{backgroundColor:['#54BB5A','#54BB5A','#fff','#54BB5A','#54BB5A']}} transition={{repeat:Infinity,duration:5,}} className=" hidden lg:block lg:w-1 lg:h-72  rounded-2xl"></motion.div>
          <motion.div initial={{backgroundColor:'#D9D9D9'}} animate={{backgroundColor:['#54BB5A','#54BB5A','#fff','#54BB5A','#54BB5A']}} transition={{repeat:Infinity,duration:5,delay:0.2}}  className=" w-72 h-2 lg:w-1 lg:h-6  rounded-2xl my-3"></motion.div>
          <motion.div initial={{backgroundColor:'#D9D9D9'}} animate={{backgroundColor:['#54BB5A','#54BB5A','#fff','#54BB5A','#54BB5A']}} transition={{repeat:Infinity,duration:5,delay:0.4}}  className="hidden lg:block lg:w-1 lg:h-72 rounded-2xl"></motion.div>
        </div>

        <div className="font-medium text-venoil-gray text-justify">
          <h1 className="text-verde text-3xl font-semibold py-4">
            {language == "en"
              ? "Our Presence in the Country"
              : "Nuestra Presencia en el Pais"}
          </h1>
          <p className="py-3 text-lg text-white">
            {language == "en"
              ? "We have strategic operations in various oil wells located in Argentina, among which the following stand out:"
              : "  Contamos con operaciones estratégicas en diversos pozos petroleros ubicados en Argentina, entre los cuales se destacan:"}
          </p>

          <div className="flex-col space-y-2 text-white">
            <p className="text-xs lg:text-lg">• El Manzano (Malargüe, Mendoza)</p>
            <p className="text-xs lg:text-lg">• Piedras Coloradas (Lujan de Cuyo, Mendoza)</p>
            <p className="text-xs lg:text-lg">• Cacheuta (Lujan de Cuyo, Mendoza)</p>
            <p className="text-xs lg:text-lg">• Cañadón Salto (Río Gallegos, Santa Cruz)</p>
            <p className="text-xs lg:text-lg">• Cóndor (Río Gallegos, Santa Cruz)</p>
            <p className="text-xs lg:text-lg">• La Maggie (Río Gallegos, Santa Cruz)</p>
            <p className="text-xs lg:text-lg">• Chimen Aike (Río Gallegos, Santa Cruz)</p>
          </div>

          <p className="py-3 text-xs lg:text-lg text-white">
            {language == "en"
              ? "These locations reflect our commitment to energy development and our active presence in key regions of the country."
              : " Estas locaciones reflejan nuestro compromiso con el desarrollo energético y la presencia activa en regiones clave del país."}
          </p>
        </div>
      </div>
    </section>
  );
}
