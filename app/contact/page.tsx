"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="min-h-screen pt-24 px-4 pb-16 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="fixed inset-0 z-0"
      >
        <Image
          src="/images/photo_18_2026-01-19_06-16-09.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400">
            Ready to explore your fantasies? Contact me today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400">contact@tsdominique.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="font-semibold">Telegram</div>
                  <div className="text-gray-400">@Dtransqueen11</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">👻</div>
                <div>
                  <div className="font-semibold">Snapchat</div>
                  <div className="text-gray-400">Dtransqueenn</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">⏰</div>
                <div>
                  <div className="font-semibold">Availability</div>
                  <div className="text-gray-400">7 Days a Week, 10 AM - 2 AM</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">🔒</div>
                <div>
                  <div className="font-semibold">Privacy</div>
                  <div className="text-gray-400">100% Discreet & Confidential</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary outline-none resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
