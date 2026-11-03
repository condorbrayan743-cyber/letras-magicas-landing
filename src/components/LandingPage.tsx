import PackContentsSection from "./PackContentsSection";
import cardIlus1 from "@/assets/card-ilus-1.jpg";
import cardIlus2 from "@/assets/card-ilus-2.jpg";
import cardIlus3 from "@/assets/card-ilus-3.jpg";
import { useEffect, useState } from "react";
import { ChevronDown, ShieldCheck, Mail, CreditCard, Clock, Palette, TrendingUp, Star, BookOpen, Trophy, ArrowRight, Check, X } from "lucide-react";
import pack1 from "@/assets/pack-1.webp";
import pack2 from "@/assets/pack-2.webp";
import pack3 from "@/assets/pack-3.webp";
import pack5 from "@/assets/pack-5.webp";
import pack7 from "@/assets/foto-3.webp";

import heroKitMockup from "@/assets/hero-kit-mockup.webp.asset.json";
import heroNinoMaterial from "@/assets/hero-nino-material.webp.asset.json";
import extra1 from "@/assets/extra-1.webp";
import extra4 from "@/assets/extra-4.webp";
import extra5 from "@/assets/extra-5.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/A105742687W?checkoutMode=10";
const PRIMARY_BTN = "inline-block w-full max-w-[400px] bg-[#FF4D8D] hover:bg-[#ff3580] text-white text-lg font-black px-8 py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.02] text-center";
const SECTION_PAD = "py-10 md:py-16 px-4"; // 40px móvil / 64px desktop

const TrustLine = () => (
  <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-4 text-[13px] text-slate-600">
    <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-600" /> Pago seguro</span>
    <span className="flex items-center gap-1"><Mail className="w-4 h-4 text-green-600" /> Acceso en 2 minutos</span>
    <span className="flex items-center gap-1"><CreditCard className="w-4 h-4 text-green-600" /> Un solo pago</span>
    <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-600" /> Garantía 7 días</span>
  </div>
);

const GALLERY_ITEMS = [
  { img: pack2, label: "Lectura de sílabas", w: 768, h: 681 },
  { img: pack5, label: "Numeración inicial", w: 784, h: 662 },
  { img: extra1, label: "Trazos y escritura", w: 938, h: 1041 },
  { img: extra4, label: "Tarjetas de vocabulario", w: 944, h: 879 },
  { img: extra5, label: "Juegos de memoria", w: 896, h: 1198 },
  { img: pack3, label: "Actividades a color", w: 1169, h: 800 },
];

const MARQUEE_TEXT = "Método práctico de lectoescritura • Descarga inmediata • Garantía de 7 días • Listo para imprimir";

