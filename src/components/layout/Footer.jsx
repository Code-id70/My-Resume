import { Mail, ArrowUp } from "lucide-react";
import GithubIcon from "../icons/GithubIcon";     // adjust relative path to match your folder structure
import LinkedinIcon from "../icons/LinkedinIcon"; // adjust relative path to match your folder structure

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f0f0f] text-white">

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:justify-between">

        {/* ===========================
            QUICK LINKS
        ============================ */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-zinc-400">

            <a href="#home" className="hover:text-blue-400">
              Home
            </a>

            <a href="#about" className="hover:text-blue-400">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>

          </div>

        </div>

        {/* ===========================
            CONTACT
        ============================ */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Connect
          </h3>

          <div className="space-y-4">

            <a
              href="mailto:thagwanawm88@gmail.com"
              className="flex items-center gap-3 text-zinc-400 transition hover:text-blue-400"
            >
              <Mail size={18} />

              <span>
                Email
              </span>

            </a>

            <a
              href="https://github.com/Code-id70"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-400 transition hover:text-blue-400"
            >
              <GithubIcon size={18} />

              <span>
                GitHub
              </span>

            </a>

            <a
              href="https://www.linkedin.com/in/wanga-thagwana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-400 transition hover:text-blue-400"
            >
              <LinkedinIcon size={18} />

              <span>
                LinkedIn
              </span>

            </a>

          </div>

        </div>

      </div>

      {/* ===========================
          Bottom Bar
      ============================ */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Wanga Thagwana. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 transition hover:text-blue-400"
          >
            <ArrowUp size={16} />

            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}