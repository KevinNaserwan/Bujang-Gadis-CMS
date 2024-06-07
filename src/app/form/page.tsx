"use client";

import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import { format } from "date-fns";
import { id } from "date-fns/locale/id";

export default function Form() {
  const slideRef = useRef(null);

  const handleGeneratePdf = () => {
    const opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(slideRef.current).set(opt).save();
  };

  const data = {
    nama_lengkap: "Kevin Putrayudha Naserwan",
    tanggal_lahir: "2024-04-30T07:00:00+07:00",
    jenis_kelamin: "L",
    nim: "09021282126083",
    fakultas: "sdfsdf",
    jurusan: "sdfsdf",
    angkatan: "2021",
    hobi: "sddsf",
    alamat: "sdfsdf",
  };

  const formattedDate = format(new Date(data.tanggal_lahir), "dd MMMM yyyy", {
    locale: id,
  });

  return (
    <div>
      <div ref={slideRef}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          {/* <img
            src="path/to/kop-surat-logo.png"
            alt="Kop Surat"
            style={{ maxWidth: "100%" }}
          /> */}
          <h1>Kop Surat</h1>
        </div>
        <h1 className="py-3">Surat Keterangan</h1>
        <p>Nama Lengkap: {data.nama_lengkap}</p>
        <p>Tanggal Lahir: {formattedDate}</p>
        <p>Jenis Kelamin: {data.jenis_kelamin}</p>
        <p>NIM: {data.nim}</p>
        <p>Fakultas: {data.fakultas}</p>
        <p>Jurusan: {data.jurusan}</p>
        <p>Angkatan: {data.angkatan}</p>
        <p>Hobi: {data.hobi}</p>
        <p>Alamat: {data.alamat}</p>
      </div>
      <button onClick={handleGeneratePdf}>Generate PDF</button>
    </div>
  );
}
