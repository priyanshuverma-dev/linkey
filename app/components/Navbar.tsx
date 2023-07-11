import Link from "next/link";
import React, { ReactNode } from "react";

const Navbar = ({ logo }: { logo: ReactNode }) => {
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
        <Link
          href="/create"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 mr-2 font-bold text-blue-400"
        >
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
