import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FiDownload, FiArrowRight } from "react-icons/fi"

import profileImg from "../assets/chousereyvisoth.png"

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-5 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm">
              Available for internship & freelance work
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-slate-300 mb-3"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Chou Sereyvisoth<span className="text-cyan-400">.</span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "React.js Developer",
              2000,
              "Node.js Developer",
              2000,
              "PostgreSQL Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 block"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-xl text-slate-300 leading-relaxed mb-8"
          >
            I build clean, responsive, and practical full-stack web applications
            using React.js, Vite, Tailwind CSS, Shadcn UI, Node.js,
            Express.js, Authentication, and PostgreSQL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="/Chou-Sereyvisoth-Resume.pdf"
target="_blank"
rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/15 px-6 py-3 rounded-xl hover:bg-white hover:text-slate-950 transition"
            >
              <FiDownload />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="flex items-center gap-5"
          >
            <p className="text-sm text-slate-400">Find me on</p>

            <a
              href="https://github.com/PalorkJork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-400 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/chou-sereyvisoth-66ba3a3b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-4 bg-cyan-400/20 rounded-[2rem] blur-3xl"></div>

          <div className="relative rounded-[2rem] p-3 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            <img
              src={profileImg}
              alt="Chou Sereyvisoth"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-[1.5rem]"
            />

            <div className="absolute -bottom-5 -left-5 bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-2xl font-bold text-cyan-400">2+</p>
              <p className="text-sm text-slate-300">Projects Built</p>
            </div>

            <div className="absolute -top-5 -right-5 bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-sm text-slate-300">React + Node.js</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero