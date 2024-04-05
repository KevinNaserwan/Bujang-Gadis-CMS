import Image from "next/image";

export default function Section1() {
  return (
    <div className=" relative bg-dark-color">
      <div className=" absolute bottom-0 right-96 z-0">
        <Image
          src={"/assets/images/ellipse1.svg"}
          alt=""
          width={400}
          height={200}
        />
      </div>
      <div className=" absolute bottom-0 right-0 z-10">
        <Image
          src={"/assets/images/ellipse2.svg"}
          alt=""
          width={600}
          height={300}
        />
      </div>
      <div className=" relative container mx-auto py-24 z-40">
        <div className=" flex gap-8 items-center">
          <h2 className=" text-white font-bold text-4xl text-left w-[50%] leading-normal">
            Mari Melangkah Lebih Jauh Bersama Kami
          </h2>
          <div className=" flex">
            <div className=" flex-auto">
              <Image
                src={"/assets/images/develop.svg"}
                alt="Develop Image"
                width={80}
                height={80}
              />
              <h3 className=" font-bold text-2xl text-left text-white py-3">
                Mengembangkan
              </h3>
              <p className=" text-base font-normal text-white w-[80%]">
                Turut serta mengembangkan dan memasyarakatkan pentingnya
                Pendidikan dan Kebudayaan dalam kehidupan.
              </p>
            </div>
            <div className=" flex-auto">
              <Image
                src={"/assets/images/enlightment.svg"}
                alt="Develop Image"
                width={80}
                height={80}
              />
              <h3 className=" font-bold text-2xl text-left text-white py-3">
                Mencerdaskan
              </h3>
              <p className=" text-base font-normal text-white w-[80%]">
                Membangun kaum cendikia yang memiliki integritas, kepribadian,
                humanis serta kepedulian sosial.
              </p>
            </div>
            <div className=" flex-auto">
              <Image
                src={"/assets/images/unite.svg"}
                alt="Develop Image"
                width={80}
                height={80}
              />
              <h3 className=" font-bold text-2xl text-left text-white py-3">
                Menyatukan
              </h3>
              <p className=" text-base font-normal text-white">
                Memupuk dan mengembangkan rasa persatuan dan kesatuan di antara
                anggota.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
