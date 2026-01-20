"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              TS Dominique
            </h3>
            <p className="text-gray-400 text-sm">
              Premium adult entertainment services and exclusive products
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition">Gallery</Link></li>
              <li><Link href="/dungeon" className="hover:text-primary transition">Dungeon</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link href="/safety" className="hover:text-primary transition">Safety</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✉️ dominiquecharre85@gmail.com</li>
              <li>📱 +556284284952</li>
              <li>✈️ Telegram: @Dtransqueen11</li>
              <li>👻 Snapchat: @Dtransqueenn11</li>
              <li>🔒 100% Discreet</li>
              <li>⏰ 7 Days a Week</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Me</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <span>💬</span>
                <span>WhatsApp: +556284284952</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔞</span>
                <span>OnlyFans: charredominique</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 TS Dominique. All rights reserved. | 🔞 18+ Only | Professional Adult Entertainment</p>
        </div>
      </div>
    </footer>
  );
}
