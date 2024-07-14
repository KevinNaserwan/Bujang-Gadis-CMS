"use client";

import { useEffect, useState, Fragment, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import History from "@/components/history";
import Jumbotron from "@/components/jumbotron";
import Section1 from "@/components/section-1";
import Term from "@/components/term";
import Timeline from "@/components/timeline";
import Image from "next/image";
import Link from "next/link";
import dotenv from "dotenv";

interface VerifyResponse {
  status: string;
  message: string;
}

function HomeComponent() {
  dotenv.config();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      console.log("Token found in URL:", token);
      localStorage.setItem("token", token); // Store token in localStorage
      verifyToken(token);
    }
  }, [searchParams]);

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch(
        `${apiUrl}/api/v1/user/verify?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );

      if (response.ok) {
        const data: VerifyResponse = await response.json();
        console.log("Token verified and stored:", data);
        setIsModalOpen(true); // Show the modal on successful verification

        // Remove token parameter from URL
        const params = new URLSearchParams(window.location.search);
        params.delete("token");
        const newUrl = `${window.location.pathname}${
          params.toString() ? "?" + params.toString() : ""
        }`;
        window.history.replaceState({}, "", newUrl);
      } else {
        console.error("Failed to verify token:", response.statusText);
      }
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Jumbotron
        video="/assets/video/trailer-hero.mp4"
        videoHeight={1080}
        videoWidth={1920}
      />
      <Section1 />
      <History />
      <Timeline />
      <Term />
      <Footer />

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
                    Akun Anda Telah Berhasil Diverifikasi!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Selamat Akun anda telah aktif.
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Baik
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default function Home() {
  return (
    <main
      rel="preload"
      className="lg:bg-hero-image bg-mobile-hero-image bg-contain bg-no-repeat w-full"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <HomeComponent />
      </Suspense>
    </main>
  );
}
