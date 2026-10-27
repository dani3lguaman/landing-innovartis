"use client";

import { useMemo, useState } from "react";
import useDatosCifrados, { AvisoAcceso } from "./useDatosCifrados";
import { Chips, Tile, Pastilla, Cargando, fechaCorta, diasHasta, usd } from "./ui";

const ALERTAS = [
  { valor: "todos", texto: "Todos" },
  { valor: "vencido", texto: "Vencidos" },
  { valor: "por_vencer", texto: "Vencen en 7 días" },
  { valor: "atrasado", texto: "Cobro atrasado" },
  { valor: "sin_factura", texto: "Falta factura" },
  { valor: "sin_copia", texto: "Sin copia firmada" },
];
const ORDEN_NIVEL = { rojo: 0, naranja: 1, ok: 2 };
const ORDEN_CAT = ["Cobrado", "Seguro", "Condicionado", "En duda"];
const TITULO_CAT = { Cobrado: "Ya cobrado: falta la factura", Seguro: "Seguro", Condicionado: "Condicionado a que entreguemos", "En duda": "En duda" };
const HUBSPOT = "https://app.hubspot.com/contacts/48578869/record/0-3/";

const textoDias = (d) => (d === null ? "Pago único" : d < 0 ? `Venció hace ${-d} ${-d === 1 ? "día" : "días"}` : d === 0 ? "Vence hoy" : `Faltan ${d} ${d === 1 ? "día" : "días"}`);

function Tarjeta({ c }) {
  return (
    <article className="bg-white border border-line p-4 md:p-5 grid gap-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-heading text-[16px] text-navy leading-snug">{c.cliente}</h3>
          <p className="text-[13px] text-ink-soft">{c.plan}</p>
        </div>
        <Pastilla nivel={c.nivel}>{c.atrasado ? "Cobro atrasado" : textoDias(c.dias)}</Pastilla>
      </div>
      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 text-[13px]">
        <div><dt className="text-ink-soft">Inicio</dt><dd className="font-semibold text-ink">{fechaCorta(c.inicio, false)}</dd></div>
        <div><dt className="text-ink-soft">Fin</dt><dd className="font-semibold text-ink">{fechaCorta(c.fin, false)}</dd></div>
        <div><dt className="text-ink-soft">Cobrado</dt><dd className="font-semibold text-ink">{usd(c.cobrado_usd)}</dd></div>
        <div><dt className="text-ink-soft">Falta</dt><dd className={`font-semibold ${Number(c.falta_usd) ? "text-[#b42318]" : "text-ink"}`}>{Number(c.falta_usd) ? usd(c.falta_usd) : "—"}</dd></div>
        <div className="col-span-2"><dt className="text-ink-soft">Próximo cobro</dt><dd className="text-ink">{c.proximo_cobro}</dd></div>
        <div><dt className="text-ink-soft">Contrato</dt><dd className={c.sin_copia ? "text-[#b54708] font-semibold" : "text-ink"}>{c.contrato}</dd></div>
        <div><dt className="text-ink-soft">Factura</dt><dd className={c.sin_factura ? "text-[#b54708] font-semibold" : "text-ink"}>{c.factura}</dd></div>
      </dl>
      <p className={`text-[13.5px] leading-[1.6] ${c.nivel === "rojo" ? "text-[#b42318]" : c.nivel === "naranja" ? "text-[#b54708]" : "text-ink"}`}>{c.alerta}</p>
      <div className="flex flex-wrap items-center justify-between gap-2 text-[12.5px] text-ink-soft border-t border-line pt-2.5">
        <span>A cargo: <span className="font-semibold text-navy">{c.ejecutiva}</span>{c.disenador && c.disenador !== "—" ? ` · diseño ${c.disenador}` : ""}</span>
        {/^\d+$/.test(String(c.negocio)) ? (
          <a href={HUBSPOT + c.negocio} target="_blank" rel="noreferrer" className="font-semibold text-navy underline underline-offset-2">Negocio en HubSpot</a>
        ) : (
          <span>Sin negocio en HubSpot</span>
        )}
      </div>
    </article>
  );
}

