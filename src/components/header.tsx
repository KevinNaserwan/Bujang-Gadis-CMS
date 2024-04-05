"use client"

import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import { useEffect, useState } from "react";

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
    <header className={` z-50 sticky w-full top-0 ${showBackground ? " bg-dark-color shadow-xl" : "bg-none"} `}>
      <nav className=" container mx-auto">
        <div className="flex items-center justify-between">
          <div className=" flex items-center w-7/12 justify-between">
            <Image
              src={"/assets/icon/icon.svg"}
              alt="Icon Image"
              width={80}
              height={80}
            />
            <div className=" flex gap-14 items-center">
              <Link
                href={"/sejarah"}
                className={`text-base font-bold bg-gradient-to-r from-secondary-color to-black inline-block text-transparent bg-clip-text ${showBackground ? " text-white" : ""} `}
              >
                Beranda
              </Link>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className={`font-bold hover:bg-dark-color hover:bg-opacity-20 hover:text-opacity-100 focus:ring-0 focus:outline-none rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center ${showBackground ? " text-white hover:bg-slate-500" : ""} `}
                type="button"
              >
                Tentang Kami{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <Link href={"/"} className={`text-base font-bold ${showBackground ? " text-white" : ""}`}>
                Vote Bujang Gadis 2024
              </Link>
            </div>
          </div>
          <div>
            <Button
              name="Daftar"
              className={`py-3 px-12 bg-gradient-to-br ${showBackground ? " from-yellow-600 to-black" : ""}   from-secondary-color to-black hover:bg-none hover:bg-black rounded-lg font-semibold text-base text-white`}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
