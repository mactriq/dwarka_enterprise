import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let data: any = {};

    // Detect JSON or FormData (career form with file)
    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const formType = formData.get("formType") as string;
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const address = formData.get("address") as string;
      const cv = formData.get("cv") as File | null;

      data = {
        formType,
        name,
        email,
        phone,
        address,
        // cvName: cv ? cv.name : "Not uploaded",
      };
    } else {
      data = await request.json(); // Sales form
    }

    // Build email content
    let emailText = `Form Type: ${data.formType}\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n`;

    // Include career-specific fields if present
    if (data.address) {
      emailText += `Address: ${data.address}\n`;
    }
    if (data.cvName) {
      emailText += `CV File: ${data.cvName}\n`;
    }
    if (data.message) {
      emailText += `Message: ${data.message}\n`;
    }

    // Send email via Resend
    await resend.emails.send({
      from: "Your Website <onboarding@resend.dev>",
      to: "harshitchejara29@gmail.com",
      subject: `New ${data.formType} Submission`,
      text: emailText,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Resend email error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
