"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import Button from "./button";
import DropdownButton from "./dropdownbutton";

export default function Header() {
  const TOP_OFFSET = 10;
  const [showBackground, setShowBackground] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
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

    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token && email) {
      setIsLoggedIn(true);
      fetchUserData(email);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchUserData = async (email: any) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/user/${email}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setUserName(data.value.username);
        console.info("Success get data:", data.message);
      } else {
        console.error("Failed to fetch user data:", data.message);
      }
    } catch (error) {
      console.error("An error occurred while fetching user data:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    router.push("/");
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
          <div className="hidden lg:block">
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
                      {userName}
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
                            href="/profile"
                            className={`${
                              active
                                ? "bg-black/10 text-black"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Edit Akun Profile
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/biodata"
                            className={`${
                              active
                                ? "bg-black/10 text-black"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Isi Biodata
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
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <img
                src="/assets/icon/menu.svg"
                className="lg:hidden"
                width={40}
                height={40}
                alt="Menu Icon"
              />
            </button>
          </div>
        </div>
        <Transition show={isMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-80 z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed top-0 right-0 w-3/4 h-full bg-dark-color text-white shadow-lg z-40">
              <div className="p-4 flex flex-col items-start">
                <button
                  className="mb-4 self-end"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-2xl">&times;</span>
                </button>
                <div className="text-3xl font-bold mb-8">
                  <Image
                    src={"/assets/icon/icon.svg"}
                    alt="Icon Image"
                    width={80}
                    height={80}
                    className="w-[60px] h-[60px]"
                  />
                </div>
                <nav className="flex flex-wrap mb-8 pl-4">
                  <Link
                    href={"/"}
                    className={`text-base font-semibold text-white inline-block text-transparent w-[600px] bg-clip-text ${
                      showBackground ? "text-white" : ""
                    }`}
                  >
                    Beranda
                  </Link>
                  <Link
                    href={""}
                    className={`text-base pt-5 mb-5 font-semibold text-white inline-block text-transparent w-[600px] bg-clip-text ${
                      showBackground ? "text-white" : ""
                    }`}
                    onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
                  >
                    Tentang Kami
                  </Link>
                  <Transition show={isAboutMenuOpen}>
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition ease-in duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="pb-5">
                        <ul className="list-disc">
                          <Link
                            href={"/sejarah"}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-md "
                          >
                            &#9679;<span className=" pr-2"></span>Sejarah
                          </Link>
                          <Link
                            href={"/visi-misi"}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-md"
                          >
                            &#9679; <span className=" pr-2"></span> Visi & Misi
                          </Link>
                          <Link
                            href={"/struktural"}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-md"
                          >
                            &#9679; <span className=" pr-2"></span> Struktural
                          </Link>
                          <Link
                            href={"/anggota"}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-md"
                          >
                            &#9679; <span className=" pr-2"></span> Anggota
                          </Link>
                          <Link
                            href={"/program-kerja"}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-md"
                          >
                            &#9679; <span className=" pr-2"></span> Program
                            Kerja
                          </Link>
                        </ul>
                      </div>
                    </Transition.Child>
                  </Transition>

                  <Link
                    href={"/"}
                    className={`text-base font-semibold ${
                      showBackground ? "text-white" : ""
                    }`}
                  >
                    Vote Bujang Gadis 2024
                  </Link>
                </nav>
                <Link
                  href="/daftar"
                  className="w-[240px] py-3 text-center mx-auto hover:bg-yellow-700 bg-primary-color text-white rounded-lg font-semibold"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </Transition.Child>
        </Transition>
      </nav>
    </header>
  );
}
