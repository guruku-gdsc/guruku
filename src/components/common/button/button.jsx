const variants = {
  primary: "font-semibold text-black bg-yellow1 hover:bg-[#EEB31D]",
  outline:
    "text-white1 bg-transparent border border-white1 hover:bg-white hover:text-green1",
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
