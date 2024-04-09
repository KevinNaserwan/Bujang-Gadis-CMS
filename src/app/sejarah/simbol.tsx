import Image from "next/image";
import SimbolCard from "./components/arti-simbol-card";

export default function Simbol() {
  return (
    <section>
      <div className=" w-full min-h-80 bg-dark-color">
        <div className=" container py-20 mx-auto w-[300px] flex flex-wrap justify-center">
          <div className=" text-center">
            <h1 className=" text-white font-bold text-[22px]">ARTI SIMBOL</h1>
            <h3 className=" font-bold text-primary-color text-sm mx-auto mt-1">
              BUJANG GADIS TEKNIK UNIVERSITAS SRIWIJAYA
            </h3>
          </div>
          <div>
            <Image
              alt="Logo Bujang Gadis"
              src={"/assets/images/logo-bg.svg"}
              width={100}
              height={100}
              className=" pt-5 pb-10"
            />
          </div>
          <div>
            <SimbolCard
              image=""
              simbol="Padi"
              content="Semakin berisi semakin merunduk, berarti bahwa anggota IBGUIN adalah orang yang selalu rendah hati dan akrab dalam lingkungan sosial."
            />
            <SimbolCard
              image=""
              simbol="Pena"
              content="Melambangkan mahasiswa/i yang selalu tekun menuntun ilmu dan berusaha memberikan yang terbaik untuk studi dan karirnya."
            />
            <SimbolCard
              simbol="Bujang dan Gadis"
              image=""
              content="Melambangkan, bahwa mahasiswa/i Universitas Islam Negeri Raden Fatah Palembang menjunjung tinggi syariat Islam."
            />
            <SimbolCard
              image=""
              simbol="Warna Biru"
              content="Selain menjadi warna identitas kampus Universitas Islam Negeri Raden Fatah Palembang, warna biru sendiri dalam psikologi melambangkan ketenangan."
            />
            <SimbolCard
              image=""
              simbol="Lambang UIN Raden Fatah"
              content="Karena berada di lingkungan dan mengabdi di kampus UIN Raden Fatah Palembang."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
