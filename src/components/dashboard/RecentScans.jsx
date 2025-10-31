import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

export function RecentScans() {
  const scans = [
    {
      id: 1,
      food: "Almond Milk",
      allergens: ["Tree Nuts"],
      safety: "unsafe",
      score: 45,
      date: "Oct 31, 2025 10:23 AM",
    },
    {
      id: 2,
      food: "Gluten-Free Bread",
      allergens: ["None"],
      safety: "safe",
      score: 98,
      date: "Oct 31, 2025 09:15 AM",
    },
    {
      id: 3,
      food: "Protein Bar",
      allergens: ["Peanuts", "Soy"],
      safety: "moderate",
      score: 62,
      date: "Oct 30, 2025 04:45 PM",
    },
    {
      id: 4,
      food: "Greek Yogurt",
      allergens: ["Dairy"],
      safety: "unsafe",
      score: 38,
      date: "Oct 30, 2025 02:30 PM",
    },
    {
      id: 5,
      food: "Rice Crackers",
      allergens: ["None"],
      safety: "safe",
      score: 96,
      date: "Oct 30, 2025 11:20 AM",
    },
    {
      id: 6,
      food: "Chocolate Bar",
      allergens: ["Dairy", "Soy"],
      safety: "moderate",
      score: 58,
      date: "Oct 29, 2025 08:15 PM",
    },
  ];

  const getSafetyBadge = (safety, score) => {
    switch (safety) {
      case "safe":
        return (
          <Badge className="bg-gradient-to-r from-[#10b981] to-[#34d399] text-white border-0 shadow-sm">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Safe ({score}%)
          </Badge>
        );
      case "moderate":
        return (
          <Badge className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-white border-0 shadow-sm">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Moderate ({score}%)
          </Badge>
        );
      case "unsafe":
        return (
          <Badge className="bg-gradient-to-r from-[#ef4444] to-[#f87171] text-white border-0 shadow-sm">
            <XCircle className="w-3 h-3 mr-1" />
            Unsafe ({score}%)
          </Badge>
        );
    }
  };

  return (
    <Card className="p-6 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
      <div className="mb-6">
        <h4 className="text-[#2d5a3d] mb-1">Recent Scan History</h4>
        <p className="text-sm text-[#5a8268]">Your latest allergen scans</p>
      </div>

      <div className="rounded-xl overflow-hidden border border-white/60">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-[#d4e5d8]/50 to-[#e8f0ea]/50 hover:bg-gradient-to-r hover:from-[#d4e5d8]/50 hover:to-[#e8f0ea]/50">
              <TableHead className="text-[#2d5a3d]">Food Item</TableHead>
              <TableHead className="text-[#2d5a3d]">Allergens</TableHead>
              <TableHead className="text-[#2d5a3d]">Safety Status</TableHead>
              <TableHead className="text-[#2d5a3d]">Date & Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scans.map((scan) => (
              <TableRow
                key={scan.id}
                className="hover:bg-white/40 transition-colors cursor-pointer"
              >
                <TableCell className="font-medium text-[#2d5a3d]">
                  {scan.food}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {scan.allergens.map((allergen) => (
                      <Badge
                        key={allergen}
                        variant="outline"
                        className={`text-xs ${
                          allergen === "None"
                            ? "border-[#10b981] text-[#10b981] bg-[#10b981]/5"
                            : "border-[#5a8268] text-[#5a8268] bg-[#5a8268]/5"
                        }`}
                      >
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{getSafetyBadge(scan.safety, scan.score)}</TableCell>
                <TableCell className="text-sm text-[#5a8268]">
                  {scan.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
