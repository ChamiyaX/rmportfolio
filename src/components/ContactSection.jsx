import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const INITIAL_FORM = {
  from_name: "",
  from_email: "",
  message: ""
};

export default function ContactSection() {
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  // Validate required inputs and email format before sending.
  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.from_name.trim()) {
      nextErrors.from_name = "Name is required.";
    }

    if (!formValues.from_email.trim()) {
      nextErrors.from_email = "Email is required.";
    } else if (!emailPattern.test(formValues.from_email)) {
      nextErrors.from_email = "Please enter a valid email address.";
    }

    if (!formValues.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS environment variables are missing. Please check your .env file."
      });
      return;
    }

    try {
      setIsSending(true);
      setErrors({});
      setStatus({ type: "", message: "" });
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formValues.from_name.trim(),
          from_email: formValues.from_email.trim(),
          name: formValues.from_name.trim(),
          email: formValues.from_email.trim(),
          reply_to: formValues.from_email.trim(),
          message: formValues.message.trim()
        },
        { publicKey }
      );
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormValues(INITIAL_FORM);
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Contact Me" subtitle="Let's Work Together" />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Contact details */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="glass-panel space-y-6 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Direct Contact</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
              Prefer direct communication? Reach me through phone or email.
            </p>

            <a
              href="tel:+94767184785"
              className="group flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition-all duration-300 hover:border-brand-500 hover:bg-brand-500/5 dark:border-slate-700"
            >
              <Phone size={18} className="text-brand-500" />
              <span className="text-slate-700 transition-colors group-hover:text-brand-500 dark:text-slate-300">
                0767184785
              </span>
            </a>

            <a
              href="mailto:chamidu.rk@gmail.com"
              className="group flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition-all duration-300 hover:border-brand-500 hover:bg-brand-500/5 dark:border-slate-700"
            >
              <Mail size={18} className="text-brand-500" />
              <span className="text-slate-700 transition-colors group-hover:text-brand-500 dark:text-slate-300">
                chamidu.rk@gmail.com
              </span>
            </a>
          </motion.aside>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel space-y-4 rounded-2xl p-6"
          >
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</span>
              <input
                type="text"
                name="from_name"
                value={formValues.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                aria-invalid={Boolean(errors.from_name)}
                className={`w-full rounded-xl border bg-transparent px-4 py-3 text-slate-800 outline-none transition-all duration-300 focus:ring-2 focus:ring-brand-500/25 dark:text-slate-200 ${
                  errors.from_name
                    ? "border-red-500 dark:border-red-500"
                    : "border-slate-300 focus:border-brand-500 dark:border-slate-700"
                }`}
              />
              {errors.from_name && <p className="mt-1 text-xs text-red-500">{errors.from_name}</p>}
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
              <input
                type="email"
                name="from_email"
                value={formValues.from_email}
                onChange={handleChange}
                placeholder="Your Email"
                aria-invalid={Boolean(errors.from_email)}
                className={`w-full rounded-xl border bg-transparent px-4 py-3 text-slate-800 outline-none transition-all duration-300 focus:ring-2 focus:ring-brand-500/25 dark:text-slate-200 ${
                  errors.from_email
                    ? "border-red-500 dark:border-red-500"
                    : "border-slate-300 focus:border-brand-500 dark:border-slate-700"
                }`}
              />
              {errors.from_email && <p className="mt-1 text-xs text-red-500">{errors.from_email}</p>}
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
              <textarea
                name="message"
                rows="5"
                value={formValues.message}
                onChange={handleChange}
                placeholder="Your Message"
                aria-invalid={Boolean(errors.message)}
                className={`w-full rounded-xl border bg-transparent px-4 py-3 text-slate-800 outline-none transition-all duration-300 focus:ring-2 focus:ring-brand-500/25 dark:text-slate-200 ${
                  errors.message
                    ? "border-red-500 dark:border-red-500"
                    : "border-slate-300 focus:border-brand-500 dark:border-slate-700"
                }`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </label>

            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {status.message && (
              <p className={`text-sm ${status.type === "success" ? "text-emerald-500" : "text-red-500"}`}>
                {status.message}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
