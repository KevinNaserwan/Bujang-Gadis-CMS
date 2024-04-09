import Image from "next/image";

interface ButtonProps {
  image: string;
  simbol: string;
  content: string;
}

export default function SimbolCard({ image, simbol, content }: ButtonProps) {
  return (
    <div className=" relative w-[360px] min-h-[80px] mt-4 rounded-lg bg-white flex gap-3 items-center">
      <div>
        <Image
          alt=""
          src={"/assets/images/pattern-simbol.svg"}
          width={90}
          height={112}
          className="relative"
        />
        <div className=" absolute top-[24%] left-[3%]">
          <Image alt="" src={"/assets/icon/icon.svg"} width={60} height={60}/>
        </div>
      </div>
      <div className=" w-8/12 inline my-3">
        <h3 className=" text-xs font-bold text-dark-color">{simbol}</h3>
        <p className=" font-medium text-xs text-black text-justify">
          {content}
        </p>
      </div>
    </div>
  );
}
