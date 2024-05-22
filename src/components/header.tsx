"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import DropdownButton from "./dropdownbutton";
import { useRouter } from "next/navigation";

export default function Header() {
  const TOP_OFFSET = 10;
  const [showBackground, setShowBackground] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check for token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/"); // Redirect to home page after logout
  };

  return (
    <header
      className={`z-20 sticky lg:pt-0 w-full top-0 ${
        showBackground ? "bg-black shadow-2xl" : "bg-none"
      }`}
    >
      <nav className="container w-11/12 lg:max-w-[1200px] xl:max-w-[1300px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center w-8/12 xl:w-7/12 justify-between">
            <Image
              src={"/assets/icon/icon.svg"}
              alt="Icon Image"
              width={80}
              height={80}
              className="w-[80px] h-[80px]"
            />
            <div className="hidden lg:flex gap-14 items-center">
              <Link
                href={"/"}
                className={`text-base font-bold bg-gradient-to-r from-secondary-color to-black inline-block text-transparent bg-clip-text ${
                  showBackground ? "text-white" : ""
                }`}
              >
                Beranda
              </Link>
              <DropdownButton
                className={`${showBackground ? " text-white" : ""} `}
              />
              <Link
                href={"/"}
                className={`text-base font-bold ${
                  showBackground ? "text-white" : ""
                }`}
              >
                Vote Bujang Gadis 2024
              </Link>
            </div>
          </div>
          <div>
            {!isLoggedIn && (
              <Button
                href="/daftar"
                name="Daftar"
                className={`lg:block py-3 px-12 bg-gradient-to-br ${
                  showBackground
                    ? "from-primary-color to-white text-black"
                    : "from-secondary-color to-black text-white"
                } hover:bg-none hover:bg-black rounded-lg font-semibold text-base`}
              />
            )}
            {isLoggedIn && (
              <Menu as={"div"} className={"relative inline-block text-left"}>
                <div>
                  <Menu.Button className="flex items-center gap-3 hover:bg-white/40 py-2 px-4 rounded-lg">
                    <Image
                      src="/assets/icon/user.png"
                      width={40}
                      height={40}
                      alt="User Icon"
                    />
                    <p
                      className={`lg:block text-base font-medium bg-gradient-to-r from-secondary-color to-black inline-block text-transparent bg-clip-text ${
                        showBackground ? "text-white" : ""
                      }`}
                    >
                      Kevin Naserwan
                    </p>
                    <ChevronDownIcon
                      className={`-mr-1 ml-2 h-5 w-5 ${
                        showBackground ? "text-white" : "text-black"
                      }`}
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/edit-profile"
                            className={`${
                              active
                                ? "bg-black/10 text-black"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Edit
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={`${
                              active
                                ? "bg-black/10 text-black"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Log out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
