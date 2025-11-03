import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e2d3d] text-white border-t-4 border-[#4c87b4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-3xl font-black tracking-tighter">
                <span className="text-[#4c87b4]">H</span>
                <span className="text-white">orizon</span>
              </h3>
              <div className="h-1 w-16 bg-[#4c87b4] mt-2 rounded-full" />
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Excelência em consultoria estratégica para impulsionar o seu negócio.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-[#4c87b4]/20 hover:bg-[#4c87b4] rounded-xl flex items-center justify-center transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#4c87b4]/20 hover:bg-[#4c87b4] rounded-xl flex items-center justify-center transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#4c87b4]/20 hover:bg-[#4c87b4] rounded-xl flex items-center justify-center transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#4c87b4]">Serviços</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#services" className="hover:text-[#4c87b4] transition-colors">Contabilidade</a></li>
              <li><a href="#services" className="hover:text-[#4c87b4] transition-colors">Fiscalidade</a></li>
              <li><a href="#services" className="hover:text-[#4c87b4] transition-colors">Auditoria</a></li>
              <li><a href="#services" className="hover:text-[#4c87b4] transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#4c87b4]">Links Rápidos</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#about" className="hover:text-[#4c87b4] transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-[#4c87b4] transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-[#4c87b4] transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-[#4c87b4] transition-colors">Carreiras</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#4c87b4]">Contato</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#4c87b4] flex-shrink-0 mt-0.5" />
                <span>Av. Julius Nyerere, 1234<br />Maputo, Moçambique</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#4c87b4] flex-shrink-0" />
                <span>+258 84 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#4c87b4] flex-shrink-0" />
                <span>info@horizonglobal.co.mz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#4c87b4] py-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Horizon Global Consulting. Todos os direitos reservados.</p>
      </div>


      
    </footer>
  );
}
