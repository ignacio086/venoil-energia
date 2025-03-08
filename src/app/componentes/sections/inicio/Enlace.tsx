import { ButtonR } from "../../ButtonR";
import Image from "next/image";

export default function Enlace() {
  return (
    <div>
      <section className="relative flex items-center justify-center bg-gradient-to-r from-verde to-azul text-white p-12 gap-16">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
        <div className="w-[45%]">
          <h1 className="text-2xl font-semibold">
            Nos enfocamos cada día en la excelencia operacional
          </h1>
          <p className="text-sm">
            Nuestro norte es brindar servicios de calidad, orientando nuestro
            trabajo hacia la mejora continua y la eficiencia operativa.
          </p>
        </div>
        <a href="/gestion" className="text-xs font-semibold border-2 border-white rounded-full py-2 px-4 hover:bg-white hover:text-black transition duration-300 transform hover:scale-105 shadow-md">
          GESTIÓN INTEGRADA
        </a>
      </section>
      <div className={`w-auto bg-fixed bg-[url("/image1.png")] bg-cover `}>
        <div className="bg-white/80 w-screen h-full flex   lg:flex-row p-4 lg:p-24 ">
          <div className="w-full text-center lg:text-left lg:w-1/3 h-full flex gap-2 lg:gap-5 flex-col text-azul">
            <h1 className="text-lg lg:text-4xl">
              Se parte de nuestra compania
            </h1>
            <p className="text-sm lg:text-lg">
              Somos profesionales petroleros que decidimos formar VenOil energia
              con el objetivo de oferecer a la industria un proyecto superador.
              Nuestras experiencias individuales convergen en el deseo de llevar
              adelante nuevos desafios
            </p>
            <div className="w-full flex items-center justify-center">
              <ButtonR
                texto="TRABAJA CON NOSOTROS"
                color="verde"
                dir="/workWithUs"
              />
            </div>
          </div>
          <div className="flex items-center w-full lg:w-2/3 justify-center">
            <Image
              src="/LOGO HORIZONTAL-01 1.png"
              width={550}
              height={50}
              alt="a"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
