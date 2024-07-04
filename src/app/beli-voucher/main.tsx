"use client";

import React, { useState } from "react";
import axios from "axios";
import VoucherCard from "./components/VoucherCard";
import FormBeliVoucher from "./components/FormBeliVoucher";
import dotenv from "dotenv";

const MainBeliVoucher = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [snapUrl, setSnapUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
  });

  const [selectedVouchers, setSelectedVouchers] = useState([
    {
      name: "Voucher 10K",
      price: 10000,
      quantity: 0,
      isActive: false,
      category_id: 1,
    },
    {
      name: "Voucher 20K",
      price: 20000,
      quantity: 0,
      isActive: false,
      category_id: 2,
    },
    {
      name: "Voucher 50K",
      price: 50000,
      quantity: 0,
      isActive: false,
      category_id: 3,
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [orderStatus, setOrderStatus] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone_number: "",
  });

  const handleQuantityChange = (index: number, quantity: number) => {
    const updatedVouchers = [...selectedVouchers];
    updatedVouchers[index].quantity = quantity;
    updatedVouchers[index].isActive = quantity > 0;
    setSelectedVouchers(updatedVouchers);

    let total = 0;
    updatedVouchers.forEach((voucher) => {
      total += voucher.price * voucher.quantity;
    });
    setTotalPrice(total);
  };

  const validateField = (name: string, value: string) => {
    if (value.trim() === "") {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const isFormValid = () => {
    const isPersonalDataFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    const isVoucherSelected = selectedVouchers.some(
      (voucher) => voucher.quantity > 0
    );
    return isPersonalDataFilled && isVoucherSelected;
  };

  const handleOrder = async () => {
    if (!isFormValid()) {
      setOrderStatus(
        "Please fill in all required fields and select at least one voucher."
      );
      return;
    }

    const activeVouchers = selectedVouchers
      .filter((voucher) => voucher.isActive)
      .map((voucher) => ({
        category_id: voucher.category_id,
        quantity: voucher.quantity,
      }));

    const orderData = {
      ...formData,
      vouchers: activeVouchers,
    };

    dotenv.config();
    const apiUrl = process.env.APP_API_URL;
    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/order/order`,
        orderData
      );

      console.log("Order placed successfully:", response.data);

      // Set snap_url to state
      setSnapUrl(response.data.snap_url);

      // Open snap_url in a new tab
      if (response.data.snap_url) {
        window.open(response.data.snap_url, "_blank");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      setOrderStatus("Order gagal. Silakan coba lagi.");
      setSnapUrl(null);
    } finally {
      setShowModal(false);
    }
  };

  const handleConfirmOrder = () => {
    if (isFormValid()) {
      setShowModal(true);
    } else {
      setOrderStatus(
        "Mohon lengkapi semua data dan pilih minimal satu voucher."
      );
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="lg:py-24 py-20 container xl:max-w-[1300px] lg:max-w-[1100px] mx-auto">
        <h1 className="relative z-10 text-center text-4xl font-semibold text-black">
          BELI VOUCHER
        </h1>
        <p className="font-bold text-[32px] text-primary-color text-center mt-2">
          BUJANG GADIS TEKNIK UNIVERSITAS SRIWIJAYA
        </p>
        <div className="bg-white shadow-2xl mt-14 p-20 rounded-t-2xl w-full h-full flex-col justify-center">
          <div>
            <h1 className="font-bold text-2xl text-center">Lengkapi Biodata</h1>
            <form className="lg:my-4 my-5">
              <FormBeliVoucher
                htmlFor="name"
                label="Nama Lengkap"
                type="text"
                placeholder="Masukkan Nama Lengkap"
                imageClassName="hidden"
                value={formData.name}
                name="name"
                onChange={handleInputChange}
                error={errors.name}
                required
              />
              <FormBeliVoucher
                htmlFor="phone_number"
                label="Nomor Telepon"
                type="number"
                placeholder="Masukkan Nomor Telepon"
                imageClassName="hidden"
                value={formData.phone_number}
                name="phone_number"
                onChange={handleInputChange}
                error={errors.phone_number}
                required
              />
              <FormBeliVoucher
                htmlFor="email"
                label="Email"
                type="email"
                placeholder="Masukkan Email"
                imageClassName="hidden"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
                error={errors.email}
                required
              />
            </form>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[2px] rounded-full my-10"></div>
          <div>
            <h1 className="font-bold text-2xl text-center">Pilih Voucher</h1>
            <div className="grid grid-flow-row grid-cols-3 gap-10">
              {selectedVouchers.map((voucher, index) => (
                <VoucherCard
                  key={index}
                  voucherName={voucher.name}
                  voucherPrice={`Rp${voucher.price},00`}
                  onQuantityChange={(quantity) =>
                    handleQuantityChange(index, quantity)
                  }
                  isActive={voucher.isActive}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-dark-color rounded-b-2xl py-10 shadow-2xl">
          <div className="w-4/12 mx-auto h-full border border-white rounded-md flex flex-col">
            <div className="p-6">
              <h1 className="font-bold text-xl text-white">Detail Harga</h1>
              <div className="flex flex-col pt-4">
                {selectedVouchers
                  .filter((voucher) => voucher.isActive)
                  .map((voucher, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-between text-white pt-1"
                    >
                      <p>
                        {voucher.name} ({voucher.quantity}x)
                      </p>
                      <p>Rp{voucher.price * voucher.quantity},00</p>
                    </div>
                  ))}
                <div className="bg-white w-full h-[2px] mt-5 mb-7"></div>
                <div className="flex flex-row justify-between text-white font-bold">
                  <p>Total</p>
                  <p>Rp{totalPrice},00</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-primary-color rounded-lg w-2/12 text-center font-bold mx-auto mt-10 text-black px-5 py-3 ${
              isFormValid() ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
            }`}
            onClick={isFormValid() ? handleConfirmOrder : undefined}
          >
            Beli Voucher
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Konfirmasi Order</h2>
            <p>Apakah Anda yakin ingin membeli voucher ini?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Batal
              </button>
              <button
                className="bg-primary-color text-black px-4 py-2 rounded"
                onClick={handleOrder}
              >
                Setuju
              </button>
            </div>
          </div>
        </div>
      )}
      {orderStatus && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Status Order</h2>
            <p>{orderStatus}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-primary-color text-black px-4 py-2 rounded"
                onClick={() => {
                  setOrderStatus("");
                  setSnapUrl(null);
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainBeliVoucher;
