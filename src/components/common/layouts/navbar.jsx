import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

const navbarList = [
  {
    name: "Guru Umum",
    link: "/",
  },
  {
    name: "Guru Spesialis Disabilitas",
    link: "/",
  },
  {
    name: "Menjadi Pengajar",
    link: "/",
  },
];

export default function Navbar() {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between wrapper">
        <div className="flex items-center gap-16">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <Image src={"/svg/logo.svg"} width={32} height={32} alt="" />
              <h1 className="text-2xl font-bold text-white">GURUKU</h1>
            </div>
          </Link>
          <div className="flex items-center gap-10">
            {navbarList.map((item) => (
              <Link key={item.name} href={item.link}>
                <p className="font-medium text-white2 hover:underline">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Masuk</Button>
          <Button variant="outline">Daftar</Button>
        </div>
      </div>
    </div>
  );
}
