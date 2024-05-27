import Image from "next/image";
import React, { useState, useEffect } from "react";

interface FormEntry {
  id: number;
  key: number;
}

export default function FormPendidikan() {
  const [forms, setForms] = useState<FormEntry[]>([{ id: 1, key: 1 }]);
  const [counter, setCounter] = useState(2);
  const [userId, setUserId] = useState("");
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
    setForms([...forms, { id: counter, key: counter }]);
    setCounter(counter + 1);
  };

  const handleRemoveForm = (id: number) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  const handleSubmit = async () => {
    // Konstruk payload data
    const formData = {
      pendidikan: forms.map((form) => ({
        user_id: userId,
        nama: (document.getElementById(`nama_${form.id}`) as HTMLInputElement)
          .value,
        jenjang: (
          document.getElementById(`jenjang_${form.id}`) as HTMLSelectElement
        ).value,
        tahun_masuk: (
          document.getElementById(`tahun_masuk_${form.id}`) as HTMLInputElement
        ).value,
        tahun_keluar: (
          document.getElementById(`tahun_keluar_${form.id}`) as HTMLInputElement
        ).value,
      })),
    };

    // Kirim permintaan POST ke API
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
    }
  };

  return (
    <div className="pt-14 pb-36 mb-12 relative">
      <h1 className="font-bold text-black text-xl text-center">
        Riwayat Pendidikan
      </h1>
      <div className="mt-10">
        <form>
          {forms.map((form, index) => (
            <div
              key={form.key}
              className="flex items-end justify-center gap-6 mb-4"
            >
              <div className="flex justify-center gap-6">
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
                      className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[250px]"
                    />
                  </label>
                </div>
                <div>
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
                        className="appearance-none rounded-lg border py-3 px-4 border-black text-black mt-1 w-[200px]"
                      >
                        <option defaultValue="">
                          Pilih Tingkat Pendidikan
                        </option>
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA">SMA</option>
                      </select>
                    </div>
                  </label>
                </div>
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
                      className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[200px]"
                    />
                  </label>
                </div>
                <div>
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
                      className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[200px]"
                    />
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
        className="py-3 absolute right-28 bottom-16 px-8 mt-12 text-sm bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold lg:text-base text-white"
        type="button"
        onClick={handleSubmit}
      >
        Kirim
      </button>
    </div>
  );
}
