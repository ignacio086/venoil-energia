"use client";

export default function WorkWithUs() {
  return (
    <section className="bg-azul text-white text-justify">
      <div className="relative w-screen h-screen flex items-center bg-gradient-to-r from-verde to-azul">
        <div className="flex w-full h-full">
          <div className="w-1/2 flex flex-col justify-center px-16">
            <h1 className="text-6xl text-white mb-2">Trabaja con</h1>
            <h2 className="text-8xl text-white font-bold mb-4">Nosotros</h2>
            <p className="text-white text-lg">
              En Venoil Energía, nuestro recurso humano es nuestro principal
              activo. Contamos con personal altamente capacitado, comprometido
              con la excelencia y la calidad. Fomentamos un ambiente que impulsa
              el desarrollo del potencial de cada colaborador.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="trab.png"
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
      <div className="w-full flex flex-col items-center my-16 bg-azul">
        <h3 className="text-white text-xl mb-4 font-bold">
          Para postularte, deberás completar el siguiente formulario:
        </h3>
        <div className="relative w-1/2">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 rounded-full bg-blue-900"></div>
          <div className="mb-8 p-10">
            <div className="w-1/2 flex justify-end pr-4">
              <span className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center justify-center border-2 border-blue-900 text-xl">
                1
              </span>
            </div>
            <div className="w-1/2 pr-4">
              <p className="text-white">
                Primero descarga{" "}
                <a href="FormatoCVVENOIL.docx" className="text-verde">
                  aquí
                </a>{" "}
                nuestro formato de Resumen Curricular.
              </p>
            </div>
          </div>
          <div className="mb-8 p-10">
            <div className="-w-1/2 flex justify-center pl-20">
              <span className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center justify-center border-2 border-blue-900 text-xl">
                2
              </span>
            </div>
            <div className="-w-1/2 flex justify-end pr-4">
              <p className="text-white">Completa con tus datos.</p>
            </div>
          </div>
          <div className="mb-8 p-10">
            <div className="w-1/2 flex justify-end pr-4">
              <span className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center justify-center border-2 border-blue-900 text-xl">
                3
              </span>
            </div>
            <div className="w-1/2 pr-4">
              <p className="text-white">
                Cárgalo a través del botón "Enviar Curriculum" y ¡Postúlate!
              </p>
            </div>
          </div>
        </div>
        <button className="relative px-6 py-2 bg-white rounded-full mt-4 overflow-hidden border-2 border-black">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-verde to-azul">
            Enviar curriculum
          </span>
        </button>
      </div>
    </section>
  );
}
