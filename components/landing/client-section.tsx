"use client";

import { motion } from "framer-motion";
import { Users, Building2, CreditCard, TrendingUp } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Users, value: "500+", label: "Businesses Onboarded" },
  { icon: CreditCard, value: "50K+", label: "Transactions Processed" },
  { icon: Building2, value: "30+", label: "Schools & Canteens" },
  { icon: TrendingUp, value: "99.9%", label: "Uptime Reliability" },
];

export default function ClientSection() {
  return (
    <section id="clients" className="relative mx-auto max-w-[80rem] px-6 md:px-8 py-24">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs uppercase tracking-widest font-bold text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-4"
        >
          Be Part of Our Journey
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-black"
        >
          Join Our Growing Community
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          We&apos;re building something special and looking for visionary partners to join us.
          Be among the first to shape the future of digital payments in Rwanda.
        </motion.p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <div className="p-3 rounded-xl bg-primary/10">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-3xl font-bold dark:text-white text-black">{stat.value}</span>
            <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        <Link
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAYFIAnRUMTAwNlY1SU1DMUFFWjRDSkVDNVRQWUZDRi4u"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-background bg-foreground hover:bg-foreground/90 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Apply to Partner With Us →
        </Link>
        <Link
          href="#pricing"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold border border-white/20 hover:bg-white/10 rounded-xl transition-all duration-200"
        >
          View Pricing
        </Link>
      </motion.div>
    </section>
  );
}