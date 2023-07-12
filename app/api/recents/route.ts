import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      {
        error: "You are not authorized to see",
      },
      { status: 400 }
    );
  }
  try {
    const urlLists = await prisma.shortUrl.findMany({
      where: {
        userId: userId,
      },
    });
    console.log(urlLists);

    if (urlLists.length === 0) {
      return NextResponse.json(
        {
          error: "No urls Yet",
        },
        { status: 404 }
      );
    }

    const data = urlLists.map((shortUrlDoc) => {
      return {
        link: shortUrlDoc.longUrl,
        shorted: shortUrlDoc.shortUrl,
        clicks: shortUrlDoc.clicks,
      };
    });

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      {
        error: err,
      },
      { status: 500 }
    );
  }
}
