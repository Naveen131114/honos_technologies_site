import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollReveal({ as = 'div', children, className, delay = 0, amount = 0.15, ...props }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = motion[as];

  return (
    <MotionElement
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
