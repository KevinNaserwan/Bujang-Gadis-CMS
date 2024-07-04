"use client";

import Image from "next/image";
import Link from "next/link";
import Step from "./components/step";
import { useState, useEffect } from "react";
import FormBiodata from "./components/formBiodata";
import FormPendidikan from "./components/formPendidikan";
import FormPrestasi from "./components/formPrestasi";
import FormUpload from "./components/formUpload";
import FormDownload from "./components/formDownload";
import dotenv from "dotenv";

export default function Biodata() {
  dotenv.config();
  const apiUrl = process.env.APP_API_URL;
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
          const response = await fetch(`${apiUrl}/api/v1/user/${email}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

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
      <div className="lg:bg-dark-color bg-white relative lg:py-16 lg:h-fit">
        <div className="lg:max-w-[1300px] max-w-[330px] mx-auto ">
          <Link href="/" className="lg:flex gap-5">
            <Image
              src="/assets/icon/back.svg"
              width={30}
              height={22}
              alt=""
              className="lg:pt-0 pt-10 hidden lg:block"
            />
            <Image
              src="/assets/icon/back-mobile.svg"
              width={30}
              height={22}
              alt=""
              className="lg:pt-0 pt-5 lg:hidden block"
            />
            <h1 className="font-bold text-[24px] text-white hidden lg:block">
              Isi Data Diri
            </h1>
            <h1 className="font-bold lg:text-[24px] text-base text-black lg:text-white lg:hidden block lg:mt-0 mt-5">
              Lengkapi Data Diri!
            </h1>
            <p className=" font-medium lg:hidden block text-xs mt-1 mb-5">
              Lengkapi form data diri dibawah
            </p>
          </Link>
          <div className="lg:max-w-[1200px] mx-auto bg-white lg:mt-10 rounded-xl lg:pb-32">
            <h1 className=" lg:hidden text-center font-bold text-base text-blue-color">
              {" "}
              {`${
                steps.upload === "completed"
                  ? "Completed"
                  : steps.prestasi === "completed"
                  ? "Step 4"
                  : steps.pendidikan === "completed"
                  ? "Step 3"
                  : steps.dataDiri === "completed"
                  ? "Step 2"
                  : "Step 1"
              } `}
            </h1>
            <div className="flex lg:gap-2 justify-center lg:py-11 py-5">
              <Step
                step="Step 1"
                title="Biodata"
                hiddenLine=""
                image={`${
                  steps.dataDiri === "completed"
                    ? "/assets/icon/success.svg"
                    : "/assets/icon/datadiri.svg"
                }`}
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
                title="Pendidikan"
                hiddenLine=""
                image={`${
                  steps.pendidikan === "completed"
                    ? "/assets/icon/success.svg"
                    : steps.pendidikan === "inProgress"
                    ? "/assets/icon/pendidikan.svg"
                    : "/assets/icon/pendidikan.svg"
                }`}
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
                image={`${
                  steps.prestasi === "completed"
                    ? "/assets/icon/success.svg"
                    : steps.prestasi === "inProgress"
                    ? "/assets/icon/prestasi.svg"
                    : "/assets/icon/prestasi.svg"
                }`}
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
                image={`${
                  steps.upload === "completed"
                    ? "/assets/icon/success.svg"
                    : steps.upload === "inProgress"
                    ? "/assets/icon/upload.svg"
                    : "/assets/icon/upload.svg"
                }`}
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
            <div className="w-full h-[2px] lg:block hidden bg-[#D9D9D9]"></div>
            {steps.dataDiri === "inProgress" ? (
              <FormBiodata />
            ) : steps.pendidikan === "inProgress" ? (
              <FormPendidikan />
            ) : steps.prestasi === "inProgress" ? (
              <FormPrestasi />
            ) : steps.upload === "inProgress" ? (
              <FormUpload />
            ) : (
              <FormDownload />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
