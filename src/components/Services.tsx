import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calculator, FileText, ClipboardCheck, TrendingUp, BarChart3, Users, Briefcase, Receipt, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "contabilidade",
    icon: Calculator,
    title: "Contabilidade",
    description: "Gestão contabilística completa e rigorosa para o seu negócio",
    color: "from-brand-500 to-brand-600",
    features: ["Contabilidade Geral", "Relatórios Financeiros", "Análise de Custos"]
  },
  {
    id: "fiscalidade",
    icon: FileText,
    title: "Fiscalidade",
    description: "Consultoria fiscal especializada e otimização tributária",
    color: "from-brand-400 to-brand-500",
    features: ["Planeamento Fiscal", "Declarações", "Otimização Tributária"]
  },
  {
    id: "auditoria",
    icon: ClipboardCheck,
    title: "Auditoria",
    description: "Auditoria financeira e operacional com padrões internacionais",
    color: "from-brand-600 to-brand-700",
    features: ["Auditoria Externa", "Auditoria Interna", "Due Diligence"]
  },
  {
    id: "consultoria",
    icon: TrendingUp,
    title: "Consultoria de Gestão",
    description: "Estratégias personalizadas para crescimento sustentável",
    color: "from-brand-300 to-brand-400",
    features: ["Estratégia Empresarial", "Transformação Digital", "Gestão de Mudança"]
  },
  {
    id: "controlo",
    icon: BarChart3,
    title: "Controlo de Gestão",
    description: "Sistemas de controlo e análise de performance empresarial",
    color: "from-brand-700 to-brand-800",
    features: ["KPIs", "Dashboards", "Análise de Performance"]
  },
  {
    id: "rh",
    icon: Users,
    title: "Recursos Humanos",
    description: "Gestão completa de RH e desenvolvimento organizacional",
    color: "from-brand-200 to-brand-300",
    features: ["Recrutamento", "Formação", "Gestão de Talentos"]
  },
  {
    id: "administrativos",
    icon: Briefcase,
    title: "Serviços Administrativos",
    description: "Suporte administrativo profissional e eficiente",
    color: "from-brand-400 to-brand-600",
    features: ["Gestão Documental", "Secretariado", "Apoio Operacional"]
  },
  {
    id: "faturacao",
    icon: Receipt,
    title: "Faturação",
    description: "Sistemas de faturação modernos e conformes",
    color: "from-brand-500 to-brand-700",
    features: ["Faturação Eletrónica", "Integração SAF-T", "Gestão de Cobranças"]
  }
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const visibleServices = showAll ? services : services.slice(0, 4);
  const displayedServices = showAll ? visibleServices : [services[currentIndex]];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + 4) % 4);
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Nossos <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Soluções completas e integradas para todas as necessidades da sua empresa
          </p>
        </motion.div>

        {/* Mobile Carousel / Desktop Grid */}
        {!showAll ? (
          <div className="relative">
            {/* Mobile: Single Card Carousel */}
            <div className="lg:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="px-4"
                >
                  <ServiceCard service={services[currentIndex]} />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  onClick={prevSlide}
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white rounded-full"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  onClick={nextSlide}
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white rounded-full"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {services.slice(0, 4).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex ? "w-8 bg-brand-500" : "w-2 bg-slate-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: 4 Cards Grid */}
            <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {services.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          // Show All Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => setShowAll(!showAll)}
            size="lg"
            className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-brand-500/50 transition-all group"
          >
            {showAll ? "Ver Menos" : "Ver Todos os Serviços"}
            <ArrowRight className={`ml-2 h-5 w-5 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  const navigate = useNavigate();

  return (
    <Card 
      onClick={() => navigate(`/service/${service.id}`)}
      className="group relative bg-slate-900/50 backdrop-blur-xl border-slate-800 hover:border-brand-500/50 p-6 h-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/20"
    >
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4"
        >
          <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-400 leading-relaxed mb-4">
          {service.description}
        </p>

        <div className="space-y-2">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center text-brand-400 font-semibold group-hover:gap-2 transition-all">
          <span>Saiba mais</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Card>
  );
}