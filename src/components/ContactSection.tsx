"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-black py-24 relative overflow-hidden">
      {/* Top-left checkerboard pattern */}
      <div className="absolute top-0 left-0 flex flex-col gap-1 opacity-80 z-0">
        <div className="flex gap-1">
          <div className="w-8 h-8 bg-primary/80" />
          <div className="w-8 h-8 bg-primary/40" />
        </div>
        <div className="flex gap-1">
          <div className="w-8 h-8 bg-transparent" />
          <div className="w-8 h-8 bg-primary/60" />
        </div>
      </div>

      {/* Bottom-right checkerboard pattern */}
      <div className="absolute bottom-12 right-0 flex flex-col gap-1 opacity-80 z-0">
        <div className="flex gap-1">
          <div className="w-8 h-8 bg-transparent" />
          <div className="w-8 h-8 bg-primary/60" />
        </div>
        <div className="flex gap-1">
          <div className="w-8 h-8 bg-primary/80" />
          <div className="w-8 h-8 bg-primary/40" />
        </div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Portrait & Bio Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
          >
            {/* Portrait Image */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden mb-8 bg-[#0a0a0a] border border-white/5">
              <Image
                src="/images/hero-photo.png"
                alt="Edwin Anderson"
                fill
                className="object-cover grayscale contrast-125 object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />

              {/* Fallback portrait design if image not loaded */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-2 border-white/10 flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                      fill="white"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Social Media Circular Buttons */}
            <div className="flex gap-4 mb-6">
              {[
                { icon: Globe, href: "#", label: "Website" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, borderColor: "#84cc16" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full border border-white/20 bg-black flex items-center justify-center text-white hover:text-primary transition-all duration-300 shadow-md"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Name */}
            <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
              Edwin Anderson
            </h3>

            {/* Available status badge */}
            <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span>Available for Work</span>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <p className="text-primary text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
              CONTACT
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-8">
              LET&apos;S GET IN TOUCH
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="text-white/70 text-sm font-medium mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-[#050505] border border-white/10 focus:border-primary/60 rounded-xl px-5 py-4 text-white text-sm outline-none transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="text-white/70 text-sm font-medium mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-[#050505] border border-white/10 focus:border-primary/60 rounded-xl px-5 py-4 text-white text-sm outline-none transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="text-white/70 text-sm font-medium mb-2 block">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full bg-[#050505] border border-white/10 focus:border-primary/60 rounded-xl px-5 py-4 text-white text-sm outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Glowing Lime Green Full-width Button */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 35px rgba(132, 204, 22, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-bold text-sm text-black tracking-wider uppercase transition-all duration-300 ${
                  submitted
                    ? "bg-green-400 text-black"
                    : "bg-primary hover:bg-primary-dark"
                }`}
                style={{
                  boxShadow: "0 0 25px rgba(132, 204, 22, 0.4)",
                }}
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer line */}
        <div className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs md:text-sm">
            © 2025 Edwin Anderson. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
