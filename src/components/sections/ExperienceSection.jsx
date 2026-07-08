import { BriefcaseBusiness, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Delicate Courier",
    role: "Junior Technical Operations Intern",
    period: "May 2026 – Present · 3 mos",
    location: "Pretoria, Gauteng, South Africa · Hybrid",
    description:
      "Working as part of the technical operations team, supporting the development, maintenance and day-to-day operation of production systems used in logistics and e-commerce. Monitoring and troubleshooting production systems and APIs, supporting integrations between customer platforms and courier systems, and investigating technical issues affecting business operations. Testing new features, validating system functionality before deployment, and collaborating with developers to identify bugs and improve reliability. Researching business requirements to support software solutions for clients, assisting with technical documentation and process improvement, and contributing to lead research on businesses that could benefit from custom software and automation.",
    skills: [
      "API Integrations",
      "Production Support",
      "System Troubleshooting",
      "Technical Documentation",
    ],
  },
  {
    company: "Future Interns",
    role: "Prompt Engineering Intern",
    period: "Jan 2026 – Feb 2026 · 2 mos",
    location: "Remote",
    description:
      "Selected for the Prompt Engineering Internship under the Future Interns Fellowship Program. Gained hands-on experience in prompt design, optimization, and applied AI workflows through structured, industry-aligned tasks and real-world projects. Responsibilities included designing and testing effective prompts, documenting workflows, maintaining a GitHub repository for task submissions, and applying AI concepts to practical problem-solving scenarios — successfully completing assigned deliverables within strict timelines while adhering to professional and program guidelines.",
    skills: [
      "Prompt Engineering",
      "Artificial Intelligence (AI)",
      "AI Workflows",
      "Technical Documentation",
      "GitHub",
      "Problem Solving",
      "Time Management",
      "AI Concepts",
    ],
  },
  {
    company: "Richfield",
    role: "Final Year Software Project - Project Lead (Academic)",
    period: "Feb 2025 – Nov 2025 · 10 mos",
    location: "Pretoria, Gauteng, South Africa · On-site",
    description:
      "Led a small team during a final-year software development project, coordinating tasks and supporting the delivery of the system from concept through testing. Responsibilities included assisting with project planning, task allocation, and progress tracking, while ensuring clear communication between team members. Actively contributed to development, debugging, and testing phases, and helped resolve technical blockers as they arose — strengthening leadership, collaboration, and problem-solving skills, as well as understanding of Agile principles, team-based development, and structured project execution in an academic setting.",
    skills: [
      "Agile Project Management",
      "Team Leadership",
      "Debugging",
      "Task Planning",
      "Collaboration",
    ],
  },
  {
    company: "Richfield",
    role: "Academic Tutor",
    period: "Mar 2025 – Oct 2025 · 8 mos",
    location: "Pretoria, Gauteng, South Africa · On-site",
    description:
      "Tutored students in Python and Web Technologies, covering syntax, loops, functions, and object-oriented programming (OOP). Developed and delivered hands-on coding exercises and mini-projects to enhance understanding of programming and web development concepts. Provided academic support in Information Systems, including practical guidance on Microsoft Word, Excel, and PowerPoint. Assisted students with assignments and coding challenges, helping them build confidence and improve their problem-solving skills, while fostering a supportive and engaging learning environment.",
    skills: [
      "Python (Programming Language)",
      "Information Systems",
      "Web Technologies",
      "Technical Mentoring",
      "Communication",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#131313] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Experience
        </p>

        <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl">
          Professional Journey
        </h2>

        <p className="mx-auto mb-20 max-w-3xl text-center text-lg text-zinc-400">
          My professional experience has allowed me to apply software
          development principles in real business environments while working
          with technical teams and production systems.
        </p>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-6 top-0 h-full w-[2px] bg-blue-500/30"></div>

          {experiences.map((job, index) => (

            <div
              key={`${job.company}-${job.role}-${index}`}
              className="relative mb-12 pl-20"
            >

              {/* Timeline Dot */}

              <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">

                <BriefcaseBusiness size={22} />

              </div>

              {/* Card */}

              <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 backdrop-blur-xl">

                <h3 className="text-2xl font-bold">
                  {job.role}
                </h3>

                <h4 className="mt-2 text-blue-400">
                  {job.company}
                </h4>

                <div className="mt-4 flex flex-wrap gap-6 text-sm text-zinc-400">

                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {job.period}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {job.location}
                  </span>

                </div>

                <p className="mt-6 leading-8 text-zinc-400">
                  {job.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {job.skills.map((skill) => (

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

          ))}
          {/* Timeline start marker — caps the bottom of the line */}
            <div className="absolute left-6 bottom-0 flex h-4 w-4 -translate-x-[7px] items-center justify-center rounded-full border-2 border-blue-500 bg-[#131313]">
            </div>

        </div>

      </div>
    </section>
  );
}