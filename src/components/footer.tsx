import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className=" container mx-auto pt-10 lg:pt-14">
        <div className=" flex flex-wrap items-start justify-between lg:gap-0 gap-11">
          <div className=" flex flex-wrap items-center justify-center gap-2">
            <Image
              src={"/assets/icon/icon.svg"}
              alt="icon bujang gadis"
              width={120}
              height={120}
              className=" w-[120px] h-[120px]"
            />
            <p className=" font-bold text-base text-black w-6/12">
              Bujang Gadis Teknik Universitas Sriwijaya
            </p>
          </div>
          <div className=" flex flex-wrap lg:gap-0 gap-6 justify-center lg:justify-between">
            <div className=" w-10/12 lg:w-2/12">
              <h3 className=" text-xl font-bold text-black">Tentang Kami</h3>
              <div className=" pt-4 flex flex-wrap lg:w-full w-4/12  gap-3">
                <div>
                  <a href="" className=" hover:underline">
                    Sejarah
                  </a>
                </div>
                <div>
                  <a href="" className=" hover:underline">
                    Visi & Misi
                  </a>
                </div>
                <div>
                  <a href="" className=" hover:underline">
                    Struktural
                  </a>
                </div>
                <div>
                  <a href="" className=" hover:underline">
                    Anggota
                  </a>
                </div>
                <div>
                  <a href="" className=" hover:underline">
                    Program Kerja
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-10/12 lg:w-2/12">
              <h3 className=" text-xl font-bold text-black">Vote</h3>
              <div className=" pt-4 flex lg:w-full w-4/12  flex-wrap gap-3">
                <div>
                  <a href="" className=" hover:underline">
                    Vote
                  </a>
                </div>
                <div>
                  <a href="" className=" hover:underline">
                    Beli Voucher
                  </a>
                </div>
                <div>
                  <a href="" className=" hover:underline">
                    Chart
                  </a>
                </div>
                <div>
                  <a href="" className=" hover:underline">
                    Tata Cara Vote
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-10/12 lg:w-3/12">
              <h3 className=" text-xl font-bold text-black">Kontak</h3>
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
        </div>
        <div className="h-[2px] bg-dark-color rounded-md mt-24"></div>
        <h1 className=" text-center py-8 text-base font-semibold">
          Copyright ©2024
          <span className=" text-secondary-color"> Meets.Indonesia</span>
        </h1>
      </div>
    </footer>
  );
}
