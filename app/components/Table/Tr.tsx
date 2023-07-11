import React from "react";

const Tr = ({ children }: { children: React.ReactNode }) => {
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      {children}
    </tr>
  );
};

export default Tr;
