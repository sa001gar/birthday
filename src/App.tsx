import React from 'react';
import { motion } from 'framer-motion';
import { GiftBox } from './components/GiftBox/GiftBox';
import { FloatingBubbles } from './components/FloatingBubbles';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 text-white relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
            Happy Birthday Kunal Sir!
          </h1>
          
          <p className="text-xl mb-8 text-pink-200">
            From Your Computer Science Students
          </p>
        </motion.div>

        <GiftBox name="Kunal Sir" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-pink-200 italic">
            "A teacher affects eternity; he can never tell where his influence stops."
          </p>
          <p className="text-sm text-pink-300 mt-2">- Henry Adams</p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;