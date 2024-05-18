import Image from "next/image";

export default function VisiMisiJumbotron() {
  return (
    <section className=" pb-14 lg:pb-24">
      <div className=" mx-auto pt-4 lg:pt-12 lg:pb-12 flex flex-wrap lg:block justify-center lg:bg-sejarah-hero-image-web bg-cover">
        <div>
          <h1 className=" text-center text-2xl lg:text-4xl font-bold leading-normal">
            Visi dan Misi
          </h1>
          <h1 className=" text-center text-2xl lg:text-4xl lg:py-3 font-bold text-secondary-color">
            Bujang Gadis Teknik
          </h1>
        </div>
        <h2 className=" text-center pt-1 lg:text-3xl pb-6 font-bold text-lg ">
          UNIVERSITAS SRIWIJAYA
        </h2>
      </div>
    </section>
  );
}
