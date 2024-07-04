import Image from "next/image";
import React from "react";

interface StatistikCardProps {
  rank: number;
  name: string;
  percentage: string;
  foto: string;
}

const StatistikCard: React.FC<StatistikCardProps> = ({
  rank,
  name,
  percentage,
  foto,
}) => {
  const getRankImage = (rank: number): string | null => {
    switch (rank) {
      case 1:
        return "/assets/images/juara-1.svg";
      case 2:
        return "/assets/images/juara-2.svg";
      case 3:
        return "/assets/images/juara-3.svg";
      default:
        return null;
    }
  };

  const rankImage = getRankImage(rank);
  const urlApi = process.env.NEXT_PUBLIC_API_URL;

  // Calculate width based on percentage
  const width = `${percentage}`;

  // Determine background color based on rank
  let bgColor = "";
  switch (rank) {
    case 1:
      bgColor = "#FFB962";
      break;
    case 2:
      bgColor = "#D8D7D9";
      break;
    case 3:
      bgColor = "#E09B67";
      break;
    default:
      bgColor = "#CCE9FF"; // Default color for rank 4 and beyond
      break;
  }

  return (
    <div className="relative lg:w-full lg:h-[160px] h-[110px] rounded-lg lg:my-10 my-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full"
        style={{ width, backgroundColor: bgColor }}
      />
      <div className="top-0 left-0 w-full h-full bg-white  flex items-center justify-between lg:px-7">
        <div className="flex lg:w-11/12 w-12/12 lg:justify-between justify-center items-center absolute z-10">
          <div className="flex items-center lg:justify-normal justify-center lg:gap-10 gap-4">
            {rankImage ? (
              <Image
                src={rankImage}
                alt={`Juara ${rank}`}
                width={50}
                height={50}
                className=" lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
              />
            ) : (
              <h1 className="font-semibold text-[30px] w-[50px] h-[50px] text-center">
                {rank}
              </h1>
            )}
            <Image
              src={`${urlApi}/uploads/foto/${foto}`}
              alt=""
              width={120}
              height={120}
              className="rounded-xl lg:w-[100px] lg:h-[100px] w-[80px] h-[80px]"
            />
            <div className="lg:w-full w-5/12">
              <h1 className="font-semibold lg:text-[30px] text-sm ">{name}</h1>
              <div className=" lg:mt-0 mt-1">
                <h1 className="lg:font-semibold font-bold   lg:text-[30px] text-2xl lg:hidden block">
                  {percentage}
                </h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-semibold lg:text-[30px] text-sm lg:block hidden">
              {percentage}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatistikCard;
