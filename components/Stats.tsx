"use client";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "10+", label: "Years Experience", desc: "Professional domination" },
    { number: "500+", label: "Happy Clients", desc: "Satisfied submissives" },
    { number: "16", label: "Specialties", desc: "Unique services" },
    { number: "100%", label: "Discretion", desc: "Privacy guaranteed" },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-900/10 to-black" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Why Choose Me
          </h2>
          <p className="text-gray-400">Professional excellence in every session</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass glow-pink p-8 rounded-2xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="text-5xl font-bold text-gradient mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
