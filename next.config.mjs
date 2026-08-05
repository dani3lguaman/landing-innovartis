import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // El repo vive dentro del workspace de la agencia (que tiene su propio git);
  // sin esto Turbopack infiere la raíz equivocada y no resuelve dependencias.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
