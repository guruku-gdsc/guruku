import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Navbar } from "@/components/common/layouts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const teacherList = [
  {
    id: 1,
    name: "Aliya",
    desc: "Lulusan ITB yang telah 8 tahun belajar Bahasa Jepang sebagai hobi hingga meraih Sertifikasi internasional dengan nilai sempurna. Berpengalaman 4 tahun mengajar murid dengan berbagai usia ...",
    category: ["Bahasa Jepang", "Guru Umum"],
    rate: "Rp 200.000/jam",
    review: "140",
    photo: "/img/home/top-teacher-1.png",
    keahlian: "Bahasa Jepang",
  },
  {
    id: 2,
    name: "Leo",
    desc: "Seorang Software Developer dengan pengalaman 7 tahun yang menawarkan kursus belajar bahasa pemrograman PHP, Javascript, Laravel, Python, HTML, CSS, MySQL, Bootstrap, ...",
    category: ["Pemrograman Web", "Guru Umum", "Sp Disabilitas"],
    rate: "Rp 180.000/jam",
    review: "78",
    photo: "/img/home/top-teacher-4.png",
    keahlian: "Pemrograman Web",
  },
  {
    id: 3,
    name: "Nadia",
    desc: "Kursus akuntansi keuangan, perpajakan dan manajemen keuangan dengan metode pembelajaran yang simpel, serta jasa kompilasi laporan keuangan dan perpajakan ...",
    category: ["Akuntansi", "Guru Umum"],
    rate: "Rp 150.000/jam",
    review: "122",
    photo: "/img/home/top-teacher-2.png",
    keahlian: "Akuntansi",
  },
  {
    id: 4,
    name: "Katrin",
    desc: "UK graduate tutoring in IELTS Academic, English Conversational Class and English for School & University Students (for aged 13 and above). Flexible schedule and personalised syllabus!",
    category: ["Bahasa Inggris", "Guru Umum", "Sp Disabilitas"],
    rate: "Rp 175.000/jam",
    review: "110",
    photo: "/img/home/top-teacher-5.png",
    keahlian: "Bahasa Inggris",
  },
  {
    id: 5,
    name: "Khalisa",
    desc: "Mahasiswa S2 Unesa menawarkan Kursus Matematika Jenjang SD, SMP dan SMA dan persiapan SNBT serta persiapan tes kedinasan di Surabaya dan seluruh Indonesia. Join yuk, dapatkan pengalaman belajar matem ...",
    category: ["Matematika", "Guru Umum", "Sp Disabilitas"],
    rate: "Rp 140.000/jam",
    review: "80",
    photo: "/img/home/top-teacher-3.png",
    keahlian: "Matematika",
  },
  {
    id: 6,
    name: "James",
    desc: "Dosen dan pengajar privat eksakta, khususnya pelatih OSN Kimia SMA hingga tingkat provinsi serta ongoing kandidat S3, lulusan S2 TL ITB dan S1 TK UNPAR dengan pengalaman mengajar 7 tahun ...",
    category: ["Kimia", "Guru Umum", "Sp Disabilitas"],
    rate: "Rp 125.000/jam",
    review: "95",
    photo: "/img/home/top-teacher-6.png",
    keahlian: "Kimia",
  },
];

export default function CariGuru() {
  const [selectedCategory, setSelectedCategory] = useState("Guru Umum");
  const { guru } = useRouter().query;
  const [searchedTeacher, setSearchedTeacher] = useState(guru || "");

  const filteredTopTeacherList = teacherList.filter(
    (item) =>
      item.category.includes(selectedCategory) &&
      item.keahlian.toLowerCase().includes(searchedTeacher.toLowerCase())
  );

  return (
    <div>
      <Navbar dark />
      <div className="wrapper">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-green1">Guru</p>
            <h1 className="text-[40px] font-bold text-black1">
              Temukan Guru Andalanmu
            </h1>
          </div>
          <div className="max-w-md flex gap-2">
            <Input
              placeholder={"Apa yang ingin kamu pelajari?"}
              icon={"search-grey"}
              inputClassName={
                "!text-black placeholder:!text-grey1 !border-grey1"
              }
              value={searchedTeacher}
              onChange={(e) => setSearchedTeacher(e.target.value)}
            />
            <Button>Cari</Button>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-grey1">Filter berdasarkan kategori</p>
            <div className="flex gap-4">
              <button
                className={`px-8 py-4 font-medium transition-all border border-solid rounded-full border-white1 hover:bg-green1 hover:text-white ${
                  selectedCategory === "Guru Umum" &&
                  "bg-green1 text-white border-transparent"
                }`}
                onClick={() => setSelectedCategory("Guru Umum")}
              >
                Guru Umum
              </button>
              <button
                className={`px-8 py-4 font-medium transition-all border border-solid rounded-full border-white1 hover:bg-green1 hover:text-white ${
                  selectedCategory === "Sp Disabilitas" &&
                  "bg-green1 text-white border-transparent"
                }`}
                onClick={() => setSelectedCategory("Sp Disabilitas")}
              >
                Guru Spesialis Disabilitas
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-10 gap-y-10 gap-x-8">
          {filteredTopTeacherList.length > 0 ? (
            filteredTopTeacherList.map((item) => (
              <Link key={item.id} href={`/guru/${item.id}`}>
                <TeacherCard item={item} />
              </Link>
            ))
          ) : (
            <p>Tidak ada guru yang ditemukan</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function TeacherCard({ item }) {
  return (
    <div className="flex items-center gap-6 hover:scale-95 transition">
      <Image src={item.photo} alt="" width={200} height={200} quality={90} />
      <div className="flex flex-col gap-5 content">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <Image
                src="/img/home/medal.svg"
                alt=""
                width={20}
                height={20}
                quality={90}
              />
              <p className="font-medium text-green1">Guru Expert</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src={"/img/home/star.svg"}
                    width={20}
                    height={20}
                    alt=""
                    quality={90}
                  />
                ))}
              </div>
              <p className="text-sm text-grey1">{`(${item.review})`}</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-[#D7EAE3] flex items-center justify-center rounded-full">
            <p className="text-sm font-medium text-green1">{item.rate}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">{item.name}</p>
          <p className="text-sm text-grey1">{item.desc}</p>
        </div>

        <div className="flex gap-3">
          {item.category.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 text-xs font-medium text-[#628679] rounded-full bg-[#EEF2F1]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
