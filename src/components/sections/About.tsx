"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Trophy, Waves, Clock } from "lucide-react";

const features = [
  { icon: Trophy, text: "Certified Turf Quality" },
  { icon: Waves, text: "Swimming Pool" },
  { icon: Clock, text: "24/7 Access for Elite Members" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-section-gap px-6 md:px-10 max-w-screen-2xl mx-auto relative">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative z-10"
        >
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">The Legacy</span>
          <h2 className="font-bebas-neue text-5xl md:text-6xl text-on-surface mb-6 uppercase leading-[1]">
            Where Champions
            <br />
            <span className="text-gradient-gold">Are Forged</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed text-base md:text-lg">
            RT Strykon isn&apos;t just a sports facility — it&apos;s a crucible for athletic greatness.
            Professional-grade arenas, elite coaching, and a culture of relentless improvement for athletes who refuse to settle.
          </p>
          <div className="space-y-4 mb-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-5 h-5" />
                </div>
                <span className="font-body-md text-on-surface font-medium">{f.text}</span>
              </motion.div>
            ))}
          </div>
          <a
            href="#facilities"
            className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-black transition-all duration-300"
          >
            Discover Our Facilities
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 relative"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-2" />
          <div className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <img
              alt="Football action on artificial turf under stadium lights"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src="/footballturf.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0c]/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
