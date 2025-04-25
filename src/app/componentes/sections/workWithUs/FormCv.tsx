'use client';

import { useState } from 'react';

export default function JobApplicationForm() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    cargo: '',
    descripcion: '',
    cv: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm({ ...form, cv: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Enviar datos (ejemplo básico)
    const data = new FormData();
    data.append('nombre', form.nombre);
    data.append('apellido', form.apellido);
    data.append('cargo', form.cargo);
    data.append('descripcion', form.descripcion);
    if (form.cv) data.append('cv', form.cv);

    fetch('/api/submit', {
      method: 'POST',
      body: data,
    })
      .then(() => alert('Formulario enviado'))
      .catch(() => alert('Error al enviar'));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-md space-y-4">
      <h1 className="text-xl font-bold text-center">Postulación</h1>

      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        name="apellido"
        placeholder="Apellido"
        value={form.apellido}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        name="cargo"
        placeholder="Cargo al que postula"
        value={form.cargo}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={form.descripcion}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="w-full"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </form>
  );
}
