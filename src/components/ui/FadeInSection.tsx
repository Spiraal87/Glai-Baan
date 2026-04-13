'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  staggerChildren?: boolean;
}

export default function FadeInSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  staggerChildren = false,
}: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -40, opacity: 0 };
      case 'right':
        return { x: 40, opacity: 0 };
      case 'up':
      default:
        return { y: 40, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      case 'up':
      default:
        return { y: 0, opacity: 1 };
    }
  };

  if (staggerChildren && Array.isArray(children)) {
    const containerVariants = {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    };

    const itemVariants = {
      initial: getInitialPosition(),
      animate: getAnimatePosition(),
    };

    return (
      <motion.div
        ref={ref}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={containerVariants}
        className={className}
      >
        {children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
