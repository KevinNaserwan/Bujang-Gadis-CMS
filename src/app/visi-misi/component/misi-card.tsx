type MisiCardProps = {
  number: number;
  text: string;
};

export default function MisiCard({ number, text }: MisiCardProps) {
  return (
    <div className=" relative lg:mt-0 mt-20 ">
      <div className=" bg-white shadow-2xl relative h-[320px] py-14 px-10 rounded-xl z-10 lg:pt-12 pt-[72px]">
        <div className=" bg-blue-color w-11 h-11 flex justify-center items-center shadow-2xl shadow-blue-color rounded font-bold text-lg text-white">
          {number}
        </div>
        <div className=" text-base lg:max-w-44 max-w-60  mt-5">{text}</div>
      </div>
      <div className=" absolute w-[110px] h-[110px] bg-blue-color -bottom-[5px] -left-[5px] z-0 rounded-xl"></div>
      <div className=" absolute w-[110px] h-[110px] bg-blue-color -top-[5px] -right-[5px] z-0 rounded-xl"></div>
    </div>
  );
}
