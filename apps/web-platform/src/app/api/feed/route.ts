import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";
import { ErrorMessage, StatusCode } from "@/helpers/http";

export async function GET(request: Request) {
  const { userId } = auth();
  try {
    const user = await prisma.user.findFirst({ where: { userId } });
    const postsData = await prisma.post.findMany({
      where: { userId: user.id },
      orderBy: {
        created_at: "desc",
      },
      include: {
        comments: true,
        _count: {
          select: { likes: true, comments: true },
        },
      },
    });
    return NextResponse.json(postsData);
  } catch (error) {
    return NextResponse.json(
      { message: ErrorMessage.couldNotProcessRequest },
      { status: StatusCode.internalServerError }
    );
  }
}
