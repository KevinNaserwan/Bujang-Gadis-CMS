"use client";

import React, { useState } from "react";
import axios from "axios";

import dotenv from "dotenv";
import Image from "next/image";
import Link from "next/link";

const MainBerhasil = () => {
  return (
    <div
      id="berhasil"
      className="relative lg:pt-16 pt-28 bg-white overflow-hidden"
    >
      <div className="lg:py-24 pb-10 pt-5 container xl:max-w-[1300px] lg:max-w-[1100px] max-w-[330px] mx-auto">
        <div className="bg-white shadow-2xl mt-2 lg:p-10 p-7 rounded-2xl lg:w-6/12 w-[300px] mx-auto h-full flex-col justify-center">
          <div className=" flex flex-col">
            <Image
              src={"assets/images/succes-payment.svg"}
              width={150}
              height={150}
              alt=""
              className=" mx-auto lg:w-[150px] lg:h-[150px] w-[100px] h-[100px]"
            />
            <h1 className=" font-bold lg:text-2xl text-lg text-dark-color text-center mt-5">
              Pembayaran Berhasil!
            </h1>
            <div className=" w-full h-1 bg-[#D9D9D9] my-4"></div>
            <div className=" mt-4 mb-6">
              <p className=" lg:text-lg text-sm font-medium text-center w-11/12 mx-auto">
                Voucher telah dikirim ke email yang anda masukan. Silahkan cek
                email untuk melihat voucher!
              </p>
            </div>
            <div className=" flex flex-row justify-center lg:gap-5 gap-2">
              <Link
                href={"/beli-voucher"}
                className=" bg-[#D9D9D9] hover:bg-black/40 text-black  text-sm font-bold py-3 px-4 rounded-lg lg:w-4/12 w-full text-center"
              >
                Kembali
              </Link>
              <Link
                href={"/vote"}
                className=" bg-dark-color hover:bg-black text-white  text-sm font-bold py-3 px-4 rounded-lg lg:w-4/12 w-full text-center"
              >
                Vote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBerhasil;
