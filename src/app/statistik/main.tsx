"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import StatistikCard from "./components/StatistikCard";
import axios from "axios";

interface StatistikData {
  rank: number;
  name: string;
  foto: string;
  percentage: string;
}

const MainStatistik: React.FC = () => {
  const [gender, setGender] = useState("L");
  const urlApi = process.env.NEXT_PUBLIC_API_URL;
  const [statistikData, setStatistikData] = useState<StatistikData[]>([]);

  useEffect(() => {
    fetchData();
  }, [gender]); // Fetch data again when gender changes

  const fetchData = async () => {
    try {
      const response = await axios.get(`${urlApi}/api/v1/user/statistik`, {
        headers: {
          "ngrok-skip-browser-warning": "any-value",
        },
      });
      const data = response.data.value;

      // Calculate percentages based on total_score
      const totalScoreResponse = await axios.get(
        `${urlApi}/api/v1/voucher/total-score`,
        {
          headers: {
            "ngrok-skip-browser-warning": "any-value",
          },
        }
      );
      const totalScore = totalScoreResponse.data.total_score;

      let genderData: {
        nama_lengkap: string;
        foto: string;
        user_score: number;
      }[] = [];
      if (gender === "L") {
        genderData = data.male;
      } else if (gender === "P") {
        genderData = data.female;
      }

      const newData: StatistikData[] = genderData.map((item, index) => ({
        rank: index + 1,
        name: item.nama_lengkap,
        foto: item.foto,
        percentage: `${((item.user_score / totalScore) * 100).toFixed(1)}%`,
      }));

      setStatistikData(newData);
    } catch (error) {
      console.error("Error fetching statistik data:", error);
    }
  };

  return (
    <div className="relative bg-dark-color overflow-hidden">
      <div className="lg:py-24 py-20 container xl:max-w-[1300px] lg:max-w-[1100px] mx-auto">
        {/* Your existing JSX structure */}
        <h1 className="relative z-10 text-center text-4xl font-semibold text-white">
          Rangking
        </h1>
        <h2 className="font-semibold text-[32px] text-center text-primary-color pt-2 mb-20">
          {gender === "L" ? "BUJANG" : "GADIS"} TEKNIK UNIVERSITAS SRIWIJAYA
        </h2>
        <div className="grid grid-flow-row grid-cols-2 bg-white rounded-t-xl">
          <div
            className={`text-center  py-6 font-bold text-2xl hover:bg-gray-200 hover:rounded-tl-xl ${
              gender === "L" ? "border-b-4 border-primary-color" : ""
            }`}
            onClick={() => setGender("L")}
          >
            Bujang
          </div>
          <div
            className={`text-center py-6 font-bold text-2xl hover:bg-gray-200 hover:rounded-tr-xl ${
              gender === "P" ? " border-b-4  border-primary-color" : ""
            }`}
            onClick={() => setGender("P")}
          >
            Gadis
          </div>
        </div>
        <div className="w-full flex-col relative z-10 bg-[#F1F1F1] justify-center items-center pb-20 pt-10 px-20 rounded-b-xl">
          {statistikData.map((item) => (
            <StatistikCard
              key={item.rank}
              rank={item.rank}
              foto={item.foto}
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
