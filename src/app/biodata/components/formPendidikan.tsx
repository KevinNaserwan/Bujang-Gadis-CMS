import Image from "next/image";
import React, { useState, useEffect } from "react";

interface FormEntry {
  id: number;
  key: number;
  nama: string;
  jenjang: string;
  tahun_masuk: string;
  tahun_keluar: string;
}

interface Errors {
  [key: string]: {
    nama?: string;
    jenjang?: string;
    tahun_masuk?: string;
    tahun_keluar?: string;
  };
}

export default function FormPendidikan() {
  const [forms, setForms] = useState<FormEntry[]>([
    { id: 1, key: 1, nama: "", jenjang: "", tahun_masuk: "", tahun_keluar: "" },
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

  const handleAddForm = () => {
    setForms([
      ...forms,
      {
        id: counter,
        key: counter,
        nama: "",
        jenjang: "",
        tahun_masuk: "",
        tahun_keluar: "",
      },
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
        jenjang?: string;
        tahun_masuk?: string;
        tahun_keluar?: string;
      } = {};
      if (!form.nama) formErrors.nama = "Nama Sekolah is required";
      if (!form.jenjang) formErrors.jenjang = "Tingkat Pendidikan is required";
      if (!form.tahun_masuk) formErrors.tahun_masuk = "Tahun Masuk is required";
      if (!form.tahun_keluar)
        formErrors.tahun_keluar = "Tahun Keluar is required";
      if (isNaN(Number(form.tahun_masuk)))
        formErrors.tahun_masuk = "Tahun Masuk must be a number";
      if (isNaN(Number(form.tahun_keluar)))
        formErrors.tahun_keluar = "Tahun Keluar must be a number";
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
      const formData = {
        pendidikan: forms.map((form) => ({
          user_id: userId,
          nama: form.nama,
          jenjang: form.jenjang,
          tahun_masuk: form.tahun_masuk,
          tahun_keluar: form.tahun_keluar,
        })),
      };

      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/user-pendidikan/upload",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(formData),
          }
        );

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
        window.location.reload();
      }
    }, 400);
  };

  return (
    <div className="lg:pt-14 lg:pb-36 mb-12 relative">
      <h1 className="font-bold text-black text-xl text-center lg:block hidden">
        Riwayat Pendidikan
      </h1>
      <div className="lg:mt-10 mt-4">
        <form>
          {forms.map((form, index) => (
            <div
              key={form.key}
              className="lg:flex items-end justify-center gap-6 mb-4"
            >
              <div className="lg:flex justify-center lg:gap-6">
                <div>
                  <label
                    htmlFor={`nama_${form.id}`}
                    className="font-medium text-sm"
                  >
                    Nama Sekolah
                    <br />
                    <input
                      type="text"
                      name={`nama_${form.id}`}
                      id={`nama_${form.id}`}
                      placeholder="Masukkan Nama Sekolah"
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
                <div className=" py-3 lg:py-0">
                  <label
                    htmlFor={`jenjang_${form.id}`}
                    className="font-medium text-sm"
                  >
                    Tingkat Pendidikan
                    <br />
                    <div className="flex items-center gap-2">
                      <select
                        name={`jenjang_${form.id}`}
                        id={`jenjang_${form.id}`}
                        className="appearance-none rounded-lg border py-3 px-4 border-black text-black mt-1 w-[330px] lg:w-[200px]"
                        value={form.jenjang}
                        onChange={(e) =>
                          handleInputChange(form.id, "jenjang", e.target.value)
                        }
                      >
                        <option value="">Pilih Tingkat Pendidikan</option>
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA">SMA</option>
                      </select>
                    </div>
                    {errors[form.id]?.jenjang && (
                      <p className="text-red-500 text-xs pt-2">
                        {errors[form.id]?.jenjang}
                      </p>
                    )}
                  </label>
                </div>
                <div className=" lg:gap-5 flex justify-between">
                  <div>
                    <label
                      htmlFor={`tahun_masuk_${form.id}`}
                      className="font-medium text-sm"
                    >
                      Tahun Masuk
                      <br />
                      <input
                        type="text"
                        name={`tahun_masuk_${form.id}`}
                        id={`tahun_masuk_${form.id}`}
                        placeholder="Masukkan Tahun Masuk"
                        className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[160px] lg:w-[200px]"
                        value={form.tahun_masuk}
                        onChange={(e) =>
                          handleInputChange(
                            form.id,
                            "tahun_masuk",
                            e.target.value
                          )
                        }
                      />
                      {errors[form.id]?.tahun_masuk && (
                        <p className="text-red-500 text-xs pt-2">
                          {errors[form.id]?.tahun_masuk}
                        </p>
                      )}
                    </label>
                  </div>
                  <div className="pb-6 lg:py-0">
                    <label
                      htmlFor={`tahun_keluar_${form.id}`}
                      className="font-medium text-sm"
                    >
                      Tahun Keluar
                      <br />
                      <input
                        type="text"
                        name={`tahun_keluar_${form.id}`}
                        id={`tahun_keluar_${form.id}`}
                        placeholder="Masukkan Tahun Keluar"
                        className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[160px] lg:w-[200px]"
                        value={form.tahun_keluar}
                        onChange={(e) =>
                          handleInputChange(
                            form.id,
                            "tahun_keluar",
                            e.target.value
                          )
                        }
                      />
                      {errors[form.id]?.tahun_keluar && (
                        <p className="text-red-500 text-xs pt-2">
                          {errors[form.id]?.tahun_keluar}
                        </p>
                      )}
                    </label>
                  </div>
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
        className="py-3 lg:absolute right-28 bottom-16 px-8 mt-12 text-sm bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold lg:text-base text-white"
        type="button"
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
