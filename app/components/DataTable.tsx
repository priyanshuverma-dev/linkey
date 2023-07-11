import React from "react";
import Table from "./Table/Table";
import Th from "./Table/Th";
import Tr from "./Table/Tr";
import Td from "./Table/Td";
import Link from "next/link";

type IProps = {
  link: string;
  shorted: string;
  clicks: number;
};

const DataTable = async ({ onPage }: { onPage: boolean }) => {
  const res = await fetch(`${process.env.NEXT_URL}/api/recents`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  const shorts: IProps[] = await res.json();

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
        {shorts.map((doc) => {
          return (
            <Tr>
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
                  {doc.shorted}
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
