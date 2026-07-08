import FloatingCards from "./FloatingCards";
import HeroStats from "./HeroStats";

// ============================================================
// HeroRight
// ------------------------------------------------------------
// Right column of the Hero section. Handles:
//   - The stacking-context wrapper (glow + floating cards + card)
//   - The ambient glow behind the card
//   - The main profile card shell (avatar, name, title)
//   - Composes <FloatingCards /> and <HeroStats />
// ============================================================
export default function HeroRight() {
  return (
    <div className="flex flex-1 justify-center">

      {/* --------------------------------------------------
          Stacking context for glow + floating cards + main card
      --------------------------------------------------- */}
      <div className="relative">

        {/* ----------------------------------------------
            Glow — sits at the very back
        ----------------------------------------------- */}
        <div className="absolute -inset-4 z-0 rounded-3xl bg-blue-500/20 blur-3xl"></div>

        {/* ----------------------------------------------
            Floating cards — above everything
        ----------------------------------------------- */}
        <FloatingCards />

        {/* ----------------------------------------------
            Main Card — sits between the glow and the floaters
        ----------------------------------------------- */}
        <div className="relative z-10 w-[360px] rounded-3xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur-xl">

          {/* Profile */}
          <div className="mb-8 flex flex-col items-center">

            <div className="mb-5 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-5xl font-bold">
              WT
            </div>

            <h3 className="text-2xl font-bold">
              Wanga Thagwana
            </h3>

            <p className="mt-2 text-zinc-400">
              Junior Software Developer
            </p>

          </div>

          {/* Stats + Skills */}
          <HeroStats />

        </div>

      </div>

    </div>
  );
}