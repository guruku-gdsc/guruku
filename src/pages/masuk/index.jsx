import { Button } from "@/components/common/button";
import { Navbar } from "@/components/common/layouts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Masuk() {
  const [selectedLogin, setSelectedLogin] = useState("guru"); // ["guru", "murid"]
  const [formData, setFormData] = useState({
    emailGuru: "",
    passwordGuru: "",
    emailMurid: "",
    passwordMurid: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Coming soon!");
  };

  return (
    <>
      <Navbar dark />
      <div className="flex items-center justify-center gap-24 my-12 px-36">
        <div className="flex flex-col items-center flex-1 gap-10">
          <Image
            src={`/img/masuk/${
              selectedLogin === "guru" ? "masuk-guru" : "masuk-murid"
            }.png`}
            alt=""
            width={592}
            height={668}
            quality={100}
          />
          <p className="w-1/2 text-lg font-medium text-center text-green1">
            {selectedLogin === "guru"
              ? "“Mari Menjadi Pendidik dan Mulai Menebarkan Ilmu”"
              : "“Kembangkan keingintahuanmu, gali pengetahuan baru, dan berikan yang terbaik dalam setiap proses belajarmu.”"}
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <h2 className="text-xl font-semibold">Masuk</h2>
          <div className="flex p-2 rounded-full bg-[#f5f5f5] gap-2 w-full ">
            <button
              className={`flex items-center justify-center w-full p-4 font-medium rounded-full transition ${
                selectedLogin === "guru"
                  ? "bg-white shadow-md text-black"
                  : "text-grey1"
              }`}
              onClick={() => setSelectedLogin("guru")}
            >
              Masuk sebagai guru
            </button>
            <button
              className={`flex items-center justify-center w-full p-4 font-medium rounded-full transition ${
                selectedLogin === "murid"
                  ? "bg-white shadow-md text-black"
                  : "text-grey1"
              }`}
              onClick={() => setSelectedLogin("murid")}
            >
              Masuk sebagai murid
            </button>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {selectedLogin === "guru" ? (
              <>
                <input
                  type="email"
                  name="emailGuru"
                  placeholder="Email"
                  onChange={handleInputChange}
                  className="px-6 py-5 bg-[#fafafa] rounded-lg outline-none transition focus:bg-[#f5f5f5]"
                />
                <input
                  type="password"
                  name="passwordGuru"
                  placeholder="Kata Sandi"
                  onChange={handleInputChange}
                  className="px-6 py-5 bg-[#fafafa] rounded-lg outline-none transition focus:bg-[#f5f5f5]"
                />
              </>
            ) : (
              <>
                <input
                  type="email"
                  name="emailMurid"
                  placeholder="Email"
                  onChange={handleInputChange}
                  className="px-6 py-5 bg-[#fafafa] rounded-lg outline-none transition focus:bg-[#f5f5f5]"
                />
                <input
                  type="password"
                  name="passwordMurid"
                  placeholder="Kata Sandi"
                  onChange={handleInputChange}
                  className="px-6 py-5 bg-[#fafafa] rounded-lg outline-none transition focus:bg-[#f5f5f5]"
                />
              </>
            )}
          </form>

          <div className="flex justify-between px-2">
            <div className="flex gap-2">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className="font-medium">
                Ingat saya
              </label>
            </div>
            <Link
              href="/lupa-sandi"
              className="font-medium text-green1 hover:underline"
            >
              Lupa sandi?
            </Link>
          </div>
          <Button onClick={handleSubmit}>Masuk</Button>
          <div className="flex justify-center gap-1 text-center">
            <p className="text-grey1">Belum punya akun?</p>
            <Link
              href="/daftar"
              className="font-medium text-green1 hover:underline"
            >
              Buat akun
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
