import Image from "next/image";

export default function Visi() {
  return (
    <section className=" lg:my-8">
      <div className=" lg:flex container mx-auto items-center justify-around">
        <Image
          src="/assets/images/visi-image.png"
          alt="gambar visi bujang gadis teknik universitas sriwijaya"
          width={470}
          height={280}
        />
        <div className="">
          <div className=" flex items-center gap-4">
            <Image src="/assets/icon/visi.png" alt=" " width={45} height={50} />
            <h1 className=" lg:font-bold lg:text-3xl text-blue-color">Visi</h1>
          </div>
          <div>
            <p className=" mt-5 lg:text-lg text-justify font-normal lg:w-[500px]">
              "Menciptakan generasi yang berintelektual tinggi, berani dan
              memiliki perilaku yang baik, serta meningkatkan minat dan bakat
              demi terciptanya sosok yang mampu bersaing di dunia luar serta
              mampu mengharumkan nama Politeknik Negeri Sriwijaya dan Ikatan
              Bujang Gadis Polsri."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
