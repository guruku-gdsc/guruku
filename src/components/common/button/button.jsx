const variants = {
  primary: "font-semibold text-black bg-yellow",
  outline: "text-white1 bg-transparent border border-white1",
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
      className={`font-medium rounded-lg py-3 px-8 hover:scale-105 active:scale-95 transition outline-none ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
