import Image from "next/image";
import React from "react";

interface step {
  step: string;
  title: string;
  hiddenLine: string;
  image: string;
  colorIcon: string;
  status: string;
  colorStatus: string;
  colorBorder: string;
  width: string;
}

export default function Step({
  step,
  title,
  hiddenLine,
  image,
  colorIcon,
  colorBorder,
  status,
  colorStatus,
  width,
}: step) {
  return (
    <div>
      <div className=" flex items-center lg:gap-2 gap-0">
        <div
          className={` lg:w-[60px] lg:h-[60px]  bg-white border ${colorBorder} flex items-center justify-center rounded-full`}
        >
          <div
            className={` lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] ${colorIcon} rounded-full flex items-center justify-center`}
          >
            <Image
              src={image}
              width={23}
              height={23}
              className="lg:w-[23px] lg:h-[23px] w-[15px] h-[15px]"
              alt=""
            />
          </div>
        </div>
        <div
          className={` lg:w-[200px] lg:h-[10px] w-[55px] h-[5px] ${colorIcon}  lg:rounded-3xl ${hiddenLine}`}
        ></div>
      </div>
      <div className=" mt-2">
        <p className=" font-bold text-xs text-[#979797] lg:block hidden">
          {step}
        </p>
        <h1 className=" font-medium lg:font-bold text-xs lg:text-xl text-black py-1 lg:max-w-full max-w-[20px]">
          {title}
        </h1>
        <div
          className={`${colorStatus} border rounded-3xl lg:block hidden ${width}`}
        >
          <p className={` font-semibold text-[${colorIcon}] text-xs py-1 px-4`}>
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}
