"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, CheckCircle, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const careersSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type CareersFormData = z.infer<typeof careersSchema>;

export function CareersForm() {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CareersFormData>({
    resolver: zodResolver(careersSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      setFileError("Only PDF files are allowed");
      setFile(null);
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setFileError("File size must be under 5MB");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const onSubmit = async (data: CareersFormData) => {
    if (!file) {
      setFileError("Please upload your resume");
      return;
    }

    setIsSubmitting(true);
    // Simulate API upload
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Submitted careers form", { ...data, file });
    setIsSubmitting(false);
    setSubmitted(true);
    setFile(null);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900/50 border border-emerald-700/40 mb-4">
          <CheckCircle className="h-7 w-7 text-emerald-400" />
        </div>
        <h3 className="font-display font-bold text-xl text-warm-50 mb-2">Application Received!</h3>
        <p className="text-warm-400 text-sm mb-6 max-w-xs">
          Thank you for submitting your resume. Our HR department will review it and contact you if there is a match.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="careers-name" className="block text-xs font-semibold uppercase tracking-wider text-warm-300 mb-2">
          Name <span className="text-gold">*</span>
        </label>
        <input
          id="careers-name"
          type="text"
          placeholder="Your full name"
          className={cn(
            "w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-warm-100 placeholder-warm-600 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold",
            errors.name ? "border-red-500/50 bg-red-950/10" : "border-white/10 hover:border-white/20"
          )}
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="careers-email" className="block text-xs font-semibold uppercase tracking-wider text-warm-300 mb-2">
          Email <span className="text-gold">*</span>
        </label>
        <input
          id="careers-email"
          type="email"
          placeholder="you@example.com"
          className={cn(
            "w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-warm-100 placeholder-warm-600 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold",
            errors.email ? "border-red-500/50 bg-red-950/10" : "border-white/10 hover:border-white/20"
          )}
          {...register("email")}
        />
        {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>}
      </div>

      <div>
        <span className="block text-xs font-semibold uppercase tracking-wider text-warm-300 mb-2">
          Upload Resume (PDF only) <span className="text-gold">*</span>
        </span>
        <label
          className={cn(
            "flex flex-col items-center justify-center w-full h-32 rounded-xl border-2 border-dashed bg-black/40 cursor-pointer transition-all duration-200",
            file ? "border-gold/50 bg-gold/5" : "border-white/10 hover:border-gold/30 hover:bg-black/60",
            fileError ? "border-red-500/50 bg-red-950/10" : ""
          )}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
            {file ? (
              <>
                <FileText className="h-8 w-8 text-gold mb-2" />
                <p className="text-sm font-medium text-warm-100 truncate max-w-xs">{file.name}</p>
                <p className="text-xs text-warm-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </>
            ) : (
              <>
                <Upload className="h-6 w-6 text-warm-500 mb-2" />
                <p className="text-xs text-warm-400">
                  <span className="font-semibold text-gold">Click to upload</span> or drag and drop
                </p>
                <p className="text-[10px] text-warm-600 mt-1">PDF format only, maximum 5MB</p>
              </>
            )}
          </div>
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        {fileError && <p className="text-xs text-red-400 mt-1.5">{fileError}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-charcoal-900 hover:bg-gold-light shadow-gold transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed font-display mt-2"
      >
        {isSubmitting ? (
          <>
            <div className="h-4 w-4 rounded-full border-2 border-charcoal-900/30 border-t-charcoal-900 animate-spin" />
            Uploading…
          </>
        ) : (
          "Submit Resume"
        )}
      </button>
    </form>
  );
}
