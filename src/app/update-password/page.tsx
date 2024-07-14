"use client";

import React from "react";
import UpdatePassword from "./components/UpdatePassword";
import VerifyOTP from "./components/VerifyOTP";
import VerifyUpdatePassword from "./components/VerifyUpdatePassword";

const Password = () => {
  const [step, setStep] = React.useState(2);
  return (
    <>
      {step === 1 ? (
        <UpdatePassword />
      ) : step === 2 ? (
        <VerifyOTP email="" />
      ) : (
        <VerifyUpdatePassword />
      )}
    </>
  );
};

export default Password;
