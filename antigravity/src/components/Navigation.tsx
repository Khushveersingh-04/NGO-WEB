"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, User, Menu, ChevronDown, Map, Globe, Users, FileText } from "lucide-react";

const MENU_ITEMS = [
  {
    id: "impact",
    label: "Impact Map",
    sublinks: [
      { name: "Nearby Needs", icon: Map, desc: "Find causes in your locality" },
      { name: "Global Missions", icon: Globe, desc: "Explore worldwide impact" }
    ]
  },
  {
    id: "donate",
    label: "Donate",
    sublinks: [
      { name: "General Fund", icon: Heart, desc: "Support ongoing operations" },
      { name: "Custom Campaign", icon: Users, desc: "Fund specific initiatives" },
      { name: "Sponsorships", icon: User, desc: "Sponsor a specific child or village" }
    ]
  },
  {
    id: "events",
    label: "Events",
    sublinks: [
      { name: "Upcoming Events", icon: FileText, desc: "Join our local drives" },
      { name: "Volunteer Board", icon: Users, desc: "Connect with the team" }
    ]
  },
  {
    id: "transparency",
    label: "Transparency",
    sublinks: [
      { name: "Financial Reports", icon: FileText, desc: "View our open ledgers" },
      { name: "Impact Metrics", icon: Search, desc: "Track overall progress" },
      { name: "Open Source Tech", icon: Globe, desc: "Explore our public codebase" }
    ]
  }
];

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 mx-4 mt-4 glass-card rounded-2xl"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <Heart className="w-6 h-6 text-brand-accent fill-brand-accent" />
          <span className="text-xl font-bold tracking-tight text-brand-text">AntiGravity</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="relative py-2"
              onMouseEnter={() => setActiveMenu(item.id)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors outline-none ${
                  activeMenu === item.id 
                    ? "text-white drop-shadow-md" 
                    : "text-brand-text-muted hover:text-white"
                }`}
              >
                {item.label}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === item.id ? "rotate-180 text-white" : ""}`} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex p-2 hover:bg-brand-background rounded-full transition-colors text-brand-text-muted hover:text-brand-text outline-none">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden md:flex p-2 hover:bg-brand-background rounded-full transition-colors text-brand-text-muted hover:text-brand-text outline-none">
            <User className="w-5 h-5" />
          </button>
          <button className="md:hidden p-2 text-brand-text outline-none">
            <Menu className="w-5 h-5" />
          </button>
          <button className="hidden md:block gradient-btn outline-none px-5 py-2 rounded-full font-medium text-sm">
            Join Hub
          </button>
        </div>
      </div>

      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-0 top-full mt-3 w-full overflow-hidden"
          >
            <div className="glass-card rounded-2xl p-6 mx-auto border border-white/5 shadow-2xl relative bg-[#111111]/80 backdrop-blur-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {MENU_ITEMS.find(m => m.id === activeMenu)?.sublinks.map((link, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-300">
                      <link.icon className="w-5 h-5 text-brand-text-muted group-hover:text-brand-accent transition-colors" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-brand-text font-medium mb-1 group-hover:text-brand-accent transition-colors">{link.name}</h4>
                      <p className="text-xs text-brand-text-muted">{link.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
