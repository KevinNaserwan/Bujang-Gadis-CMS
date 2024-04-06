"use client";

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
    <main
      rel="preload"
      className="lg:bg-hero-image bg-mobile-hero-image h-full bg-contain bg-no-repeat w-full"
    >
      <Header />
      <Jumbotron
        video="/assets/video/trailer-hero.mp4"
        videoHeight={1080}
        videoWidth={1920}
      />
      <Section1 />
      <History />
      <Timeline />
      <Term />
    </main>
  );
}
