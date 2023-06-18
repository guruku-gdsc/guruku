import Image from "next/image";

const testimonalList = [
  {
    name: "Andre",
    content:
      "Terima kasih Guruku. Setelah mengenal layanan ini, saya menjadi lebih mudah untuk mencari guru yang sesuai dengan keinginan dan kebutuhan saya.",
  },
  {
    name: "Irvan",
    content:
      "Guru yang saya temui sangat berdedikasi dan dapat mengajar dengan baik baik secara online maupun offline. Terima kasih atas platform yang hebat ini!",
  },
  {
    name: "Yona",
    content:
      "Saya senang mengikuti berbagai les untuk memperluas skill saya. Guruku membantu saya menemukan pendidik yang mengerti dengan kemampuan belajar saya.",
  },
  {
    name: "Faisal",
    content:
      "Belajar menjadi lebih menyenangkan dan efektif berkat platform ini. Saya merasa didukung dan dapat belajar dengan nyaman sesuai dengan kebutuhan saya",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-[#F0F6F5] py-16">
      <div className="wrapper">
        <div className="flex flex-col gap-16 items-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-medium text-green1">Testimoni</p>
            <h1 className="max-w-2xl text-[40px] font-bold text-center leading-[52px] text-black1">
              Apa Yang Mereka Katakan Tentang Kami?
            </h1>
          </div>
          <div className="flex flex-wrap gap-10">
            {testimonalList.map((item, index) => (
              <TestimonalCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonalCard({ item, index }) {
  return (
    <div className="min-w-[480px] flex-1 flex items-center gap-6">
      <Image
        src={`/svg/home/testimonial/user-${index + 1}.svg`}
        width={100}
        height={100}
        alt=""
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{item.name}</p>
          <div className="flex">
            <Image src={"/svg/icon-star.svg"} width={20} height={20} alt="" />
            <Image src={"/svg/icon-star.svg"} width={20} height={20} alt="" />
            <Image src={"/svg/icon-star.svg"} width={20} height={20} alt="" />
            <Image src={"/svg/icon-star.svg"} width={20} height={20} alt="" />
            <Image src={"/svg/icon-star.svg"} width={20} height={20} alt="" />
          </div>
        </div>
        <i className="text-grey1">{item.content}</i>
      </div>
    </div>
  );
}
