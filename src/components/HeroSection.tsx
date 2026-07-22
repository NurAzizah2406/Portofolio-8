"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background green overlay on right */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a3a00] via-[#0d2200] to-transparent opacity-60" />
      <div className="absolute top-0 right-0 w-2/5 h-full bg-[#0a2600] opacity-40" />

      {/* Checkerboard decoration bottom-left */}
      <div className="absolute bottom-16 left-0 flex flex-col gap-1 opacity-70">
        <div className="flex gap-1">
          <div className="w-8 h-8 bg-primary/80" />
          <div className="w-8 h-8 bg-transparent" />
        </div>
        <div className="flex gap-1">
          <div className="w-8 h-8 bg-transparent" />
          <div className="w-8 h-8 bg-primary/60" />
        </div>
        <div className="flex gap-1">
          <div className="w-8 h-8 bg-primary/40" />
          <div className="w-8 h-8 bg-transparent" />
        </div>
      </div>

      <div className="container-max section-padding w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-28">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-0.5 bg-white/60" />
              <span className="text-white/70 text-sm md:text-base font-light">
                Hi, I am Edwin Anderson Frontend Developer
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight uppercase"
            >
              <span className="text-white">BUILDING FAST &amp;</span>
              <br />
              <span className="text-primary">INTERACTIVE</span>
              <span className="text-white"> WEB</span>
              <br />
              <span className="text-white">EXPERIENCES.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-white/50 text-sm md:text-base max-w-md leading-relaxed"
            >
              Bridging creativity and functionality to deliver stunning,
              user-friendly web applications
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(132, 204, 22, 0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary hover:bg-primary-dark text-black font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 animate-glow-pulse"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                HIRE ME
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Image + Stats Card */}
          <div className="relative hidden lg:flex justify-center items-center">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-lg"
            >
              {/* Image placeholder - will be replaced with actual photo */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
                <Image
                  src="/images/contact-image.png"
                  alt="Edwin Anderson - Frontend Developer"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={(e) => {
                    // Fallback if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                {/* Fallback gradient when no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-[#0a2600] flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center border-4 border-white/10">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white/20"
                    >
                      <path
                        d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rating Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.03 }}
              className="absolute bottom-8 right-0 bg-[#0f1f0a] border border-white/10 rounded-2xl p-5 min-w-[200px] shadow-xl"
            >
              <div className="text-4xl font-black text-white mb-2">5.0</div>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-white/70 text-sm">Many Client Trust with me</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-1.5 rounded-full bg-primary"
        />
      </motion.div>
    </section>
  );
}
