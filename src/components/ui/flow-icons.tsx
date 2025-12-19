"use client";

/**
 * Flow State Custom Icon System
 * 
 * Geometric, minimal, distinctly "logistics tech" icons
 * Built for immersive engagement with subtle animations
 * 
 * Design Principles:
 * - Clean geometric shapes (hexagons, nodes, paths)
 * - 2px stroke weight for consistency
 * - Emerald/Blue/Amber brand color gradients
 * - Subtle pulse/flow animations for engagement
 */

import { motion } from "framer-motion";

interface FlowIconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  color?: "emerald" | "blue" | "amber" | "purple" | "slate" | "white";
}

const sizes = {
  sm: "h-4 w-4",
  md: "h-6 w-6", 
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};

const gradients = {
  emerald: { from: "#34d399", to: "#059669" },
  blue: { from: "#60a5fa", to: "#2563eb" },
  amber: { from: "#fbbf24", to: "#f59e0b" },
  purple: { from: "#a78bfa", to: "#7c3aed" },
  slate: { from: "#94a3b8", to: "#64748b" },
  white: { from: "#ffffff", to: "#e2e8f0" }
};

// ============================================================================
// CORE LOGISTICS ICONS
// ============================================================================

/**
 * FlowNode - Core brand icon representing connection/matching
 * A hexagonal node with radiating connection points
 */
export function FlowNode({ className, size = "md", animated = false, color = "emerald" }: FlowIconProps) {
  const id = `flownode-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <motion.svg 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className || sizes[size]}
      initial={animated ? { rotate: 0 } : undefined}
      animate={animated ? { rotate: 360 } : undefined}
      transition={animated ? { duration: 20, repeat: Infinity, ease: "linear" } : undefined}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Hexagonal core */}
      <path 
        d="M16 4L26 10V22L16 28L6 22V10L16 4Z" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinejoin="round"
        fill="none"
      />
      {/* Center node */}
      <circle cx="16" cy="16" r="3" fill={`url(#${id})`} />
      {/* Connection points */}
      <circle cx="16" cy="7" r="1.5" fill={`url(#${id})`} opacity="0.7" />
      <circle cx="24" cy="12" r="1.5" fill={`url(#${id})`} opacity="0.7" />
      <circle cx="24" cy="20" r="1.5" fill={`url(#${id})`} opacity="0.7" />
      <circle cx="16" cy="25" r="1.5" fill={`url(#${id})`} opacity="0.7" />
      <circle cx="8" cy="20" r="1.5" fill={`url(#${id})`} opacity="0.7" />
      <circle cx="8" cy="12" r="1.5" fill={`url(#${id})`} opacity="0.7" />
    </motion.svg>
  );
}

/**
 * FlowRoute - Lane/route icon with directional flow
 */
export function FlowRoute({ className, size = "md", animated = false, color = "emerald" }: FlowIconProps) {
  const id = `flowroute-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Origin node */}
      <circle cx="6" cy="16" r="3" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Destination node */}
      <circle cx="26" cy="16" r="3" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Path with flow */}
      <motion.path 
        d="M9 16H15L17 12L19 20L21 16H23" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={animated ? { pathLength: 0 } : undefined}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={animated ? { duration: 2, repeat: Infinity } : undefined}
      />
      {/* Direction indicator */}
      <circle cx="26" cy="16" r="1.5" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * FlowCapacity - Truck/capacity represented as geometric container
 */
export function FlowCapacity({ className, size = "md", animated = false, color = "amber" }: FlowIconProps) {
  const id = `flowcap-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Container body */}
      <rect x="4" y="10" width="16" height="12" rx="1" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Cab */}
      <path d="M20 14H26L28 18V22H20V14Z" stroke={`url(#${id})`} strokeWidth="2" strokeLinejoin="round" fill="none" />
      {/* Wheels */}
      <motion.circle 
        cx="10" cy="22" r="3" 
        stroke={`url(#${id})`} strokeWidth="2" fill="none"
        animate={animated ? { rotate: 360 } : undefined}
        transition={animated ? { duration: 1, repeat: Infinity, ease: "linear" } : undefined}
      />
      <motion.circle 
        cx="24" cy="22" r="3" 
        stroke={`url(#${id})`} strokeWidth="2" fill="none"
        animate={animated ? { rotate: 360 } : undefined}
        transition={animated ? { duration: 1, repeat: Infinity, ease: "linear" } : undefined}
      />
      {/* Axle accent */}
      <line x1="10" y1="22" x2="10" y2="22" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="22" x2="24" y2="22" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * FlowBroker - Building/operations icon
 */
export function FlowBroker({ className, size = "md", animated = false, color = "blue" }: FlowIconProps) {
  const id = `flowbroker-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Building frame */}
      <rect x="6" y="10" width="20" height="18" rx="1" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Roof accent */}
      <path d="M16 4L6 10H26L16 4Z" stroke={`url(#${id})`} strokeWidth="2" strokeLinejoin="round" fill="none" />
      {/* Grid windows */}
      <rect x="10" y="14" width="4" height="4" fill={`url(#${id})`} rx="0.5" />
      <rect x="18" y="14" width="4" height="4" fill={`url(#${id})`} rx="0.5" />
      <rect x="10" y="20" width="4" height="4" fill={`url(#${id})`} rx="0.5" opacity="0.6" />
      <rect x="18" y="20" width="4" height="4" fill={`url(#${id})`} rx="0.5" opacity="0.6" />
    </svg>
  );
}

/**
 * FlowMatch - Match/connection indicator with pulse
 */
export function FlowMatch({ className, size = "md", animated = false, color = "emerald" }: FlowIconProps) {
  const id = `flowmatch-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Left node */}
      <circle cx="8" cy="16" r="4" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Right node */}
      <circle cx="24" cy="16" r="4" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Connection beam */}
      <motion.line 
        x1="12" y1="16" x2="20" y2="16" 
        stroke={`url(#${id})`} 
        strokeWidth="2"
        strokeLinecap="round"
        initial={animated ? { opacity: 0.3 } : undefined}
        animate={animated ? { opacity: [0.3, 1, 0.3] } : undefined}
        transition={animated ? { duration: 1.5, repeat: Infinity } : undefined}
      />
      {/* Match indicator */}
      <motion.circle 
        cx="16" cy="16" r="2" 
        fill={`url(#${id})`}
        initial={animated ? { scale: 1 } : undefined}
        animate={animated ? { scale: [1, 1.3, 1] } : undefined}
        transition={animated ? { duration: 1.5, repeat: Infinity } : undefined}
      />
      {/* Signal rings */}
      {animated && (
        <motion.circle 
          cx="16" cy="16" r="6" 
          stroke={`url(#${id})`} 
          strokeWidth="1"
          fill="none"
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </svg>
  );
}

/**
 * FlowSignal - Communication/signal strength icon
 */
export function FlowSignal({ className, size = "md", animated = false, color = "emerald" }: FlowIconProps) {
  const id = `flowsig-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={`${id}-v`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      <motion.rect 
        x="4" y="20" width="4" height="8" rx="1" 
        fill={`url(#${id}-v)`}
        initial={animated ? { height: 4, y: 24 } : undefined}
        animate={animated ? { height: 8, y: 20 } : undefined}
        transition={animated ? { duration: 0.5, delay: 0 } : undefined}
      />
      <motion.rect 
        x="10" y="16" width="4" height="12" rx="1" 
        fill={`url(#${id}-v)`}
        initial={animated ? { height: 6, y: 22 } : undefined}
        animate={animated ? { height: 12, y: 16 } : undefined}
        transition={animated ? { duration: 0.5, delay: 0.1 } : undefined}
      />
      <motion.rect 
        x="16" y="10" width="4" height="18" rx="1" 
        fill={`url(#${id}-v)`}
        initial={animated ? { height: 8, y: 20 } : undefined}
        animate={animated ? { height: 18, y: 10 } : undefined}
        transition={animated ? { duration: 0.5, delay: 0.2 } : undefined}
      />
      <motion.rect 
        x="22" y="4" width="4" height="24" rx="1" 
        fill={`url(#${id}-v)`}
        initial={animated ? { height: 10, y: 18 } : undefined}
        animate={animated ? { height: 24, y: 4 } : undefined}
        transition={animated ? { duration: 0.5, delay: 0.3 } : undefined}
      />
    </svg>
  );
}

/**
 * FlowSpeed - Lightning/fast execution icon
 */
export function FlowSpeed({ className, size = "md", animated = false, color = "emerald" }: FlowIconProps) {
  const id = `flowspd-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      <motion.path 
        d="M18 4L8 18H15L13 28L24 13H17L18 4Z" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
        initial={animated ? { opacity: 0.5, scale: 0.95 } : undefined}
        animate={animated ? { opacity: [0.5, 1, 0.5], scale: [0.95, 1, 0.95] } : undefined}
        transition={animated ? { duration: 1, repeat: Infinity } : undefined}
      />
    </svg>
  );
}

/**
 * FlowTrust - Shield/verification icon
 */
export function FlowTrust({ className, size = "md", animated = false, color = "purple" }: FlowIconProps) {
  const id = `flowtrust-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Shield outline */}
      <path 
        d="M16 4L6 8V14C6 20.63 10.29 26.79 16 28C21.71 26.79 26 20.63 26 14V8L16 4Z" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      {/* Check mark */}
      <motion.path 
        d="M11 16L14.5 19.5L21 12" 
        stroke={`url(#${id})`} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
        initial={animated ? { pathLength: 0 } : undefined}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={animated ? { duration: 0.8 } : undefined}
      />
    </svg>
  );
}

