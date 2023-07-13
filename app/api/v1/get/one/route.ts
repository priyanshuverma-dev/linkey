import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("authorization");

  if (!apiKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { userId, shortId } = await request.json();
  if (!userId) {
    return NextResponse.json(
      {
        error: "You are not authorized to make request no userId found",
      },
      { status: 400 }
    );
  }
  if (!shortId) {
    return NextResponse.json(
      {
        error: "No shortid found",
      },
      { status: 400 }
    );
  }
  try {
    const shortIds = await prisma.shortUrl.findUnique({
      where: {
        shortUrl: shortId,
      },
    });
    if (!shortIds) {
      return NextResponse.json(
        {
          error: "No Short url found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(shortIds);
  } catch (err) {
    console.log(err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.issues, createdApiKey: null },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error", createdApiKey: null },
      { status: 500 }
    );
  }
}
