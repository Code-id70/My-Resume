import {
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";
import GithubIcon from "../icons/GithubIcon";
import yanaShot from "../../assets/images/projects/yana_shot.png"; // adjust filename/path to match your actual asset

export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="bg-[#131313] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* -----------------------------
            Section Heading
        ------------------------------ */}

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Featured Project
        </p>

        <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl">
          YANA
        </h2>
        {/* -----------------------------
            Project Layout
        ------------------------------ */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left - Phone Mockup */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute -inset-6 rounded-full bg-blue-500/20 blur-3xl"></div>

              <div className="relative flex h-[600px] w-[300px] items-center justify-center overflow-hidden rounded-[45px] border border-white/10 bg-zinc-900 shadow-2xl">

                {/* App screenshot filling the phone frame */}
                <img
                  src={yanaShot}
                  alt="YANA app screenshot"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="mb-6 text-3xl font-bold">
              Building technology that supports people
            </h3>

            <p className="mb-10 leading-8 text-zinc-400">
              YANA is a mental wellness platform designed to make emotional support more accessible through anonymous conversations, AI-powered assistance and verified mental health professionals. Built with modern web technologies, the platform focuses on privacy, accessibility, and meaningful human connection.
            </p>

            {/* Features */}

            <div className="space-y-6">

              <div className="flex gap-4">

                <BrainCircuit className="mt-1 text-blue-500" />

                <div>

                  <h4 className="font-semibold">
                    AI Integration
                  </h4>

                  <p className="text-zinc-400">
                    Designing intelligent features that enhance user support and efficiency.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <ShieldCheck className="mt-1 text-blue-500" />

                <div>

                  <h4 className="font-semibold">
                    Privacy First
                  </h4>

                  <p className="text-zinc-400">
                    Ensuring anonymous conversations with privacy at the core.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Smartphone className="mt-1 text-blue-500" />

                <div>

                  <h4 className="font-semibold">
                    Modern User Experience
                  </h4>

                  <p className="text-zinc-400">
                    Built with React for a simple, responsive, and intuitive interface.
                  </p>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="https://app.yana-app.co.za/onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-700"
              >
                Live Demo

                <ArrowUpRight size={18} />

              </a>

              <a
                href="https://github.com/Code-id70?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-4 transition hover:border-white"
              >
                GitHub

                <GithubIcon size={18} />

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}