import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

// Masked grid + soft glows, with a spotlight that trails the cursor.
const HeroBackground = () => {
  const reduce = useReducedMotion();
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduce) return undefined;
    const onMove = (e) => {
      x.set(e.clientX - 300);
      y.set(e.clientY + window.scrollY - 300);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="bg-grid mask-radial absolute inset-0" />

      <div className="absolute -right-40 -top-40 h-[38rem] w-[38rem] animate-drift rounded-full bg-accent/[0.07] blur-[120px]" />
      <div className="absolute -left-40 top-1/3 h-[32rem] w-[32rem] animate-drift rounded-full bg-violet-glow/[0.12] blur-[120px] [animation-delay:-9s]" />

      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(198,242,78,0.08),transparent_60%)]"
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
};

export default HeroBackground;
