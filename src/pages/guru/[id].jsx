import { Button } from "@/components/common/button";
import { Navbar } from "@/components/common/layouts";
import Image from "next/image";
import { useRouter } from "next/router";

const labelList = ["Bahasa Jepang", "Guru Umum", "Sp Disabilitas"];

const levelList = ["SD", "SMP", "SMA", "Mahasiswa"];

const TopTeacherList = [
  {
    id: 1,
    name: "Aliya",
    desc: "Lulusan ITB yang telah 8 tahun belajar Bahasa Jepang sebagai hobi hingga meraih Sertifikasi internasional dengan nilai sempurna. Berpengalaman 4 tahun mengajar murid dengan berbagai usia ...",
    category: ["Bahasa Jepang", "Guru Umum"],
    rate: "Rp 200.000/jam",
    review: "140",
    photo: "/img/home/top-teacher-1.png",
  },
  {
    id: 2,
    name: "Leo",
    desc: "Seorang Software Developer dengan pengalaman 7 tahun yang menawarkan kursus belajar bahasa pemrograman PHP, Javascript, Laravel, Python, HTML, CSS, MySQL, Bootstrap, ...",
    category: ["Pemrograman Web", "Guru Umum", "Sp Disabilitas"],
    rate: "Rp 180.000/jam",
    review: "78",
    photo: "/img/home/top-teacher-4.png",
  },
  {
    id: 3,
    name: "Nadia",
    desc: "Kursus akuntansi keuangan, perpajakan dan manajemen keuangan dengan metode pembelajaran yang simpel, serta jasa kompilasi laporan keuangan dan perpajakan ...",
    category: ["Akuntansi", "Guru Umum"],
    rate: "Rp 150.000/jam",
    review: "122",
    photo: "/img/home/top-teacher-2.png",
  },
  {
    id: 4,
    name: "Katrin",
    desc: "UK graduate tutoring in IELTS Academic, English Conversational Class and English for School & University Students (for aged 13 and above). Flexible schedule and personalised syllabus!",
    category: ["Bahasa Inggris", "Guru Umum", "Sp Disabilitas"],
    rate: "Rp 175.000/jam",
    review: "110",
    photo: "/img/home/top-teacher-5.png",
  },
  {
    id: 5,
    name: "Khalisa",
    desc: "Mahasiswa S2 Unesa menawarkan Kursus Matematika Jenjang SD, SMP dan SMA dan persiapan SNBT serta persiapan tes kedinasan di Surabaya dan seluruh Indonesia. Join yuk, dapatkan pengalaman belajar matem ...",
    category: ["Matematika", "Guru Umum", "Sp Disabilitas"],
    rate: "Rp 140.000/jam",
    review: "80",
    photo: "/img/home/top-teacher-3.png",
  },
  {
    id: 6,
    name: "James",
    desc: "Dosen dan pengajar privat eksakta, khususnya pelatih OSN Kimia SMA hingga tingkat provinsi serta ongoing kandidat S3, lulusan S2 TL ITB dan S1 TK UNPAR dengan pengalaman mengajar 7 tahun ...",
    category: ["Kimia", "Guru Umum", "Sp Disabilitas"],
    rate: "Rp 125.000/jam",
    review: "95",
    photo: "/img/home/top-teacher-6.png",
  },
];

export default function Guru() {
  const router = useRouter();
  const { id } = router.query;

  const selectedTeacher = TopTeacherList.find(
    (teacher) => teacher.id === Number(id)
  );

  if (!selectedTeacher) {
    return <div>Guru tidak ditemukan.</div>;
  }

  const { name, photo, review, desc } = selectedTeacher;

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
              <p className="text-[40px] font-semibold text-white">{desc}</p>
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
                  <p className="text-sm text-grey1">({review})</p>
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
