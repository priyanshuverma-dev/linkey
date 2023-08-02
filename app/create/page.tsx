"use client";

import useCurrentUser from "@/hooks/useCurrenUser";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsArrowRightShort } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import LoadingModal from "../components/LoadingModal";
import { useRouter } from "next/navigation";
import Head from "next/head";

const Create = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data, isLoading: isUserLoading } = useCurrentUser();
  const router = useRouter();
  if (isUserLoading) {
    return <LoadingModal />;
  }

  const addShortLink = async () => {
    if (longUrl === null) return;
    const userId = data?.id;
    const body = {
      longUrl,
      shortUrl,
      userId: userId,
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

      if (rsData.status === 200) {
        toast.success(rsData.message);
        router.push("/recents");
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
      <Head>
        <title>Create New</title>
      </Head>
      <Link href="/">
        <GrFormClose height={40} width={40} className="h-10 w-10 " />
      </Link>
      <div className="flex h-[90vh] items-center justify-center bg-[#fbfbfb]">
        <div className="grid w-80 grid-rows-4 gap-1">
          <p className="font-semibold text-gray-700">
            💌 Create Short Link, directly with your favoutes.
          </p>
          <input
            disabled={isLoading}
            type="url"
            className="h-10 w-full rounded border p-2 text-sm outline-none"
            placeholder="Enter Long Url"
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg">
            <input
              disabled={isLoading}
              type="text"
              name="shortId"
              className="h-10 w-full rounded border p-2 text-sm outline-none"
              placeholder="Enter Short id (optional)"
              onChange={(e) => setShortUrl(e.target.value)}
            />
            <label
              className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white"
              htmlFor="shortId"
            >
             {process.env.REDIRECT_URL}/
            </label>
          </div>

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
