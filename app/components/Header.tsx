"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-around items-center gap-5 w-full h-96 p-4">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-900">
          🎉 Create a short version of your links. Free Forever
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Elevate your online presence with our powerful URL shortening service
          and gain full control over your links. Our SaaS platform offers a
          comprehensive API solution, empowering developers to integrate and
          customize our URL shortening capabilities into their own applications
          seamlessly.
        </p>
      </div>
      <div>
        <Button onClick={() => router.push("/create")}>
          Create short link
        </Button>
        {/* <Link
          className="shadow-md rounded-md m-2 p-4 bg-[#FD5E57] text-gray-50 hover:bg-gradient-to-r hover:from-[#FD5E57] hover:to-[#FC477E]"
          href="/create"
          >
          Create short link
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
