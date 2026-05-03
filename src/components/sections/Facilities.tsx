"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

const facilities = [
  {
    title: "The Turf Arena",
    desc: "Premium 5v5 and 7v7 pitches with certified artificial grass and daylight-grade floodlighting.",
    cta: "Book Pitch",
    //temp image replace with original
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEE-caOe_9uFiYyjiXiKfBkQKDROhfw3HYn7kdn7dj79MzF25vlG1WBO5yT-RaNg2aYBA_RtKS16m7nibNPQm1E_Pk-uIchzzWrApcKP6pYu5Rzgq26Fspyv_o48JbpVxupub7FVlSNeRYB_jQGIEX4Bc11wrVAUqFs_JE1sPUzZYgewek-xiti1ZfBOL1KtTPMcAaxIBC1nhhUdriSYcUoqoj0vhewOmB_HowK8MqYyt2N018Z6DwgEviJ8JmHRgugyxdVk_sJFEh",
  },
  {
    title: "Aquatic Center",
    desc: "Temperature-controlled pool for competitive training and recovery sessions.",
    cta: "View Schedules",
    //temp image replace with original
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDBxLYR7T1R0Vz7NsgKald24mdbsJa7RZs7x-gNN2hFYTpw9dB2sFzNZMQBZKTsRNGatZ2rmX2rOFqpc61B6srv0q8R_Vumec5yVbpSD82u1cmBSY_Bq9GKw5Yf7LfPBCAHEAfJMJRvB4tSMtdQ-6OIcqsBjRSrk0WjJ215CO_SMnrgISgxufF3bM5FPWA5_kN3ECEmMAgyIO354NBXtJ0tfzwSQdP9orQi2W0zE7oQtczUT_90En3lAtCpJbBGGuZjpsCUKgWwy49",
  },
];

export default function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facilities" className="bg-surface-container-low py-section-gap">
      <div ref={ref} className="max-w-screen-2xl mx-auto px-6 md:px-10 h-auto md:h-[700px] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Our Arenas</span>
          <h2 className="font-bebas-neue text-5xl md:text-6xl text-on-surface uppercase">
            Professional Grade <span className="text-gradient-gold">Facilities</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 flex-1 w-full h-full">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="feature-card flex-1 relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 h-[400px] md:h-auto"
            >
              <img
                alt={f.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={f.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-bebas-neue text-4xl text-white mb-2 uppercase tracking-wide">{f.title}</h3>
                <p className="font-body-md text-white/60 mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {f.desc}
                </p>
                <div className="text-primary flex items-center gap-2 cursor-pointer uppercase text-sm font-bold tracking-widest group-hover:gap-4 transition-all duration-300">
                  {f.cta} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
