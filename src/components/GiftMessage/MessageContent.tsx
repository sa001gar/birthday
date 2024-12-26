import React from 'react';
import { Code, Laptop, GraduationCap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const messages = [
  { 
    icon: Code, 
    text: "Thank you for teaching us the art of programming",
    color: "from-blue-500 to-cyan-400"
  },
  { 
    icon: Laptop, 
    text: "Your passion for technology inspires us daily",
    color: "from-purple-500 to-pink-400"
  },
  { 
    icon: GraduationCap, 
    text: "You've shaped our future in computer science",
    color: "from-green-500 to-emerald-400"
  },
  { 
    icon: Heart, 
    text: "Wishing you joy, success, and happiness",
    color: "from-red-500 to-rose-400"
  }
];

export function MessageContent() {
  return (
    <div className="message-content space-y-6 py-4">
      {messages.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div 
            key={index}
            className="message-card"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 * (index + 1) }}
          >
            <div className={`p-6 rounded-xl bg-gradient-to-r ${item.color} shadow-lg transform hover:scale-105 transition-transform duration-300`}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                  <Icon className="text-white" size={28} />
                </div>
                <p className="text-white text-lg font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}