/**
 * FlowChart - Analytics/trending icon
 */
export function FlowChart({ className, size = "md", animated = false, color = "blue" }: FlowIconProps) {
  const id = `flowchart-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Axis */}
      <path d="M4 4V28H28" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      {/* Trend line */}
      <motion.path 
        d="M8 22L14 16L18 20L26 8" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
        initial={animated ? { pathLength: 0 } : undefined}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={animated ? { duration: 1.5 } : undefined}
      />
      {/* Data points */}
      <circle cx="8" cy="22" r="2" fill={`url(#${id})`} />
      <circle cx="14" cy="16" r="2" fill={`url(#${id})`} />
      <circle cx="18" cy="20" r="2" fill={`url(#${id})`} />
      <motion.circle 
        cx="26" cy="8" r="2.5" 
        fill={`url(#${id})`}
        initial={animated ? { scale: 1 } : undefined}
        animate={animated ? { scale: [1, 1.3, 1] } : undefined}
        transition={animated ? { duration: 1.5, repeat: Infinity, delay: 1.5 } : undefined}
      />
    </svg>
  );
}

/**
 * FlowClock - Time/speed icon
 */
export function FlowClock({ className, size = "md", animated = false, color = "slate" }: FlowIconProps) {
  const id = `flowclk-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Clock face */}
      <circle cx="16" cy="16" r="11" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Hour hand */}
      <motion.line 
        x1="16" y1="16" x2="16" y2="10" 
        stroke={`url(#${id})`} 
        strokeWidth="2.5" 
        strokeLinecap="round"
        initial={animated ? { rotate: 0 } : undefined}
        animate={animated ? { rotate: 360 } : undefined}
        transition={animated ? { duration: 12, repeat: Infinity, ease: "linear" } : undefined}
        style={{ transformOrigin: "16px 16px" }}
      />
      {/* Minute hand */}
      <motion.line 
        x1="16" y1="16" x2="22" y2="16" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round"
        initial={animated ? { rotate: 0 } : undefined}
        animate={animated ? { rotate: 360 } : undefined}
        transition={animated ? { duration: 1, repeat: Infinity, ease: "linear" } : undefined}
        style={{ transformOrigin: "16px 16px" }}
      />
      {/* Center dot */}
      <circle cx="16" cy="16" r="2" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * FlowDollar - Value/margin icon
 */
export function FlowDollar({ className, size = "md", animated = false, color = "emerald" }: FlowIconProps) {
  const id = `flowdlr-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Circle container */}
      <circle cx="16" cy="16" r="11" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Dollar sign */}
      <motion.path 
        d="M16 8V24M12 12C12 10.5 13.8 9 16 9C18.2 9 20 10.5 20 12C20 14 16 14 16 16C16 18 20 18 20 20C20 21.5 18.2 23 16 23C13.8 23 12 21.5 12 20" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round"
        initial={animated ? { opacity: 0.7 } : undefined}
        animate={animated ? { opacity: [0.7, 1, 0.7] } : undefined}
        transition={animated ? { duration: 2, repeat: Infinity } : undefined}
      />
    </svg>
  );
}

/**
 * FlowMessage - Communication/text icon
 */
export function FlowMessage({ className, size = "md", animated = false, color = "blue" }: FlowIconProps) {
  const id = `flowmsg-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Message bubble */}
      <path 
        d="M6 8H26C27.1 8 28 8.9 28 10V20C28 21.1 27.1 22 26 22H12L6 28V22V10C6 8.9 6.9 8 8 8H6Z" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      {/* Message dots */}
      <motion.g
        initial={animated ? { opacity: 0.5 } : undefined}
        animate={animated ? { opacity: [0.5, 1, 0.5] } : undefined}
        transition={animated ? { duration: 1.5, repeat: Infinity } : undefined}
      >
        <circle cx="12" cy="15" r="1.5" fill={`url(#${id})`} />
        <circle cx="17" cy="15" r="1.5" fill={`url(#${id})`} />
        <circle cx="22" cy="15" r="1.5" fill={`url(#${id})`} />
      </motion.g>
    </svg>
  );
}

