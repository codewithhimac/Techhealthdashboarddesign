import { Home, User, Search, FileText, BarChart3, Bot, BookOpen } from "lucide-react";
import { motion } from "motion/react";

export function Sidebar({ activeSection, setActiveSection }) {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "My Profile", icon: User },
    { id: "scan", label: "Quick Scan", icon: Search },
    { id: "history", label: "Scan History", icon: FileText },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "assistant", label: "AI Assistant", icon: Bot },
    { id: "learn", label: "Learn", icon: BookOpen },
  ];

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-[#d4e5d8]/40 via-[#e8f0ea]/30 to-[#d4e5d8]/40 backdrop-blur-xl border-r border-white/40 flex flex-col sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-white/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a8c9b4] to-[#7fb093] flex items-center justify-center shadow-lg">
            <Search className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-[#2d5a3d] tracking-tight">ALLER SCAN</h1>
            <p className="text-xs text-[#5a8268] mt-0.5">AI-Powered Scanner</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-white/60 shadow-lg shadow-[#a8c9b4]/20 text-[#2d5a3d]"
                  : "text-[#5a8268] hover:bg-white/30"
              }`}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-[#a8c9b4] to-[#7fb093] text-white shadow-md"
                    : "bg-white/40 text-[#5a8268]"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-white/30">
        <p className="text-xs text-center text-[#5a8268]">
          Powered by <span className="font-semibold text-[#2d5a3d]">ALLER SCAN AI</span>
        </p>
      </div>
    </div>
  );
}
