"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import CardVote from "./component/CardVote";
import Image from "next/image";

interface User {
  user_id: number;
  nama_lengkap: string;
  foto: string;
}

const DaftarVote: React.FC = () => {
  const [gender, setGender] = useState("L");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const urlApi = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<{ message: string; value: User[] }>(
          `${urlApi}/api/v1/user/gender/${gender}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "any-value",
            },
          }
        );
        console.log("API Response:", response.data);

        if (response.data && Array.isArray(response.data.value)) {
          setUsers(response.data.value);
          setError(null);
        } else {
          setUsers([]);
          setError("Unexpected response format");
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        setUsers([]);
        setError("Error fetching users");
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [gender]);

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
          DAFTAR
        </h1>
        <h2 className="font-semibold text-[32px] text-center text-primary-color pt-2 mb-12">
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
        <div className="relative z-10 grid grid-flow-row grid-cols-3 gap-16 py-12 pb-24 bg-white rounded-b-xl">
          {error ? (
            <div className="col-span-3 text-center text-red-500">{error}</div>
          ) : users && users.length > 0 ? (
            users.map((user) => <CardVote key={user.user_id} user={user} />)
          ) : (
            <div className="col-span-3 text-center">No users available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DaftarVote;
