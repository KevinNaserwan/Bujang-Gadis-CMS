import BujangGadisCard from "./components/bujanggadis-card";

export default function BujangGadis() {
  return (
    <section>
      <div className=" container mx-auto py-16">
        <div className=" text-center">
            <h1 className=" font-bold text-[22px] text-primary-color">BUJANG GADIS</h1>
            <h3 className=" font-bold text-sm text-black">TEKNIK UNIVERSITAS SRIWIJAYA</h3>
        </div>
        <BujangGadisCard/>
      </div>
    </section>
  );
}
