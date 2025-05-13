import { prismaL } from "@/lib/prisma";
import { Helpline } from "@/types/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const helplines = await prismaL.helpline.findMany({
      include: { countryRel: true },
    });
    return NextResponse.json(helplines);
  } catch (error) {
    console.error("Error fetching helplines:", error);
    return NextResponse.json({ error: "Failed to fetch helplines" }, { status: 500 });
  }
}
