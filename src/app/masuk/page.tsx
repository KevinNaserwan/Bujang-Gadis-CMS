"use client";

import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSearchParams } from "next/navigation";
import Form from "@/components/form";
import Image from "next/image";
import Link from "next/link";

interface Errors {
  email?: string;
  password?: string;
}

export default function Masuk() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      setIsModalOpen(true);
    }
  }, [searchParams]);

  function closeModal() {
    setIsModalOpen(false);
  }

  const validateForm = (): Errors => {
    const errors: Errors = {};
    if (!email) {
      errors.email = "Email is required.";
    }
    if (!password) {
      errors.password = "Password is required.";
    } else {
      if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long.";
      }
      if (!/^[A-Z]/.test(password)) {
        errors.password = "Password must start with a capital letter.";
      }
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Continue with form submission
      console.log("Form submitted");
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <main className="overflow-hidden lg:bg-none bg-login-hero-image-mobile bg-cover bg-center max-h-screen">
      <div className=" lg:flex lg:items-center overflow-hidden pt-[25%] pb-[50%] lg:mt-0 lg:py-0">
        <div className=" hidden lg:block">
          <Image
            src="/assets/images/login-image.webp"
            alt=""
            width={700}
            height={700}
            className=" max-h-screen "
          />
        </div>
        <div className=" bg-white/80 lg:max-w-full max-w-[320px] mx-auto lg:py-0 lg:px-0 py-5 px-8 rounded-[20px]">
          <div className=" lg:max-w-full max-w-[300px] mx-auto lg:mb-12 pb-5 lg:pb-0">
            <div className=" mx-auto">
              <Image
                src="/assets/icon/icon.svg"
                width={100}
                height={100}
                alt=""
                className=" mx-auto lg:m-0 lg:mx- lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]"
              />
              <div className=" h-[2px] bg-[#D9D9D9] lg:block hidden"></div>
              <div className=" mt-2 lg:mt-12">
                <h1 className=" lg:font-bold lg:text-4xl font-semibold text-2xl">
                  Masuk ke Akun Anda!
                </h1>
                <p className=" lg:font-medium lg:text-sm font-semibold text-xs text-[#414141] mt-1">
                  Selamat datang, silahkan masukkan email dan kata sandi Anda.
                </p>
              </div>
              <form
                action=""
                onSubmit={handleSubmit}
                className=" = lg:my-12 my-5"
              >
                <Form
                  htmlFor="email"
                  label="Email"
                  type="email"
                  imageSrc="/assets/icon/mail.svg"
                  placeholder="Masukkan email Anda"
                  imageClassName="hidden"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
                <Form
                  htmlFor="password"
                  label="Password"
                  type="password"
                  imageSrc="/assets/icon/password.svg"
                  placeholder="Masukkan password Anda"
                  imageClassName="mr-4 lg:w-[22px] lg:h-[22px] w-[17px] h-[17px]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
                <div className=" flex justify-between items-center mb-5 mt-2">
                  <div className=" flex gap-2">
                    <input
                      type="checkbox"
                      className=" checked:bg-blue-color"
                      id="remember"
                    />
                    <label
                      htmlFor="remember"
                      className=" text-xs font-normal text-[#979797]"
                    >
                      Ingatkan saya
                    </label>
                  </div>
                  <Link
                    href=""
                    className=" font-bold text-xs text-blue-color hover:underline"
                  >
                    Lupa Password?
                  </Link>
                </div>
                <button className=" w-full bg-blue-color rounded-lg hover:bg-dark-color">
                  <p className=" font-bold text-white text-sm py-3">Masuk</p>
                </button>
              </form>
              <div className=" h-[2px] bg-[#D9D9D9] lg:block hidden"></div>
              <div className=" flex lg:gap-1 gap-1 justify-center mt-3 items-center">
                <p className=" font-medium text-xs lg:text-sm">
                  Tidak Punya Akun?
                </p>
                <Link
                  href="/daftar"
                  className=" lg:font-medium font-bold hover:underline text-sm text-blue-color"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Registrasi Mu Berhasil !
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Akun anda berhasil dibuat, silakan login disini.
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Yes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}
