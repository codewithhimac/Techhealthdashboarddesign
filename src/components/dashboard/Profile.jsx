import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Smartphone, Watch, CheckCircle2, Crown, Edit } from "lucide-react";

export function Profile() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="p-8 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
        <div className="flex items-start gap-6">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-white/60 shadow-xl">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center border-2 border-white shadow-lg">
              <Crown className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-[#2d5a3d] mb-1">Sarah Johnson</h3>
                <p className="text-sm text-[#5a8268]">sarah.johnson@email.com</p>
              </div>
              <Button variant="outline" className="border-[#a8c9b4] text-[#2d5a3d] hover:bg-[#a8c9b4]/10">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white border-0">
                Premium Member
              </Badge>
              <Badge variant="outline" className="border-[#10b981] text-[#10b981] bg-[#10b981]/5">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Verified Account
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Personal Info */}
      <Card className="p-6 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
        <h4 className="text-[#2d5a3d] mb-6">Personal Information</h4>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-[#5a8268] mb-1">Full Name</p>
            <p className="text-[#2d5a3d]">Sarah Johnson</p>
          </div>
          <div>
            <p className="text-sm text-[#5a8268] mb-1">Date of Birth</p>
            <p className="text-[#2d5a3d]">March 15, 1990</p>
          </div>
          <div>
            <p className="text-sm text-[#5a8268] mb-1">Phone Number</p>
            <p className="text-[#2d5a3d]">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-sm text-[#5a8268] mb-1">Location</p>
            <p className="text-[#2d5a3d]">San Francisco, CA</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Linked Devices */}
        <Card className="p-6 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
          <h4 className="text-[#2d5a3d] mb-6">Linked Devices</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7fb093] to-[#a8c9b4] flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#2d5a3d]">iPhone 15 Pro</p>
                <p className="text-xs text-[#5a8268]">Last synced: 2 min ago</p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7fb093] to-[#a8c9b4] flex items-center justify-center">
                <Watch className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#2d5a3d]">Apple Watch</p>
                <p className="text-xs text-[#5a8268]">Last synced: 5 min ago</p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
            </div>
          </div>
        </Card>

        {/* Subscription Status */}
        <Card className="p-6 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
          <h4 className="text-[#2d5a3d] mb-6">Subscription Status</h4>
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#fbbf24]/10 to-[#f59e0b]/10 border border-[#fbbf24]/20 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Crown className="w-5 h-5 text-[#f59e0b]" />
              <p className="text-[#2d5a3d]">Premium Plan</p>
            </div>
            <p className="text-sm text-[#5a8268] mb-4">
              Unlimited scans, AI assistant, and advanced analytics
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#5a8268]">Next billing date:</span>
              <span className="text-[#2d5a3d]">Nov 30, 2025</span>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-[#7fb093] to-[#a8c9b4] hover:from-[#6fa083] hover:to-[#98b9a4] text-white shadow-lg">
            Manage Subscription
          </Button>
        </Card>
      </div>

      {/* Allergen Profile */}
      <Card className="p-6 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
        <h4 className="text-[#2d5a3d] mb-6">My Allergen Profile</h4>
        <div className="flex flex-wrap gap-3">
          {["Dairy", "Gluten", "Tree Nuts", "Soy"].map((allergen) => (
            <Badge
              key={allergen}
              className="px-4 py-2 bg-gradient-to-r from-[#ef4444] to-[#f87171] text-white border-0 shadow-md"
            >
              {allergen}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
}
