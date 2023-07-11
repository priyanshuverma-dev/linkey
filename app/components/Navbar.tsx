"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { ReactNode, useEffect } from "react";
import Button from "./Button";
import { useUserStore } from "@/store/useUser";

const Navbar = ({ logo }: { logo: ReactNode }) => {
  const getUser = useUserStore((state: any) => state.getUser);
  const user = useUserStore((state: any) => state.user);
  useEffect(() => {
    if (user === null) {
      getUser();
    }

    return () => {};
  }, [user, getUser]);
  const { status } = useSession();

  return (
    <nav className="font-sans flex text-center sm:flex-row sm:text-left justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <Link
          href="/"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-bold "
        >
          {logo}
        </Link>
      </div>
      <div>
        {status === "unauthenticated" ? (
          <Link
            href="/auth"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 mr-2 font-bold text-blue-400"
          >
            Logout
          </Link>
        ) : null}
        {status === "authenticated" ? (
          <Button onClick={signOut}>Logout</Button>
        ) : null}

        {status === "loading" ? <p>Loading</p> : null}
      </div>
    </nav>
  );
};

export default Navbar;
