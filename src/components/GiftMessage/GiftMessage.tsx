import React from 'react';
import { motion } from 'framer-motion';
import { CodeMessage } from '../CodeMessage/CodeMessage';
import { MessageHeader } from './MessageHeader';
import { MessageContent } from './MessageContent';
import { MessageFooter } from './MessageFooter';
import './GiftMessage.css';

export function GiftMessage() {
  return (
    <div className="gift-message">
      <motion.div 
        className="message-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MessageHeader />
        <CodeMessage />
        <MessageContent />
        <MessageFooter />
      </motion.div>
    </div>
  );
}