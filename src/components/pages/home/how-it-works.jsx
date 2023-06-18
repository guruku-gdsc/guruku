import Image from "next/image";

const HowItWorksList = [
  {
    title: "Cari Guru sesuai dengan kebutuhan",
    content:
      "Temukan guru yang sesuai dengan kebutuhan pendidikan Anda melalui fitur pencarian kami. Anda dapat memilih mata pelajaran yang ingin dipelajari dan memfilter hasil pencarian berdasarkan kriteria seperti jenis guru (umum atau disabilitas) dan area/lokasi.",
    img: "/img/home/carakerja01.png",
  },
  {
    title: "Pilih metode belajar",
    content:
      "Kami memberikan fleksibilitas kepada Anda untuk memilih metode belajar yang paling cocok. Anda dapat memilih untuk belajar secara online melalui video call atau memilih opsi belajar offline dengan mengundang guru untuk datang ke rumah Anda.",
    img: "/img/home/carakerja02.png",
  },
  {
    title: "Lakukan reservasi",
    content:
      "Setelah Anda menemukan guru yang cocok, Anda dapat melanjutkan dengan melakukan reservasi langsung melalui platform kami.  Dengan melakukan reservasi, Anda dapat memastikan ketersediaan guru dan mempersiapkan diri untuk sesi belajar yang efektif.",
    img: "/img/home/carakerja03.png",
  },
];

export default function HowItWorks() {
  return (
    <div className="mt-32">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium text-green1">Cara Kerja</p>
          <h1 className="text-[40px] font-bold leading-[52px] text-black1">
            Belajar Tidak Pernah Semudah Ini
          </h1>
        </div>
        <div className="flex flex-col gap-20 mt-20">
          {HowItWorksList.map((item, index) => (
            <Grid key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Grid({ item, index }) {
  return (
    <div
      className={`flex items-center ${
        index === 1 && "flex-row-reverse"
      } justify-center gap-20`}
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p className="text-base text-neutral-600 w-[500px]">{item.content}</p>
      </div>
      <Image src={item.img} width={480} height={300} alt={item.title} />
    </div>
  );
}
