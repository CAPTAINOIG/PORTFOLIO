import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import { profile, socials } from "../../data/portfolio";
import SocialIcon from "../ui/SocialIcon";
import { ease } from "../../lib/motion";
import HeroBackground from "./HeroBackground";
import CodeWindow from "./CodeWindow";

const RotatingWord = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      {/* invisible sizer keeps width stable for the longest word */}
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {words.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          className="col-start-1 row-start-1 text-accent"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const Hero = () => {
  const letters = profile.name.split("");

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-24 pt-32 sm:pt-36 lg:min-h-screen lg:pb-16">
      <HeroBackground />

      <div className="container-site relative">
        <motion.p {...fadeUp(0.1)} className="chip mb-8 !py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-accent" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to new opportunities
        </motion.p>

        <h1 id="hero-title" className="font-display font-semibold tracking-tight">
          <motion.span {...fadeUp(0.2)} className="block font-serif text-3xl font-normal italic text-fg-muted sm:text-4xl">
            Hi, I&apos;m
          </motion.span>
          <span className="sr-only">{profile.name}, {profile.role}</span>
          <span
            aria-hidden="true"
            className="-ml-[0.04em] block overflow-hidden pb-[0.08em] text-[clamp(3.25rem,15vw,11.5rem)] leading-[0.9] tracking-[-0.045em]"
          >
            {letters.map((char, i) => (
              <motion.span
                key={i}
                className="text-gradient inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.25 + i * 0.035, ease }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              className="inline-block text-accent"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 + letters.length * 0.035 + 0.2, ease }}
            >
              .
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid items-center gap-16 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-6">
            <motion.p {...fadeUp(0.6)} className="font-display text-2xl font-medium leading-snug sm:text-3xl">
              {profile.role}
              <br />
              <span className="text-fg-muted">Proficient in </span>
              <RotatingWord words={profile.focus} />
            </motion.p>

            <motion.p {...fadeUp(0.7)} className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
              {profile.intro}
            </motion.p>

            <motion.div {...fadeUp(0.8)} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary group">
                View Projects
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
            </motion.div>

            <motion.ul {...fadeUp(0.9)} className="mt-10 flex items-center gap-2" aria-label="Social profiles">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-fg-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                  >
                    <SocialIcon name={s.icon} size={18} />
                  </a>
                </li>
              ))}
              <li className="ml-3 hidden font-mono text-xs text-fg-subtle sm:block">@{socials[0].handle}</li>
            </motion.ul>
          </div>

          <div className="min-w-0 lg:col-span-6 lg:pl-6">
            <CodeWindow />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle transition-colors hover:text-fg lg:flex"
      >
        Scroll <FiArrowDown className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
