"use client";

import Image from "next/image";
import Link from "next/link";
import Step from "./components/step";
import { useState, useEffect } from "react";
import FormBiodata from "./components/formBiodata";
import FormPendidikan from "./components/formPendidikan";
import FormPrestasi from "./components/formPrestasi";
import FormUpload from "./components/formUpload";

export default function Biodata() {
  const [steps, setSteps] = useState({
    dataDiri: "inProgress",
    pendidikan: "pending",
    prestasi: "pending",
    upload: "pending",
  });

  useEffect(() => {
    const email = localStorage.getItem("email");

    const fetchData = async () => {
      if (email) {
        try {
          const response = await fetch(
            `http://localhost:5000/api/v1/user/${email}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );

          if (response.ok) {
            const dbData = await response.json();
            console.log(dbData);
            setSteps({
              dataDiri:
                dbData.value.data_diri == true ? "completed" : "inProgress",
              pendidikan:
                dbData.value.riwayat_pendidikan == true
                  ? "completed"
                  : dbData.value.data_diri == true
                  ? "inProgress"
                  : "pending",
              prestasi:
                dbData.value.prestasi == true
                  ? "completed"
                  : dbData.value.riwayat_pendidikan == true
                  ? "inProgress"
                  : "pending",
              upload:
                dbData.value.upload == true
                  ? "completed"
                  : dbData.value.prestasi == true
                  ? "inProgress"
                  : "pending",
            });
          } else {
            console.error("Failed to fetch user data");
          }
        } catch (error) {
          console.error("An error occurred while fetching user data:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <main className="">
      <div className="bg-dark-color relative py-16 h-fit">
        <div className="lg:max-w-[1300px] mx-auto">
          <Link href="/" className="lg:flex gap-5">
            <Image src="/assets/icon/back.svg" width={30} height={22} alt="" />
            <h1 className="font-bold text-[24px] text-white">Isi Data Diri</h1>
          </Link>
          <div className="lg:max-w-[1200px] mx-auto bg-white mt-10 rounded-xl">
            <div className="flex gap-2 justify-center py-11">
              <Step
                step="Step 1"
                title="Biodata"
                hiddenLine=""
                image="/assets/icon/datadiri.svg"
                colorIcon={`${
                  steps.dataDiri === "completed"
                    ? "bg-[#07590F]"
                    : "bg-[#004C85]"
                }`}
                colorStatus={`${
                  steps.dataDiri === "completed"
                    ? "bg-[#D8FFEC]"
                    : "bg-[#EAE8FE]"
                }`}
                status={`${
                  steps.dataDiri === "completed" ? "Completed" : "In Progress"
                }`}
                colorBorder={`${
                  steps.dataDiri === "completed"
                    ? "border-[#07590F]"
                    : "border-[#004C85]"
                }`}
                width="max-w-[95px]"
              />
              <Step
                step="Step 2"
                title="Riwayat Pendidikan"
                hiddenLine=""
                image="/assets/icon/pendidikan.svg"
                colorIcon={`${
                  steps.pendidikan === "completed"
                    ? "bg-[#07590F]"
                    : steps.pendidikan === "inProgress"
                    ? "bg-[#004C85]"
                    : "bg-[#979797]"
                }`}
                colorStatus={`${
                  steps.pendidikan === "completed"
                    ? "bg-[#D8FFEC]"
                    : steps.pendidikan === "inProgress"
                    ? "bg-[#EAE8FE]"
                    : "bg-[#FFFFFF]"
                }`}
                status={`${
                  steps.pendidikan === "completed"
                    ? "Completed"
                    : steps.pendidikan === "inProgress"
                    ? "In Progress"
                    : "Pending"
                }`}
                colorBorder={`${
                  steps.pendidikan === "completed"
                    ? "border-[#07590F]"
                    : steps.pendidikan === "inProgress"
                    ? "border-[#004C85]"
                    : "border-[#979797]"
                }`}
                width="max-w-[95px]"
              />
              <Step
                step="Step 3"
                title="Prestasi"
                hiddenLine=""
                image="/assets/icon/prestasi.svg"
                colorIcon={`${
                  steps.prestasi === "completed"
                    ? "bg-[#07590F]"
                    : steps.prestasi === "inProgress"
                    ? "bg-[#004C85]"
                    : "bg-[#979797]"
                }`}
                colorStatus={`${
                  steps.prestasi === "completed"
                    ? "bg-[#D8FFEC]"
                    : steps.prestasi === "inProgress"
                    ? "bg-[#EAE8FE]"
                    : "bg-[#FFFFFF]"
                }`}
                status={`${
                  steps.prestasi === "completed"
                    ? "Completed"
                    : steps.prestasi === "inProgress"
                    ? "In Progress"
                    : "Pending"
                }`}
                colorBorder={`${
                  steps.prestasi === "completed"
                    ? "border-[#07590F]"
                    : steps.prestasi === "inProgress"
                    ? "border-[#004C85]"
                    : "border-[#979797]"
                }`}
                width="max-w-[95px]"
              />
              <Step
                step="Step 4"
                title="Upload File"
                hiddenLine="hidden"
                image="/assets/icon/upload.svg"
                colorIcon={`${
                  steps.upload === "completed"
                    ? "bg-[#07590F]"
                    : steps.upload === "inProgress"
                    ? "bg-[#004C85]"
                    : "bg-[#979797]"
                }`}
                colorStatus={`${
                  steps.upload === "completed"
                    ? "bg-[#D8FFEC]"
                    : steps.upload === "inProgress"
                    ? "bg-[#EAE8FE]"
                    : "bg-[#FFFFFF]"
                }`}
                status={`${
                  steps.upload === "completed"
                    ? "Completed"
                    : steps.upload === "inProgress"
                    ? "In Progress"
                    : "Pending"
                }`}
                colorBorder={`${
                  steps.upload === "completed"
                    ? "border-[#07590F]"
                    : steps.upload === "inProgress"
                    ? "border-[#004C85]"
                    : "border-[#979797]"
                }`}
                width="max-w-[95px]"
              />
            </div>
            <div className="w-full h-[2px] bg-[#D9D9D9]"></div>
            {steps.dataDiri === "inProgress" ? (
              <FormBiodata />
            ) : steps.pendidikan === "inProgress" ? (
              <FormPendidikan />
            ) : steps.prestasi === "inProgress" ? (
              <FormPrestasi />
            ) : steps.upload === "inProgress" ? (
              <FormUpload />
            ) : (
              "Selesai isi form"
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
