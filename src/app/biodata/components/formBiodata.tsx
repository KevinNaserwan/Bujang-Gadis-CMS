import React, { useState, useEffect } from "react";

export default function FormBiodata() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
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

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (email) {
      fetchUserId(email);
    }
  }, []);

  const fetchUserId = async (email: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/user/${email}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

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
      const response = await fetch(
        "http://localhost:5000/api/v1/user-data-diri/upload",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.info("Data successfully submitted:", data.message);
      } else {
        console.error("Failed to submit data:", data.message);
      }
    } catch (error) {
      console.error("An error occurred while submitting data:", error);
    }
  };

  return (
    <div className="py-16 pb-36 relative">
      <h1 className="font-bold text-black text-xl text-center">Biodata</h1>
      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-around">
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
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                    onChange={handleChange}
                  />
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
                    className="rounded-lg border py-3 px-4 border-black text-black mt-2 w-[400px]"
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    placeholder="Masukkan Alamat"
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                    rows={2}
                    onChange={handleChange}
                  ></textarea>
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
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                    onChange={handleChange}
                  />
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
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                    onChange={handleChange}
                  />
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
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                    onChange={handleChange}
                  />
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
                    className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[400px]"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            className="py-3 absolute right-28 bottom-16 px-8 mt-12 text-sm bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold lg:text-base text-white"
            type="submit"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
