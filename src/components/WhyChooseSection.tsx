"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const meFeatures = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "UI Design Proficiency (Figma)",
];

const otherFeatures = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "No Design Skills",
];

// Asterisk star icon component
function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0"
    >
      <path
        d="M10 1L11.5 8.5L19 10L11.5 11.5L10 19L8.5 11.5L1 10L8.5 8.5L10 1Z"
        fill="#84cc16"
      />
      <path
        d="M10 4L10.8 7.2L14 8L10.8 8.8L10 12L9.2 8.8L6 8L9.2 7.2L10 4Z"
        fill="#4a8c10"
      />
    </svg>
  );
}

export default function WhyChooseSection() {
  return (
    <section id="why" className="bg-black py-24">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
          >
            WORKING
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black uppercase text-white"
          >
            WHY CHOOSE ME?
          </motion.h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Working With Me */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pr-0 md:pr-12"
          >
            {/* Avatar + Title */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 border-2 border-white/20 mb-4 relative">
                <Image
                  src="/images/avatar.png"
                  alt="Working with me"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                      fill="white"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg tracking-wide uppercase">
                WORKING WITH ME
              </h3>
            </div>

            {/* Features List */}
            <div className="space-y-0">
              {meFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3 py-4 border-b border-white/10 last:border-b-0"
                >
                  <StarIcon />
                  <span className="text-white text-sm md:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Another Talent */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="pl-0 md:pl-12 md:border-l border-white/10 mt-12 md:mt-0"
          >
            {/* Avatar + Title */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border-2 border-white/10 flex items-center justify-center mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                    fill="white"
                    opacity="0.3"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg tracking-wide uppercase">
                ANOTHER TALENT
              </h3>
            </div>

            {/* Features List */}
            <div className="space-y-0">
              {otherFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3 py-4 border-b border-white/10 last:border-b-0"
                >
                  <StarIcon />
                  <span className="text-white/70 text-sm md:text-base line-through decoration-white/30">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hire Me CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(132, 204, 22, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary hover:bg-primary-dark text-black font-bold px-12 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            HIRE ME
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
