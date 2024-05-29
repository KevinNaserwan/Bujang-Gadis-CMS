import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

interface User {
  username: string;
  user_id: string;
}

export default function FormUpload() {
  const [username, setUsername] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [sertifikatFile, setSertifikatFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [draggingOver, setDraggingOver] = useState<string>("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (email && token) {
      axios
        .get(`http://localhost:5000/api/v1/user/${email}`, {
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (!username || !userId || !token) {
      alert("Username, User ID or token is not available.");
      return;
    }

    setIsUploading(true);

    try {
      let cvFilename = "";
      let fotoFilename = "";
      let sertifikatFilename = "";

      const payload = {
        cv: cvFilename,
        sertifikat: sertifikatFilename,
        foto: fotoFilename,
        user_id: userId,
      };

      await axios.post(
        "http://localhost:5000/api/v1/user-file/upload",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Files uploaded successfully");
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Failed to upload files");
    } finally {
      setIsUploading(false);
    }
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
    <div className="flex justify-center relative mt-3">
      <div
        {...getRootProps()}
        className={`border-dashed border-2 ${
          draggingOver === fileType
            ? "border-blue-500 bg-slate-100 opacity-100"
            : "border-gray-400 bg-white bg-opacity-100"
        } rounded-lg w-[300px] h-[200px] flex flex-col items-center justify-center cursor-pointer`}
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
            />
            <p className="text-black text-xs font-bold mt-2">
              Drag and Drop file
            </p>
            <p className="text-black text-xs font-bold">or</p>
            <a className="bg-blue-color text-white text-sm px-4 py-1 rounded mt-2 relative z-20 hover:bg-blue-500">
              Browse
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
    <div className="py-16 pb-36 relative">
      <h1 className="font-bold text-black text-xl text-center">Upload File</h1>
      <div className="mt-14">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-8 pb-24">
            <div>
              <h1 className="font-bold text-black text-xl">Curriculum Vitae</h1>
              {renderDropzone(
                getRootPropsCV,
                getInputPropsCV,
                cvFile,
                "cv",
                "Pdf",
                "Curriculum Vitae"
              )}
            </div>
            <div>
              <h1 className="font-bold text-black text-xl">Foto</h1>
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
              <h1 className="font-bold text-black text-xl">Sertifikat</h1>
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
          <button
            className="py-3 absolute right-28 bottom-16 px-8 mt-12 text-sm bg-gradient-to-br hover:bg-none hover:bg-black from-secondary-color to-black rounded-lg font-semibold lg:text-base text-white"
            type="submit"
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Kirim"}
          </button>
        </form>
      </div>
    </div>
  );
}
