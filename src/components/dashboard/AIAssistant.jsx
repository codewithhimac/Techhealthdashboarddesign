import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send, Bot, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your AI allergen assistant. How can I help you today?",
      time: "10:00 AM",
    },
    {
      id: 2,
      type: "user",
      content: "Can you tell me if almonds are safe for someone with nut allergies?",
      time: "10:01 AM",
    },
    {
      id: 3,
      type: "ai",
      content: "Almonds are tree nuts and should be avoided by people with tree nut allergies. They can cause severe allergic reactions including anaphylaxis. Always check product labels carefully and consult with your allergist.",
      time: "10:01 AM",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai",
        content: "I understand your question. Let me analyze that for you based on the latest allergen data...",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <Card className="p-6 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg h-[600px] flex flex-col">
      <div className="mb-4 pb-4 border-b border-white/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7fb093] to-[#a8c9b4] flex items-center justify-center shadow-md">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-[#2d5a3d]">AI Assistant</h4>
            <p className="text-xs text-[#5a8268]">Ask me anything about allergens</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === "ai"
                    ? "bg-gradient-to-br from-[#7fb093] to-[#a8c9b4]"
                    : "bg-gradient-to-br from-[#5a8268] to-[#2d5a3d]"
                }`}
              >
                {message.type === "ai" ? (
                  <Bot className="w-4 h-4 text-white" />
                ) : (
                  <User className="w-4 h-4 text-white" />
                )}
              </div>
              <div
                className={`flex-1 max-w-[80%] ${
                  message.type === "user" ? "text-right" : ""
                }`}
              >
                <div
                  className={`inline-block p-4 rounded-2xl ${
                    message.type === "ai"
                      ? "bg-white/70 text-[#2d5a3d] rounded-tl-sm shadow-md"
                      : "bg-gradient-to-br from-[#7fb093] to-[#a8c9b4] text-white rounded-tr-sm shadow-lg"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                <p className="text-xs text-[#5a8268] mt-1 px-2">{message.time}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Ask about allergens, foods, or safety..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 bg-white/70 border-white/60 rounded-xl"
        />
        <Button
          onClick={handleSend}
          className="bg-gradient-to-r from-[#7fb093] to-[#a8c9b4] hover:from-[#6fa083] hover:to-[#98b9a4] text-white shadow-lg"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
