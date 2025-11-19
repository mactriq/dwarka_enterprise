import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let name, email, phone, address, message, formType, cvFile;

    if (contentType.includes("multipart/form-data")) {
      // Handle Career form (with file)
      const formData = await request.formData();

      formType = formData.get("formType") as string;
      name = formData.get("name") as string;
      email = formData.get("email") as string;
      phone = formData.get("phone") as string;
      address = formData.get("address") as string;
      cvFile = formData.get("cv") as File | null;

      message = `Address: ${address}`;
    } else {
      // Handle Sales form (JSON)
      const body = await request.json();
      ({ name, email, phone, message, formType } = body);
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ success: false, error: "Server email config missing" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments: any[] = [];

    if (cvFile) {
      const arrayBuffer = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "harshitchejara29@gmail.com",
      subject: `New ${formType} Submission`,
      text: `
Form Type: ${formType}
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
`,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
