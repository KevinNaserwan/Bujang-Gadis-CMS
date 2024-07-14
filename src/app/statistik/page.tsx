import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import JumbotronStatistik from "./jumbotron";
import MainStatistik from "./main";

const Statistik = () => {
  return (
    <main
      rel="preload"
      className="bg-sejarah-hero-image lg:bg-none bg-no-repeat bg-contain w-full"
    >
      <Header />
      <JumbotronStatistik />
      <MainStatistik />
      <Footer />
    </main>
  );
};

export default Statistik;
