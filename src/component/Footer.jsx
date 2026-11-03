import { FiArrowUp } from "react-icons/fi";
import { navLinks, profile, socials } from "../data/portfolio";
import SocialIcon from "./ui/SocialIcon";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] pt-16">
      <div className="container-site">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">
              {profile.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-fg-muted">{profile.role}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-fg-muted">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="transition-colors hover:text-fg">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-2" aria-label="Social profiles">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-fg-muted transition-all duration-300 hover:border-accent/50 hover:text-accent"
                >
                  <SocialIcon name={s.icon} size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-white/[0.06] py-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name} · Dev OIG. All rights reserved.
          </p>
          <a href="#top" className="group inline-flex items-center gap-2 font-mono uppercase tracking-[0.15em] transition-colors hover:text-fg">
            Back to top
            <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* oversized wordmark */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] select-none text-center font-display text-[18vw] font-bold leading-none tracking-[-0.06em] text-white/[0.03]"
      >
        {profile.name}
      </p>
    </footer>
  );
};

export default Footer;
