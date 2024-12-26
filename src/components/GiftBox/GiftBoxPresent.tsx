import React from 'react';
import { motion } from 'framer-motion';

interface GiftBoxPresentProps {
  isOpen: boolean;
}

export function GiftBoxPresent({ isOpen }: GiftBoxPresentProps) {
  return (
    <motion.div 
      className="present"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="img-wrap">
        <div className="surprise-text">🎉 Click to reveal your surprise! 🎉</div>
      </div>
    </motion.div>
  );
}