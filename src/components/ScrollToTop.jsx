import { useEffect, useState } from "react"
import { FiArrowUp } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-12
            h-12
            rounded-full
            bg-cyan-400
            text-slate-950
            flex
            items-center
            justify-center
            shadow-lg
            hover:bg-cyan-300
            transition
          "
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop