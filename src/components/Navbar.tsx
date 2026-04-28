import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MapPin, Mail, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  {
    name: "Identidad",
    children: [
      { name: "Sobre Nosotros", href: "/identidad/sobre-nosotros" },
      { name: "Nuestra Trayectoria", href: "/identidad/trayectoria" },
    ],
  },
  {
    name: "Servicios",
    children: [
      { name: "Mantenimiento Preventivo", href: "/servicios/mantenimiento" },
      { name: "Reparaciones Técnicas", href: "/servicios/reparaciones" },
      { name: "Análisis y Pruebas", href: "/servicios/pruebas" },
      { name: "Sistemas de Potencia", href: "/servicios/potencia" },
      { name: "Consultoría Técnica", href: "/servicios/consultoria" },
    ],
  },
  { name: "Calidad y Cumplimiento", href: "/calidad" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4 text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative group">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm border border-slate-100 overflow-hidden p-1">
                  <img src="/descarga.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className={cn("font-bold text-lg tracking-tight", !scrolled ? "text-white" : "text-brand-black")}>
                  ELECTRO SERVICIOS
                </span>
                <span className="text-brand-blue text-[10px] font-black tracking-[0.2em] uppercase">
                  Quisqueya
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div className={cn(
                    "flex items-center gap-1 cursor-pointer py-2 font-medium transition-colors",
                    scrolled ? "text-slate-700 hover:text-brand-blue" : "text-white hover:text-brand-red"
                  )}>
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 mt-1" />
                    
                    <div className="absolute left-0 mt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50 pt-2">
                      <div className="bg-white rounded-md shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue border-l-4 border-transparent hover:border-brand-red transition-all font-bold"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "py-2 font-medium transition-colors",
                      scrolled 
                        ? (location.pathname === item.href ? "text-brand-blue font-bold" : "text-slate-700 hover:text-brand-blue")
                        : (location.pathname === item.href ? "text-brand-red font-bold" : "text-white hover:text-brand-red")
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contacto"
              className="bg-brand-red text-white px-5 py-2.5 rounded-md font-black text-sm tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 active:scale-95 uppercase"
            >
              COTIZAR
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn("p-2 rounded-md", !scrolled && "text-white")}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-base font-bold text-slate-400 uppercase tracking-wider">
                        {item.name}
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-6 py-2.5 text-slate-700 hover:bg-slate-50 font-medium"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 text-slate-900 font-bold border-b border-slate-50"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-navy text-white py-3 rounded-md font-bold"
                >
                  COTIZAR AHORA
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
