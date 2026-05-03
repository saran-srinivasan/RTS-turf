"use client";

const sports = [
  "CRICKET", "FOOTBALL", "SWIMMING", "BASKETBALL", "PICKLEBALL",
  "CRICKET", "FOOTBALL", "SWIMMING", "BASKETBALL", "PICKLEBALL",
];

export default function Marquee() {
  return (
    <div className="bg-primary py-4 border-y border-yellow-600/30 marquee-container w-full">
      <div className="marquee-track">
        {[0, 1].map((set) => (
          <div key={set} className="flex gap-10 items-center px-5">
            {sports.map((s, i) => (
              <span key={`${set}-${i}`} className="flex items-center gap-10">
                <span className="font-bebas-neue text-3xl text-on-primary-container tracking-widest uppercase whitespace-nowrap">
                  {s}
                </span>
                <span className="text-black/20 text-2xl">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
