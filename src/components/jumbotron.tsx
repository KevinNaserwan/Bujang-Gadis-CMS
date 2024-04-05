import Image from "next/image";
import Button from "./button";

export default function Jumbotron() {
  return (
    <div className=" relative container mx-auto pb-24">
      <div className="container mx-auto pt-28">
        <div>
          <h1 className=" text-center text-4xl font-bold leading-relaxed">
            Official Website
          </h1>
          <h1 className=" text-center text-4xl font-bold text-secondary-color">
            Bujang Gadis Teknik
          </h1>
        </div>
        <h2 className=" text-center pt-4 pb-7 font-bold text-2xl">
          UNIVERSITAS SRIWIJAYA
        </h2>
        <p className=" text-center text-base w-[30%] mx-auto">
          Ayo segera daftarkan diri anda menjadi anggota baru bujang gadis
          teknik
        </p>
        <div className=" flex row items-center gap-12 justify-center mt-7">
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
              />
            </a>
            <p className=" font-semibold text-lg">Tentang Kami</p>
          </div>
        </div>
      </div>
    </div>
  );
}
