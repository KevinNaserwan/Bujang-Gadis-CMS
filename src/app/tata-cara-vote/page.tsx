import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import JumbotronTataCaraVote from "./jumbotron";
import MainTataCaraVote from "./main";

const TataCaraVote = () => {
  return (
    <main
      rel="preload"
      className="bg-sejarah-hero-image lg:bg-none bg-no-repeat bg-contain w-full"
    >
      <Header />
      <JumbotronTataCaraVote />
      <MainTataCaraVote />
      <Footer />
    </main>
  );
};

export default TataCaraVote;
