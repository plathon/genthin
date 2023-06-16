import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { userId } = auth();
  return NextResponse.json({ userId: userId });
}
