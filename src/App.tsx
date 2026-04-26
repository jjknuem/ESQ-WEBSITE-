import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Quality from "./pages/Quality";
import AboutUs from "./pages/AboutUs";
import Trayectoria from "./pages/Trayectoria";
import Contact from "./pages/Contact";
import ServiceDetail from "./components/ServiceDetail";
import { Settings, Cpu, Zap, Shield } from "lucide-react";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      
      {/* Identity Routes */}
      <Route path="/identidad/trayectoria" element={<Layout><Trayectoria /></Layout>} />
      <Route path="/identidad/sobre-nosotros" element={<Layout><AboutUs /></Layout>} />
      
      {/* Service Routes */}
      <Route 
        path="/servicios/mantenimiento" 
        element={
          <Layout>
            <ServiceDetail 
              title="Mantenimiento Preventivo"
              subtitle="Garantizando la continuidad de sus operaciones críticas."
              icon={Settings}
              image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070"
              description="El mantenimiento preventivo no es un gasto, es un seguro de producción. Nuestro programa integral incluye inspecciones periódicas basadas en el tiempo y la condición para identificar fallas antes de que ocurran."
              features={[
                "Limpieza criogénica de componentes eléctricos.",
                "Pruebas de resistencia de aislamiento.",
                "Análisis de calidad de energía y armónicos.",
                "Apriete de conexiones y termografía periódica.",
                "Gestión de flotas de plantas eléctricas.",
                "Protocolos de lubricación y vibración."
              ]}
            />
          </Layout>
        } 
      />
      
      <Route 
        path="/servicios/reparaciones" 
        element={
          <Layout>
            <ServiceDetail 
              title="Reparaciones Técnicas"
              subtitle="Restauración experta de motores y generadores."
              icon={Cpu}
              image="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=2070"
              description="Contamos con un taller especializado equipado con maquinaria de precisión para el bobinado y reconstrucción de motores industriales de baja y media tensión, así como alternadores de potencia."
              features={[
                "Bobinado estatórico y rotórico de alta precisión.",
                "Cambio de rodamientos con ajuste interferencial.",
                "Barnizado por inmersión y secado controlado.",
                "Balanceo dinámico de ejes y ventiladores.",
                "Pruebas de carga en banco de pruebas propio.",
                "Metalizado de ejes y tapas desgastadas."
              ]}
            />
          </Layout>
        } 
      />

      <Route 
        path="/servicios/pruebas" 
        element={
          <Layout>
            <ServiceDetail 
              title="Análisis y Pruebas"
              subtitle="Diagnósticos avanzados bajo normativas IEEE."
              icon={Shield}
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070"
              description="Nuestros expertos utilizan tecnología de punta para realizar diagnósticos precisos que permiten determinar la vida útil restante de sus activos eléctricos y evitar paros costosos."
              features={[
                "Análisis de respuesta en frecuencia (SFRA).",
                "Termografía infrarroja de alta resolución.",
                "Pruebas de Hi-Pot y Tangente Delta.",
                "Análisis de aceite dieléctrico (Cromatografía).",
                "Detección de descargas parciales.",
                "Monitoreo de vibración y excentricidad."
              ]}
            />
          </Layout>
        } 
      />

      <Route 
        path="/servicios/consultoria" 
        element={
          <Layout>
            <ServiceDetail 
              title="Consultoría Técnica"
              subtitle="Ingeniería avanzada para optimización de sistemas."
              icon={Zap}
              image="https://images.unsplash.com/photo-1454165833767-027ffcb99c33?auto=format&fit=crop&q=80&w=2070"
              description="Brindamos asesoría estratégica para el diseño, dimensionamiento y optimización de infraestructuras eléctricas industriales, asegurando eficiencia energética y cumplimiento normativo."
              features={[
                "Estudios de cortocircuito y coordinación de protecciones.",
                "Diseño de sistemas de puesta a tierra.",
                "Auditorías de eficiencia energética.",
                "Especificación técnica de activos de potencia.",
                "Consultoría para implementación de ISO 50001.",
                "Planes maestros de mantenimiento eléctrico."
              ]}
            />
          </Layout>
        } 
      />

      <Route path="/calidad" element={<Layout><Quality /></Layout>} />
      <Route path="/contacto" element={<Layout><Contact /></Layout>} />
    </Routes>
  );
}

