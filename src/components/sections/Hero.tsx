"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <header ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110 origin-top">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518605368461-1ee715c0e1cc?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0a0c0c] via-[#0a0c0c]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a0c0c]/30 to-transparent pointer-events-none" />

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="particle bg-primary/20"
          style={{
            width: 4 + i * 2,
            height: 4 + i * 2,
            left: `${15 + i * 14}%`,
            bottom: "-10%",
            animationDuration: `${8 + i * 3}s`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary font-bold text-sm tracking-[0.3em] uppercase mb-6 block"
        >
          Chennai&apos;s Premier Sports Academy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-bebas-neue text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 uppercase"
        >
          Play Hard.
          <br />
          <span className="text-gradient-gold">Train Harder.</span>
          <br />
          Win Together.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mb-10 font-body-md"
        >
          Certified turf, standard pool, and world-class coaching — all under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#facilities"
            className="bg-primary text-on-primary-container font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg gold-glow transition-all hover:scale-105"
          >
            Explore Facilities
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            WhatsApp to Book
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary/60 scroll-indicator" />
      </motion.div>
    </header>
  );
}
