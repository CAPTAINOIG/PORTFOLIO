import Reveal from "./Reveal";

// Consistent "01 — Label" eyebrow + display heading used by every section.
const SectionHeader = ({ index, label, title, accent, description, id }) => (
  <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end">
    <Reveal className="md:col-span-7">
      <p className="eyebrow mb-5 flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-white/30" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
        {title} {accent && <span className="font-serif font-normal italic text-accent">{accent}</span>}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={0.1} className="md:col-span-5">
        <p className="max-w-md text-base leading-relaxed text-fg-muted md:ml-auto">{description}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHeader;
