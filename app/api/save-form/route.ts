import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyeAebX4ei3Ha3DpvIscclrBg9P-e9ExC3asY8rL5_MnAGGYEWrx3tz7lGg_mE_dhgD/exec";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const text = await res.text();
    if (!res.ok) throw new Error(text);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Sales Submit Error:", error.message);
    return NextResponse.json({ success: false, error: error.message });
  }
}
