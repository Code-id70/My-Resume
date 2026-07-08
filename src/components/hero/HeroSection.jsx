import HeroLeft from "./HeroLeft";
import backgroundCover from "../../assets/images/backgroundCover.jpg";

// ============================================================
// HeroSection
// ------------------------------------------------------------
// Top-level layout shell for the Hero area only.
// Responsibilities:
//   - Section wrapper (background color, min-height, overflow)
//   - Background cover image
//   - Ambient blur/glow effects
//   - Main responsive container (splits into left/right columns)
// All actual content lives in <HeroLeft /> and <HeroRight />.
// ============================================================
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#131313] text-white flex items-center"
    >
      {/* ------------------------------------------------------
          Background cover image
          NOTE: this image was imported in your original file
          but never rendered anywhere. I've wired it in here as
          a low-opacity full-bleed background layer since your
          spec explicitly lists "Contains the background image"
          under HeroSection's responsibilities. It sits behind
          everything else (placed first in the DOM = lowest in
          the stacking order). If you don't want it visible,
          just delete this block or drop the opacity to 0.
      ------------------------------------------------------- */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${backgroundCover})` }}
      ></div>

      {/* ------------------------------------------------------
          Main responsive container
          Two columns on desktop (md:flex-row), stacked on mobile.
          Same position/order as your original markup so stacking
          behavior relative to the blur glows below is unchanged.
      ------------------------------------------------------- */}
      <div className="relative flex w-full max-w-7xl flex-col items-center gap-16 px-6 pt-32 md:flex-row">
        <HeroLeft />
      </div>

      {/* ------------------------------------------------------
          Ambient blur glows
          Purely decorative, unchanged from your original code.
      ------------------------------------------------------- */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]"></div>
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[180px]"></div>
      </div>
    </section>
  );
}