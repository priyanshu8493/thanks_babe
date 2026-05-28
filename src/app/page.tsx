"use client";

import { motion } from "framer-motion";

const lines = [
  "Even when the armor comes off and I am not as solid as a rock...",
  "Even when my tough, unyielding exterior falls away, and I find myself crumbling under the weight of the day...",
  "You hold me with such quiet strength and grace.",
  "You handle my lowest moments so beautifully, always making me feel endlessly loved and deliberately chosen. I could not have asked for a better reality than the one I share with you.",
  "I pride myself on being a strong man, but on the days when my strength falters, you are my absolute safe haven. You are the sanctuary I turn to for peace, reassurance, and a few moments of bliss.",
  "You are a kind of love I never even knew how to ask for. You are so profoundly good to me, and there are moments I am simply in awe that I get to call you mine.",
  "Thank you for being my anchor, Jiniya.",
];

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-16 sm:px-12 lg:px-24">
      <div className="max-w-2xl w-full space-y-10 text-center sm:space-y-12">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: index * 0.5,
              ease: "easeOut",
            }}
            className="font-serif text-lg leading-relaxed sm:text-xl md:text-2xl text-[#f5e6c8]"
          >
            {line}
          </motion.p>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: lines.length * 0.5,
            ease: "easeOut",
          }}
          className="font-serif text-2xl leading-relaxed sm:text-3xl md:text-4xl text-[#f5e6c8] mt-12"
        >
          I love you.{" "}
          <motion.span
            className="inline-block"
            animate={{
              textShadow: [
                "0 0 4px rgba(245, 230, 200, 0.2)",
                "0 0 16px rgba(245, 230, 200, 0.5)",
                "0 0 28px rgba(245, 230, 200, 0.7)",
                "0 0 16px rgba(245, 230, 200, 0.5)",
                "0 0 4px rgba(245, 230, 200, 0.2)",
              ],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ♥
          </motion.span>
        </motion.p>
      </div>
    </main>
  );
}
