import Image from "next/image";
import Link from "next/link";

const LinkList = [
  {
    title: "Layanan",
    links: [
      {
        name: "Tentang Kami",
        link: "/tentang-kami",
      },
      {
        name: "Karir",
        link: "/karir",
      },
      {
        name: "Kebijakan Privasi",
        link: "/kebijakan-privasi",
      },
    ],
  },
  {
    title: "Bantuan",
    links: [
      {
        name: "Tanya Jawab",
        link: "/tanya-jawab",
      },
      {
        name: "Pembayaran",
        link: "/pembayaran",
      },
      {
        name: "Informasi",
        link: "/informasi",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-10 pb-2 mt-20 text-white bg-green1">
      <div className="wrapper flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/svg/logo.svg"
                alt=""
                width={32}
                height={32}
                quality={90}
              />
              <h1 className="text-2xl font-bold text-white">Guruku</h1>
            </div>
            <p className="w-[320px]">
              Guruku dengan senang hati membantu anda menemukan pendidik
              berkualitas yang sesuai dengan kebutuhan anda.
            </p>
          </div>
          <div className="flex gap-20">
            {LinkList.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="flex flex-col gap-3">
                  {item.links.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="transition text-neutral-200 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold">Hubungi Kami</h2>
              <div className="flex flex-col gap-3">
                <p className="w-52 text-neutral-200">
                  Jl. Gurukami, Medan Kota, Sumatera Utara, 20227
                </p>
                <p className="text-neutral-200">+62 812 3456 7890</p>
                <p className="text-neutral-200"> guruku@email.com </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold">Ikuti Kami</h2>
              <div className="flex flex-col gap-3">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Youtube</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-sm items-center justify-center pt-6 pb-2 border-t-[#1F5B46] border-t">
          © 2023. Guruku. All right reserved
        </div>
      </div>
    </footer>
  );
}
