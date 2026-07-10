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
          pointer-events-none so it never blocks clicks on the
          content that sits above it.
      ------------------------------------------------------- */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${backgroundCover})` }}
      ></div>

      {/* ------------------------------------------------------
          Main responsive container
      ------------------------------------------------------- */}
      <div className="relative flex w-full max-w-7xl flex-col items-center gap-16 px-6 pt-32 md:flex-row">
        <HeroLeft />
      </div>

      {/* ------------------------------------------------------
          Ambient blur glows
          IMPORTANT: this div is `absolute inset-0` — it covers
          the ENTIRE section and sits after the content in the
          DOM, so without pointer-events-none it silently
          intercepts every click/hover on the buttons above it,
          even though it's visually invisible (just two blurred
          circles with no background of its own).
      ------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]"></div>
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[180px]"></div>
      </div>
    </section>
  );
}