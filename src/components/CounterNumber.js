import React from 'react';
import { motion } from 'framer-motion';

function NumberCounter() {
  return (
    <div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
        count={10}
      >
        {/* Animated number counter goes here */}
      </motion.span>
    </div>
  );
}

export default NumberCounter;
