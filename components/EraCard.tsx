"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EraData } from "../data/eras";
import { useTypewriter } from "../hooks/useTypewriter";
import { PaperTexture } from "./PaperTexture";

interface EraCardProps {
  era: EraData;
  index: number;
  onVisible: (i: number) => void;
}

export function EraCard({ era, index, onVisible }: EraCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" });
  const entryInView = useInView(ref, { once: true, margin: "-100px" });
  const { displayed, done } = useTypewriter(era.description, era.isTypewriter ? inView : false, 22);

  useEffect(() => {
    if (inView) onVisible(index);
  }, [inView, index, onVisible]);

  const isDigital = era.id === "04";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={entryInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative overflow-hidden"
      style={{
        background: era.bg,
        border: `${era.borderWidth} solid ${era.border}`,
        borderRadius: 0,
        marginBottom: isDigital ? 0 : 0,
      }}
    >
      {era.hasTexture && <PaperTexture />}

      {isDigital && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#0D0D0D 1px, transparent 1px), linear-gradient(90deg, #0D0D0D 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      )}

      <div
        style={{
          height: era.id === "01" ? "6px" : era.id === "02" ? "5px" : era.id === "03" ? "4px" : "2px",
          background: era.accent,
          width: "100%",
        }}
      />

      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: `${era.borderWidth} solid ${era.border}` }}
      >
        <div className="flex items-center gap-4">
          <span
            className="font-black tracking-widest uppercase"
            style={{ color: era.accent, fontFamily: "'Space Mono', monospace", fontSize: "10px" }}
          >
            Object {era.id}
          </span>
          <span
            className="font-bold px-3 py-0.5"
            style={{
              background: era.accent,
              color: "#F5F0E8",
              fontSize: "11px",
              letterSpacing: "0.1em",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            {era.year} — {era.yearEnd}
          </span>
        </div>
        <motion.span
          className="font-black font-mono text-xl"
          style={{ color: era.accent }}
          animate={inView ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.4 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {era.symbol}
        </motion.span>
      </div>

      <div className={`p-6 ${isDigital ? "lg:grid lg:grid-cols-5 lg:gap-8" : ""}`}>
        <div className={isDigital ? "lg:col-span-3" : ""}>
          <h2
            className="uppercase leading-none mb-4"
            style={{
              fontSize: isDigital ? "clamp(1.8rem, 4vw, 3rem)" : "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: era.fontWeight,
              color: era.textPrimary,
              letterSpacing: era.letterSpacing,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {era.title}
          </h2>

          <div
            className="text-sm leading-relaxed mb-5 relative"
            style={{
              color: era.textSecondary,
              fontFamily: era.isTypewriter ? "'Space Mono', monospace" : "'DM Sans', sans-serif",
              fontSize: era.isTypewriter ? "13px" : "14px",
              minHeight: era.isTypewriter ? "5em" : undefined,
            }}
          >
            {era.isTypewriter ? (
              <>
                {displayed}
                {!done && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    style={{ display: "inline-block", width: "1px", height: "1em", background: era.accent, marginLeft: "1px", verticalAlign: "middle" }}
                  />
                )}
              </>
            ) : (
              era.description
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {era.medium.split(" · ").map((m) => (
              <span
                key={m}
                className="text-xs font-bold px-2 py-1"
                style={{
                  border: `${era.borderWidth} solid ${era.accent}`,
                  color: era.accent,
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`${isDigital ? "lg:col-span-2 lg:border-l-2 lg:pl-8 flex flex-col justify-center" : "border-t pt-4 mt-2"}`}
          style={{ borderColor: era.border, borderWidth: isDigital ? "1px" : undefined }}
        >
          <div
            className="text-xs mb-1 font-bold tracking-widest uppercase"
            style={{ color: era.accent, fontFamily: "'Space Mono', monospace" }}
          >
            Primary Source
          </div>
          <div
            className="font-black mb-1"
            style={{ color: era.textPrimary, fontSize: isDigital ? "1.1rem" : "0.9rem" }}
          >
            {era.artifact}
          </div>
          <div className="text-xs" style={{ color: era.textSecondary, fontFamily: "'Space Mono', monospace" }}>
            {era.source}
          </div>

          <div
            className="mt-4 p-3"
            style={{
              background: era.hasTexture ? "rgba(139,58,42,0.07)" : isDigital ? "rgba(215,38,61,0.05)" : "rgba(13,13,13,0.04)",
              borderLeft: `3px solid ${era.accent}`,
            }}
          >
            <div className="text-xs font-bold mb-1" style={{ color: era.accent, fontFamily: "'Space Mono', monospace" }}>
              Significance
            </div>
            <p className="text-xs leading-relaxed" style={{ color: era.textSecondary }}>
              {era.significance}
            </p>
          </div>

          {isDigital && (
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs" style={{ color: "#999", fontFamily: "'Space Mono', monospace" }}>Mass of communication</span>
              <div className="flex items-end gap-0.5">
                {[20, 14, 8, 2].map((h, i) => (
                  <motion.div
                    key={i}
                    style={{ width: "6px", height: `${h}px`, background: i === 3 ? "#D7263D" : `rgba(215,38,61,${0.2 + i * 0.15})` }}
                    initial={{ height: 0 }}
                    animate={entryInView ? { height: h } : { height: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
