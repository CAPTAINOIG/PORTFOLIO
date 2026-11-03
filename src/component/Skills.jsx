import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiVite,
} from "react-icons/si";
import { FiCode, FiDatabase, FiLayout, FiLink, FiServer, FiSmartphone, FiTool } from "react-icons/fi";
import { skillGroups } from "../data/portfolio";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import useSpotlight from "../hooks/useSpotlight";

// icon component + brand colour shown on hover
const techIcons = {
  react: [SiReact, "#61dafb"],
  js: [SiJavascript, "#f7df1e"],
  html: [SiHtml5, "#e34f26"],
  css: [SiCss3, "#1572b6"],
  tailwind: [SiTailwindcss, "#38bdf8"],
  bootstrap: [SiBootstrap, "#7952b3"],
  three: [SiThreedotjs, "#ffffff"],
  responsive: [FiSmartphone, "#c6f24e"],
  node: [SiNodedotjs, "#5fa04e"],
  express: [SiExpress, "#ffffff"],
  api: [FiCode, "#c6f24e"],
  plug: [FiLink, "#c6f24e"],
  mongo: [SiMongodb, "#47a248"],
  mysql: [SiMysql, "#4479a1"],
  git: [SiGit, "#f05032"],
  github: [SiGithub, "#ffffff"],
  vite: [SiVite, "#a78bfa"],
  netlify: [SiNetlify, "#32e6e2"],
};

const groupIcons = { layout: FiLayout, server: FiServer, database: FiDatabase, tools: FiTool };

// Bento placement: wide / narrow / narrow / wide
const spans = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2"];

const TechTile = ({ name, icon }) => {
  const [Icon, color] = techIcons[icon] ?? [FiCode, "#c6f24e"];
  return (
    <li
      className="group/tile flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05]"
      style={{ "--brand": color }}
    >
      <Icon
        aria-hidden="true"
        className="shrink-0 text-lg text-fg-muted transition-colors duration-300 group-hover/tile:text-[color:var(--brand)]"
      />
      <span className="text-sm font-medium text-fg/90">{name}</span>
    </li>
  );
};

const Skills = () => {
  const onMove = useSpotlight();
  const allTech = skillGroups.flatMap((g) => g.items);

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          id="skills-title"
          index="02"
          label="Skills & Technologies"
          title="A toolkit for the"
          accent="full stack."
          description="The technologies I use to design, build and ship web applications — from the interface down to the database."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const GroupIcon = groupIcons[group.icon] ?? FiCode;
            return (
              <Reveal
                key={group.title}
                delay={i * 0.08}
                onPointerMove={onMove}
                className={`spotlight group flex flex-col rounded-3xl border border-white/[0.08] bg-ink-900/70 p-6 transition-colors duration-500 hover:border-white/15 sm:p-8 ${spans[i]}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <GroupIcon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{group.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">{group.description}</p>
                  </div>
                  <span className="font-mono text-xs text-fg-subtle">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <ul
                  className={`mt-8 grid gap-2.5 ${
                    group.items.length > 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2"
                  }`}
                >
                  {group.items.map((item) => (
                    <TechTile key={item.name} {...item} />
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mask-fade-x relative mt-20 overflow-hidden border-y border-white/[0.06] py-6" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
          {[...allTech, ...allTech].map((item, i) => {
            const [Icon] = techIcons[item.icon] ?? [FiCode];
            return (
              <span key={i} className="flex items-center gap-3 font-display text-2xl font-medium text-fg-subtle">
                <Icon className="text-xl" />
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
