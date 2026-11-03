import { FiDatabase, FiLayers, FiLayout, FiServer } from "react-icons/fi";
import { about } from "../data/portfolio";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import useSpotlight from "../hooks/useSpotlight";

const roles = [
  { icon: FiLayers, title: "Web Developer" },
  { icon: FiLayout, title: "Frontend Developer" },
  { icon: FiServer, title: "Backend Developer" },
  { icon: FiDatabase, title: "MongoDB" },
];

const About = () => {
  const onMove = useSpotlight();

  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader id="about-title" index="01" label="About" title="Engineering the whole" accent="experience." />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
                {about.statement}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08]">
              {about.stats.map((stat) => (
                <div key={stat.label} className="bg-ink-900 p-6">
                  <p className="font-display text-5xl font-semibold tracking-tight text-accent">{stat.value}</p>
                  <p className="mt-2 text-sm text-fg-muted">{stat.label}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.15} as="ul" className="mt-8 flex flex-wrap gap-2" aria-label="Roles">
              {roles.map(({ icon: Icon, title }) => (
                <li key={title} className="chip !py-2 !text-xs">
                  <Icon className="text-accent" aria-hidden="true" />
                  {title}
                </li>
              ))}
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
              {about.paragraphs.map((text, i) => (
                <Reveal key={i} delay={i * 0.08} as="p">
                  {text}
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-12">
              <p className="eyebrow mb-5">How I work</p>
              <ul className="grid gap-4 sm:grid-cols-3">
                {about.principles.map((item, i) => (
                  <li
                    key={item.title}
                    onPointerMove={onMove}
                    className="spotlight rounded-2xl border border-white/[0.08] bg-ink-900/60 p-5 transition-colors duration-300 hover:border-white/15"
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <h3 className="mt-4 font-display text-lg font-semibold leading-tight">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
