'use client'
import Campos from "@/app/componentes/sections/operadora/Campos";
import Pilares from "@/app/componentes/sections/operadora/Pilares";
import Presentacion from "@/app/componentes/sections/operadora/Presentacion";

export default function Operadora() {
  return (
    <div className="w-screen flex flex-col imtes-center justify-center">
      <Presentacion/>
      <Campos/>
      <Pilares/>
    </div>
  );
}