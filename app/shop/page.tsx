"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";

const toys = [
  { id: 1, name: "Lovense Lush 3", price: "$119", category: "Vibrator", desc: "Powerful wearable vibrator", img: 1 },
  { id: 2, name: "Lovense Hush 2", price: "$99", category: "Plug", desc: "Smooth vibrating plug", img: 2 },
  { id: 3, name: "Lovense Edge 2", price: "$129", category: "Prostate", desc: "Adjustable prostate massager", img: 3 },
  { id: 4, name: "Lovense Domi 2", price: "$89", category: "Wand", desc: "Powerful wand massager", img: 4 },
  { id: 5, name: "Lovense Nora", price: "$139", category: "Rabbit", desc: "Rotating rabbit vibrator", img: 5 },
  { id: 6, name: "Lovense Max 2", price: "$99", category: "Masturbator", desc: "Interactive male toy", img: 6 },
  { id: 7, name: "Lovense Ferri", price: "$79", category: "Panty Vibe", desc: "Discreet wearable", img: 7 },
  { id: 8, name: "Lovense Diamo", price: "$89", category: "Ring", desc: "Vibrating cock ring", img: 8 },
  { id: 9, name: "Lovense Hyphy", price: "$149", category: "Dual", desc: "Dual stimulation toy", img: 9 },
];

export default function Shop() {
  const [currentBg, setCurrentBg] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev >= 9 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="min-h-screen pt-24 px-4 pb-16 relative">
      <motion.div
        key={currentBg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.5 }}
        className="fixed inset-0 z-0"
      >
        <Image
          src={`/images/photo_${currentBg}_2026-01-19_06-16-09.jpg`}
          alt="Background"
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-3 text-center text-gradient"
        >
          🎀 Lovense Toys
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-300 mb-8 text-sm"
        >
          Premium interactive pleasure devices
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toys.map((toy, index) => (
            <motion.div
              key={toy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="glass glow rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 overflow-hidden">
                <Image
                  src={`/images/photo_${toy.img}_2026-01-19_06-16-09.jpg`}
                  alt={toy.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full text-xs font-bold">
                  {toy.category}
                </div>
              </div>
              <div className="p-4 gradient-border-content">
                <h3 className="text-lg font-bold mb-1 text-gradient">{toy.name}</h3>
                <p className="text-gray-400 text-xs mb-3">{toy.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gradient">{toy.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => addToCart({ id: toy.id, name: toy.name, price: toy.price })}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-xs font-semibold glow-pink"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
