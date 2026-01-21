"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const sections = [
    {
      category: "Bondage & Discipline",
      items: [
        { title: "BDSM & Bondage", desc: "Expert rope work, restraints, and power dynamics. Shibari, suspension bondage, and beautiful restraint art." },
        { title: "Impact Play", desc: "Spanking, flogging, paddling, caning, and corporal discipline. From gentle to intense pain and pleasure." },
        { title: "CBT", desc: "Cock and ball torture techniques. Gentle teasing to intense pain play within boundaries." },
        { title: "Nipple Torture", desc: "Clamps, weights, and sensation play. Pushing your pain threshold with expert control." },
        { title: "Electro Play", desc: "Violet wand and electrical stimulation. Intense sensations for experienced submissives." },
      ]
    },
    {
      category: "Domination & Submission",
      items: [
        { title: "Humiliation", desc: "Verbal, physical, and psychological domination. Tailored degradation respecting your limits." },
        { title: "Worship Sessions", desc: "Body worship and devotional service. Learn to properly worship and serve your Mistress." },
        { title: "Financial Domination", desc: "Money slavery and tribute sessions. Financial submission and spoiling your Domme." },
        { title: "Chastity Training", desc: "Orgasm control and denial programs. Long-term management with keyholder services." },
        { title: "Slave Training", desc: "Complete submission and obedience training. Learn protocols, positions, and proper service." },
        { title: "Tease & Denial", desc: "Edging, ruined orgasms, and prolonged arousal. Mental and physical torment." },
      ]
    },
    {
      category: "Role Play & Fantasy",
      items: [
        { title: "Role Play", desc: "Custom scenarios and fantasy fulfillment. Teacher/student, boss/employee, interrogation, and more." },
        { title: "Feminization", desc: "Sissy training and transformation. Complete makeovers, feminine guidance, and forced feminization." },
        { title: "Pet Play", desc: "Puppy, kitten, and pony training. Collars, leashes, cages, and training protocols." },
        { title: "Cuckolding", desc: "Cuckold training and humiliation. Watch as I pleasure others while you serve." },
        { title: "Age Play", desc: "Mommy domme scenarios and age regression. Nurturing discipline and control." },
        { title: "Family Roleplay", desc: "Taboo family fantasy scenarios between consenting adults. Stepfamily dynamics and forbidden scenarios." },
        { title: "Medical Play", desc: "Clinical examinations, prostate milking, and medical fetish scenarios." },
      ]
    },
    {
      category: "Sensory & Fetish",
      items: [
        { title: "Sensory Play", desc: "Temperature, sensation, and exploration. Ice, wax, feathers, blindfolds to heighten senses." },
        { title: "Fetish Sessions", desc: "Foot worship, latex, leather, boots, stockings, and more. Wide range of fetishes with expertise." },
        { title: "Strap-On Play", desc: "Pegging and advanced penetration. Expert technique with various sizes and positions." },
        { title: "Breath Play", desc: "Controlled breathplay and asphyxiation. Advanced technique for experienced subs only." },
        { title: "Spitting & Degradation", desc: "Extreme humiliation and degradation play. Pushing boundaries with consent." },
        { title: "Trampling", desc: "Body trampling and crushing. High heels, boots, or barefoot domination." },
      ]
    },
    {
      category: "Extreme & Advanced",
      items: [
        { title: "Needle Play", desc: "Piercing and needle play for advanced masochists. Sterile technique and aftercare." },
        { title: "Wax Play", desc: "Hot wax torture and sensation. Temperature play from mild to extreme." },
        { title: "Forced Bi", desc: "Bisexual training and forced encounters. Pushing sexual boundaries." },
        { title: "Toilet Training", desc: "Human toilet and watersports. Extreme degradation for devoted slaves." },
        { title: "Mummification", desc: "Full body wrapping and sensory deprivation. Complete immobilization and control." },
      ]
    },
    {
      category: "Group Experiences",
      items: [
        { title: "Threesomes", desc: "MMF, FFM, and custom group dynamics. Coordinated experiences with selected partners." },
        { title: "Group Sessions", desc: "Multiple participants and party experiences. Private events and group play." },
        { title: "Double Domination", desc: "Two mistresses, one submissive. Overwhelming power exchange and intensity." },
        { title: "Gangbang", desc: "Multiple partners and intense group scenarios. Ultimate submission experience." },
      ]
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient animate-pulse-glow">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional dominatrix offering exclusive experiences tailored to your desires
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-gradient mb-4">Your Fantasy, My Expertise</h3>
            <p className="text-gray-300 leading-relaxed">
              With years of experience in the art of domination, I provide a safe, consensual, and unforgettable experience. Whether you're curious or experienced, I'll guide you through your journey.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As a trans dominatrix, I bring a unique perspective to power dynamics and understand the importance of authenticity, acceptance, and exploration. I create a judgment-free space where you can fully express yourself.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gradient">My Specialties</h3>
          <div className="space-y-4">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="glass glow rounded-2xl overflow-hidden border-2 border-primary/30"
              >
                <button
                  onClick={() => setOpenSection(openSection === sectionIndex ? null : sectionIndex)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-gradient">{String(sectionIndex + 1).padStart(2, '0')}</span>
                    <span className="font-bold text-2xl group-hover:text-gradient transition">{section.category}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openSection === sectionIndex ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl text-primary"
                  >
                    ↓
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openSection === sectionIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-white/10 pt-4 space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition"
                          >
                            <h5 className="font-bold text-lg text-gradient mb-2">{item.title}</h5>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="glass glow-pink p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-4 text-gradient">Experience & Training</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>✓ 10+ years professional domination experience</li>
              <li>✓ Certified in BDSM safety and consent practices</li>
              <li>✓ Trained in rope bondage (Shibari)</li>
              <li>✓ Psychology background for deeper understanding</li>
              <li>✓ Specialized training in sensory deprivation</li>
              <li>✓ Expert in impact play techniques</li>
              <li>✓ Certified sex educator</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="glass glow p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-4 text-gradient">What Sets Me Apart</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>✓ Genuine passion for the lifestyle</li>
              <li>✓ Non-judgmental and open-minded approach</li>
              <li>✓ Emphasis on communication and aftercare</li>
              <li>✓ Professional dungeon space with premium equipment</li>
              <li>✓ Discretion and privacy guaranteed</li>
              <li>✓ Understanding of diverse identities and orientations</li>
              <li>✓ Regular health screenings and safety protocols</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
