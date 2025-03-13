'use client';
import { useState } from 'react';

export default function ButtonCv() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg">
      <input type="file" accept=".pdf" onChange={handleFileChange} required />
      <button type='submit' className="relative px-6 py-2 bg-white rounded-full mt-4 overflow-hidden border-2 border-black">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-verde to-azul">
            Enviar curriculum
          </span>
        </button>
      {message && <p>{message}</p>}
    </form>
  );
}