import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, MessageCircle, Phone, Menu, X, Bell } from "lucide-react";
import { useState, useEffect } from "react";
import hero from '@/hero.jpg';
import contabilidade from '@/Contabilidade.png';

const slides = [
	{
		title: "Consultoria de Excelência",
		subtitle: "Soluções estratégicas para o seu negócio",
		image: "/public/Contabilidade.png", 
	},
	{
		title: "Inovação & Crescimento",
		subtitle: "Transforme desafios em oportunidades",
		image:"/hero.jpg",
	},
	{
		title: "Resultados Comprovados",
		subtitle: "Parceiro estratégico do seu sucesso",
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
	},
];

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [showChatbot, setShowChatbot] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [hasNotification, setHasNotification] = useState(true);
	const [showDropdown, setShowDropdown] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const scrollToContact = () => {
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="relative min-h-screen bg-gradient-to-br from-[#1a202c] via-[#2d3748] to-[#1a202c] overflow-hidden">

			{}
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: [1, 1.08, 1] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				className="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-bl from-yellow-200/30 via-white/25 to-orange-300/20 rounded-full blur-3xl pointer-events-none"
			/>

			<motion.button
				onClick={() => setShowMobileMenu(!showMobileMenu)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="lg:hidden fixed top-6 left-6 z-50 w-16 h-16 bg-gradient-to-br from-[#4c87b4] to-[#4c87b4] rounded-full shadow-2xl shadow-[0_10px_30px_rgba(76,135,180,0.3)] flex items-center justify-center group overflow-hidden"
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
									opacity: [0.7, 1, 0.7],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
							/>
						</div>
					)}
				</motion.div>

				<motion.div
					animate={{
						rotate: [0, 360],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "linear",
					}}
					className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"
				/>
			</motion.button>

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
							className="w-80 h-full bg-gradient-to-br from-slate-900 via-[#4c87b4]/30 to-slate-900 p-8 shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							<motion.div
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ delay: 0.2 }}
								className="mb-12 mt-16"
							>
								<h1 className="text-4xl font-black tracking-tighter">
									<span className="bg-gradient-to-r from-[#4c87b4] via-[#4c87b4] to-[#4c87b4] bg-clip-text text-transparent">
										H
									</span>
									<span className="text-white">orizon</span>
								</h1>
								<div className="h-1 w-20 bg-gradient-to-r from-[#4c87b4] to-[#4c87b4] mt-2 rounded-full" />
								<p className="text-slate-400 text-sm mt-2 font-light">
									Global Consulting
								</p>
							</motion.div>

				<nav className="space-y-3">
	{[
		{ label: "Início", icon: "🏠", href: "#" },
		{ label: "Serviços", icon: "💼", href: "#services" },
		{ label: "Sobre", icon: "ℹ️", href: "#about" },
		{ label: "Contato", icon: "📧", href: "#contact" },
	].map((item, i) => (
		<motion.a
			key={item.label}
			href={item.href}
			onClick={() => setShowMobileMenu(false)}
			initial={{ x: -50, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ delay: 0.3 + i * 0.1 }}
			className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-[#4c87b4]/20 hover:border-[#4c87b4]/50 transition-all group cursor-pointer"
		>
			<motion.span
				whileHover={{ scale: 1.2, rotate: 10 }}
				className="text-xl"
			>
				{item.icon}
			</motion.span>
			<span className="text-white font-medium text-sm group-hover:text-brand-300 transition-colors">
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

			<div className="flex flex-col lg:flex-row min-h-screen">
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="hidden lg:flex lg:w-80 bg-gradient-to-br from-slate-900/90 via-brand-800/20 to-slate-900/90 backdrop-blur-xl p-8 flex-col border-r border-brand-400/20"
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						className="mb-12"
					>
						<div className="relative">
							<h1 className="text-5xl font-black tracking-tighter">
								<span className="bg-gradient-to-r from-[#4c87b4] via-[#4c87b4] to-[#4c87b4] bg-clip-text text-transparent">
									H
								</span>
								<span className="text-white">orizon</span>
							</h1>
							<motion.div
								initial={{ width: 0 }}
								animate={{ width: 80 }}
								transition={{ delay: 0.8, duration: 0.8 }}
								className="h-1 bg-gradient-to-r from-[#4c87b4] to-[#4c87b4] mt-2 rounded-full"
							/>
							<p className="text-slate-400 text-sm mt-2 font-light">
								Global Consulting
							</p>
						</div>
					</motion.div>

					<nav className="space-y-3 flex-1">
						{[
							{ label: "Início", icon: "🏠" },
							{ label: "Serviços", icon: "💼", href: "#services" },
							{ label: "Sobre", icon: "ℹ️", href: "#about" },
							{ label: "Contato", icon: "📧", href: "#contact" },
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

					<div className="flex gap-3 mt-8">
						{slides.map((_, i) => (
							<motion.button
								key={i}
								onClick={() => setCurrentSlide(i)}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
								className={`h-2 rounded-full transition-all duration-300 ${
									i === currentSlide
										? "w-8 bg-brand-400 shadow-lg shadow-brand-400/50"
										: "w-2 bg-slate-600 hover:bg-slate-500"
								}`}
							/>
						))}
					</div>
				</motion.div>

				<div className="flex-1 relative">
					{/* Desktop: animação completa do slide */}
					<AnimatePresence mode="wait">
						<motion.div
							key={currentSlide}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.7 }}
							className="absolute inset-0 hidden lg:block"
						>
							{/* Fundo branco profissional */}
							<div className="absolute inset-0 bg-white" />
							
							<div
								className="absolute inset-0 bg-cover bg-center"
								style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
							>
								{/* Gradiente antes da imagem */}
								<div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/0 via-[#2c5282]/70 to-transparent" />
								
								{/* Camada leve sobre a imagem (opcional) */}
								<div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/60 via-[#2c5282]/40 to-[#1e3a5f]/60" />
							</div>

							<div className="relative h-full flex items-center justify-center p-12">
								<div className="max-w-4xl text-left">
									<motion.div
										initial={{ y: 30, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.3 }}
									>
										<span className="inline-block px-6 py-3 bg-brand-400/20 border border-brand-400/30 rounded-full text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
											Excelência em Consultoria
										</span>
									</motion.div>

									<AnimatePresence mode="wait">
										<motion.h2
											key={`title-${currentSlide}`}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.5 }}
											className="text-7xl font-black text-white mb-6 leading-tight"
										>
											{slides[currentSlide].title}
										</motion.h2>
									</AnimatePresence>

									<AnimatePresence mode="wait">
										<motion.p
											key={`subtitle-${currentSlide}`}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.5, delay: 0.1 }}
											className="text-2xl text-slate-300 mb-10 leading-relaxed"
										>
											{slides[currentSlide].subtitle}
										</motion.p>
									</AnimatePresence>

									<motion.div
										initial={{ y: 30, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.6 }}
										className="flex gap-4"
									>
										<Button
											size="lg"
											onClick={scrollToContact}
											className="bg-gradient-to-r from-[#4c87b4] to-[#4c87b4] hover:from-[#3a6d94] hover:to-[#3a6d94] text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-[0_10px_30px_rgba(76,135,180,0.5)] transition-all duration-300 group"
										>
											Começar Agora
											<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
										</Button>
										<Button
											size="lg"
											variant="outline"
											onClick={() =>
												document.getElementById("services")?.scrollIntoView({
													behavior: "smooth",
												})
											}
											className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4c87b4] px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-colors"
										>
											Explorar Serviços
										</Button>
									</motion.div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Mobile: carrossel com animação igual ao desktop */}
					<AnimatePresence mode="wait">
						<motion.div
							key={`mobile-${currentSlide}`}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.7 }}
							className="absolute inset-0 lg:hidden"
						>
							<div
	className="absolute inset-0 bg-cover bg-center"
	style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
