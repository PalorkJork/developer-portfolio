import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold">
            Chou Sereyvisoth<span className="text-cyan-400">.</span>
          </h3>

          <p className="text-slate-400 mt-2 text-sm">
            Full-Stack Developer
          </p>
        </div>

        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/PalorkJork"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/chou-sereyvisoth-66ba3a3b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Chou Sereyvisoth. Built with React, Vite &
        Tailwind CSS.
      </div>
    </footer>
  )
}

export default Footer