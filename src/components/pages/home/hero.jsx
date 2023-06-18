import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Navbar } from "@/components/common/layouts";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col max-h-md:min-h-screen bg-green1">
      <Navbar />
      <div className="flex justify-center wrapper xl:justify-start">
        <div className="flex flex-col items-center justify-center flex-1 max-w-5xl gap-6 pt-16 pb-32 xl:max-w-2xl xl:items-baseline max-h-md:pt-0 max-h-md:pb-16">
          <h1 className="text-5xl font-bold leading-[60px] text-white text-center xl:text-left">
            Temukan Guru Berkualitas yang Sesuai dengan Kebutuhan Anda
          </h1>
          <p className="leading-7 text-center text-white2 xl:text-left">
            Kami menyediakan akses mudah untuk menemukan guru umum dan guru
            dengan keahlian khusus dalam mengajar murid dengan disabilitas.
            Dengan metode belajar online dan offline, kami membantu memenuhi
            kebutuhan pendidikan Anda dengan cara yang nyaman dan terpercaya.
          </p>
          <div className="flex w-3/4 gap-2 xl:w-full">
            <Input
              placeholder={"Apa yang ingin kamu pelajari?"}
              icon={"search"}
            />
            <Button>Temukan Guru Terbaik</Button>
          </div>
        </div>
        <Image
          src="/img/home/heroimg.png"
          width={649}
          height={604}
          alt="heroimg"
          quality={100}
          className="flex-1 hidden w-full xl:block"
        />
      </div>
    </div>
  );
}
