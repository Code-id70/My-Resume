import {
  Code2,
  BrainCircuit,
  BriefcaseBusiness,
} from "lucide-react";
import profileImage from "../../assets/images/profile.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#131313] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* -------------------------
            Section Heading
        -------------------------- */}

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          About Me
        </p>

        <h2 className="mx-auto mb-6 max-w-3xl text-center text-4xl font-bold md:text-5xl">
          Building software that solves
          <span className="text-blue-500">
            {" "}
            real-world problems
          </span>
        </h2>

        {/* -------------------------
            Main Grid
        -------------------------- */}

        <div className="grid gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-10 backdrop-blur-xl">

              {/* ==========================
                  Profile Image
              ========================== */}

              <div className="mb-8 h-36 w-36 overflow-hidden rounded-full border-4 border-blue-500 shadow-xl">

                <img
                  src={profileImage}
                  alt="Wanga Thagwana"
                  className="h-full w-full object-cover"
                />

              </div>

              <p className="leading-8 text-zinc-400">
               I am a Software Developer and the founder of YANA, passionate about engineering technology that addresses meaningful human and business needs. My expertise spans full‑stack software development, artificial intelligence, and SaaS architectures. I focus on transforming complex ideas into modern, scalable, and user‑centered digital products. By combining technical execution with business thinking, my goal is to build intelligent systems that genuinely improve how people live and work.
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            {/* Card 1 */}

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 transition hover:border-blue-500/40">

              <Code2
                className="mb-6 text-blue-500"
                size={34}
              />

              <h3 className="mb-3 text-2xl font-semibold">
                Software Development
              </h3>

              <p className="text-zinc-400">
                Designing and developing responsive web apps, scalable APIs, and mobile solutions with a focus on innovation, performance and continuous learning.
              </p>

            </div>

            {/* Card 2 */}

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 transition hover:border-blue-500/40">

              <BrainCircuit
                className="mb-6 text-blue-500"
                size={34}
              />

              <h3 className="mb-3 text-2xl font-semibold">
                AI & Innovation
              </h3>

              <p className="text-zinc-400">
                Integrating artificial intelligence, automation, and intelligent workflows into software systems to optimize operational efficiency.
              </p>

            </div>

            {/* Card 3 */}

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 transition hover:border-blue-500/40">

              <BriefcaseBusiness
                className="mb-6 text-blue-500"
                size={34}
              />

              <h3 className="mb-3 text-2xl font-semibold">
                Founder & Builder
              </h3>

              <p className="text-zinc-400">
               Building platforms like YANA from the ground up, utilizing thoughtful UI/UX design, modern tech stacks, and user-focused engineering.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}