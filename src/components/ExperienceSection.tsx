"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Upwork",
    companyLogo: "/icons/upwork.svg",
    companyColor: "#6fda44",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences",
    side: "right",
  },
  {
    id: 2,
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Trello",
    companyLogo: "/icons/trello.svg",
    companyColor: "#0079bf",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences",
    side: "left",
  },
  {
    id: 3,
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Zoom",
    companyLogo: "/icons/zoom.svg",
    companyColor: "#2d8cff",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences",
    side: "right",
  },
  {
    id: 4,
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Zapier",
    companyLogo: "/icons/zapier.svg",
    companyColor: "#ff4a00",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences",
    side: "left",
  },
];

// Company name styled text components
function CompanyName({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  // Special styling per company
  if (name === "Upwork") {
    return (
      <span className="font-bold text-xl" style={{ color }}>
        upwork
      </span>
    );
  }
  if (name === "Trello") {
    return (
      <span className="font-bold text-xl flex items-center gap-1" style={{ color }}>
        <span className="inline-block w-4 h-4 bg-[#0079bf] rounded-sm" />
        Trello
      </span>
    );
  }
  if (name === "Zoom") {
    return (
      <span className="font-bold text-2xl italic" style={{ color }}>
        zoom
      </span>
    );
  }
  if (name === "Zapier") {
    return (
      <span className="font-bold text-xl flex items-center gap-1" style={{ color }}>
        <span className="text-[#ff4a00]">✳</span> zapier
      </span>
    );
  }
  return <span style={{ color }}>{name}</span>;
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-black py-24">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
          >
            EXPERIENCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black uppercase text-white"
          >
            PROFESIONAL WORK
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px timeline-line hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {/* Left card OR spacer */}
                {exp.side === "left" ? (
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-[#0f0f0f] border border-white/10 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 card-hover"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-white/40 text-xs mb-1">{exp.period}</p>
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      </div>
                      <CompanyName name={exp.company} color={exp.companyColor} />
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                ) : (
                  <div />
                )}

                {/* Center number */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex z-10">
                  <div className="w-10 h-10 rounded-full bg-black border-2 border-white/20 flex items-center justify-center text-white/60 text-sm font-mono">
                    {exp.id}
                  </div>
                </div>

                {/* Right card OR spacer */}
                {exp.side === "right" ? (
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-[#0f0f0f] border border-white/10 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 card-hover"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-white/40 text-xs mb-1">{exp.period}</p>
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      </div>
                      <CompanyName name={exp.company} color={exp.companyColor} />
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                ) : (
                  <div />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
