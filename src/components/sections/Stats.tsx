"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Users, Award, Star, Dumbbell } from "lucide-react";

const stats = [
  { icon: Dumbbell, value: 5, suffix: "+", label: "Sports Disciplines" },
  { icon: Users, value: 10000, suffix: "+", label: "Happy Athletes" },
  { icon: Award, value: 15, suffix: "+", label: "Certified Coaches" },
  { icon: Star, value: 4.8, suffix: "★", label: "Google Rating", isDecimal: true },
];

function AnimatedCounter({ target, isDecimal, suffix }: { target: number; isDecimal?: boolean; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className="font-bebas-neue text-5xl md:text-6xl text-gradient-gold">
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-1">
                <s.icon className="w-6 h-6" />
              </div>
              <AnimatedCounter target={s.value} isDecimal={s.isDecimal} suffix={s.suffix} />
              <span className="text-white/50 text-sm uppercase tracking-widest font-bold">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
