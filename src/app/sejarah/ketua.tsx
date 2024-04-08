import Image from "next/image";

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
        <div className=" relative max-w-[340px] mx-auto flex flex-wrap justify-center mt-8 mb-10">
          <Image
            src="/assets/images/ketua-1.svg"
            alt="ketua 2023"
            width={200}
            height={220}
            className=" rounded-lg"
          />
          <div className=" py-2 px-6 bg-primary-color rounded-md absolute -bottom-4">
            <h1 className=" font-bold text-black text-xs">Chandra Saputra</h1>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className=" flex items-center">
            <div className=" w-5 h-5 bg-primary-color rounded-full"></div>
            <div className=" w-[50px] bg-primary-color h-[1px]"></div>
            <div>
              <h1 className=" text-white font-bold text-xs px-2">2023</h1>
            </div>
            <div className=" w-[70px] bg-primary-color h-[1px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
