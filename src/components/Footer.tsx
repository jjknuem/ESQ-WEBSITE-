import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, ArrowRight, Zap } from "lucide-react";
import { LogoEmblem } from "@/src/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 border-t-4 border-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-12 w-auto bg-white flex items-center justify-center rounded-lg shadow-inner px-2 py-1 overflow-hidden transition-transform group-hover:scale-105">
                <LogoEmblem className="h-9 w-auto max-w-[130px] object-contain" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white">ELECTRO SERVICIOS</span>
                <span className="text-brand-blue text-[10px] font-black tracking-[0.2em] uppercase">Quisqueya S.R.L.</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Líderes en ingeniería eléctrica industrial en la República Dominicana. <br />
              <span className="text-brand-red font-black italic">¡Servicios con Energía!</span>
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/electroservicioquisqueya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-slate-700 flex items-center justify-center rounded-full hover:bg-brand-blue hover:border-brand-blue transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-slate-700 pb-2">
              Enlaces <span className="text-brand-blue">Rápidos</span>
            </h4>
            <ul className="space-y-4">
              <li><Link to="/identidad/trayectoria" className="text-slate-400 hover:text-brand-blue flex items-center gap-2 transition-colors"><ArrowRight className="w-3 h-3 text-brand-red" /> Nuestra Trayectoria</Link></li>
              <li><Link to="/servicios/mantenimiento" className="text-slate-400 hover:text-brand-blue flex items-center gap-2 transition-colors"><ArrowRight className="w-3 h-3 text-brand-red" /> Mantenimiento Preventivo</Link></li>
              <li><Link to="/servicios/potencia" className="text-slate-400 hover:text-brand-blue flex items-center gap-2 transition-colors"><ArrowRight className="w-3 h-3 text-brand-red" /> Sistemas de Potencia</Link></li>
              <li><Link to="/calidad" className="text-slate-400 hover:text-brand-blue flex items-center gap-2 transition-colors"><ArrowRight className="w-3 h-3 text-brand-red" /> Calidad & Cumplimiento</Link></li>
              <li><Link to="/contacto" className="text-slate-400 hover:text-brand-blue flex items-center gap-2 transition-colors"><ArrowRight className="w-3 h-3 text-brand-red" /> Solicitar Cotización</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-slate-700 pb-2">
              Contacto <span className="text-brand-blue">Directo</span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                <span className="text-slate-400 text-sm">Calle Francisco A. Camaño Deño 10, Santo Domingo Este 11905, R.D.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-slate-400 text-sm">+1 (829) 596-6666</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-slate-400 text-sm">info@electroserviciosquisqueya.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-slate-700 pb-2">
              Horario <span className="text-brand-blue">Laboral</span>
            </h4>
            <div className="space-y-3 bg-slate-900 border border-slate-800 p-4 rounded-lg">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Lun - Vie:</span>
                <span className="text-white font-medium">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between text-sm border-t border-slate-800 pt-2">
                <span className="text-slate-400">Sábados:</span>
                <span className="text-white font-medium">8:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between text-sm border-t border-slate-800 pt-2">
                <span className="text-slate-400">Emergencias:</span>
                <span className="text-brand-red font-bold italic tracking-wider">24/7 Soporte</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Electro Servicios Quisqueya S.R.L. Todos los derechos reservados. <br className="md:hidden" />
            Certificación ISO 9001:2015 | Estándares IEEE | <span className="text-brand-red font-bold italic">¡Servicios con Energía!</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
