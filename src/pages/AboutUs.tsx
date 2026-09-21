import { motion } from "motion/react";
import { Eye, Target, Heart, CheckCircle2, TrendingUp, Users, ShieldCheck, Award, Handshake, Shield, Sparkles } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function AboutUs() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="section-container !pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-brand-red font-black text-sm tracking-widest uppercase mb-4 block">Nuestro Propósito</span>
          <h1 className="text-5xl font-bold text-brand-black font-display mb-6 tracking-tighter uppercase">Sobre Nosotros</h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Comprometidos con la excelencia técnica y la solución estratégica para la industria dominicana. <br />
            <span className="text-brand-blue font-black italic">¡Servicios con Energía!</span>
          </p>
        </motion.div>
      </section>

      {/* Mission / Vision Cards */}
      <section className="section-container pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-50 p-10 rounded-3xl border-l-8 border-brand-blue relative group overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 -mr-12 -mt-12 rounded-full" />
            <Target className="w-12 h-12 text-brand-blue mb-8 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-black text-brand-black mb-4 font-display uppercase tracking-tight">Misión</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-bold">
              Brindar con los más altos estándares de calidad los Servicios de Reparación, Mantenimiento y consultoría de Motores y Generadores Eléctricos, en el sector industrial de la República Dominicana.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-brand-black p-10 rounded-3xl border-l-8 border-brand-red relative group overflow-hidden text-white shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 -mr-12 -mt-12 rounded-full" />
            <Eye className="w-12 h-12 text-brand-red mb-8 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-black mb-4 font-display uppercase tracking-tight">Visión</h2>
            <p className="text-slate-300 text-lg leading-relaxed font-bold">
              Ofrecer un alto nivel de calidad en nuestros servicios, que nos convierta en el aliado número uno a la solución de problemas de las máquinas eléctricas en el sector industrial de la República Dominicana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-brand-black py-24 text-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue" />
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4 tracking-tight uppercase">Valores <span className="text-brand-blue">Fundamentales</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">La brújula moral y técnica que guía cada una de nuestras intervenciones industriales.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { icon: ShieldCheck, title: "Responsabilidad", color: "text-brand-red" },
              { icon: Sparkles, title: "Calidad", color: "text-brand-blue" },
              { icon: Heart, title: "Honestidad", color: "text-white" },
              { icon: Award, title: "Lealtad", color: "text-brand-red" },
              { icon: Handshake, title: "Cooperación", color: "text-brand-blue" },
              { icon: Shield, title: "Integridad", color: "text-white" },
              { icon: Users, title: "Solidaridad", color: "text-brand-red" }
            ].map((value, i) => (
              <div key={i} className="text-center p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center group hover:bg-brand-blue/10 transition-all">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-full mb-4 border border-slate-800 group-hover:border-brand-blue transition-all">
                  <value.icon className={cn("w-8 h-8", value.color)} />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-tighter text-slate-300">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Pillar Section */}
      <section className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img src="/CAPITAL HUMANO.jpg" alt="Nuestro Capital Humano" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-black text-brand-black mb-6 font-display uppercase tracking-tight">Nuestro Capital Humano</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg font-medium">
              Creemos que la tecnología es tan efectiva como la mano que la opera. Por eso, nuestros técnicos no solo son operarios; son expertos certificados que comprenden el impacto de su trabajo.
            </p>
            <div>
              <div className="inline-block p-5 border-l-4 border-brand-red bg-slate-50 rounded-r-xl">
                <p className="text-3xl font-black text-brand-blue">100%</p>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Certificados IEEE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
