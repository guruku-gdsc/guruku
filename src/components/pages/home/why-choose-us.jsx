const WhyChooseUsList = [
  {
    title: "Guru Berkualitas dan Terpercaya",
    content:
      "Kami menyediakan guru-guru berkualitas yang telah melalui proses seleksi ketat untuk memastikan pengalaman belajar yang optimal.",
  },
  {
    title: "Fleksibilitas Belajar Online dan Offline",
    content:
      "Anda dapat memilih untuk belajar melalui video call online atau mengundang guru untuk datang ke rumah Anda.",
  },
  {
    title: "Dukungan untuk Murid dengan Disabilitas",
    content:
      "Kami berkomitmen untuk menciptakan lingkungan belajar yang inklusif dan membantu Anda menemukan guru yang dapat mengakomodasi kebutuhan pendidikan khusus Anda.",
  },
  {
    title: "Pilihan Guru dengan Keahlian Khusus",
    content:
      "Kami memberikan opsi yang luas agar Anda dapat menemukan guru yang sesuai dengan gaya belajar dan minat Anda.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="py-[120px]">
      <div className="wrapper">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-green1">Keunggulan</p>
            <h1 className="text-[40px] font-bold text-black1">
              Mengapa Memilih Kami?
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {WhyChooseUsList.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Card({ item }) {
  return (
    <div className="flex flex-col gap-16 bg-[#FAFAFA] p-8" data-aos="fade-up">
      <div className="w-[100px] h-[100px] bg-white2 rounded-full" />
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">{item.title}</p>
        <p className="leading-7 text-grey1">{item.content}</p>
      </div>
    </div>
  );
}
