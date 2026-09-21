import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "emblem";
  dark?: boolean;
}

export const LOGO_SRC = "/LOGO%20ESQ.png";

/**
 * Logo emblem / icon view using LOGO ESQ.png
 */
export function LogoEmblem({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Electro Servicios Quisqueya Logo"
      className={`${className} object-contain`}
    />
  );
}

/**
 * Full Brand Logo using LOGO ESQ.png
 */
export default function Logo({ className = "h-16 w-auto" }: LogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt="Electro Servicios Quisqueya S.R.L."
      className={`${className} object-contain`}
    />
  );
}

