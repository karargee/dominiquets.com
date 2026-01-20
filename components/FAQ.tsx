"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  { q: "How do I book a session?", a: "Contact me via email, phone, or the booking form. We'll discuss your interests, schedule, and any questions you have." },
  { q: "Is my privacy guaranteed?", a: "Absolutely. All sessions are 100% confidential and discreet. Your privacy is my top priority and I never share client information." },
  { q: "What payment methods do you accept?", a: "I accept cash, credit cards, cryptocurrency, and secure online payments through verified platforms." },
  { q: "Can I cancel or reschedule?", a: "Yes, with 24 hours notice. Cancellations within 24 hours may incur a 50% fee." },
  { q: "Do you offer virtual sessions?", a: "Yes! I offer high-quality virtual sessions via video call with interactive toy control and custom scenarios." },
  { q: "What should I expect for my first session?", a: "We'll have a consultation to discuss your interests, boundaries, and desires. Everything is consensual, safe, and tailored to you." },
  { q: "Are the toys safe and clean?", a: "All toys are medical-grade, thoroughly sanitized between uses, and inspected regularly for safety." },
  { q: "Do you see couples?", a: "Yes! I offer sessions for couples, threesomes, and group experiences. Contact me to discuss your needs." },
  { q: "What are your limits?", a: "No minors, no animals, no permanent marks, no scat. Everything else is negotiable within safe boundaries." },
  { q: "How long are sessions?", a: "Sessions range from 1 hour to overnight experiences. Extended sessions and multi-day bookings available." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">Everything you need to know</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass glow rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition"
              >
                <span className="font-semibold text-lg pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === index ? 180 : 0 }}
                  className="text-3xl text-primary flex-shrink-0"
                >
                  ↓
                </motion.span>
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-300 border-t border-white/10 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
