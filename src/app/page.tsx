"use client";

import { motion } from "framer-motion";

const STAGGER = 0.7;

const particles = Array.from({ length: 50 }, (_, i) => {
  const driftY = -16 - Math.random() * 28;
  const driftX = Math.random() * 20 - 10;
  return {
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    s: 1.5 + Math.random() * 3.5,
    d: 18 + Math.random() * 28,
    delay: Math.random() * 20,
    o: 0.08 + Math.random() * 0.25,
    driftY,
    driftX,
  };
});

function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            opacity: p.o,
            background: "#f5e6c8",
            boxShadow: "0 0 6px rgba(245, 230, 200, 0.15)",
          }}
          animate={{
            y: [0, p.driftY, 0],
            x: [0, p.driftX, 0],
            opacity: [p.o, p.o * 2, p.o],
          }}
          transition={{
            duration: p.d,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const paragraphs = [
  "Even when the armor falls away and I no longer stand as solid as stone…",
  "Even when the strength I wear like iron gives way, and I crumble beneath the weight of the world…",
  "You hold me — with quiet strength, with grace.",
  "You hold my lowest moments with such tenderness, and in your hands they no longer feel so heavy. You make me feel not just loved — but chosen, deliberately and deeply. I could not have dreamed of a better reality than the one I get to live with you.",
  "I have always prided myself on being strong. But on the days when that strength falters, you are my refuge — my truest safe haven. You are the sanctuary I return to for peace, for reassurance, for moments of pure, quiet bliss.",
  "You are a kind of love I never knew existed — a love I would not have known how to ask for. You are so profoundly, achingly good to me, and there are moments I am simply in awe that I get to call you mine.",
];

function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="block w-8 h-px bg-gradient-to-r from-transparent via-[#f5e6c8]/20 to-transparent sm:w-12" />
      <span className="block w-1 h-1 rounded-full bg-[#f5e6c8]/15" />
      <span className="block w-8 h-px bg-gradient-to-r from-transparent via-[#f5e6c8]/20 to-transparent sm:w-12" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 sm:px-12 lg:px-24 overflow-hidden">
      <Particles />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none sm:w-[800px] sm:h-[800px]"
        style={{
          background:
            "radial-gradient(circle, rgba(60, 30, 50, 0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {paragraphs.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.6,
              delay: 0.2 + i * STAGGER,
              ease: [0.22, 0.08, 0.15, 1],
            }}
          >
            {i > 0 && <Divider className="mb-10 sm:mb-14" />}
            <p className="font-serif text-lg leading-relaxed sm:text-xl md:text-2xl text-[#f5e6c8] tracking-wide">
              {text}
            </p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.6,
            delay: 0.2 + paragraphs.length * STAGGER,
            ease: [0.22, 0.08, 0.15, 1],
          }}
        >
          <Divider className="mb-10 mt-14 sm:mb-14 sm:mt-20" />

          <p className="font-serif text-xl leading-relaxed sm:text-2xl md:text-3xl text-[#f5e6c8]">
            <span>Thank you, </span>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.4,
                delay: 0.2 + paragraphs.length * STAGGER + 1.2,
                ease: [0.22, 0.08, 0.15, 1],
              }}
              style={{
                textShadow: "0 0 24px rgba(245, 230, 200, 0.25)",
              }}
            >
              Jiniya.
            </motion.span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.6,
            delay: 0.2 + (paragraphs.length + 1) * STAGGER,
            ease: [0.22, 0.08, 0.15, 1],
          }}
        >
          <Divider className="mb-10 mt-14 sm:mb-12 sm:mt-20" />

          <p className="font-serif text-2xl leading-relaxed sm:text-3xl md:text-4xl text-[#f5e6c8]">
            I love you.{" "}
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  "0 0 4px rgba(245, 230, 200, 0.2)",
                  "0 0 14px rgba(245, 230, 200, 0.4)",
                  "0 0 28px rgba(245, 230, 200, 0.6)",
                  "0 0 48px rgba(245, 230, 200, 0.8)",
                  "0 0 28px rgba(245, 230, 200, 0.6)",
                  "0 0 14px rgba(245, 230, 200, 0.4)",
                  "0 0 4px rgba(245, 230, 200, 0.2)",
                ],
                scale: [1, 1.1, 1.04, 1.15, 1.04, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ♥
            </motion.span>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
