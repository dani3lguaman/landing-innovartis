export default function Quote() {
  return (
    <section className="bg-brand py-[80px] px-[140px] flex flex-col items-center gap-5">
      <blockquote className="text-white font-black text-[38px] leading-[1.2] text-center max-w-[760px] tracking-[-1px]">
        &ldquo;La publicidad no es gasto.
        <br />
        Es inversión cuando está bien segmentada.&rdquo;
      </blockquote>
      <p className="text-white font-bold text-[18px]">— Daniel Guamán · Fundador de INNOVARTIS</p>
    </section>
  );
}
