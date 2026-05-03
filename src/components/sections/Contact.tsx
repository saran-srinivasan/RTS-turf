"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-section-gap px-6 md:px-10 max-w-screen-2xl mx-auto">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Find Us</span>
          <h2 className="font-bebas-neue text-5xl md:text-6xl text-on-surface uppercase mb-10">
            <span className="text-gradient-gold"> Strykon</span> Sports Academy
          </h2>

          {/* TODO: ADD correct details */}

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-variant rounded-xl flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">The Turf</h4>
                <p className="text-white/50">
                  Korattur Main Road,
                  <br />
                  Korattur, Chennai, Tamil Nadu 600042
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-variant rounded-xl flex items-center justify-center text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Operating Hours</h4>
                <table className="text-white/50 text-sm">
                  <tbody>
                    <tr><td className="pr-8 py-1">Mon – Fri</td><td>6:00 AM – 11:00 PM</td></tr>
                    <tr><td className="pr-8 py-1">Sat – Sun</td><td>5:00 AM – 12:00 AM</td></tr>
                  </tbody>
                </table>
                <p className="text-primary text-xs mt-2 italic">*24/7 Access for Elite Members</p>
              </div>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/Hf2Bth2vCcF7aHBV9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 border border-white/20 px-6 py-4 rounded-lg text-white font-bold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
          >
            Get Directions <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310.4487059766357!2d80.19482132097176!3d13.118430487040833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52645e09cf0d7b%3A0x4a89224105bf8551!2sKorattur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1777802577912!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RT Strykon Sports Academy Location"
          />
        </motion.div>
      </div>
    </section>
  );
}