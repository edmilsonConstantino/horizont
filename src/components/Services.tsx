import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calculator, FileText, ClipboardCheck, TrendingUp, BarChart3, Users, Briefcase, Receipt, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "contabilidade",
    icon: Calculator,
    title: "Contabilidade",
    color: "from-[#4c87b4] to-[#4c87b4]",
    features: [
      "Coleta e análise dos documentos de suporte",
      "Lançamentos contabilísticos e revisão",
      "Reconciliações e revisões de contas",
      "Elaboração e análise de Balanço, DRE, Fluxo de Caixa e Relatório Estatutário"
    ]
  },
  {
    id: "fiscalidade",
    icon: FileText,
    title: "Consultoria Fiscal",
    color: "from-[#4c87b4] to-[#4c87b4]",
    features: [
      "Cálculo e apuramento de impostos mensais",
      "Declarações anuais de informação contabilística e fiscal",
      "Revisão fiscal e aconselhamento",
      "Representação fiscal perante autoridades"
    ]
  },
  {
    id: "consultoria_financeira",
    icon: TrendingUp,
    title: "Consultoria Financeira",
    color: "from-[#4c87b4] to-[#4c87b4]",
    features: [
      "Planeamento e Gestão Financeira",
      "Gestão de Fluxo de Caixa",
      "Otimização de Custos e Despesas",
      "Análise e Gestão de Investimentos",
      "Conformidade Financeira e Fiscal"
    ]
  },
  {
    id: "auditoria",
    icon: ClipboardCheck,
    title: "Auditoria",
    color: "from-[#4c87b4] to-[#4c87b4]",
    features: [
      "Due Diligences",
      "Auditoria Operacional",
      "Avaliação de Controlo Interno",
      "Auditoria a Fundos UE e Bancos de Desenvolvimento"
    ]
  },
  {
    id: "consultoria",
    icon: TrendingUp,
    title: "Consultoria de Gestão Empresarial",
    color: "from-[#4c87b4] to-[#4c87b4]",
    features: [
      "Reestruturação de Dívida",
      "Planos de Negócio",
      "Criação de Contas de Gestão",
      "Due Diligence Financeira",
      "Operações de M&A"
    ]
  },
  {
    id: "controlo",
    icon: BarChart3,
    title: "Controlo de Gestão",
    color: "from-[#4c87b4] to-[#4c87b4]",
    features: [
      "Gestão de Disponibilidades e Contas de Terceiros",
      "Manutenção dos Processos Bancários",
      "Acompanhamento de Processos de Auditoria",
      "Execução do Processo de Reporte de Gestão",
      "Execução das Tarefas Administrativas da Empresa"
    ]
  },
  {
    id: "rh",
    icon: Users,
    title: "Recursos Humanos",
    color: "from-[#4c87b4] to-[#4c87b4]",
    features: [
      "Cumprimento das Obrigações Fiscais Corporativas e Individuais",
      "Payroll",
      "Gestão de Relações Trabalhistas",
      "Outsourcing de Processos na Área de Pessoal"
    ]
  },
  {
    id: "administrativos",
    icon: Briefcase,
    title: "Serviços Administrativos",
    color: "from-[#4c87b4] to-[#4c87b4]",
    features: [
      "Domiciliação",
      "Centro de Expediente",
      "Secretaria",
      "Manual de Procedimentos"
    ]
  },
  {
    id: "faturacao",
    icon: Receipt,
    title: "Faturação",
    color: "from-[#4c87b4] to-[#4c87b4]",
    features: [
      "Preparação e emissão de faturas certificadas",
      "Integração com softwares de faturação",
      "Conformidade com autoridades tributárias"
    ]
  }
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showAll) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 6000); // ALTERADO: de 4000 para 6000ms (6 segundos)
      return () => clearInterval(timer);
    }
  }, [showAll]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
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
            Nossos <span className="bg-gradient-to-r from-[#5290c2] to-[#5290c2] bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Soluções completas e integradas para todas as necessidades da sua empresa
          </p>
        </motion.div>

        {!showAll ? (
          <div className="relative">
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
                  <ServiceCard service={services[currentIndex]} navigate={navigate} />
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-4">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-8 bg-[#4c87b4]" : "w-2 bg-slate-700"}`}
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative overflow-hidden">
              <div className="relative h-[520px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                      {[0, 1, 2, 3].map((offset) => {
                        const serviceIndex = (currentIndex + offset) % services.length;
                        return (
                          <motion.div
                            key={serviceIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: offset * 0.1, duration: 0.5 }}
                          >
                            <ServiceCard service={services[serviceIndex]} navigate={navigate} />
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ALTERADO: Setas mais afastadas e maiores */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-20 -right-20 flex justify-between pointer-events-none z-10">
                <Button
                  onClick={prevSlide}
                  size="icon"
                  className="bg-[#4c87b4] hover:bg-[#4c87b4]/90 text-white rounded-full shadow-2xl pointer-events-auto w-14 h-14"
                >
                  <ChevronLeft className="h-7 w-7" />
                </Button>
                <Button
                  onClick={nextSlide}
                  size="icon"
                  className="bg-[#4c87b4] hover:bg-[#4c87b4]/90 text-white rounded-full shadow-2xl pointer-events-auto w-14 h-14"
                >
                  <ChevronRight className="h-7 w-7" />
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-8 bg-[#4c87b4]" : "w-2 bg-slate-700"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <ServiceCard service={service} navigate={navigate} />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => setShowAll(!showAll)}
            size="lg"
            className="bg-[#4c87b4] hover:bg-[#4c87b4]/90 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl transition-all group"
          >
            {showAll ? "Ver Menos" : "Ver Todos os Serviços"}
            <ArrowRight className={`ml-2 h-5 w-5 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, navigate }: { service: typeof services[0], navigate: any }) {
  const Icon = service.icon;

  return (
    <Card 
      className="group relative bg-slate-900/50 backdrop-blur-xl border-slate-800 hover:border-[#4c87b4]/50 p-6 h-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#4c87b4]/20 flex flex-col"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative z-10 flex flex-col flex-1">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4 flex justify-center lg:justify-start"
        >
          <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-[#4c87b4] transition-colors text-center lg:text-left">
          {service.title}
        </h3>

        <div className="space-y-2.5 flex-1 mb-6">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4c87b4] mt-1.5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => navigate(`/service/${service.id}`)}
          className="w-full sm:w-auto bg-[#4c87b4] hover:bg-[#4c87b4]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group/btn"
        >
          <span>Saiba Mais</span>
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </Card>
  );
}