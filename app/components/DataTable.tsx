"use client";
import React from "react";
import Table from "./Table/Table";
import Th from "./Table/Th";
import Tr from "./Table/Tr";
import Td from "./Table/Td";
import Link from "next/link";
import useDataTable from "@/hooks/useDataTable";
import useCurrentUser from "@/hooks/useCurrenUser";
import LoadingModal from "./LoadingModal";

type IProps = {
  link: string;
  shorted: string;
  clicks: number;
};

const DataTable = async ({ onPage }: { onPage: boolean }) => {
  const { data } = useCurrentUser();

  const {
    data: shorts,
    isLoading,
    error,
  }: {
    data: IProps[];
    isLoading: boolean;
    error: any;
  } = useDataTable(data?.id);

  if (isLoading) {
    return <LoadingModal />;
  }
  if (shorts?.length === 0) {
    return <p>No any Data to show</p>;
  }

  return (
    <Table onPage={onPage}>
      <thead className="bg-gray-200 border-2">
        <tr>
          <Th>#</Th>
          <Th>Links</Th>
          <Th>Shorted</Th>
          <Th>Clicks</Th>
        </tr>
      </thead>
      <tbody>
        {shorts?.map((doc) => {
          return (
            <Tr key={Math.random()}>
              <Td>*</Td>
              <Td>
                <a target="_blank" href={`${doc.link}`}>
                  {doc.link}
                </a>
              </Td>
              <Td>
                <a
                  target="_blank"
                  href={`${process.env.REDIRECT_URL}/${doc.shorted}`}
                >
                  https://chatapi.ml/{doc.shorted}
                </a>
              </Td>
              <Td>{doc.clicks}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default DataTable;
