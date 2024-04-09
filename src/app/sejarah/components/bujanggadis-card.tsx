import Image from "next/image";

export default function BujangGadisCard() {
  return (
    <div>
      <div className=" w-[300px] min-h-52 bg-dark-color mx-auto rounded-[20px] relative mt-8">
        <div className="">
          <Image
            alt=""
            src={"/assets/images/bujang-gadis.svg"}
            width={300}
            height={170}
            className=" relative"
          />
          <div className=" w-[45px] h-[45px] rounded-full bg-primary-color py-[14px] px-2 text-xs font-bold absolute bottom-[52px] left-[128px]">
            2023
          </div>
          <div className=" absolute z-10 w-[1px] h-28 border border-dashed border-primary-color left-[149px]"></div>
        </div>
        <div className=" flex justify-around pt-4 pb-6">
          <div className=" text-left">
            <h3 className=" font-semibold text-xs text-primary-color">
              Bujang
            </h3>
            <p className=" font-semibold text-xs text-white">Hari Randora</p>
          </div>
          <div className=" text-left">
            <h3 className=" font-semibold text-xs text-primary-color">Gadis</h3>
            <p className=" font-semibold text-xs text-white">Sheila Sicilia</p>
          </div>
        </div>
      </div>
      <div className=" items-center flex mt-10 "> 
        <div className=" h-[1px]  w-[50%] relative"></div>
        <div className=" bg-dark-color w-2 h-2 rounded-full"></div>
        <div className=" h-[1px]  w-[50%] bg-primary-color relative"></div>
      </div>
    </div>
  );
}
