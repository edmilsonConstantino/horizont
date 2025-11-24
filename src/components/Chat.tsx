import { useEffect, useRef, useState } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  from: "user" | "bot" | "bot-temp";
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Olá! 👋 Sou o assistente virtual da Horizon. Como posso ajudar?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
const PROTOCOL = window.location.protocol === "https:" ? "wss" : "ws";
const HOST = window.location.host;
const WS_URL = `${PROTOCOL}://${HOST}/ws/chat/`;

ws.current = new WebSocket(WS_URL);


    ws.current.onopen = () => {
      console.log("✅ WebSocket conectado");
      setIsConnected(true);
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.event === "typing") {
        setIsTyping(data.status);
      }

      if (data.event === "token") {
        setMessages((prev) => {
          const lastMsg = prev[prev.length - 1];
          
          if (lastMsg && lastMsg.from === "bot-temp") {
            return [
              ...prev.slice(0, -1),
              { ...lastMsg, text: lastMsg.text + data.token }
            ];
          }
          
          return [...prev, { from: "bot-temp", text: data.token }];
        });
      }

      if (data.event === "done") {
        setMessages((prev) =>
          prev.map((m) => m.from === "bot-temp" ? { ...m, from: "bot" } : m)
        );
      }

      if (data.event === "error") {
        setMessages((prev) => [...prev, { from: "bot", text: "❌ " + data.message }]);
        setIsTyping(false);
      }
    };

    ws.current.onerror = (error) => {
      console.error("❌ Erro WebSocket:", error);
      setIsConnected(false);
    };

    ws.current.onclose = () => {
      console.log("🔌 WebSocket desconectado");
      setIsConnected(false);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim() || !isConnected) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);
    ws.current?.send(JSON.stringify({ message: input }));
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold">Assistente Horizon</h3>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
                <p className="text-white/90 text-xs">
                  {isConnected ? "Online" : "Desconectado"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[500px] overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.from === "user" ? "bg-blue-600" : "bg-gray-200"
              }`}>
                {msg.from === "user" ? (
                  <User className="h-5 w-5 text-white" />
                ) : (
                  <Bot className="h-5 w-5 text-gray-600" />
                )}
              </div>

              {/* Message bubble */}
              <div className={`max-w-[75%] ${
                msg.from === "user" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-800"
              } rounded-2xl px-4 py-3 shadow-sm`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-gray-600" />
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                <Loader2 className="h-4 w-4 animate-spin text-gray-600" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={!isConnected}
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder={isConnected ? "Digite sua mensagem..." : "Conectando..."}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || !isConnected}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full p-3 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}