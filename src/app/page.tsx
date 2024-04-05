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
    <main className=" min-h-[100vh]">
      <div className="bg-[url('/assets/images/hero.png')] bg-contain bg-no-repeat">
        <Header />
        <Jumbotron />
         <Section1 />
        <History />
        <Timeline/>
        <Term/>
        <Footer/>
      </div>
    </main>
  );
}
