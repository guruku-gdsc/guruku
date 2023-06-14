import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";

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
      <div className="wrapper flex justify-between items-center">
        <div className="flex items-center gap-12">
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
        <Button variant="outline">Masuk</Button>
      </div>
    </div>
  );
}
