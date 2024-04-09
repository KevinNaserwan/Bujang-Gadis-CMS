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
import BujangGadisCard from "./bujanggadis-card";

export function CarouselBujang() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
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
          <div className="p-0">
            <BujangGadisCard
              nameBujang="Hari Randora"
              nameGadis="Sheila Sicilia"
              image="/assets/images/bujang-gadis.svg"
              tahun="2023"
              bgStart="bg-transparent"
              bgEnd="bg-primary-color"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-0">
            <BujangGadisCard
              nameBujang="Hari Randora"
              nameGadis="Sheila Sicilia"
              image="/assets/images/bujang-gadis.svg"
              tahun="2023"
              bgStart="bg-primary-color"
              bgEnd="bg-primary-color"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-0">
            <BujangGadisCard
              nameBujang="Hari Randora"
              nameGadis="Sheila Sicilia"
              image="/assets/images/bujang-gadis.svg"
              tahun="2024"
              bgStart="bg-primary-color"
              bgEnd="bg-transparent"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
