import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import dotenv from "dotenv";

interface User {
  username: string;
  user_id: string;
}

export default function FormUpload() {
  dotenv.config();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [username, setUsername] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [sertifikatFile, setSertifikatFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [draggingOver, setDraggingOver] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (email && token) {
      axios
        .get(`${apiUrl}/api/v1/user/${email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const { username, id } = response.data.value;
          setUsername(username);
          setUserId(id.toString());
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const { getRootProps: getRootPropsCV, getInputProps: getInputPropsCV } =
    useDropzone({
      accept: { "application/pdf": [".pdf"] },
      maxSize: 5 * 1024 * 1024,
      onDrop: (acceptedFiles) => {
        setCvFile(acceptedFiles[0] || null);
        setDraggingOver("");
      },
      onDragEnter: () => setDraggingOver("cv"),
      onDragLeave: () => setDraggingOver(""),
    });

  const { getRootProps: getRootPropsFoto, getInputProps: getInputPropsFoto } =
    useDropzone({
      accept: { "image/png": [".png"], "image/jpeg": [".jpeg", ".jpg"] },
      maxSize: 5 * 1024 * 1024,
      onDrop: (acceptedFiles) => {
        setFotoFile(acceptedFiles[0] || null);
        setDraggingOver("");
      },
      onDragEnter: () => setDraggingOver("foto"),
      onDragLeave: () => setDraggingOver(""),
    });

  const {
    getRootProps: getRootPropsSertifikat,
    getInputProps: getInputPropsSertifikat,
  } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxSize: 5 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      setSertifikatFile(acceptedFiles[0] || null);
      setDraggingOver("");
    },
    onDragEnter: () => setDraggingOver("sertifikat"),
    onDragLeave: () => setDraggingOver(""),
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setIsModalOpen(false);
    setTimeout(async () => {
      const token = localStorage.getItem("token");
      if (!username || !userId || !token) {
        alert("Username, User ID or token is not available.");
        return;
      }

      try {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("user_id", userId);
        if (cvFile) {
          formData.append("cv", cvFile);
        }
        if (fotoFile) {
          formData.append("foto", fotoFile);
        }
        if (sertifikatFile) {
          formData.append("sertifikat", sertifikatFile);
        }

        await axios.post(`${apiUrl}/api/v1/user-file/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error("Error uploading files:", error);
      } finally {
        setIsLoading(false);
        window.location.reload();
      }
    }, 400);
  };

  const handleFileRemove = (fileType: string) => {
    if (fileType === "cv") setCvFile(null);
    if (fileType === "foto") setFotoFile(null);
    if (fileType === "sertifikat") setSertifikatFile(null);
  };

  const renderDropzone = (
    getRootProps: any,
    getInputProps: any,
    file: File | null,
    fileType: string,
    acceptTypes: string,
    description: string
  ) => (
    <div className="flex lg:justify-center relative mt-3">
      <div
        {...getRootProps()}
        className={`border-dashed border-2 ${
          draggingOver === fileType
            ? "border-blue-500 bg-slate-100 opacity-100"
            : "border-gray-400 bg-white bg-opacity-100"
        } rounded-lg w-[300px] h-[120px] lg:h-[200px] flex flex-col items-center justify-center cursor-pointer`}
      >
        <input {...getInputProps()} />
        {draggingOver === fileType && (
          <div className="absolute inset-0 flex items-center justify-center bg-green-100 bg-opacity-50 rounded-lg">
            <div className="bg-green-500 rounded-full p-4">
              <Image
                src="/assets/icon/add.svg"
                width={24}
                height={24}
                alt="add icon"
              />
            </div>
          </div>
        )}
        {file ? (
          <div className="flex flex-col items-center">
            <p className="text-black text-xs font-bold mt-2 px-5 text-center mb-2">
              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </p>
            <button
              className="bg-red-500 text-white text-sm px-4 py-1 rounded mt-2 relative z-20 hover:bg-red-700"
              onClick={(e) => {
                e.stopPropagation();
                handleFileRemove(fileType);
              }}
            >
              Remove
            </button>
          </div>
        ) : (
          <div
            className={`flex flex-col  items-center ${
              draggingOver === fileType ? "hidden" : "block"
            }`}
          >
            <Image
              src="/assets/icon/upload2.svg"
              width={40}
              height={40}
              alt="upload icon"
              className=" lg:block hidden"
            />
            <p className="text-black text-xs font-bold mt-2 lg:block hidden">
              Drag and Drop file
            </p>
            <p className="text-black text-xs font-bold lg:block hidden">or</p>
            <a className="bg-blue-color lg:block hidden text-white text-sm px-4 py-1 rounded mt-2 relative z-20 hover:bg-blue-500">
              Browse
            </a>
            <a className="bg-blue-color lg:hidden block text-white text-sm px-4 py-1 rounded mt-2 relative z-20 hover:bg-blue-500">
              Upload
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Files supported: {acceptTypes}
            </p>
            <p className="text-gray-500 text-sm">(Maximum size: 5MB)</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="lg:py-16 lg:pb-36 mb-12 relative">
      <h1 className="font-bold text-black text-xl text-center lg:block hidden">
        Upload File
      </h1>
      <div className="lg:mt-14 mt-6">
        <form onSubmit={handleSubmit}>
          <div className="lg:flex max-w-[300px] mx-auto justify-center gap-8 lg:pb-24 pb-12">
            <div>
              <h1 className="lg:font-bold text-black lg:text-xl text-lg font-normal">
                Curriculum Vitae
              </h1>
              {renderDropzone(
                getRootPropsCV,
                getInputPropsCV,
                cvFile,
                "cv",
                "Pdf",
                "Curriculum Vitae"
              )}
            </div>
            <div className=" py-7 lg:py-0">
              <h1 className="lg:font-bold text-black lg:text-xl text-lg font-normal">
                Foto
              </h1>
              {renderDropzone(
                getRootPropsFoto,
                getInputPropsFoto,
                fotoFile,
                "foto",
                "PNG, JPG, JPEG",
                "Foto"
              )}
            </div>
            <div>
              <h1 className="lg:font-bold text-black lg:text-xl text-lg font-normal">
                Sertifikat
              </h1>
              {renderDropzone(
                getRootPropsSertifikat,
                getInputPropsSertifikat,
                sertifikatFile,
                "sertifikat",
                "Pdf",
                "Sertifikat"
              )}
            </div>
          </div>
        </form>
        <button
          className="py-3 lg:absolute right-28 bottom-16 px-8 lg:mt-12 text-sm bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold lg:text-base text-white"
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