/**
 * FlowBlock - No spam/block icon
 */
export function FlowBlock({ className, size = "md", animated = false, color = "slate" }: FlowIconProps) {
  const id = `flowblk-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Circle */}
      <circle cx="16" cy="16" r="11" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Diagonal line */}
      <line x1="8" y1="8" x2="24" y2="24" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * FlowUsers - Team/people icon
 */
export function FlowUsers({ className, size = "md", animated = false, color = "blue" }: FlowIconProps) {
  const id = `flowusr-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Person 1 */}
      <circle cx="12" cy="10" r="4" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      <path d="M4 26C4 22 7.6 18 12 18C16.4 18 20 22 20 26" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Person 2 (offset) */}
      <circle cx="22" cy="12" r="3" stroke={`url(#${id})`} strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M16 26C16 23 18.6 20 22 20C25.4 20 28 23 28 26" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
    </svg>
  );
}

/**
 * FlowTarget - Precision/target icon
 */
export function FlowTarget({ className, size = "md", animated = false, color = "emerald" }: FlowIconProps) {
  const id = `flowtgt-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Outer ring */}
      <circle cx="16" cy="16" r="11" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Middle ring */}
      <circle cx="16" cy="16" r="7" stroke={`url(#${id})`} strokeWidth="2" fill="none" opacity="0.7" />
      {/* Inner ring */}
      <circle cx="16" cy="16" r="3" stroke={`url(#${id})`} strokeWidth="2" fill="none" opacity="0.5" />
      {/* Center point */}
      <motion.circle 
        cx="16" cy="16" r="1.5" 
        fill={`url(#${id})`}
        initial={animated ? { scale: 1 } : undefined}
        animate={animated ? { scale: [1, 1.5, 1] } : undefined}
        transition={animated ? { duration: 1.5, repeat: Infinity } : undefined}
      />
    </svg>
  );
}

/**
 * FlowCheck - Success/complete icon
 */
