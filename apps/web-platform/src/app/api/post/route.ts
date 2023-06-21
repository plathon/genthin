import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";
import { ErrorMessage, StatusCode } from "@/helpers/http";

export async function POST(request: Request) {
  const body = await request.json();
  const userData = await currentUser();

  const { firstName, lastName, username, id } = userData;

  try {
    const user = await prisma.user.findFirst({ where: { userId: id } });
    const post = await prisma.post.create({
      data: {
        authorName: `${firstName} ${lastName}`,
        authorSlug: `${username}`,
        ...body,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { message: ErrorMessage.couldNotProcessRequest },
      { status: StatusCode.internalServerError }
    );
  }
}
