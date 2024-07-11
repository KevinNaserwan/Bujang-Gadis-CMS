"use client";

import Image from "next/image";
import Link from "next/link";
import FormUpdatePassword from "./FormUpdatePassword";
import React, { useState, useRef, Fragment } from "react";

interface CardVoteProps {
  email: string;
}

const VerifyOTP: React.FC<CardVoteProps> = () => {
  const [voucherCode, setVoucherCode] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<Array<React.RefObject<HTMLInputElement>>>([]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const value = e.currentTarget.value.toUpperCase();
    const newVoucherCode = [...voucherCode];
    newVoucherCode[index] = value;
    setVoucherCode(newVoucherCode);

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.current?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      const input = e.currentTarget;
      if (input.value === "") {
        e.preventDefault();
        if (index > 0) {
          inputRefs.current[index - 1]?.current?.focus();
        }
      }
    }
  };

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
          <p className=" font-bold lg:text-2xl text-xl ">Verifikasi Email</p>
          <div className=" relative lg:my-10 my-5">
            <Image
              src={"/assets/icon/verify-otp.svg"}
              alt=""
              width={128}
              height={128}
              className="lg:w-4/12 w-5/12 mx-auto rounded-full"
            />
          </div>
          <h3 className=" font-bold text-dark-color text-base text-center">
            Masukkan Kode Verifikasi
          </h3>
          <div className="mt-6 flex flex-row justify-center gap-4">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-10 h-10 border border-[#6B6B6B] rounded text-center text-lg"
                  ref={inputRefs.current[index]}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
          </div>
          <p className=" text-black font-normal lg:text-lg text-sm text-center lg: mt-10">
            Tidak mendapatkan kode?
            <span className=" font-bold text-blue-color hover:underline">
              <Link href={"/update-password"}> kirim ulang</Link>
            </span>
          </p>
          <div className=" lg:mt-10 lg:mb-4 my-3 flex justify-center">
            <button className=" bg-dark-color text-white w-6/12 py-3 rounded-lg">
              Verifikasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
