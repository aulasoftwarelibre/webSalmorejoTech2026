"use client";
import Navbar from "@/app/components/navbar/navbar";
import Schedule from "@/app/components/timetable/Timetable";
import Footer from "@/app/components/footer/footer";
import Background from "@/app/components/background/background";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TimetablePage() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  return (
    <div className="relative" style={{ minHeight: "100vh" }}>
      <Background />
      <motion.div
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setIsAnimationComplete(true)}
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
            y: 50,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1.25,
            },
            y: 0,
          },
        }}
        style={{ position: "relative", zIndex: 10 }}
      >
        <Navbar />
        <Schedule />
        <Footer isVisible={isAnimationComplete} />
      </motion.div>
    </div>
  );
}
