"use client";

import { useState, useCallback, useRef, useEffect, type FormEvent } from "react";
import { Send } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const timersRef = useRef<number[]>([]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  const validate = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }, [name, email, message]);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (isSubmitting) return;

      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);
      setErrors({});

      // Simulate submission
      const submitTimer = window.setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMessage("");

        // Hide success message after 5 seconds
        const toastTimer = window.setTimeout(() => setIsSuccess(false), 5000);
        timersRef.current.push(toastTimer);
      }, 800);
      timersRef.current.push(submitTimer);
    },
    [isSubmitting, validate]
  );

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h2
          className="gradient-text mb-4 text-center text-3xl font-bold sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Get in Touch
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center opacity-70">
          Have a question or want to work together? Drop me a message.
        </p>

        {/* Success toast */}
        {isSuccess && (
          <div className="toast-enter glass mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-center text-sm font-medium text-green-400">
            Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="glass flex flex-col gap-5 rounded-2xl p-8" noValidate>
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              aria-invalid={errors.name ? "true" : undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="glass h-11 rounded-lg px-4 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-400" role="alert">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              aria-invalid={errors.email ? "true" : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="glass h-11 rounded-lg px-4 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-400" role="alert">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              rows={5}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="glass rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-red-400" role="alert">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-8 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-[var(--color-primary)]/25 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <Send size={16} />}
          </button>
        </form>
      </div>
    </section>
  );
}
