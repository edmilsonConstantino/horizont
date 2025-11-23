import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const services = [
    "Contabilidade",
    "Consultoria Fiscal",
    "Consultoria Financeira",
    "Auditoria",
    "Consultoria de Gestão Empresarial",
    "Controlo de Gestão",
    "Recursos Humanos",
    "Serviços Administrativos",
    "Faturação",
    "Outro"
  ];

const handleSubmit = async (e: React.MouseEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.service || !formData.message) {
    toast({
      title: "Erro",
      description: "Por favor, preencha todos os campos obrigatórios.",
      variant: "destructive"
    });
    return;
  }

  try {
    const response = await fetch("https://horizon-backend-vmcy.onrender.com/api/mensagens/enviar/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
body: JSON.stringify({
  nome: formData.name,
  email: formData.email,
  telefone: formData.phone,
  servico: formData.service,
  mensagem: formData.message,
}),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar mensagem");
    }

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", phone: "", service: "", message: "" });

  } catch (error) {
    toast({
      title: "Erro ao enviar",
      description: "O servidor não conseguiu receber a mensagem.",
      variant: "destructive"
    });
  }
};


  return (
    <section id="contact" className="py-1 sm:py-6 lg:py-21 pb-16 sm:pb-24 lg:pb-32 bg-slate-900 overflow-x-hidden">
      <div className="container mx-auto px-1 sm:px- lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 px-4">
            Entre em{" "}
            <span className="bg-gradient-to-r from-[#5290c2] to-[#5290c2] bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            Estamos prontos para ajudar o seu negócio a crescer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 w-full">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full"
          >
            <Card className="p-5 sm:p-6 lg:p-8 bg-slate-800/50 backdrop-blur border-slate-700 shadow-2xl w-full">
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-300 text-sm sm:text-base">
                    Nome Completo 
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="mt-1.5 sm:mt-2 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 h-11 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300 text-sm sm:text-base">
                    Email 
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="mt-1.5 sm:mt-2 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 h-11 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-slate-300 text-sm sm:text-base">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+258 XX XXX XXXX"
                    className="mt-1.5 sm:mt-2 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 h-11 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-slate-300 text-sm sm:text-base">
                    Serviço de Interesse 
                  </Label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="mt-1.5 sm:mt-2 bg-slate-900/50 border-slate-700 text-white h-11 sm:h-12 text-sm sm:text-base">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700 max-h-60 sm:max-h-80">
                      {services.map((service) => (
                        <SelectItem 
                          key={service} 
                          value={service}
                          className="text-white hover:bg-slate-800 focus:bg-slate-800 text-sm sm:text-base py-2.5"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-100 text-sm sm:text-base">
                    Mensagem 
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Como podemos ajudar?"
                    rows={1}
                    className="mt-0.5 sm:mt-1 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 text-sm sm:text-base resize-none"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-[#5290c2] hover:bg-[#3d7aa5] text-white py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-[#5290c2]/50 transition-all"
                >
                  Enviar Mensagem
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6 relative z-10 w-full"
          >
            <Card className="p-5 sm:p-6 bg-slate-800/50 backdrop-blur border-slate-700 hover:border-[#5290c2]/50 hover:shadow-lg hover:shadow-[#5290c2]/20 transition-all w-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5290c2] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Localização</h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    Maputo, Moçambique<br />
                    Avenida Romão Fernandes Farinha, n.º 376
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-5 sm:p-7 bg-slate-800/50 backdrop-blur border-slate-700 hover:border-[#5290c2]/50 hover:shadow-lg hover:shadow-[#5290c2]/20 transition-all w-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5290c2] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Telefone</h3>
                  <p className="text-sm sm:text-base text-slate-400">
                    +258 86 019 5510
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-5 sm:p-10 bg-slate-800/50 backdrop-blur border-slate-700 hover:border-[#5290c2]/50 hover:shadow-lg hover:shadow-[#5290c2]/20 transition-all w-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5290c2] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Email</h3>
                  <p className="text-sm sm:text-base text-slate-400 break-all">
                    comercial@horizonconsulting.co.mz
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-5 sm:p-10 bg-slate-800 border-slate-700 w-full">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Redes Sociais</h3>
              <div className="flex gap-3 sm:gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#5290c2] rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#5290c2] rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#5290c2] rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors"
                >
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}