const Marquee = () => (
  <div style={{ background: "#1a1a1a", color: "#FFE4ED", overflow: "hidden", whiteSpace: "nowrap", padding: "8px 0", borderTop: "1px solid #FF4D8D", borderBottom: "1px solid #FF4D8D" }}>
    <style>{`@keyframes ml-mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    <div style={{ display: "inline-block", animation: "ml-mq 28s linear infinite", fontWeight: 700, fontSize: "14px", letterSpacing: "0.02em" }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} style={{ paddingRight: "48px" }}>{MARQUEE_TEXT} <span style={{ color: "#FF4D8D" }}>•</span></span>
      ))}
    </div>
  </div>
);

const Countdown = () => {
  const [t, setT] = useState({ h: 23, m: 59, s: 59 });
  useEffect(() => {
    const KEY = "mml_countdown_end";
    let end = Number(typeof window !== "undefined" ? window.localStorage.getItem(KEY) : 0);
    const now = Date.now();
    if (!end || end < now) {
      end = now + 24 * 60 * 60 * 1000;
      window.localStorage.setItem(KEY, String(end));
    }
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setT({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  const Box = ({ v, l }: { v: string; l: string }) => (
    <div style={{ background: "#1a1a1a", color: "#fff", borderRadius: "12px", padding: "10px 14px", minWidth: "72px", textAlign: "center" }}>
      <div className="font-fredoka" style={{ fontSize: "32px", lineHeight: 1, color: "#FF4D8D" }}>{v}</div>
      <div style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px", color: "#ffb6d9" }}>{l}</div>
    </div>
  );
  return (
    <div style={{ margin: "0 auto 16px" }}>
      <p style={{ textAlign: "center", fontWeight: 800, color: "#EF4444", marginBottom: "10px", fontSize: "14px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
        ⏰ Precio de lanzamiento termina en
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <Box v={pad(t.h)} l="Horas" />
        <Box v={pad(t.m)} l="Min" />
        <Box v={pad(t.s)} l="Seg" />
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const selected = GALLERY_ITEMS[selectedIdx];

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(false); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <div className="landing-page min-h-screen bg-[#FFF0F5] text-slate-800">
      {/* BARRA DE URGENCIA */}
      <div className="bg-[#FF4D8D] text-white text-center py-2 px-4 text-sm font-bold">
        🔥 Solo por lanzamiento: Tu hijo leyendo en 15 días por $7 — después vuelve a $32. ⏰ Precio limitado
      </div>
      <Marquee />

      {/* ═══ SECCIÓN 1 — HERO ═══ */}
      <section className={`bg-gradient-to-b from-[#FFE4ED] to-white ${SECTION_PAD}`}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-pink-100 text-[#FF4D8D] px-4 py-1 rounded-full text-sm font-bold shadow-sm mb-6">
            ✨ Método 100% Práctico
          </span>
          {/* Título + descripción — sin tarjeta, sobre el fondo natural */}
          <div className="px-6 mb-10 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 leading-[1.15] mb-6">
              Tu hijo leerá y escribirá con <span className="text-[#FF4D8D]">fluidez</span> en <span className="text-[#FF4D8D]">pocas semanas</span>.
            </h1>
            <p className="font-serif italic font-light text-[17px] md:text-[20px] text-slate-600 leading-relaxed tracking-wide">
              Un sistema paso a paso, visual y progresivo de los primeros sonidos a la comprensión. Ideal para niños de 4 a 8 años. Sin preparar nada, sin improvisar.
            </p>
            <p className="text-[16px] md:text-[18px] font-bold text-slate-900 mt-5">
              Tú imprimes — <span className="text-[#FF4D8D]">el material hace el resto.</span>
            </p>
          </div>

          {/* Mockups del producto: kit completo + tarjeta flotante */}
          <div className="relative max-w-[560px] mx-auto mb-10 px-6 md:px-0">
            <img
              src={heroKitMockup.url}
              alt="Kit completo de alfabetización Mi Mundo de Letras: cuadernos de vocales, sílabas, conteo y formación de palabras"
              width={928}
              height={1149}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-3xl shadow-xl border-2 border-[#FFB6D9] md:translate-x-6"
            />
            <img
              src={heroNinoMaterial.url}
              alt="Niño practicando lectura con el material impreso de Mi Mundo de Letras"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="absolute -bottom-6 -left-2 md:-left-10 w-[38%] max-w-[220px] h-auto rounded-xl shadow-lg border-2 border-white -rotate-6"
            />
          </div>

          {/* Compra rápida — integrada al fondo, sin tarjeta */}
          <div className="max-w-[440px] mx-auto px-4 mb-6">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
              Recurso de alfabetización pedagógica
            </h2>
            <p className="flex items-center justify-center gap-2 text-[15px] text-slate-700 mb-4">
              <span className="text-[#F5A623] text-lg tracking-tight">★★★★★</span>
              <span className="font-semibold">Recomendado por madres y maestros</span>
            </p>
            <p className="text-[14px] text-slate-400 line-through">Precio anterior: $20.00 USD</p>
            <p className="text-[32px] md:text-[36px] font-black text-[#FF4D8D] my-1">¡AHORA POR: $7 USD!</p>
            <ul className="text-left inline-block mt-3 mb-5 space-y-1.5 text-[15px] text-slate-700">
              <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔️</span> Fácil de imprimir y usar en casa</li>
              <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔️</span> Más de 200 actividades interactivas</li>
            </ul>
            <div>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN}>
                QUIERO OBTENER LA GUÍA DE ALFABETIZACIÓN
              </a>
            </div>
            <p className="text-[13px] text-slate-500 mt-3">Acceso inmediato después del pago</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 text-[13px] text-slate-600">
              <span>🔒 Pago seguro</span>
              <span>⚡ Un solo pago</span>
              <span>🛡️ Garantía de 7 días</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN 2 — ACTIVIDADES PARA APRENDER JUNTOS ═══ */}
      <section className="relative overflow-hidden px-4 py-12 md:py-16" style={{ background: "#FFFBF7" }}>
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-baloo text-[24px] leading-tight sm:text-[30px] md:text-[38px]" style={{ color: "#1F3B73", fontWeight: 800 }}>
            ¿Buscas actividades para acompañar a tu hijo<br className="hidden sm:block" /> en sus primeros pasos en la
          </h2>
          <div className="mt-1 flex items-center justify-center gap-2 sm:gap-4">
            <span aria-hidden className="hidden text-3xl sm:inline" style={{ color: "#FFD23F" }}>⟩</span>
            <p className="font-fredoka text-[38px] leading-none sm:text-[56px] md:text-[72px]">
              <span style={{ color: "#FF6B8F" }}>lectura</span>{" "}
              <span style={{ color: "#B98AE6" }}>y la</span>{" "}
              <span style={{ color: "#3FB2EE" }}>escritura?</span>
            </p>
            <span aria-hidden className="hidden text-3xl sm:inline" style={{ color: "#FFD23F" }}>⟨</span>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-relaxed md:text-[19px]" style={{ color: "#3D4A63" }}>
            Aprender es un proceso que se construye poco a poco. Contar con actividades adecuadas para cada etapa puede hacer que la práctica en casa sea más sencilla, organizada y divertida.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 text-left md:grid-cols-3">
            {[
              { img: cardIlus1, bg: "#FDE7EF", num: "#FF7A99", t: "Encontrar actividades adecuadas puede ser todo un reto", d: "Entre tantas opciones, no siempre es fácil saber qué ejercicios elegir para practicar las letras, los sonidos y las primeras sílabas." },
              { img: cardIlus2, bg: "#EEE6FB", num: "#B98AE6", t: "La práctica necesita variedad y motivación", d: "Las actividades visuales, los juegos y los ejercicios breves pueden ayudar a mantener el interés de los niños mientras exploran nuevas habilidades." },
              { img: cardIlus3, bg: "#E3F1FD", num: "#3FB2EE", t: "Aprender también puede ser divertido", d: "Con fichas de alfabetización diseñadas para aprender haciendo, los niños pueden practicar letras, sílabas y primeras palabras mediante actividades visuales y entretenidas." },
            ].map((c, i) => (
              <div key={i} className="rounded-3xl p-6 shadow-[0_8px_24px_-12px_rgba(31,59,115,0.18)]" style={{ background: c.bg }}>
                <img src={c.img} alt={c.t} width={992} height={672} loading="lazy" className="mx-auto h-auto w-full max-w-[300px] rounded-2xl" />
                <div className="mt-4 flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full font-baloo text-lg font-extrabold text-white" style={{ background: c.num }}>{i + 1}</span>
                  <h3 className="font-baloo text-[20px] leading-tight md:text-[22px]" style={{ color: "#1F3B73", fontWeight: 800 }}>{c.t}</h3>
                </div>
                <p className="mt-3 text-[16px] leading-relaxed md:pl-[52px]" style={{ color: "#4A5568" }}>{c.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 sm:gap-6">
            <span aria-hidden className="text-2xl sm:text-3xl">⭐</span>
            <div>
              <p className="text-[16px] md:text-[20px]" style={{ color: "#3D4A63" }}>Pequeñas actividades, nuevas oportunidades para aprender.</p>
              <p className="font-baloo text-[19px] leading-tight md:text-[28px]" style={{ color: "#1F3B73", fontWeight: 800 }}>Y muchos momentos para disfrutar juntos del proceso.</p>
            </div>
            <span aria-hidden className="text-2xl sm:text-3xl">⭐</span>
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN 3 — DENTRO DEL PACK ═══ */}
      <PackContentsSection />


      {/* ═══ SECCIÓN 5 — TIEMPO DE DEMORA ═══ */}
      <section className={`bg-white ${SECTION_PAD}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-black text-center text-slate-900" style={{ marginBottom: "24px" }}>
            ¿Qué pasa en los primeros 15 días?
          </h2>

          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
            <div className="bg-pink-50 rounded-xl text-center" style={{ padding: "24px" }}>
              <Star className="w-10 h-10 mx-auto text-[#FF4D8D] mb-2" />
              <span className="inline-block bg-white text-[#FF4D8D] text-xs font-bold px-3 py-1 rounded-full mb-3">Días 1 al 5</span>
              <h3 className="font-extrabold text-lg mb-2">Reconoce letras</h3>
              <p style={{ color: "#555555", fontSize: "16px", lineHeight: 1.6 }}>Identifica letras y sílabas jugando con las fichas. Sin presión. Sin memorización forzada.</p>
            </div>
            <ArrowRight className="hidden md:block w-8 h-8 text-[#FF4D8D] self-center mx-auto" />
            <div className="md:hidden w-px h-6 bg-[#FF4D8D] mx-auto" />
            <div className="bg-pink-50 rounded-xl text-center" style={{ padding: "24px" }}>
              <BookOpen className="w-10 h-10 mx-auto text-[#FF4D8D] mb-2" />
              <span className="inline-block bg-white text-[#FF4D8D] text-xs font-bold px-3 py-1 rounded-full mb-3">Días 6 al 10</span>
              <h3 className="font-extrabold text-lg mb-2">Forma palabras</h3>
              <p style={{ color: "#555555", fontSize: "16px", lineHeight: 1.6 }}>Combina sílabas y forma sus primeras palabras solo, sin ayuda de mamá.</p>
            </div>
            <ArrowRight className="hidden md:block w-8 h-8 text-[#FF4D8D] self-center mx-auto" />
            <div className="md:hidden w-px h-6 bg-[#FF4D8D] mx-auto" />
            <div className="bg-[#FF4D8D] text-white rounded-xl text-center" style={{ padding: "24px" }}>
              <Trophy className="w-10 h-10 mx-auto mb-2" />
              <span className="inline-block bg-white text-[#FF4D8D] text-xs font-bold px-3 py-1 rounded-full mb-3">Día 15</span>
              <h3 className="font-extrabold text-lg mb-2">Lee en voz alta</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.6 }} className="text-white/95">Te sorprende leyendo frases completas. Tú solo observas y sonríes. 🎉</p>
            </div>
          </div>

          <p className="text-center mt-8" style={{ color: "#555555", fontSize: "16px", lineHeight: 1.6 }}>
            No necesitas ser maestra.<br />
            No necesitas preparar nada especial.<br />
            Solo imprime y pon el material sobre la mesa.
          </p>
        </div>
      </section>

      {/* ═══ SECCIÓN 6 — GALERÍA DEL MATERIAL ═══ */}
      <section className={`bg-[#FFF0F5] ${SECTION_PAD}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-black text-center text-slate-900 mb-3">
            51 recursos listos para usar
          </h2>
          <p className="text-center text-[#444444] text-[18px]" style={{ marginBottom: "24px" }}>
            Cada actividad diseñada para que aprender se sienta como jugar
          </p>

          {/* Galería interactiva: imagen principal + miniaturas + lightbox */}
          <div className="max-w-3xl mx-auto">
            <button
              type="button"
              onClick={() => setLightbox(true)}
              className="block w-full bg-white rounded-2xl shadow-lg overflow-hidden cursor-zoom-in transition-transform hover:scale-[1.01]"
              aria-label={`Ampliar imagen: ${selected.label}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-pink-50">
                <img
                  key={selected.img}
                  src={selected.img}
                  alt={selected.label}
                  width={selected.w}
                  height={selected.h}
                  className="w-full h-full object-cover animate-fade-in"
                  loading="lazy"
                />
              </div>
              <p className="text-center font-bold text-slate-800 py-3 px-2 text-[16px]">
                {selected.label} <span className="text-[#FF4D8D] text-[13px]">🔍 Clic para ampliar</span>
              </p>
            </button>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4">
              {GALLERY_ITEMS.map((g, i) => (
                <button
                  key={g.label}
                  type="button"
                  onClick={() => setSelectedIdx(i)}
                  aria-label={`Ver ${g.label}`}
                  aria-current={i === selectedIdx}
                  className={`rounded-lg overflow-hidden bg-pink-50 border-2 transition-all ${i === selectedIdx ? "border-[#FF4D8D] shadow-md scale-[1.03]" : "border-transparent opacity-80 hover:opacity-100"}`}
                >
                  <img src={g.img} alt="" width={g.w} height={g.h} className="w-full aspect-square object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {lightbox && (
            <div
              onClick={() => setLightbox(false)}
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 animate-fade-in"
            >
              <button
                type="button"
                onClick={() => setLightbox(false)}
                aria-label="Cerrar"
                className="absolute top-4 right-4 bg-white text-slate-900 rounded-full p-2 shadow-lg hover:scale-105 transition"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selected.img}
                alt={selected.label}
                width={selected.w}
                height={selected.h}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </section>

      {/* ═══ SECCIÓN 7 — STACK DE VALOR ═══ */}
      <section className={`bg-white ${SECTION_PAD}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-black text-center text-slate-900 mb-3">
            ¿Qué incluye tu pack<br />"Mi Mundo de Letras"?
          </h2>
          <p className="text-center text-[#444444] text-[18px]" style={{ marginBottom: "24px" }}>
            Todo lo que tu hijo necesita para aprender a leer y escribir — listo para imprimir hoy
          </p>

          <div className="space-y-4 mb-10">
            {[
              { title: "Mega Pack — 51 Recursos Imprimibles", desc: "Fichas, tarjetas y actividades a todo color para practicar letras, sílabas y palabras organizadas por nivel de dificultad.", price: "$15.00" },
              { title: "Guía Completa Mi Mundo de Letras", desc: "Método paso a paso para aplicar desde el primer día sin necesitar ser maestra ni tener experiencia previa.", price: "$10.00" },
              { title: "Cuaderno de Lectoescritura", desc: "Trazos, sílabas y palabras organizadas por nivel para que tu hijo avance sin frustraciones.", price: "$7.00" },
            ].map((it) => (
              <div key={it.title} className="bg-white border-l-4 border-[#FF4D8D] rounded-xl shadow-md flex items-start gap-4" style={{ padding: "24px" }}>
                <Check className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-extrabold text-[18px] text-slate-900 mb-1">{it.title}</h3>
                  <p style={{ color: "#555555", fontSize: "16px", lineHeight: 1.6 }}>{it.desc}</p>
                </div>
                <span className="font-bold whitespace-nowrap" style={{ color: "#888888", fontSize: "16px", textDecoration: "line-through" }}>{it.price}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 mb-8" />

          <div className="bg-gradient-to-br from-[#FFE4ED] to-white rounded-2xl shadow-xl text-center" style={{ padding: "24px" }}>
            <p className="text-[16px] text-[#666666] mb-1">Si compraras cada cosa por separado:</p>
            <p className="text-[20px] text-[#666666] line-through mb-6">Valor total real: $32.00</p>
            <p className="text-[16px] font-bold text-[#FF4D8D] mb-1">🔥 Precio especial de lanzamiento</p>
            <p className="leading-none mb-3">
              <span className="font-fredoka" style={{ fontSize: "64px", color: "#EF4444" }}>$7</span>
              <span className="text-xl text-slate-600 font-bold ml-2">USD</span>
            </p>
            <div className="flex justify-center mb-2">
              <span className="inline-block font-bold" style={{ background: "#DCFCE7", color: "#16A34A", padding: "8px 16px", borderRadius: "20px" }}>
                ✅ Ahorras $25 — 78% de descuento
              </span>
            </div>
            <p className="text-[#666666] italic text-[16px]">Un café cuesta más que esto.</p>
          </div>

          <div className="flex flex-col items-center mt-8">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN}>
              ¡QUIERO EL PACK POR $7!
            </a>
            <TrustLine />
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN 8 — POR QUÉ CREÉ MI MUNDO DE LETRAS ═══ */}
      <section className={`bg-white ${SECTION_PAD}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-pink-100 text-[#FF4D8D] px-4 py-1 rounded-full text-sm font-bold mb-4">
              La historia detrás del pack
            </span>
            <h2 className="text-[32px] md:text-[40px] font-black text-slate-900 leading-tight">
              No lo hice para vender. Lo hice porque lo necesitaba.
            </h2>
          </div>

          <div className="space-y-5 text-[17px] md:text-[18px] text-slate-700 leading-relaxed">
            <p>Busqué. Comparé. Probé decenas de hojas sueltas que no llevaban a ningún lado.</p>
            <p>Lo que encontré no era práctico, no seguía un orden, o simplemente no funcionaba. Así que decidí crear el material que yo mismo hubiera querido encontrar desde el principio.</p>
            <p className="font-bold text-slate-900">Sin relleno. Sin complicaciones. Sin necesitar ser experto para usarlo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-pink-50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <p className="font-bold text-slate-900 text-[15px] mb-1">Progresión real</p>
              <p className="text-[15px] text-slate-600 leading-snug">De reconocer letras, a trazarlas, a escribirlas solo. Un paso a la vez.</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">🖨️</div>
              <p className="font-bold text-slate-900 text-[15px] mb-1">Listo desde el día uno</p>
              <p className="text-[15px] text-slate-600 leading-snug">Imprime y usa hoy mismo, sin preparar nada.</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">❤️</div>
              <p className="font-bold text-slate-900 text-[15px] mb-1">Pensado para disfrutarse</p>
              <p className="text-[15px] text-slate-600 leading-snug">Que enseñar a leer deje de sentirse como una batalla.</p>
            </div>
          </div>

          <p className="text-center mt-8 text-[18px] font-bold text-slate-900">Así nació Mi Mundo de Letras.</p>

          {/* Bloque de garantía visual destacado */}
          <div
            className="mt-10 text-center"
            style={{
              background: "linear-gradient(135deg, #F0FFF4 0%, #ffffff 100%)",
              border: "2px solid #86EFAC",
              borderRadius: "24px",
              padding: "32px 24px",
              boxShadow: "0 10px 30px -12px rgba(34,197,94,0.25)",
            }}
          >
            <div
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #22C55E, #86EFAC)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                boxShadow: "0 8px 20px -6px rgba(34,197,94,0.55)",
              }}
              aria-hidden="true"
            >
              <ShieldCheck className="text-white" style={{ width: "48px", height: "48px" }} />
            </div>
            <h3 className="font-black text-slate-900 mb-3" style={{ fontSize: "26px", lineHeight: 1.2 }}>
              🛡️ Pruébalo sin riesgo
            </h3>
            <p className="text-slate-700 max-w-xl mx-auto" style={{ fontSize: "17px", lineHeight: 1.6 }}>
              Si en <strong className="text-[#16A34A]">7 días</strong> sientes que no es lo que
              esperabas, te devolvemos tu dinero.
              <br />
              <span className="text-slate-600">Sin preguntas, sin complicaciones.</span>
            </p>
          </div>
        </div>
      </section>



      {/* ═══ SECCIÓN 10 — URGENCIA + OFERTA FINAL ═══ */}
      <section id="comprar" className={`bg-gradient-to-br from-[#FF6B9D] to-[#FFB347] ${SECTION_PAD}`}>
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-white/90 text-[#FF4D8D] px-4 py-1 rounded-full text-sm font-bold mb-6">
            ⏰ Precio especial de lanzamiento
          </span>
          <h2 className="text-[32px] md:text-[40px] font-black text-white leading-tight" style={{ marginBottom: "24px" }}>
            ¿Lista para ver a tu hijo<br />leer y escribir con confianza?
          </h2>

          <div className="bg-white rounded-[20px] shadow-2xl max-w-[500px] mx-auto" style={{ padding: "24px" }}>
            <Countdown />
            <p className="font-bold text-slate-800 mb-5">¡Aprovecha el 80% de descuento hoy!</p>

            <ul className="text-left space-y-3 mb-6">
              {[
                { name: "51 Recursos Imprimibles", price: "$15" },
                { name: "Guía Mi Mundo de Letras", price: "$10" },
                { name: "Cuaderno de Lectoescritura", price: "$7" },
              ].map((it) => (
                <li key={it.name} className="flex justify-between items-center text-[16px] border-b border-slate-100 pb-2">
                  <span className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> {it.name}</span>
                  <span className="line-through text-[#666666] font-bold">{it.price}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-200 mb-4" />

            <p className="text-[16px] text-[#666666]">Valor total:</p>
            <p className="text-[20px] text-[#666666] line-through font-bold mb-4">$32.00</p>

            <p className="text-[16px] font-bold text-[#FF4D8D]">🔥 Tú pagas hoy:</p>
            <p className="leading-none mb-6">
              <span className="font-fredoka text-[64px] md:text-[72px] text-[#FF4D8D]">$7</span>
              <span className="text-xl text-slate-600 font-bold ml-2">USD</span>
            </p>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-white text-lg font-black h-[60px] flex items-center justify-center rounded-xl shadow-lg transition-all hover:scale-[1.02] hover:opacity-95"
              style={{ background: "#22C55E" }}
            >
              ¡COMPRAR AHORA — $7 USD!
            </a>

            <p className="text-center font-semibold mt-3" style={{ color: "#EF4444", fontSize: "13px" }}>
              ⚠️ Precio de lanzamiento — vence pronto
            </p>

            <p className="text-red-600 text-[16px] font-semibold mt-4 leading-snug">
              ⚠️ Este precio vence pronto.<br />Cuando termine el lanzamiento vuelve a $32.
            </p>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-4 text-[16px] text-[#666666]">
              <span>🔒 Pago seguro</span>
              <span>⚡ Descarga inmediata</span>
              <span>🛡️ Garantía 7 días sin preguntas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN 11 — PÁRRAFO DE CIERRE ═══ */}
      <section className={`bg-white ${SECTION_PAD}`}>
        <div className="max-w-xl mx-auto text-center">
          <p style={{ fontSize: "22px", color: "#1a1a1a", fontWeight: 700, lineHeight: 1.5, marginBottom: "20px" }}>
            Miles de mamás ya usan este material<br />con sus hijos cada semana.
          </p>

          <p style={{ fontSize: "20px", color: "#444444", fontWeight: 400, lineHeight: 1.6, marginBottom: "24px" }}>
            El único requisito es tener una impresora<br />y querer que tu hijo disfrute aprendiendo.
          </p>

          <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "28px", color: "#FF4D8D", fontWeight: 800, fontStyle: "italic", lineHeight: 1.4, marginBottom: "32px" }}>
            Si eso eres tú —<br />ya tienes todo lo que necesitas.
          </p>


          <div className="flex flex-col items-center">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN}>
              ¡QUIERO EL PACK POR $7!
            </a>
          </div>

          <p className="text-center" style={{ fontSize: "14px", color: "#888888", fontStyle: "italic", marginTop: "16px" }}>
            Un café cuesta más que darle a tu hijo<br />las herramientas para leer solo.
          </p>
        </div>
      </section>

      {/* ═══ SECCIÓN 12 — FAQ ═══ */}
      <section className={`bg-[#FFF0F5] ${SECTION_PAD}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-black text-center text-slate-900" style={{ marginBottom: "24px" }}>
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Cómo recibo el material?",
                a: `Acceso instantáneo — en menos de 2 minutos tienes todo en tus manos.

① Haces clic en Comprar ahora
② Completas el pago seguro con tu tarjeta
③ Recibes un email con el enlace de descarga al instante — sin esperar
④ Descargas los archivos PDF y los imprimes desde cualquier impresora en casa

No hay envíos físicos. No hay apps que instalar. No hay contraseñas complicadas.

En el tiempo que tardas en preparar un café, ya tienes todo listo para la primera actividad.

(¿No ves el email? Revisa tu carpeta de spam — a veces se cuela ahí.)`,
              },
              {
                q: "¿Qué pasa si no me gusta?",
                a: `Tienes 7 días completos para decidir — sin riesgo.

Si abres el material y sientes que no es lo que esperabas, escríbeme directamente y te devuelvo cada centavo.

Sin formularios largos. Sin dar explicaciones. Sin dramas.

La garantía existe porque creo en lo que vendo — quiero que lo compruebes tú mismo sin miedo, y si no es lo que esperabas, te devuelvo cada centavo.`,
              },
            ].map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl shadow-sm" style={{ padding: "24px" }}>
                <summary className="flex justify-between items-center cursor-pointer font-bold text-[17px] text-slate-900">
                  {f.q}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-[#FF4D8D]" />
                </summary>
                <p className="mt-4 whitespace-pre-line" style={{ color: "#444444", fontSize: "16px", lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-6 text-center text-sm">
        © 2026 Mi Mundo de Letras | Todos los derechos reservados
      </footer>
    </div>
  );
};

export default LandingPage;
