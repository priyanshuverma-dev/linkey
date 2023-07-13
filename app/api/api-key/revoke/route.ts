import prisma from "@/lib/prisma";
import serverAuth from "@/lib/serverAuth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
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

    if (!existingApiKey) {
      return NextResponse.json(
        {
          error: "This API key could not be revoked.",
          success: false,
        },
        { status: 500 }
      );
    }

    await prisma.apiKey.update({
      where: { id: existingApiKey.id },
      data: {
        enabled: false,
      },
    });

    return NextResponse.json({
      error: null,
      success: true,
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
