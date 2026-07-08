// ============================================================
// FloatingCards
// ------------------------------------------------------------
// Decorative floating cards that sit above the main profile
// card (desktop only — hidden below the `lg` breakpoint).
// Currently contains:
//   - "Current Focus" card
//   - "IBM Certified" card
// Add future floating cards inside this same component so
// HeroRight.jsx doesn't need to change.
// ============================================================
export default function FloatingCards() {
  return (
    <>

      {/* --------------------------------------------------
          Floating Card 1 — Current Focus
      --------------------------------------------------- */}
      <div className="absolute -left-10 top-10 z-20 hidden rounded-2xl border border-white/10 bg-zinc-900/80 px-5 py-4 shadow-2xl backdrop-blur-xl lg:block">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Current Focus
        </p>
        <h3 className="mt-2 font-semibold">
          AI & SaaS
        </h3>
      </div>

      {/* --------------------------------------------------
          Floating Card 2 — IBM Certified
      --------------------------------------------------- */}
      <div className="absolute -right-12 top-28 z-20 hidden rounded-2xl border border-white/10 bg-zinc-900/80 px-5 py-4 shadow-xl backdrop-blur-xl lg:block">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          IBM
        </p>
        <h3 className="mt-2 font-semibold">
          Certified
        </h3>
      </div>

    </>
  );
}