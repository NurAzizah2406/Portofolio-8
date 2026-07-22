"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/images/project-1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/images/project-2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/images/project-3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/images/project-4.png",
    link: "#",
  },
  {
    id: 5,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/images/project-5.png",
    link: "#",
  },
  {
    id: 6,
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/images/project-6.png",
    link: "#",
  },
];

// Placeholder gradients for when images are missing
const placeholderGradients = [
  "from-green-900/60 via-gray-900 to-black",
  "from-blue-900/60 via-gray-900 to-black",
  "from-purple-900/60 via-gray-900 to-black",
  "from-orange-900/60 via-gray-900 to-black",
  "from-red-900/60 via-gray-900 to-black",
  "from-teal-900/60 via-gray-900 to-black",
];

export default function PortfolioSection() {
  return (
    <section id="projects" className="bg-black py-24">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-3"
          >
            PORTFOLIO
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black uppercase text-white"
          >
            SELECTED WORK
          </motion.h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#111]">
                {/* Actual image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-50"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Gradient placeholder (shows when no image) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${placeholderGradients[index % placeholderGradients.length]} flex items-center justify-center`}
                >
                  <div className="w-full h-full flex flex-col justify-between p-4 opacity-30">
                    <div className="flex gap-1">
                      <div className="h-2 w-16 bg-white/40 rounded" />
                      <div className="h-2 w-10 bg-primary/60 rounded" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-full bg-white/20 rounded" />
                      <div className="h-1.5 w-3/4 bg-white/20 rounded" />
                      <div className="h-1.5 w-1/2 bg-white/20 rounded" />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* VISIT circular button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.a
                    href={project.link}
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-20 h-20 rounded-full bg-white text-black font-bold text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 shadow-2xl"
                  >
                    VISIT
                  </motion.a>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-white font-bold text-base md:text-lg leading-snug group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
