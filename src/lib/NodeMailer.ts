import { EmailParams } from "@/app/types/tipos";
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
export async function SendEmail({ asunto, remitente, cv }: EmailParams){
    const arrayBuffer = await cv.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Venoil Energía" <${process.env.EMAIL_TO}>`,
      to: process.env.EMAIL_FROM,
      subject: `${asunto} : ${remitente[0].name}`,
      text: `Nombre: ${remitente[0].name}\nEmail: ${remitente[0].email}`,
      attachments: [
        {
          filename: cv.name,
          content: buffer,
        },
      ],
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error al enviar:', error)
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 })
  }

}