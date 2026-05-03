"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "CLUB PASS",
    price: { monthly: 2999, annual: 2499 },
    features: ["Access to turf arenas", "Standard booking window", "Locker room access"],
    highlight: false,
  },
  {
    name: "PRO ATHLETE",
    price: { monthly: 5999, annual: 4999 },
    features: ["Priority turf booking", "Full pool access", "2 guest passes/month", "Performance analytics app"],
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "STRYKON ELITE",
    price: { monthly: 9999, annual: 8499 },
    features: ["Unlimited all-access", "1-on-1 coaching sessions", "VIP locker & laundry", "24/7 facility access"],
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-surface-container py-section-gap relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div ref={ref} className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Commitment</span>
          <h2 className="font-bebas-neue text-5xl md:text-6xl text-on-surface uppercase mb-8">
            Join The <span className="text-gradient-gold">Elite</span>
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold uppercase tracking-wider ${!annual ? "text-primary" : "text-white/40"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? "bg-primary" : "bg-white/20"}`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  annual ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-bold uppercase tracking-wider ${annual ? "text-primary" : "text-white/40"}`}>
              Annual <span className="text-xs text-primary/70">(Save 15%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className={`rounded-2xl p-8 flex flex-col relative ${
                p.highlight
                  ? "bg-surface-variant border border-primary transform md:-translate-y-4 gold-glow-always animated-gold-border"
                  : "glass-card border border-white/5 hover:border-white/15 transition-colors"
              }`}
            >
              {p.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-bold px-5 py-1.5 rounded-full text-xs uppercase tracking-wider">
                  {p.badge}
                </div>
              )}
              <h3
                className={`font-bebas-neue text-2xl mb-2 ${p.highlight ? "text-primary text-3xl" : "text-white"}`}
              >
                {p.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`font-bold ${p.highlight ? "text-4xl text-white" : "text-3xl text-white"}`}>
                  ₹{(annual ? p.price.annual : p.price.monthly).toLocaleString("en-IN")}
                </span>
                <span className="text-white/40 text-sm">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 text-white/70">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm">
                    <Check className="text-primary w-4 h-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {p.highlight ? (
                <a
                  href="https://wa.me/919876543210"
                  className="w-full py-4 bg-primary text-black rounded-lg font-bold text-sm text-center uppercase tracking-wider hover:bg-primary-container transition-colors gold-glow block"
                >
                  Join as Pro
                </a>
              ) : (
                <a
                  href="https://wa.me/919876543210"
                  className="w-full py-4 border border-white/20 rounded-lg font-bold text-sm text-center text-white uppercase tracking-wider hover:bg-white/5 transition-colors block"
                >
                  Select Plan
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
