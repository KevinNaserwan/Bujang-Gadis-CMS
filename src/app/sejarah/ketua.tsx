import Image from "next/image";
import KetuaCard from "./components/ketua-card";
import { CarouselDemo } from "./components/carousel";

export default function Ketua() {
  return (
    <section className=" relative">
      <div className=" absolute top-0">
        <Image
          src="/assets/images/ellipse4.svg"
          alt=""
          width={80}
          height={60}
        />
      </div>
      <div className=" absolute z-0 bottom-0 right-0">
        <Image
          src={"/assets/images/ellipse2.svg"}
          alt=""
          width={160}
          height={80}
        />
      </div>
      <div className=" absolute z-0 bottom-0 right-28">
        <Image
          src={"/assets/images/ellipse2.svg"}
          alt=""
          width={100}
          height={50}
        />
      </div>
      <div className=" bg-dark-color min-h-80 py-16 container mx-auto">
        <div className=" text-center">
          <h1 className=" text-white font-bold text-[22px] inline">
            KETUA IKATAN
          </h1>
          <h3 className=" font-semibold text-primary-color text-sm pt-2 w-9/12 mx-auto">
            BUJANG GADIS TEKNIK UNIVERSITAS SRIWIJAYA
          </h3>
        </div>
        <CarouselDemo/>
      </div>
    </section>
  );
}
