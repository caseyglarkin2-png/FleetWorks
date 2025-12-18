interface LogoProps {
  className?: string;
  variant?: "full" | "mark" | "wordmark";
  color?: "default" | "white" | "gradient";
}

export function Logo({ className = "", variant = "full", color = "default" }: LogoProps) {
  const getColor = () => {
    switch (color) {
      case "white":
        return { primary: "#ffffff", secondary: "#ffffff" };
      case "gradient":
        return { primary: "url(#logoGradient)", secondary: "url(#logoGradient)" };
      default:
        return { primary: "#10b981", secondary: "#ffffff" };
    }
  };

  const colors = getColor();

  // Logo mark - stylized "F" with network nodes
  const LogoMark = () => (
    <svg viewBox="0 0 40 40" fill="none" className={variant === "mark" ? className : "h-8 w-8"}>
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {/* Main F shape */}
      <path
        d="M8 8h24v4H14v8h14v4H14v12h-6V8z"
        fill={colors.primary}
      />
      {/* Network nodes */}
      <circle cx="32" cy="10" r="3" fill={colors.primary} opacity="0.8" />
      <circle cx="28" cy="20" r="2.5" fill={colors.primary} opacity="0.6" />
      <circle cx="34" cy="28" r="2" fill={colors.primary} opacity="0.4" />
      {/* Connection lines */}
      <path
        d="M29 10L14 12M25.5 20L14 20M32 28L14 26"
        stroke={colors.primary}
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );

  // Full logo with wordmark
  if (variant === "full") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <LogoMark />
        <span className="text-xl font-semibold tracking-tight text-white">
          Fleet<span className="text-emerald-400">Works</span>
        </span>
      </div>
    );
  }

  // Just the wordmark
  if (variant === "wordmark") {
    return (
      <span className={`text-xl font-semibold tracking-tight text-white ${className}`}>
        Fleet<span className="text-emerald-400">Works</span>
      </span>
    );
  }

  // Just the mark
  return <LogoMark />;
}

// Compact logo for mobile/footer
export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <defs>
          <linearGradient id="logoGradientCompact" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <path
          d="M4 4h16v3H8v5h10v3H8v9H4V4z"
          fill="url(#logoGradientCompact)"
        />
        <circle cx="20" cy="5.5" r="2" fill="#10b981" opacity="0.8" />
        <circle cx="18" cy="12.5" r="1.5" fill="#10b981" opacity="0.6" />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-white">
        FW
      </span>
    </div>
  );
}
