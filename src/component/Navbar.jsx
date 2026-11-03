import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile, socials } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import { ease } from "../lib/motion";

const sectionIds = navLinks.map((link) => link.id);

const Logo = () => (
  <a href="#top" className="group flex items-center gap-2.5" aria-label={`${profile.name} — back to top`}>
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-lg font-bold text-ink-950 transition-transform duration-500 group-hover:rotate-[-8deg]">
      {profile.name.charAt(0)}
    </span>
    <span className="font-display text-lg font-semibold tracking-tight">
      {profile.name}
      <span className="text-accent">.</span>
    </span>
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className={`container-site mt-3 flex items-center justify-between rounded-2xl py-2.5 transition-all duration-500 ${
          scrolled ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : "border border-transparent"
        }`}
      >
        <Logo />

        <ul className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`relative z-10 block rounded-full px-4 py-1.5 text-sm transition-colors duration-300 ${
                  active === link.id ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {link.name}
              </a>
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.08]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden !py-2 lg:inline-flex">
          Hire Me <FiArrowUpRight aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-fg lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <FiMenu size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-50 flex flex-col bg-ink-950/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-site mt-3 flex items-center justify-between py-2.5">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03]"
                aria-label="Close menu"
                autoFocus
              >
                <FiX size={20} />
              </button>
            </div>

            <ul className="container-site mt-10 flex flex-1 flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.6, ease }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/[0.06] py-4 font-display text-4xl font-semibold tracking-tight"
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="container-site flex gap-3 pb-10">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip !py-2"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
