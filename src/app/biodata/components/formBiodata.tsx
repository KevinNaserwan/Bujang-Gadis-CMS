import React from "react";

export default function FormBiodata() {
  return (
    <div className=" py-16 pb-36 relative">
      <h1 className=" font-bold text-black text-xl text-center">Biodata</h1>
      <div className=" mt-10 ">
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
                <label htmlFor="jenis_kelamin" className="font-medium text-sm">
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
                <label htmlFor="tempat_lahir" className=" font-medium text-sm">
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
                <label htmlFor="jusuran" className=" font-medium text-sm">
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
                <label htmlFor="fakultas" className=" font-medium text-sm">
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
                <label htmlFor="angkatan" className=" font-medium text-sm">
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
  );
}
