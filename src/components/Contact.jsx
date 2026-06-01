import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"

function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Get In Touch" title="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Let&apos;s build something together
            </h3>

            <p className="text-slate-300 leading-relaxed mb-8">
              I am open to internship opportunities, freelance projects, and
              collaboration. Feel free to reach out if you want to work
              together.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:chousereyvisoth@gmail.com"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
              >
                <span className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                  <FaEnvelope />
                </span>
                chousereyvisoth@gmail.com
              </a>

              <a
                href="https://github.com/PalorkJork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
              >
                <span className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                  <FaGithub />
                </span>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/chou-sereyvisoth-66ba3a3b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
              >
                <span className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                  <FaLinkedin />
                </span>
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white outline-none focus:border-cyan-400 transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white outline-none focus:border-cyan-400 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
            >
              Send Message
              <FiSend className="group-hover:translate-x-1 transition" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact