export default function Input({ placeholder, className }) {
  return (
    <input
      placeholder={placeholder}
      className={`text-sm text-white2 placeholder:text-white2 bg-transparent border border-white rounded-lg py-5 px-4 ${className}`}
    ></input>
  );
}
