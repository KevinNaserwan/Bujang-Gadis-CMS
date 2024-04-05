import Image from "next/image";

export default function Timeline() {
  return (
    <div className=" container mx-auto py-32">
      <h1 className="font-bold text-3xl text-black text-center">
        <span className="font-bold text-3xl text-primary-color">TIMELINE</span>{" "}
        PENDAFTARAN
      </h1>
      <div className=" mt-32">
        <div className=" flex justify-around relative right-7">
          <div className=" w-[20%] flex flex-wrap justify-center gap-4">
            <div className=" flex flex-wrap w-[40%] justify-center">
              <Image
                src={"/assets/icon/message.svg"}
                alt=""
                width={80}
                height={80}
              />
              <p className="font-bold text-center text-base py-4">
                20 - 22 Maret
              </p>
            </div>
            <p className=" font-semibold text-center text-base">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" w-2 h-20 bg-primary-color rounded-t-md"></div>
          </div>
          <div className=" w-[20%] flex flex-wrap justify-center gap-4">
            <div className=" flex flex-wrap w-[40%] justify-center">
              <Image
                src={"/assets/icon/message.svg"}
                alt=""
                width={80}
                height={80}
              />
              <p className="font-bold text-center text-base py-4">
                20 - 22 Maret
              </p>
            </div>
            <p className=" font-semibold text-center text-base">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" w-2 h-20 bg-primary-color rounded-t-md"></div>
          </div>
          <div className=" w-[20%] flex flex-wrap justify-center gap-4">
            <div className=" flex flex-wrap w-[40%] justify-center">
              <Image
                src={"/assets/icon/message.svg"}
                alt=""
                width={80}
                height={80}
              />
              <p className="font-bold text-center text-base py-4">
                20 - 22 Maret
              </p>
            </div>
            <p className=" font-semibold text-center text-base">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" w-2 h-20 bg-primary-color rounded-t-md"></div>
          </div>
        </div>
        <div className=" bg-dark-color h-2 rounded-lg"></div>
        <div className=" flex justify-around relative left-7">
          <div className=" w-[20%] flex flex-wrap justify-center gap-4">
            <div className=" w-2 h-20 bg-primary-color rounded-b-md"></div>
            <p className=" font-semibold text-center text-base">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" flex flex-wrap w-[40%] justify-center pt-4">
              <Image
                src={"/assets/icon/message.svg"}
                alt=""
                width={80}
                height={80}
              />
              <p className="font-bold text-center text-base py-4">20 - 22 Maret</p>
            </div>
          </div>
          <div className=" w-[20%] flex flex-wrap justify-center">
            <div className=" w-2 h-20 bg-primary-color rounded-b-md"></div>
            <p className=" font-semibold text-center text-base">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" flex flex-wrap w-[40%] justify-center">
              <Image
                src={"/assets/icon/message.svg"}
                alt=""
                width={80}
                height={80}
              />
              <p className="font-bold text-center text-base py-4">20 - 22 Maret</p>
            </div>
          </div>
          <div className=" w-[20%] flex flex-wrap justify-center">
            <div className=" w-2 h-20 bg-primary-color rounded-b-md"></div>
            <p className=" font-semibold text-center text-base">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" flex flex-wrap w-[40%] justify-center">
              <Image
                src={"/assets/icon/message.svg"}
                alt=""
                width={80}
                height={80}
              />
              <p className="font-bold text-center text-base py-4">20 - 22 Maret</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
