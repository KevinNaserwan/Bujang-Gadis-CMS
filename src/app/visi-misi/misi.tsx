import Image from "next/image";
import MisiCard from "./component/misi-card";

export default function Misi() {
  return (
    <section className=" lg:mt-32 mb-44">
      <div className=" container mx-auto">
        <div className=" flex items-center gap-4">
          <Image src="/assets/icon/misi.png" alt=" " width={45} height={50} />
          <h1 className=" lg:font-bold lg:text-3xl text-blue-color">Misi</h1>
        </div>
        <div className="lg:flex justify-around flex-wrap mt-16">
          <MisiCard
            number={1}
            text="Turut serta mengembangkan dan memasyarakatkan pentingnya Pendidikan dan Kebudayaan dalam hidup."
          />
          <MisiCard
            number={2}
            text="Membina, mengembangkan, dan menyalurkan aktivitas serta kreativitas sesuai dengan minat dan bakat anggota."
          />
          <MisiCard
            number={3}
            text="Ikut berpartisipasi dengan cara mendukung pembangunan yang berwawasan lingkungan dan dalam usaha peningkatan sumber daya manusia."
          />
          <MisiCard
            number={4}
            text="Memupuk dan mengembangkan rasa persatuan dan kesatuan di antara anggota."
          />
        </div>
      </div>
    </section>
  );
}
