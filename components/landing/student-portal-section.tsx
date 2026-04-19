"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, Users2, Sparkles } from "lucide-react";

const opportunities = [
  {
    icon: GraduationCap,
    title: "Scholarships",
    description: "Curated scholarship opportunities from local and international programs, delivered directly to students.",
  },
  {
    icon: Briefcase,
    title: "Internships & Jobs",
    description: "Connect with companies looking for Rwanda's brightest young talent â from first internships to full-time roles.",
  },
  {
    icon: Calendar,
    title: "Events & Workshops",
    description: "Skill-building workshops, networking events, and conferences tailored to student growth.",
  },
  {
    icon: Users2,
    title: "Mentorship",
    description: "One-on-one guidance from industry professionals who've walked the path before.",
  },
];

export default function StudentPortalSection() {
  return (
    <section
      id="students"
      className="relative mx-auto max-w-[80rem] px-6 md:px-8 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-4"
          >
            <Sparkles className="h-3 w-3" />
            Our Vision
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-black mb-6"
          >
            Empowering Students Through Opportunity
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-6 leading-relaxed"
          >
            Tapay is more than payments. We&apos;re building a student portal that opens doors â
            connecting young Rwandans to scholarships, internships, events, and mentorship that
            can change the trajectory of their lives.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-muted-foreground mb-8 leading-relaxed"
          >
            Every student using Tapay gets access to curated opportunities â because financial
            tools should come with something greater than convenience. They should come with
            possibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Student Portal â Coming Soon</span>
          </motion.div>
        </div>

        {/* Right: Opportunity grid */}
        <div className="grid grid-cols-2 gap-4">
          {opportunities.map((opp, idx) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-3">
                <opp.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold dark:text-white text-black mb-2">{opp.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {opp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
