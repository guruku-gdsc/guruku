import { Navbar } from "@/components/common/layouts";
import Image from "next/image";

const labelList = ["Bahasa Jepang", "Guru Umum", "Sp Disabilitas"];

export default function Guru() {
  return (
    <>
      <div className="bg-green1">
        <Navbar />
        <div className="wrapper">
          <div className="flex gap-10 pt-24 pb-10">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex gap-3">
                {labelList.map((label) => (
                  <div
                    key={label}
                    className="text-sm font-medium text-white bg-[#1B6047] rounded-3xl py-2 px-3"
                  >
                    {label}
                  </div>
                ))}
              </div>
              <p className="text-[40px] font-semibold text-white">
                Lulusan ITB yang telah 8 tahun belajar Bahasa Jepang sebagai
                hobi hingga meraih Sertifikasi internasional dengan nilai
                sempurna.
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 bg-white rounded-2xl p-4">
              <Image
                src={"/img/guru-1.png"}
                width={280}
                height={280}
                alt=""
                className="rounded-2xl"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Aliya Manroe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
