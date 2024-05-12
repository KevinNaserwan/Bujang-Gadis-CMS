import BujangGadisCard from "./components/bujanggadis-card";
import { CarouselBujang } from "./components/carousel-bujang";

export default function BujangGadis() {
  return (
    <section>
      <div className=" container mx-auto py-16">
        <div className=" text-center">
          <h1 className=" font-bold text-[22px] lg:text-[32px] text-primary-color">
            BUJANG GADIS
          </h1>
          <h3 className=" font-bold text-sm lg:text-[32px] lg:pt-5 text-black">
            TEKNIK UNIVERSITAS SRIWIJAYA
          </h3>
        </div>
        <CarouselBujang />
      </div>
    </section>
  );
}
