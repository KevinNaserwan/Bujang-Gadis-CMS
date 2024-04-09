import Image from "next/image";

export default function Simbol() {
  return (
    <section>
      <div className=" w-full min-h-80 bg-dark-color">
        <div className=" container py-20 mx-auto w-[300px] flex flex-wrap justify-center">
          <div className=" text-center">
            <h1 className=" text-white font-bold text-[22px]">ARTI SIMBOL</h1>
            <h3 className=" font-bold text-primary-color text-sm mx-auto mt-1">
              BUJANG GADIS TEKNIK UNIVERSITAS SRIWIJAYA
            </h3>
          </div>
          <div>
            <Image
              alt="Logo Bujang Gadis"
              src={"/assets/images/logo-bg.svg"}
              width={100}
              height={100}
              className=" pt-5 pb-10"
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
