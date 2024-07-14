"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormUpdatePassword from "./FormUpdatePassword";

const UpdatePassword = () => {
  return (
    <div className=" bg-dark-color w-full">
      <div className=" lg:max-w-[1300px] lg:w-[1200px] w-[320px] py-16 mx-auto">
        <div>
          {" "}
          <Link href="/profile" className="lg:flex gap-5">
            <Image
              src="/assets/icon/back.svg"
              width={30}
              height={22}
              alt=""
              className="lg:pt-0 pt-10 hidden lg:block"
            />
            <Image
              src="/assets/icon/back.svg"
              width={30}
              height={22}
              alt=""
              className="lg:pt-0 pt-5 lg:hidden block"
            />
            <h1 className="font-bold text-[24px] text-white hidden lg:block">
              Kembali
            </h1>
          </Link>
        </div>
        <div className=" w-[600px] left-[420px] top-16 bg-[#A60303] rounded-xl absolute">
          <div className=" flex flex-row items-center gap-4 py-5 px-6">
            <Image
              src="/assets/icon/danger.svg"
              width={50}
              height={50}
              alt=""
              className=""
            />
            <h1 className="font-bold text-base text-white">
              Email tidak ditemukan! pastikan email yang anda masukan benar.
            </h1>
          </div>
        </div>
        <div className=" lg:w-6/12 bg-white rounded-lg mx-auto my-16 py-11 lg:px-20 px-7">
          <p className=" font-bold lg:text-2xl text-xl ">Ubah Password</p>
          <div className=" relative lg:my-10 my-5">
            <Image
              src={"/assets/icon/lock.svg"}
              alt=""
              width={128}
              height={128}
              className="lg:w-4/12 w-5/12 mx-auto rounded-full"
            />
          </div>
          <h3 className=" font-bold text-dark-color text-base text-center">
            Masukan email untuk memverifikasi akun anda!{" "}
          </h3>
          <div className="">
            <FormUpdatePassword
              htmlFor="email"
              label="Email"
              type="email"
              placeholder="Masukkan email anda"
              name="email"
              imageClassName=""
              required
            />
          </div>
          <div className=" lg:mt-10 lg:mb-4 my-3 flex justify-center">
            <button className=" bg-dark-color text-white w-6/12 py-3 rounded-lg">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
