import React from 'react';
import { Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export function MessageFooter() {
  return (
    <motion.div 
      className="signature"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <Gift className="gift-icon" size={32} />
      <p>With gratitude,</p>
      <p>Your Computer Science Students</p>
    </motion.div>
  );
}