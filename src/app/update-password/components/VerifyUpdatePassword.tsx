"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormUpdatePassword from "./FormUpdatePassword";

const VerifyUpdatePassword = () => {
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
        <div className=" lg:w-6/12 bg-white rounded-lg mx-auto my-16 py-11 lg:px-20 px-7">
          <p className=" font-bold lg:text-2xl text-xl ">
            Masukkan Password Baru
          </p>
          <div className=" relative lg:my-10 my-5">
            <Image
              src={"/assets/icon/lock.svg"}
              alt=""
              width={128}
              height={128}
              className="lg:w-4/12 w-5/12 mx-auto rounded-full"
            />
          </div>
          <div className="">
            <FormUpdatePassword
              htmlFor="password"
              label="Password Baru"
              type="password"
              placeholder="Masukkan Kata Sandi Baru"
              name="password"
              imageClassName="hidden"
              required
            />
            <FormUpdatePassword
              htmlFor="password"
              label="Konfirmasi Password"
              type="password"
              placeholder="Konfirmasi Kata Sandi "
              name="password"
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

export default VerifyUpdatePassword;
