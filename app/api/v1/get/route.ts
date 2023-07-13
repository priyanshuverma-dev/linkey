import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  const { userId } = await request.json();
  const apiKey = request.headers.get("authorization");

  if (!apiKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!userId) {
    return NextResponse.json(
      {
        error: "You are not authorized to make request no userId found",
      },
      { status: 400 }
    );
  }
  try {
    const shortIds = await prisma.shortUrl.findMany({
      where: {
        userId: userId,
      },
    });
    if (shortIds.length === 0) {
      return NextResponse.json(
        {
          error: "No Short urls found",
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
