import { WillaKontaktEmail } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const json = req.json();
  const { formType, fullName, emailAdress, phone, subject, formContent } =
    await json;

  try {
    const data = await resend.emails.send({
      from: "Kontakt <noreply@resend.dev>",
      to: ["ervk.tomvszek@gmail.com"],
      subject: `[Wiadomość kontaktowa] ${formType} | ${fullName}, ${subject}`,
      react: WillaKontaktEmail({
        formType,
        fullName,
        emailAdress,
        phone,
        subject,
        formContent,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
