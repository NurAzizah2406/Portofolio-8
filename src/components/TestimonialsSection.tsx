"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Thom Haye",
    role: "Project Manager",
    company: "Upwork",
    companyColor: "#6fda44",
    stars: 5,
    quote:
      "“Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!”",
  },
  {
    id: 2,
    name: "Emily Carter",
    role: "Head of Product",
    company: "Trello",
    companyColor: "#0079bf",
    stars: 5,
    quote:
      "“An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!”",
  },
  {
    id: 3,
    name: "Sarah Lee",
    role: "Engineering Manager",
    company: "Zapier",
    companyColor: "#ff4a00",
    stars: 5,
    quote:
      "“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Lead Developer",
    company: "Zoom",
    companyColor: "#2d8cff",
    stars: 5,
    quote:
      "A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!",
  },
];

function CompanyBadge({ name, color }: { name: string; color: string }) {
  if (name === "Upwork") {
    return (
      <span className="font-bold text-xl tracking-tight" style={{ color }}>
        upwork
      </span>
    );
  }
  if (name === "Trello") {
    return (
      <span className="font-bold text-lg flex items-center gap-1.5" style={{ color }}>
        <span className="inline-block w-3.5 h-3.5 bg-[#0079bf] rounded-sm" />
        Trello
      </span>
    );
  }
  if (name === "Zapier") {
    return (
      <span className="font-bold text-lg flex items-center gap-1" style={{ color }}>
        <span className="text-[#ff4a00]">✳</span> zapier
      </span>
    );
  }
  if (name === "Zoom") {
    return (
      <span className="font-bold text-xl italic" style={{ color }}>
        zoom
      </span>
    );
  }
  return <span style={{ color }}>{name}</span>;
}

export default function TestimonialsSection() {
  const [activePage, setActivePage] = useState(0);

  return (
    <section id="testimonials" className="bg-black py-24">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs md:text-sm font-semibold tracking-widest uppercase mb-3"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight"
          >
            PEOPLE SAYS ABOUT ME
          </motion.h2>
        </div>

        {/* 2x2 Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Header: Name/Role & Company Logo */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold text-base md:text-lg">
                      {item.name}
                    </h3>
                    <p className="text-white/40 text-xs md:text-sm mt-0.5">
                      {item.role}
                    </p>
                  </div>
                  <CompanyBadge name={item.company} color={item.companyColor} />
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light">
                  {item.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex justify-center gap-3 items-center">
          <button
            onClick={() => setActivePage(0)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              activePage === 0
                ? "border-white/20 text-white/40 bg-white/5"
                : "border-primary text-primary hover:bg-primary/10"
            }`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setActivePage(1)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              activePage === 1
                ? "border-primary bg-primary text-black"
                : "border-primary/50 text-primary hover:bg-primary/10"
            }`}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
