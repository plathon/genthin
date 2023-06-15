import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get("test"));
  try {
    const data = await prisma.post.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}
