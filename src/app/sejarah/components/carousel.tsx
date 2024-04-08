"use client"

import * as React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import KetuaCard from "./ketua-card";

export function CarouselDemo() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className=" mx-auto max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <KetuaCard
              id="1"
              name="Chandra Saputra"
              year={2023}
              image="/assets/images/ketua-1.svg"
              hidden=""
              hidden2=""
              width="50"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <KetuaCard
              id="1"
              name="Budi"
              year={2024}
              image="/assets/images/ketua-1.svg"
              hidden="hidden"
              hidden2="hidden"
              width="70"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <KetuaCard
              id="1"
              name="Agus"
              year={2025}
              image="/assets/images/ketua-1.svg"
              hidden="hidden"
              hidden2=""
              width="70"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
