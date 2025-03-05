import { popt } from "@/app/fonts/Fonts";
import textos from "@/lib/textos";
import Image from "next/image";

export default function Presidente() {
  const text = textos.inicio.presidente;
  return (
    <div className="w-screen flex flex-col items-center justify-center h-auto text">
      <h1 className="text-verde text-center text-6xl lg:text-9xl" style={popt.style}>
        Nuestro Presidente
      </h1>
      <div className="flex flex-col lg:flex-row w-full lg:w-2/3 gap-5 justify items-center p-2 lg:p-24">
        <div className="flex flex-col text-center lg:text-left gap-2">
          {text.map((e, i) => {
            return (
              <p key={i} className="text-xs">
                {e}
              </p>
            );
          })}
        </div>
        <Image src="/gustavonaves.jpg" width={0} height={0} className="rounded-ss-3xl" sizes="100vw" style={{ width: "50%", height: "auto" }}  alt="a" />
      </div>
    </div>
  );
}
