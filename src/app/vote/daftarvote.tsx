import Image from "next/image";
import React from "react";
import CardVote from "./component/CardVote";

const DaftarVote = () => {
  return (
    <div className=" relative bg-dark-color overflow-hidden">
      <div className="lg:py-24 py-20 container xl:max-w-[1300px] lg:max-w-[1100px] mx-auto">
        <div className=" absolute z-0 top-0 left-0">
          <Image
            src={"/assets/images/ellipse3.svg"}
            alt=""
            width={100}
            height={75}
          />
        </div>
        <div className=" absolute z-0 bottom-0 -right-20">
          <Image
            src={"/assets/images/ellipse2.svg"}
            alt=""
            width={300}
            height={150}
          />
        </div>
        <h1 className=" relative z-10  text-center text-4xl font-semibold text-white">
          DAFTAR
        </h1>
        <h2 className=" font-semibold text-[32px] text-center text-primary-color pt-2 mb-12">
          BUJANG TEKNIK UNIVERSITAS SRIWIJAYA
        </h2>
        <div className=" grid grid-flow-row grid-cols-2 bg-white rounded-t-xl">
          <div className=" text-center border-b-4 border-primary-color py-6 font-bold text-2xl hover:bg-gray-200 hover:rounded-tl-xl">
            Bujang
          </div>
          <div className="text-center  py-6 font-bold text-2xl hover:bg-gray-200 hover:rounded-tr-xl">
            Gadis
          </div>
        </div>
        <div className=" relative z-10 grid grid-flow-row grid-cols-3 gap-16 py-12 pb-24 bg-white rounded-b-xl">
          <CardVote />
          <CardVote />
          <CardVote />
          <CardVote />
          <CardVote />
          <CardVote />
        </div>
      </div>
    </div>
  );
};

export default DaftarVote;
