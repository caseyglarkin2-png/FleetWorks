// Centralized icon exports and custom icons for FleetWorks
// Using Lucide React for consistency

export {
  // Navigation & UI
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  
  // Actions
  Search,
  Filter,
  Plus,
  Minus,
  Check,
  Copy,
  Download,
  Upload,
  Send,
  Phone,
  Mail,
  
  // Status & Feedback
  CheckCircle,
  CheckCircle2,
  XCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  Loader2,
  
  // Freight & Logistics
  Truck,
  Package,
  MapPin,
  Route,
  Navigation,
  Compass,
  Map,
  Globe,
  
  // Business & Finance
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Calculator,
  Receipt,
  CreditCard,
  
  // People & Organizations
  Users,
  User,
  Building2,
  Briefcase,
  Handshake,
  UserCheck,
  UserPlus,
  
  // Communication
  MessageSquare,
  MessageCircle,
  MessagesSquare,
  Bell,
  BellRing,
  
  // Technology & Data
  Cpu,
  Database,
  Server,
  Cloud,
  Wifi,
  Zap,
  Bot,
  Brain,
  Sparkles,
  
  // Security & Trust
  Shield,
  ShieldCheck,
  Lock,
  Key,
  Eye,
  EyeOff,
  Fingerprint,
  
  // Time & Schedule
  Clock,
  Calendar,
  Timer,
  History,
  
  // Documents & Content
  FileText,
  File,
  Folder,
  ClipboardList,
  List,
  
  // Settings & Tools
  Settings,
  Sliders,
  Wrench,
  Cog,
  
  // Social & Sharing
  Share2,
  Link,
  Twitter,
  Linkedin,
  Github,
  
  // Misc
  Star,
  Heart,
  Target,
  Award,
  Trophy,
  Flame,
  Rocket,
  Ban,
  CircleDot,
  Layers,
  Grid3X3,
  Network,
  GitBranch,
  Workflow,
} from "lucide-react";

// Custom FleetWorks-specific icons
export function IconMatch({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="12" r="3" />
      <path d="M9 12h6" />
      <path d="M12 9l3 3-3 3" />
    </svg>
  );
}

export function IconCapacity({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
      <path d="M12 12v4" />
      <path d="M8 12v4" />
      <path d="M16 12v4" />
    </svg>
  );
}

export function IconFriction({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function IconSignal({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 20V4" />
    </svg>
  );
}

export function IconBroker({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <path d="M16 4l2 2-2 2" />
      <path d="M18 6h-4" />
    </svg>
  );
}

export function IconCarrier({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 18V6a2 2 0 00-2-2H5a2 2 0 00-2 2v11a1 1 0 001 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 001-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0017.52 8H14v10" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

// Icon wrapper with consistent hover states
interface IconWrapperProps {
  icon: React.ReactNode;
  className?: string;
  hoverColor?: string;
}

export function IconWrapper({ icon, className = "", hoverColor = "hover:text-emerald-400" }: IconWrapperProps) {
  return (
    <span className={`inline-flex transition-colors duration-200 ${hoverColor} ${className}`}>
      {icon}
    </span>
  );
}
