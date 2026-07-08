import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import GithubIcon from "../icons/GithubIcon";     // adjust relative path to match your folder structure
import LinkedinIcon from "../icons/LinkedinIcon"; // adjust relative path to match your folder structure


export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#131313] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* ==============================
            Section Heading
        =============================== */}

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Contact
        </p>

        <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl">
          Ready to Build Something Great?
        </h2>

        <p className="mx-auto mb-20 max-w-3xl text-center text-lg text-zinc-400">
          Whether you're looking for a developer, want to collaborate
          or simply have a question, I'd love to hear from you.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* ============================
              LEFT
          ============================= */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">

              <div className="flex items-center gap-4">

                <Mail className="text-blue-500" />

                <div>

                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-zinc-400">
                    thagwanawm88@gmail.com
                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">

              <div className="flex items-center gap-4">

                <Phone className="text-blue-500" />

                <div>

                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-zinc-400">
                    +27 82 085 0042
                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">

              <div className="flex items-center gap-4">

                <MapPin className="text-blue-500" />

                <div>

                  <h3 className="font-semibold">
                    Location
                  </h3>

                  <p className="text-zinc-400">
                    Pretoria, Gauteng, South Africa
                  </p>

                </div>

              </div>

            </div>

            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/Code-id70"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-4 transition hover:border-blue-500 hover:text-blue-400"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/wanga-thagwana/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-4 transition hover:border-blue-500 hover:text-blue-400"
              >
                <LinkedinIcon />
              </a>

            </div>

          </div>

          
        </div>

      </div>
    </section>
  );
}