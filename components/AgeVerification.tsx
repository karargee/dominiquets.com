"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AgeVerification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (!verified) setShow(true);
  }, []);

  const handleVerify = (isAdult: boolean) => {
    if (isAdult) {
      localStorage.setItem("ageVerified", "true");
      setShow(false);
    } else {
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-gray-900 border-2 border-primary rounded-xl p-8 max-w-md text-center"
          >
            <div className="text-6xl mb-4">🔞</div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Age Verification
            </h2>
            <p className="text-gray-400 mb-8">
              This website contains adult content. You must be 18 years or older to enter.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleVerify(true)}
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold"
              >
                I'm 18+
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleVerify(false)}
                className="flex-1 bg-gray-800 text-white py-3 rounded-lg font-semibold"
              >
                Exit
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
