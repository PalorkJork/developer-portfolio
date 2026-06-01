import { useEffect, useState } from "react"

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        background: `radial-gradient(500px at ${position.x}px ${position.y}px, rgba(34,211,238,0.08), transparent 80%)`,
      }}
    />
  )
}

export default CursorGlow