"use client";

import Image from "next/image";
import { Search, Bell, Moon, Settings, Sun } from "lucide-react";
import { Images } from "@/public";
import { useTheme } from "next-themes";

export default function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="z-30 bg-background  lg:left-80">
      {/* Outer container */}
      <div className="flex items-center justify-between rounded-2xl bg-muted px-3 md:px-6 py-3 gap-2">
        {/* Search */}
        <div className="flex items-center gap-2 flex-1 max-w-xl bg-card rounded-full px-4 py-3">
          <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            placeholder="Search for task, people, documents and more..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground hidden sm:block"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground sm:hidden"
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition">
            <Bell className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          </button>

          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition hidden sm:flex"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            ) : (
              <Moon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            )}
          </button>

          <button className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition hidden sm:flex">
            <Settings className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          </button>

          {/* User */}
          <div className="flex items-center gap-2 pl-2">
            <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border border-border flex-shrink-0">
              <Image
                src={Images.user}
                alt="User avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="leading-tight hidden lg:block">
              <p className="text-sm font-medium text-foreground">
                Muaz Balogun
              </p>
              <p className="text-xs text-muted-foreground">
                muazbalogun97@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
