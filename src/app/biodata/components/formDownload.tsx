import Link from "next/link";
import React from "react";

export default function FormDownload() {
  return (
    <div className=" w-[330px] lg:w-[600px] mx-auto lg:mt-24 mt-12 rounded-2xl bg-dark-color">
      <div className=" py-10 lg:py-14 px-10">
        <h1 className=" lg:text-2xl text-base text-white text-left font-bold">
          Pendaftaran Mu Berhasil, Silakan Download Formulir Pendaftaran Mu
          Dibawah Ini
        </h1>
        <div className=" pt-8">
          <Link
            href=""
            className=" bg-green-500 text-white hover:bg-green-900 font-semibold lg:text-base text-sm  text-center py-2 px-4 rounded-md"
          >
            Download Formulir
          </Link>
        </div>
      </div>
    </div>
  );
}
