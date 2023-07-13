import prisma from "@/lib/prisma";
import serverAuth from "@/lib/serverAuth";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth();

    if (!currentUser) {
      return NextResponse.json(
        {
          error: "Unauthorized to perform this action.",
          createdApiKey: null,
        },
        { status: 401 }
      );
    }

    const existingApiKey = await prisma.apiKey.findFirst({
      where: { userId: currentUser.id, enabled: true },
    });

    if (existingApiKey) {
      return NextResponse.json(
        {
          error: "You already have a valid API key.",
          createdApiKey: null,
        },
        { status: 400 }
      );
    }

    const createdApiKey = await prisma.apiKey.create({
      data: {
        userId: currentUser.id,
        key: nanoid(32),
      },
    });

    return NextResponse.json({
      error: null,
      createdApiKey,
    });
  } catch (err) {
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
