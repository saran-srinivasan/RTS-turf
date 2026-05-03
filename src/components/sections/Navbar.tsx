"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Facilities", href: "#facilities" },
  { label: "Sports", href: "#sports" },
  { label: "Membership", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-neutral-950/80 backdrop-blur-xl border-white/10 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-screen-2xl mx-auto">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              alt="RT STRYKON Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
              src="/RTS-turf/RT_Strykon_Colour.png"
            />
            <span className="font-bebas-neue uppercase tracking-widest text-2xl font-black text-gradient-gold">
              RT STRYKON
            </span>
          </a>

          <div className="hidden md:flex gap-1 items-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-bebas-neue uppercase tracking-widest text-white/70 hover:text-black hover:bg-primary px-4 py-2 rounded-lg transition-all duration-300 text-sm"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-primary text-on-primary-container font-bold text-sm uppercase tracking-wider px-5 py-3 rounded-lg gold-glow transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              WhatsApp
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-xl pt-24 px-8 flex flex-col gap-2"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-bebas-neue text-4xl uppercase tracking-wider text-white/80 hover:text-primary py-3 border-b border-white/5 transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-lg uppercase tracking-wider px-6 py-4 rounded-xl"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
