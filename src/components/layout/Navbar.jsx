import { Menu, X, Download } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#131313]/80 px-6 py-4 backdrop-blur-xl">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>

          <div>
            <h1 className="text-sm font-bold tracking-[0.25em] text-white">
              W THAGWANA
            </h1>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <a
          href="/W_THAGWANA_CV.pdf"
          download
          className="hidden items-center gap-2 rounded-xl bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-zinc-200 md:flex"
        >
          <Download size={16} />
          Download CV
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-[#131313]/95 p-6 backdrop-blur-xl md:hidden">

          <div className="flex flex-col gap-5">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/W THAGWANA CV.pdf"
              download
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white py-3 font-medium text-black"
            >
              <Download size={18} />
              Download CV
            </a>

          </div>

        </div>
      )}
    </header>
  );
}
