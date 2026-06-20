import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

// ── Image imports ──────────────────────────────────────────────────────────
import img1  from "../assets/design/1.png";
import img2  from "../assets/design/2 new.png";
import img4  from "../assets/design/3 neww.png";
import img5  from "../assets/design/Banner_Mockup.png";
import img6  from "../assets/design/Coffee.png";
import img7  from "../assets/design/Food.png";
import img8  from "../assets/design/Liverpool Poster.png";
import img9  from "../assets/design/NEON DEER.png";
import img10 from "../assets/design/PalorkJorkFood.png";
import img11 from "../assets/design/Pchum Ben.png";
import img12 from "../assets/design/Sneaker.png";
import img13 from "../assets/design/Sony.png";
import img14 from "../assets/design/burger final.png";
import img15 from "../assets/design/burger.png";
import img16 from "../assets/design/food-banner.png";
import img18 from "../assets/design/iwatch.png";
import img19 from "../assets/design/jeep.png";
import img20 from "../assets/design/luffy.png";
import img21 from "../assets/design/matcha.png";
import img22 from "../assets/design/new1.png";
import img23 from "../assets/design/photo_2026-06-01_16-33-37.jpg";
import img24 from "../assets/design/sprite.png";

// ── Project data (order set by designer) ──────────────────────────────────
const designProjects = [
  {
    id: 1,
    title: "Orange Juice",
    description: "A product poster for an orange juice brand with a clean layout and vibrant color tones.",
    tools: ["Adobe Photoshop"],
    image: img1,
  },
  {
    id: 2,
    title: "Yellow Sport Car",
    description: "A bold sports car poster with strong contrast and a dynamic composition built around the yellow paint.",
    tools: ["Adobe Photoshop"],
    image: img2,
  },
  {
    id: 7,
    title: "Food Poster",
    description: "A food promotional poster with an appetizing layout designed for social media use.",
    tools: ["Adobe Photoshop"],
    image: img7,
  },
  {
    id: 14,
    title: "Burger Promo",
    description: "A burger promotional graphic with bold typography and rich food imagery.",
    tools: ["Adobe Photoshop"],
    image: img14,
  },
  {
    id: 15,
    title: "Burger Promo",
    description: "Another version of the burger promo with a different layout and price breakdown.",
    tools: ["Adobe Photoshop"],
    image: img15,
  },
  {
    id: 16,
    title: "Food Website Banner",
    description: "A wide-format banner designed for a food website header, optimized for web use.",
    tools: ["Adobe Photoshop"],
    image: img16,
  },
  {
    id: 5,
    title: "Street Banner Mockup",
    description: "An outdoor advertising mockup of a vertical street banner, used to present print campaigns in a real-world setting.",
    tools: ["Adobe Photoshop"],
    image: img5,
  },
  {
    id: 22,
    title: "Christmas Poster",
    description: "A festive Christmas poster with a bold color palette and seasonal graphic elements.",
    tools: ["Adobe Photoshop"],
    image: img22,
  },
  {
    id: 8,
    title: "Liverpool FC Poster",
    description: "A sports poster featuring a Liverpool FC player with dramatic lighting and club branding.",
    tools: ["Adobe Photoshop"],
    image: img8,
  },
  {
    id: 20,
    title: "Luffy Digital Illustration",
    description: "Fan art of Monkey D. Luffy from One Piece — a dynamic pose with vibrant colors and comic-inspired styling.",
    tools: ["Adobe Photoshop"],
    image: img20,
  },
  {
    id: 4,
    title: "Starbucks New Drink",
    description: "A promotional poster for a Starbucks new drink with a clean, on-brand visual style.",
    tools: ["Adobe Photoshop"],
    image: img4,
  },
  {
    id: 21,
    title: "Matcha Drink Poster",
    description: "A product poster for a matcha drink with soft, natural tones and a clean minimal layout.",
    tools: ["Adobe Photoshop"],
    image: img21,
  },
  {
    id: 9,
    title: "Neon Deer Illustration",
    description: "A dark-themed digital illustration of a deer with neon glowing effects, mixing nature with a cyberpunk aesthetic.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    image: img9,
  },
  {
    id: 10,
    title: "PalorkJork Food Promo",
    description: "A social media food promo graphic for a local Cambodian food brand.",
    tools: ["Adobe Photoshop"],
    image: img10,
  },
  {
    id: 24,
    title: "Sprite Poster",
    description: "A Sprite soda ad poster with dynamic liquid effects and the brand's signature green and white colors.",
    tools: ["Adobe Photoshop"],
    image: img24,
  },
  {
    id: 18,
    title: "Apple Watch Poster",
    description: "A clean Apple Watch product poster with a minimal background that puts the focus on the device.",
    tools: ["Adobe Photoshop"],
    image: img18,
  },
  {
    id: 11,
    title: "Pchum Ben Festival Poster",
    description: "A cultural poster for Pchum Ben, a traditional Cambodian festival, with ceremonial colors and motifs.",
    tools: ["Adobe Photoshop"],
    image: img11,
  },
  {
    id: 12,
    title: "Nike Sneaker",
    description: "A sneaker product graphic for Nike with a minimal composition and strong brand presence.",
    tools: ["Adobe Photoshop"],
    image: img12,
  },
  {
    id: 6,
    title: "Coffee Poster",
    description: "A product poster for a local coffee brand with warm tones and a clean layout.",
    tools: ["Adobe Photoshop"],
    image: img6,
  },
  {
    id: 23,
    title: "Space Design",
    description: "A desk space photo edited and arranged as a lifestyle visual for a creative portfolio.",
    tools: ["Adobe Photoshop"],
    image: img23,
  },
  {
    id: 19,
    title: "Jeep Adventure Poster",
    description: "An adventure-themed poster for Jeep with a rugged, outdoor feel and strong motion energy.",
    tools: ["Adobe Photoshop"],
    image: img19,
  },
  {
    id: 13,
    title: "Sony Headphones Poster",
    description: "A product ad poster for Sony headphones with a dark background and polished, high-contrast finish.",
    tools: ["Adobe Photoshop"],
    image: img13,
  },
];

