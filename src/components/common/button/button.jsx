const variants = {
  primary: "font-semibold text-black bg-yellow1 hover:bg-[#EEB31D]",
  outline:
    "bg-transparent border border-white1 text-white1 hover:bg-white hover:text-green1",
  "outline-dark":
    "bg-transparent border border-green1 text-green1 hover:bg-green1 hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  let variantClasses = variants[variant];

  return (
    <button
      className={`font-medium py-3 px-8 active:scale-95 transition outline-none rounded-lg ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