export function FlowCheck({ className, size = "md", animated = false, color = "emerald" }: FlowIconProps) {
  const id = `flowchk-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Circle */}
      <circle cx="16" cy="16" r="11" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Check mark */}
      <motion.path 
        d="M10 16L14 20L22 11" 
        stroke={`url(#${id})`} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
        initial={animated ? { pathLength: 0 } : undefined}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={animated ? { duration: 0.5 } : undefined}
      />
    </svg>
  );
}

/**
 * FlowArrow - Direction/CTA icon
 */
export function FlowArrow({ className, size = "md", animated = false, color = "white" }: FlowIconProps) {
  const id = `flowarr-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      <motion.g
        initial={animated ? { x: 0 } : undefined}
        animate={animated ? { x: [0, 3, 0] } : undefined}
        transition={animated ? { duration: 1, repeat: Infinity } : undefined}
      >
        <line x1="6" y1="16" x2="24" y2="16" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
        <path d="M18 10L24 16L18 22" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </motion.g>
    </svg>
  );
}

/**
 * FlowNetwork - Network graph icon
 */
export function FlowNetwork({ className, size = "md", animated = false, color = "blue" }: FlowIconProps) {
  const id = `flownet-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Nodes */}
      <circle cx="16" cy="8" r="3" fill={`url(#${id})`} />
      <circle cx="8" cy="18" r="3" fill={`url(#${id})`} />
      <circle cx="24" cy="18" r="3" fill={`url(#${id})`} />
      <circle cx="16" cy="26" r="2.5" fill={`url(#${id})`} opacity="0.6" />
      {/* Connections */}
      <motion.path 
        d="M16 11V14M13 17L10 18M19 17L22 18M14 24L16 24M18 24L16 24M16 14L16 16M10 20L16 23.5M22 20L16 23.5" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round"
        opacity="0.5"
        initial={animated ? { opacity: 0.3 } : undefined}
        animate={animated ? { opacity: [0.3, 0.7, 0.3] } : undefined}
        transition={animated ? { duration: 2, repeat: Infinity } : undefined}
      />
      {/* Center hub */}
      <motion.circle 
        cx="16" cy="16" r="2" 
        fill={`url(#${id})`}
        initial={animated ? { scale: 1 } : undefined}
        animate={animated ? { scale: [1, 1.2, 1] } : undefined}
        transition={animated ? { duration: 2, repeat: Infinity } : undefined}
      />
    </svg>
  );
}

/**
 * FlowDatabase - Data/storage icon
 */
export function FlowDatabase({ className, size = "md", animated = false, color = "purple" }: FlowIconProps) {
  const id = `flowdb-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Top ellipse */}
      <ellipse cx="16" cy="8" rx="10" ry="4" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Body */}
      <path d="M6 8V24C6 26.2 10.5 28 16 28C21.5 28 26 26.2 26 24V8" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      {/* Middle ring */}
      <motion.path 
        d="M6 16C6 18.2 10.5 20 16 20C21.5 20 26 18.2 26 16" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        fill="none"
        opacity="0.6"
        initial={animated ? { opacity: 0.4 } : undefined}
        animate={animated ? { opacity: [0.4, 0.8, 0.4] } : undefined}
        transition={animated ? { duration: 2, repeat: Infinity, delay: 0.5 } : undefined}
      />
    </svg>
  );
}

/**
 * FlowRadio - Live/broadcast icon
 */
export function FlowRadio({ className, size = "md", animated = false, color = "emerald" }: FlowIconProps) {
  const id = `flowrad-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Center dot */}
      <circle cx="16" cy="16" r="3" fill={`url(#${id})`} />
      {/* Signal waves */}
      <motion.path 
        d="M10 22C8 20 7 18 7 16C7 14 8 12 10 10" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
        initial={animated ? { opacity: 0.3 } : undefined}
        animate={animated ? { opacity: [0.3, 0.8, 0.3] } : undefined}
        transition={animated ? { duration: 1.5, repeat: Infinity, delay: 0 } : undefined}
      />
      <motion.path 
        d="M22 22C24 20 25 18 25 16C25 14 24 12 22 10" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
        initial={animated ? { opacity: 0.3 } : undefined}
        animate={animated ? { opacity: [0.3, 0.8, 0.3] } : undefined}
        transition={animated ? { duration: 1.5, repeat: Infinity, delay: 0 } : undefined}
      />
      <motion.path 
        d="M6 26C3 22.5 2 19 2 16C2 13 3 9.5 6 6" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
        initial={animated ? { opacity: 0.2 } : undefined}
        animate={animated ? { opacity: [0.2, 0.5, 0.2] } : undefined}
        transition={animated ? { duration: 1.5, repeat: Infinity, delay: 0.3 } : undefined}
      />
      <motion.path 
        d="M26 26C29 22.5 30 19 30 16C30 13 29 9.5 26 6" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
        initial={animated ? { opacity: 0.2 } : undefined}
        animate={animated ? { opacity: [0.2, 0.5, 0.2] } : undefined}
        transition={animated ? { duration: 1.5, repeat: Infinity, delay: 0.3 } : undefined}
      />
    </svg>
  );
}

