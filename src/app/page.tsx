"use client";
import Navbar from "@/app/components/navbar/navbar";
import Body from "@/app/components/body/body";
import Footer from "@/app/components/footer/footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { SponsorProps } from '../app/components/Sponsors'
import sponsors from '@/data/sponsors.json'
import { SponsorsGrid } from '@/app/components/Sponsors/grid'


export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  return (
    <div className="relative" style={{ minHeight: "100vh" }}>
      <motion.div
      className="relative z-10 flex flex-col flex-grow"
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
        <Body />
        <SponsorsGrid sponsors={sponsors as SponsorProps[]} />
        <Footer isVisible={isAnimationComplete} />
      </motion.div>
    </div>
  );
}