// ── Component ─────────────────────────────────────────────────────────────
function GraphicDesign() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox  = (index) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + designProjects.length) % designProjects.length), []);
  const goNext = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % designProjects.length), []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [lightboxIndex]);

  const activeProject = lightboxIndex !== null ? designProjects[lightboxIndex] : null;

  return (
    <section id="design" className="px-6 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Creative Work" title="Graphic Design" />

        {/* Intro */}
        <div className="mb-12 max-w-xl">
          <p className="text-slate-300 leading-relaxed text-sm">
            Alongside web development, I also do graphic design. I mainly work in{" "}
            <span className="text-white font-medium">Adobe Photoshop</span> — it&apos;s the tool
            I&apos;m most comfortable with. I also use{" "}
            <span className="text-white font-medium">Adobe Illustrator</span> for vector work
            and <span className="text-white font-medium">Figma</span> for UI design.
            Most of my work here is product posters, social media graphics, and digital illustrations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {designProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.07 }}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <FiZoomIn className="text-white text-xl" />
                  <span className="text-white text-sm font-medium">View</span>
                </div>
              </div>

              {/* Card footer */}
              <div className="px-4 py-3 flex items-center justify-between">
                <p className="text-sm font-medium text-white truncate pr-3">
                  {project.title}
                </p>
                <div className="flex gap-1 shrink-0">
                  {project.tools.slice(0, 1).map((tool, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25 whitespace-nowrap"
                    >
                      {tool.replace("Adobe ", "")}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex items-center justify-center px-4"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition"
            >
              <FiX size={18} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition"
            >
              <FiChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition"
            >
              <FiChevronRight size={22} />
            </button>

            {/* Modal panel */}
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.93, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="max-h-[60vh] overflow-hidden flex items-center justify-center bg-slate-950">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full max-h-[60vh] object-contain"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {activeProject.title}
                  </h3>
                  <span className="shrink-0 text-xs text-slate-500 mt-1">
                    {lightboxIndex + 1} / {designProjects.length}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeProject.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/25"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default GraphicDesign;
