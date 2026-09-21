import React, { useState, useCallback } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
  useMap,
} from "@vis.gl/react-google-maps";
import { Navigation, Phone, ExternalLink, MapPin, Sparkles } from "lucide-react";

// Sede Central: Electro Servicios Quisqueya, Calle Francisco A. Camaño Deño 10, Santo Domingo Este 11905
const HEADQUARTERS_COORDINATES = {
  lat: 18.4692648,
  lng: -69.7914517,
};
const HEADQUARTERS_ADDRESS = "Calle Francisco A. Camaño Deño 10, Santo Domingo Este 11905";
const GOOGLE_MAPS_QUERY_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Electro Servicios Quisqueya, Calle Francisco A. Camaño Deño 10, Santo Domingo Este 11905")}&query_place_id=ChIJofupYwKHr44Rpqr3K0uqI4E`;
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Electro Servicios Quisqueya, Calle Francisco A. Camaño Deño 10, Santo Domingo Este 11905")}&destination_place_id=ChIJofupYwKHr44Rpqr3K0uqI4E`;

function MapControls() {
  const map = useMap();

  const handleRecenter = useCallback(() => {
    if (map) {
      map.panTo(HEADQUARTERS_COORDINATES);
      map.setZoom(17);
    }
  }, [map]);

  return (
    <div className="absolute top-4 right-4 z-10 flex flex-wrap gap-2">
      <button
        onClick={handleRecenter}
        type="button"
        className="bg-white/95 hover:bg-white text-brand-black px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-xl border border-slate-200 backdrop-blur-md transition-all flex items-center gap-1.5"
      >
        <Navigation className="w-3.5 h-3.5 text-brand-blue" />
        Centrar Sede
      </button>
      <a
        href={GOOGLE_MAPS_QUERY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-black hover:bg-slate-800 text-white px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-xl border border-slate-800 transition-all flex items-center gap-1.5"
      >
        <ExternalLink className="w-3.5 h-3.5 text-brand-red" />
        Ver en Google Maps
      </a>
    </div>
  );
}

function MarkerWithInfo() {
  const [open, setOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={HEADQUARTERS_COORDINATES}
        title="Electro Servicios Quisqueya, Calle Francisco A. Camaño Deño 10, Santo Domingo Este 11905"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Pin
          background="#1244ea"
          borderColor="#ffffff"
          glyphColor="#ffffff"
          scale={1.25}
        />
      </AdvancedMarker>

      {open && marker && (
        <InfoWindow
          anchor={marker}
          onCloseClick={() => setOpen(false)}
          maxWidth={340}
          className="rounded-xl overflow-hidden"
        >
          <div className="p-1 text-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">
                Sede Central
              </span>
            </div>
            <h4 className="font-extrabold text-sm text-slate-900 leading-snug">
              ELECTRO SERVICIOS QUISQUEYA
            </h4>
            <p className="text-[11px] text-brand-red font-black italic mt-0.5 mb-2">
              ¡Servicios con Energía!
            </p>
            <p className="text-xs text-slate-600 leading-tight mb-3">
              Calle Francisco A. Camaño Deño 10, Santo Domingo Este 11905, República Dominicana.
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
              <a
                href="tel:+18295966666"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:text-brand-blue"
              >
                <Phone className="w-3 h-3 text-brand-blue" />
                (829) 596-6666
              </a>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-extrabold text-brand-blue hover:text-brand-red underline"
              >
                Cómo llegar
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

export default function InteractiveMap() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

  if (!apiKey) {
    return (
      <div className="w-full h-96 bg-slate-100 rounded-3xl border-2 border-slate-200 flex flex-col items-center justify-center p-6 text-center shadow-inner">
        <MapPin className="w-12 h-12 text-brand-red mb-3 animate-bounce" />
        <h4 className="text-lg font-black text-brand-black uppercase tracking-tight">
          Electro Servicios Quisqueya
        </h4>
        <p className="text-sm text-slate-500 max-w-md mt-1 font-medium">
          {HEADQUARTERS_ADDRESS}
        </p>
        <a
          href={GOOGLE_MAPS_QUERY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-brand-black transition-all shadow-md"
        >
          <ExternalLink className="w-4 h-4" />
          Abrir en Google Maps
        </a>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={HEADQUARTERS_COORDINATES}
          defaultZoom={17}
          mapId="DEMO_MAP_ID"
          internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
          gestureHandling="cooperative"
          disableDefaultUI={false}
          className="w-full h-full"
        >
          <MapControls />
          <MarkerWithInfo />
        </Map>
      </APIProvider>
    </div>
  );
}
