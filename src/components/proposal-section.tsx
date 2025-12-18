"use client";

import { motion } from "framer-motion";

interface ProposalSectionProps {
  number: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function ProposalSection({
  number,
  title,
  description,
  children,
  id,
  className = ""
}: ProposalSectionProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute left-4 top-8 z-10 hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
            <span className="text-xs font-bold text-emerald-400">{number}</span>
          </div>
          <div className="h-px w-8 bg-gradient-to-r from-emerald-500/50 to-transparent" />
        </div>
      </motion.div>

      {/* Section Header */}
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="inline-block rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-400 lg:hidden">
              {number}
            </span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              {description}
            </p>
          )}
        </motion.div>
      )}

      {/* Section Content */}
      {children}
    </section>
  );
}

// Proposal intro component for the top of the page
export function ProposalIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mx-auto mb-16 max-w-4xl text-center"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        <span className="text-sm font-medium text-emerald-300">
          Interactive Web Proposal
        </span>
      </div>
      
      <h1 className="mb-6 bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
        FleetWorks
      </h1>
      
      <p className="mb-8 text-xl text-slate-300 md:text-2xl">
        A modern web experience for the
        <br />
        <span className="text-emerald-400">Capacity Orchestration Platform</span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Prepared for</span>
          <span className="font-medium text-white">FleetWorks</span>
        </div>
        <div className="h-4 w-px bg-slate-700" />
        <div className="flex items-center gap-2">
          <span className="text-slate-400">By</span>
          <span className="font-medium text-emerald-400">DWTB?!</span>
        </div>
        <div className="h-4 w-px bg-slate-700" />
        <div className="flex items-center gap-2">
          <span className="text-slate-400">December</span>
          <span className="font-medium text-white">2025</span>
        </div>
      </div>
    </motion.div>
  );
}
