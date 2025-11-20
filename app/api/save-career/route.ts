import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyuwqUf--LWkUDsg0PY5nJH2PK3t0WPEAJtbspiHOX8vhtFvvotZvYLVVDdBPd-xKbziA/exec";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const payload = {
      formType: "Career Application",
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
    };

    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    const text = await res.text();
    if (!res.ok) throw new Error(text);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Career Submit Error:", error.message);
    return NextResponse.json({ success: false, error: error.message });
  }
}
