"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { eras } from "../data/eras";
import { SignalPulse } from "../components/SignalPulse";
import { TimelineSpine } from "../components/TimelineSpine";
import { EraCard } from "../components/EraCard";

export default function MuseumJourneyPage() {
  const [activeEra, setActiveEra] = useState(0);
  const handleVisible = useCallback((i: number) => setActiveEra(i), []);

  return (
    <div
      className="relative min-h-screen"
      style={{ background: "#F5F0E8", color: "#0D0D0D", fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;0,900;1,400&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <SignalPulse />

      {/* ── NAV ── */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-30 flex items-stretch border-b-4 border-black"
        style={{ background: "#0D0D0D" }}
      >
        <div className="flex items-center px-6 py-4 border-r-4 border-black" style={{ background: "#D7263D" }}>
          <span className="text-white font-black text-xs tracking-widest uppercase leading-snug">
            Museum of<br />Communication
          </span>
        </div>
        <div className="flex items-center px-6">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#F7B731" }}>
            The Distance Defeaters
          </span>
        </div>
        <div className="flex items-center gap-0 ml-auto">
          {["Collection", "Archive", "Visit"].map((label) => (
            <a
              key={label}
              href="#"
              className="px-5 py-5 text-xs font-bold tracking-widest uppercase transition-colors duration-150"
              style={{ color: "#F5F0E8", borderLeft: "1px solid #333" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#D7263D")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* ── HERO ── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 border-b-4 border-black grid"
        style={{ gridTemplateColumns: "1fr 1fr", minHeight: "50vh" }}
      >
        <div className="flex flex-col justify-end p-10 border-r-4 border-black gap-3">
          <div className="text-xs font-black tracking-widest uppercase mb-1" style={{ color: "#D7263D", fontFamily: "'Space Mono', monospace" }}>
            Permanent Collection · 2024
          </div>
          <h1
            className="font-black uppercase leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.025em" }}
          >
            Signals<br />
            <span style={{ color: "#1B3A6B" }}>Across</span><br />
            Time
          </h1>
          <p className="text-sm leading-relaxed max-w-xs mt-2" style={{ color: "#555" }}>
            Four pivotal epochs in the history of human communication — from electric wire to digital packet. Scroll to travel the signal.
          </p>
        </div>
        <div className="relative overflow-hidden" style={{ background: "#1B3A6B" }}>
          <div className="absolute" style={{ width: "110%", paddingBottom: "110%", borderRadius: "50%", background: "#F7B731", top: "-25%", left: "-25%", opacity: 0.15 }} />
          <div className="absolute bottom-0 left-0 right-0 h-5" style={{ background: "#D7263D" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-black text-white" style={{ fontSize: "clamp(5rem, 16vw, 14rem)", fontFamily: "'Space Mono', monospace", opacity: 0.15 }}>04</span>
          </div>
          <div className="absolute bottom-10 right-8 text-right">
            <span className="font-mono font-bold text-white text-xs tracking-widest opacity-70">ERAS<br />OF SIGNAL</span>
          </div>
        </div>
      </motion.header>

      {/* ── SECTION LABEL ── */}
      <div className="relative z-10 flex items-center border-b-4 border-black" style={{ background: "#F7B731" }}>
        <div className="px-8 py-3 border-r-4 border-black">
          <span className="font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>
            The Journey
          </span>
        </div>
        <div className="px-8 py-3">
          <span className="font-mono text-xs">§01 — Chronological Exhibit · Scroll to Advance the Signal</span>
        </div>
        <div className="ml-auto px-8 py-3 flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ background: "#0D0D0D" }}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span className="font-mono text-xs">Live Signal</span>
        </div>
      </div>

      {/* ── MAIN CONTENT: Timeline + Cards ── */}
      <div className="relative z-10 lg:grid" style={{ gridTemplateColumns: "180px 1fr" }}>
        {/* Sticky Timeline Spine */}
        <div className="hidden lg:block">
          <TimelineSpine activeIndex={activeEra} />
        </div>

        {/* Era Cards */}
        <div className="border-l-4 border-black">
          {eras.map((era, i) => (
            <div key={era.id} style={{ borderBottom: i < eras.length - 1 ? "4px solid #0D0D0D" : undefined }}>
              <EraCard era={era} index={i} onVisible={handleVisible} />
            </div>
          ))}
        </div>
      </div>

      {/* ── CLOSING STATEMENT ── */}
      <motion.div
        className="relative z-10 border-t-4 border-black p-12 text-center"
        style={{ background: "#0D0D0D" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: "#D7263D", fontFamily: "'Space Mono', monospace" }}>
          The Distance Defeaters · Thesis
        </div>
        <p className="text-lg font-bold max-w-2xl mx-auto leading-relaxed" style={{ color: "#F5F0E8" }}>
          From 1837 to today, every leap in communication technology has had one purpose:{" "}
          <span style={{ color: "#F7B731" }}>to make distance irrelevant.</span>{" "}
          The signal always found a way through.
        </p>
        <div className="flex justify-center gap-2 mt-8">
          {["#D7263D", "#1B3A6B", "#F7B731"].map((c) => (
            <div key={c} className="w-5 h-5" style={{ background: c }} />
          ))}
        </div>
      </motion.div>

      {/* ── FOOTER ── */}
      <footer
        className="relative z-10 flex items-center justify-between px-10 py-4 border-t-4 border-black"
        style={{ background: "#0D0D0D", color: "#F5F0E8" }}
      >
        <span className="text-xs font-bold tracking-widest uppercase opacity-50" style={{ fontFamily: "'Space Mono', monospace" }}>
          Museum of Communication · Est. 2024
        </span>
        <span className="text-xs font-mono opacity-40">sandraelzatom / history-of-communication</span>
      </footer>
    </div>
  );
}
