import Image from "next/image";
import React, { useState, useEffect } from "react";
import dotenv from "dotenv";

interface FormEntry {
  id: number;
  key: number;
  nama: string;
  tingkat: string;
  tahun: string;
}

interface Errors {
  [key: string]: {
    nama?: string;
    tingkat?: string;
    tahun?: string;
  };
}

export default function FormPrestasi() {
  dotenv.config();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [forms, setForms] = useState<FormEntry[]>([
    { id: 1, key: 1, nama: "", tingkat: "", tahun: "" },
  ]);
  const [counter, setCounter] = useState(2);
  const [userId, setUserId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

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

  const handleAddForm = () => {
    setForms([
      ...forms,
      { id: counter, key: counter, nama: "", tingkat: "", tahun: "" },
    ]);
    setCounter(counter + 1);
  };

  const handleRemoveForm = (id: number) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  const handleInputChange = (
    id: number,
    field: keyof FormEntry,
    value: string
  ) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === id ? { ...form, [field]: value } : form
      )
    );
  };

  const handleOpenModal = () => {
    const validationErrors = validateForms();
    if (Object.keys(validationErrors).length === 0) {
      setIsModalOpen(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const validateForms = () => {
    const errors: Errors = {};
    forms.forEach((form) => {
      const formErrors: {
        nama?: string;
        tingkat?: string;
        tahun?: string;
      } = {};
      if (!form.nama) formErrors.nama = "Nama Sekolah is required";
      if (!form.tingkat) formErrors.tingkat = "Tingkat Pendidikan is required";
      if (!form.tahun) formErrors.tahun = "Tahun Masuk is required";
      if (isNaN(Number(form.tahun)))
        formErrors.tahun = "Tahun Keluar must be a number";
      if (Object.keys(formErrors).length > 0) {
        errors[form.id] = formErrors;
      }
    });
    return errors;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setIsModalOpen(false);

    setTimeout(async () => {
      // Konstruk payload data
      const formData = {
        prestasi: forms.map((form) => ({
          user_id: userId,
          nama: (document.getElementById(`nama_${form.id}`) as HTMLInputElement)
            .value,
          tingkat: (
            document.getElementById(`tingkat_${form.id}`) as HTMLSelectElement
          ).value,
          tahun: (
            document.getElementById(`tahun_${form.id}`) as HTMLInputElement
          ).value,
        })),
      };

      // Kirim permintaan POST ke API
      try {
        const response = await fetch(`${apiUrl}/api/v1/user-prestasi/upload`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          console.info("Data successfully submitted:", data.message);
        } else {
          console.error("Failed to submit data:", data.message);
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      } finally {
        setIsLoading(false);
        window.location.reload(); // Refresh the page to get the latest data
      }
    }, 400);
  };

  return (
    <div className="lg:pt-14 lg:pb-36 mb-12 relative">
      <h1 className="font-bold text-black text-xl text-center lg:block hidden">
        Prestasi
      </h1>
      <div className="lg:mt-10 mt-4">
        <form action="">
          {forms.map((form, index) => (
            <div
              key={form.key}
              className="lg:flex items-end justify-center gap-6  mb-4"
            >
              <div className="lg:flex justify-around gap-6">
                <div>
                  <label
                    htmlFor={`nama_${form.id}`}
                    className="font-medium text-sm"
                  >
                    Nama Prestasi
                    <br />
                    <input
                      type="text"
                      name={`nama_${form.id}`}
                      id={`nama_${form.id}`}
                      placeholder="Masukkan Nama Prestasi"
                      className="rounded-lg border py-3 px-4 border-black text-black mt-1 lg:w-[250px] w-[330px]"
                      value={form.nama}
                      onChange={(e) =>
                        handleInputChange(form.id, "nama", e.target.value)
                      }
                    />
                    {errors[form.id]?.nama && (
                      <p className="text-red-500 text-xs pt-2">
                        {errors[form.id]?.nama}
                      </p>
                    )}
                  </label>
                </div>
                <div className="py-3 lg:py-0">
                  <label
                    htmlFor={`tingkat_${form.id}`}
                    className="font-medium text-sm"
                  >
                    Tingkat Pendidikan
                    <br />
                    <div className="flex items-center gap-2">
                      <select
                        name={`tingkat_${form.id}`}
                        id={`tingkat_${form.id}`}
                        className="appearance-none rounded-lg border py-3 px-4 border-black text-black mt-1 w-[330px] lg:w-[200px]"
                        value={form.tingkat}
                        onChange={(e) =>
                          handleInputChange(form.id, "tingkat", e.target.value)
                        }
                      >
                        <option defaultValue="">Pilih Tingkat Prestasi</option>
                        <option value="Internasional">Internasional</option>
                        <option value="Nasional">Nasional</option>
                        <option value="Provinsi">Provinsi</option>
                        <option value="Kota">Kota</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    {errors[form.id]?.tingkat && (
                      <p className="text-red-500 text-xs pt-2">
                        {errors[form.id]?.tingkat}
                      </p>
                    )}
                  </label>
                </div>
                <div className=" pb-6">
                  <label
                    htmlFor={`tahun_${form.id}`}
                    className="font-medium text-sm"
                  >
                    Tahun
                    <br />
                    <input
                      type="text"
                      name={`tahun_${form.id}`}
                      id={`tahun_${form.id}`}
                      placeholder="Masukkan Tahun Prestasi"
                      className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[330px] lg:w-[200px]"
                      value={form.tahun}
                      onChange={(e) =>
                        handleInputChange(form.id, "tahun", e.target.value)
                      }
                    />
                    {errors[form.id]?.tahun && (
                      <p className="text-red-500 text-xs pt-2">
                        {errors[form.id]?.tahun}
                      </p>
                    )}
                  </label>
                </div>
              </div>
              <button
                type="button"
                className={`${
                  index === forms.length - 1 ? "bg-dark-color" : "bg-[#A60303]"
                } w-[50px] h-[50px] flex items-center justify-center rounded-lg ${
                  index === forms.length - 1
                    ? "hover:bg-blue-color"
                    : " hover:bg-red-400"
                }`}
                onClick={() =>
                  index === forms.length - 1
                    ? handleAddForm()
                    : handleRemoveForm(form.id)
                }
              >
                <Image
                  alt=""
                  src={`/assets/icon/${
                    index === forms.length - 1 ? "add" : "trash"
                  }.svg`}
                  width={24}
                  height={24}
                />
              </button>
            </div>
          ))}
        </form>
      </div>
      <button
        className="py-3 lg:absolute right-28 bottom-16 px-8 lg:mt-12 mt-6 text-sm bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold lg:text-base text-white"
        type="submit"
        onClick={handleOpenModal}
      >
        Kirim
      </button>
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
