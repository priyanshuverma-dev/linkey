import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('/img/banner.jpg')] p-4 bg-cover bg-center  h-auto text-white py-24 px-10 object-fill">
      <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase text-black">API Services</p>
        <p className="text-3xl font-bold text-black">
          Integrate with yur product
        </p>
        <p className="text-2xl mb-10 leading-none text-black">
          build your own app
        </p>
        <a
          href=""
          className=" py-4 px-8 text-black font-bold uppercase text-xs rounded hover:bg-slate-300 bg-gray-200 hover:text-gray-800"
        >
          Get API KEY (Coming Soon)
        </a>
      </div>
    </div>
  );
};

export default Banner;
