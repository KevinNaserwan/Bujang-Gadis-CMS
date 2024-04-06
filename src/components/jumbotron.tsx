import Image from "next/image";
import Button from "./button";

export default function Jumbotron() {
  return (
    <div rel="preload" className="bg-hero-image bg-bottom min-h-full bg-cover bg-no-repeat w-full">
      <div className=" relative container mx-auto pb-24">
        <div className="container mx-auto pt-36 lg:pt-48 lg:pb-16 ">
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
              name="Ours"
              className="py-3 px-8 bg-gradient-to-br from-secondary-color to-black hover:bg-none hover:bg-black rounded-lg font-semibold text-base text-white"
            />
            <div className=" flex row items-center gap-3">
              <a href="">
                <Image
                  src={"/assets/icon/play.svg"}
                  alt="Play Image"
                  width={40}
                  height={40}
                  className=" w-10 h-10"
                />
              </a>
              <p className=" font-semibold text-lg">Tentang Kami</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
