import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Navbar } from "@/components/common/layouts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const subjectSuggestions = [
  "Bahasa Inggris",
  "Matematika",
  "Sejarah",
  "Bahasa Jepang",
];

export default function Hero() {
  const [searchInput, setSearchInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    setShowSuggestions(inputValue !== "");
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setShowSuggestions(false);
  };

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
          <div
            className="h-16 relative flex w-3/4 gap-2 xl:w-full"
            onClick={() => setShowSuggestions(!showSuggestions)}
          >
            <Input
              placeholder={"Apa yang ingin kamu pelajari?"}
              icon={"search"}
              value={searchInput}
              onChange={handleInputChange}
            />
            <Link href={"/cari-guru"}>
              <Button className={"h-full"}>Temukan Guru Terbaik</Button>
            </Link>
            {showSuggestions && (
              <div className="absolute top-[72px] left-0 bg-white border border-grey1 rounded-lg shadow py-2 px-4 z-10">
                <ul className="divide-y divide-gray-200">
                  {subjectSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
