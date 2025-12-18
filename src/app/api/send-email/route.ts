import {NextResponse} from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const {email, name, message} = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Novo lead da landing page',
      html: `<p><strong>Nome</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({success: true});
  } catch {
    return NextResponse.json({error: 'Ocorreu um erro ao enviar e-mail.'}, {status: 500});
  }
}