import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormProps {
  htmlFor: string;
  label: string;
  type: string;
  placeholder: string;
  imageClassName: string;
  ClassName?: string;
  value?: string;
  onChange?: (e: any) => void;
}

export default function FormBeliVoucher(props: FormProps) {
  const {
    htmlFor,
    label,
    type,
    placeholder,
    imageClassName,
    value,
    ClassName,
    onChange,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className=" my-5 lg:w-8/12 mx-auto">
        <label className="font-medium text-xs lg:text-sm" htmlFor={htmlFor}>
          {label}
        </label>
        <div className="border lg:border-[#D9D9D9] border-[#979797] flex items-center rounded-lg lg:pl-4 pl-3 gap-3 mt-[5px]">
          <input
            type={type === "password" && showPassword ? "text" : type}
            id={htmlFor}
            className="w-full lg:font-medium font-normal text-xs text-black lg:text-sm outline-none lg:py-3 py-[6px] bg-transparent"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}
