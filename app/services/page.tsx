"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import BookingModal from "@/components/BookingModal";

const services = [
  {
    title: "Virtual Session",
    price: "$150/hr",
    features: ["HD Video call", "Custom scenarios", "Interactive toy control", "Aftercare included"],
    color: "from-blue-600 to-purple-600",
  },
  {
    title: "In-Person Session",
    price: "$300/hr",
    features: ["Private location", "Professional equipment", "Custom experience", "Full discretion"],
    color: "from-purple-600 to-pink-600",
    featured: true,
  },
  {
    title: "Threesome Experience",
    price: "$500/hr",
    features: ["Two professionals", "MMF or FFM options", "Custom dynamics", "Ultimate pleasure"],
    color: "from-pink-600 to-red-600",
  },
  {
    title: "Family Roleplay Session",
    price: "$350/hr",
    features: ["Taboo fantasy scenarios", "Consenting adults only", "Custom family dynamics", "Safe & confidential"],
    color: "from-red-600 to-purple-600",
  },
  {
    title: "Group Sessions",
    price: "$800+",
    features: ["Multiple participants", "Private venue", "Tailored scenarios", "Unforgettable experience"],
    color: "from-red-600 to-orange-600",
  },
  {
    title: "Dungeon Experience",
    price: "$400/hr",
    features: ["Full dungeon access", "Advanced equipment", "Extended sessions available", "VIP treatment"],
    color: "from-orange-600 to-yellow-600",
  },
  {
    title: "Content Creation",
    price: "$500+",
    features: ["Custom videos", "Photo sets", "Personalized content", "Exclusive rights"],
    color: "from-yellow-600 to-green-600",
  },
  {
    title: "Extreme Sessions",
    price: "$450/hr",
    features: ["Needle play", "Breath control", "Advanced BDSM", "Experienced subs only"],
    color: "from-green-600 to-teal-600",
  },
];

export default function Services() {
  const [currentImage, setCurrentImage] = useState(20);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev >= 31 ? 20 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleBook = (service: string) => {
    setSelectedService(service);
    setShowBooking(true);
  };

  return (
    <main className="min-h-screen pt-24 px-4 pb-16 relative">
      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-0"
      >
        <Image
          src={`/images/photo_${currentImage}_2026-01-19_06-16-09.jpg`}
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
          <h1 className="text-3xl font-bold mb-3 text-gradient">
            Services & Pricing
          </h1>
          <p className="text-base text-gray-300">
            Professional services tailored to your deepest desires
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative glass rounded-2xl p-6 ${
                service.featured ? "ring-2 ring-primary glow-pink" : "glow"
              } transition-all duration-300`}
            >
              {service.featured && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  ⭐ MOST POPULAR
                </motion.div>
              )}
              <div className="text-4xl mb-3 text-center animate-float">{index + 1}</div>
              <div className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-3`}>
                <h3 className="text-lg font-bold text-center">{service.title}</h3>
              </div>
              <div className="text-2xl font-bold mb-4 text-center text-gradient">{service.price}</div>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2 text-sm">✓</span>
                    <span className="text-gray-300 text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBook(service.title)}
                className={`w-full bg-gradient-to-r ${service.color} text-white py-2 rounded-full text-sm font-semibold shadow-lg`}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 glass rounded-2xl p-8 glow"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gradient">Why Choose Me?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold text-base mb-1">Discretion Guaranteed</h3>
              <p className="text-gray-400 text-xs">Your privacy is my top priority</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💳</div>
              <h3 className="font-semibold text-base mb-1">Secure Payment</h3>
              <p className="text-gray-400 text-xs">Multiple payment options available</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📅</div>
              <h3 className="font-semibold text-base mb-1">Flexible Scheduling</h3>
              <p className="text-gray-400 text-xs">Available 7 days a week</p>
            </div>
          </div>
        </motion.div>
      </div>
      <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} service={selectedService} />
    </main>
  );
}
