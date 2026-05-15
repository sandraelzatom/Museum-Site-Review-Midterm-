"use client";

import { motion } from "framer-motion";

export function SignalPulse() {
  return (
    <div className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden z-0">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{ borderColor: i % 2 === 0 ? "#D7263D" : "#1B3A6B", borderWidth: "1px" }}
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ width: "180vmax", height: "180vmax", opacity: 0 }}
          transition={{ duration: 4, delay: i * 1, ease: "easeOut", repeat: Infinity, repeatDelay: 4 }}
        />
      ))}
      <motion.div
        className="absolute w-2 h-2 rounded-full"
        style={{ background: "#F7B731" }}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.6, 1] }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
    </div>
  );
}
