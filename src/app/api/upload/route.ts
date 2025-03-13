import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
    }

    const resend = new Resend('re_YSV6Rnvb_JEahEXn61ZAcYQSPJAFYz47o');

    const buffer = Buffer.from(await file.arrayBuffer());

    await resend.emails.send({
      from: 'ignacio086dev@gmail.com',
      to: 'ignaarigomez@gmail.com',
      subject: 'Nuevo archivo PDF',
      html: '<p>Adjunto un nuevo archivo PDF.</p>',
      attachments: [{ filename: file.name, content: buffer }],
    });

    return NextResponse.json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}
