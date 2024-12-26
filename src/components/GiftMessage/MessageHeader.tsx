import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function MessageHeader() {
  return (
    <motion.div 
      className="message-header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Star className="star-icon" size={24} />
      <h2>Dear Kunal Sir</h2>
      <Star className="star-icon" size={24} />
    </motion.div>
  );
}