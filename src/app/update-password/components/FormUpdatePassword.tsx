import { useState } from "react";

interface FormProps {
  htmlFor: string;
  label: string;
  type: string;
  placeholder: string;
  imageClassName: string;
  ClassName?: string;
  value?: string;
  name: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormUpdatePassword: React.FC<FormProps> = ({
  htmlFor,
  label,
  type,
  placeholder,
  value = "",
  ClassName,
  name,
  required,
  onChange,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="my-5 lg:w-full mx-auto">
      <label className="font-medium text-xs lg:text-sm" htmlFor={htmlFor}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div
        className={`border lg:border-[#D9D9D9] border-[#979797] flex items-center rounded-lg lg:pl-4 pl-3 gap-3 mt-[5px] ${
          error ? "border-red-500" : ""
        }`}
      >
        <input
          type={type === "password" && showPassword ? "text" : type}
          id={htmlFor}
          name={name}
          className="w-full lg:font-medium font-normal text-xs text-black lg:text-sm outline-none lg:py-3 py-[12px] bg-transparent"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        {type === "password" && (
          <button
            type="button"
            className="focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            <img
              src="assets/icon/show.svg" // Replace with your eye icon path
              alt="Toggle password visibility"
              className="w-5 h-5 mr-3"
            />
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormUpdatePassword;
