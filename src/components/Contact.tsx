import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Entre em{" "}
            <span className="bg-gradient-to-r from-[#5290c2] to-[#5290c2] bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Estamos prontos para ajudar o seu negócio a crescer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-slate-800/50 backdrop-blur border-slate-700 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-300">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="mt-2 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="mt-2 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-slate-300">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+258 XX XXX XXXX"
                    className="mt-2 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-300">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    className="mt-2 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#5290c2] hover:bg-[#3d7aa5] text-white py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-[#5290c2]/50 transition-all"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 hover:border-[#5290c2]/50 hover:shadow-lg hover:shadow-[#5290c2]/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5290c2] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Localização</h3>
                  <p className="text-slate-400">
                    Maputo, Moçambique<br />
                    Av. Julius Nyerere, 1234
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 hover:border-[#5290c2]/50 hover:shadow-lg hover:shadow-[#5290c2]/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5290c2] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Telefone</h3>
                  <p className="text-slate-400">
                    +258 84 123 4567<br />
                    +258 87 765 4321
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 hover:border-[#5290c2]/50 hover:shadow-lg hover:shadow-[#5290c2]/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5290c2] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <p className="text-slate-400">
                    info@horizonglobal.co.mz<br />
                    contato@horizonglobal.co.mz
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800 border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-[#5290c2] rounded-2xl flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-[#5290c2] rounded-2xl flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-[#5290c2] rounded-2xl flex items-center justify-center transition-colors"
                >
                  <Twitter className="h-6 w-6 text-white" />
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
