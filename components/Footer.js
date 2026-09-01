import { WA_NUMBER_DISPLAY } from "./constants";

export default function Footer() {
  return (
    <footer className="bg-navy-darker py-10">
      <div className="max-w-[1150px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="font-heading text-[18px] tracking-[0.08em] text-white">
          INNOV<span className="text-accent">ARTIS</span>
        </p>
        <p className="text-[13px] text-white/60">
          Quito, Ecuador · innovartis.lat · WhatsApp {WA_NUMBER_DISPLAY}
        </p>
        <p className="text-[13px] text-white/60">
          Agencia de marketing con RUC · 3 años construyendo relaciones
        </p>
      </div>
    </footer>
  );
}
