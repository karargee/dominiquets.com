"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string } | null>(null);
  const [filter, setFilter] = useState<'all' | 'images' | 'videos'>('all');

  const images = Array.from({ length: 31 }, (_, i) => ({
    type: 'image' as const,
    src: `/images/photo_${i + 1}_2026-01-19_06-16-09.jpg`,
    id: i + 1
  }));

  const dungeonImages = [
    { type: 'image' as const, src: '/images/dungeon/photo_17_2026-01-19_21-10-52.jpg', id: 'dungeon1' },
    { type: 'image' as const, src: '/images/dungeon/photo_18_2026-01-19_21-10-52.jpg', id: 'dungeon2' },
  ];

  const videos = [
    { type: 'video' as const, src: '/images/dungeon/video.mp4', id: 'video12' },
    { type: 'video' as const, src: '/images/dungeon/video1.mp4', id: 'video1' },
    { type: 'video' as const, src: '/images/dungeon/video2.mp4', id: 'video2' },
    { type: 'video' as const, src: '/images/dungeon/video3.mp4', id: 'video3' },
    { type: 'video' as const, src: '/images/dungeon/video4.mp4', id: 'video4' },
    { type: 'video' as const, src: '/images/dungeon/video5.mp4', id: 'video5' },
    { type: 'video' as const, src: '/images/dungeon/video6.mp4', id: 'video6' },
    { type: 'video' as const, src: '/images/dungeon/video7.mp4', id: 'video7' },
    { type: 'video' as const, src: '/images/dungeon/video8.mp4', id: 'video8' },
    { type: 'video' as const, src: '/images/dungeon/video9.mp4', id: 'video9' },
    { type: 'video' as const, src: '/images/dungeon/video10.mp4', id: 'video10' },
    { type: 'video' as const, src: '/images/dungeon/video11.mp4', id: 'video11' },
    { type: 'video' as const, src: '/images/dungeon/video13.mp4', id: 'video13' },
    { type: 'video' as const, src: '/images/dungeon/video14.mp4', id: 'video14' },
    { type: 'video' as const, src: '/images/dungeon/video15.mp4', id: 'video15' },
    { type: 'video' as const, src: '/images/dungeon/video16.mp4', id: 'video16' },
  ];

  const allMedia = [...images, ...dungeonImages, ...videos];
  
  const filteredMedia = filter === 'all' 
    ? allMedia 
    : filter === 'images' 
    ? [...images, ...dungeonImages]
    : videos;

  return (
    <main className="min-h-screen pt-24 px-4 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-gradient">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore my exclusive content collection
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'all' 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              All ({allMedia.length})
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter('images')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'images' 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              Photos ({images.length + dungeonImages.length})
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter('videos')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'videos' 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              Videos ({videos.length})
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMedia.map((media, index) => (
            <motion.div
              key={media.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-xl border-2 border-purple-900/30 hover:border-pink-500/50 transition group"
              onClick={() => setSelectedMedia(media)}
            >
              {media.type === 'image' ? (
                <Image
                  src={media.src}
                  alt={`Gallery ${media.id}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={media.src}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-6xl">▶️</span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMedia(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 text-4xl text-white hover:text-primary transition z-10"
          >
            ✕
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] w-full"
          >
            {selectedMedia.type === 'image' ? (
              <div className="relative w-full h-[90vh]">
                <Image
                  src={selectedMedia.src}
                  alt="Selected"
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full h-full max-h-[90vh] object-contain"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
