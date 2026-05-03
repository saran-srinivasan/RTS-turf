"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight, X, ZoomIn } from "lucide-react";

//temp images - TODO get image gallery
const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEyqb70Wi_f2aa_aECg6BeiUMiOztbeYU0XVqLRWaezgK05P4xf9Ef0DLoWPPRdwaBPrBjTfSHEkPJ78OxkxX_odGK-5vd9OhJVwQWg2OBOaQEg69JfZd3aKOOMImwNaW9o_25UxyBaUxrA0nUdSus9WeNe2XFEyzFmqSXp0eiCNxzrwMVnifHQzj-kwLYUr8qdxyZaP1HikV1d5BLnam_R1hdnHD7TftS8hPTj73t6AMVqvhcQUgDNxJH4lAwP0nm74qDlaNKf3ZN",
    alt: "Athletes training on the turf",
    className: "gallery-item-large",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_6U5i8Y69fMcDChhNf3L1S720-8ryghNOk2T6hI96c9KjwUzoAw041s4B5xWaKuhlyMCqIwmdfLiHAcS1-rnKBLGpvE-1dwS53jP2g_bnvDr2dyjcwJp_PJmP3a-OPDyjKO9fy2wyoxvAJ-Yx0Gbh_VHLZFUVRxTZCm2V-j_hM6CWdiaORx9i3aiXIOfIP9a-xOCI5-3Bn8QGrqy5gF2BuZgM3j5Isk6CeAVrWlpyPSYZpA3PUCdkDWvDponDgQL96GKNUWP63xSd",
    alt: "Tennis court detail",
    className: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4VBMf3Z0YDeN-x6SixitB4lQgPiZUOYcmq2fLwiC59CxArcovyE8IJL612yHPLWg-sBBbnLiLYXn2Oc2iltGL4U7xk5OMtSrPr1c_zue1PUGe1jVw1ByxPlkVu1RX6za_Mws1cCejrYpxBG2GjmhrL3ORjkc7i1QVM-7ebxQjhYFr8DItpnZxb5Q82jGBkulqSQ3FkhLvTjUh3hoez9xxKMW8rnzFSoseD9NKZojkicWPwnYk-ULAqkJcoEhR2DJ2Bn8j1bM2UPoS",
    alt: "Football on the pitch",
    className: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUVONVcjcFsF7XnNwRrw4IMwsqjsv3ttwvduwpda40ditLDeU2l4rFkF8wBxqtBHp6ITRstQZitw4Q_Lt7s1yiq_BLYrG7EWGhmQH1TXdRwhU1PKTPaDsIRiAqkeqyjnfni4WI2ZJ-rc4u8r-8P55w6M5HeyaaGgeR3wW585yMb-e5GDD2bCJedH6GZwVGUAonlR58xICqymvGo27ML0ToakzSLTcU8rmQQyDGS01ztipoyr4AQvQohTBJtfLx8uQxlA28DIMsUWy8",
    alt: "Swimming pool lane",
    className: "gallery-item-wide",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full bg-[#0a0c0c] overflow-hidden">
        <div className="w-full mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6"
          >
            <div className="text-center md:text-left">
              <span className="text-primary font-bold text-sm tracking-[0.4em] uppercase mb-4 block">Inside The Academy</span>
              <h2 className="font-bebas-neue text-6xl md:text-8xl text-on-surface uppercase leading-none">
                Visual <span className="text-gradient-gold">Excellence</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors cursor-pointer text-sm font-bold tracking-[0.2em] uppercase group">
              View Full Gallery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`
                relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5
                ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}
                ${i === 1 ? "md:col-span-1 md:row-span-1" : ""}
                ${i === 2 ? "md:col-span-1 md:row-span-1" : ""}
                ${i === 3 ? "md:col-span-2 md:row-span-1" : ""}
              `}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  src={img.src}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white/80 hover:text-white z-10" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Gallery fullscreen"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
