import Image from "next/image";

export default function Timeline() {
  return (
    <div className=" container lg:max-w-[1100px] xl:max-w-[1300px] mx-auto lg:py-48 py-24">
      <h1 className="font-bold lg:text-3xl text-xl text-black text-center">
        <span className="font-bold lg:text-3xl text-xl text-primary-color">
          TIMELINE
        </span>{" "}
        PENDAFTARAN
      </h1>
      <div className=" lg:mt-32 mt-16 lg:block flex">
        <div className=" lg:flex justify-around lg:w-full w-6/12 relative -right-2 top-14 lg:top-0 lg:right-7">
          <div className=" lg:w-[20%] w-[100%] flex flex-wrap justify-center lg:gap-4 gap-1">
            <div className=" flex flex-wrap lg:w-[40%] w-[60%] justify-center">
              <div className=" relative left-9 lg:left-0 flex items-center gap-6">
                <Image
                  src={"/assets/icon/message.svg"}
                  alt=""
                  width={80}
                  height={80}
                  className=" w-10 h-10 lg:w-20 lg:h-20"
                />
                <div className=" lg:hidden w-20 h-1 bg-primary-color rounded-l-md"></div>
              </div>
              <p className="font-bold text-center text-xs lg:text-base lg:py-4 py-2">
                20 - 22 Maret
              </p>
            </div>
            <p className=" font-semibold text-center lg:text-base text-xs lg:w-full w-[160px]">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" lg:w-2 lg:h-20 lg:bg-primary-color lg:rounded-t-md "></div>
          </div>
          <div className=" lg:w-[20%] w-[100%] flex flex-wrap justify-center lg:gap-4 gap-1 lg:py-0 py-32">
            <div className=" flex flex-wrap lg:w-[40%] w-[60%] justify-center">
              <div className=" relative left-9 lg:left-0 flex items-center gap-6">
                <Image
                  src={"/assets/icon/message.svg"}
                  alt=""
                  width={80}
                  height={80}
                  className=" w-10 h-10 lg:w-20 lg:h-20"
                />
                <div className=" lg:hidden w-20 h-1 bg-primary-color rounded-l-md"></div>
              </div>
              <p className="font-bold text-center text-xs lg:text-base lg:py-4 py-2">
                20 - 22 Maret
              </p>
            </div>
            <p className=" font-semibold text-center lg:text-base text-xs lg:w-full w-[160px]">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" lg:w-2 lg:h-20 lg:bg-primary-color lg:rounded-t-md "></div>
          </div>
          <div className=" lg:w-[20%] w-[100%] flex flex-wrap justify-center lg:gap-4 gap-1">
            <div className=" flex flex-wrap lg:w-[40%] w-[60%] justify-center">
              <div className=" relative left-9 lg:left-0 flex items-center gap-6">
                <Image
                  src={"/assets/icon/message.svg"}
                  alt=""
                  width={80}
                  height={80}
                  className=" w-10 h-10 lg:w-20 lg:h-20"
                />
                <div className=" lg:hidden w-20 h-1 bg-primary-color rounded-l-md"></div>
              </div>
              <p className="font-bold text-center text-xs lg:text-base lg:py-4 py-2">
                20 - 22 Maret
              </p>
            </div>
            <p className=" font-semibold text-center lg:text-base text-xs lg:w-full w-[160px]">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" lg:w-2 lg:h-20 lg:bg-primary-color lg:rounded-t-md "></div>
          </div>
        </div>
        <div className=" relative z-10 bg-dark-color lg:h-2 lg:w-full w-2 h-[940px] rounded-lg"></div>
        <div className=" lg:flex justify-around lg:w-full w-6/12 relative -left-2 top-[190px] lg:top-0 lg:left-7">
          <div className=" lg:w-[20%] w-[100%] flex flex-wrap justify-center lg:gap-4 gap-1">
            <div className=" lg:w-2 lg:h-20 lg:bg-primary-color lg:rounded-b-md"></div>
            <p className=" font-semibold text-center lg:text-base text-xs lg:w-full w-[160px] hidden lg:block">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" flex flex-wrap lg:w-[40%] w-[60%] justify-center">
              <div className=" relative right-10 lg:left-0 flex items-center gap-6">
                <div className=" lg:hidden w-20 h-1 bg-primary-color rounded-r-md"></div>
                <Image
                  src={"/assets/icon/message.svg"}
                  alt=""
                  width={80}
                  height={80}
                  className=" w-10 h-10 lg:w-20 lg:h-20"
                />
              </div>
              <p className="font-bold text-center text-xs lg:text-base lg:py-4 py-2">
                20 - 22 Maret
              </p>
            </div>
            <p className=" font-semibold text-center lg:text-base text-xs lg:w-full w-[160px] lg:hidden">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
          </div>
          <div className=" lg:w-[20%] w-[100%] flex flex-wrap justify-center lg:gap-4 gap-1 lg:py-0 py-32">
            <div className=" lg:w-2 lg:h-20 lg:bg-primary-color lg:rounded-b-md"></div>
            <p className=" font-semibold text-center lg:text-base text-xs lg:w-full w-[160px] hidden lg:block">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" flex flex-wrap lg:w-[40%] w-[60%] justify-center">
              <div className=" relative right-10 lg:left-0 flex items-center gap-6">
                <div className=" lg:hidden w-20 h-1 bg-primary-color rounded-r-md"></div>
                <Image
                  src={"/assets/icon/message.svg"}
                  alt=""
                  width={80}
                  height={80}
                  className=" w-10 h-10 lg:w-20 lg:h-20"
                />
              </div>
              <p className="font-bold text-center text-xs lg:text-base lg:py-4 py-2">
                20 - 22 Maret
              </p>
            </div>
            <p className=" font-semibold text-center lg:text-base text-xs lg:w-full w-[160px] lg:hidden">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
          </div>
          <div className=" lg:w-[20%] w-[100%] flex flex-wrap justify-center lg:gap-4 gap-1">
            <div className=" lg:w-2 lg:h-20 lg:bg-primary-color lg:rounded-b-md"></div>
            <p className=" font-semibold text-center lg:text-base text-xs lg:w-full w-[160px] hidden lg:block">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
            <div className=" flex flex-wrap lg:w-[40%] w-[60%] justify-center">
              <div className=" relative right-10 lg:left-0 flex items-center gap-6">
                <div className=" lg:hidden w-20 h-1 bg-primary-color rounded-r-md"></div>
                <Image
                  src={"/assets/icon/message.svg"}
                  alt=""
                  width={80}
                  height={80}
                  className=" w-10 h-10 lg:w-20 lg:h-20"
                />
              </div>
              <p className="font-bold text-center text-xs lg:text-base lg:py-4 py-2">
                20 - 22 Maret
              </p>
            </div>
            <p className=" font-semibold text-center lg:text-base text-xs lg:w-full w-[160px] lg:hidden">
              <span className=" text-secondary-color">Sosialisasi</span>{" "}
              Memperkenalkan calon peserta tentang tahapan dan persyaratan
              kompetisi
            </p>
          </div>
        </div>
        {/* <div className=" flex justify-around relative left-7">
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
              <p className="font-bold text-center text-base py-4">
                20 - 22 Maret
              </p>
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
              <p className="font-bold text-center text-base py-4">
                20 - 22 Maret
              </p>
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
              <p className="font-bold text-center text-base py-4">
                20 - 22 Maret
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
