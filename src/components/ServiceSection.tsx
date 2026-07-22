"use client";

import { motion } from "framer-motion";
import { Monitor } from "lucide-react";
import Image from "next/image";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "Custom Website Development",
    description:
      "Building responsive, fast, and scalable websites tailored to your needs.",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Web Performance Optimization",
    description:
      "Enhancing website speed, SEO, and overall performance for better user experiences.",
  },
  {
    number: "03",
    icon: Monitor,
    title: "Website Maintenance & Debugging",
    description:
      "Fixing bugs, improving UI, and ensuring smooth performance over time.",
  },
];

const portfolioPreviews = [
  { id: 1, angle: -8, top: "10%", left: "0%", width: 240 },
  { id: 2, angle: 5, top: "30%", right: "0%", width: 220 },
  { id: 3, angle: -3, bottom: "5%", left: "40%", width: 180 },
];

export default function ServiceSection() {
  return (
    <section id="service" className="bg-black py-24 overflow-hidden">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-semibold tracking-widest uppercase mb-3"
            >
              SERVICE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase leading-tight text-white"
            >
              MY SERVICE
              <br />
              EXPERTISE
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-white/50 text-sm md:text-base leading-relaxed text-right md:ml-auto max-w-sm">
              Creating modern, intuitive, and visually consistent web
              experiences that align with industry trends and user expectations.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group border-t border-white/10 pt-8 pb-10 md:pr-8 card-hover cursor-default"
              >
                {/* Number */}
                <p className="text-white/30 text-sm font-mono mb-6">
                  {service.number}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-6 group-hover:bg-primary/40 transition-colors duration-300" />

                {/* Icon */}
                <div className="mb-5">
                  <Icon
                    size={28}
                    className="text-primary group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* About Me / Portfolio Preview Section */}
        <div className="relative mt-24 min-h-[400px]">
          {/* Background portfolio preview images */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Left preview image */}
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 top-0 w-56 md:w-72"
              style={{ zIndex: 1 }}
            >
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] aspect-[4/3] flex items-center justify-center">
                <Image
                  src="/images/image-11.png"
                  alt="Portfolio preview 1"
                  width={288}
                  height={216}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center -z-10">
                  <div className="text-center p-4">
                    <div className="w-full h-3 bg-white/10 rounded mb-2" />
                    <div className="w-3/4 h-3 bg-white/10 rounded mb-4" />
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="h-8 bg-white/5 rounded"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right preview image */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 top-0 w-56 md:w-72"
              style={{ zIndex: 1 }}
            >
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] aspect-[4/3] flex items-center justify-center relative">
                <Image
                  src="/images/image-12.png"
                  alt="Portfolio preview 2"
                  width={288}
                  height={216}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center -z-10">
                  <div className="text-center p-4 w-full">
                    <div className="w-full h-2 bg-white/10 rounded mb-2" />
                    <div className="w-full h-16 bg-white/5 rounded mb-2" />
                    <div className="flex gap-2">
                      <div className="flex-1 h-3 bg-white/10 rounded" />
                      <div className="flex-1 h-3 bg-primary/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom preview image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 right-1/3 w-44 md:w-52"
              style={{ zIndex: 2 }}
            >
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] aspect-[4/3] relative">
                <Image
                  src="/images/image-13.png"
                  alt="Portfolio preview 3"
                  width={208}
                  height={156}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-gray-900 flex items-center justify-center">
                  <div className="w-full p-3">
                    <div className="w-3/4 h-2 bg-white/20 rounded mb-1" />
                    <div className="w-full h-2 bg-primary/30 rounded" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* About Me Text - Center Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
            >
              ABOUT ME
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-center"
            >
              <span className="text-white">CRAFTING SEAMLESS</span>
              <br />
              <span className="text-primary">HIGH-PERFORMANCE WEB</span>
              <br />
              <span className="text-white">EXPERIENCES</span>
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
