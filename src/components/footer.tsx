import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className=" container mx-auto pt-14">
        <div className=" flex flex-wrap items-start">
          <div className=" flex flex-wrap items-center gap-2">
            <Image
              src={"/assets/icon/icon.svg"}
              alt="icon bujang gadis"
              width={120}
              height={120}
            />
            <p className=" font-bold text-base text-black w-6/12">
              Bujang Gadis Teknik Universitas Sriwijaya
            </p>
          </div>
          <div>
            <h3 className=" text-2xl font-bold text-black">Tentang Kami</h3>
            <div className=" pt-4 flex flex-wrap w-4/12 gap-3">
              <div>
                <a href="">Sejarah</a>
              </div>
              <div>
                <a href="">Visi & Misi</a>
              </div>
              <div>
                <a href="">Struktural</a>
              </div>
              <div>
                <a href="">Anggota</a>
              </div>
              <div>
                <a href="">Program Kerja</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className=" text-2xl font-bold text-black">Vote</h3>
            <div className=" pt-4 flex flex-wrap w-5/12 gap-3">
              <div>
                <a href="">Vote</a>
              </div>
              <div>
                <a href="">Beli Voucher</a>
              </div>
              <div>
                <a href="">Chart</a>
              </div>
              <div>
                <a href="">Tata Cara Vote</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className=" text-2xl font-bold text-black">Kontak</h3>
            <div className=" pt-4 flex flex-wrap gap-3 items-center">
              <div>
                <a href="">
                  <Image
                    src={"/assets/icon/instagram.svg"}
                    alt="instagram"
                    width={35}
                    height={35}
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <Image
                    src={"/assets/icon/email.svg"}
                    alt="email"
                    width={37}
                    height={28}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-dark-color rounded-md mt-32"></div>
        <h1 className=" text-center py-8 text-base font-semibold">Copyright ©2024<span className=" text-secondary-color"> Meets.Indonesia</span></h1>
      </div>
    </footer>
  );
}
