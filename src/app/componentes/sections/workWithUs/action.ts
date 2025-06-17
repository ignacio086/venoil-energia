"use server"

import { SendEmail } from "@/lib/NodeMailer"

export async function handleForm(formData:FormData){
    const name = formData.get("name")
    const subject = formData.get("subject")
    const email= formData.get("email")
    const cv = formData.get("cv")

    if(!name || !email || !cv){
        return alert("Rellenar todos los campos")
    }
    console.log({
        name,
        subject,
        email,
        cv
    }
    )
    await SendEmail({
        asunto: subject as string,
        remitente:[
            {
                email:email as string,
                name:name as string
            }
        ],
        cv:cv as File
    })
}