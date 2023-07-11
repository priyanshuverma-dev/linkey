import React, { Suspense } from "react";
import DataTable from "../components/DataTable";
import Navbar from "../components/Navbar";
import { Metadata } from "next";
import TableLoading from "../components/TableLoading";

export const metadata: Metadata = {
  title: "Recently shorted",
};

const Recents = () => {
  return (
    <div>
      <Navbar logo="Linkey" />
      <div className="py-2">
        <Suspense fallback={<TableLoading />}>
          <DataTable onPage={true} />
        </Suspense>
      </div>
    </div>
  );
};

export default Recents;
