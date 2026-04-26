import { motion } from "motion/react";
import { History, Milestone, Award, Building, Users, Calendar } from "lucide-react";
import { cn } from "@/src/lib/utils";

const milestones = [
  {
    year: "1991",
    title: "Sólida Experiencia",
    desc: "Nuestro equipo fundador acumula más de 18 años de experiencia previa en ingeniería electromecánica antes de formalizar operaciones.",
    icon: History
  },
  {
    year: "2009",
    title: "Fundación Oficial",
    desc: "Electro Servicios Quisqueya inicia sus operaciones formales, supliéndole al sector industrial soluciones de evaluación y mantenimiento.",
    icon: Building
  },
  {
    year: "2015",
    title: "Especialización Continua",
    desc: "Consolidamos nuestra posición como aliados estratégicos para la reparación de los equipos más sofisticados del mercado.",
    icon: Award
  },
  {
    year: "Actualidad",
    title: "Liderazgo Industrial",
    desc: "Seguimos ofreciendo seguridad y eficiencia a nuestros socios, actualizados con los últimos avances tecnológicos del sector.",
    icon: Milestone
  }
];

export default function Trayectoria() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="section-container !pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-brand-red font-black text-sm tracking-widest uppercase mb-4 block">Nuestra Historia</span>
          <h1 className="text-5xl font-bold text-brand-black font-display mb-6 tracking-tighter uppercase">Nuestra Trayectoria</h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Electro Servicios Quisqueya surge con un equipo de profesionales apasionados por la excelencia técnica. <br />
            <span className="text-brand-blue font-black italic">¡Servicios con Energía!</span>
          </p>
        </motion.div>
      </section>

      <section className="section-container">
        <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-slate-100 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-brand-black mb-6 uppercase tracking-tight font-display">Antecedentes</h2>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Electro Servicios Quisqueya surge con un equipo de profesionales en el área de la ingeniería electromecánica con experiencia de más de 18 años, la misma inicia sus operaciones formales en el año 2009 supliéndole al sector industrial de la República Dominicana las soluciones de evaluación, consultoría, mantenimiento y reparación de máquinas eléctricas.
              </p>
              <p>
                A todo lo largo de nuestra participación empresarial, nos hemos preocupado por mantener los más altos estándares de calidad, estando actualizados con los últimos avances del sector y especializándonos cada día más para ofrecer a nuestros aliados (clientes) la excelencia en los servicios que estos demandan.
              </p>
              <p>
                Con ese propósito, estaremos manteniendo nuestra posición en el mercado y ofertando al sector industrial la seguridad de reparar sus más grandes y sofisticados equipos.
              </p>
            </div>
          </div>
        </div>
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden md:block" />

        <div className="space-y-20 relative">
          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2 w-full">
                <div className={`p-8 bg-white rounded-3xl shadow-lg border border-slate-100 relative ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  <span className="text-4xl font-black text-brand-blue/10 absolute top-4 right-8">{milestone.year}</span>
                  <h3 className="text-2xl font-black text-brand-black mb-4 font-display uppercase tracking-tight">{milestone.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{milestone.desc}</p>
                </div>
              </div>

              {/* Center Icon */}
              <div className={cn(
                "hidden md:flex w-16 h-16 rounded-full border-4 border-white shadow-xl items-center justify-center z-10",
                i % 2 === 0 ? "bg-brand-blue" : "bg-brand-red"
              )}>
                <milestone.icon className="w-6 h-6 text-white" />
              </div>

              <div className="md:w-1/2 w-full hidden md:block" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Legacy Quote */}
      <section className="bg-brand-black py-24 text-white text-center mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px]" />
        <div className="section-container relative z-10">
          <History className="w-16 h-16 text-brand-red mx-auto mb-8 opacity-50" />
          <h2 className="text-4xl font-bold italic font-display mb-8 tracking-tight">
            "La confianza no se compra; se construye con <br className="hidden md:block" /> cada motor que vuelve a la vida."
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto mb-4" />
          <p className="text-brand-red font-black uppercase tracking-widest text-sm">Legado Electro Servicios Quisqueya</p>
        </div>
      </section>
    </div>
  );
}
