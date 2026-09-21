import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Shield, Zap, Settings, Award, Cpu, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import Logo from "@/src/components/Logo";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/70 z-10" />
          <img
            src="/motor3-960x680.jpg"
            alt="Motor Industrial"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="section-container relative z-20 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-8">
              <div className="inline-block bg-white p-3 sm:p-4 rounded-2xl shadow-2xl border border-white/30 backdrop-blur-sm">
                <Logo className="h-20 sm:h-24 md:h-28 w-auto" />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-red text-white text-xs font-black tracking-widest uppercase mb-6 shadow-lg shadow-red-500/20">
              <Award className="w-4 h-4" /> Certificación ISO 9001:2015
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6 tracking-tighter">
              INGENIERÍA ELECTROMECÁNICA <br />
              <span className="text-brand-blue">CON PRECISIÓN</span> <br />
              Y EXPERIENCIA
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium">
              Especialistas en sistemas de potencia, motores y generadores. <br />
              <span className="text-brand-red italic font-black">¡Servicios con Energía!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto" className="btn-accent text-lg px-8 py-4 shadow-xl shadow-blue-500/20 uppercase font-black tracking-widest">
                SOLICITAR SERVICIO <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-md font-bold text-lg flex items-center gap-2 text-white">
                <Award className="w-6 h-6 text-brand-blue" /> MIEMBRO EASA
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-10 right-10 hidden xl:flex gap-6 z-20">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-lg text-center w-40">
            <Shield className="w-8 h-8 text-brand-blue mx-auto mb-3" />
            <p className="text-white text-[10px] font-bold tracking-widest uppercase">Garantía Técnica</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-lg text-center w-40">
            <Zap className="w-8 h-8 text-brand-red mx-auto mb-3" fill="currentColor" />
            <p className="text-white text-[10px] font-bold tracking-widest uppercase">Pura Energía</p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-blue font-black tracking-widest uppercase text-sm mb-2 block">— POR QUÉ ELEGIRNOS</span>
            <h2 className="text-4xl font-bold font-display text-brand-black mb-6 tracking-tight">Compromiso con la Continuidad Operativa</h2>
            <p className="text-slate-600 mb-8 leading-relaxed font-normal">
              Entendemos que el fallo de un motor o generador no es solo una avería técnica, es un paro en su productividad. Por eso, aplicamos rigurosamente normas <span className="font-bold text-brand-blue">IEEE</span> y protocolos <span className="font-bold text-brand-red">ISO 9001</span>.
            </p>
            <div className="space-y-4">
              {[
                { title: "Gestión de Calidad", desc: "Trazabilidad completa en cada bobinado y ajuste mecánico.", color: "text-brand-red" },
                { title: "Expertos Certificados", desc: "Ingenieros altamente capacitados en sistemas de potencia complejos.", color: "text-brand-blue" },
                { title: "Integridad Técnica", desc: "Repuestos originales y materiales de alta clase térmica.", color: "text-brand-black" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all">
                  <CheckCircle2 className={cn("w-6 h-6 shrink-0 mt-0.5", item.color)} />
                  <div>
                    <h4 className="font-black text-brand-black uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10 border-8 border-slate-50">
              <img
                src="/FAMILIA ESQ.jpg"
                alt="Familia y Equipo Electro Servicios Quisqueya"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-black p-8 rounded-2xl text-white shadow-2xl hidden md:block z-20 border-b-8 border-brand-red">
              <span className="text-5xl font-black text-brand-blue">20+</span>
              <p className="text-xs font-black tracking-widest uppercase mt-2">Años de Energía</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-brand-black py-24 text-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 blur-[120px] rounded-full" />
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-red font-black tracking-widest uppercase text-sm mb-2 block">SOLUCIONES INDUSTRIALES</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">Nuestros Servicios Especializados</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Settings, 
                title: "Mantenimiento Preventivo", 
                desc: "Planes de inspección técnica para evitar paros no programados.",
                href: "/servicios/mantenimiento",
                color: "text-brand-blue"
              },
              { 
                icon: Cpu, 
                title: "Reparación de Motores", 
                desc: "Bobinado completo y ajustes mecánicos de precisión.",
                href: "/servicios/reparaciones",
                color: "text-brand-red"
              },
              { 
                icon: Zap, 
                title: "Sistemas de Potencia", 
                desc: "Sincronización de plantas y transferencias automáticas.",
                href: "/servicios/potencia",
                color: "text-brand-blue"
              },
              { 
                icon: Shield, 
                title: "Análisis & Pruebas", 
                desc: "Pruebas dieléctricas y diagnósticos avanzados IEEE.",
                href: "/servicios/pruebas",
                color: "text-brand-red"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-brand-blue/50 transition-all group"
              >
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-lg mb-6 group-hover:bg-brand-black border border-slate-800 transition-colors">
                  <service.icon className={cn("w-7 h-7", service.color)} />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-brand-blue transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium">{service.desc}</p>
                <Link to={service.href} className="text-white font-black text-[10px] tracking-widest flex items-center gap-2 hover:text-brand-red transition-all">
                  DETALLES <ArrowRight className="w-4 h-4 text-brand-red" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Quality Section */}
      <section className="section-container">
        <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center group overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 -mr-16 -mt-16 rounded-full" />
          
          <div className="lg:w-1/3 text-center lg:text-left relative z-10">
            <h3 className="text-4xl font-bold text-brand-black mb-4 font-display tracking-tighter uppercase leading-none">Calidad <br /> <span className="text-brand-blue">Total</span></h3>
            <p className="text-slate-500 mb-6 font-medium">
              Garantizamos la seguridad de su inversión mediante procesos certificados internacionalmente.
            </p>
            <Link to="/calidad" className="btn-accent inline-flex items-center gap-2 font-black tracking-widest text-xs py-3">
              ESTÁNDARES IEEE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex items-start gap-4 hover:bg-white hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shrink-0 border border-slate-100">
                <Shield className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="font-black text-brand-black mb-2 uppercase tracking-tight">ISO 9001:2015</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">Trazabilidad absoluta en cada intervención técnica realizada.</p>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex items-start gap-4 hover:bg-white hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shrink-0 border border-slate-100">
                <Zap className="w-6 h-6 text-brand-blue" fill="currentColor" />
              </div>
              <div>
                <h4 className="font-black text-brand-black mb-2 uppercase tracking-tight">Normativa IEEE</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">Aplicación de los códigos de ingeniería más exigentes del mundo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-red -skew-x-12 translate-x-1/2 opacity-20" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-brand-black -skew-x-12 -translate-x-1/2 opacity-20" />
        
        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display tracking-tighter uppercase">¿Necesita soporte técnico especializado?</h2>
          <p className="text-white text-lg mb-10 max-w-2xl mx-auto font-medium opacity-90">
            Hable con uno de nuestros ingenieros hoy mismo y optimice el rendimiento de sus sistemas de energía. <br />
            <span className="font-black italic bg-brand-black/20 px-2 py-1 uppercase tracking-widest text-sm">¡Servicios con Energía!</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contacto" className="bg-white text-brand-blue px-10 py-4 rounded-md font-black text-xl shadow-2xl hover:bg-slate-100 transition-all uppercase tracking-widest">
              OBTENER COTIZACIÓN
            </Link>
            <a href="https://wa.me/18295966666" target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-10 py-4 rounded-md font-black text-xl hover:bg-red-700 transition-all uppercase tracking-widest border border-white/20">
              WHATSAPP DIRECTO
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
