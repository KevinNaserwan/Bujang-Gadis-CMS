import Footer from "@/components/footer";
import Header from "@/components/header";
import Jumbotron from "@/components/jumbotron";
import React from "react";
import JumbotronBerhasil from "./jumbotron";
import MainBerhasil from "./main";

const Berhasil = () => {
  return (
    <main
      rel="preload"
      className="bg-sejarah-hero-image lg:bg-none bg-no-repeat bg-contain w-full"
    >
      <Header />
      <JumbotronBerhasil />
      <MainBerhasil />
      <Footer />
    </main>
  );
};

export default Berhasil;
