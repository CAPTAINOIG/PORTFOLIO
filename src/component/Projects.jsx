import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, socials } from "../data/portfolio";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const hostname = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

const ProjectCard = ({ project, index }) => {
  const { title, category, image, imageFit, imagePosition, live, repo, tech, description } = project;
  const contain = imageFit === "contain";

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-white/[0.08] bg-ink-900/70 p-2.5 transition-colors duration-500 hover:border-white/15">
      {/* media */}
      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.06] bg-ink-850">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="ml-3 truncate font-mono text-[10px] text-fg-subtle">{hostname(live)}</span>
        </div>

        <div
          className={`relative aspect-[16/10] overflow-hidden ${
            contain ? "bg-[radial-gradient(circle_at_50%_40%,rgba(124,108,255,0.18),transparent_70%)]" : ""
          }`}
        >
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            decoding="async"
            className={`h-full w-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] ${
              contain ? "object-contain p-10 opacity-80" : "object-cover"
            } ${imagePosition === "top" ? "object-top" : "object-center"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center"
          >
            <span className="flex h-24 w-24 scale-50 items-center justify-center gap-1 rounded-full bg-accent text-sm font-semibold text-ink-950 opacity-0 shadow-[0_10px_50px_-10px_rgba(198,242,78,0.7)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:opacity-100">
              Visit <FiArrowUpRight />
            </span>
          </a>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col px-3.5 pb-4 pt-6 sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-fg-subtle">{String(index + 1).padStart(2, "0")}</span>
          {category && <span className="chip">{category}</span>}
        </div>

        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-[1.7rem]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-[15px]">{description}</p>

        {tech?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2.5 pt-7">
          <a href={live} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5">
            Live Demo <FiArrowUpRight aria-hidden="true" />
            <span className="sr-only">of {title} (opens in a new tab)</span>
          </a>
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-5 !py-2.5">
              <FiGithub aria-hidden="true" /> Code
              <span className="sr-only">for {title} on GitHub</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const github = socials.find((s) => s.icon === "github");

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          id="projects-title"
          index="03"
          label="Selected Work"
          title="Projects I've"
          accent="shipped."
          description="Real-world applications I've designed and built — each with a live demo you can explore."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1}>
              <div className={`h-full ${i % 2 === 1 ? "md:translate-y-16" : ""}`}>
                <ProjectCard project={project} index={i} />
              </div>
            </Reveal>
          ))}
        </div>

        {github && (
          <Reveal className="mt-16 flex justify-center md:mt-28">
            <a href={github.href} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
              <FiGithub aria-hidden="true" />
              More on GitHub
              <FiArrowUpRight
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Projects;
