"use client";

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

export function CarouselKetua() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className=" mx-auto max-w-xs lg:max-w-[1200px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className=" lg:hidden">
          <div className="p-0">
            <KetuaCard
              id="1"
              name="Chandra Saputra"
              year={2023}
              image="/assets/images/ketua-1.svg"
              hidden=""
              hidden2="hidden"
              width1="w-[110px]"
              width2="w-[140px]"
            />
          </div>
        </CarouselItem>
        <CarouselItem className=" lg:flex justify-center hidden lg:mt-10">
          <div className="p-0">
            <KetuaCard
              id="1"
              name="Chandra Saputra"
              year={2023}
              image="/assets/images/ketua-1.svg"
              hidden=""
              hidden2="hidden"
              width1="w-[110px]"
              width2="w-[140px]"
            />
          </div>
          <div className="p-0">
            <KetuaCard
              id="1"
              name="Budi"
              year={2024}
              image="/assets/images/ketua-1.svg"
              hidden="hidden"
              hidden2="hidden"
              width1="w-[155px]"
              width2="w-[155px]"
            />
          </div>
          <div className="p-0">
            <KetuaCard
              id="1"
              name="Agus"
              year={2025}
              image="/assets/images/ketua-1.svg"
              hidden="hidden"
              hidden2=""
              width1="w-[140px]"
              width2="w-[110px]"
            />
          </div>
        </CarouselItem>
        <CarouselItem className=" lg:hidden">
          <div className="p-0">
            <KetuaCard
              id="1"
              name="Budi"
              year={2024}
              image="/assets/images/ketua-1.svg"
              hidden="hidden"
              hidden2="hidden"
              width1="w-[155px]"
              width2="w-[155px]"
            />
          </div>
        </CarouselItem>
        <CarouselItem className=" lg:hidden">
          <div className="p-0">
            <KetuaCard
              id="1"
              name="Agus"
              year={2025}
              image="/assets/images/ketua-1.svg"
              hidden="hidden"
              hidden2=""
              width1="w-[140px]"
              width2="w-[110px]"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
