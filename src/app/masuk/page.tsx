"use client";

import { useEffect, useState, Fragment, Suspense, FormEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@/components/form";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dotenv from "dotenv";

interface Errors {
  email?: string;
  password?: string;
}

function LoginContent() {
  dotenv.config();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");

  useEffect(() => {
    if (registered === "true") {
      toast.success(
        "Akun Anda berhasil dibuat, silakan cek email anda untuk aktivasi"
      );
    }
  }, [registered]);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/v1/user/login`, {
          method: "POST",
          headers: {
            "ngrok-skip-browser-warning": "any-value",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("token", data.value.token);
          localStorage.setItem("email", email);
          router.push("/");
        } else {
          setApiError(data.message);
        }
      } catch (error) {
        setApiError("An error occurred. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <main className="overflow-hidden lg:bg-none bg-login-hero-image-mobile bg-cover bg-center max-h-screen">
      <div className="lg:flex lg:items-center overflow-hidden pt-[25%] pb-[50%] lg:mt-0 lg:py-0">
        <div className="hidden lg:block">
          <Image
            src="/assets/images/login-image.webp"
            alt=""
            width={700}
            height={700}
            className="max-h-screen"
          />
        </div>
        <div className="bg-white/80 lg:max-w-full max-w-[320px] mx-auto lg:py-0 lg:px-0 py-5 px-8 rounded-[20px]">
          <div className="lg:max-w-full max-w-[300px] mx-auto lg:mb-12 pb-5 lg:pb-0">
            <div className="mx-auto">
              <Image
                src="/assets/icon/icon.svg"
                width={100}
                height={100}
                alt=""
                className="mx-auto lg:m-0 lg:mx- lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]"
              />
              <div className="h-[2px] bg-[#D9D9D9] lg:block hidden"></div>
              <div className="mt-2 lg:mt-12">
                <h1 className="lg:font-bold lg:text-4xl font-semibold text-2xl">
                  Masuk ke Akun Anda!
                </h1>
                <p className="lg:font-medium lg:text-sm font-semibold text-xs text-[#414141] mt-1">
                  Selamat datang, silahkan masukkan email dan kata sandi Anda.
                </p>
              </div>
              <form action="" onSubmit={handleSubmit} className="lg:my-12 my-5">
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
                {apiError && <p className="text-red-500 text-xs">{apiError}</p>}
                <div className="flex justify-between items-center mb-5 mt-2">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      className="checked:bg-blue-color"
                      id="remember"
                    />
                    <label
                      htmlFor="remember"
                      className="text-xs font-normal text-[#979797]"
                    >
                      Ingatkan saya
                    </label>
                  </div>
                  <Link
                    href=""
                    className="font-bold text-xs text-blue-color hover:underline"
                  >
                    Lupa Password?
                  </Link>
                </div>
                <button className="w-full bg-blue-color rounded-lg hover:bg-dark-color">
                  <p className="font-bold text-white text-sm py-3">Masuk</p>
                </button>
              </form>
              <div className="h-[2px] bg-[#D9D9D9] lg:block hidden"></div>
              <div className="flex lg:gap-1 gap-1 justify-center mt-3 items-center">
                <p className="font-medium text-xs lg:text-sm">
                  Tidak Punya Akun?
                </p>
                <Link
                  href="/daftar"
                  className="lg:font-medium font-bold hover:underline text-sm text-blue-color"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {isLoading && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <div className="loader"></div>
        </div>
      )}
    </main>
  );
}

export default function Masuk() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <LoginContent />
    </Suspense>
  );
}
