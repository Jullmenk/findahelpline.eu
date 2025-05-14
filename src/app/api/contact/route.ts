// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { prismaL } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const created = await prismaL.contact.create({
      data: {
        email,
        subject,
        message,
      },
    });

    return NextResponse.json({ success: true, data: created });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
