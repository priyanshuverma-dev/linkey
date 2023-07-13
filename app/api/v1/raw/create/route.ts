import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

import validator from "validator";
import { z } from "zod";

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("authorization");

  if (!apiKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { ip, device, shortId, agents } = await request.json();

  if (!shortId) {
    return NextResponse.json({
      error: "Short Id not found",
    });
  }

  try {
    const rawExist = await prisma.rawData.findFirst({
      where: {
        ip: ip,
        shorturlId: shortId,
      },
    });

    if (!rawExist) {
      await prisma.rawData.create({
        data: {
          agents: agents,
          device: device,
          ip: ip,
          shorturlId: shortId,
        },
      });
    }

    return NextResponse.json({
      message: "created",
    });
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
