"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with modern UI, cart management, and payment integration.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/project-1.png",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "UI/UX Design",
    description:
      "A responsive portfolio website with smooth animations and modern design aesthetics.",
    tags: ["React", "Framer Motion", "CSS"],
    image: "/images/project-2.png",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    category: "Web Application",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization components.",
    tags: ["React", "Recharts", "Tailwind CSS"],
    image: "/images/project-3.png",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Mobile App Landing",
    category: "Landing Page",
    description:
      "High-converting landing page for a mobile app with compelling animations.",
    tags: ["Next.js", "GSAP", "Tailwind CSS"],
    image: "/images/project-4.png",
    github: "#",
    live: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-black py-24">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-3"
          >
            PROJECTS
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase text-white"
            >
              RECENT
              <br />
              PROJECTS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-sm max-w-xs"
            >
              A selection of projects that showcase my skills and experience.
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-[#0f0f0f] border border-white/10 hover:border-primary/30 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-video bg-[#1a1a1a] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a05] to-[#0a0a0a] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary text-2xl font-black">
                        {project.id}
                      </span>
                    </div>
                    <p className="text-white/30 text-sm">{project.category}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-black flex items-center justify-center text-white transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-black flex items-center justify-center text-white transition-all duration-200"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
