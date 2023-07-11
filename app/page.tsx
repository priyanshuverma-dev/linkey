import { Suspense } from "react";
import Banner from "./components/Banner";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TableLoading from "./components/TableLoading";

export default function Home() {
  return (
    <div>
      <Navbar logo="Linkey" />
      <Header />
      <Banner />
      <Suspense fallback={<TableLoading />}>
        <DataTable onPage={false} />
      </Suspense>
    </div>
  );
}
