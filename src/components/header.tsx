"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import { useEffect, useState } from "react";
import Jumbotron from "./jumbotron";
import DropdownButton from "./dropdownbutton";

export default function Header() {
  const TOP_OFFSET = 100;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={` z-50 sticky lg:pt-0 w-full top-0 ${
        showBackground ? " bg-dark-color  shadow-xl" : "bg-none"
      } `}
    >
      <nav className=" container w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          <div className=" flex items-center w-7/12 justify-between">
            <Image
              src={"/assets/icon/icon.svg"}
              alt="Icon Image"
              width={80}
              height={80}
              className=" w-[80px] h-[80px]"
            />
            <div className=" hidden lg:flex gap-14 items-center">
              <Link
                href={"/"}
                className={`text-base font-bold bg-gradient-to-r from-secondary-color to-black inline-block text-transparent bg-clip-text ${
                  showBackground ? " text-white" : ""
                } `}
              >
                Beranda
              </Link>
              <DropdownButton
                className={`${showBackground ? " text-white" : ""} `}
              />
              <Link
                href={"/"}
                className={`text-base font-bold ${
                  showBackground ? " text-white" : ""
                }`}
              >
                Vote Bujang Gadis 2024
              </Link>
            </div>
          </div>
          <div>
            <Button
            href="/daftar"
              name="Daftar"
              className={` lg:block py-3 px-12 bg-gradient-to-br   ${
                showBackground ? " from-primary-color to-white text-black" : " from-secondary-color to-black text-white"
              } hover:bg-none hover:bg-black rounded-lg font-semibold text-base`}
            />
          </div>
          {/* <div>
            <Link href={"/"} className="">
              <Image
                src={"/assets/icon/menu.svg"}
                alt=""
                width={32}
                height={32}
              />
            </Link>
          </div> */}
        </div>
      </nav>
    </header>
  );
}
