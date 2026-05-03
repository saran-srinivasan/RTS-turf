"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518605368461-1ee715c0e1cc?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed opacity-25" />
      <div className="absolute inset-0 bg-neutral-950/85" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="font-bebas-neue text-5xl md:text-7xl text-white mb-6 uppercase">
          Ready to <span className="text-gradient-gold">Play?</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Skip the forms. Message our concierge team directly on WhatsApp to book a facility or claim your membership pass.
        </p>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(37,211,102,0.3)] pulse-ring"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          Connect on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
