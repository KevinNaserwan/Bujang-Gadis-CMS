import Image from "next/image";
import React from "react";
import StatistikCard from "./components/StatistikCard";

interface StatistikData {
  rank: number;
  name: string;
  percentage: string;
}

const MainStatistik: React.FC = () => {
  // Array data untuk statistik
  const statistikData: StatistikData[] = [
    { rank: 1, name: "Chandra Saputra", percentage: "30%" },
    { rank: 2, name: "Diana", percentage: "20%" },
    { rank: 3, name: "Eka Putra", percentage: "16%" },
    { rank: 4, name: "Fajar", percentage: "3.4%" },
    { rank: 5, name: "Gilang", percentage: "3.4%" },
    { rank: 6, name: "Hadi", percentage: "3.4%" },
    { rank: 7, name: "Ika", percentage: "3.4%" },
    { rank: 8, name: "Joko", percentage: "3.4%" },
    { rank: 9, name: "Kiki", percentage: "3.4%" },
    { rank: 10, name: "Lina", percentage: "3.4%" },
  ];

  return (
    <div className="relative bg-dark-color overflow-hidden">
      <div className="lg:py-24 py-20 container xl:max-w-[1300px] lg:max-w-[1100px] mx-auto">
        <div className="absolute z-0 top-0 left-0">
          <Image
            src={"/assets/images/ellipse3.svg"}
            alt=""
            width={100}
            height={75}
          />
        </div>
        <div className="absolute z-0 bottom-0 -right-20">
          <Image
            src={"/assets/images/ellipse2.svg"}
            alt=""
            width={300}
            height={150}
          />
        </div>
        <h1 className="relative z-10 text-center text-4xl font-semibold text-white">
          Rangking
        </h1>
        <h2 className="font-semibold text-[32px] text-center text-primary-color pt-2">
          BUJANG TEKNIK UNIVERSITAS SRIWIJAYA
        </h2>
        <div className="w-full flex-col justify-center items-center py-20">
          {statistikData.map((item) => (
            <StatistikCard
              key={item.rank}
              rank={item.rank}
              name={item.name}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainStatistik;
