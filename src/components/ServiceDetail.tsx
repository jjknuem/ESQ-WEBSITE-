import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, HelpCircle, LucideIcon, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  icon: LucideIcon;
}

export default function ServiceDetail({ title, subtitle, description, image, features, icon: Icon }: ServiceDetailProps) {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Breadcrumbs & Simple Header */}
      <div className="section-container !py-10">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          <Link to="/" className="hover:text-brand-orange">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/" className="hover:text-brand-orange">Servicios</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brand-navy">{title}</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy font-display mb-4">{title}</h1>
            <p className="text-xl text-slate-500">{subtitle}</p>
          </div>
          <div className="w-16 h-16 bg-brand-orange/10 flex items-center justify-center rounded-2xl hidden lg:flex">
            <Icon className="w-8 h-8 text-brand-orange" />
          </div>
        </div>
      </div>

      <section className="section-container pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Alcance Técnico del Servicio</h3>
              <p>{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-brand-navy text-white p-8 rounded-3xl shadow-xl">
              <ShieldCheck className="w-10 h-10 text-brand-orange mb-6" />
              <h4 className="text-xl font-bold mb-4">Garantía de Ingeniería</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Todas nuestras intervenciones en {title} están respaldadas por nuestra certificación ISO 9001:2015 y cubiertas por nuestro seguro de responsabilidad técnica.
              </p>
              <Link to="/calidad" className="text-brand-orange font-bold text-sm hover:underline flex items-center gap-2">
                Conozca nuestros procesos <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <HelpCircle className="w-8 h-8 text-slate-400 mb-4" />
              <h4 className="text-lg font-bold text-brand-navy mb-4">¿Tiene una duda técnica?</h4>
              <p className="text-sm text-slate-500 mb-6 italic">
                Nuestros consultores están disponibles para discutir su problema específico y proponer la solución más costo-efectiva.
              </p>
              <Link to="/contacto" className="btn-accent w-full justify-center">
                SOLICITAR ASESORÍA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
