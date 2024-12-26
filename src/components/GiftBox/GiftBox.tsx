import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiftMessage } from '../GiftMessage/GiftMessage';
import { GiftBoxPresent } from './GiftBoxPresent';
import { GiftBoxSides } from './GiftBoxSides';
import './GiftBox.css';

interface GiftBoxProps {
  name: string;
}

export function GiftBox({ name }: GiftBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <section className="above-fold">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="gift-message-wrapper"
          >
            <GiftMessage />
          </motion.div>
        ) : (
          <div className="wrap-present">
            <div className="present-box" onClick={handleClick}>
              <GiftBoxPresent isOpen={isOpen} />
              <GiftBoxSides name={name} />
            </div>
          </div>
        )}
      </AnimatePresence>
      {!isOpen && <p className="info-text">Click to Open Your Birthday Surprise!</p>}
    </section>
  );
}