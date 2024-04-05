import Image from "next/image";
import Button from "./button";

export default function History() {
  return (
    <div className=" container mx-auto py-32">
      <div className=" flex items-center justify-around">
        <div className=" w-[40%]">
          <h1 className="font-bold text-4xl text-black leading-[50px]">
            <span className="  font-bold text-4xl text-primary-color">
              Sejarah
            </span>{" "}
            - Bujang Gadis Teknik Universitas Sriwijaya
          </h1>
          <p className=" text-lg font-normal py-8">
            Pendiri Chandra Saputra Dibentuk pada tanggal 12 September 2009
            Chandra Saputra yang saat ini adalah ketua Yayasan Bujang Gadis...
          </p>
          <Button
            name="Click To Know"
            className="py-3 px-8 bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold text-base text-white"
          />
        </div>
        <Image src="/assets/images/history.png" alt="History Image" width={560} height={340}/>
      </div>
    </div>
  );
}
