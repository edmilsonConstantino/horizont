import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, MessageCircle, Phone, Menu, X, Bell } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Consultoria de Excelência",
    subtitle: "Soluções estratégicas para o seu negócio",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    title: "Inovação & Crescimento",
    subtitle: "Transforme desafios em oportunidades",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "Resultados Comprovados",
    subtitle: "Parceiro estratégico do seu sucesso",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChatbotClick = () => {
    setShowChatbot(!showChatbot);
    setHasNotification(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Creative Mobile Menu Button */}
      <motion.button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="lg:hidden fixed top-6 left-6 z-50 w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full shadow-2xl shadow-brand-500/30 flex items-center justify-center group overflow-hidden"
      >
        <motion.div
          animate={{ rotate: showMobileMenu ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {showMobileMenu ? (
            <X className="h-7 w-7 text-white" />
          ) : (
            <div className="relative">
              <Menu className="h-7 w-7 text-white" />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
              />
            </div>
          )}
        </motion.div>
        
        {/* Creative Background Animation */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"
        />
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
            onClick={() => setShowMobileMenu(false)}
          >
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-80 h-full bg-gradient-to-br from-slate-900 via-brand-900/30 to-slate-900 p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Logo */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12 mt-16"
              >
                <h1 className="text-4xl font-black tracking-tighter">
                  <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
                    H
                  </span>
                  <span className="text-white">orizon</span>
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-brand-400 to-brand-500 mt-2 rounded-full" />
                <p className="text-slate-400 text-sm mt-2 font-light">Global Consulting</p>
              </motion.div>

              {/* Mobile Navigation */}
              <nav className="space-y-6">
                {[
                  { label: "Início", icon: "🏠", href: "#" },
                  { label: "Serviços", icon: "💼", href: "#services" },
                  { label: "Sobre", icon: "ℹ️", href: "#about" },
                  { label: "Contato", icon: "📧", href: "#contact" }
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setShowMobileMenu(false)}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-brand-500/20 hover:border-brand-400/50 transition-all group cursor-pointer"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-3xl"
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-white font-medium text-lg group-hover:text-brand-300 transition-colors">
                      {item.label}
                    </span>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="ml-auto"
                    >
                      <ArrowRight className="h-5 w-5 text-brand-400" />
                    </motion.div>
                  </motion.a>
                ))}
              </nav>

              {/* Mobile Social Links */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 pt-8 border-t border-white/10"
              >
                <p className="text-slate-400 text-sm mb-4">Siga-nos</p>
                <div className="flex gap-4">
                  {["📘", "📧", "📞"].map((icon, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-brand-500/20 hover:bg-brand-400/30 rounded-xl flex items-center justify-center transition-all"
                    >
                      <span className="text-xl">{icon}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop/Mobile Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Desktop Left Sidebar */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex lg:w-80 bg-gradient-to-br from-slate-900/90 via-brand-800/20 to-slate-900/90 backdrop-blur-xl p-8 flex-col border-r border-brand-400/20"
        >
          {/* Desktop Logo */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative">
              <h1 className="text-5xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
                  H
                </span>
                <span className="text-white">orizon</span>
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-brand-400 to-brand-500 mt-2 rounded-full"
              />
              <p className="text-slate-400 text-sm mt-2 font-light">Global Consulting</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="space-y-3 flex-1">
            {[
              { label: "Início", icon: "🏠" },
              { label: "Serviços", icon: "💼", href: "#services" },
              { label: "Sobre", icon: "ℹ️", href: "#about" },
              { label: "Contato", icon: "📧", href: "#contact" }
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href || "#"}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4 px-6 py-4 rounded-xl hover:bg-brand-500/10 hover:border-brand-400/30 border border-transparent transition-all group cursor-pointer"
              >
                <motion.span 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="text-2xl"
                >
                  {item.icon}
                </motion.span>
                <span className="text-slate-300 group-hover:text-brand-300 transition-colors font-medium">
                  {item.label}
                </span>
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="ml-auto"
                >
                  <ArrowRight className="h-4 w-4 text-brand-400" />
                </motion.div>
              </motion.a>
            ))}
          </nav>

          {/* Slide Indicators */}
          <div className="flex gap-3 mt-8">
            {slides.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentSlide(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "w-8 bg-brand-400 shadow-lg shadow-brand-400/50" : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Content - Slides */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-brand-900/70 to-slate-900/90" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center p-6 lg:p-12 pt-24 lg:pt-12">
                <div className="max-w-4xl text-center lg:text-left">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block px-6 py-3 bg-brand-400/20 border border-brand-400/30 rounded-full text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
                      Excelência em Consultoria
                    </span>
                  </motion.div>

                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
                  >
                    {slides[currentSlide].title}
                  </motion.h2>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <Button
                      size="lg"
                      onClick={scrollToContact}
                      className="bg-gradient-to-r from-brand-400 to-brand-600 hover:from-brand-500 hover:to-brand-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-brand-400/50 transition-all duration-300 group"
                    >
                      Começar Agora
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                      className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm"
                    >
                      Explorar Serviços
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/258841234567"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all group"
        >
          <Phone className="h-6 w-6 text-white" />
        </motion.a>

        {/* Chatbot Button with Notification */}
        <motion.button
          onClick={handleChatbotClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 hover:from-brand-500 hover:to-brand-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-brand-400/50 transition-all overflow-hidden"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          
          {/* Notification Badge with Animation */}
          <AnimatePresence>
            {hasNotification && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute -top-1 -right-1"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                    <Bell className="h-3 w-3 text-white" />
                  </div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0, 0.7]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-red-400 rounded-full"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Enhanced Chatbot Widget */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden border border-brand-200/50"
          >
            <div className="bg-gradient-to-r from-brand-400 to-brand-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold">Assistente Virtual</h3>
                  <p className="text-white/80 text-xs">Online agora • IA Especializada</p>
                </div>
              </div>
              <button 
                onClick={() => setShowChatbot(false)} 
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="p-4 h-80 bg-gradient-to-b from-slate-50 to-brand-50/30 overflow-y-auto">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white p-4 rounded-2xl shadow-sm mb-3 border border-brand-100"
              >
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Olá! 👋 Sou o assistente virtual da Horizon. Como posso ajudar você hoje? Estou aqui para esclarecer dúvidas sobre nossos serviços!
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <div className="flex gap-2 flex-wrap">
                {[
                  "💼 Nossos Serviços",
                  "📞 Falar com Consultor",
                  "💰 Solicitar Orçamento",
                  "📋 Agendar Reunião"
                ].map((option, i) => (
                  <motion.button
                    key={option}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm hover:bg-brand-200 transition-colors font-medium"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t border-brand-100 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-3 rounded-full border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-sm"
                />
                <Button
                  size="sm"
                  className="bg-brand-500 hover:bg-brand-600 text-white rounded-full px-4 py-3"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}