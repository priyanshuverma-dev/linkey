"use client";

import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsArrowRightShort } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

export const metadata = {
  title: "Create new",
};

const Create = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addShortLink = async () => {
    if (longUrl === null) return;

    const body = {
      longUrl,
      shortUrl,
    };
    setIsLoading(true);
    const toasterLoading = toast.loading("Loading..");
    try {
      const res = await fetch(`/api/short `, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(body),
      });

      const rsData = await res.json();
      console.log(rsData);
      if (rsData.status === 200) {
        toast.success(rsData.message);
      } else {
        toast.error(rsData.error);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      toast.dismiss(toasterLoading);
    }
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
            disabled={isLoading}
            type="text"
            className="h-10 w-full rounded border p-2 text-sm outline-none"
            placeholder="Enter Long Url"
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <input
            disabled={isLoading}
            type="text"
            className="h-10 w-full rounded border p-2 text-sm outline-none"
            placeholder="Enter Short id (optional)"
            onChange={(e) => setShortUrl(e.target.value)}
          />
          <button
            disabled={isLoading}
            onClick={addShortLink}
            className="rounded bg-[#FD5E57] text-gray-50 hover:bg-gradient-to-r hover:from-[#FD5E57] hover:to-[#FC477E]"
          >
            Create
          </button>
          <Link href="/recents">
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
