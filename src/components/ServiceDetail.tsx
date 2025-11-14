import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Calculator, FileText, ClipboardCheck, TrendingUp, BarChart3, Users, Briefcase, Receipt } from "lucide-react";
import { useEffect } from "react";

const servicesData: Record<string, any> = {
  contabilidade: {
    icon: Calculator,
    title: "Contabilidade",
    description: "Gestão contabilística completa e rigorosa para o seu negócio",
    color: "from-[#4c87b4] to-[#4c87b4]",
    longDescription: "Oferecemos serviços de contabilidade completos e personalizados para empresas de todos os tamanhos. Nossa equipe de contadores certificados garante precisão, conformidade e insights estratégicos para o seu negócio.",
    features: [
      "Contabilidade Geral e Escrituração",
      "Elaboração de Demonstrações Financeiras",
      "Análise de Custos e Rentabilidade",
      "Reconciliação Bancária",
      "Gestão de Ativos Fixos",
      "Relatórios Gerenciais Personalizados"
    ],
    benefits: [
      "Conformidade total com normas contabilísticas",
      "Decisões baseadas em dados precisos",
      "Redução de custos operacionais",
      "Maior controlo financeiro"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
  },
  fiscalidade: {
    icon: FileText,
    title: "Fiscalidade",
    description: "Consultoria fiscal especializada e otimização tributária",
    color: "from-[#4c87b4] to-[#4c87b4]",
    longDescription: "Maximize a eficiência fiscal da sua empresa com nossa consultoria especializada. Ajudamos a navegar pela complexidade tributária moçambicana, garantindo conformidade e otimização.",
    features: [
      "Planeamento Fiscal Estratégico",
      "Declarações de IVA e IRPC",
      "Otimização da Carga Tributária",
      "Consultoria em Incentivos Fiscais",
      "Representação perante Autoridades Fiscais",
      "Compliance Fiscal Contínuo"
    ],
    benefits: [
      "Redução legal da carga tributária",
      "Evitar penalidades e multas",
      "Aproveitamento de incentivos fiscais",
      "Tranquilidade fiscal"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
  },
  auditoria: {
    icon: ClipboardCheck,
    title: "Auditoria",
    description: "Auditoria financeira e operacional com padrões internacionais",
    color: "from-[#4c87b4] to-[#4c87b4]",
    longDescription: "Serviços de auditoria independente com os mais altos padrões de qualidade e profissionalismo, proporcionando credibilidade às suas demonstrações financeiras.",
    features: [
      "Auditoria Externa às Demonstrações Financeiras",
      "Auditoria Interna e Operacional",
      "Due Diligence Financeira",
      "Auditoria de Sistemas de Informação",
      "Revisão de Processos e Controlos",
      "Auditoria de Compliance"
    ],
    benefits: [
      "Credibilidade junto a stakeholders",
      "Identificação de riscos e oportunidades",
      "Melhoria de processos internos",
      "Conformidade regulatória"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  consultoria: {
    icon: TrendingUp,
    title: "Consultoria de Gestão",
    description: "Estratégias personalizadas para crescimento sustentável",
    color: "from-[#4c87b4] to-[#4c87b4]",
    longDescription: "Transforme desafios em oportunidades com nossa consultoria estratégica. Desenvolvemos soluções personalizadas para impulsionar o crescimento e a competitividade do seu negócio.",
    features: [
      "Estratégia Empresarial e Planeamento",
      "Transformação Digital",
      "Gestão de Mudança Organizacional",
      "Reestruturação Empresarial",
      "Análise de Mercado e Competitividade",
      "Desenvolvimento de Modelos de Negócio"
    ],
    benefits: [
      "Crescimento sustentável",
      "Vantagem competitiva",
      "Inovação e modernização",
      "Resultados mensuráveis"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  controlo: {
    icon: BarChart3,
    title: "Controlo de Gestão",
    description: "Sistemas de controlo e análise de performance empresarial",
    color: "from-[#4c87b4] to-[#4c87b4]",
    longDescription: "Implemente sistemas robustos de controlo de gestão para monitorizar e melhorar a performance da sua empresa em tempo real.",
    features: [
      "Definição de KPIs Estratégicos",
      "Dashboards Executivos Personalizados",
      "Análise de Performance e Desvios",
      "Orçamentação e Forecasting",
      "Balanced Scorecard",
      "Reporting Gerencial Avançado"
    ],
    benefits: [
      "Decisões baseadas em dados",
      "Visibilidade total do negócio",
      "Antecipação de problemas",
      "Melhoria contínua"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  rh: {
    icon: Users,
    title: "Recursos Humanos",
    description: "Gestão completa de RH e desenvolvimento organizacional",
    color: "from-[#4c87b4] to-[#4c87b4]",
    longDescription: "Potencialize o seu capital humano com soluções completas de gestão de recursos humanos, desde recrutamento até desenvolvimento de talentos.",
    features: [
      "Recrutamento e Seleção",
      "Gestão de Performance",
      "Formação e Desenvolvimento",
      "Gestão de Talentos",
      "Processamento Salarial",
      "Consultoria em Legislação Laboral"
    ],
    benefits: [
      "Equipa de alto desempenho",
      "Retenção de talentos",
      "Cultura organizacional forte",
      "Conformidade laboral"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  administrativos: {
    icon: Briefcase,
    title: "Serviços Administrativos",
    description: "Suporte administrativo profissional e eficiente",
    color: "from-[#4c87b4] to-[#4c87b4]",
    longDescription: "Liberte-se das tarefas administrativas e foque no core business. Oferecemos suporte administrativo completo e profissional.",
    features: [
      "Gestão Documental e Arquivo",
      "Secretariado Executivo",
      "Apoio Operacional",
      "Gestão de Correspondência",
      "Organização de Eventos",
      "Suporte Administrativo Geral"
    ],
    benefits: [
      "Foco no negócio principal",
      "Redução de custos fixos",
      "Profissionalismo garantido",
      "Flexibilidade operacional"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  },
  faturacao: {
    icon: Receipt,
    title: "Faturação",
    description: "Sistemas de faturação modernos e conformes",
    color: "from-[#4c87b4] to-[#4c87b4]",
    longDescription: "Modernize o seu processo de faturação com sistemas conformes e eficientes, garantindo compliance total com a legislação moçambicana.",
    features: [
      "Faturação Eletrónica",
      "Integração com SAF-T (AO)",
      "Gestão de Cobranças",
      "Emissão de Documentos Fiscais",
      "Controlo de Crédito",
      "Relatórios de Vendas e Faturação"
    ],
    benefits: [
      "Conformidade fiscal garantida",
      "Processos automatizados",
      "Redução de erros",
      "Melhor cash flow"
    ],
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80"
  },
  consultoria_financeira: {   
    icon: TrendingUp,
    title: "Consultoria Financeira",
    description: "Estratégias financeiras personalizadas para empresas",
    color: "from-[#5290c2] to-[#5290c2]",
    longDescription: "Oferecemos consultoria financeira para ajudar empresas a otimizar recursos, planeamento e investimentos, garantindo decisões estratégicas e seguras.",
    features: [
      "Planeamento Financeiro Estratégico",
      "Gestão de Riscos e Investimentos",
      "Análise de Fluxo de Caixa",
      "Avaliação de Viabilidade de Projetos",
      "Consultoria em Captação de Recursos",
      "Relatórios Financeiros Detalhados"
    ],
    benefits: [
      "Melhor tomada de decisões financeiras",
      "Redução de riscos",
      "Otimização de recursos",
      "Resultados mensuráveis"
    ],
    image: "https://images.unsplash.com/photo-1565372915601-5a36c02f9e8c?w=800&q=80"
  }
};


export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceId ? servicesData[serviceId] : null;

  // Scroll to top when component mounts or serviceId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Serviço não encontrado</h1>
          <Button onClick={() => navigate("/")} className="bg-gradient-to-r from-[#4c87b4] to-[#4c87b4]">
            Voltar ao Início
          </Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="text-white hover:bg-white/10 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>

            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 mb-8">
              <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-6xl font-black text-white mb-2">
                  {service.title}
                </h1>
                <p className="text-lg lg:text-xl text-slate-300">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center lg:text-left">Sobre o Serviço</h2>
                <p className="text-base lg:text-lg text-slate-400 leading-relaxed text-center lg:text-left">
                  {service.longDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center lg:text-left">O Que Oferecemos</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature: string, i: number) => (
                    <Card key={i} className="bg-slate-900/50 border-slate-800 p-4 flex items-center gap-3">
                      <div className={`w-6 h-6 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-slate-300 text-sm lg:text-base">{feature}</span>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center lg:text-left">Benefícios</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit: string, i: number) => (
                    <Card key={i} className="flex items-center gap-4 bg-slate-900/50 border-slate-800 p-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Check className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-base lg:text-lg text-slate-300">{benefit}</span>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-[#4c87b4] to-[#4c87b4] border-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Interessado?</h3>
                <p className="mb-6 text-white/90">
                  Entre em contato connosco para saber mais sobre como podemos ajudar o seu negócio.
                </p>
                <Button
                  onClick={() => navigate("/#contact")}
                  className="w-full bg-white text-[#4c87b4] hover:bg-slate-100 font-semibold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </Button>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Outros Serviços</h3>
                <div className="space-y-3">
                  {Object.entries(servicesData)
                    .filter(([id]) => id !== serviceId)
                    .slice(0, 4)
                    .map(([id, s]) => {
                      const ServiceIcon = s.icon;
                      return (
                        <button
                          key={id}
                          onClick={() => navigate(`/service/${id}`)}
                          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors text-left"
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <ServiceIcon className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-slate-300 font-medium">{s.title}</span>
                        </button>
                      );
                    })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}