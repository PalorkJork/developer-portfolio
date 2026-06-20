import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import ecommerceImg from "../assets/ecommerce.webp";
import resumeImg from "../assets/resume-builder.webp";

import ecommerceHome from "../assets/ecommerce-home.webp";
import ecommerceCategory from "../assets/ecommerce-category.webp";
import ecommerceProduct from "../assets/ecommerce-product.webp";
import ecommerceCart from "../assets/ecommerce-cart.webp";
import ecommerceOrder from "../assets/ecommerce-order.webp";
import ecommerceDashboard from "../assets/ecommerce-dashboard.webp";
import ecommerceDarkMode from "../assets/ecommerce-dark-mode.webp";

import resumeHome from "../assets/resume-home.webp";
import resumeLogin from "../assets/resume-login.webp";
import resumeEdit from "../assets/resume-edit.webp";
import resumePreview from "../assets/resume-preview.webp";
import resumeDashboard from "../assets/resume-dashboard.webp";

const projects = [
  {
    title: "Full-stack Ecommerce",
    description:
      "A full-stack ecommerce application with product browsing, cart functionality, user authentication, protected routes, and backend APIs.",
    longDescription:
      "This ecommerce project was built to practice real-world full-stack development. It includes a modern frontend, backend API structure, authentication flow, protected pages, and database integration.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    features: [
      "Product browsing",
      "Shopping cart functionality",
      "User authentication",
      "Protected routes",
      "Backend API integration",
      "Responsive UI",
    ],
    image: ecommerceImg,
    screenshots: [
      { title: "Home Page", image: ecommerceHome },
      { title: "Category Page", image: ecommerceCategory },
      { title: "Product Details", image: ecommerceProduct },
      { title: "Shopping Cart", image: ecommerceCart },
      { title: "Orders", image: ecommerceOrder },
      { title: "Dashboard", image: ecommerceDashboard },
      { title: "Dark Mode", image: ecommerceDarkMode },
    ],
    github: "https://github.com/YOUR_GITHUB_USERNAME/ecommerce",
  },
  {
    title: "AI Resume Builder SaaS",
    description:
      "A SaaS resume builder that helps users create professional resumes with modern UI, authentication, dashboard pages, and AI-assisted resume content.",
    longDescription:
      "This SaaS project focuses on building a professional AI-powered application with reusable UI components, authentication, dashboard pages, and a clean user experience for generating resume content.",
    tech: [
      "React.js",
      "Vite",
      "Shadcn UI",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    features: [
      "AI-assisted resume content",
      "Dashboard pages",
      "Authentication flow",
      "Reusable UI components",
      "Responsive design",
      "Modern SaaS layout",
    ],
    image: resumeImg,
    screenshots: [
      { title: "Landing Page", image: resumeHome },
      { title: "Login", image: resumeLogin },
      { title: "Resume Editor", image: resumeEdit },
      { title: "Resume Preview", image: resumePreview },
      { title: "Dashboard", image: resumeDashboard },
    ],
    github: "https://github.com/YOUR_GITHUB_USERNAME/ai-resume-builder",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="px-6 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="My Work" title="Featured Projects" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                hover:border-cyan-400/50
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent"></div>

                <span className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                  Featured Project
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="min-w-32 border border-cyan-400 text-cyan-400 px-5 py-2.5 rounded-xl font-medium hover:bg-cyan-400 hover:text-slate-950 transition"
                  >
                    View Details
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-32 flex items-center justify-center gap-2 border border-white/15 px-5 py-2.5 rounded-xl font-medium hover:bg-white hover:text-slate-950 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-white/10 shadow-2xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <FiX />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-3xl"
              loading="lazy"
              decoding="async"
            />

            <div className="p-8">
              <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                Featured Project
              </span>

              <h3 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                {selectedProject.longDescription}
              </p>

              <h4 className="text-xl font-semibold mb-4">
                Project Screenshots
              </h4>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {selectedProject.screenshots.map((shot, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                  >
                    <img
                      src={shot.image}
                      alt={shot.title}
                      onClick={() => setActiveImage(shot)}
                      className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="p-3">
                      <p className="text-sm text-slate-300">{shot.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-semibold mb-3">Key Features</h4>

              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                {selectedProject.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-slate-300 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-32 flex items-center justify-center gap-2 border border-white/15 px-5 py-2.5 rounded-xl font-medium hover:bg-white hover:text-slate-950 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-[120] flex items-center justify-center px-6 bg-black/80 backdrop-blur-sm"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <FiX />
          </button>

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-w-6xl w-full"
          >
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full max-h-[85vh] object-contain rounded-2xl border border-white/10"
              loading="lazy"
              decoding="async"
            />

            <p className="text-center text-slate-300 mt-4">
              {activeImage.title}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Projects;
