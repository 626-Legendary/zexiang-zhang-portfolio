import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaMobileAlt } from "react-icons/fa";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const initialStatusState = {
  type: "idle",
  message: "",
};

const COOLDOWN_SECONDS = 30;
const contactAccent = {
  primary: "#00cea8",
  secondary: "#bf61ff",
};

const contactMethods = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zexiangzhang",
    href: "https://www.linkedin.com/in/zexiangzhang",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "Email",
    value: "zhangzexiang626@gmail.com",
    href: "mailto:zhangzexiang626@gmail.com",
    icon: CiMail,
  },
  {
    label: "Phone",
    value: "+1 (909) 600-5268",
    href: "tel:+19096005268",
    icon: FaMobileAlt,
  },
];

const inputClassName =
  "w-full rounded-[18px] border border-white/10 bg-tertiary px-5 py-4 text-[15px] font-medium text-white outline-none transition duration-300 placeholder:text-secondary focus:border-[#00cea8]/40 focus:bg-black/30 disabled:cursor-not-allowed disabled:opacity-60";

const getValidationError = ({ name, email, message }) => {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return "Please fill out all fields before sending.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(trimmedEmail)) {
    return "Please enter a valid email address.";
  }

  return "";
};

const getFormattedTime = () =>
  new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const ContactMethod = ({ method }) => {
  const Icon = method.icon;

  return (
    <a
      href={method.href}
      target={method.external ? "_blank" : undefined}
      rel={method.external ? "noopener noreferrer" : undefined}
      className='group flex items-center gap-4 rounded-[18px] border border-white/10 bg-black/20 px-4 py-3 text-secondary transition duration-300 hover:border-white/20 hover:bg-black/30 hover:text-white'
    >
      <span
        className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10'
        style={{
          backgroundColor: "rgba(0, 206, 168, 0.12)",
          color: contactAccent.primary,
          boxShadow: "0 0 0 1px rgba(191, 97, 255, 0.08)",
        }}
      >
        <Icon className='h-5 w-5' aria-hidden='true' />
      </span>
      <div className='min-w-0'>
        <p className='text-[11px] uppercase tracking-[0.22em] text-secondary transition-colors duration-300 group-hover:text-secondary'>
          {method.label}
        </p>
        <p className='mt-1 break-all text-[14px] font-medium leading-[22px] text-white'>
          {method.value}
        </p>
      </div>
    </a>
  );
};

const Contact = () => {
  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [status, setStatus] = useState(initialStatusState);

  useEffect(() => {
    if (cooldown <= 0) return undefined;

    const timer = window.setTimeout(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [cooldown]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    if (status.type !== "idle") {
      setStatus(initialStatusState);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (cooldown > 0) {
      setStatus({
        type: "error",
        message: `Please wait ${cooldown} seconds before sending another message.`,
      });
      return;
    }

    const validationError = getValidationError(form);

    if (validationError) {
      setStatus({
        type: "error",
        message: validationError,
      });
      return;
    }

    setLoading(true);
    setStatus(initialStatusState);

    const templateParams = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      time: getFormattedTime(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm(initialFormState);
      setCooldown(COOLDOWN_SECONDS);
      setStatus({
        type: "success",
        message: "Thank you. I will get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const getButtonText = () => {
    if (loading) return "Sending...";
    if (cooldown > 0) return `Wait ${cooldown}s`;
    return "Send";
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='relative flex-[0.75] overflow-hidden rounded-2xl bg-black-100 p-8 sm:p-10'
      >
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,206,168,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(191,97,255,0.14),transparent_34%)]' />
        <div className='pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:22px_22px]' />

        <div className='relative'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-6'>
            <label className='flex flex-col gap-3'>
              <span className='text-[11px] uppercase tracking-[0.24em] text-secondary'>
                Your Name
              </span>
              <input
                required
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Please enter your name'
                autoComplete='name'
                disabled={loading}
                className={inputClassName}
              />
            </label>

            <label className='flex flex-col gap-3'>
              <span className='text-[11px] uppercase tracking-[0.24em] text-secondary'>
                Your Email
              </span>
              <input
                required
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Please enter your email address'
                autoComplete='email'
                disabled={loading}
                className={inputClassName}
              />
            </label>

            <label className='flex flex-col gap-3'>
              <span className='text-[11px] uppercase tracking-[0.24em] text-secondary'>
                Your Message
              </span>
              <textarea
                required
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Please enter your message'
                disabled={loading}
                className={`${inputClassName} resize-none`}
              />
            </label>

            <div className='flex flex-col items-start gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center'>
              <button
                type='submit'
                disabled={loading || cooldown > 0}
                className='inline-flex min-w-[152px] shrink-0 items-center justify-center whitespace-nowrap rounded-xl px-8 py-3 text-center text-[12px] font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'
                style={{
                  background:
                    "linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)",
                  boxShadow: "0 14px 30px rgba(191, 97, 255, 0.18)",
                }}
              >
                {getButtonText()}
              </button>
            </div>

            {status.message ? (
              <div
                className={`rounded-[18px] border px-4 py-3 text-[14px] leading-[22px] ${
                  status.type === "success"
                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
                    : "border-rose-400/20 bg-rose-400/10 text-rose-100"
                }`}
              >
                {status.message}
              </div>
            ) : null}

            <div className='mt-2 grid gap-3 border-t border-white/10 pt-6 text-sm'>
              {contactMethods.map((method) => (
                <ContactMethod key={method.label} method={method} />
              ))}
            </div>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
