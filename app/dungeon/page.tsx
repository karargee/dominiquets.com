"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Dungeon() {
  const [currentImage, setCurrentImage] = useState(1);
  const dungeonImages = ['17', '18'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev >= 2 ? 1 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  const features = [
    { 
      icon: "⛓️", 
      title: "Premium Equipment & Furniture", 
      desc: "My dungeon features professional-grade BDSM furniture including a St. Andrew's Cross, bondage table, suspension rig, spanking bench, and an extensive collection of restraints, impact toys, and sensory equipment. All equipment is regularly maintained and sanitized to the highest standards."
    },
    { 
      icon: "🕯️", 
      title: "Complete Privacy & Discretion", 
      desc: "Located in a private, secure space with discreet entry. Your privacy is paramount - all sessions are completely confidential. Soundproofed walls ensure your experience remains between us. Ample parking and easy access without compromising anonymity."
    },
    { 
      icon: "🎭", 
      title: "Customized Sessions", 
      desc: "Every session is tailored to your specific desires, limits, and experience level. Whether you're a curious beginner or experienced submissive, I create a personalized journey. Pre-session consultations ensure we align on boundaries, safe words, and your fantasy fulfillment."
    },
    { 
      icon: "🔒", 
      title: "Safety & Consent First", 
      desc: "Your physical and emotional safety is my top priority. I'm trained in BDSM safety protocols, first aid, and aftercare practices. Clear communication, negotiated boundaries, and enthusiastic consent are non-negotiable. Comprehensive aftercare is included in every session."
    },
  ];

  return (
    <main className="min-h-screen pt-24 px-4 relative">
      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-0"
      >
        <Image
          src={`/images/dungeon/photo_${dungeonImages[currentImage - 1]}_2026-01-19_21-10-52.jpg`}
          alt="Background"
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            The Dungeon Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Step into my fully-equipped private dungeon, a sanctuary designed for exploration, submission, and transformation. Every detail has been carefully curated to provide an immersive experience in a safe, consensual environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl p-8 hover:border-red-500/50 transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gradient">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Dungeon Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dungeonImages.map((imgNum, index) => (
              <motion.div
                key={imgNum}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video overflow-hidden rounded-xl border-2 border-red-900/30 hover:border-red-500/50 transition"
              >
                <Image
                  src={`/images/dungeon/photo_${imgNum}_2026-01-19_21-10-52.jpg`}
                  alt={`Dungeon ${imgNum}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-red-950/20 border border-red-900/50 rounded-xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Book your private dungeon session today. Whether you're seeking an intense power exchange, sensory exploration, or a journey into submission, I'll guide you through an unforgettable experience. Sessions available by appointment only.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Contact Now
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}
