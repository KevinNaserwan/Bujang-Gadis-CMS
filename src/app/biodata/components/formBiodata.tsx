import React, { useState, useEffect } from "react";
import dotenv from "dotenv";

interface FormData {
  nama_lengkap: string;
  nim: string;
  fakultas: string;
  jurusan: string;
  angkatan: string;
  hobi: string;
  jenis_kelamin: string;
  tanggal_lahir: string;
  alamat: string;
}

interface Errors {
  nama_lengkap?: string;
  nim?: string;
  fakultas?: string;
  jurusan?: string;
  angkatan?: string;
  hobi?: string;
  jenis_kelamin?: string;
  tanggal_lahir?: string;
  alamat?: string;
}

export default function FormBiodata() {
  dotenv.config();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nama_lengkap: "",
    nim: "",
    fakultas: "",
    jurusan: "",
    angkatan: "",
    hobi: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    alamat: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (email) {
      fetchUserId(email);
    }
  }, []);

  const fetchUserId = async (email: string) => {
    try {
      const response = await fetch(`${apiUrl}/api/v1/user/${email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setUserId(data.value.id.toString());
        console.info("Success get data:", data.message);
      } else {
        console.error("Failed to fetch user data:", data.message);
      }
    } catch (error) {
      console.error("An error occurred while fetching user data:", error);
    }
  };

  const handleOpenModal = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsModalOpen(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors: Errors = {};
    if (!formData.nama_lengkap)
      errors.nama_lengkap = "Nama Lengkap harus diisi";
    if (!formData.nim) errors.nim = "NIM harus diisi";
    else if (isNaN(Number(formData.nim))) errors.nim = "NIM harus berupa angka";
    if (!formData.fakultas) errors.fakultas = "Fakultas harus diisi";
    if (!formData.jurusan) errors.jurusan = "Jurusan harus diisi";
    if (!formData.angkatan) errors.angkatan = "Angkatan harus diisi";
    else if (isNaN(Number(formData.angkatan)))
      errors.angkatan = "Angkatan harus berupa angka";
    if (!formData.hobi) errors.hobi = "Hobi harus diisi";
    if (!formData.jenis_kelamin)
      errors.jenis_kelamin = "Jenis Kelamin harus diisi";
    if (!formData.tanggal_lahir)
      errors.tanggal_lahir = "Tanggal Lahir harus diisi";
    if (!formData.alamat) errors.alamat = "Alamat harus diisi";
    return errors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setIsModalOpen(false);

    setTimeout(async () => {
      if (!userId) {
        console.error("User ID not available");
        return;
      }

      // Convert date to the required format
      const formattedDate = new Date(formData.tanggal_lahir).toISOString();

      const payload = {
        ...formData,
        tanggal_lahir: formattedDate,
        user_id: userId,
      };

      try {
        const response = await fetch(`${apiUrl}/api/v1/user-data-diri/upload`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        if (response.ok) {
          console.info("Data successfully submitted:", data.message);
        } else {
          console.error("Failed to submit data:", data.message);
        }
      } catch (error) {
        console.error("An error occurred while submitting data:", error);
      } finally {
        setIsLoading(false);
        window.location.reload(); // Refresh the page to get the latest data
      }
    }, 400);
  };

  return (
    <div className="lg:py-16 lg:pb-36 pb-16 relative">
      <h1 className="font-bold text-black text-xl text-center lg:block hidden">
        Biodata
      </h1>
      <div className="lg:mt-10 mt-4">
        <form>
          <div className="lg:flex justify-around">
            <div>
              <div>
                <label htmlFor="nama_lengkap" className="font-medium text-sm">
                  Nama
                  <br />
                  <input
                    type="text"
                    name="nama_lengkap"
                    id="nama_lengkap"
                    placeholder="Masukkan Nama Lengkap"
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 lg:w-[400px] w-[330px]"
                    onChange={handleChange}
                  />
                  {errors.nama_lengkap && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.nama_lengkap}
                    </p>
                  )}
                </label>
              </div>
              <div className="mt-5">
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
                  onChange={handleChange}
                />
                <label htmlFor="laki-laki">Laki-laki</label>
                <input
                  type="radio"
                  name="jenis_kelamin"
                  id="perempuan"
                  value="P"
                  className="mr-2 ml-5"
                  onChange={handleChange}
                />
                <label htmlFor="perempuan">Perempuan</label>
                {errors.jenis_kelamin && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.jenis_kelamin}
                  </p>
                )}
              </div>
              <div className="mt-5">
                <label htmlFor="tanggal_lahir" className="font-medium text-sm">
                  Tanggal Lahir
                  <br />
                  <input
                    type="date"
                    name="tanggal_lahir"
                    id="tanggal_lahir"
                    placeholder="Masukkan Tanggal Lahir"
                    className="rounded-lg border py-3 px-4 border-black text-black mt-2 lg:w-[400px] w-[330px]"
                    onChange={handleChange}
                  />
                  {errors.tanggal_lahir && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.tanggal_lahir}
                    </p>
                  )}
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
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 lg:w-[400px] w-[330px]"
                    rows={2}
                    onChange={handleChange}
                  ></textarea>
                  {errors.hobi && (
                    <p className="text-red-500 text-xs mt-2">{errors.hobi}</p>
                  )}
                </label>
              </div>
              <div className="mt-5">
                <label htmlFor="alamat">
                  Alamat
                  <br />
                  <textarea
                    name="alamat"
                    id="alamat"
                    placeholder="Masukkan Alamat"
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 lg:w-[400px] w-[330px]"
                    rows={2}
                    onChange={handleChange}
                  ></textarea>
                  {errors.alamat && (
                    <p className="text-red-500 text-xs mt-2">{errors.alamat}</p>
                  )}
                </label>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="nim" className="font-medium text-sm">
                  NIM
                  <br />
                  <input
                    type="text"
                    name="nim"
                    id="nim"
                    placeholder="Masukkan NIM"
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 lg:w-[400px] w-[330px]"
                    onChange={handleChange}
                  />
                  {errors.nim && (
                    <p className="text-red-500 text-xs mt-2">{errors.nim}</p>
                  )}
                </label>
              </div>
              <div className="mt-5">
                <label htmlFor="jurusan" className="font-medium text-sm">
                  Jurusan
                  <br />
                  <input
                    type="text"
                    name="jurusan"
                    id="jurusan"
                    placeholder="Masukkan Jurusan"
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 lg:w-[400px] w-[330px]"
                    onChange={handleChange}
                  />
                  {errors.jurusan && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.jurusan}
                    </p>
                  )}
                </label>
              </div>
              <div className="mt-5">
                <label htmlFor="fakultas" className="font-medium text-sm">
                  Fakultas
                  <br />
                  <input
                    type="text"
                    name="fakultas"
                    id="fakultas"
                    placeholder="Masukkan Fakultas"
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 lg:w-[400px] w-[330px]"
                    onChange={handleChange}
                  />
                  {errors.fakultas && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.fakultas}
                    </p>
                  )}
                </label>
              </div>
              <div className="mt-5">
                <label htmlFor="angkatan" className="font-medium text-sm">
                  Angkatan
                  <br />
                  <input
                    type="text"
                    name="angkatan"
                    id="angkatan"
                    placeholder="Masukkan Angkatan"
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 lg:w-[400px] w-[330px]"
                    onChange={handleChange}
                  />
                  {errors.angkatan && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.angkatan}
                    </p>
                  )}
                </label>
              </div>
            </div>
          </div>
        </form>
        <button
          className="py-3 lg:absolute right-28 bottom-16 px-8 mt-12 text-sm bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold lg:text-base text-white"
          type="submit"
          onClick={handleOpenModal}
        >
          Kirim
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg lg:max-w-full max-w-[330px]">
            <h2 className="text-xl font-bold mb-4">Konfirmasi</h2>
            <p>
              Pastikan data yang Anda input sudah benar karena data tidak bisa
              diubah kembali.
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 mr-4 bg-red-700 hover:bg-red-400 text-white rounded"
                onClick={handleCloseModal}
              >
                Periksa Kembali
              </button>
              <button
                className="px-4 py-2 bg-blue-700 hover:bg-blue-400 text-white rounded"
                onClick={handleSubmit}
              >
                Lanjut
              </button>
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-color"></div>
        </div>
      )}
    </div>
  );
}
