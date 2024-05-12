import Image from "next/image";

interface ButtonProps {
  image: string;
  simbol: string;
  content: string;
}

export default function SimbolCard({ image, simbol, content }: ButtonProps) {
  return (
    <div className=" relative w-[360px] min-h-[104px] mt-4 rounded-lg bg-white flex gap-3 items-center lg:mb-12">
      <div>
        <div className=" absolute z-[5] top-0">
          <Image
            alt=""
            src={"/assets/images/pattern-simbol.svg"}
            width={90}
            height={112}
          />
        </div>
        <div className=" absolute z-0 top-0 left-3">
          <Image
            alt=""
            src={"/assets/images/pattern-simbol2.svg"}
            width={90}
            height={112}
            className=""
          />
        </div>
        <div className=" absolute top-[24%] left-[3%] z-10">
          <Image alt="" src={"/assets/icon/icon.svg"} width={60} height={60} />
        </div>
      </div>
      <div className=" w-8/12 inline my-3 ml-24">
        <h3 className=" text-xs font-bold text-dark-color">{simbol}</h3>
        <p className=" font-medium text-xs text-black text-justify">
          {content}
        </p>
      </div>
    </div>
  );
}
