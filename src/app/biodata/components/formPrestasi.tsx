import Image from "next/image";
import React, { useState, useEffect } from "react";

interface FormEntry {
  id: number;
  key: number;
}

export default function FormPrestasi() {
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
      prestasi: forms.map((form) => ({
        user_id: userId,
        nama: (document.getElementById(`nama_${form.id}`) as HTMLInputElement)
          .value,
        tingkat: (
          document.getElementById(`tingkat_${form.id}`) as HTMLSelectElement
        ).value,
        tahun: (document.getElementById(`tahun_${form.id}`) as HTMLInputElement)
          .value,
      })),
    };

    // Kirim permintaan POST ke API
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/user-prestasi/upload",
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
      <h1 className="font-bold text-black text-xl text-center">Prestasi</h1>
      <div className="mt-10">
        <form action="">
          {forms.map((form, index) => (
            <div
              key={form.key}
              className="flex items-end justify-center gap-6  mb-4"
            >
              <div className="flex justify-around gap-6">
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
                      className="rounded-lg border py-3 px-4 border-black text-black mt-1 w-[250px]"
                    />
                  </label>
                </div>
                <div>
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
                        className="appearance-none rounded-lg border py-3 px-4 border-black text-black mt-1 w-[200px]"
                      >
                        <option defaultValue="">Pilih Tingkat Prestasi</option>
                        <option value="Internasional">Internasional</option>
                        <option value="Nasional">Nasional</option>
                        <option value="Provinsi">Provinsi</option>
                        <option value="Kota">Kota</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                  </label>
                </div>
                <div>
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
        type="submit"
        onClick={handleSubmit}
      >
        Kirim
      </button>
    </div>
  );
}
