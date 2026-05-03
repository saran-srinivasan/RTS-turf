"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Activity, CircleDashed, Target, Trophy, Waves } from "lucide-react";

const sports = [
  {
    name: "CRICKET",
    desc: "Indoor nets & bowling machines",
    icon: Activity,
    img: "/batball.jpg",
    className: "bento-item-1",
  },
  {
    name: "SWIMMING",
    desc: "Swimming Pool",
    icon: Waves,
    img: "/swimmingpool.jpg",
    className: "bento-item-2",
  },
  {
    name: "BASKETBALL",
    desc: "FIBA standard courts",
    icon: CircleDashed,
    img: "/basketball.jpg",
    className: "bento-item-3",
  },
  {
    name: "PICKLEBALL",
    desc: "Fastest growing sport, elite courts",
    icon: Target,
    img: "/pickleball.jpg",
    className: "bento-item-4",
  },
  {
    name: "FOOTBALL",
    desc: "Certified turf",
    icon: Trophy,
    img: "/football.jpg",
    className: "bento-item-5",
  },
];

export default function Sports() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sports" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full bg-[#0a0c0c] overflow-hidden">
      <div className="w-full mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-primary font-bold text-sm tracking-[0.5em] uppercase mb-4 block">Disciplines</span>
          <h2 className="font-bebas-neue text-6xl md:text-8xl lg:text-9xl text-on-surface uppercase leading-none">
            Master Your <span className="text-gradient-gold">Game</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 w-full min-h-[600px] md:min-h-[800px]">
          {sports.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`
                relative rounded-[2.5rem] overflow-hidden border border-white/5 group cursor-pointer
                ${i === 0 ? "md:col-span-5 md:row-span-2 h-[500px] md:h-auto" : ""}
                ${i === 1 ? "md:col-span-7 md:row-span-1 h-[300px] md:h-auto" : ""}
                ${i === 2 ? "md:col-span-3 md:row-span-1 h-[300px] md:h-auto" : ""}
                ${i === 3 ? "md:col-span-2 md:row-span-1 h-[300px] md:h-auto" : ""}
                ${i === 4 ? "md:col-span-2 md:row-span-1 h-[300px] md:h-auto" : ""}
              `}
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  alt={s.name}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 pointer-events-none"
                  src={s.img}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

              <div className="absolute top-8 left-8">
                <div className="w-14 h-14 bg-primary/20 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-2xl">
                  <s.icon className="w-7 h-7" />
                </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="font-bebas-neue text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.05em] mb-3 leading-none">
                  {s.name}
                </h3>
                <p className="font-body-md text-white/70 text-base md:text-lg lg:text-xl line-clamp-2 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
