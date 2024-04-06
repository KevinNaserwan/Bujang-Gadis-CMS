import Image from "next/image";
import Button from "./button";

export default function History() {
  return (
    <div className=" container mx-auto py-32 lg:py-32">
      <div className="lg:flex-nowrap flex-wrap gap-12 flex justify-center lg:justify-around lg:items-center">
        <div className=" w-[80%] lg:w-[40%]">
          <h1 className="font-bold text-xl lg:text-4xl text-black lg:leading-[50px]">
            <span className="  font-bold text-xl lg:text-4xl text-primary-color">
              Sejarah
            </span>{" "}
            - Bujang Gadis Teknik Universitas Sriwijaya
          </h1>
          <p className=" text-sm lg:text-lg font-normal pt-4 pb-8 lg:pt-6 lg:pb-8">
            Pendiri Chandra Saputra Dibentuk pada tanggal 12 September 2009
            Chandra Saputra yang saat ini adalah ketua Yayasan Bujang Gadis...
          </p>
          <div>
          <Button
            name="Click To Know"
            className=" py-3 px-8 text-sm bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold lg:text-base text-white"
          />
          </div>
        </div>
        <Image src="/assets/images/history.png" alt="History Image" width={560} height={340} className=" lg:w-[500px] lg:h-[340px] w-[300px] h-[175px]"/>
      </div>
    </div>
  );
}
