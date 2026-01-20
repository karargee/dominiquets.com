"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  { name: "Michael R.", text: "Absolutely professional and unforgettable experience. Highly recommend!", rating: 5 },
  { name: "James K.", text: "Best dungeon experience I've ever had. Safe, consensual, and thrilling.", rating: 5 },
  { name: "David L.", text: "The virtual sessions are incredible. Worth every penny!", rating: 5 },
  { name: "Alex M.", text: "Professional, discreet, and knows exactly what she's doing.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Client Reviews
          </h2>
          <p className="text-gray-400">What my clients say about their experiences</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
              <div className="relative glass glow rounded-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <div className="font-bold text-lg text-gradient">{testimonial.name}</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          className="text-yellow-400 text-lg"
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="text-4xl opacity-20">"</div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="mt-4 text-xs text-gray-500">Verified Client</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
