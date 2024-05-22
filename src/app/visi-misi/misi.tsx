import Image from "next/image";
import MisiCard from "./component/misi-card";

export default function Misi() {
  return (
    <section className=" lg:mt-32 lg:mb-52 mb-28">
      <div className=" container max-w-[300px] lg:max-w-[1200px]  mx-auto mt-20">
        <div className=" flex items-center gap-4">
          <Image
            src="/assets/icon/misi.png"
            alt=" "
            width={45}
            height={50}
            className="lg:w-[45px] lg:h-[50px] w-[31px] h-[36px] "
          />
          <h1 className=" lg:font-bold font-semibold lg:text-3xl text-2xl text-blue-color">
            Misi
          </h1>
        </div>
        <div className="lg:flex justify-around flex-wrap lg:mt-16 mt-8">
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
            text="Ikut berpartisipasi dengan cara mendukung pembangunan dalam usaha peningkatan sumber daya manusia."
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
