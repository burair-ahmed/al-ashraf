"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  "Construction & Real Estate Inquiry",
  "Dairy Products Inquiry",
  "E-commerce Partnership",
  "Consumer Services Inquiry",
  "Career Opportunities",
  "Media & Press",
  "General Inquiry",
];

const inputBase =
  "w-full rounded-xl border bg-surface-5 px-4 py-3 text-sm text-warm-100 placeholder-warm-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent";
const inputBorderNormal = "border-white/10 hover:border-white/20";
const inputBorderError  = "border-red-500/50 bg-red-950/20";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-warm-300">
        {label} {props.required && <span className="text-gold">*</span>}
      </label>
      <input
        id={id}
        className={cn(inputBase, error ? inputBorderError : inputBorderNormal, className)}
        {...props}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } =
    useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // TODO: Integrate with real form submission (e.g., Resend, EmailJS, or API route)
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-900/50 border border-emerald-700/40 mb-4">
          <CheckCircle className="h-8 w-8 text-emerald-400" />
        </div>
        <h3 className="font-display font-bold text-xl text-warm-50 mb-2">Message Sent!</h3>
        <p className="text-warm-400 mb-6 max-w-sm">
          Thank you for reaching out. Our team will get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-gold hover:text-gold-muted transition-colors duration-200"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input id="name" label="Full Name" placeholder="Your full name" required error={errors.name?.message} {...register("name")} />
        <Input id="email" label="Email Address" type="email" placeholder="you@example.com" required error={errors.email?.message} {...register("email")} />
      </div>

      <Input id="phone" label="Phone Number" type="tel" placeholder="+92 300 000 0000" error={errors.phone?.message} {...register("phone")} />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-warm-300">
          Subject <span className="text-gold">*</span>
        </label>
        <select
          id="subject"
          className={cn(inputBase, errors.subject ? inputBorderError : inputBorderNormal)}
          {...register("subject")}
        >
          <option value="" className="bg-surface-5">Select a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s} className="bg-surface-5">{s}</option>
          ))}
        </select>
        {errors.subject && <p className="text-xs text-red-400">{errors.subject.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-warm-300">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your inquiry…"
          className={cn(inputBase, "resize-none", errors.message ? inputBorderError : inputBorderNormal)}
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal-800 hover:bg-gold-light shadow-gold-sm hover:shadow-gold transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed font-display"
      >
        {isSubmitting ? (
          <><div className="h-4 w-4 rounded-full border-2 border-charcoal-800/30 border-t-charcoal-800 animate-spin" />Sending…</>
        ) : (
          <><Send className="h-4 w-4" />Send Message</>
        )}
      </button>
    </form>
  );
}