>
	{/* Gradiente azul cobrindo toda a tela - em cima, meio e embaixo */}
	<div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/90 via-[#2c5282]/70 to-[#1e3a5f]/90" />
</div>

							<div className="relative h-full flex items-center justify-center p-6 pt-28 pb-32">
								<div className="max-w-4xl text-center">
									<motion.div
										initial={{ y: 30, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.3 }}
									>
										<span className="inline-block px-6 py-3 bg-brand-400/20 border border-brand-400/30 rounded-full text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
											Excelência em Consultoria
										</span>
									</motion.div>

									<AnimatePresence mode="wait">
										<motion.h2
											key={`title-mobile-${currentSlide}`}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.5 }}
											className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight"
										>
											{slides[currentSlide].title}
										</motion.h2>
									</AnimatePresence>

									<AnimatePresence mode="wait">
										<motion.p
											key={`subtitle-mobile-${currentSlide}`}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.5, delay: 0.1 }}
											className="text-xl text-slate-300 mb-10 leading-relaxed"
										>
											{slides[currentSlide].subtitle}
										</motion.p>
									</AnimatePresence>

									<motion.div
										initial={{ y: 30, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.6 }}
										className="flex flex-col sm:flex-row gap-4 justify-center"
									>
										<Button
											size="lg"
											onClick={scrollToContact}
											className="bg-gradient-to-r from-[#4c87b4] to-[#4c87b4] hover:from-[#3a6d94] hover:to-[#3a6d94] text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-[0_10px_30px_rgba(76,135,180,0.5)] transition-all duration-300 group"
										>
											Começar Agora
											<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
										</Button>
										<Button
											size="lg"
											variant="outline"
											onClick={() =>
												document.getElementById("services")?.scrollIntoView({
													behavior: "smooth",
												})
											}
											className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4c87b4] px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-colors"
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

			<div className="fixed bottom-20 right-6 z-50 lg:bottom-6">
				<div className="relative flex items-center gap-3">
					<AnimatePresence>
						{showDropdown && (
							<>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									onClick={() => setShowDropdown(false)}
									className="fixed inset-0 -z-10"
								/>

								<motion.a
									href="https://wa.me/258860195511"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => {
										setShowDropdown(false);
										setHasNotification(false);
									}}
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0, opacity: 0 }}
									transition={{ delay: 0.1, type: "spring", damping: 15 }}
									whileHover={{ scale: 1.15, y: -5 }}
									whileTap={{ scale: 0.95 }}
									className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/50 transition-all"
								>
									<Phone className="h-6 w-6 text-white" />

									<motion.div
										initial={{ opacity: 0, y: 5 }}
										whileHover={{ opacity: 1, y: 0 }}
										className="absolute bottom-full mb-3 px-4 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-lg pointer-events-none"
									>
										WhatsApp
										<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900/95" />
									</motion.div>

									<motion.div
										animate={{
											scale: [1, 1.3, 1],
											opacity: [0.5, 0, 0.5],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut",
										}}
										className="absolute inset-0 bg-green-400 rounded-full"
									/>
								</motion.a>

								<motion.button
	onClick={() => {
		setShowDropdown(false);
		setShowChatbot(true);
		setHasNotification(false);
	}}
	initial={{ scale: 0, opacity: 0 }}
	animate={{ scale: 1, opacity: 1 }}
	exit={{ scale: 0, opacity: 0 }}
	transition={{ delay: 0.15, type: "spring", damping: 15 }}
	whileHover={{ scale: 1.15, y: -5 }}
	whileTap={{ scale: 0.95 }}
	className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-purple-500/50 transition-all"
