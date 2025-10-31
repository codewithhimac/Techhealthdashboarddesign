import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { OverviewStats, SafetyProgress } from "./components/dashboard/OverviewStats";
import { QuickScan } from "./components/dashboard/QuickScan";
import { RecentScans } from "./components/dashboard/RecentScans";
import {
  WeeklyScanChart,
  AllergenTypeChart,
  FoodCategoryChart,
} from "./components/dashboard/Charts";
import { AIAssistant } from "./components/dashboard/AIAssistant";
import { Profile } from "./components/dashboard/Profile";
import { Learn } from "./components/dashboard/Learn";
import backgroundImage from "figma:asset/d617dcd02b0696d298149a1c25ad0446d0eaa42c.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f0ea]/80 via-[#d4e5d8]/70 to-[#c5dccb]/80 backdrop-blur-sm" />

      <div className="relative z-10 flex">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          <TopBar />

          <main className="p-8">
            {activeSection === "home" && <HomeSection />}
            {activeSection === "profile" && <Profile />}
            {activeSection === "scan" && <ScanSection />}
            {activeSection === "history" && <HistorySection />}
            {activeSection === "reports" && <ReportsSection />}
            {activeSection === "assistant" && <AssistantSection />}
            {activeSection === "learn" && <Learn />}
          </main>
        </div>
      </div>
    </div>
  );
}

function HomeSection() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <h2 className="text-[#2d5a3d] mb-2">Welcome back, Sarah! 👋</h2>
        <p className="text-[#5a8268]">
          Here's your allergen safety overview for today
        </p>
      </div>

      {/* Stats Overview */}
      <OverviewStats />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <QuickScan />
          <RecentScans />
        </div>
        <div>
          <SafetyProgress />
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyScanChart />
        <AllergenTypeChart />
      </div>
    </div>
  );
}

function ScanSection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-[#2d5a3d] mb-2">Quick Scan</h2>
        <p className="text-[#5a8268]">
          Upload a photo or scan a barcode to check for allergens
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <QuickScan />
        </div>
        <div>
          <SafetyProgress />
        </div>
      </div>
      <RecentScans />
    </div>
  );
}

function HistorySection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-[#2d5a3d] mb-2">Scan History</h2>
        <p className="text-[#5a8268]">
          View all your previous allergen scans and results
        </p>
      </div>
      <OverviewStats />
      <RecentScans />
    </div>
  );
}

function ReportsSection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-[#2d5a3d] mb-2">Reports & Analytics</h2>
        <p className="text-[#5a8268]">
          Detailed insights into your allergen scanning patterns
        </p>
      </div>
      <OverviewStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyScanChart />
        <AllergenTypeChart />
      </div>
      <FoodCategoryChart />
    </div>
  );
}

function AssistantSection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-[#2d5a3d] mb-2">AI Assistant</h2>
        <p className="text-[#5a8268]">
          Get instant answers about allergens, foods, and safety
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AIAssistant />
        </div>
        <div className="space-y-6">
          <SafetyProgress />
        </div>
      </div>
    </div>
  );
}
