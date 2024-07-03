import Image from "next/image";
import React from "react";

interface StatistikCardProps {
  rank: number;
  name: string;
  percentage: string;
}

const StatistikCard: React.FC<StatistikCardProps> = ({
  rank,
  name,
  percentage,
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
    <div className="relative w-full h-[160px] rounded-lg my-10 overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full"
        style={{ width, backgroundColor: bgColor }}
      />
      <div className="top-0 left-0 w-full h-full bg-white  flex items-center justify-between px-7">
        <div className="flex w-11/12 justify-between items-center absolute z-10">
          <div className="flex items-center gap-10">
            {rankImage ? (
              <Image
                src={rankImage}
                alt={`Juara ${rank}`}
                width={50}
                height={50}
              />
            ) : (
              <h1 className="font-semibold text-[30px] w-[50px] h-[50px] text-center">
                {rank}
              </h1>
            )}
            <Image
              src={"/assets/images/ketua-1.svg"}
              alt=""
              width={120}
              height={120}
              className="rounded-xl"
            />
            <h1 className="font-semibold text-[30px]">{name}</h1>
          </div>
          <div>
            <h1 className="font-semibold text-[30px]">{percentage}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatistikCard;
