import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  fullName?: string;
  company?: string;
  phone?: string;
  needType?: string;
  message?: string;
};

export const runtime = "nodejs";

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const fullName = asText(body.fullName);
    const company = asText(body.company);
    const phone = asText(body.phone);
    const needType = asText(body.needType);
    const message = asText(body.message);

    if (!fullName || !phone || !message) {
      return NextResponse.json({ error: "INVALID_PAYLOAD" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? user;

    if (!host || !port || !user || !pass || !toEmail) {
      return NextResponse.json({ error: "SMTP_NOT_CONFIGURED" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const sentAt = new Date().toLocaleString("fr-FR");

    await transporter.sendMail({
      from: `"Site GLODIEXPOTRANS" <${user}>`,
      to: toEmail,
      subject: `Nouvelle demande - ${needType || "Contact"}`,
      text:
        `Nom: ${fullName}\n` +
        `Entreprise: ${company || "-"}\n` +
        `Téléphone: ${phone}\n` +
        `Type de besoin: ${needType || "-"}\n` +
        `Date: ${sentAt}\n\n` +
        `Message:\n${message}`,
      html: `
        <h2>Nouvelle demande depuis le site</h2>
        <p><strong>Nom:</strong> ${fullName}</p>
        <p><strong>Entreprise:</strong> ${company || "-"}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Type de besoin:</strong> ${needType || "-"}</p>
        <p><strong>Date:</strong> ${sentAt}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "SEND_FAILED" }, { status: 500 });
  }
}
