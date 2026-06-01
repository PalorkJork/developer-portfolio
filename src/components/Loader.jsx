import { motion } from "framer-motion"

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Chou Sereyvisoth<span className="text-cyan-400">.</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="h-1 mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
        />
      </motion.div>
    </motion.div>
  )
}

export default Loader