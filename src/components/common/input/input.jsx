import Image from "next/image";

export default function Input({
  placeholder,
  icon,
  className,
  value,
  onChange,
  inputClassName,
}) {
  return (
    <div className={`flex-1 relative flex items-center ${className}`}>
      {icon && (
        <Image
          src={`/svg/icon-${icon}.svg`}
          width={20}
          height={20}
          alt=""
          className="absolute top-1/2 left-4 -translate-y-1/2"
        />
      )}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-full text-sm text-white2 placeholder:text-white2 bg-transparent border border-white rounded-lg outline-none py-5 px-4 ${
          icon ? "pl-12" : "px-4"
        } ${inputClassName}`}
      />
    </div>
  );
}
