import EmailTemplate from "@/app/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();
  
  try {
    const {data, error} = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['@gmail.com'],
      subject: subject,
      react: EmailTemplate({ message, email, subject }) as React.ReactElement
    })

    if (error) {
      console.log(error);
      
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({data}, {status: 200});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, {status: 500});
  }
}