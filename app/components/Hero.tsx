"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const heading =
    "One of the most important pieces of a great product experience is you.";
  const description = "A creative agency that crafting a digital experience.";

  return (
    <>
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/1-fa617f73.png"
            fill
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)] pointer-events-none" />
        </div>
      </div>
      <section
        id="hero"
        className="wrapper flex flex-col sm:items-center justify-center gap-20  pb-4 sm:pb-20 relative"
      >
        <div className="flex flex-col gap-5 z-10 w-[90%] text-white">
          <h1 className="text-3xl md:text-5xl font-medium font-intergal text-left mt-20 sm:text-center">
            {heading.split(" ").map((word, index) => (
              <motion.span
                initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  bounce: 0.5,
                }}
                key={index}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              type: "spring",
              stiffness: 200,
              damping: 12,
              bounce: 0.5,
            }}
            className="text-lg md:text-xl font-normal font-sans text-left sm:text-center capitalize"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
              type: "spring",
              stiffness: 200,
              damping: 12,
              bounce: 0.5,
            }}
            className="flex sm:justify-center"
          >
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:translate-y-[-2px] transition-all duration-300">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get started
              </span>
            </button>
          </motion.div>
        </div>
        <video
          className="w-[90%] aspect-[16/9] rounded-lg z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/reverse-showcase (1).mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}
