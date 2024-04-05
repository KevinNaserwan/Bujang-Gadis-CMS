import Image from "next/image";

export default function Term() {
  return (
    <div className=" relative bg-dark-color overflow-hidden">
      <div className="py-48 container mx-auto">
        <div className=" absolute z-0 top-0 left-0">
          <Image
            src={"/assets/images/ellipse3.svg"}
            alt=""
            width={300}
            height={150}
          />
        </div>
        <div className=" absolute z-0 bottom-0 -right-20">
          <Image
            src={"/assets/images/ellipse2.svg"}
            alt=""
            width={600}
            height={300}
          />
        </div>
        <h1 className="font-bold text-3xl text-white text-center">
          SYARAT DAN KETENTUAN
        </h1>
        <div className=" relative z-10 flex flex-wrap mt-20 justify-around">
          <div className=" w-5/12">
            <h3 className=" font-bold text-primary-color text-2xl text-left">
              Persyaratan Peserta
            </h3>
            <ol
              style={{ listStyleType: "decimal" }}
              className=" text-lg font-semibold text-white pt-9"
            >
              <li>Melampirkan formulir pendaftaran</li>
              <li>Melampirkan Curriculum Vitae</li>
              <li>
                Melampirkan pas foto berwarna ukuran 3x4 sebanyak 3 lembar
              </li>
              <li>
                Melampirkan fotokopi Kartu Tanda Mahasiswa (KTM) atau Kartu
                Tanda Mahasiswa (KTM) sementara untuk mahasiswa angkatan 2022
              </li>
              <li>Melampirkan fotokopi Kartu Hasil Studi (KHS)</li>
              <li>Tinggi badan minimal :</li>
              <ol>
                <li>a. Bujang : 160 cm</li>
                <li>b. Gadis : 155 cm</li>
              </ol>
              <li>
                Peserta wajib memiliki spesialisasi dalam bidang tertentu
                seperti, Public Speaking, Karya Tulis Ilmiah, Olimpiade, atau
                dalam cabang Seni dan Olahraga.
              </li>
              <li>Melampirkan riwayat prestasi, seperti :</li>
              <ol>
                <li> 1) Prestasi akademik</li>
                <ol>
                  <li>a. Memiliki indeks prestasi di atas 3.00</li>
                  <li>
                    b. Melampirkan sertifikat perlombaan di tingkat Nasional,
                    Provinsi, atau Kota seperti olimpiade, O2SN, dan sebagainya
                  </li>
                </ol>
                <li> 2) Prestasi non akademik</li>
                <ol>
                  <li>
                    a. Melampirkan sertifikat perlombaan di tingkat Nasional,
                    Provinsi, atau Kota baik di bidang seni, olahraga,
                    information technology, dan sebagainya
                  </li>
                </ol>
              </ol>
              <li>Untuk lebih jelas dapat dicek di Instagram @bgtunsri</li>
            </ol>
          </div>
          <div className=" w-5/12">
            <h3 className=" relative z-10 font-bold text-primary-color text-2xl text-left">
              Tata Cara Pendaftaran
            </h3>
            <ol
              style={{ listStyleType: "decimal" }}
              className=" text-lg font-semibold text-white pt-9"
            >
              <li>
                Calon peserta harus meregistrasikan diri melalui situs web
                Bujang Gadis Teknik Unsri atau melalui Stand Pendaftaran yang
                disediakan di Sekretariat BEM FT Regional Palembang Fakultas
                Teknik Universitas Sriwijaya
              </li>
              <li>
                Bagi Peserta yang melakukan Pendaftaran melalui website,
                formulir pendaftaran dapat dipindai dan dikumpulkan bersama
                persyaratan lainnya pada website dan wajib mengumpulkan hardfile
                persyaratan kepada panitia dalam waktu yang nanti ditentukan
                saat Technical Meeting
              </li>
              <li>
                Mengumpulkan formulir pendaftaran beserta dengan dokumen
                persyaratan dan administrasi menggunakan :
              </li>
              <ol>
                <li>a. Map buffalo biru (Bujang)</li>
                <li>b. Map buffalo merah (Gadis)</li>
              </ol>
              <li>
                Peserta yang telah mendaftar diwajibkan mengumpulkan berkas pada
                :
              </li>
              <ol>
                <li>
                  a. Sekretariat BEM FT Regional Palembang Fakultas Teknik
                  Universitas Sriwijaya
                </li>
                <li>b. Waktu : 10.00- 17.00</li>
              </ol>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
