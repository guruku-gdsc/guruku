import { Button } from "@/components/common/button";
import { Navbar } from "@/components/common/layouts";
import Image from "next/image";
import { useRouter } from "next/router";

const labelList = ["Bahasa Jepang", "Guru Umum", "Sp Disabilitas"];

const levelList = ["SD", "SMP", "SMA", "Mahasiswa"];

export default function Guru() {
  const router = useRouter();
  const { id, photo, name } = router.query;

  return (
    <>
      <div className="bg-green1">
        <Navbar />
        <div className="wrapper">
          <div className="flex pt-24 pb-10">
            <div className="flex-1 flex flex-col gap-6 pr-96">
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
            <div className="w-80 absolute right-10 flex flex-col items-center gap-6 bg-white rounded-2xl p-4">
              <Image
                src={photo}
                width={280}
                height={280}
                alt=""
                className="rounded-2xl"
              />
              <div className="flex flex-col items-center gap-2">
                <p className="text-xl font-semibold">{name}</p>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    <Image
                      src={"/svg/icon-star.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <Image
                      src={"/svg/icon-star.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <Image
                      src={"/svg/icon-star.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <Image
                      src={"/svg/icon-star.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <Image
                      src={"/svg/icon-star.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                  <p className="text-sm text-grey1">(140)</p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between items-center text-sm">
                  <p className="text-grey1">Tarif per jam</p>
                  <p className="font-semibold">Rp 200.000</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-grey1">Waktu respon</p>
                  <p className="font-semibold">30 menit</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-grey1">Jumlah murid</p>
                  <p className="font-semibold">200+</p>
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-4">
                <Button>Reservasi Kursus</Button>
                <p className="text-sm text-green1">1x percobaan gratis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper !mt-16 !mb-20">
        <div className="flex flex-col gap-8 pr-96">
          <div className="flex flex-col gap-4 text-green1 bg-[#E6F4EF] rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <Image
                src={"/svg/icon-medal.svg"}
                width={20}
                height={20}
                alt=""
              />
              <p className="text-lg font-medium">Guru Expert</p>
            </div>
            <p>
              Aliya adalah salah satu guru Bahasa Inggris terbaik kami. Dia
              memiliki profil yang berkualitas tinggi, kualifikasi sudah
              terverifikasi, cepat dalam memberikan respon dan merupakan guru
              favorit para siswa.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Tentang Aliya</h1>
            <div className="flex flex-col gap-4 text-sm leading-6 text-grey1">
              <p>
                Saya lulusan dari ITB yang mempelajari Bahasa Jepang karena hobi
                saya yang berhubungan dengan Jepang. Karena hobi tersebut saya
                tertarik untuk mempelajari Bahasa Jepang sejak tahun 2015 dan
                telah mendapatkan sertifikat Bahasa Jepang JLPT N3 pada Tahun
                2017.
              </p>
              <p>
                Saya telah berpengalaman menggunakan Bahasa Jepang dalam
                kegiatan sehari-hari dan sebagai penerjemah. Hingga saat ini
                saya telah mengajar banyak murid dari SD hingga orang dewasa dan
                dapat membimbing murid untuk mencapai tujuan masing-masing baik
                untuk pendidikan atau untuk hobi saja. Saya juga telah
                berpengalaman dalam mengajar Bahasa Jepang dengan kelompok murid
                yang besar.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Tentang Kursus Ini</h1>
            <div className="flex flex-col gap-4 text-sm leading-6 text-grey1">
              <p>
                Nikmati kursus Bahasa Jepang online yang efektif dengan waktu
                belajar fleksibel disertai harga yang terjangkau! Silahkan
                bertanya-tanya dulu saja baik via guruku ataupun WA saya
                (gratis).
              </p>
              <p>
                Sebelum memulai kursus murid dapat mencoba pertemuan trial
                secara gratis agar murid dapat merasakan metode belajar
                pengajar. Kursus dilakukan secara online menggunakan aplikasi
                Zoom dan lainnya. Melayani kursus privat maupun berkelompok.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">
              Siapa yang bisa mengikuti kursus ini?
            </h1>
            <div className="flex items-center gap-4">
              {levelList.map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <Image
                    src={"/svg/icon-check.svg"}
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="text-sm font-medium text-grey1">{level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
