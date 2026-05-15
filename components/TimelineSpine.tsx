"use client";

import { motion } from "framer-motion";
import { eras } from "../data/eras";

export function TimelineSpine({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="hidden lg:flex flex-col items-center sticky top-0 h-screen z-20 py-16 justify-center">
      <div className="relative flex flex-col items-center gap-0" style={{ height: "70vh" }}>
        {/* Track line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: "rgba(13,13,13,0.15)" }}
        />
        {/* Lit fill */}
        <motion.div
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 origin-top"
          style={{
            background: "linear-gradient(to bottom, #D7263D, #F7B731)",
            boxShadow: "0 0 6px rgba(215,38,61,0.5)",
          }}
          animate={{ height: `${((activeIndex + 1) / eras.length) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Era nodes */}
        {eras.map((era, i) => (
          <div
            key={era.id}
            className="absolute flex items-center gap-3"
            style={{ top: `${(i / (eras.length - 1)) * 100}%`, transform: "translateY(-50%)" }}
          >
            <motion.div
              className="w-3 h-3 rounded-full border-2 flex-shrink-0 relative z-10"
              style={{
                borderColor: i <= activeIndex ? era.accent : "rgba(13,13,13,0.25)",
                background: i <= activeIndex ? era.accent : "white",
                boxShadow: i === activeIndex ? `0 0 10px ${era.accent}` : "none",
              }}
              animate={{ scale: i === activeIndex ? 1.4 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-left" style={{ minWidth: "90px" }}>
              <div
                className="text-xs font-black tracking-widest uppercase"
                style={{ color: i <= activeIndex ? era.accent : "rgba(13,13,13,0.3)", fontFamily: "'Space Mono', monospace", fontSize: "9px" }}
              >
                {era.year}
              </div>
              <div
                className="text-xs font-bold leading-tight"
                style={{ color: i <= activeIndex ? "#0D0D0D" : "rgba(13,13,13,0.3)", fontSize: "10px" }}
              >
                {era.title.replace("The ", "")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
