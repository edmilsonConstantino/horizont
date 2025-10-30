import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-brand-900 to-slate-950 text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-3xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 bg-clip-text text-transparent">
                  H
                </span>
                <span className="text-white">orizon</span>
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-brand-500 to-brand-600 mt-2 rounded-full" />
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Excelência em consultoria estratégica para impulsionar o seu negócio.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-brand-500 hover:to-brand-600 rounded-xl flex items-center justify-center transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-brand-500 hover:to-brand-600 rounded-xl flex items-center justify-center transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-brand-500 hover:to-brand-600 rounded-xl flex items-center justify-center transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Contabilidade</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Fiscalidade</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Auditoria</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Carreiras</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>Av. Julius Nyerere, 1234<br />Maputo, Moçambique</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <span>+258 84 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <span>info@horizonglobal.co.mz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Horizon Global Consulting. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}