import React from "react";
import {motion} from "framer-motion"

function BlurryBallsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large blue gradient in the background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"></div>

      {/* Blurry balls/spheres */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-blue-400 opacity-20 blur-3xl"
        initial={{ x: -100, y: -100 }}
        animate={{
          x: [-100, 50, -50],
          y: [-100, 50, -50],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl"
        initial={{ right: -100, top: 300 }}
        animate={{
          right: [-100, 50, -50],
          top: [300, 400, 350],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full bg-cyan-400 opacity-20 blur-3xl"
        initial={{ left: "50%", bottom: -100 }}
        animate={{
          left: ["50%", "40%", "60%"],
          bottom: [-100, 50, -50],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full bg-blue-300 opacity-20 blur-3xl"
        initial={{ right: "20%", top: "20%" }}
        animate={{
          right: ["20%", "25%", "15%"],
          top: ["20%", "25%", "15%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Small floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-blue-200 opacity-70 blur-sm"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}

export default BlurryBallsBackground;
