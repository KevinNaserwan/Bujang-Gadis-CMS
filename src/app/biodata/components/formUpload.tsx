import Image from "next/image";
import React from "react";
import { useDropzone } from "react-dropzone";

export default function FormUpload() {
  // Konfigurasi untuk menerima PDF untuk "Curriculum Vitae" dan "Sertifikat"
  const { getRootProps: getRootPropsCV, getInputProps: getInputPropsCV } =
    useDropzone({
      accept: {
        "application/pdf": [".pdf"],
      },
      maxSize: 5 * 1024 * 1024, // 5MB
    });

  // Konfigurasi untuk menerima PNG, JPG, dan JPEG untuk "Foto"
  const { getRootProps: getRootPropsFoto, getInputProps: getInputPropsFoto } =
    useDropzone({
      accept: {
        "image/png": [".png"],
        "image/jpeg": [".jpeg", ".jpg"],
      },
      maxSize: 5 * 1024 * 1024, // 5MB
    });

  return (
    <div className=" py-16 pb-36 relative">
      <h1 className=" font-bold text-black text-xl text-center">Upload File</h1>
      <div className=" mt-14 ">
        <form action="">
          <div className=" flex justify-center gap-8 pb-24">
            <div>
              <h1 className="font-bold text-black text-xl">Curriculum Vitae</h1>
              <div className="mt-4 flex justify-center">
                <div
                  {...getRootPropsCV()} // Menggunakan getRootPropsCV untuk "Curriculum Vitae"
                  className="border-dashed border-2 border-gray-400 rounded-lg w-[300px] h-[200px] flex flex-col items-center justify-center cursor-pointer"
                >
                  <input {...getInputPropsCV()} />
                  <div className="flex flex-col items-center">
                    <Image
                      src="/assets/icon/upload2.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                    <p className="text-black text-xs font-bold mt-2">
                      Drag and Drop file
                    </p>
                    <p className="text-black text-xs font-bold">or</p>
                    <button className=" bg-blue-color text-white text-sm px-4 py-1 rounded mt-2">
                      Browse
                    </button>
                    <p className="text-gray-500 text-sm mt-2">
                      Files supported: Pdf
                    </p>
                    <p className="text-gray-500 text-sm">(Maximum size: 5MB)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-black text-xl">Foto</h1>
              <div className="mt-4 flex justify-center">
                <div
                  {...getRootPropsFoto()} // Menggunakan getRootPropsFoto untuk "Foto"
                  className="border-dashed border-2 border-gray-400 rounded-lg w-[300px] h-[200px] flex flex-col items-center justify-center cursor-pointer"
                >
                  <input {...getInputPropsFoto()} />
                  <div className="flex flex-col items-center">
                    <Image
                      src="/assets/icon/upload2.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                    <p className="text-black text-xs font-bold mt-2">
                      Drag and Drop file
                    </p>
                    <p className="text-black text-xs font-bold">or</p>
                    <button className=" bg-blue-color text-white text-sm px-4 py-1 rounded mt-2">
                      Browse
                    </button>
                    <p className="text-gray-500 text-sm mt-2">
                      Files supported: PNG, JPG, JPEG
                    </p>
                    <p className="text-gray-500 text-sm">(Maximum size: 5MB)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-black text-xl">Sertifikat</h1>
              <div className="mt-4 flex justify-center">
                <div
                  {...getRootPropsCV()} // Menggunakan getRootPropsCV untuk "Sertifikat"
                  className="border-dashed border-2 border-gray-400 rounded-lg w-[300px] h-[200px] flex flex-col items-center justify-center cursor-pointer"
                >
                  <input {...getInputPropsCV()} />
                  <div className="flex flex-col items-center">
                    <Image
                      src="/assets/icon/upload2.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                    <p className="text-black text-xs font-bold mt-2">
                      Drag and Drop file
                    </p>
                    <p className="text-black text-xs font-bold">or</p>
                    <button className=" bg-blue-color text-white text-sm px-4 py-1 rounded mt-2">
                      Browse
                    </button>
                    <p className="text-gray-500 text-sm mt-2">
                      Files supported: Pdf
                    </p>
                    <p className="text-gray-500 text-sm">(Maximum size: 5MB)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button
        className="py-3 absolute right-28 bottom-16 px-8 mt-12 text-sm bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold lg:text-base text-white"
        type="submit"
      >
        Kirim
      </button>
    </div>
  );
}
