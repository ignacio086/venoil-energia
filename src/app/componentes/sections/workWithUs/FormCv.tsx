import { handleForm } from "./action";

export default function FormCV() {
  return (
    <form
      action={handleForm}
      method="POST"
      className="flex flex-col gap-4 p-4 max-w-xl mx-auto"
    >
      <p>Ingrese su nombre y apellido</p>
      <input
        type="text"
        name="name"
        placeholder="Nombre y apellido"
        required
        className="border p-2 rounded text-black"
      />
      <p>Ingrese el asunto de su mensaje</p>
      <input
        type="text"
        name="subject"
        placeholder="Asunto"
        required
        className="border p-2 rounded text-black"
      />
      <p>Ingrese su correo de contacto</p>
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
        className="border p-2 rounded text-black"
      />
      <p>Adjunte su Curriculum vitae (Max. 10MB)</p>
      <input
        type="file"
        name="cv"
        accept=".pdf,.doc,.docx"
        required
        className="border p-2 rounded text-black"
      />
      <p className="text-center">
        (si necesita un curriculum de ejemplo, haga click aquí)
      </p>
      <button
        type="submit"
        className="relative px-6 py-2 transition-all bg-azul hover:bg-white rounded-full mt-4 overflow-hidden border-2 border-verde"
      >
        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-verde to-verd">
          Enviar curriculum
        </span>
      </button>
    </form>
  );
}
