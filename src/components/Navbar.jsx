import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id)

        if (section) {
          const sectionTop = section.offsetTop - 120
          const sectionHeight = section.offsetHeight

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            setActiveSection(link.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-6">
      <nav className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/10 shadow-lg">
        <a href="#" className="text-xl font-bold text-white">
          Chou Sereyvisoth<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-2 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={
                activeSection === link.id
                  ? "px-4 py-2 rounded-xl bg-cyan-400/10 text-cyan-400"
                  : "px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"
              }
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white text-2xl flex items-center justify-center"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </nav>

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="max-w-6xl mx-auto mt-3 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-white/10 md:hidden"
    >
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={
              activeSection === link.id
                ? "px-4 py-3 rounded-xl bg-cyan-400/10 text-cyan-400"
                : "px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5"
            }
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  )
}

export default Navbar