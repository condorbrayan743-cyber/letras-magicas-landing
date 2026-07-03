import { useEffect, useState } from "react";
import { ChevronDown, ShieldCheck, Mail, CreditCard, Clock, Palette, TrendingUp, Star, BookOpen, Trophy, ArrowRight, Check, X } from "lucide-react";
import pack1 from "@/assets/pack-1.webp";
import pack2 from "@/assets/pack-2.webp";
import pack3 from "@/assets/pack-3.webp";
import pack5 from "@/assets/pack-5.webp";
import pack7 from "@/assets/foto-3.webp";
import testimonios from "@/assets/testimonios.png";
import heroShowcase from "@/assets/hero-showcase.webp.asset.json";
import extra1 from "@/assets/extra-1.webp";
import extra4 from "@/assets/extra-4.webp";
import extra5 from "@/assets/extra-5.webp";
import escenaNino from "@/assets/escena-nino.jpg";
import accionMama from "@/assets/accion-mama.jpg";
import mamaCocina from "@/assets/mama-cocina.jpg";

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
          <h1 className="text-[36px] md:text-[56px] font-black text-slate-900 leading-[1.1] mb-5">
            Tu hijo leyendo y escribiendo con <span className="text-[#FF4D8D]">Confianza</span> en 15 días
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#444] max-w-2xl mx-auto mb-8 leading-relaxed">
            Sin preparar nada. Sin improvisar.<br />
            Tú imprimes — el material hace el resto.
          </p>

          {/* Caja ancla de precio */}
          <div className="max-w-[420px] mx-auto bg-white border-2 border-[#FF4D8D] rounded-2xl shadow-lg p-6 mb-6">
            <p className="text-[16px] text-[#666666] line-through">Valor real del pack: $32.00</p>
            <p className="text-[32px] font-black text-[#FF4D8D] my-1">🔥 HOY SOLO: $7 USD</p>
            <p className="text-[16px] text-[#666666]">Precio especial de lanzamiento — por tiempo limitado</p>
          </div>

          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN}>
            ¡QUIERO EL PACK POR $7!
          </a>
          <TrustLine />
        </div>
      </section>

      {/* ═══ SECCIÓN 2 — PRUEBA VISUAL INMEDIATA ═══ */}
      {/* Sin padding-top: 0px gap con el botón anterior */}
      <section className="pt-0 pb-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-pink-100 text-[#FF4D8D] px-4 py-1 rounded-full text-sm font-bold mb-6">
            Momentos reales ✨
          </span>
          <div className="max-w-full md:max-w-[75%] mx-auto">
            <span className="inline-block bg-[#FF4D8D] text-white text-[13px] font-bold px-4 py-1.5 rounded-full" style={{ marginBottom: "8px" }}>
              📦 Esto es lo que recibes
            </span>
            <img
              src={heroShowcase.url}
              alt="Vista del pack Mi Mundo de Letras con material colorido listo para imprimir"
              width={1376}
              height={768}
              className="w-full h-auto"
              style={{ borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", border: "2px solid #FFB6D9" }}
              loading="eager"
            />
          </div>
          <p className="mt-5 text-[16px] text-slate-700 font-semibold">Así se ve en la mesa de tu hijo 👆</p>
          <p className="text-[16px] text-[#666666]">Real · Colorido · Listo para imprimir desde casa</p>
        </div>
      </section>

      {/* ═══ SECCIÓN 3 — RESULTADO SOÑADO (Imagina esto...) ═══ */}
      <section style={{ background: "#FFF0F5", padding: "48px 20px" }}>
        <style>{`
          @keyframes bb{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}
          @keyframes pulseGlow{0%,100%{box-shadow:0 8px 24px -8px rgba(255,77,141,.55)}50%{box-shadow:0 12px 32px -6px rgba(255,77,141,.85)}}
        `}</style>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* BLOQUE 1 — Encabezado compacto */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <span style={{
              display: "inline-block", background: "#FFE4EF", color: "#FF4D8D",
              fontFamily: "'Nunito', sans-serif", fontSize: "11px", fontWeight: 900,
              textTransform: "uppercase", letterSpacing: "0.12em",
              padding: "6px 16px", borderRadius: "999px", marginBottom: "10px",
            }}>
              ✨ Esto es real
            </span>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif", fontSize: "44px", fontWeight: 900,
              color: "#111827", lineHeight: 1.05, margin: 0,
            }}>
              Imagina esto<span style={{ color: "#FF4D8D" }}>...</span>
            </h2>
          </div>

          {/* BLOQUE 2 — Fila 2 tarjetas anchas */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "16px", marginBottom: "16px" }}>
            {/* Tarjeta La Escena */}
            <div style={{
              background: "#FFFFFF", borderRadius: "20px", overflow: "hidden",
              boxShadow: "0 4px 14px -6px rgba(255,77,141,.18)",
              display: "flex", minHeight: "220px",
            }}>
              <img src={escenaNino} alt="Niño leyendo" loading="lazy" width={1024} height={1024}
                style={{ width: "44%", objectFit: "cover", flexShrink: 0 }} />
              <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                <span style={{
                  display: "inline-block", alignSelf: "flex-start",
                  background: "#FF4D8D", color: "#fff",
                  fontFamily: "'Nunito', sans-serif", fontSize: "10px", fontWeight: 900,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  padding: "5px 12px", borderRadius: "999px", marginBottom: "12px",
                }}>La escena</span>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "16px", fontWeight: 700, color: "#111827", lineHeight: 1.55, margin: 0 }}>
                  Son las 4 de la tarde.<br />
                  Tu hijo se sienta solo.<br />
                  Sin que se lo pidas.
                </p>
              </div>
            </div>
            {/* Tarjeta La Acción */}
            <div style={{
              background: "#111827", borderRadius: "20px", overflow: "hidden",
              boxShadow: "0 4px 14px -6px rgba(17,24,39,.35)",
              display: "flex", minHeight: "220px",
            }}>
              <img src={accionMama} alt="Mamá acompañando" loading="lazy" width={1024} height={1024}
                style={{ width: "44%", objectFit: "cover", flexShrink: 0 }} />
              <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "22px", fontWeight: 900, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
                  Agarra una ficha.
                </p>
                <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "22px", fontWeight: 900, color: "#FF8FAB", margin: "6px 0 0", lineHeight: 1.2 }}>
                  Y empieza a leer en voz alta.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 3 — Fila 3 tarjetas pequeñas */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "16px", marginBottom: "32px" }}>
            {[
              { emoji: "😭", text: "Sin llantos." },
              { emoji: "🤗", text: "Sin mamá no puedo." },
              { emoji: "💔", text: "Sin esa cara que te parte el corazón." },
            ].map((it, i) => (
              <div key={i} style={{
                background: "#FFFFFF", borderRadius: "20px",
                padding: "20px 22px", display: "flex", alignItems: "center", gap: "16px",
                boxShadow: "0 2px 10px -4px rgba(255,77,141,.18)",
              }}>
                <div style={{
                  fontSize: "40px", lineHeight: 1, flexShrink: 0,
                  width: "60px", height: "60px", borderRadius: "16px",
                  background: "#FFF0F5", display: "flex", alignItems: "center", justifyContent: "center",
                }}>{it.emoji}</div>
                <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "17px", fontWeight: 800, color: "#111827", margin: 0, lineHeight: 1.3 }}>
                  {it.text}
                </p>
              </div>
            ))}
          </div>

          {/* BLOQUE 4 — Separador + clímax */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{ width: "56px", height: "3px", background: "#FF4D8D", borderRadius: "999px", margin: "0 auto 20px" }} />
            <h3 style={{
              fontFamily: "'Baloo 2', sans-serif", fontWeight: 900,
              fontSize: "clamp(28px, 4vw, 44px)", color: "#111827",
              lineHeight: 1.1, margin: 0, letterSpacing: "-0.5px",
            }}>
              Solo <span style={{ color: "#FF4D8D" }}>él</span>. Leyendo. Sonriendo. Solo.
            </h3>
            <p style={{
              fontFamily: "'Nunito', sans-serif", fontSize: "12px", fontWeight: 900,
              color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.18em",
              marginTop: "10px",
            }}>
              Sin que tú tengas que hacer nada 💗
            </p>
          </div>

          {/* BLOQUE 5 — Fila 2 tarjetas cierre */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "16px", marginBottom: "28px" }}>
            {/* Recompensa */}
            <div style={{
              background: "#FFFFFF", borderRadius: "20px", overflow: "hidden",
              boxShadow: "0 4px 14px -6px rgba(255,77,141,.18)",
              display: "flex", minHeight: "240px",
            }}>
              <img src={mamaCocina} alt="Mamá en la cocina" loading="lazy" width={1024} height={1024}
                style={{ width: "46%", objectFit: "cover", flexShrink: 0 }} />
              <div style={{ padding: "22px 24px", display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
                <div style={{
                  background: "#FFF0F5", borderRadius: "20px",
                  padding: "18px 20px", position: "relative",
                  border: "1.5px solid #FFD4E5",
                }}>
                  <p style={{
                    fontFamily: "'Baloo 2', sans-serif", fontSize: "17px", fontWeight: 800,
                    color: "#CC2066", lineHeight: 1.4, margin: 0, textAlign: "center",
                  }}>
                    Y tú — mirándolo desde la cocina — con los ojos aguados. 💗
                  </p>
                </div>
              </div>
            </div>
            {/* Oferta */}
            <div style={{
              background: "linear-gradient(135deg,#FFFFFF 0%,#FFF7FB 100%)",
              borderRadius: "20px", padding: "28px 24px",
              boxShadow: "0 4px 14px -6px rgba(255,77,141,.18)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center",
              minHeight: "240px",
            }}>
              <div style={{ fontSize: "32px", marginBottom: "4px" }}>🌙☁️</div>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontStyle: "italic", color: "#6B7280", margin: "2px 0" }}>
                Eso no es un sueño.
              </p>
              <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "22px", fontWeight: 900, color: "#111827", margin: "2px 0 8px" }}>
                Pasa en la semana 2.
              </p>
              <div style={{ width: "32px", height: "2px", background: "#FF4D8D", borderRadius: "999px", margin: "4px 0 10px" }} />
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: "#6B7280", margin: 0 }}>Empieza con</p>
              <p style={{
                fontFamily: "'Fredoka One', sans-serif", fontSize: "52px",
                color: "#FF4D8D", margin: "2px 0 0", lineHeight: 1,
              }}>
                $7 <span style={{ fontSize: "26px" }}>USD</span>
              </p>
            </div>
          </div>

          {/* BLOQUE 6 — CTA + scroll cue */}
          <div style={{ textAlign: "center" }}>
            <a href={CHECKOUT_URL} style={{
              display: "inline-block", background: "#FF4D8D", color: "#FFFFFF",
              fontFamily: "'Baloo 2', sans-serif", fontWeight: 900, fontSize: "18px",
              letterSpacing: "0.04em", padding: "16px 38px", borderRadius: "999px",
              textDecoration: "none", animation: "pulseGlow 2.4s ease-in-out infinite",
            }}>
              QUIERO EMPEZAR AHORA
            </a>
            <p style={{
              fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700,
              color: "#6B7280", marginTop: "14px", display: "flex",
              alignItems: "center", justifyContent: "center", gap: "6px",
            }}>
              <span style={{ display: "inline-block", animation: "bb 1.4s ease-in-out infinite" }}>↓</span>
              Sigue leyendo para ver cómo funciona
            </p>
          </div>
        </div>
      </section>




      {/* ═══ SECCIÓN 4 — PROBABILIDAD PERCIBIDA ═══ */}
      <section className={`bg-[#FFF0F5] ${SECTION_PAD}`} style={{ paddingTop: "32px" }}>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm mx-auto text-center mb-10">
            <p className="text-[16px] text-[#666666]">Familias que ya lo usan</p>
            <p className="text-[48px] font-black text-[#FF4D8D] leading-none my-2">+200</p>
            <p className="text-[16px] text-[#666666]">y creciendo cada semana</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⏰", title: "Ahorra Horas", desc: "Material listo para imprimir. Olvídate de buscar en internet o preparar actividades desde cero." },
              { icon: "🎨", title: "100% Lúdico", desc: "Actividades visuales y juegos que mantienen la atención de tu hijo desde el minuto 1." },
              { icon: "📈", title: "Resultados Reales", desc: "Funciona incluso con niños que 'odian sentarse a estudiar'. Progreso visible desde la primera semana." },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl shadow-md text-center" style={{ padding: "24px" }}>
                <div className="text-5xl mb-3">{c.icon}</div>
                <h3 className="text-xl font-extrabold mb-2 text-slate-900">{c.title}</h3>
                <p style={{ color: "#555555", fontSize: "16px", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Por qué creé <span className="text-[#FF4D8D]">Mi Mundo de Letras</span>
            </h2>
          </div>

          <div className="space-y-5 text-[17px] md:text-[18px] text-slate-700 leading-relaxed">
            <p>
              Investigué a fondo qué materiales realmente funcionan para enseñar a leer y escribir,
              porque quería algo <strong>práctico, sin complicaciones</strong>, y que cualquier padre,
              madre o maestro pudiera usar sin preparación previa.
            </p>
            <p>
              Cada hoja sigue una progresión pensada para que el aprendizaje sea gradual:
              primero <strong>reconocimiento de letras</strong>, luego <strong>trazo guiado</strong>,
              después <strong>práctica libre</strong> — todo listo para imprimir y usar el mismo día
              que lo descargas.
            </p>
            <p>
              Así nació <em>Mi Mundo de Letras</em>: un pack pensado para que enseñar a leer deje de
              ser una batalla, y se convierta en un momento que disfrutan juntos.
            </p>
          </div>

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


      {/* ═══ SECCIÓN 9 — GARANTÍA ═══ */}
      <section style={{ padding: "0 16px" }}>
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            background: "#F0FFF4",
            borderRadius: "20px",
            padding: "40px 16px",
          }}
        >
          {/* ELEMENTO 1 — ÍCONO */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FF4D8D, #FF8FAB)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <span style={{ fontSize: "36px" }}>🛡️</span>
          </div>

          {/* ELEMENTO 2 — TÍTULO */}
          <h2
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: "28px",
              fontWeight: 900,
              color: "#1a1a1a",
              lineHeight: 1.15,
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Garantía total
            <br />
            <span style={{ color: "#FF4D8D" }}>7 días — sin preguntas</span>
          </h2>

          {/* ELEMENTO 3 — GRID 2 COLUMNAS */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "10px", marginBottom: "10px" }}>
            {/* Tarjeta izquierda — Tu riesgo */}
            <div style={{ background: "#1a1a1a", borderRadius: "14px", padding: "16px 14px", textAlign: "center" }}>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "10px", fontWeight: 900, textTransform: "uppercase", color: "#FF8FAB", letterSpacing: "0.08em", marginBottom: "6px" }}>
                Tu riesgo
              </p>
              <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "18px", fontWeight: 900, color: "#ffffff", lineHeight: 1.4, margin: 0 }}>
                Confiar en algo nuevo{" "}
                <span style={{ color: "#FF8FAB" }}>requiere valentía.</span>
              </p>
            </div>
            {/* Tarjeta derecha — Mi promesa */}
            <div style={{ background: "#ffffff", border: "1.5px solid #FFB6D9", borderRadius: "14px", padding: "16px 14px", textAlign: "center" }}>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "10px", fontWeight: 900, textTransform: "uppercase", color: "#FF4D8D", letterSpacing: "0.08em", marginBottom: "6px" }}>
                Mi promesa
              </p>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: 700, color: "#333333", lineHeight: 1.5, margin: 0 }}>
                Por eso tienes{" "}
                <span style={{ color: "#FF4D8D", fontWeight: 900 }}>7 días completos</span>{" "}
                para probarlo sin ningún riesgo.
              </p>
            </div>
          </div>

          {/* ELEMENTO 4 — GRID 3 COLUMNAS */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "10px", marginBottom: "10px" }}>
            <div style={{ background: "#FFF0F5", border: "1.5px solid #FFB6D9", borderRadius: "14px", padding: "14px 12px", textAlign: "center" }}>
              <div style={{ fontSize: "26px", marginBottom: "8px" }}>❌</div>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 900, color: "#CC2066", margin: 0 }}>Sin preguntas.</p>
            </div>
            <div style={{ background: "#FFF0F5", border: "1.5px solid #FFB6D9", borderRadius: "14px", padding: "14px 12px", textAlign: "center" }}>
              <div style={{ fontSize: "26px", marginBottom: "8px" }}>📋</div>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 900, color: "#CC2066", margin: 0 }}>Sin formularios.</p>
            </div>
            <div style={{ background: "#FFF0F5", border: "1.5px solid #FFB6D9", borderRadius: "14px", padding: "14px 12px", textAlign: "center" }}>
              <div style={{ fontSize: "26px", marginBottom: "8px" }}>🎭</div>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 900, color: "#CC2066", margin: 0 }}>Sin dramas.</p>
            </div>
          </div>

          {/* ELEMENTO 5 — SEPARADOR */}
          <div style={{ width: "40px", height: "3px", background: "#FF4D8D", borderRadius: "999px", margin: "14px auto" }} />

          {/* ELEMENTO 6 — CLÍMAX */}
          <p
            style={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "26px",
              color: "#1a1a1a",
              lineHeight: 1.2,
              textAlign: "center",
              marginBottom: "4px",
            }}
          >
            Si el material no cumple —
            <br />
            te devuelvo cada centavo.
          </p>
          <p
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              color: "#aaaaaa",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            así de fácil, así de rápido
          </p>

          {/* ELEMENTO 7 — TARJETA DE CIERRE */}
          <div style={{ background: "#FF4D8D", borderRadius: "14px", padding: "18px", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: "18px",
                fontWeight: 900,
                fontStyle: "italic",
                color: "#ffffff",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              O quedas feliz con tu hijo leyendo solo.
            </p>
            <p
              style={{
                fontFamily: "'Fredoka One', sans-serif",
                fontSize: "22px",
                color: "#ffffff",
                marginTop: "4px",
                lineHeight: 1.3,
              }}
            >
              O te devuelvo tu dinero. Así de simple.
            </p>
          </div>

          {/* ELEMENTO 8 — NOTA FINAL */}
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "12px",
              fontStyle: "italic",
              color: "#888888",
              marginTop: "14px",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            (La garantía existe porque creo en lo que vendo. Y quiero que tú también lo compruebes sin miedo.)
          </p>
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
