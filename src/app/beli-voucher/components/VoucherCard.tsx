import React, { useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";

interface VoucherCardProps {
  voucherName: string;
  voucherPrice: string;
  onQuantityChange: (quantity: number) => void;
  isActive: boolean;
}

const VoucherCard: React.FC<VoucherCardProps> = ({
  voucherName,
  voucherPrice,
  onQuantityChange,
  isActive,
}) => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  const increaseQuantity = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);

    if (!isNaN(value)) {
      setQuantity(value);
      onQuantityChange(value);
    }
  };

  const toggleActive = () => {
    // isActive is managed outside of this component
    // We do not need setIsActive here
    // isActive state is passed as a prop from parent component
  };

  return (
    <div className="flex flex-col justify-center items-center mt-6 rounded-md p-5 cursor-pointer">
      <div
        className={`lg:w-[300px] ${
          isActive ? "border-blue-500 border-2" : "border border-black"
        } rounded-md h-full p-5 relative`}
        onClick={toggleActive}
      >
        <h1 className="font-bold text-lg">{voucherName}</h1>
        <p className="font-normal text-base w-10/12 mt-5">
          Dapatkan 10 point dengan membayar {voucherPrice}
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between mt-10">
          <h3 className="font-bold text-base">{voucherPrice}</h3>
          <div className="flex flex-row">
            <div
              className="w-[25px] h-[25px] bg-black flex items-center justify-center text-white cursor-pointer"
              onClick={decreaseQuantity}
            >
              -
            </div>
            <input
              className="w-[30px] h-[25px] text-center border border-black"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <div
              className="w-[25px] h-[25px] bg-black flex items-center justify-center text-white cursor-pointer"
              onClick={increaseQuantity}
            >
              +
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 w-[25px] h-[25px] rounded-full border-2 border-gray-600"></div>
        {isActive && (
          <div className="absolute top-[14px] right-[14px] w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
            <CheckBadgeIcon className="text-white w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VoucherCard;
