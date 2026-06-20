import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import { FiCode, FiServer, FiDatabase, FiTool, FiPenTool } from "react-icons/fi"

const highlights = [
  {
    icon: <FiCode />,
    title: "Frontend",
    text: "React.js, Vite, Tailwind CSS, Shadcn UI",
  },
  {
    icon: <FiServer />,
    title: "Backend",
    text: "Node.js, Express.js, Authentication",
  },
  {
    icon: <FiDatabase />,
    title: "Database",
    text: "PostgreSQL",
  },
  {
    icon: <FiTool />,
    title: "Tools",
    text: "Git, GitHub",
  },
  {
    icon: <FiPenTool />,
    title: "Design",
    text: "Adobe Photoshop, Adobe Illustrator, Figma",
  },
]

function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Who I Am" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5 text-slate-300 leading-relaxed"
          >
            <p>
              I am a full-stack developer who enjoys building modern,
              responsive, and practical web applications.
            </p>

            <p>
              I work with React.js, Vite, Tailwind CSS, Shadcn UI, Node.js,
              Express.js, authentication, and PostgreSQL to build complete web
              applications from frontend to backend.
            </p>

            <p>
              My goal is to create clean, user-friendly products that solve
              real problems and provide a smooth user experience.
            </p>

            <p>
              Outside of development, I also do graphic design — mostly product
              posters, social media graphics, and digital illustrations. I work
              mainly in Adobe Photoshop, with Illustrator for vector work and
              Figma for UI design.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-6
                  hover:border-cyan-400/50
                  hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
                  transition-all
                  duration-300
                "
              >
                <div className="text-3xl text-cyan-400 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About