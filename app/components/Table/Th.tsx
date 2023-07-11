import React from "react";

const Th = ({ children }: { children: React.ReactNode }) => {
  return (
    <th
      scope="col"
      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    >
      {children}
    </th>
  );
};

export default Th;
