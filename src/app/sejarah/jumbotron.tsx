import Image from "next/image";

export default function SejarahJumbotron() {
  return (
    <section className=" pb-14 lg:pb-24">
      <div className=" mx-auto pt-4 lg:pt-12 lg:pb-12 flex flex-wrap lg:block justify-center lg:bg-sejarah-hero-image-web bg-cover">
        <div>
          <h1 className=" text-center text-2xl lg:text-4xl font-bold leading-normal">
            SEJARAH
          </h1>
          <h1 className=" text-center text-2xl lg:text-4xl lg:py-3 font-bold text-secondary-color">
            Bujang Gadis Teknik
          </h1>
        </div>
        <h2 className=" text-center pt-1 lg:text-3xl pb-6 font-bold text-lg ">
          UNIVERSITAS SRIWIJAYA
        </h2>
      </div>
      <div className=" relative container mx-auto bg-white/40 lg:bg-transparent">
        <div className=" max-w-[300px] lg:max-w-[1200px] lg:gap-12 mx-auto lg:pt-24 lg:items-center lg:flex lg:flex-row-reverse">
          <Image
            src="/assets/images/history.svg"
            alt="History Image"
            width={560}
            height={340}
            className=" lg:w-[500px] lg:h-[340px] w-[330px] h-[192px] mt-6"
          />
          <div>
            <div className=" text-left pt-7">
              <h3 className=" font-bold text-xl text-primary-color lg:text-4xl">
                Sejarah
              </h3>
              <h4 className=" font-semibold text-black text-xs lg:text-lg pt-2 pb-1">
                Pendiri : Chandra Saputra
              </h4>
              <h5 className=" font-normal text-xs lg:text-lg text-[#7F5B00] italic">
                Dibentuk pada tanggal 12 September 2009
              </h5>
            </div>
            <p className=" text-justify pt-2 text-xs lg:text-base">
              Chandra Saputra yang saat ini adalah ketua Yayasan Bujang Gadis
              POLSRI yang dulunya tergabung dalam organisasi Badan Eksekutif
              Mahasiswa (BEM) menjabat sebagai Mentri Kreasi pada tahun 2009.
              Awalnya Beliau membuat suatu Program Kerja BGPOLSRI melihat
              keseluruhan mahasiswa dan mahasiswi yang mempunyai banyak sekali
              bakat, prestasi & potensi yang belum ada wadah-nya untuk
              disalurkan. Untuk menjadi bagian dari keluarga Ikatan Bujang Gadis
              Politeknik Negeri Sriwijaya yang menjadi icon Duta Pendidikan dan
              Kebudayaan di Kampus POLSRI bukanlah hal yang mudah.
            </p>
            <br></br>
            <p className=" text-justify text-xs lg:text-base">
              Siapapun wajib untuk mengikuti tahapan demi tahapan tes yang
              menguras pemikiran dan tenaga. Perjuangan tidak berhenti hanya
              sampai pada Grand Final saja, Sebagai Duta Pendidikan dan
              Kebudayaan, para anggota ikatan haruslah memikirkan cara memajukan
              Politeknik Negeri Sriwijaya kedepanya serta mempromosikan dan
              menyebarkan nama baik Politeknik Negeri Sriwijaya hingga keujung
              daerah, terbukti dengan diadakanya beberapa Program Kerja yang
              telah di buat oleh mereka yang sangat bermakna bukan hanya oleh
              mahasiswa serta keluarga besar Politeknik Negeri Sriwijaya saja
              melainkan hingga masyarakat luas kota Plembang khususnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
