import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const COOLDOWN_SECONDS = 30;

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;

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
  };

  const validateForm = () => {
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before sending.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const getFormattedTime = () => {
    return new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (cooldown > 0) {
      alert(`Please wait ${cooldown} seconds before sending another message.`);
      return;
    }

    if (!validateForm()) return;

    setLoading(true);

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

      alert("Thank you. I will get back to you as soon as possible.");
      setForm(initialFormState);
      setCooldown(COOLDOWN_SECONDS);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
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
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Please enter your name"
              autoComplete="name"
              disabled={loading}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:opacity-60"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Please enter your email address"
              autoComplete="email"
              disabled={loading}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:opacity-60"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Please enter your message"
              disabled={loading}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none disabled:opacity-60"
            />
          </label>

          <button
            type="submit"
            disabled={loading || cooldown > 0}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {getButtonText()}
          </button>

          <div className="border-t border-white/10 pt-6 mt-2 flex flex-col gap-4 text-secondary text-sm">
            <a
              href="https://www.linkedin.com/in/zexiangzhang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:zhangzexiang626@gmail.com"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <CiMail className="text-lg" />
              <span>zhangzexiang626@gmail.com</span>
            </a>

            <a
              href="tel:+19096005268"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <FaMobileAlt className="text-lg" />
              <span>+1 (909) 600-5268</span>
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");