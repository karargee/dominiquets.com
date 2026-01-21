"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingModal({ isOpen, onClose, service }: { isOpen: boolean; onClose: () => void; service?: string }) {
  const contactMethods = [
    {
      name: "Telegram",
      icon: "✈️",
      link: "https://t.me/Dtransqueen11",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "WhatsApp",
      icon: "💬",
      link: "https://wa.me/556284284952",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Snapchat",
      icon: "👻",
      link: "https://www.snapchat.com/add/Dtransqueenn11",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Email",
      icon: "✉️",
      link: "mailto:dominiquecharre85@gmail.com?subject=Booking Request - " + (service || "Session"),
      color: "from-red-500 to-red-600"
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gradient">Book Your Session</h2>
              <button onClick={onClose} className="text-2xl hover:text-primary transition">✕</button>
            </div>

            {service && (
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
                <p className="text-sm text-gray-400">Selected Service:</p>
                <p className="text-lg font-semibold text-gradient">{service}</p>
              </div>
            )}

            <p className="text-gray-300 mb-6 text-center">
              Choose your preferred contact method to book your session:
            </p>

            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-4 p-4 bg-gradient-to-r ${method.color} rounded-lg hover:shadow-lg transition-all group`}
                >
                  <span className="text-3xl">{method.icon}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Contact via {method.name}</p>
                    <p className="text-sm text-white/80">Click to start chatting</p>
                  </div>
                  <span className="text-white text-xl group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>
              ))}
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              💬 I'll respond within 24 hours | 🔒 100% Confidential
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
