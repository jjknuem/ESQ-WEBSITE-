import { motion } from "motion/react";
import { ShieldCheck, Award, BookOpen, CheckCircle2, ChevronRight, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

export default function Quality() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-brand-black py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-brand-blue" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-red font-black text-sm tracking-widest uppercase mb-4 block">Compromiso Inquebrantable</span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tighter">CALIDAD Y CUMPLIMIENTO</h1>
            <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
              Operamos bajo estándares internacionales para garantizar la seguridad de su industria. <br />
              <span className="text-brand-blue font-black italic">¡Servicios con Energía!</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ISO Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl border border-blue-100">
                <ShieldCheck className="w-10 h-10 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-black text-brand-black tracking-tight uppercase">ISO 9001:2015</h2>
            </div>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Cada motor reparado y cada sistema analizado sigue un protocolo estricto de trazabilidad bajo el sistema de gestión de calidad más reconocido a nivel global.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Estandarización de procesos de bobinado de precisión.",
                "Trazabilidad completa de materiales con certificación de origen.",
                "Protocolos de seguridad ocupacional y ambiental.",
                "Auditorías internas de mejora técnica continua.",
                "Miembro activo de EASA (Electrical Apparatus Service Association)."
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-3 bg-white rounded-lg border border-slate-50">
                  <CheckCircle2 className="w-5 h-5 text-brand-red mt-1 shrink-0" />
                  <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
              <div className="aspect-[4/3] bg-slate-100 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-200">
                <img src="/EASA FOTO.jpg" alt="Miembro Activo EASA - Calidad y Cumplimiento" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IEEE Section */}
      <section className="bg-brand-black py-24 text-white relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-red" />
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-display tracking-tight uppercase">Estándares <span className="text-brand-blue">IEEE</span></h2>
            <p className="text-slate-400 text-lg font-medium">
              Aplicamos los códigos técnicos internacionales más rigurosos para hablar el lenguaje universal de la ingeniería eléctrica de alto rendimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Capacitación Técnica",
                desc: "Capacitación continua para todo nuestro personal operativo en normas IEEE de mantenimiento.",
                color: "text-brand-blue"
              },
              {
                icon: Award,
                title: "Precisión Total",
                desc: "Equipos de medición calibrados periódicamente para cumplir con los rangos de tolerancia IEEE.",
                color: "text-brand-red"
              },
              {
                icon: FileCheck,
                title: "Reportes Homologados",
                desc: "Documentación técnica detallada lista para auditorías de seguros y mantenimiento industrial.",
                color: "text-white"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl group hover:border-brand-blue/50 transition-all">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg mb-6 group-hover:bg-brand-black transition-colors">
                  <item.icon className={cn("w-6 h-6", item.color)} />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-container text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-12 max-w-4xl mx-auto border-b-8 border-brand-red shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 font-display tracking-tight uppercase">Proteja su Inversión</h3>
          <p className="text-slate-400 mb-8 font-medium">
            Contratar un socio certificado reduce el riesgo de fallas críticas y garantiza que su infraestructura eléctrica esté respaldada por la ciencia.
          </p>
          <Link to="/contacto" className="btn-accent mx-auto py-4 px-10 font-black tracking-widest">
            CONTACTAR <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
