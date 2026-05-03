"use client";
import { ArrowUp, Camera, Play, Users, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-neutral-950 w-full pt-20 pb-8 border-t border-white/5 relative">
      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/RTS-turf/RT_Strykon_Colour.png"
              alt="RT Strykon"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-bebas-neue uppercase text-2xl font-black text-gradient-gold">RT STRYKON</span>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Forging champions through discipline, elite facilities, and relentless dedication to athletic excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {["Facilities", "Sports", "Membership", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-neutral-500 hover:text-white transition-colors text-sm"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Contact</h4>
          <ul className="space-y-3 text-neutral-500 text-sm">
            <li>contactus@rtstrykon.com</li>
            <li>+91 98765 43210</li>
            <li>Korattur, Chennai 600053</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Follow Us</h4>
          <div className="flex gap-3">
            {[
              { icon: Camera, label: "Instagram" },
              { icon: Play, label: "YouTube" },
              { icon: Users, label: "Facebook" },
              { icon: MessageSquare, label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-500 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 max-w-screen-2xl mx-auto gap-4">
        <p className="text-neutral-600 text-xs">
          © {new Date().getFullYear()} RT Strykon Sports Academy. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-neutral-500 hover:text-primary text-xs uppercase tracking-widest transition-colors group"
        >
          Back to top
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