export default function CobrosPame() {
  const { cargando, error, datos } = useDatosCifrados("cobros");
  const [alerta, setAlerta] = useState("todos");
  const [cargo, setCargo] = useState("Todos");
  const [plan, setPlan] = useState("Todos");

  // Días, vencidos y colores se recalculan con la fecha de hoy del navegador.
  const contratos = useMemo(
    () =>
      (datos?.contratos || []).map((c) => {
        const dias = diasHasta(c.fin);
        const vencido = dias !== null && dias < 0;
        const por_vencer = dias !== null && dias >= 0 && dias <= 7;
        const nivel = vencido || c.atrasado ? "rojo" : por_vencer || (c.sin_factura && Number(c.cobrado_usd) > 0) ? "naranja" : "ok";
        return { ...c, dias, vencido, por_vencer, nivel };
      }),
    [datos]
  );
  const personas = useMemo(() => [...new Set(contratos.flatMap((c) => [c.ejecutiva, c.disenador]).filter((p) => p && p !== "—"))].sort(), [contratos]);
  const precios = useMemo(() => [...new Set(contratos.map((c) => Number(c.precio_usd)))].sort((a, b) => b - a), [contratos]);

  const filtrados = useMemo(
    () =>
      contratos
        .filter((c) => alerta === "todos" || c[alerta])
        .filter((c) => cargo === "Todos" || c.ejecutiva === cargo || c.disenador === cargo)
        .filter((c) => plan === "Todos" || Number(c.precio_usd) === Number(plan))
        .sort((a, b) => (ORDEN_NIVEL[a.nivel] ?? 3) - (ORDEN_NIVEL[b.nivel] ?? 3) || (a.dias ?? 999) - (b.dias ?? 999) || a.cliente.localeCompare(b.cliente)),
    [contratos, alerta, cargo, plan]
  );

  if (cargando) return <Cargando />;
  if (error) return <AvisoAcceso error={error} />;

  const cuenta = (k) => contratos.filter((c) => c[k]).length;
  const porCobrar = contratos.reduce((a, c) => a + Number(c.falta_usd || 0), 0);
  const conPlan = contratos.filter((c) => Number(c.precio_usd) > 0 && c.fin !== "Pago único");
  const unicos = contratos.filter((c) => Number(c.precio_usd) > 0 && c.fin === "Pago único");
  const mensual = conPlan.reduce((a, c) => a + Number(c.precio_usd || 0), 0);
  const porPrecio = [...new Set(conPlan.map((c) => Number(c.precio_usd)))].sort((a, b) => b - a).map((p) => ({ p, n: conPlan.filter((c) => Number(c.precio_usd) === p).length }));
  const porEjecutiva = [...new Set(contratos.map((c) => c.ejecutiva))].map((e) => ({ e, n: contratos.filter((c) => c.ejecutiva === e).length })).sort((a, b) => b.n - a.n);
  const porDiseno = [...new Set(contratos.map((c) => c.disenador))].map((e) => ({ e, n: contratos.filter((c) => c.disenador === e).length })).sort((a, b) => b.n - a.n);
  const renovaciones = contratos.filter((c) => c.dias !== null && c.dias >= 0 && c.dias <= 15).sort((a, b) => a.dias - b.dias);
  const cobros = datos.cobros || [];

  return (
    <div className="grid gap-8">
      <header className="grid gap-2">
        <p className="kicker">Para Pame</p>
        <h1 className="font-heading text-heading text-navy">Cobros, renovaciones y planes</h1>
        <p className="text-[14.5px] text-ink-soft leading-[1.7] max-w-[780px]">
          Un renglón por cliente con el inicio y el fin de su contrato, lo cobrado, lo que falta y las alertas. Se actualiza con los pagos y lo que
          se dice en los WhatsApp; un pago cuenta como cobrado solo con el N.º de documento del banco. Actualizado: {datos.actualizado}.
        </p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
        <Tile etiqueta="Períodos vencidos" valor={cuenta("vencido")} tono="rojo" />
        <Tile etiqueta="Vencen en 7 días" valor={cuenta("por_vencer")} tono="naranja" />
        <Tile etiqueta="Cobros atrasados" valor={cuenta("atrasado")} tono="rojo" />
        <Tile etiqueta="Falta factura" valor={cuenta("sin_factura")} tono="naranja" />
        <Tile etiqueta="Sin copia firmada" valor={cuenta("sin_copia")} tono="naranja" />
        <Tile etiqueta="Saldo por cobrar" valor={usd(porCobrar)} nota="de los períodos vigentes, con lo condicionado" />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="bg-white border border-line p-5 grid gap-3 content-start">
          <p className="kicker">Planes</p>
          <p className="text-[14px] text-ink">
            <span className="display-num text-navy text-[22px]">{conPlan.length}</span> clientes con plan · los planes suman{" "}
            <span className="font-semibold">{usd(mensual)}</span> al mes
          </p>
          <ul className="grid gap-1 text-[13.5px] content-start">
            {porPrecio.map(({ p, n }) => (
              <li key={p} className="flex justify-between border-b border-line py-1"><span>Plan de {usd(p)}</span><span className="font-semibold text-navy">{n} {n === 1 ? "cliente" : "clientes"}</span></li>
            ))}
          </ul>
          {unicos.length > 0 && (
            <p className="text-[12.5px] text-ink-soft">Pago único, aparte: {unicos.map((c) => `${c.cliente.split(" (")[0]} (${usd(c.precio_usd)})`).join(" · ")}</p>
          )}
        </div>
        <div className="bg-white border border-line p-5 grid gap-3 content-start">
          <p className="kicker">Personas a cargo</p>
          <ul className="grid gap-1 text-[13.5px] content-start">
            {porEjecutiva.map(({ e, n }) => (
              <li key={"e" + e} className="flex justify-between border-b border-line py-1"><span>Lleva la cuenta: {e}</span><span className="font-semibold text-navy">{n}</span></li>
            ))}
            {porDiseno.map(({ e, n }) => (
              <li key={"d" + e} className="flex justify-between border-b border-line py-1"><span>Diseño: {e === "—" ? "sin asignar" : e}</span><span className="font-semibold text-navy">{n}</span></li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-line p-5 grid gap-3 content-start">
          <p className="kicker">Renovaciones en 15 días</p>
          {renovaciones.length ? (
            <ul className="grid gap-1 text-[13.5px] content-start">
              {renovaciones.map((c) => (
                <li key={c.cliente} className="flex justify-between gap-3 border-b border-line py-1">
                  <span className="min-w-0">{c.cliente.split(" (")[0]}</span>
                  <span className="font-semibold text-navy whitespace-nowrap">{fechaCorta(c.fin)} · {usd(c.precio_usd)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[13.5px] text-ink-soft">Ninguna en los próximos 15 días.</p>
          )}
        </div>
      </section>

      <section className="bg-white border border-line p-5 md:p-6 grid gap-5">
        <Chips titulo="Alerta" opciones={ALERTAS} valor={alerta} onChange={setAlerta} />
        <Chips titulo="A cargo" opciones={["Todos", ...personas]} valor={cargo} onChange={setCargo} />
        <Chips titulo="Plan" opciones={[{ valor: "Todos", texto: "Todos" }, ...precios.map((p) => ({ valor: String(p), texto: p ? usd(p) : "Sin pago (canje o socio)" }))]} valor={plan} onChange={setPlan} />
      </section>

      <section className="grid gap-3">
        <h2 className="font-heading text-[19px] text-navy">Contratos ({filtrados.length})</h2>
        {!filtrados.length && <p className="text-[14px] text-ink-soft">Ningún cliente con este filtro.</p>}
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filtrados.map((c) => <Tarjeta key={c.cliente} c={c} />)}
        </div>
      </section>

      <section className="grid gap-4">
        <h2 className="font-heading text-[19px] text-navy">Cobros de la semana</h2>
        <p className="text-[13.5px] text-ink-soft max-w-[760px]">Regla: no se reenvía un recordatorio que ya se mandó. Lo condicionado no se cobra hasta que entreguemos o salga la campaña.</p>
        {ORDEN_CAT.map((cat) => {
          const lista = cobros.filter((x) => x.categoria === cat);
          if (!lista.length) return null;
          return (
            <div key={cat} className="grid gap-2">
              <p className="text-[13px] font-bold text-navy">{TITULO_CAT[cat]} · {usd(lista.reduce((a, x) => a + Number(x.monto_usd || 0), 0))}</p>
              <div className="grid gap-2">
                {lista.map((x) => (
                  <div key={x.cliente} className="bg-white border border-line p-3.5 grid gap-1 md:grid-cols-[200px_90px_1fr] md:gap-4 text-[13.5px]">
                    <p className="font-semibold text-navy">{x.cliente}</p>
                    <p className="display-num text-ink">{usd(x.monto_usd)}<span className="block text-[12px] font-normal text-ink-soft">desde {x.desde}</span></p>
                    <div className="min-w-0 grid gap-0.5">
                      <p className="text-ink">{x.que_lo_destraba}</p>
                      <p className="text-[12.5px] text-ink-soft">Último aviso: {x.ultimo_aviso}{x.no_reenviar === "Sí" ? " · no reenviar" : ""}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
