"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormUpdateProfile from "./components/FormUpdateProfile";

const Profile = () => {
  return (
    <div className=" bg-dark-color w-full">
      <div className=" lg:max-w-[1300px] lg:w-[1200px] w-[320px] py-16 mx-auto">
        <div>
          {" "}
          <Link href="/" className="lg:flex gap-5">
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
          <p className=" font-bold lg:text-2xl text-xl text-center">
            Edit Profile
          </p>
          <div className=" bg-[#D9D9D9] w-full mx-auto h-1 my-6"></div>
          <div className=" relative lg:my-10 my-5">
            <Image
              src={"/assets/images/profile.png"}
              alt=""
              width={128}
              height={128}
              className="lg:w-4/12 w-5/12 mx-auto rounded-full"
            />
            <div className=" lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] absolute lg:right-36 right-20 top-20 lg:top-24 flex items-center justify-center rounded-full bg-dark-color">
              <Image
                src="/assets/images/add.svg"
                alt=""
                width={20}
                height={20}
                className=" lg:w-[20px] lg:h-[20px] w-[15px] h-[15px]"
              />
            </div>
          </div>
          <div className="">
            <FormUpdateProfile
              htmlFor="username"
              label="Username"
              type="text"
              placeholder=""
              name="username"
              imageClassName=""
              required
            />
            <FormUpdateProfile
              htmlFor="email"
              label="Email"
              type="email"
              placeholder=""
              name="email"
              imageClassName=""
              required
            />
            <FormUpdateProfile
              htmlFor="whatsapp_number"
              label="Nomor Whatsapp"
              type="text"
              placeholder=""
              name="whatsapp_number"
              imageClassName=""
              required
            />
          </div>
          <div className=" lg:my-12 my-6 flex justify-center">
            <button className=" bg-dark-color text-white w-6/12 py-3 rounded-lg">
              Simpan
            </button>
          </div>
          <p className=" text-black font-normal lg:text-lg text-sm text-center">
            Ingin merubah password?{" "}
            <span className=" font-bold text-blue-color hover:underline">
              <Link href={"/update-password"}>ubah password</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
