"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "The turf quality here is unmatched in the city. Playing evening leagues under these lights feels like a professional setup. Highly recommended for serious squads.",
    name: "Ram",
    role: "Pro Member",
    stars: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdnbUzlY-72HrO6M78b_U6h383R7jfe64j-7gU00RdouJLAutY__14JnuY5Q-WBpecBbQ0pHGWcup6FBn-yu1m2ztJOXLzXbaGGaoPHi2o7GO8kgJREz2T6ZXGoh89bj6798QZ1KKVordYm13AyMGUGN0f38YBNOLdaW81vqfaVj-0ps9cgpeHeBs5jMLc84rzKJljVPa5ZDkLQ2P1H5vkouqk_8xF_6rFTxZ9D_1xMFIukI6i8-4Xx-WLwvOQ24wmq8WOHis2OIJM",
  },
  {
    text: "I trained at RT Strykon for my state-level swimming qualifiers. The temperature-controlled pool and elite coaching staff made all the difference in dropping my lap times.",
    name: "Yuvi",
    role: "Elite Member",
    stars: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnnQ-L02bcHCb01a-pVYUoMsywF23arMAorgarjLcWXiDgcQyazJnGlvjj2OMj7bhNy_HL4ZpQ5rIQHqDKz2sPOWGyqmQz6DcSSjZfn_W2ChGP0l2xTgnEoqEMwOglx7x6NspiUtJfWFyWYWQ9L1bgg4aBBqSw2NrxbbMF3vU-AYz-5XijB8ZxQCqZQZbmWNQMPMMtvlSOFSJD0Q0SlFDs2ciWNUoTtx04ju1CayjHvcqB9ROQnx3mtJaK4r0gMuOja6GChIXRBbNq",
  },
  {
    text: "The transition from standard courts to the pickleball setup here is night and day. Clean facilities, great community, and the booking process is seamless.",
    name: "Karthik",
    role: "Club Pass",
    stars: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZpoHzeEkQsF0DC12bkp72FM_7JzekUZixngaU4LolaPs_Xbq-aUq-QvSoV1964lUjglrtyRSWnQwYPE23MWEc2SacfCIbThSm0NGK-2qZU9hUZC7qWhaq-3m6vV5k6T8QZeZ6vdRfOX5vVNONYss9Y36LbCTBwxfoRfkL-dXATNwurovE0zNS0lGZNUlgCEIIDtT_bNFU7lyI1C1N7hnWI9yMR0H_Nepl8JeYSUWBYPEqRUCdZTF8NKB3x_gXoEOavaXJsOpM1Om-",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-surface-container-lowest py-section-gap border-y border-white/5">
      <div ref={ref} className="max-w-screen-2xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
          <h2 className="font-bebas-neue text-5xl md:text-6xl text-on-surface uppercase">
            The <span className="text-gradient-gold">Verdict</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="glass-card p-8 rounded-2xl relative group hover:border-primary/20 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-primary/15 w-12 h-12" />
              <div className="flex text-primary mb-5 gap-1">
                {Array.from({ length: r.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-white/75 mb-8 relative z-10 italic leading-relaxed text-sm">
                &quot;{r.text}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all">
                  <img alt={r.name} className="w-full h-full object-cover" src={r.img} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">{r.name}</h4>
                  <span className="text-primary text-xs uppercase">{r.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
