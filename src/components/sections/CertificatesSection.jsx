import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "IBM Artificial Intelligence Fundamentals",
    issuer: "IBM",
  },
  {
    title: "IBM Cybersecurity Fundamentals",
    issuer: "IBM",
  },
  {
    title: "IBM Project Management Fundamentals",
    issuer: "IBM",
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="bg-[#131313] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Certifications
        </p>

        <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl">
          Continuous Learning
        </h2>

        <p className="mx-auto mb-20 max-w-3xl text-center text-lg text-zinc-400">
          I believe great software engineers never stop learning.
          These certifications reflect my commitment to improving my
          technical and professional skills.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {certificates.map((certificate) => (

            <div
              key={certificate.title}
              className="rounded-3xl border border-white/10 bg-zinc-900/70 p-5 transition hover:border-blue-500/40 hover:-translate-y-2"
            >

              <Award
                className="mb-6 text-blue-500"
                size={40}
              />

              <p className="mb-2 text-sm uppercase tracking-wider text-blue-400">
                {certificate.issuer}
              </p>

              <h3 className="mb-4 text-xl font-semibold">
                {certificate.title}
              </h3>

              <button className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-white">

                <ExternalLink size={18} />

                View Certificate

              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}