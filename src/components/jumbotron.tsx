import Image, { StaticImageData } from "next/image";
import Button from "./button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

interface ModalVideoProps {
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function Jumbotron({
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  let [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className=" relative container mx-auto pb-24">
        <div className="container mx-auto pt-20 lg:pt-24 lg:pb-16 ">
          <div>
            <h1 className=" text-center text-2xl lg:text-4xl font-bold lg:leading-relaxed leading-normal">
              Official Website
            </h1>
            <h1 className=" text-center text-2xl lg:text-4xl font-bold text-secondary-color">
              Bujang Gadis Teknik
            </h1>
          </div>
          <h2 className=" text-center  pt-2 lg:pt-4 lg:pb-7 pb-6 font-bold text-lg lg:text-2xl">
            UNIVERSITAS SRIWIJAYA
          </h2>
          <p className=" text-center text-sm lg:text-base w-8/12 lg:w-[30%] mx-auto">
            Ayo segera daftarkan diri anda menjadi anggota baru bujang gadis
            teknik
          </p>
          <div className=" flex row items-center gap-7 lg:gap-12 justify-center mt-8 lg:mt-7">
            <Button
              href="/"
              name="Ours"
              className="py-3 px-8 bg-gradient-to-br from-secondary-color to-black hover:bg-none hover:bg-black rounded-lg font-semibold text-base text-white"
            />
            <div className=" flex row items-center gap-3">
              <button onClick={openModal}>
                <Image
                  src={"/assets/icon/play.svg"}
                  alt="Play Image"
                  width={40}
                  height={40}
                  className=" w-10 h-10"
                />
              </button>
              <p className=" font-semibold text-lg">Tentang Kami</p>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-black/80" />
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
                <div className="max-w-5xl mx-auto h-full flex items-center">
                  <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                    <video
                      autoPlay={true}
                      ref={videoRef}
                      width={videoWidth}
                      height={videoHeight}
                      loop
                      controls
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
