import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiArrowUpRight, FiCheck, FiLoader, FiSend } from "react-icons/fi";
import { profile, socials } from "../data/portfolio";
import SocialIcon from "./ui/SocialIcon";
import Reveal from "./ui/Reveal";

const endpoint = "https://portfolio-backend-d216.onrender.com/contact";

const fields = [
  { name: "fullName", label: "Full name", type: "text", placeholder: "Jane Doe", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", placeholder: "jane@company.com", autoComplete: "email" },
  { name: "organization", label: "Organization", type: "text", placeholder: "Company or project", autoComplete: "organization" },
];

const inputBase =
  "w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-[15px] text-fg placeholder:text-fg-subtle transition-colors duration-300 focus:border-accent/60 focus:bg-white/[0.05] focus:outline-none focus-visible:ring-0";

const Field = ({ formik, name, label, as = "input", ...props }) => {
  const error = formik.touched[name] && formik.errors[name];
  const Tag = as;
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-fg/80">
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${inputBase} ${error ? "border-red-400/60" : "border-white/10"} ${as === "textarea" ? "resize-none" : ""}`}
        {...props}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
};

const Contact = () => {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const formik = useFormik({
    initialValues: { fullName: "", email: "", organization: "", message: "" },
    validationSchema: Yup.object({
      fullName: Yup.string().required("This field is required"),
      email: Yup.string().required("This field is required").email("You must enter an email address"),
      organization: Yup.string().required("This field is required"),
      message: Yup.string().required("This field is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setStatus({ state: "sending", message: "" });
      try {
        const response = await axios.post(endpoint, values);
        setStatus({
          state: "success",
          message: response.data?.message || "Thanks! Your message has been sent.",
        });
        resetForm();
      } catch {
        setStatus({
          state: "error",
          message: "Something went wrong sending your message. Please try again or reach me on LinkedIn.",
        });
      }
    },
  });

  const channels = [
    ...(profile.email
      ? [{ name: "Email", handle: profile.email, href: `mailto:${profile.email}`, icon: "mail", external: false }]
      : []),
    ...socials.map((s) => ({ ...s, external: true })),
  ];

  const sending = status.state === "sending";

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-5 flex items-center gap-3">
                <span className="text-accent">05</span>
                <span className="h-px w-8 bg-white/30" aria-hidden="true" />
                Contact
              </p>
              <h2 id="contact-title" className="font-display text-5xl font-semibold leading-[1] tracking-tight text-balance sm:text-6xl">
                Let&apos;s build something{" "}
                <span className="font-serif font-normal italic text-accent">great</span> together.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted sm:text-lg">
                Whether you&apos;re a recruiter hiring for your team or a client with a product in mind, I&apos;d love to
                hear about it. Send a message and I&apos;ll get back to you.
              </p>
            </Reveal>

            <Reveal delay={0.1} as="ul" className="mt-10 space-y-3">
              {channels.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-ink-900/60 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-ink-850"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] text-fg-muted transition-colors duration-300 group-hover:bg-accent group-hover:text-ink-950">
                      <SocialIcon name={c.icon} size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium">{c.name}</span>
                      <span className="block truncate font-mono text-xs text-fg-subtle">{c.handle}</span>
                    </span>
                    <FiArrowUpRight
                      className="text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <form
              onSubmit={formik.handleSubmit}
              noValidate
              className="glass rounded-[1.75rem] p-6 sm:p-10"
              aria-describedby="form-status"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold tracking-tight">Send a message</h3>
                <span className="chip hidden sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> All fields required
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((f, i) => (
                  <div key={f.name} className={i === 2 ? "sm:col-span-2" : ""}>
                    <Field formik={formik} {...f} />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <Field
                    formik={formik}
                    as="textarea"
                    name="message"
                    label="Message"
                    rows={5}
                    placeholder="Tell me about your project, role or idea…"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary group w-full !py-3.5 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                >
                  {sending ? (
                    <>
                      <FiLoader className="animate-spin" aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>

                <div id="form-status" role="status" aria-live="polite" className="min-h-[1.25rem]">
                  <AnimatePresence mode="wait">
                    {(status.state === "success" || status.state === "error") && (
                      <motion.p
                        key={status.state}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`flex items-start gap-2 text-sm ${
                          status.state === "success" ? "text-accent" : "text-red-300"
                        }`}
                      >
                        {status.state === "success" ? (
                          <FiCheck className="mt-0.5 shrink-0" aria-hidden="true" />
                        ) : (
                          <FiAlertCircle className="mt-0.5 shrink-0" aria-hidden="true" />
                        )}
                        {status.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
