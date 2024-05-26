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
      <div className=" flex items-center gap-2">
        <div
          className={` w-[60px] h-[60px] bg-white border ${colorBorder} flex items-center justify-center rounded-full`}
        >
          <div
            className={` w-[50px] h-[50px] ${colorIcon} rounded-full flex items-center justify-center`}
          >
            <Image src={image} width={23} height={23} alt="" />
          </div>
        </div>
        <div
          className={` w-[200px] h-[10px] ${colorIcon}  rounded-3xl ${hiddenLine}`}
        ></div>
      </div>
      <div className=" mt-2">
        <p className=" font-bold text-xs text-[#979797]">{step}</p>
        <h1 className=" font-bold text-xl text-black py-1">{title}</h1>
        <div className={`${colorStatus} border rounded-3xl ${width}`}>
          <p className={` font-semibold text-[${colorIcon}] text-xs py-1 px-4`}>
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}
