"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [25, 26, 27, 28, 29, 30, 31];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-gray-400">A glimpse into my world</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(img)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={`/images/photo_${img}_2026-01-19_06-16-09.jpg`}
                alt={`Gallery ${img}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={`/images/photo_${selectedImage}_2026-01-19_06-16-09.jpg`}
                alt="Selected"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
