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

              <h3 className="mb-4 text-3xl font-bold">
                Wanga Thagwana
              </h3>

              <p className="leading-8 text-zinc-400">
                I'm Wanga Thagwana, a Software Developer and founder of YANA, passionate about building technology that solves meaningful problems. My interests span software engineering, artificial intelligence, and SaaS, with a focus on creating products that are scalable, practical, and user-centered<br />
        
                I enjoy turning ideas into modern digital products that are
                scalable, user-friendly and built with purpose. My goal is to
                combine software engineering, AI and business thinking to create
                technology that genuinely improves how people and businesses work.
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
                Exploring artificial intelligence,
                automation and intelligent software
                systems that transform business processes and more efficient.
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
                Founder of YANA, passionate about designing and building software products that solve real-world problems through thoughtful design, modern technologies and user-focused experiences.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}