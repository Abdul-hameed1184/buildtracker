"use client";

import Link from "next/link";
import {
  Home as HomeIcon,
  Layout,
  Settings,
  BarChart3,
  Users,
  BookOpen,
  Link2,
  Cpu,
  ArrowRight,
  LogIn,
  UserPlus,
  Key,
  ShieldCheck,
  Mail,
  UserCheck
} from "lucide-react";

const dashboardRoutes = [
  { name: "Home Dashboard", path: "/home", icon: HomeIcon, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/20" },
  { name: "Task Management", path: "/tasks", icon: Layout, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/20" },
  { name: "Integrations", path: "/integrations", icon: Cpu, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950/20" },
  { name: "Reports & Analytics", path: "/reports", icon: BarChart3, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-950/20" },
  { name: "Team Management", path: "/team", icon: Users, color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-950/20" },
  { name: "Project Wiki", path: "/wiki", icon: BookOpen, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/20" },
  { name: "Quick Links", path: "/quick-links", icon: Link2, color: "text-sky-500", bg: "bg-sky-50 dark:bg-sky-950/20" },
  { name: "Modules", path: "/modules", icon: Settings, color: "text-slate-500", bg: "bg-slate-50 dark:bg-slate-950/20" },
];

const authRoutes = [
  { name: "Log In", path: "/login", icon: LogIn, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/20" },
  { name: "Sign Up", path: "/signup", icon: UserPlus, color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-950/20" },
  { name: "Forgot Password", path: "/forgot-password", icon: Key, color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-950/20" },
  { name: "OTP Verification", path: "/otp-verification", icon: ShieldCheck, color: "text-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-950/20" },
];

const externalRoutes = [
  { name: "Project Invite", path: "/invite", icon: Mail, color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-950/20" },
  { name: "User Invitation", path: "/user-invitation", icon: UserCheck, color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-950/20" },
];

const RouteSection = ({ title, routes }: { title: string, routes: typeof dashboardRoutes }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest pl-2 border-l-4 border-primary">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {routes.map((route) => (
        <Link
          key={route.path}
          href={route.path}
          className="group relative bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div className="relative z-10 flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl ${route.bg} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
              <route.icon className={`h-5 w-5 ${route.color}`} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {route.name}
              </h3>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-tight">
                {route.path}
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="h-4 w-4 text-primary" />
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans p-6 md:p-12 lg:p-20">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-800">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Full Project Coverage</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
            Application <span className="text-primary italic">Sitemap</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Centralized access to all application modules, authentication flows, and public landing pages.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          <RouteSection title="Dashboard Core" routes={dashboardRoutes} />
          <RouteSection title="Authentication" routes={authRoutes} />
          <RouteSection title="External & Public" routes={externalRoutes} />
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-slate-200 dark:border-slate-900">
          <p className="text-[10px] font-black text-slate-400 dark:text-slate-700 uppercase tracking-[0.2em]">
            BuildTracker Enterprise &copy; 2026 Refined UI v2.0
          </p>
        </div>
      </div>
    </div>
  );
}
