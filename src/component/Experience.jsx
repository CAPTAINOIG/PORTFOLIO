import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import { education, experience } from "../data/portfolio";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const entries = [
  ...experience.map((item) => ({ ...item, type: "Experience" })),
  ...education.map((item) => ({ ...item, type: "Education" })),
];

const TimelineItem = ({ item, index }) => {
  const Icon = item.type === "Experience" ? FiBriefcase : FiBookOpen;

  return (
    <Reveal as="li" delay={index * 0.05} className="relative grid gap-3 pb-14 pl-10 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-10 md:pl-0">
      {/* node on the line */}
      <span
        className="absolute left-0 top-1 grid h-[19px] w-[19px] place-items-center rounded-full border border-accent/40 bg-ink-950 md:left-[calc(11rem+1.25rem-9px)]"
        aria-hidden="true"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </span>

      <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle md:pt-1 md:text-right">{item.period}</p>

      <div className="md:pl-2">
        <div className="rounded-2xl border border-white/[0.08] bg-ink-900/60 p-5 transition-colors duration-300 hover:border-white/15 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="chip mb-4">
                <Icon className="text-accent" aria-hidden="true" />
                {item.type}
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
              <p className="mt-1 text-sm text-fg-muted">{item.org}</p>
            </div>
            {item.logo && (
              <img
                src={item.logo}
                alt=""
                loading="lazy"
                className="h-12 w-12 shrink-0 rounded-xl bg-white/90 object-contain p-1.5"
              />
            )}
          </div>
          {item.description && <p className="mt-4 text-sm leading-relaxed text-fg-muted">{item.description}</p>}
        </div>
      </div>
    </Reveal>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          id="experience-title"
          index="04"
          label="Experience & Education"
          title="The path so"
          accent="far."
          description="Hands-on building, backed by focused full-stack training and a foundation in public administration."
        />

        <div ref={ref} className="relative mx-auto max-w-4xl">
          {/* track + scroll-linked progress */}
          <div className="absolute bottom-0 left-[9px] top-1 w-px bg-white/[0.08] md:left-[calc(11rem+1.25rem)]" aria-hidden="true">
            <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-gradient-to-b from-accent via-accent/60 to-transparent" />
          </div>

          <ol>
            {entries.map((item, i) => (
              <TimelineItem key={`${item.org}-${item.title}`} item={item} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
