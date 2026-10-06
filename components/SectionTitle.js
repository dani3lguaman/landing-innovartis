// Título de sección con la raya naranja de AQUABEC v2.
export default function SectionTitle({ kicker, title, children, center, action }) {
  return (
    <div className={`mb-10 ${center ? "text-center" : "flex flex-wrap items-end justify-between gap-4"}`}>
      <div className={center ? "max-w-[720px] mx-auto" : "max-w-[720px]"}>
        {kicker && <p className="kicker mb-3">{kicker}</p>}
        <h2 className={`font-heading text-navy text-heading title-bar ${center ? "center" : ""}`}>{title}</h2>
        {children && <div className="mt-5 text-[16px] leading-[1.75] text-ink-soft">{children}</div>}
      </div>
      {action}
    </div>
  );
}
