// ============================================================
// HeroStats
// ------------------------------------------------------------
// Stats + skills block shown inside the main profile card.
// Contains:
//   - "Projects Built" stat
//   - "Certifications" stat
//   - "Current Stack" skill chips
// ============================================================
export default function HeroStats() {

  // List of current tech stack skills, rendered as chips below.
  const skills = ["React", "Java", "Python", "Node.js", "SQL", "AI"];

  return (
    <>

      {/* --------------------------------------------------
          Stats — Projects Built / Certifications
      --------------------------------------------------- */}
      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-zinc-800/70 p-5">
          <h2 className="text-3xl font-bold text-blue-400">
            10+
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Projects Built
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-800/70 p-5">
          <h2 className="text-3xl font-bold text-blue-400">
            8+
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Certifications
          </p>
        </div>

      </div>

      {/* --------------------------------------------------
          Skills — Current Stack chips
      --------------------------------------------------- */}
      <div className="mt-8">

        <h4 className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
          Current Stack
        </h4>

        <div className="flex flex-wrap gap-3">
          {skills.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-zinc-800 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

    </>
  );
}