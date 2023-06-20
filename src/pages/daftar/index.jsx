import { Button } from "@/components/common/button";
import { Navbar } from "@/components/common/layouts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Daftar() {
  const [selectedRegister, setSelectedRegister] = useState("guru"); // ["guru", "murid"]
  const [formData, setFormData] = useState({
    emailGuru: "",
    passwordGuru: "",
    namaGuru: "",
    jenisKelaminGuru: "",
    tipeGuru: "",
    emailMurid: "",
    passwordMurid: "",
    namaMurid: "",
    tingkatPendidikanMurid: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar dark />
      <div className="flex items-center justify-center gap-24 my-12 px-36">
        <div className="flex flex-col items-center flex-1 gap-10">
          <Image
            src={`/img/daftar/${
              selectedRegister === "guru" ? "daftar-guru" : "daftar-murid"
            }.png`}
            alt=""
            width={592}
            height={668}
            quality={100}
          />
          <p className="w-1/2 text-lg font-medium text-center text-green1">
            {selectedRegister === "guru"
              ? "“Mari Menjadi Pendidik dan Mulai Menebarkan Ilmu”"
              : "“Kembangkan keingintahuanmu, gali pengetahuan baru, dan berikan yang terbaik dalam setiap proses belajarmu.”"}
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <h2 className="text-xl font-semibold">Daftar</h2>
          <div className="flex p-2 rounded-full bg-[#f5f5f5] gap-2 w-full ">
            <button
              className={`flex items-center justify-center w-full p-4 font-medium rounded-full transition ${
                selectedRegister === "guru"
                  ? "bg-white shadow-md text-black"
                  : "text-grey1"
              }`}
              onClick={() => setSelectedRegister("guru")}
            >
              Daftar sebagai guru
            </button>
            <button
              className={`flex items-center justify-center w-full p-4 font-medium rounded-full transition ${
                selectedRegister === "murid"
                  ? "bg-white shadow-md text-black"
                  : "text-grey1"
              }`}
              onClick={() => setSelectedRegister("murid")}
            >
              Daftar sebagai murid
            </button>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {selectedRegister === "guru" ? (
              <>
                <input
                  type="email"
                  name="emailGuru"
                  placeholder="Email"
                  onChange={handleInputChange}
                  className="px-6 py-5 bg-[#fafafa] rounded-lg outline-none transition focus:bg-[#f5f5f5]"
                />
                <input
                  type="text"
                  name="namaGuru"
                  placeholder="Nama Lengkap"
                  onChange={handleInputChange}
                  className="px-6 py-5 bg-[#fafafa] rounded-lg outline-none transition focus:bg-[#f5f5f5]"
                />

                <select
                  defaultValue={"Jenis Kelamin"}
                  name="jenisKelaminGuru"
                  onChange={handleInputChange}
                  className="px-6 py-5 bg-[#fafafa] rounded-lg outline-none transition focus:bg-[#f5f5f5] border-r-transparent border-r-[24px]"
                >
                  <option value="Jenis Kelamin" disabled>
                    Jenis Kelamin
                  </option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>

                <select
                  defaultValue={"Tipe Guru"}
                  className="px-6 py-5 bg-[#fafafa] rounded-lg outline-none transition focus:bg-[#f5f5f5] border-r-transparent border-r-[24px]"
                >
                  <option value="Tipe Guru" disabled>
                    Tipe Guru
                  </option>
                  <option value="umum">Guru Umum</option>
                  <option value="spesialis">Guru Spesialis Disabilitas</option>
                </select>

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
                  type="text"
                  placeholder="Nama Lengkap"
                  className="px-6 py-5 bg-[#fafafa] rounded-lg outline-none transition focus:bg-[#f5f5f5]"
                />
                <select
                  defaultValue={"Tingkat Pendidikan"}
                  className="px-6 py-5 bg-[#fafafa] rounded-lg outline-none transition focus:bg-[#f5f5f5] border-r-transparent border-r-[24px]"
                >
                  <option value="Tingkat Pendidikan" disabled>
                    Tingkat Pendidikan
                  </option>
                  <option value="sd">SD</option>
                  <option value="smp">SMP</option>
                  <option value="sma">SMA</option>
                  <option value="mahasiswa">Mahasiswa</option>
                </select>

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

          <Button>Daftar</Button>
          <div className="flex justify-center gap-1 text-center">
            <p className="text-grey1">Sudah punya akun?</p>
            <Link
              href="/masuk"
              className="font-medium text-green1 hover:underline"
            >
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