>
	{/* Adicione este texto acima do botão rosa */}
	<div className="absolute -top-7 left-1/2 -translate-x-1/2 text-white text-xs font-bold whitespace-nowrap">
		Chat
	</div>

	<div className="relative w-8 h-8">
		<div className="absolute inset-0 bg-white rounded-lg"></div>
		<div className="absolute top-1 left-1 right-1 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md h-3"></div>
		<div className="absolute top-1.5 left-2 w-1 h-1 bg-white rounded-full"></div>
		<div className="absolute top-1.5 right-2 w-1 h-1 bg-white rounded-full"></div>
		<div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-1 bg-gray-800 rounded-full"></div>
		<div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-yellow-400 rounded-t-full"></div>
	</div>

	<motion.div
		initial={{ opacity: 0, y: 5 }}
		whileHover={{ opacity: 1, y: 0 }}
		className="absolute bottom-full mb-3 px-4 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-lg pointer-events-none"
	>
		Chat IA 🤖
		<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900/95" />
	</motion.div>

	<motion.div
		animate={{
			scale: [1, 1.3, 1],
			opacity: [0.5, 0, 0.5],
		}}
		transition={{
			duration: 2,
			repeat: Infinity,
			ease: "easeInOut",
			delay: 0.5,
		}}
		className="absolute inset-0 bg-purple-400 rounded-full"
	/>
