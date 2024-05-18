type MisiCardProps = {
  number: number;
  text: string;
};

export default function MisiCard({ number, text }: MisiCardProps) {
  return (
    <div className=" relative">
      <div className=" bg-white shadow-2xl relative h-[300px] p-8 rounded-xl z-10">
        <div className=" bg-blue-color w-11 h-11 flex justify-center items-center shadow-2xl shadow-blue-color rounded font-bold text-lg text-white">
          {number}
        </div>
        <div className=" text-base max-w-44 mt-5">{text}</div>
      </div>
      <div className=" absolute w-[110px] h-[110px] bg-blue-color -bottom-[5px] -left-[5px] z-0 rounded-xl"></div>
      <div className=" absolute w-[110px] h-[110px] bg-blue-color -top-[5px] -right-[5px] z-0 rounded-xl"></div>
    </div>
  );
}
