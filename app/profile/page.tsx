"use client";
import Link from "next/link";
import React from "react";
import DataTable from "../components/DataTable";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useCurrentUser from "@/hooks/useCurrenUser";
import Button from "../components/Button";
import { signOut } from "next-auth/react";
import LoadingModal from "../components/LoadingModal";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";

export default function Profile() {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <LoadingModal />;
  }

  return (
    <main className="profile-page">
      <Head>
        <title>{user?.name}</title>
      </Head>
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <Image
                      alt={`${user?.name}'s profile img`}
                      src={user?.image}
                      loading="lazy"
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={{ maxWidth: "150px" }}
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Button danger={true} onClick={() => signOut()}>
                      Logout
                    </Button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        22
                      </span>
                      <span className="text-sm text-gray-500">Clicks</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        10
                      </span>
                      <span className="text-sm text-gray-500">Links</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        89
                      </span>
                      <span className="text-sm text-gray-500">Visites</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal  text-gray-800 mb-2">
                  {user?.name}
                </h3>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4"></div>
                </div>
                <DataTable onPage={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link
        id="to-top-button"
        href={"/"}
        title="Go To Home"
        className="flex items-center justify-center fixed z-90 top-8 left-8 border-0 w-12 h-12 opacity-20 rounded-full drop-shadow-md bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600 text-white text-3xl font-bold"
      >
        <AiOutlineArrowLeft width={40} height={40} />
      </Link>
      <Footer />
    </main>
  );
}
