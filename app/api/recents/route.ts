import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const urlLists = await prisma.shortUrl.findMany();

  if (urlLists === null) {
    return NextResponse.json({
      error: "No urls Yet",
      status: 404,
    });
  }

  const data = urlLists.map((shortUrlDoc) => {
    return {
      link: shortUrlDoc.longUrl,
      shorted: shortUrlDoc.shortUrl,
      clicks: shortUrlDoc.clicks,
    };
  });

  return NextResponse.json(data);
}
