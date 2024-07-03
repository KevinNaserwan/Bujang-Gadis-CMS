import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import JumbotronBeliVoucher from "./jumbotron";
import MainBeliVoucher from "./main";

const BeliVoucher = () => {
  return (
    <main
      rel="preload"
      className="bg-sejarah-hero-image lg:bg-none bg-no-repeat bg-contain w-full"
    >
      <Header />
      <JumbotronBeliVoucher />
      <MainBeliVoucher />
      <Footer />
    </main>
  );
};

export default BeliVoucher;
