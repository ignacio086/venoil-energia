import { ButtonR } from "../../ButtonR";
import Image from "next/image";

export default function Enlace() {
  return (
    <div>
      <div className="w-screen bg-gradient-to-r from-verde to-azul flex justify-center h-24">
        <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[75px] border-t-white border-r-[50px] border-r-transparent"></div>
      </div>
      <div className="w-screen flex flex-col lg:flex-row items-center justify-around h-52 bg-gradient-to-r from-verde to-azul">
        <div className=" p-2 lg:p-0 w-full lg:text-left text-center lg:w-1/3 text-white">
          <h1 className=" text-lg lg:text-4xl">
            Nos enfocamos cada dia en la excelencia operacional
          </h1>
          <p className="text-xs lg:text-lg ">
            Nuestro norte es brindar servicios de calidad, orientando nuestro
            trabajo hacia la mejora continua{" "}
          </p>
        </div>
        <ButtonR texto="GESTION INTEGRADA" dir="" color="blanco" />
      </div>
      <div className={`w-auto bg-fixed bg-[url("/image1.png")] bg-cover `}>
        <div className="bg-white/80 w-screen h-full flex   lg:flex-row p-4 lg:p-24 ">
          <div className="w-full text-center lg:text-left lg:w-1/3 h-full flex gap-2 lg:gap-5 flex-col text-azul">
            <h1 className="text-lg lg:text-4xl">Se parte de nuestra compania</h1>
            <p className="text-sm lg:text-lg">
              Somos profesionales petroleros que decidimos formar VenOil energia
              con el objetivo de oferecer a la industria un proyecto superador.
              Nuestras experiencias individuales convergen en el deseo de llevar
              adelante nuevos desafios
            </p>
            <div className="w-full flex items-center justify-center">
            <ButtonR texto="TRABAJA CON NOSOTROS" color="verde" dir="" />
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
