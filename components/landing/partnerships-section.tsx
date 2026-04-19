"use client";

import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import Link from "next/link";

// Placeholder slots â replace with actual NGO names + logos as partnerships are confirmed
const partnerPlaceholders = [
  { name: "Partner 1", status: "Coming Soon" },
  { name: "Partner 2", status: "Coming Soon" },
  { name: "Partner 3", status: "Coming Soon" },
  { name: "Partner 4", status: "Coming Soon" },
  { name: "Partner 5", status: "Coming Soon" },
  { name: "Partner 6", status: "Coming Soon" },
];

export default function PartnershipsSection() {
  return (
    <section
      id="partnerships"
      className="relative mx-auto max-w-[80rem] px-6 md:px-8 py-24"
    >
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-4"
        >
          <HandHeart className="h-3 w-3" />
          Partnerships
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-black"
        >
          Partnering With NGOs for Rwanda&apos;s Youth
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          We&apos;re building relationships with NGOs across Rwanda who share our belief that
          young people deserve the tools, opportunities, and support to thrive. Meet the organizations
          joining our journey.
        </motion.p>
      </div>

      {/* Placeholder partner grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {partnerPlaceholders.map((partner, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="aspect-[16/9] flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300"
          >
            <div className="p-2.5 rounded-xl bg-white/5">
              <HandHeart className="h-5 w-5 text-muted-foreground/60" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {partner.status}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col items-center justify-center gap-4 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
      >
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight dark:text-white text-black text-center">
          Are you an NGO supporting Rwanda&apos;s youth?
        </h3>
        <p className="text-base text-muted-foreground text-center max-w-xl">
          Let&apos;s work together. We&apos;re looking for organizations to help us reach students
          with life-changing opportunities.
        </p>
        <Link
          href="mailto:hello@tapayrw.io?subject=NGO%20Partnership%20Inquiry"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-background bg-foreground hover:bg-foreground/90 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-2"
        >
          Partner With Us â
        </Link>
      </motion.div>
    </section>
  );
}
