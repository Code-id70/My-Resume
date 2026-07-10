import { ExternalLink } from "lucide-react";
import GithubIcon from "../icons/GithubIcon"; // adjust relative path to match your folder structure
import doctorImage from "../../assets/images/projects/doctor.png";
import richfieldImage from "../../assets/images/projects/yana_shot.png";
import studentPortalImage from "../../assets/images/projects/youtube.png";
import rpsImage from "../../assets/images/projects/rock-paper-scissor.png";

const projects = [
  {
    title: "Doctor Appointment System",
    category: "Mobile App",
    description:
      "Cross-platform healthcare appointment booking application.",
    tech: ["React Native", "Expo", "Firebase"],
    image: doctorImage,
  },
  {
    title: "Student Connect",
    category: "Web Platform",
    description:
      "Student engagement and collaboration platform.",
    tech: ["React", "Node.js", "MySQL"],
    image: richfieldImage,
  },
  {
    title: "Rock Paper Scissors",
    category: "JavaScript",
    description:
      "Interactive browser game built with JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: rpsImage,
  },
  {
    title: "Student Portal",
    category: "Java",
    description:
      "University management portal with authentication using Java, Servlets, and MySQL.",
    tech: ["Java", "Servlets", "MySQL"],
    image: studentPortalImage,
  },
];
 
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#131313] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Other Projects
        </p>
        <p className="mx-auto mb-20 max-w-3xl text-center text-lg text-zinc-400">
          A collection of applications demonstrating my experience in
          frontend, backend and mobile development.
        </p>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-zinc-900/70 p-8 transition hover:border-blue-500/40 hover:-translate-y-2"
            >
              <div className="mb-6 h-48 overflow-hidden rounded-xl border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <p className="mb-2 text-sm uppercase tracking-wider text-blue-400">
                {project.category}
              </p>
              <h3 className="mb-4 text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="mb-6 text-zinc-400">
                {project.description}
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-zinc-800 px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-white">
                  <GithubIcon size={18} />
                  GitHub
                </button>
                <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 transition hover:bg-blue-700">
                  <ExternalLink size={18} />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}