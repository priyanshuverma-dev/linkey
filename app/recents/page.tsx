import React from "react";
import DataTable from "../components/DataTable";
import Navbar from "../components/Navbar";
import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Recently shorted",
};

const Recents = () => {
  return (
    <div>
      <Navbar logo="Linkey" />
      <div className="py-2 h-screen">
        <DataTable onPage={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Recents;
