import { motion } from "framer-motion";
import { Rocket, Award, Lightbulb, Eye } from "lucide-react";

const milestones = [
	{
		icon: Rocket,
		title: "Fundação",
		description:
			"Início da nossa jornada com foco em excelência e inovação em consultoria empresarial",
	},
	{
		icon: Award,
		title: "Excelência",
		description:
			"Reconhecimento pela qualidade dos nossos serviços e compromisso com resultados",
	},
	{
		icon: Lightbulb,
		title: "Inovação",
		description:
			"Implementação de soluções tecnológicas avançadas para otimizar processos",
	},
	{
		icon: Eye,
		title: "Visão",
		description:
			"Expansão contínua e liderança no mercado de consultoria em Moçambique",
	},
];

export default function Timeline() {
	return (
		<section className="py-24 bg-slate-950 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
						backgroundSize: "40px 40px",
					}}
				/>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-20"
				>
					<h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
						Nossa{" "}
						<span className="bg-gradient-to-r from-[#0077C8] to-[#0077C8] bg-clip-text text-transparent">
							História
						</span>
					</h2>
					<p className="text-xl text-slate-400 max-w-2xl mx-auto">
						Uma trajetória marcada por conquistas e compromisso com a excelência
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline Line */}
					<div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#4c87b4] via-[#4c87b4] to-[#4c87b4]" />

					<div className="space-y-16">
						{milestones.map((milestone, index) => {
							const Icon = milestone.icon;
							const isEven = index % 2 === 0;

							return (
								<motion.div
									key={milestone.title}
									initial={{ opacity: 0, x: isEven ? -50 : 50 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2, duration: 0.6 }}
									className={`flex flex-col lg:flex-row items-center gap-8 ${
										isEven ? "lg:flex-row" : "lg:flex-row-reverse"
									}`}
								>
									{/* Content */}
									<div
										className={`flex-1 ${
											isEven ? "lg:text-right" : "lg:text-left"
										} text-center lg:text-inherit`}
									>
										<motion.div
											whileHover={{ scale: 1.05 }}
											className="inline-block"
										>
											<h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
												{milestone.title}
											</h3>
											<p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
												{milestone.description}
											</p>
										</motion.div>
									</div>

									{/* Icon */}
									<motion.div
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ type: "spring", stiffness: 300 }}
										className="relative z-10"
									>
										<div className="w-20 h-20 bg-gradient-to-br from-[#4c87b4] to-[#4c87b4] rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-950">
											<Icon className="h-10 w-10 text-white" />
										</div>
									</motion.div>

									{/* Spacer for alignment */}
									<div className="flex-1 hidden lg:block" />
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}