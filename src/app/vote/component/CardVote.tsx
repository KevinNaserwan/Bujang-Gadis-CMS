"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

const CardVote = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRefs = useRef<React.RefObject<HTMLInputElement>[]>([]);
  React.useEffect(() => {
    inputRefs.current = Array(6)
      .fill(null)
      .map(() => React.createRef<HTMLInputElement>());
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    if (
      e.currentTarget.value.length === 1 &&
      index < inputRefs.current.length - 1
    ) {
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
    <div className="flex flex-col items-center">
      <div className="lg:w-[300px] relative rounded-lg">
        <Image
          alt=""
          src={"/assets/images/ketua-1.svg"}
          width={300}
          height={0}
          className="rounded-lg"
        />
        <div className="lg:w-[300px] bg-black/80 rounded-b-lg absolute bottom-0 z-10">
          <p className="text-white font-semibold text-lg text-center pt-3 pb-10">
            Chandra Saputra
          </p>
        </div>
        <div
          className="lg:w-9/12 bg-primary-color hover:bg-yellow-600 rounded-lg relative z-20 -bottom-5 text-center left-9 py-3 cursor-pointer"
          onClick={openModal}
        >
          <h1>Vote</h1>
        </div>
        <div className="w-[70px] h-[70px] flex items-center justify-center absolute top-0 left-0 bg-black/80 rounded-tl-lg rounded-br-lg">
          <h1 className="text-white text-[30px] font-semibold">1</h1>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm p-6 pl-8  my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex-col justify-center items-center mb-5 mt-3">
                  <Image
                    alt=""
                    src={"/assets/images/vote.png"}
                    width={100}
                    height={100}
                    className=" mx-auto"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-normal leading-6 text-gray-900 text-center w-full mt-4"
                  >
                    Vote{" "}
                    <span className=" font-bold text-dark-color">
                      Chandra Saputra
                    </span>
                  </Dialog.Title>
                </div>
                <div className=" w-full h-1 bg-primary-color absolute z-10 left-0"></div>
                <div className=" pt-6">
                  <p className=" text-base font-bold text-black text-center">
                    Masukkan kode voucher
                  </p>
                  <div className="mt-4 grid grid-cols-6">
                    {Array(6)
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
                  <div className=" pt-4">
                    <p className=" text-sm">
                      Belum Punya Kode Voucher?<span> </span>
                      <span>
                        <Link
                          href={""}
                          className=" text-sm font-bold text-dark-color"
                        >
                          Beli Voucher
                        </Link>
                      </span>
                    </p>
                  </div>
                  <div className=" py-10"></div>
                  <div className="mt-4 text-center">
                    <button className="bg-dark-color hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg">
                      Kirim Voucher
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CardVote;
