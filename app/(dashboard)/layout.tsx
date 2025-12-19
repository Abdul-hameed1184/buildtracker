"use client";

import { useState } from "react";
import { ChevronLeft, Home, Users, FileText, Link, Settings, BarChart3, Download, Menu } from "lucide-react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: FileText, label: "Tasks" },
    { icon: Users, label: "Team" },
    { icon: FileText, label: "Wiki" },
    { icon: Link, label: "Quick Links" },
    { icon: Settings, label: "Integrations" },
    { icon: Settings, label: "Modules" },
    { icon: BarChart3, label: "Reports" },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden gap-4 mt-4 pr-4 pb-4">
        <TopBar />
        <div className="overflow-auto scrollbar-hide rounded-2xl">{children}</div>
      </div>
    </div>
  );
}