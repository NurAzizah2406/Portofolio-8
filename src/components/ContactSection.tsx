"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Instagram, Linkedin, Send, Check, X } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  // "idle" | "submitting" | "success" | "error"
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      // For demonstration, if email includes "error", it will fail. Otherwise success.
      if (form.email.includes("error")) {
        setSubmitStatus("error");
      } else {
        setSubmitStatus("success");
      }
    }, 1500);
  };

  const closeModal = () => {
    if (submitStatus === "success") {
      setForm({ name: "", email: "", message: "" });
    }
    setSubmitStatus("idle");
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [submitStatus]);

  return (
    <section id="contact" className="bg-black py-24 relative overflow-hidden">
      {/* Background Checkerboard Patterns... */}
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
                src="/images/contact-image.png"
                alt="Edwin Anderson"
                fill
                className="object-cover grayscale contrast-125 object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black flex items-center justify-center -z-10">
                <div className="w-48 h-48 rounded-full border-2 border-white/10 flex items-center justify-center">
                  <Globe size={40} className="text-white/20" />
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

            <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
              Edwin Anderson
            </h3>

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
              <div>
                <label className="text-white/70 text-sm font-medium mb-2 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  disabled={submitStatus === "submitting"}
                  className="w-full bg-[#050505] border border-white/10 focus:border-primary/60 rounded-xl px-5 py-4 text-white text-sm outline-none transition-all duration-200 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="text-white/70 text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  disabled={submitStatus === "submitting"}
                  className="w-full bg-[#050505] border border-white/10 focus:border-primary/60 rounded-xl px-5 py-4 text-white text-sm outline-none transition-all duration-200 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="text-white/70 text-sm font-medium mb-2 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={6}
                  disabled={submitStatus === "submitting"}
                  className="w-full bg-[#050505] border border-white/10 focus:border-primary/60 rounded-xl px-5 py-4 text-white text-sm outline-none transition-all duration-200 resize-none disabled:opacity-50"
                />
              </div>
              <motion.button
                type="submit"
                disabled={submitStatus === "submitting"}
                whileHover={{ scale: submitStatus === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: submitStatus === "idle" ? 0.98 : 1 }}
                className="w-full py-4 rounded-full font-bold text-sm text-black tracking-wider uppercase transition-all duration-300 bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ boxShadow: "0 0 25px rgba(132, 204, 22, 0.4)" }}
              >
                {submitStatus === "submitting" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs md:text-sm">
            © 2025 Edwin Anderson. All rights reserved.
          </p>
        </div>
      </div>

      {/* Success / Error Modal Overlay */}
      <AnimatePresence>
        {(submitStatus === "success" || submitStatus === "error") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 max-w-sm w-full relative flex flex-col items-center text-center shadow-2xl"
            >
              {/* Floating Icon */}
              <div className="absolute -top-12 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center relative">
                    <Send size={32} className="text-black ml-1 mb-1" />
                    
                    {/* Status Badge (Check or X) */}
                    <div className={`absolute top-0 right-0 w-7 h-7 rounded-full flex items-center justify-center border-2 border-[#0a0a0a] ${
                      submitStatus === "success" ? "bg-primary" : "bg-red-500"
                    }`}>
                      {submitStatus === "success" ? (
                        <Check size={14} className="text-black" strokeWidth={4} />
                      ) : (
                        <X size={14} className="text-white" strokeWidth={4} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="mt-10 w-full">
                <h3 className="text-white font-bold text-xl mb-3">
                  {submitStatus === "success" ? "Message Sent Successfully!" : "Message not sent!"}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  {submitStatus === "success"
                    ? "Thank you for reaching out. I'll get back to you as soon as possible"
                    : "Something went wrong on our end. Please try again in a moment"}
                </p>
                <button
                  onClick={closeModal}
                  className="w-full py-3.5 bg-primary hover:bg-primary-dark text-black font-bold text-sm rounded-full tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {submitStatus === "success" ? "BACK TO HOME" : "TRY AGAIN"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
