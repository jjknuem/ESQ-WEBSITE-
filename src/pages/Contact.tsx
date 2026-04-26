import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Building2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "mantenimiento",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("¡Gracias! Su mensaje ha sido enviado. Un ingeniero se pondrá en contacto pronto.");
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Intro Header */}
      <section className="section-container !pb-10">
        <div className="max-w-4xl">
          <span className="text-brand-red font-black text-sm tracking-widest uppercase mb-4 block">Contacto Profesional</span>
          <h1 className="text-5xl font-bold text-brand-black font-display mb-6 tracking-tighter uppercase">Contáctenos</h1>
          <p className="text-xl text-slate-500 font-medium">
            Estamos listos para atender sus requerimientos técnicos críticos. <br />
            <span className="text-brand-blue font-black italic">¡Servicios con Energía!</span>
          </p>
        </div>
      </section>

      <section className="section-container pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-brand-black text-white p-10 rounded-3xl shadow-xl space-y-8 relative overflow-hidden border-b-8 border-brand-red">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 -mr-10 -mt-10 rounded-full" />
              
              <h3 className="text-2xl font-black font-display relative z-10 text-brand-blue uppercase tracking-tight">Atención Directa</h3>
              
              <div className="flex gap-4 items-start relative z-10">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Oficina</p>
                  <p className="font-black text-lg">+1 (829) 596-6666</p>
                  <p className="text-xs text-slate-400">Atención Administrativa</p>
                </div>
              </div>

              <div className="flex gap-4 items-start relative z-10">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Móvil / WhatsApp</p>
                  <p className="font-black text-lg">+1 (829) 558-1177</p>
                  <p className="text-xs text-slate-400 font-bold text-brand-blue">Ing. Jehudi Féliz Luna</p>
                </div>
              </div>

              <div className="flex gap-4 items-start relative z-10">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Email Principal</p>
                  <p className="font-black text-base">info@electroserviciosquisqueya.com</p>
                  <p className="font-black text-xs text-slate-400 mt-1">jfeliz@electroserviciosquisqueya.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start relative z-10">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Nueva Sede</p>
                  <p className="font-black text-sm leading-tight tracking-tight">Marginal de Las Americas km 12 1/2, Los Frailes 2do, Sto. Dom. Este, R.D.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <a 
                  href="https://wa.me/18295966666" 
                  className="flex items-center justify-center gap-3 bg-brand-blue py-4 rounded-xl text-white font-black hover:bg-white hover:text-brand-black transition-all group shadow-xl shadow-blue-500/20"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" /> 
                  WHATSAPP DIRECTO
                </a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm space-y-4">
              <h4 className="font-black text-brand-black uppercase tracking-tight flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-red" /> Horario de Atención
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm py-2 border-b border-slate-50 font-medium">
                  <span className="text-slate-500">Lunes - Viernes</span>
                  <span className="font-black text-brand-black">8AM – 5PM</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-slate-50 font-medium">
                  <span className="text-slate-500">Sábados</span>
                  <span className="font-black text-brand-black">8AM – 12PM</span>
                </div>
                <div className="flex flex-col text-sm pt-2">
                  <span className="text-brand-red font-black uppercase tracking-widest italic text-xs mb-1">Atención Permanente</span>
                  <span className="font-black text-brand-blue text-lg">SOPORTE 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <h3 className="text-3xl font-black text-brand-black mb-8 font-display uppercase tracking-tight">Solicitud de Servicio</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium"
                    placeholder="Ej. Juan Pérez"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Empresa / Institución</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium"
                    placeholder="Ej. Industrial SRL"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Correo Corporativo</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium"
                    placeholder="jperez@empresa.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Servicio Requerido</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-bold"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  >
                    <option value="mantenimiento">Mantenimiento Preventivo</option>
                    <option value="reparacion">Reparación de Equipos</option>
                    <option value="pruebas">Análisis y Diagnóstico</option>
                    <option value="consultoria">Consultoría Técnica</option>
                    <option value="otro">Otro Requerimiento</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-700 uppercase tracking-widest">Detalles de su Requerimiento</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium"
                  placeholder="Describa brevemente el problema técnico o el servicio que desea cotizar..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-black hover:bg-slate-800 text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-slate-200 uppercase tracking-widest"
              >
                ENVIAR SOLICITUD <Send className="w-5 h-5 text-brand-red" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <span className="text-brand-blue font-black tracking-widest uppercase text-xs mb-2 block">Ubicación Estratégica</span>
            <h3 className="text-3xl font-black text-brand-black font-display uppercase tracking-tight flex items-center gap-2">
              Sede Central Santo Domingo
            </h3>
          </div>
          <p className="text-slate-400 font-bold flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-red" /> Los Frailes, Santo Domingo Este
          </p>
        </div>
        <div className="w-full h-96 bg-slate-200 rounded-3xl overflow-hidden shadow-inner relative flex items-center justify-center border-2 border-slate-100">
           <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100">
              <Building2 className="w-12 h-12 text-brand-blue mx-auto mb-4" />
              <p className="text-brand-black font-black uppercase tracking-tight">Interactivo Google Maps</p>
              <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-widest">Marginal de Las Américas km 12 1/2</p>
           </div>
        </div>
      </section>
    </div>
  );
}
