import Image from "next/image";

export default function Section1() {
  return (
    <div className=" relative bg-dark-color">
      <div className=" absolute bottom-0 lg:right-96 right-32 z-0">
        <Image
          src={"/assets/images/ellipse1.svg"}
          alt=""
          width={400}
          height={200}
          className=" w-[150px] h-[75px] lg:w-[400px] lg:h-[200px]"

        />
      </div>
      <div className=" absolute bottom-0 right-0 z-10">
        <Image
          src={"/assets/images/ellipse2.svg"}
          alt=""
          width={600}
          height={300}
          className=" w-[200px] h-[100px] lg:w-[600px] lg:h-[300px]"
        />
      </div>
      <div className=" relative container mx-auto py-24 lg:py-24 z-40">
        <div className=" flex flex-wrap lg:flex-nowrap gap-14 items-center justify-center lg:justify-between">
          <h2 className=" text-white font-bold text-2xl lg:text-4xl text-left w-[80%] lg:w-[30%] lg:leading-12">
            Mari Melangkah Lebih Jauh Bersama Kami
          </h2>
          <div className=" lg:flex w-9/12 lg:w-full lg:justify-around">
            <div className=" flex-auto w-8/12">
              <Image
                src={"/assets/images/develop.svg"}
                alt="Develop Image"
                width={80}
                height={80}
                className=" w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]"
              />
              <h3 className=" font-bold text-base lg:text-2xl  text-left text-white py-3">
                Mengembangkan
              </h3>
              <p className=" text-sm lg:text-base font-normal text-white lg:w-[80%]">
                Turut serta mengembangkan dan memasyarakatkan pentingnya
                Pendidikan dan Kebudayaan dalam kehidupan.
              </p>
            </div>
            <div className=" flex-auto lg:py-0 py-10 w-8/12">
              <Image
                src={"/assets/images/enlightment.svg"}
                alt="Develop Image"
                width={80}
                height={80}
                className=" w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]"
              />
              <h3 className=" font-bold text-base lg:text-2xl  text-left text-white py-3">
                {" "}
                Mencerdaskan
              </h3>
              <p className=" text-sm lg:text-base font-normal text-white lg:w-[80%]">
                Membangun kaum cendikia yang memiliki integritas, kepribadian,
                humanis serta kepedulian sosial.
              </p>
            </div>
            <div className=" flex-auto w-8/12">
              <Image
                src={"/assets/images/unite.svg"}
                alt="Develop Image"
                width={80}
                height={80}
                className=" w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]"
              />
              <h3 className=" font-bold text-base lg:text-2xl text-left text-white py-3">
                {" "}
                Menyatukan
              </h3>
              <p className=" text-sm lg:text-base font-normal text-white lg:w-[100%]">
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
