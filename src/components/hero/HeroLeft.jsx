import { ArrowRight, Download } from "lucide-react";

// ============================================================
// HeroLeft
// ------------------------------------------------------------
// Left column of the Hero section. Purely presentational —
// no state, no logic. Contains:
//   - Availability badge
//   - Greeting text
//   - Name heading
//   - Headline/subheading
//   - CTA buttons (View Projects, Download CV)
// ============================================================
export default function HeroLeft() {
  return (
    <div className="flex-1">

      {/* --------------------------------------------------
          Availability badge
      --------------------------------------------------- */}
      <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">
        <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
        <span className="text-sm text-blue-300">
          Available for opportunities
        </span>
      </div>
      {/* --------------------------------------------------
          Name
      --------------------------------------------------- */}
      <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
        Wanga
        <br />
        <span className="text-blue-500">
          Thagwana
        </span>
      </h1>

      {/* --------------------------------------------------
          Headline
      --------------------------------------------------- */}
      <h2 className="mb-6 max-w-xl text-2xl font-semibold text-zinc-200">
        Junior Software Developer passionate about building AI-powered applications, scalable SaaS platforms, and business software that solves real-world problems.
      </h2>

      {/* --------------------------------------------------
          CTA buttons
      --------------------------------------------------- */}
      <div className="flex flex-wrap gap-4">

        <a
          href="https://github.com/Code-id70"
          target="_blank"
          className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#1a1a1a] px-6 py-4 font-semibold transition hover:bg-blue-700"
        >
          View Projects
          <ArrowRight size={18} />
        </a>

        <a
          href="/W_THAGWANA_CV.pdf"
          download
          className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-700 px-6 py-4 transition hover:border-white"
        >
          <Download size={18} />
          Download CV
        </a>

      </div>

    </div>
  );
}