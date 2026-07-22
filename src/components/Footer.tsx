"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const navLinks = ["Home", "About", "Skills", "Projects", "FAQ", "Contact"];

const techMarquee = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "MongoDB",
  "Docker",
  "Figma",
  "Git",
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "MongoDB",
  "Docker",
  "Figma",
  "Git",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/5">
      {/* Tech Marquee */}
      <div className="py-8 border-b border-white/5 overflow-hidden">
        <div className="flex animate-marquee-scroll whitespace-nowrap">
          {techMarquee.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-6 mx-6 text-sm font-medium text-white/20"
            >
              <span className="text-primary text-lg">✦</span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-lg tracking-wide">
                Edwin Anderson.
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Frontend Developer passionate about building fast, interactive,
              and visually stunning web experiences.
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary hover:text-black border border-white/10 hover:border-primary flex items-center justify-center text-white/50 transition-all duration-300"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/40 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/40">
              <p>edwin.anderson@email.com</p>
              <p>+62 812 3456 7890</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-white/5 gap-4">
          <p className="text-white/30 text-xs">
            © 2024 Edwin Anderson. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with Next.js + Tailwind CSS + Framer Motion
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-10 h-10 bg-primary hover:bg-primary-dark text-black rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
