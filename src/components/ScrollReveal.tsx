"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number | "some" | "all";
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  amount = 0.1,
}: ScrollRevealProps) {
  const getVariants = (): any => {
    const hidden = {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 1,
    };

    switch (direction) {
      case "up":
        hidden.y = 40;
        break;
      case "down":
        hidden.y = -40;
        break;
      case "left":
        hidden.x = 40;
        break;
      case "right":
        hidden.x = -40;
        break;
      case "none":
        break;
    }

    return {
      hidden,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 18,
          duration: duration,
          delay: delay,
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
