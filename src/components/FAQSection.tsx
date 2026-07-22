"use client";

import { motion } from "framer-motion";

// Green star icon from Figma design
function GreenStarIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <path
        d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
        fill="#84cc16"
      />
      <path
        d="M12 5L13.2 9.8L18 11L13.2 12.2L12 17L10.8 12.2L6 11L10.8 9.8L12 5Z"
        fill="#a3e635"
      />
    </svg>
  );
}

const leftFaqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "Can you optimize an existing website for better performance?",
    answer:
      "Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.",
  },
];

const rightFaqs = [
  {
    question: "Do you work on both design and development?",
    answer:
      "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.",
  },
  {
    question: "Do you take freelance or contract-based projects?",
    answer:
      "Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!",
  },
  {
    question: "How can we collaborate?",
    answer:
      "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let's create something awesome together!",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-black py-24">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs md:text-sm font-semibold tracking-widest uppercase mb-3"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 relative max-w-6xl mx-auto">
          {/* Vertical Divider Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {/* Left Column */}
          <div className="space-y-10">
            {leftFaqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pb-8 border-b border-white/10 last:border-b-0"
              >
                <div className="flex items-start gap-3 mb-3">
                  <GreenStarIcon />
                  <h3 className="text-white font-bold text-lg md:text-xl leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {rightFaqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
                className="pb-8 border-b border-white/10 last:border-b-0"
              >
                <div className="flex items-start gap-3 mb-3">
                  <GreenStarIcon />
                  <h3 className="text-white font-bold text-lg md:text-xl leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
