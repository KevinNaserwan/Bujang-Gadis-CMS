import Image from "next/image";

interface ButtonProps {
  id: string;
  name: string;
  year: number;
  image: string;
  width: string;
  hidden?: string;
  hidden2?: string;
}

export default function KetuaCard({
  id,
  name,
  year,
  image,
  width,
  hidden,
  hidden2
}: ButtonProps) {
  return (
    <div id={id}>
      <div className=" relative max-w-[340px] mx-auto flex flex-wrap justify-center mt-8 mb-10">
        <Image
          src={image}
          alt="ketua 2023"
          width={200}
          height={220}
          className=" rounded-lg"
        />
        <div className=" py-2 px-6 bg-primary-color rounded-md absolute -bottom-4">
          <h1 className=" font-bold text-black text-xs">{name}</h1>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" flex items-center">
          <div className={` ${hidden}w-5 h-5 bg-primary-color rounded-full`}></div>
          <div className={`w-[70px] bg-primary-color h-[1px]`}></div>
          <div>
            <h1 className=" text-white font-bold text-xs px-2">{year}</h1>
          </div>
          <div className=" w-[70px] bg-primary-color h-[1px]"></div>
          <div className={` ${hidden2}w-5 h-5 bg-primary-color rounded-full`}></div>
        </div>
      </div>
    </div>
  );
}
