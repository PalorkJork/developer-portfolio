import { motion } from "framer-motion"

function SectionTitle({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-14"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-12 bg-cyan-400"></div>

        <span className="uppercase tracking-[0.25em] text-xs font-medium text-cyan-400">
          {subtitle}
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>

      <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
    </motion.div>
  )
}

export default SectionTitle