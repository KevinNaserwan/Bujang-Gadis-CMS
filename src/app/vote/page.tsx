import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import JumbotronVote from "./jumbotron";
import DaftarVote from "./daftarvote";

const Vote = () => {
  return (
    <main
      rel="preload"
      className="bg-sejarah-hero-image lg:bg-none bg-no-repeat bg-contain w-full"
    >
      <Header />
      <JumbotronVote />
      <DaftarVote />
      <Footer />
    </main>
  );
};

export default Vote;
