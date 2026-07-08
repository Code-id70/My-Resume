export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}) {
  const base =
    "px-5 py-3 rounded-lg font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-zinc-700 text-white hover:border-zinc-500",

    ghost:
      "text-zinc-300 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}