import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { profile } from "../../data/portfolio";
import { ease } from "../../lib/motion";

// Token colours for the faux syntax highlighting
const tone = {
  k: "text-[#c792ea]", // keyword
  v: "text-fg", // variable
  p: "text-fg-subtle", // punctuation
  key: "text-[#82aaff]", // object key
  s: "text-accent", // string
  b: "text-[#f78c6c]", // boolean
  c: "text-fg-subtle italic", // comment
};

const q = (text) => ["s", `"${text}"`];

const lines = [
  [["c", "// developer.js"]],
  [["k", "const "], ["v", "developer"], ["p", " = {"]],
  [["key", "  name"], ["p", ": "], q(profile.name), ["p", ","]],
  [["key", "  role"], ["p", ": "], q("Full-Stack Developer"), ["p", ","]],
  [["key", "  stack"], ["p", ": {"]],
  [["key", "    frontend"], ["p", ": ["], q("React"), ["p", ", "], q("JavaScript"), ["p", "],"]],
  [["key", "    backend"], ["p", ": ["], q("Node.js"), ["p", ", "], q("Express"), ["p", "],"]],
  [["key", "    database"], ["p", ": ["], q("MongoDB"), ["p", ", "], q("MySQL"), ["p", "],"]],
  [["p", "  },"]],
  [["key", "  builds"], ["p", ": "], q("scalable, beautiful web apps"), ["p", ","]],
  [["key", "  openToWork"], ["p", ": "], ["b", "true"], ["p", ","]],
  [["p", "};"]],
];

const CodeWindow = () => {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="relative [perspective:1400px]" onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease }}
        className="relative"
      >
        {/* glow */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/30 via-white/5 to-violet-glow/30 opacity-70 blur-[2px]" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          {/* title bar */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
            </div>
            <div className="ml-2 rounded-md bg-white/[0.05] px-3 py-1 font-mono text-[11px] text-fg-muted">
              developer.js
            </div>
          </div>

          {/* code */}
          <pre className="overflow-x-auto px-4 py-5 font-mono text-[12px] leading-[1.75] sm:px-5 sm:text-[13px]">
            <code>
              {lines.map((tokens, i) => (
                <motion.span
                  key={i}
                  className="flex"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.07, duration: 0.4 }}
                >
                  <span className="mr-4 w-5 select-none text-right text-fg-subtle/50 sm:mr-5">{i + 1}</span>
                  <span className="whitespace-pre">
                    {tokens.map(([t, text], j) => (
                      <span key={j} className={tone[t]}>
                        {text}
                      </span>
                    ))}
                    {i === lines.length - 1 && (
                      <span className="ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[3px] animate-blink bg-accent" />
                    )}
                  </span>
                </motion.span>
              ))}
            </code>
          </pre>
        </div>

        {/* floating terminal chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7, ease }}
          className="absolute -bottom-14 right-4 rounded-xl border border-white/10 bg-ink-850/95 px-4 py-3 font-mono text-[11px] shadow-2xl backdrop-blur-xl sm:right-10"
        >
          <p className="text-fg-subtle">
            <span className="text-accent">$</span> npm run build
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-fg">
            <FiCheck className="text-accent" aria-hidden="true" /> ready for production
          </p>
        </motion.div>

        {/* floating API chip */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.7, ease }}
          className="absolute -right-2 -top-5 hidden rounded-xl border border-white/10 bg-ink-850/95 px-3.5 py-2.5 font-mono text-[11px] shadow-2xl backdrop-blur-xl sm:-right-6 sm:block"
        >
          <span className="mr-2 rounded bg-accent/15 px-1.5 py-0.5 text-accent">GET</span>
          <span className="text-fg-muted">/api/projects</span>
          <span className="ml-2 text-[#28c840]">200</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CodeWindow;
