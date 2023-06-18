export default function TopTeacher() {
  return (
    <div className="py-16">
      <div className="wrapper">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium text-green1">Guru Top</p>
          <h1 className="text-[40px] font-bold leading-[52px] text-black1">
            Pengajar dengan Layanan Terbaik
          </h1>
        </div>
        <div className="flex flex-col gap-4 mt-8 mb-10">
          <p className="text-grey1">Filter berdasarkan kategori</p>
          <div className="flex gap-3">
            <div className="bg-green1 rounded-[32px] py-4 px-8">
              <p>Guru Umum</p>
            </div>
            <div>
              <p>Guru Spesialis Disabilitas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
