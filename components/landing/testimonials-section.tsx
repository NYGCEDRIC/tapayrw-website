"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative mx-auto max-w-[80rem] px-6 md:px-8 py-24"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs uppercase tracking-widest font-bold text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-4"
        >
          Testimonials
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-black"
        >
          Hear From Our Community
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Real stories from the students, schools, and businesses shaping the future with Tapay.
        </motion.p>
      </div>

      {/* Featured video testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
          <div className="absolute top-4 left-4 z-10 p-2 rounded-full bg-primary/20 backdrop-blur-md">
            <Quote className="h-5 w-5 text-primary" />
          </div>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://drive.google.com/file/d/1j_5OYTT6lE3JHAjJc6x_ED-hi0-bDDOs/preview"
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="Tapay Community Testimonial"
            />
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground italic">
          More testimonials from our community coming soon.
        </p>
      </motion.div>
    </section>
  );
}
