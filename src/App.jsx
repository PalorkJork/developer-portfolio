import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import GraphicDesign from "./components/GraphicDesign"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import CursorGlow from "./components/CursorGlow"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <CursorGlow />

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_35%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <GraphicDesign />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default App
