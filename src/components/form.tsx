import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormProps {
  htmlFor: string;
  label: string;
  type: string;
  imageSrc: string;
  placeholder: string;
  imageClassName: string;
  value?: string;
  onChange?: (e: any) => void;
}

export default function Form(props: FormProps) {
  const {
    htmlFor,
    label,
    imageSrc,
    type,
    placeholder,
    imageClassName,
    value,
    onChange,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="mb-2 mt-2">
        <label className="font-medium text-xs lg:text-sm" htmlFor={htmlFor}>
          {label}
        </label>
        <div className="border lg:border-[#D9D9D9] border-[#979797] flex items-center rounded-lg lg:pl-4 pl-3 gap-3 mt-[5px]">
          <Image
            src={imageSrc}
            alt=""
            width={22}
            height={22}
            className="lg:w-[22px] lg:h-[22px] w-[17px] h-[17px]"
          />
          <input
            type={type === "password" && showPassword ? "text" : type}
            id={htmlFor}
            className="w-full lg:font-medium font-normal text-xs text-black lg:text-sm outline-none lg:py-3 py-[6px] bg-transparent"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {type === "password" && (
            <Link href="" onClick={togglePasswordVisibility}>
              <Image
                src={
                  showPassword
                    ? "/assets/icon/hide.svg"
                    : "/assets/icon/show.svg"
                }
                alt=""
                width={22}
                height={22}
                className={imageClassName}
              />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
