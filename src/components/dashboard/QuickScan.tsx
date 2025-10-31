import { Upload, Camera, FileText } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { useState } from "react";

export function QuickScan() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Card className="p-8 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
      <div className="mb-6">
        <h4 className="text-[#2d5a3d] mb-2">Quick Scan</h4>
        <p className="text-sm text-[#5a8268]">
          Upload an image or scan a barcode to check for allergens
        </p>
      </div>

      <motion.div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          isDragging
            ? "border-[#7fb093] bg-[#a8c9b4]/10 scale-[1.02]"
            : "border-[#d4e5d8] bg-gradient-to-br from-[#f0f7f2] to-[#e8f0ea]"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7fb093] via-[#a8c9b4] to-[#7fb093] opacity-0 hover:opacity-20 transition-opacity duration-500 animated-gradient blur-sm" />
        
        <div className="relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#7fb093] to-[#a8c9b4] flex items-center justify-center shadow-lg pulse-glow">
            <Upload className="w-10 h-10 text-white" />
          </div>
          
          <h4 className="text-[#2d5a3d] mb-2">Drop your file here</h4>
          <p className="text-sm text-[#5a8268] mb-6">
            or click to browse from your device
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-[#7fb093] to-[#a8c9b4] hover:from-[#6fa083] hover:to-[#98b9a4] text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Camera className="w-4 h-4 mr-2" />
              Take Photo
            </Button>
            <Button variant="outline" className="border-[#a8c9b4] text-[#2d5a3d] hover:bg-[#a8c9b4]/10">
              <FileText className="w-4 h-4 mr-2" />
              Scan Barcode
            </Button>
          </div>
          
          <p className="text-xs text-[#5a8268] mt-6">
            Supported formats: JPG, PNG, PDF • Max size: 10MB
          </p>
        </div>
      </motion.div>
    </Card>
  );
}
