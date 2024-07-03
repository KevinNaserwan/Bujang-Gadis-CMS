"use client";

import React, { useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import VoucherCard from "./components/VoucherCard";
import FormBeliVoucher from "./components/FormBeliVoucher";

const MainBeliVoucher = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedVouchers, setSelectedVouchers] = useState([
    { name: "Voucher 10K", price: 10000, quantity: 0, isActive: false },
    { name: "Voucher 30K", price: 30000, quantity: 0, isActive: false },
    { name: "Voucher 50K", price: 50000, quantity: 0, isActive: false },
  ]);

  const handleQuantityChange = (index: number, quantity: number) => {
    const updatedVouchers = [...selectedVouchers];
    updatedVouchers[index].quantity = quantity;
    updatedVouchers[index].isActive = true;
    setSelectedVouchers(updatedVouchers);

    if (quantity === 0) {
      updatedVouchers[index].isActive = false;
    }

    // Hitung total harga
    let total = 0;
    updatedVouchers.forEach((voucher) => {
      total += voucher.price * voucher.quantity;
    });
    setTotalPrice(total);
  };

  //   const toggleActive = (index: number) => {
  //     const updatedVouchers = [...selectedVouchers];
  //     updatedVouchers[index].isActive = !updatedVouchers[index].isActive;
  //     setSelectedVouchers(updatedVouchers);
  //   };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="lg:py-24 py-20 container xl:max-w-[1300px] lg:max-w-[1100px] mx-auto">
        <h1 className="relative z-10 text-center text-4xl font-semibold text-black">
          BELI VOUCHER
        </h1>
        <p className=" font-bold text-[32px] text-primary-color text-center mt-2">
          BUJANG GADIS TEKNIK UNIVERSITAS SRIWIJAYA
        </p>
        <div className=" bg-white shadow-2xl mt-14 p-20 rounded-t-2xl w-full h-full flex-col justify-center">
          <div>
            <h1 className=" font-bold text-2xl text-center">
              Lengkapi Biodata
            </h1>
            <form className="lg:my-4 my-5">
              <FormBeliVoucher
                htmlFor="nama"
                label="Nama Lengkap"
                type="text"
                placeholder="Masukkan Nama Lengkap"
                imageClassName="hidden"
              />
              <FormBeliVoucher
                htmlFor="no_telp"
                label="Nomor Telepon"
                type="number"
                placeholder="Masukkan Nomor Telepon"
                imageClassName="hidden"
              />
              <FormBeliVoucher
                htmlFor="email"
                label="Email"
                type="email"
                placeholder="Masukkan Email"
                imageClassName="hidden"
              />
            </form>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[2px] rounded-full my-10"></div>
          <div>
            <h1 className=" font-bold text-2xl text-center">Pilih Voucher</h1>
            <div className=" grid grid-flow-row grid-cols-3 gap-10">
              {selectedVouchers.map((voucher, index) => (
                <VoucherCard
                  key={index}
                  voucherName={voucher.name}
                  voucherPrice={`Rp${voucher.price},00`}
                  onQuantityChange={(quantity) =>
                    handleQuantityChange(index, quantity)
                  }
                  isActive={voucher.isActive}
                  //   toggleActive={() => toggleActive(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" bg-dark-color rounded-b-2xl py-10 shadow-2xl">
          <div className=" w-4/12 mx-auto h-full border border-white rounded-md flex flex-col">
            <div className=" p-6">
              <h1 className=" font-bold text-xl text-white">Detail Harga</h1>
              <div className=" flex flex-col pt-4">
                {selectedVouchers.map((voucher, index) => (
                  <div
                    key={index}
                    className=" flex flex-row justify-between text-white pt-1"
                  >
                    <p>
                      {voucher.name} ({voucher.quantity}x)
                    </p>
                    <p>Rp{voucher.price * voucher.quantity},00</p>
                  </div>
                ))}
                <div className=" bg-white w-full h-[2px] mt-5 mb-7"></div>
                <div className=" flex flex-row justify-between text-white font-bold">
                  <p>Total</p>
                  <p>Rp{totalPrice},00</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-primary-color rounded-lg w-2/12 text-center font-bold mx-auto mt-10 text-black px-5 py-3">
            Beli Voucher
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBeliVoucher;
