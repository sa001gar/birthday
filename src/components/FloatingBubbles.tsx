import { motion } from 'framer-motion';
import { Code, Heart, Laptop, GraduationCap } from 'lucide-react';

const icons = [Code, Heart, Laptop, GraduationCap];

export function FloatingBubbles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100
            }}
            animate={{
              y: -100,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Icon className="text-pink-500 opacity-30" size={24} />
          </motion.div>
        );
      })}
    </div>
  );
}