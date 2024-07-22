"use client";

import Image from "next/image";
import React, { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import axios from "axios";

interface User {
  user_id: number;
  nama_lengkap: string;
  foto: string;
}

interface CardVoteProps {
  user: User;
}

const CardVote: React.FC<CardVoteProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [voucherCode, setVoucherCode] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState<string | null>(null);
  const urlApi = process.env.NEXT_PUBLIC_API_URL;
  const inputRefs = useRef<Array<React.RefObject<HTMLInputElement>>>([]);

  React.useEffect(() => {
    inputRefs.current = Array(6)
      .fill(null)
      .map(() => React.createRef<HTMLInputElement>());
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

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

  const handleSubmit = async () => {
    const code = voucherCode.join("");
    try {
      const response = await axios.post(
        `${urlApi}/api/v1/voucher/vote`,
        {
          user_id: user.user_id,
          code: code,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "any-value",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      setError(null);
      closeModal();
      // Tambahkan logika tambahan untuk menampilkan pesan sukses atau melakukan tindakan lainnya
    } catch (error) {
      console.error("Error submitting voucher code:", error);
      setError("Error submitting voucher code");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="lg:w-[300px] lg:h-[280px] relative rounded-lg">
        <Image
          alt=""
          src={`${urlApi}/uploads/foto/${user.foto}`}
          width={300}
          height={0}
          className="rounded-lg lg:w-[300px] w-[200px] lg:h-[240px] h-[200px] object-cover"
        />
        <div className="lg:w-[300px] w-full bg-black/80 rounded-b-lg absolute bottom-0 z-10">
          <p className="text-white font-semibold lg:text-lg text-base text-center pt-3 lg:pb-10 pb-7">
            {user.nama_lengkap}
          </p>
        </div>
        <div
          className="lg:w-9/12 w-6/12 bg-primary-color hover:bg-yellow-600 rounded-lg relative z-20 -bottom-5 text-center lg:left-9 left-[50px] lg:py-3 py-2 cursor-pointer"
          onClick={openModal}
        >
          <h1 className=" font-semibold">Vote</h1>
        </div>
        <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] flex items-center justify-center absolute top-0 left-0 bg-black/80 rounded-tl-lg rounded-br-lg">
          <h1 className="text-white lg:text-[30px] text-base font-semibold">
            {user.user_id}
          </h1>
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
              <div className="inline-block w-full max-w-sm p-6 pl-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex-col justify-center items-center mb-5 mt-3">
                  <Image
                    alt=""
                    src={"/assets/images/vote.png"}
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-normal leading-6 text-gray-900 text-center w-full mt-4"
                  >
                    Vote{" "}
                    <span className="font-bold text-dark-color">
                      {user.nama_lengkap}
                    </span>
                  </Dialog.Title>
                </div>
                <div className="w-full h-1 bg-primary-color absolute z-10 left-0"></div>
                <div className="pt-6">
                  <p className="text-base font-bold text-black text-center">
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
                  {error && (
                    <p className="text-red-500 text-sm text-center mt-4">
                      {error}
                    </p>
                  )}
                  <div className="pt-4">
                    <p className="text-sm">
                      Belum Punya Kode Voucher?{" "}
                      <span>
                        <Link
                          href={""}
                          className="text-sm font-bold text-dark-color"
                        >
                          Beli Voucher
                        </Link>
                      </span>
                    </p>
                  </div>
                  <div className="py-10"></div>
                  <div className="mt-4 text-center">
                    <button
                      onClick={handleSubmit}
                      className="bg-dark-color hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg"
                    >
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
