"use client";

import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsArrowRightShort } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

const Create = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const addShortLink = async () => {
    if (longUrl === null) return;

    const body = {
      longUrl: longUrl,
      shortUrl: shortUrl,
    };

    fetch("/api/short", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res: any) => {
        if (res.status === 200) {
          toast.success(res.message);
        } else {
          toast.error(res.error);
          // toast.error(res.error);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="bg-[#fbfbfb]">
      <Link href={"/"}>
        <GrFormClose height={40} width={40} className="h-10 w-10 " />
      </Link>
      <div className="flex h-[90vh] items-center justify-center bg-[#fbfbfb]">
        <div className="grid w-80 grid-rows-4 gap-1">
          <p className="font-semibold text-gray-700">
            💌 Create Short Link, directly with your favoutes.
          </p>
          <input
            type="text"
            className="h-10 w-full rounded border p-2 text-sm outline-none"
            placeholder="Enter Long Url"
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <input
            type="text"
            className="h-10 w-full rounded border p-2 text-sm outline-none"
            placeholder="Enter Short id (optional)"
            onChange={(e) => setShortUrl(e.target.value)}
          />
          <button
            onClick={addShortLink}
            className="rounded bg-[#FD5E57] text-gray-50 hover:bg-gradient-to-r hover:from-[#FD5E57] hover:to-[#FC477E]"
          >
            Create
          </button>
          <Link href="/">
            <p className="mt-4 flex items-center text-xs text-gray-500 hover:text-gray-700">
              Recent Shorten links.
              <BsArrowRightShort />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Create;
