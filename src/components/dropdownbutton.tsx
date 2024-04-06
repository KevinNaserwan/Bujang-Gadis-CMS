import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Fragment } from "react";

interface DropdownButtonProps {
    className: string;
  }

export default function DropdownButton({className}: DropdownButtonProps) {
  return (
    <Menu as={"div"} className={"inline-block relative"}>
      <div>
        <Menu.Button
          className={` inline-flex items-center text-base font-bold py-2 px-6 hover:bg-black/30 rounded-md ${className}`}
        >
          Tentang Kami
          <ChevronDownIcon
            className={`-mr-1 ml-2 h-5 w-5 text-black ${className}`}
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
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link href={"/sejarah"}
                  className={`${
                    active ? "bg-black/10 text-black" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Sejarah
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href={"/visi-misi"}
                  className={`${
                    active ? "bg-black/10 text-black" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Visi & Misi
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href={"/struktural"}
                  className={`${
                    active ? "bg-black/10 text-black" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Struktural
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href={"/anggota"}
                  className={`${
                    active ? "bg-black/10 text-black" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Anggota
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href={"/program_kerja"}
                  className={`${
                    active ? "bg-black/10 text-black" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Program Kerja
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
