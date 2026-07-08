import {
  MonitorSmartphone,
  Database,
  BrainCircuit,
  Wrench,
} from "lucide-react";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#131313] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* -----------------------------
            Section Heading
        ------------------------------ */}

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Skills
        </p>

        <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl">
          Technologies i Work With
        </h2>

        <p className="mx-auto mb-20 max-w-3xl text-center text-lg leading-8 text-zinc-400">
          I enjoy learning modern technologies and applying them to build
          scalable web applications, intelligent software and business
          solutions.
        </p>

        {/* -----------------------------
            Skills Grid
        ------------------------------ */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Frontend */}

          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 backdrop-blur-xl transition hover:border-blue-500/40">

            <MonitorSmartphone
              size={36}
              className="mb-6 text-blue-500"
            />

            <h3 className="mb-6 text-2xl font-semibold">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "React",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Expo Router",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-zinc-800 px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Backend */}

          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 backdrop-blur-xl transition hover:border-blue-500/40">

            <Database
              size={36}
              className="mb-6 text-blue-500"
            />

            <h3 className="mb-6 text-2xl font-semibold">
              Backend
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Java",
                "Python",
                "Node.js",
                "Express",
                "MySQL",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-zinc-800 px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* AI & Cloud */}

          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 backdrop-blur-xl transition hover:border-blue-500/40">

            <BrainCircuit
              size={36}
              className="mb-6 text-blue-500"
            />

            <h3 className="mb-6 text-2xl font-semibold">
              AI & Cloud
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Artificial Intelligence",
                "Prompt Engineering",
                "Cloud Fundamentals",
                "IBM AI",
                "Cybersecurity",
                "Agile",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-zinc-800 px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Tools */}

          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 backdrop-blur-xl transition hover:border-blue-500/40">

            <Wrench
              size={36}
              className="mb-6 text-blue-500"
            />

            <h3 className="mb-6 text-2xl font-semibold">
              Tools
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "Docker",
                "ClickUp",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-zinc-800 px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}