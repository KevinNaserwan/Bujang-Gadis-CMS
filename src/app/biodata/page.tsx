import Image from "next/image";
import Link from "next/link";

export default function Biodata() {
  return (
    <main>
      <div className=" bg-dark-color relative py-12">
        <div className=" lg:max-w-[1300px] mx-auto">
          <Link href="/" className=" lg:flex gap-5">
            <Image src="/assets/icon/back.svg" width={30} height={22} alt="" />
            <h1 className=" font-bold text-[24px] text-white">Isi Data Diri</h1>
          </Link>
          <div className=" lg:max-w-[1200px] mx-auto bg-white mt-14 rounded-xl">
            <div className=" flex gap-2 justify-center py-11">
              <div>
                <div className=" flex items-center gap-2">
                  <div className=" w-[60px] h-[60px] bg-white border border-[#004C85] flex items-center justify-center rounded-full">
                    <div className=" w-[50px] h-[50px] bg-[#004C85] rounded-full flex items-center justify-center">
                      <Image
                        src="/assets/icon/datadiri.svg"
                        width={23}
                        height={23}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" w-[200px] h-[10px] bg-dark-color rounded-3xl"></div>
                </div>
                <div className=" mt-2">
                  <p className=" font-bold text-xs text-[#979797]">Step 1</p>
                  <h1 className=" font-bold text-xl text-black py-1">
                    Biodata
                  </h1>
                  <div className="bg-[#EAE8FE] rounded-3xl max-w-[95px]">
                    <p className=" font-semibold text-xs py-1 px-4">
                      In Progress
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className=" flex items-center gap-2">
                  <div className=" w-[60px] h-[60px] bg-white border border-[#004C85] flex items-center justify-center rounded-full">
                    <div className=" w-[50px] h-[50px] bg-[#004C85] rounded-full flex items-center justify-center">
                      <Image
                        src="/assets/icon/datadiri.svg"
                        width={23}
                        height={23}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" w-[200px] h-[10px] bg-dark-color rounded-3xl"></div>
                </div>
                <div className=" mt-2">
                  <p className=" font-bold text-xs text-[#979797]">Step 1</p>
                  <h1 className=" font-bold text-xl text-black py-1">
                    Biodata
                  </h1>
                  <div className="bg-[#EAE8FE] rounded-3xl max-w-[95px]">
                    <p className=" font-semibold text-xs py-1 px-4">
                      In Progress
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className=" flex items-center gap-2">
                  <div className=" w-[60px] h-[60px] bg-white border border-[#004C85] flex items-center justify-center rounded-full">
                    <div className=" w-[50px] h-[50px] bg-[#004C85] rounded-full flex items-center justify-center">
                      <Image
                        src="/assets/icon/datadiri.svg"
                        width={23}
                        height={23}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" w-[200px] h-[10px] bg-dark-color rounded-3xl"></div>
                </div>
                <div className=" mt-2">
                  <p className=" font-bold text-xs text-[#979797]">Step 1</p>
                  <h1 className=" font-bold text-xl text-black py-1">
                    Biodata
                  </h1>
                  <div className="bg-[#EAE8FE] rounded-3xl max-w-[95px]">
                    <p className=" font-semibold text-xs py-1 px-4">
                      In Progress
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className=" flex items-center gap-2">
                  <div className=" w-[60px] h-[60px] bg-white border border-[#004C85] flex items-center justify-center rounded-full">
                    <div className=" w-[50px] h-[50px] bg-[#004C85] rounded-full flex items-center justify-center">
                      <Image
                        src="/assets/icon/datadiri.svg"
                        width={23}
                        height={23}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className=" mt-2">
                  <p className=" font-bold text-xs text-[#979797]">Step 1</p>
                  <h1 className=" font-bold text-xl text-black py-1">
                    Biodata
                  </h1>
                  <div className="bg-[#EAE8FE] rounded-3xl max-w-[95px]">
                    <p className=" font-semibold text-xs py-1 px-4">
                      In Progress
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full h-[2px] bg-[#D9D9D9]"></div>
            <div className=" py-16 pb-36 relative">
              <h1 className=" font-bold text-black text-xl text-center">
                Biodata
              </h1>
              <div className=" mt-14 ">
                <form action="">
                  <div className=" flex justify-around">
                    <div>
                      <div>
                        <label htmlFor="name" className=" font-medium text-sm">
                          Nama
                          <br />
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Masukkan Nama Lengkap"
                            className=" rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                          />
                        </label>
                      </div>
                      <div className=" mt-5">
                        <label
                          htmlFor="jenis_kelamin"
                          className="font-medium text-sm"
                        >
                          Jenis Kelamin
                        </label>
                        <br />
                        <input
                          type="radio"
                          name="jenis_kelamin"
                          id="laki-laki"
                          value="L"
                          className="mr-2 mt-3"
                        />
                        <label htmlFor="laki-laki">Laki-laki</label>
                        <input
                          type="radio"
                          name="jenis_kelamin"
                          id="perempuan"
                          value="P"
                          className=" mr-2 ml-5"
                        />
                        <label htmlFor="perempuan">Perempuan</label>
                      </div>
                      <div className=" mt-5">
                        <label
                          htmlFor="tempat_lahir"
                          className=" font-medium text-sm"
                        >
                          Tempat Lahir
                          <br />
                          <input
                            type="date"
                            name="tempat_lahir"
                            id="tempat_lahir"
                            placeholder="Masukkan Tempat Lahir"
                            className=" rounded-lg border py-3 px-4 border-black text-black mt-2 w-[400px]"
                          />
                        </label>
                      </div>
                      <div className="mt-5">
                        <label htmlFor="hobi">
                          Hobi
                          <br />
                          <textarea
                            name="hobi"
                            id="hobi"
                            placeholder="Masukkan Hobi"
                            className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                            rows={2}
                          ></textarea>
                        </label>
                      </div>
                      <div className="mt-5">
                        <label htmlFor="alamat">
                          Alamat
                          <br />
                          <textarea
                            name="alamat"
                            id="alamat"
                            placeholder="Masukkan alamat"
                            className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                            rows={2}
                          ></textarea>
                        </label>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="nim" className=" font-medium text-sm">
                          NIM
                          <br />
                          <input
                            type="text"
                            name="nim"
                            id="nim"
                            placeholder="Masukkan NIM"
                            className=" rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                          />
                        </label>
                      </div>
                      <div className=" mt-5">
                        <label
                          htmlFor="jusuran"
                          className=" font-medium text-sm"
                        >
                          Jurusan
                          <br />
                          <input
                            type="text"
                            name="jurusan"
                            id="jurusan"
                            placeholder="Masukkan Jurusan"
                            className=" rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                          />
                        </label>
                      </div>
                      <div className=" mt-5">
                        <label
                          htmlFor="fakultas"
                          className=" font-medium text-sm"
                        >
                          Fakultas
                          <br />
                          <input
                            type="text"
                            name="fakultas"
                            id="fakultas"
                            placeholder="Masukkan fakultas"
                            className=" rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                          />
                        </label>
                      </div>
                      <div className=" mt-5">
                        <label
                          htmlFor="angkatan"
                          className=" font-medium text-sm"
                        >
                          Angkatan
                          <br />
                          <input
                            type="text"
                            name="angkatan"
                            id="angkatan"
                            placeholder="Masukkan angkatan"
                            className=" rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <button
                className="py-3 absolute right-28 bottom-16 px-8 mt-12 text-sm bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold lg:text-base text-white"
                type="submit"
              >
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