/**
 * FlowLayers - Stack/layers icon
 */
export function FlowLayers({ className, size = "md", animated = false, color = "blue" }: FlowIconProps) {
  const id = `flowlay-${Math.random().toString(36).slice(2)}`;
  const grad = gradients[color];
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className || sizes[size]}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      {/* Bottom layer */}
      <motion.path 
        d="M16 28L4 22L16 16L28 22L16 28Z" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
        initial={animated ? { y: 2 } : undefined}
        animate={animated ? { y: [2, 0, 2] } : undefined}
        transition={animated ? { duration: 2, repeat: Infinity, delay: 0.4 } : undefined}
      />
      {/* Middle layer */}
      <motion.path 
        d="M16 22L4 16L16 10L28 16L16 22Z" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
        initial={animated ? { y: 1 } : undefined}
        animate={animated ? { y: [1, 0, 1] } : undefined}
        transition={animated ? { duration: 2, repeat: Infinity, delay: 0.2 } : undefined}
      />
      {/* Top layer */}
      <motion.path 
        d="M16 16L4 10L16 4L28 10L16 16Z" 
        stroke={`url(#${id})`} 
        strokeWidth="2" 
        strokeLinejoin="round"
        fill="none"
        initial={animated ? { y: 0 } : undefined}
        animate={animated ? { y: [0, -1, 0] } : undefined}
        transition={animated ? { duration: 2, repeat: Infinity } : undefined}
      />
    </svg>
  );
}

// ============================================================================
// ICON CONTAINER COMPONENT
// ============================================================================

interface FlowIconContainerProps {
  children: React.ReactNode;
  color?: "emerald" | "blue" | "amber" | "purple" | "slate";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export function FlowIconContainer({ 
  children, 
  color = "emerald", 
  size = "md",
  glow = false 
}: FlowIconContainerProps) {
  const colorClasses = {
    emerald: "border-emerald-500/20 bg-emerald-500/10",
    blue: "border-blue-500/20 bg-blue-500/10",
    amber: "border-amber-500/20 bg-amber-500/10",
    purple: "border-purple-500/20 bg-purple-500/10",
    slate: "border-slate-500/20 bg-slate-500/10"
  };
  
  const glowClasses = {
    emerald: "shadow-emerald-500/20",
    blue: "shadow-blue-500/20",
    amber: "shadow-amber-500/20",
    purple: "shadow-purple-500/20",
    slate: "shadow-slate-500/20"
  };
  
  const sizeClasses = {
    sm: "h-10 w-10 rounded-lg",
    md: "h-14 w-14 rounded-xl",
    lg: "h-16 w-16 rounded-2xl"
  };

  return (
    <div 
      className={`
        flex items-center justify-center border
        ${colorClasses[color]} 
        ${sizeClasses[size]}
        ${glow ? `shadow-lg ${glowClasses[color]}` : ""}
        transition-all duration-300 hover:scale-105
      `}
    >
      {children}
    </div>
  );
}
