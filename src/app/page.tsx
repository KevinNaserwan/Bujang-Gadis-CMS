import Button from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import History from "@/components/history";
import Jumbotron from "@/components/jumbotron";
import Section1 from "@/components/section-1";
import Term from "@/components/term";
import Timeline from "@/components/timeline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div rel="preload" className="bg-hero-image h-[530px] lg:h-[665px] bg-bottom lg:bg-cover bg-no-repeat w-full">
      <main className="bg-transparent min-h-full">
      <Header />
        <Jumbotron />
        <Section1 />
        <History />
        {/* <Timeline/> */}
        <Term />
        <Footer />
      </main>
    </div>
  );
}
