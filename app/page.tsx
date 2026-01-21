"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 31;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev % totalImages) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen relative">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <Image
              src={`/images/photo_${currentImage}_2026-01-19_06-16-09.jpg`}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/30 to-black" />
        <div className="absolute inset-0 backdrop-blur-sm" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center z-10 px-4 max-w-5xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient text-shadow"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            TS Dominique
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-2xl mb-10 text-gray-200 font-light text-shadow"
          >
            Your Darkest Desires & Forbidden Fantasies Await • 18+
          </motion.p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/services">
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative glass glow text-white px-8 py-4 rounded-full text-base font-semibold border-2 border-purple-500/50 overflow-hidden group"
              >
                <span className="relative z-10">View Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition" />
              </motion.button>
            </Link>
            <Link href="/dungeon">
              <motion.button
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative glass glow-pink text-white px-8 py-4 rounded-full text-base font-semibold border-2 border-pink-500/50 overflow-hidden group"
              >
                <span className="relative z-10">The Dungeon</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition" />
              </motion.button>
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-16 flex justify-center gap-8 text-sm text-gray-300"
          >
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span className="text-xl font-bold text-gradient">01</span>
              <span>100% Discreet</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span className="text-xl font-bold text-gradient">02</span>
              <span>Professional</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span className="text-xl font-bold text-gradient">03</span>
              <span>5-Star Rated</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-5xl text-white/70"
        >
          ↓
        </motion.div>
      </section>
      <About />
      <Stats />
      <Testimonials />
      <FAQ />
    </main>
  );
}
