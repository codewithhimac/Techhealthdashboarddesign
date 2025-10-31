import { Search, Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

export function TopBar() {
  return (
    <div className="h-20 bg-white/40 backdrop-blur-xl border-b border-white/40 px-8 flex items-center justify-between sticky top-0 z-10">
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5a8268]" />
          <Input
            placeholder="Search scans, allergens, or products..."
            className="pl-12 h-12 bg-white/60 border-white/60 rounded-xl shadow-sm focus:shadow-md transition-shadow"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 ml-8">
        {/* Notifications */}
        <button className="relative p-3 hover:bg-white/60 rounded-xl transition-all">
          <Bell className="w-5 h-5 text-[#5a8268]" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-gradient-to-br from-[#f59e0b] to-[#ef4444] border-0">
            3
          </Badge>
        </button>

        {/* Settings */}
        <button className="p-3 hover:bg-white/60 rounded-xl transition-all">
          <Settings className="w-5 h-5 text-[#5a8268]" />
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-3 pl-4 border-l border-white/40">
          <div className="text-right">
            <p className="text-sm text-[#2d5a3d]">Sarah Johnson</p>
            <p className="text-xs text-[#5a8268]">Premium Member</p>
          </div>
          <Avatar className="w-12 h-12 border-2 border-white/60 shadow-md">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
