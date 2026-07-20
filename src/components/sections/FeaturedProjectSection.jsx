import { ExternalLink } from "lucide-react";
import GithubIcon from "../icons/GithubIcon"; // adjust relative path to match your folder structure
import doctorImage from "../../assets/images/projects/doctor.png";
import studentConnect from "../../assets/images/projects/student-connect.png";
import taskFlow from "../../assets/images/projects/todo-list.png";
import rpsImage from "../../assets/images/projects/rock-paper-scissor.png";

const projects = [
  {
    title: "Doctor Appointment System (Desktop)",
    category: "Desktop Application",
    description: "A desktop healthcare management system that streamlines appointment scheduling between patients and healthcare providers. The system enables efficient booking, patient record management, and appointment tracking, improving administrative workflows and reducing manual processes.",
    tech: ["Java", "Java Swing", "MySQL", "Servlets"],
    image: doctorImage,
    githubLink: "https://github.com/Code-id70/Doctor-Appointment-Booking-System",

  },
  {
    title: "Student Connect (Web)",
    category: "Web Platform",
    description: "A web-based student engagement platform designed to help students connect, collaborate, and access academic resources. The application provides a centralized space for communication, information sharing, and community interaction within an educational environment.",
    tech: ["React", "Node.js", "MySQL"],
    image: studentConnect,
    githubLink: "https://github.com/Code-id70/Student-Connect-Platform",
    demoLink: "https://studentsconnectplatform.netlify.app/",
  },
  {
    title: "Rock Paper Scissors (Web)",
    category: "Web Platform",
    description: "An interactive browser-based game built to demonstrate JavaScript fundamentals, including DOM manipulation, game logic, event handling, and responsive user interface design. Designed with a clean and engaging user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: rpsImage,
    githubLink: "https://github.com/Code-id70/Rock-Paper-Scissor",
    demoLink: "https://code-id70.github.io/Rock-Paper-Scissor/",
  },
  {
    title: "Task Flow Manager",
    category: "Web Platform",
    description:
      "A modern task management application that helps users organize daily activities, track progress, and stay productive. Features include task creation, completion tracking, progress indicators, and a clean, responsive user interface across web and mobile devices.",
    tech: ["HTML", "JavaSCript", "CSS"],
    image: taskFlow,
    githubLink: "https://github.com/Code-id70/Task-Flow-Manager",
    demoLink: "https://code-id70.github.io/Task-Flow-Manager/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#131313] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Other Projects
        </p>
        <p className="mx-auto mb-20 max-w-3xl text-center text-lg text-zinc-400">
          A collection of applications demonstrating my experience in frontend,
          backend and mobile development.
        </p>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-zinc-900/70 p-8 transition hover:border-blue-500/40 hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain bg-zinc-900 transition duration-500 hover:scale-105"
                />
              </div>
              <p className="mb-2 text-sm uppercase tracking-wider text-blue-400">
                {project.category}
              </p>
              <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-6 text-zinc-400">{project.description}</p>
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
                <a href={project.githubLink}
                target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-white">
                  <GithubIcon size={18} />
                  GitHub
                </a>
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 transition hover:bg-blue-700">
                    <ExternalLink size={18} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <a
          href="https://github.com/Code-id70"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-12 flex w-fit items-center gap-2 rounded-[7px] border border-white bg-transparent px-6 py-3 text-white transition hover:bg-white/10"
        >
          More Projects
        </a>
      </div>
    </section>
  );
}

