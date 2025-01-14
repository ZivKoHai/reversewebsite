"use client";

import { motion } from "framer-motion";

export default function HeadingSections({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{
        delay: 0.1,
        type: "spring",
      }}
      className="text-3xl md:text-4xl font-medium font-intergal text-left"
    >
      {children}
    </motion.h2>
  );
}