</motion.button>
							</>
						)}
					</AnimatePresence>

					<motion.button
						onClick={() => setShowDropdown(!showDropdown)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						animate={{
							y: [0, -8, 0],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="relative w-16 h-16 bg-gradient-to-br from-[#4c87b4] to-[#3a6d94] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_10px_30px_rgba(76,135,180,0.5)] transition-all overflow-hidden"
					>
						<MessageCircle className="h-7 w-7 text-white" />

						<motion.div
							animate={{
								rotate: [0, 360],
								scale: [1, 1.1, 1],
							}}
							transition={{
								duration: 8,
								repeat: Infinity,
								ease: "linear",
							}}
							className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"
						/>

						{hasNotification && (
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
							>
								<Bell className="h-3 w-3 text-white" />
							</motion.div>
						)}
					</motion.button>
				</div>
			</div>

			<AnimatePresence>
				{showChatbot && (
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.9 }}
						className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden border border-brand-200/50"
					>
						<div className="bg-gradient-to-r from-[#4c87b4] to-[#4c87b4] p-4 flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="relative">
									<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
										<MessageCircle className="h-5 w-5 text-white" />
									</div>
									<motion.div
										animate={{ scale: [1, 1.2, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
										className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#4c87b4] rounded-full border-2 border-white"
									/>
								</div>
								<div>
									<h3 className="text-white font-bold">Assistente Virtual</h3>
									<p className="text-white/80 text-xs">
										Online agora • IA Especializada
									</p>
								</div>
							</div>

							<div className="flex items-center gap-2">
								<motion.a
									href="https://wa.me/258860195511"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									className="relative w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-all overflow-hidden"
								>
									<Phone className="h-5 w-5 text-white relative z-10" />
									<motion.div
										animate={{
											scale: [1, 1.3, 1],
											opacity: [0.5, 0, 0.5],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut",
										}}
										className="absolute inset-0 bg-green-400 rounded-full"
									/>
								</motion.a>
								<button
									onClick={() => setShowChatbot(false)}
									className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
								>
									<X className="h-4 w-4" />
								</button>
							</div>
						</div>

						<div className="p-4 h-80 bg-gradient-to-b from-slate-50 to-brand-50/30 overflow-y-auto">
							<motion.div
								initial={{ y: 10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								className="bg-white p-4 rounded-2xl shadow-sm mb-3 border border-[#4c87b4]/10"
							>
								<div className="flex items-start gap-2">
									<div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
										<span className="text-white text-xs">🤖</span>
									</div>
									<div>
										<p className="text-slate-700 text-sm leading-relaxed">
											Olá! 👋 Sou o assistente virtual da Horizon. Como posso ajudar você hoje?
										</p>
									</div>
								</div>
							</motion.div>

							<div className="flex gap-2 flex-wrap">
								{[
									"💼 Nossos Serviços",
									"📞 Falar com Consultor",
									"💰 Solicitar Orçamento",
									"📋 Agendar Reunião",
								].map((option, i) => (
									<motion.button
										key={option}
										initial={{ y: 10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.1 * i }}
										className="px-4 py-2 bg-[#4c87b4]/10 text-[#4c87b4] rounded-full text-sm hover:bg-[#4c87b4]/20 transition-colors font-medium"
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