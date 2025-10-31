import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Learn() {
  const articles = [
    {
      id: 1,
      title: "Understanding Food Allergies: A Comprehensive Guide",
      excerpt: "Learn about the most common food allergens, symptoms, and how to manage allergic reactions effectively.",
      category: "Basics",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400",
    },
    {
      id: 2,
      title: "Cross-Contamination: What You Need to Know",
      excerpt: "Discover how cross-contamination occurs and practical tips to prevent it in your kitchen.",
      category: "Safety",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400",
    },
    {
      id: 3,
      title: "Reading Food Labels for Allergens",
      excerpt: "Master the art of reading food labels to identify hidden allergens and make safe choices.",
      category: "Tips",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=400",
    },
    {
      id: 4,
      title: "Gluten-Free Living: Essential Tips",
      excerpt: "Everything you need to know about living gluten-free, from shopping to dining out.",
      category: "Diet",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
    },
    {
      id: 5,
      title: "Dairy Alternatives: Complete Guide",
      excerpt: "Explore nutritious and delicious dairy alternatives for those with lactose intolerance or dairy allergies.",
      category: "Alternatives",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
    },
    {
      id: 6,
      title: "Emergency Response to Allergic Reactions",
      excerpt: "Critical information on recognizing and responding to severe allergic reactions and anaphylaxis.",
      category: "Emergency",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Basics":
        return "bg-gradient-to-r from-[#7fb093] to-[#a8c9b4] text-white";
      case "Safety":
        return "bg-gradient-to-r from-[#ef4444] to-[#f87171] text-white";
      case "Tips":
        return "bg-gradient-to-r from-[#10b981] to-[#34d399] text-white";
      case "Diet":
        return "bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-white";
      case "Alternatives":
        return "bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white";
      case "Emergency":
        return "bg-gradient-to-r from-[#dc2626] to-[#ef4444] text-white";
      default:
        return "bg-gradient-to-r from-[#5a8268] to-[#2d5a3d] text-white";
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-8 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7fb093] to-[#a8c9b4] flex items-center justify-center shadow-lg">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-[#2d5a3d]">Learning Center</h3>
            <p className="text-sm text-[#5a8268]">
              Educational resources about food allergies and sensitivities
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="overflow-hidden bg-white/50 backdrop-blur-xl border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge className={`${getCategoryColor(article.category)} border-0 shadow-lg`}>
                  {article.category}
                </Badge>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-[#2d5a3d] mb-3 line-clamp-2 group-hover:text-[#7fb093] transition-colors">
                {article.title}
              </h4>
              <p className="text-sm text-[#5a8268] mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#5a8268]">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <Button
                  variant="ghost"
                  className="text-[#7fb093] hover:text-[#6fa083] hover:bg-[#7fb093]/10 p-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
