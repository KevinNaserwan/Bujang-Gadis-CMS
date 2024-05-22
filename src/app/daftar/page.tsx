"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Form from "@/components/form";
import Image from "next/image";
import Link from "next/link";

interface Errors {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Daftar() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const validateForm = (): Errors => {
    const errors: Errors = {};
    if (!email) {
      errors.email = "Email is required.";
    }
    if (!username) {
      errors.username = "Username is required.";
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
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/user/register",
          {
            username,
            email,
            password,
          }
        );
        console.log("Form submitted successfully:", response.data);
        router.push(`/masuk?registered=true`);
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle form submission error, e.g., show an error message
      } finally {
        setIsLoading(false); // Setel isLoading menjadi false setelah proses selesai, baik berhasil atau gagal
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <main className="overflow-hidden lg:bg-none bg-login-hero-image-mobile bg-cover bg-center max-h-screen">
      <div className=" lg:flex lg:items-center overflow-hidden pt-[25%] pb-[100%] lg:mt-0 lg:py-0">
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
              <div className=" mt-2 lg:mt-6">
                <h1 className=" lg:font-bold lg:text-4xl font-semibold text-2xl">
                  Daftar disini!
                </h1>
                <p className=" lg:font-medium lg:text-sm font-semibold text-xs text-[#414141] mt-1">
                  Daftarkan diri kamu menjadi bujang gadis berikutnya.
                </p>
              </div>
              <form onSubmit={handleSubmit} className=" = lg:my-4 my-5">
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
                  htmlFor="username"
                  label="Username"
                  type="text"
                  imageSrc="/assets/icon/mail.svg"
                  placeholder="Masukkan Username Anda"
                  imageClassName="hidden"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs">{errors.username}</p>
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
                <Form
                  htmlFor="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  imageSrc="/assets/icon/password.svg"
                  placeholder="Masukkan password Anda"
                  imageClassName="mr-4 lg:w-[22px] lg:h-[22px] w-[17px] h-[17px]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.confirmPassword}
                  </p>
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
                  <p className=" font-bold text-white text-sm py-3">Daftar</p>
                </button>
              </form>
              <div className=" h-[2px] bg-[#D9D9D9] lg:block hidden"></div>
              <div className=" flex lg:gap-1 gap-1 justify-center mt-3 items-center">
                <p className=" font-medium text-xs lg:text-sm">
                  Sudah Punya Akun?
                </p>
                <Link
                  href="/masuk"
                  className=" lg:font-medium font-bold hover:underline text-sm text-blue-color"
                >
                  Masuk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-color"></div>
        </div>
      )}
    </main>
  );
}
