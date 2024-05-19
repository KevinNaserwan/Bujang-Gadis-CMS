import Form from "@/components/form";
import Image from "next/image";
import Link from "next/link";

export default function Daftar() {
  return (
    <main className="overflow-hidden lg:bg-none bg-login-hero-image-mobile bg-cover bg-center max-h-screen">
      <div className=" lg:flex lg:items-center overflow-hidden pt-[50%] pb-[50%] lg:mt-0 lg:py-0">
        <div className=" hidden lg:block">
          <Image
            src="/assets/images/login-image.webp"
            alt=""
            width={700}
            height={700}
            className=" max-h-screen "
          />
        </div>
        <div className=" bg-white/80 lg:max-w-full max-w-[320px] mx-auto lg:py-0 lg:px-0 py-5 px-8 rounded-[20px]">
          <div className=" lg:max-w-full max-w-[300px] mx-auto lg:mb-12 pb-5 lg:pb-0">
            <div className=" mx-auto">
              <Image
                src="/assets/icon/icon.svg"
                width={100}
                height={100}
                alt=""
                className=" mx-auto lg:m-0 lg:mx- lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]"
              />
              <div className=" h-[2px] bg-[#D9D9D9] lg:block hidden"></div>
              <div className=" mt-2 lg:mt-12">
                <h1 className=" lg:font-bold lg:text-4xl font-semibold text-2xl">
                  Masuk ke Akun Anda!
                </h1>
                <p className=" lg:font-medium lg:text-sm font-semibold text-xs text-[#414141] mt-1">
                  Selamat datang, silahkan masukkan email dan kata sandi Anda.
                </p>
              </div>
              <form action="" className=" = lg:my-12 my-5">
                <Form
                  htmlFor="email"
                  label="Email"
                  imageSrc="/assets/icon/mail.svg"
                  placeholder="Masukkan email Anda"
                  imageClassName="hidden"
                />
                <Form
                  htmlFor="password"
                  label="Password"
                  imageSrc="/assets/icon/password.svg"
                  placeholder="Masukkan password Anda"
                  imageClassName="mr-4 lg:w-[22px] lg:h-[22px] w-[17px] h-[17px]"
                />
                <div className=" flex justify-between items-center mb-5">
                  <div className=" flex gap-2">
                    <input
                      type="checkbox"
                      className=" checked:bg-blue-color"
                      id="remember"
                    />
                    <label
                      htmlFor="remember"
                      className=" text-xs font-normal text-[#979797]"
                    >
                      Ingatkan saya
                    </label>
                  </div>
                  <Link
                    href=""
                    className=" font-bold text-xs text-blue-color hover:underline"
                  >
                    Lupa Password?
                  </Link>
                </div>
                <button className=" w-full bg-blue-color rounded-lg hover:bg-dark-color">
                  <p className=" font-bold text-white text-sm py-3">Masuk</p>
                </button>
              </form>
              <div className=" h-[2px] bg-[#D9D9D9] lg:block hidden"></div>
              <div className=" flex lg:gap-4 gap-2 justify-center mt-3 items-center">
                <p className=" font-medium text-xs lg:text-sm">
                  Tidak Punya Akun?
                </p>
                <Link
                  href=""
                  className=" lg:font-medium font-bold text-sm text-blue-color"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
