import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Readable } from 'stream';

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const nombre = formData.get('nombre') as string;
  const apellido = formData.get('apellido') as string;
  const cargo = formData.get('cargo') as string;
  const descripcion = formData.get('descripcion') as string;
  const cvFile = formData.get('cv') as File;

  if (!nombre || !apellido || !cargo || !descripcion || !cvFile) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
  }

  // Convertimos el archivo a buffer
  const bytes = await cvFile.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Configurar el transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Enviar el email
  await transporter.sendMail({
    from: `"Postulaciones Web" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `Nueva postulación: ${nombre} ${apellido} - ${cargo}`,
    text: `Nombre: ${nombre}\nApellido: ${apellido}\nCargo: ${cargo}\nDescripción: ${descripcion}`,
    attachments: [
      {
        filename: cvFile.name,
        content: buffer,
      },
    ],
  });

  return NextResponse.json({ success: true });
}
