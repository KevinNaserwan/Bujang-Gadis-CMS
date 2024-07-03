import Image from "next/image";
import React from "react";

const MainTataCaraVote = () => {
  return (
    <div className="relative bg-dark-color overflow-hidden">
      <div className="lg:py-24 py-20 container xl:max-w-[1300px] lg:max-w-[1100px] mx-auto">
        <div className="absolute z-0 top-0 left-0">
          <Image
            src={"/assets/images/ellipse3.svg"}
            alt=""
            width={100}
            height={75}
          />
        </div>
        <div className="absolute z-0 bottom-0 -right-20">
          <Image
            src={"/assets/images/ellipse2.svg"}
            alt=""
            width={300}
            height={150}
          />
        </div>
        <h1 className="relative z-10 text-center text-4xl font-semibold text-white">
          Tutorial Vote BG Teknik Unsri Website
        </h1>
        <div className="px-24 pt-10 pb-20">
          <h3 className="font-normal text-2xl text-primary-color">
            Tutorial voting:
          </h3>
          <ol type="1" className="pt-5 text-white font-medium text-lg">
            <li>1. Pastikan sudah membeli voucher !</li>
            <li>
              2. Jika belum, beli voucher dengan memasukan data diri,
              selanjutnya pilih jenis voucher dan banyak voucher, terakhir
              lakukan pembayaran. Setelah berhasil kode voucher akan dikirim ke
              email pembeli.
            </li>
            <li>
              3. Masuk ke halaman vote, pilih peserta yang ingin di vote, klik
              tombol vote, masukan kode voucher dan masukan captcha, setelah
              berhasil akan ada konfirmasi message
            </li>
          </ol>
        </div>
        <div className="px-24 pb-20">
          <div className=" relative">
            <iframe
              className="w-full h-[600px] rounded-2xl border-white border relative z-10"
              src="https://www.youtube.com/embed/h-iQJHcWhAg?si=gSU5-73Ow4SfyX1H"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 rounded-md blur-md bg-white z-0"></div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default MainTataCaraVote;
