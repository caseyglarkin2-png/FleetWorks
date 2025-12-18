"use client";

// Premium icon components with gradient fills and sophisticated styling
// These replace basic Lucide icons where more visual impact is needed

interface IconProps {
  className?: string;
  gradient?: boolean;
}

// Intent/Matching Engine - represents AI-powered matching
export function IconEngine({ className = "h-8 w-8", gradient = true }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="engineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="12" stroke={gradient ? "url(#engineGrad)" : "currentColor"} strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="6" stroke={gradient ? "url(#engineGrad)" : "currentColor"} strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="2" fill={gradient ? "url(#engineGrad)" : "currentColor"} />
      <path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke={gradient ? "url(#engineGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Live Network/Graph - represents real-time supply network
export function IconNetwork({ className = "h-8 w-8", gradient = true }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="8" r="3" fill={gradient ? "url(#networkGrad)" : "currentColor"} />
      <circle cx="8" cy="20" r="3" fill={gradient ? "url(#networkGrad)" : "currentColor"} />
      <circle cx="24" cy="20" r="3" fill={gradient ? "url(#networkGrad)" : "currentColor"} />
      <circle cx="16" cy="26" r="2" fill={gradient ? "url(#networkGrad)" : "currentColor"} opacity="0.5" />
      <path d="M16 11V15M13 18L10 19M19 18L22 19M14 24L16 24M18 24L16 24" stroke={gradient ? "url(#networkGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill={gradient ? "url(#networkGrad)" : "currentColor"} />
    </svg>
  );
}

// Shield/Trust - represents security and verification
export function IconTrust({ className = "h-8 w-8", gradient = true }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="trustGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path 
        d="M16 4L6 8V14C6 20.63 10.29 26.79 16 28C21.71 26.79 26 20.63 26 14V8L16 4Z" 
        stroke={gradient ? "url(#trustGrad)" : "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M12 16L15 19L20 13" 
        stroke={gradient ? "url(#trustGrad)" : "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Broker/Building - represents brokerage operations
export function IconBroker({ className = "h-8 w-8", gradient = true }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="brokerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect x="6" y="12" width="20" height="16" rx="2" stroke={gradient ? "url(#brokerGrad)" : "currentColor"} strokeWidth="2" fill="none" />
      <path d="M16 4L6 12H26L16 4Z" stroke={gradient ? "url(#brokerGrad)" : "currentColor"} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <rect x="10" y="16" width="4" height="4" fill={gradient ? "url(#brokerGrad)" : "currentColor"} rx="0.5" />
      <rect x="18" y="16" width="4" height="4" fill={gradient ? "url(#brokerGrad)" : "currentColor"} rx="0.5" />
      <rect x="14" y="22" width="4" height="6" fill={gradient ? "url(#brokerGrad)" : "currentColor"} />
    </svg>
  );
}

// Truck/Carrier - represents carrier operations
export function IconCarrier({ className = "h-8 w-8", gradient = true }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="carrierGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <path d="M4 10H18V22H4V10Z" stroke={gradient ? "url(#carrierGrad)" : "currentColor"} strokeWidth="2" fill="none" />
      <path d="M18 14H24L28 18V22H18V14Z" stroke={gradient ? "url(#carrierGrad)" : "currentColor"} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <circle cx="9" cy="22" r="3" stroke={gradient ? "url(#carrierGrad)" : "currentColor"} strokeWidth="2" fill="none" />
      <circle cx="23" cy="22" r="3" stroke={gradient ? "url(#carrierGrad)" : "currentColor"} strokeWidth="2" fill="none" />
    </svg>
  );
}

// Lightning/Speed - represents fast execution
export function IconSpeed({ className = "h-8 w-8", gradient = true }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path 
        d="M18 4L8 18H16L14 28L24 14H16L18 4Z" 
        stroke={gradient ? "url(#speedGrad)" : "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Signal Bars - represents signal quality/matching
export function IconSignal({ className = "h-8 w-8", gradient = true }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="signalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <rect x="4" y="20" width="4" height="8" rx="1" fill={gradient ? "url(#signalGrad)" : "currentColor"} />
      <rect x="10" y="16" width="4" height="12" rx="1" fill={gradient ? "url(#signalGrad)" : "currentColor"} />
      <rect x="16" y="12" width="4" height="16" rx="1" fill={gradient ? "url(#signalGrad)" : "currentColor"} />
      <rect x="22" y="6" width="4" height="22" rx="1" fill={gradient ? "url(#signalGrad)" : "currentColor"} />
    </svg>
  );
}

// Chart/Analytics - represents data insights  
export function IconAnalytics({ className = "h-8 w-8", gradient = true }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="analyticsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path d="M4 28V8" stroke={gradient ? "url(#analyticsGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
      <path d="M4 28H28" stroke={gradient ? "url(#analyticsGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 20L14 14L18 18L26 8" stroke={gradient ? "url(#analyticsGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="14" r="2" fill={gradient ? "url(#analyticsGrad)" : "currentColor"} />
      <circle cx="18" cy="18" r="2" fill={gradient ? "url(#analyticsGrad)" : "currentColor"} />
      <circle cx="26" cy="8" r="2" fill={gradient ? "url(#analyticsGrad)" : "currentColor"} />
    </svg>
  );
}

// Handshake/Partnership - represents win-win deals
export function IconHandshake({ className = "h-8 w-8", gradient = true }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="handshakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path d="M4 14L8 10L14 14L18 10" stroke={gradient ? "url(#handshakeGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 14L24 10L18 14" stroke={gradient ? "url(#handshakeGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 14V20L10 26H14L20 20" stroke={gradient ? "url(#handshakeGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 14V20L22 26H18L12 20" stroke={gradient ? "url(#handshakeGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="3" fill={gradient ? "url(#handshakeGrad)" : "currentColor"} />
    </svg>
  );
}

// Abstract connection/flow - represents the match flow
export function IconFlow({ className = "h-8 w-8", gradient = true }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <circle cx="6" cy="16" r="3" stroke={gradient ? "url(#flowGrad)" : "currentColor"} strokeWidth="2" fill="none" />
      <circle cx="26" cy="16" r="3" stroke={gradient ? "url(#flowGrad)" : "currentColor"} strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="4" fill={gradient ? "url(#flowGrad)" : "currentColor"} />
      <path d="M9 16H12" stroke={gradient ? "url(#flowGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 16H23" stroke={gradient ? "url(#flowGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 8V12" stroke={gradient ? "url(#flowGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 20V24" stroke={gradient ? "url(#flowGrad)" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Icon container with sophisticated styling
interface IconContainerProps {
  children: React.ReactNode;
  variant?: "emerald" | "blue" | "amber" | "purple" | "rose";
  size?: "sm" | "md" | "lg";
}

export function IconContainer({ children, variant = "emerald", size = "md" }: IconContainerProps) {
  const variants = {
    emerald: "from-emerald-500/20 to-emerald-600/10 ring-emerald-500/30",
    blue: "from-blue-500/20 to-blue-600/10 ring-blue-500/30",
    amber: "from-amber-500/20 to-amber-600/10 ring-amber-500/30",
    purple: "from-purple-500/20 to-purple-600/10 ring-purple-500/30",
    rose: "from-rose-500/20 to-rose-600/10 ring-rose-500/30"
  };

  const sizes = {
    sm: "h-10 w-10 rounded-lg",
    md: "h-14 w-14 rounded-xl",
    lg: "h-16 w-16 rounded-2xl"
  };

  return (
    <div className={`flex items-center justify-center bg-gradient-to-br ring-1 ${variants[variant]} ${sizes[size]}`}>
      {children}
    </div>
  );
}
