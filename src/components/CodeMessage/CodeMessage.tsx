import React from 'react';
import { motion } from 'framer-motion';
import './CodeMessage.css';

export function CodeMessage() {
  const codeString = `/**
 * Dear Kunal Sir,
 * Today marks another revolution around the sun.
 * As your CS students, we've created this to celebrate you.
 */
class BirthdayWish {
  private Professor professor;
  
  public BirthdayWish(String name) {
    this.professor = new Professor("Kunal Sir");
    this.professor.addSkills([
      "Teaching Excellence",
      "Programming Wisdom",
      "Infinite Patience",
      "Debugging Mastery"
    ]);
  }

  @Override
  public void celebrate() {
    while(true) {
      professor.knowledge++;
      professor.impact++;
      professor.inspiration++;
      
      // Your guidance lights our path in CS
      students.forEach(student -> {
        student.learn(professor.wisdom);
        student.gratitude++;
      });
    }
  }

  public static void main(String[] args) {
    System.out.println("Happy Birthday, Kunal Sir! 🎉");
    new Thread(() -> {
      // May your year be filled with:
      professor.happiness *= 2;    // Double happiness
      professor.success += 100;    // More success
      professor.health += 100;     // Perfect health
      professor.joy = Integer.MAX_VALUE;
    }).start();
  }
}`;

  return (
    <motion.div 
      className="code-message"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <pre>
        <code>{codeString}</code>
      </pre>
    </motion.div>
  );
}