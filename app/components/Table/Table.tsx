import Link from "next/link";
import React, { ReactNode } from "react";

const Table = ({
  children,
  onPage,
}: {
  children: ReactNode;
  onPage: boolean;
}) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-md min-h-max">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <p className="text-sm py-2 underline">
            <Link href={onPage ? `/` : `/recents`}>
              {onPage ? "Home" : "Recently Shorted Urls"}
            </Link>
          </p>
          <div className="overflow-hidden">
            <table className="min-w-full">{children}</table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
