import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Navbar } from "@/components/common/layouts";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col bg-green1">
      <Navbar />
      <div className="wrapper flex-1 flex flex-col">
        <div className="max-w-2xl flex-1 justify-center flex flex-col gap-6 pb-10">
          <h1 className="text-5xl font-bold leading-[60px] text-white">
            Temukan Guru Berkualitas yang Sesuai dengan Kebutuhan Anda
          </h1>
          <p className="leading-7 text-white2">
            Kami menyediakan akses mudah untuk menemukan guru umum dan guru
            dengan keahlian khusus dalam mengajar murid dengan disabilitas.
            Dengan metode belajar online dan offline, kami membantu memenuhi
            kebutuhan pendidikan Anda dengan cara yang nyaman dan terpercaya.
          </p>
          <div className="h-[60px] flex gap-2">
            <Input
              placeholder={"Apa yang ingin kamu pelajari?"}
              icon={"search"}
            />
            <Button>Temukan Guru Terbaik</Button>
          </div>
        </div>
        <Image
          src={"/img/home/hero-decoration.webp"}
          width={600}
          height={600}
          alt=""
          className="absolute bottom-0 right-10"
        />
      </div>
    </div>
  );
}
