import Image from "next/image";

export default function Popup({ children }) {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex xl:hidden justify-center items-center bg-[rgba(0,0,0,0.4)] px-4 z-50">
      <div className="w-full max-w-xs flex flex-col items-center gap-6 bg-white rounded-lg py-12 px-6">
        <Image src={"/svg/roadblock.svg"} width={160} height={160} alt="" />
        {children}
      </div>
    </div>
  );
}
