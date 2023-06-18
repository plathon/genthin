import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";
import { ErrorMessage, StatusCode } from "@/helpers/http";

export async function POST(request: Request) {
  console.log(123);
  return NextResponse.json({ test: "server" });
  // const body = await request.json();
  // const {
  //   user: { firstName, lastName, username, id },
  // } = auth();
  // try {
  //   const post = await prisma.post.create({
  //     data: {
  //       authorName: `${firstName} ${lastName}`,
  //       authorSlug: `${username}`,
  //       ...body,
  //       user: {
  //         connect: {
  //           id,
  //         },
  //       },
  //     },
  //   });
  //   return NextResponse.json({ post });
  // } catch (error) {
  //   return NextResponse.json(
  //     { message: ErrorMessage.couldNotProcessRequest },
  //     { status: StatusCode.internalServerError }
  //   );
  // }
}
