"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Safety() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const certifications = [
    {
      title: "BDSM Safety & Consent Certification",
      issuer: "International BDSM Education Alliance",
      year: "2018",
      icon: "🎓",
      description: "Comprehensive training in safe BDSM practices, consent negotiation, and risk awareness."
    },
    {
      title: "Shibari & Rope Bondage Training",
      issuer: "Kinbaku Academy",
      year: "2019",
      icon: "🪢",
      description: "Advanced rope bondage techniques including suspension, safety protocols, and nerve awareness."
    },
    {
      title: "First Aid & CPR Certified",
      issuer: "Red Cross",
      year: "2024",
      icon: "🏥",
      description: "Current certification in emergency response and medical first aid."
    },
    {
      title: "Sex Education Certification",
      issuer: "American Association of Sexuality Educators",
      year: "2020",
      icon: "📚",
      description: "Professional training in sexual health, communication, and education."
    },
    {
      title: "Impact Play Mastery",
      issuer: "Dungeon Masters Guild",
      year: "2019",
      icon: "⚡",
      description: "Expert training in flogging, spanking, caning, and safe impact techniques."
    },
    {
      title: "Psychology & Power Dynamics",
      issuer: "Institute of Kink Studies",
      year: "2021",
      icon: "🧠",
      description: "Understanding psychological aspects of dominance, submission, and power exchange."
    }
  ];

  const safetyProtocols = [
    {
      title: "Pre-Session Consultation",
      items: [
        "Detailed discussion of limits, boundaries, and desires",
        "Medical history and physical limitations review",
        "Safe word establishment and testing",
        "Consent negotiation and agreement",
        "Emergency contact information exchange"
      ]
    },
    {
      title: "Safe Words & Signals",
      items: [
        "RED - Stop immediately, end the scene",
        "YELLOW - Slow down, check-in needed",
        "GREEN - All good, continue",
        "Non-verbal signals for gagged/restricted speech",
        "Regular check-ins during intense scenes"
      ]
    },
    {
      title: "Health & Hygiene",
      items: [
        "All equipment sanitized before and after use",
        "Regular STI testing and health screenings",
        "Clean, professional dungeon environment",
        "Single-use items when appropriate",
        "Barrier protection available and encouraged"
      ]
    },
    {
      title: "Aftercare Protocol",
      items: [
        "Physical care: water, snacks, blankets, comfort",
        "Emotional support and reassurance",
        "Discussion of the session experience",
        "Follow-up check-in within 24-48 hours",
        "Resources for sub-drop or emotional processing"
      ]
    },
    {
      title: "Hard Limits (Never Offered)",
      items: [
        "Anything involving minors",
        "Permanent marks or scarring",
        "Scat play",
        "Extreme blood play",
        "Anything non-consensual or unsafe"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-24 px-4 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-gradient">
            Safety & Credentials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your safety, comfort, and consent are my absolute priorities. I maintain the highest standards of professionalism and safety in all sessions.
          </p>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass glow-pink p-6 rounded-2xl border-2 border-pink-500/30"
              >
                <div className="text-5xl mb-4 text-center">{cert.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gradient">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mb-3">Certified: {cert.year}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Safety Protocols Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Safety Protocols</h2>
          <div className="space-y-4">
            {safetyProtocols.map((protocol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass glow rounded-2xl overflow-hidden border-2 border-purple-500/30"
              >
                <button
                  onClick={() => setOpenSection(openSection === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-gradient">{String(index + 1).padStart(2, '0')}</span>
                    <span className="font-bold text-xl group-hover:text-gradient transition">{protocol.title}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openSection === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl text-primary"
                  >
                    ↓
                  </motion.span>
                </button>
                {openSection === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-white/10"
                  >
                    <ul className="space-y-3 mt-4">
                      {protocol.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-primary text-xl mt-1">✓</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 glass glow-pink p-8 rounded-2xl text-center border-2 border-pink-500/30"
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">Questions About Safety?</h3>
          <p className="text-gray-300 mb-6">
            I'm happy to discuss any safety concerns or questions before booking. Your comfort and security are paramount.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://t.me/Dtransqueen11" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold"
              >
                ✈️ Contact via Telegram
              </motion.button>
            </a>
            <a href="https://wa.me/556284284952" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-semibold"
              >
                💬 Contact via WhatsApp
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
