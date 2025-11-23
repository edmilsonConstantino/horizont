import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Shield, Target, Users2, TrendingUp } from "lucide-react";

const stats = [
	{ icon: Shield, value: "100%", label: "Compromisso" },
	{ icon: Target, value: "70+", label: "Projetos" },
	{ icon: Users2, value: "15+", label: "Clientes" },
	{ icon: TrendingUp, value: "3+", label: "Anos" }
];

export default function About() {
	return (
		<section id="about" className="py-16 lg:py-24 bg-slate-900">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-4xl sm:text-5xl font-black text-white mb-6 text-center lg:text-left">
							Sobre{" "}
							<span className="bg-gradient-to-r from-[#5290c2] to-[#4c87b4] bg-clip-text text-transparent">
								Nós
							</span>
						</h2>
						<p className="text-lg sm:text-xl text-slate-300 mb-6 leading-relaxed text-center lg:text-left">
							A{" "}
							<span className="font-semibold text-[#4c87b4]">
								Horizon Global Consulting, Lda.
							</span>{" "}
							é uma empresa moçambicana especializada em assessoria e consultoria empresarial, 
							oferecendo soluções estratégicas para impulsionar o crescimento e a eficiência 
							das organizações.
						</p>
						<p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed text-center lg:text-left">
							Desde a sua fundação, a empresa tem se destacado na prestação de serviços em 
							contabilidade, fiscalidade, auditoria, consultoria de gestão empresarial, controlo 
							de gestão, gestão de recursos humanos, serviços administrativos e faturação.
						</p>

						{/* Stats Grid */}
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
							{stats.map((stat, index) => {
								const Icon = stat.icon;
								return (
									<motion.div
										key={stat.label}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1, duration: 0.5 }}
									>
										<Card className="p-4 text-center bg-slate-800/50 backdrop-blur border-slate-700 hover:border-[#4c87b4]/50 hover:shadow-lg hover:shadow-[#4c87b4]/20 transition-all">
											<Icon className="h-8 w-8 text-[#4c87b4] mx-auto mb-2" />
											<div className="text-2xl font-bold text-white mb-1">
												{stat.value}
											</div>
											<div className="text-sm text-slate-400">
												{stat.label}
											</div>
										</Card>
									</motion.div>
								);
							})}
						</div>
					</motion.div>

					{/* Right Content - Values */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6"
					>
						{/* Card Missão */}
						<Card className="p-8 bg-[#4c87b4]/20 border border-[#4c87b4]/40 rounded-2xl shadow-md backdrop-blur-sm transition-all hover:bg-[#4c87b4]/30">
							<h3 className="text-2xl font-bold text-white mb-4">
								Nossa Missão
							</h3>
							<p className="text-slate-100 leading-relaxed">
								Fornecer soluções estratégicas e inovadoras em gestão empresarial, 
								ajudando organizações a alcançarem eficiência, conformidade e crescimento 
								sustentável. Através de serviços de consultoria, contabilidade, fiscalidade, 
								auditoria e gestão empresarial, buscamos otimizar processos, fortalecer a 
								tomada de decisões e impulsionar o sucesso dos nossos clientes.
							</p>
						</Card>

						{/* Card Visão */}
						<Card className="p-8 bg-[#4c87b4]/20 border border-[#4c87b4]/40 rounded-2xl shadow-md backdrop-blur-sm transition-all hover:bg-[#4c87b4]/30">
							<h3 className="text-2xl font-bold text-white mb-4">
								Nossa Visão
							</h3>
							<p className="text-slate-100 leading-relaxed">
								Ser reconhecida como referência em consultoria e gestão empresarial em 
								Moçambique e internacionalmente, impulsionando a transformação digital e 
								a eficiência organizacional por meio de soluções inovadoras e estratégicas.
							</p>
						</Card>

					</motion.div>
				</div>
			</div>
		</section>
	);
}