import SectionTitle from "./SectionTitle"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiPostgresql,
  SiShadcnui,
} from "react-icons/si"

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Shadcn UI", icon: <SiShadcnui /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Authentication", icon: "🔐" },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
]

function Skills() {
  const repeatedSkills = [...skills, ...skills]

  return (
    <section id="skills" className="px-6 py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="What I Use" title="Skills & Technologies" />

        <div className="relative">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent"></div>

          <div className="overflow-hidden">
            <div className="flex gap-5 animate-scroll w-max">
              {repeatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="
                    min-w-[160px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    p-6
                    rounded-3xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    hover:border-cyan-400/50
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                    transition-all
                    duration-300
                  "
                >
                  <div className="text-4xl text-cyan-400">
                    {skill.icon}
                  </div>

                  <span className="text-slate-300 text-sm">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills