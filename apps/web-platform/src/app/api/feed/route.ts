import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";
import { ErrorMessage, StatusCode } from "@/helpers/http";

export async function GET(request: Request) {
  const { userId } = auth();
  try {
    const postData = prisma.post.findMany({ where: { userId } });
    return NextResponse.json(postData);
  } catch (error) {
    return NextResponse.json(
      { message: ErrorMessage.couldNotProcessRequest },
      { status: StatusCode.internalServerError }
    );
  }
}
