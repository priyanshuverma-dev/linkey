import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

import validator from "validator";

export async function POST(request: NextRequest) {
  function makeid(length: number) {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const { longUrl, shortUrl, userId } = await request.json();

  if (!userId) {
    return NextResponse.json({
      error: "You are not authorized to make shot link",
      status: 400,
    });
  }

  const reservedWords = [
    "priyanshu",
    "somveer",
    "seema",
    "deepanshi",
    "tanya",
    "pv",
    "priyanshuverma",
    "owner",
    "owned",
    "settings",
    "admin",
    "boss",
    "ceo",
    "founder",
  ];

  const shotID: string = shortUrl || makeid(5);

  if (reservedWords.includes(shotID)) {
    return NextResponse.json({
      error: "You Can't use reserved words",
      status: 400,
    });
  }

  if (longUrl === "") {
    return NextResponse.json({
      error: "Please fill full link Input",
      status: 400,
    });
  }
  if (!validator.isURL(longUrl)) {
    return NextResponse.json({
      error: "You Can't use invalid link",
      status: 400,
    });
  } else {
    try {
      const shortIDExist = await prisma.shortUrl.findUnique({
        where: {
          shortUrl: shotID,
        },
      });

      if (shortIDExist) {
        return NextResponse.json({
          status: 400,
          error: "short link already exist",
        });
      }

      const res = await prisma.shortUrl.create({
        data: {
          shortUrl: shotID,
          longUrl: longUrl as string,
          clicks: 0,
          user: userId,
        },
      });
      console.log(res);

      return NextResponse.json({
        status: 200,
        message: "Short link created",
      });
    } catch (err) {
      console.log(err);
      return NextResponse.json({
        status: 500,
        error: err,
      });
    }
  }
}
