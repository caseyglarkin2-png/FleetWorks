"use client";

import { motion } from "framer-motion";

export function ProposalHeader() {
  return (
    <div className="border-b border-white/5 bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-emerald-400">
              Proposal
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/10 sm:block" />
          <span className="hidden text-xs text-slate-500 sm:block">
            DWTB?! Web Concept
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-xs text-slate-500">
          <div className="hidden sm:block">
            <span className="text-slate-400">Client:</span>{" "}
            <span className="text-white">FleetWorks</span>
          </div>
          <div className="hidden md:block">
            <span className="text-slate-400">Project:</span>{" "}
            <span className="text-white">Marketing Site</span>
          </div>
          <div>
            <span className="text-slate-400">Date:</span>{" "}
            <span className="text-white">Dec 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
