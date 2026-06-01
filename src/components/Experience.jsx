import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import { FiBriefcase, FiCpu, FiShoppingCart } from "react-icons/fi"

const experiences = [
  {
    year: "2025 - Present",
    title: "Full-Stack Web Developer",
    icon: <FiBriefcase />,
    description:
      "Building full-stack web applications using React.js, Vite, Tailwind CSS, Shadcn UI, Node.js, Express.js, authentication, and PostgreSQL.",
  },
  {
    year: "2025",
    title: "AI Resume Builder SaaS",
    icon: <FiCpu />,
    description:
      "Built an AI-powered SaaS project with dashboard pages, resume generation features, authentication, reusable UI components, and a modern responsive interface.",
  },
  {
    year: "2025",
    title: "Full-stack Ecommerce Project",
    icon: <FiShoppingCart />,
    description:
      "Built an ecommerce application with product pages, cart functionality, user authentication, protected routes, backend APIs, and database integration.",
  },
]

function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="My Journey" title="Experience" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-white/10"></div>

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                <div className={index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)] transition-all duration-300">
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      <div className="text-cyan-400 text-2xl">
                        {item.icon}
                      </div>

                      <span className="text-cyan-400 text-sm">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience