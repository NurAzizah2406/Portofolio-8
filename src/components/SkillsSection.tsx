"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const skillBars = [
  { name: "React JS", percentage: 50 },
  { name: "HTML", percentage: 80 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "Next.js", percentage: 100 },
  { name: "Docker", percentage: 70 },
  { name: "Javascript", percentage: 90 },
];

const techIcons = [
  { name: "JavaScript", src: "/icons/property-1=javascript.png", bg: "#f7df1e" },
  { name: "CSS3", src: "/icons/property-1=css.png", bg: "#2965f1" },
  { name: "HTML5", src: "/icons/property-1=html.png", bg: "#e34c26" },
  { name: "Node.js", src: "/icons/property-1=next-js.png", bg: "#f7df1e" }, // Using Next.js icon as placeholder for Node
  { name: "MongoDB", src: "/icons/property-1=mongo-db.png", bg: "#13aa52" },
  { name: "React", src: "/icons/property-1=react-js.png", bg: "#00d8ff" },
  { name: "TypeScript", src: "/icons/property-1=typescript.png", bg: "#3178c6" },
  { name: "Docker", src: "/icons/property-1=docker.png", bg: "#2496ed" },
];

function SkillBar({
  name,
  percentage,
  delay,
}: {
  name: string;
  percentage: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center gap-4">
        {/* Bar */}
        <div className="relative flex-1">
          <div className="relative h-10 bg-[#1a1a1a] rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
              transition={{ duration: 1.2, delay, ease: "easeOut" }}
              className="absolute left-0 top-0 h-full rounded-full flex items-center pl-4"
              style={{
                background:
                  "linear-gradient(90deg, #1a3a05 0%, #2d6e0a 30%, #4d9e10 60%, #84cc16 100%)",
              }}
            >
              <span className="text-white text-xs font-medium whitespace-nowrap">
                {name}
              </span>
            </motion.div>
          </div>
        </div>
        {/* Percentage */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5 }}
          className="text-white/60 text-sm font-mono w-12 text-right"
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-black py-24 overflow-hidden">
      {/* About description */}
      <div className="container-max section-padding">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-20 leading-relaxed"
        >
          I love turning designs into interactive, high-performance websites.
          With a keen eye for detail and a deep understanding of frontend
          technologies, I create smooth and visually appealing user experiences.
        </motion.p>

        {/* Checkerboard decoration */}
        <div className="relative mb-16">
          <div className="absolute -left-6 top-0 flex flex-col gap-1 opacity-70">
            <div className="flex gap-1">
              <div className="w-6 h-6 bg-primary/80" />
              <div className="w-6 h-6 bg-transparent" />
            </div>
            <div className="flex gap-1">
              <div className="w-6 h-6 bg-transparent" />
              <div className="w-6 h-6 bg-primary/50" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Skills Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-xs font-semibold tracking-widest uppercase mb-3"
            >
              SKILLS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black uppercase leading-tight text-white mb-10"
            >
              SKILLS THAT BRING
              <br />
              IDEAS TO LIFE
            </motion.h2>

            {/* Tech Icons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-4 gap-4"
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center overflow-hidden group hover:border-primary/40 transition-all duration-300">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-xs font-bold text-white/40">${tech.name.slice(0, 2)}</span>`;
                        }
                      }}
                    />
                  </div>
                  <span className="text-white/40 text-xs text-center hidden">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Skill Bars */}
          <div>
            {skillBars.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
