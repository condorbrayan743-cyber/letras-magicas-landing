import { ChevronDown, ShieldCheck, Mail, CreditCard, Clock, Palette, TrendingUp, Star, BookOpen, Trophy, ArrowRight, Check } from "lucide-react";
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

const LandingPage = () => {
  return (
    <div className="landing-page min-h-screen bg-[#FFF0F5] text-slate-800">
      {/* BARRA DE URGENCIA */}
      <div className="bg-[#FF4D8D] text-white text-center py-2 px-4 text-sm font-bold">
        🔥 Solo por lanzamiento: Tu hijo leyendo en 15 días por $7 — después vuelve a $32. ⏰ Precio limitado
      </div>

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
      <section className="bg-white" style={{ paddingTop: "48px", paddingBottom: "48px", paddingLeft: "20px", paddingRight: "20px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          {/* ELEMENTO 1 — Pill tag */}
          <span
            style={{
              display: "inline-block",
              background: "#FFF0F5",
              color: "#FF4D8D",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              padding: "6px 18px",
              borderRadius: "999px",
              border: "1.5px solid #FFB6D9",
              marginBottom: "20px",
            }}
          >
            ✨ Esto es real
          </span>

          {/* ELEMENTO 2 — Título */}
          <h2 style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "42px", fontWeight: 900, color: "#1a1a1a", lineHeight: 1.1, marginBottom: "24px" }}>
            Imagina esto...
          </h2>

          {/* ELEMENTO 3 — Escena */}
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "19px", fontWeight: 400, color: "#555555", lineHeight: 2.0, marginBottom: "20px" }}>
            Son las 4 de la tarde.<br />
            Tu hijo se sienta solo a la mesa.<br />
            Sin que se lo pidas.
          </p>

          {/* ELEMENTO 4 — Línea de acción */}
          <div
            style={{
              background: "#F5F5F5",
              borderLeft: "4px solid #FF4D8D",
              borderRadius: "0 12px 12px 0",
              padding: "14px 20px",
              textAlign: "left",
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: "22px",
              fontWeight: 800,
              color: "#1a1a1a",
              marginBottom: "20px",
              lineHeight: 1.4,
            }}
          >
            Agarra una ficha.<br />
            Y empieza a leer en voz alta.
          </div>

          {/* ELEMENTO 5 — Separador */}
          <div style={{ width: "48px", height: "3px", background: "#FF4D8D", borderRadius: "999px", margin: "0 auto 20px" }} />

          {/* ELEMENTO 6 — Caja de dolor */}
          <div
            style={{
              background: "#FFF0F5",
              border: "1.5px solid #FFB6D9",
              borderRadius: "16px",
              padding: "20px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginBottom: "20px",
            }}
          >
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "20px", fontWeight: 900, color: "#CC2066", margin: 0 }}>Sin llantos.</p>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "20px", fontWeight: 900, color: "#CC2066", margin: 0 }}>Sin "mamá no puedo".</p>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "20px", fontWeight: 900, color: "#CC2066", margin: 0 }}>Sin esa cara de frustración</p>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: 700, color: "#AA3366", margin: 0 }}>que te parte el corazón.</p>
          </div>

          {/* ELEMENTO 7 — Separador */}
          <div style={{ width: "48px", height: "3px", background: "#FF4D8D", borderRadius: "999px", margin: "0 auto 20px" }} />

          {/* ELEMENTO 8 — Clímax */}
          <p style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: "38px", color: "#1a1a1a", letterSpacing: "-0.5px", lineHeight: 1.15, margin: 0 }}>
            Solo él. Leyendo. Sonriendo. Solo.
          </p>
          <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "15px", fontWeight: 700, color: "#888888", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: "8px", marginBottom: "20px" }}>
            sin que tú tengas que hacer nada
          </p>

          {/* ELEMENTO 9 — Línea de mamá */}
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "18px", fontWeight: 700, fontStyle: "italic", color: "#FF4D8D", lineHeight: 1.7, marginBottom: "20px" }}>
            Y tú — mirándolo desde la cocina<br />— con los ojos aguados.
          </p>

          {/* ELEMENTO 10 — Caja de credibilidad */}
          <div
            style={{
              background: "#F9F9F9",
              borderRadius: "14px",
              padding: "18px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "16px", fontStyle: "italic", color: "#888888", margin: 0 }}>Eso no es un sueño.</p>
            <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "20px", fontWeight: 800, color: "#1a1a1a", margin: 0 }}>Es lo que pasa en la semana 2.</p>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "16px", fontStyle: "italic", color: "#888888", margin: 0 }}>Y empieza con una decisión de</p>
            <p style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: "28px", color: "#FF4D8D", margin: 0 }}>$7 USD.</p>
          </div>

          {/* ELEMENTO 11 — Gancho de scroll */}
          <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "17px", fontWeight: 800, color: "#FF4D8D", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", margin: 0 }}>
            <span className="animate-arrow-bounce">↓</span>
            Sigue leyendo para ver cómo funciona
          </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { img: pack2, label: "Lectura de sílabas", w: 768, h: 681 },
              { img: pack5, label: "Numeración inicial", w: 784, h: 662 },
              { img: extra1, label: "Trazos y escritura", w: 938, h: 1041 },
              { img: extra4, label: "Tarjetas de vocabulario", w: 944, h: 879 },
              { img: extra5, label: "Juegos de memoria", w: 896, h: 1198 },
              { img: pack3, label: "Actividades a color", w: 1169, h: 800 },
            ].map((g) => (
              <div key={g.label} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-pink-50">
                  <img src={g.img} alt={g.label} width={g.w} height={g.h} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <p className="text-center font-bold text-slate-800 py-3 px-2 text-[16px]">{g.label}</p>
              </div>
            ))}
          </div>
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
              <span style={{ fontSize: "64px", fontWeight: 900, color: "#EF4444" }}>$7</span>
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

      {/* ═══ SECCIÓN 8 — TESTIMONIOS ═══ */}
      <section className={`bg-[#1a1a2e] ${SECTION_PAD}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-black text-center text-white mb-3">
            Mamás y maestras que ya lo viven
          </h2>
          <p className="text-center text-slate-300 text-[18px] mb-6">
            Capturas reales de mensajes de nuestras clientas ❤️
          </p>
          <div className="flex justify-center mb-10">
            <span className="inline-block bg-[#FF4D8D] text-white font-bold px-5 py-2 rounded-full text-sm">
              🎉 +200 familias ya están viendo resultados
            </span>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
            <img src={testimonios} alt="Capturas reales de mensajes de mamás y maestras" width={2000} height={1545} className="w-full h-auto block" loading="lazy" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { quote: "Mi hijo de 5 años lloraba con las tareas. Con este pack ahora él mismo me pide hacer las actividades. ¡Ya lee solo!", who: "Laura M.", role: "Mamá", color: "bg-rose-500" },
              { quote: "Como maestra, me ahorra horas de planificación. Los recursos son visualmente hermosos y efectivos.", who: "Andrea R.", role: "Maestra", color: "bg-orange-500" },
              { quote: "En dos semanas mi hija ya reconoce todas las letras. El material es divertido y muy fácil de imprimir.", who: "Camila S.", role: "Mamá", color: "bg-emerald-500" },
              { quote: "¡Excelente inversión! Lo uso con mis tres hijos y a todos les encanta. Vale muchísimo más de lo que cuesta.", who: "Patricia G.", role: "Mamá", color: "bg-sky-500" },
              { quote: "Las fichas son hermosas y los niños se enganchan al instante. Lo recomiendo 100% a otras maestras.", who: "Sofía L.", role: "Maestra", color: "bg-purple-500" },
              { quote: "Compré el pack y al día siguiente ya estaba imprimiendo. Mi peque por fin disfruta aprender a leer.", who: "Verónica T.", role: "Mamá", color: "bg-pink-500" },
            ].map((t) => (
              <div key={t.who} className="bg-white border-l-[3px] border-[#FF4D8D] rounded-xl shadow-md" style={{ padding: "24px" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-full ${t.color} text-white font-black flex items-center justify-center text-lg`}>
                    {t.who.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-tight">{t.who}</p>
                    <p className="text-xs text-[#FF4D8D] font-semibold">{t.role} ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="text-slate-700 italic text-[16px]">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN 9 — GARANTÍA ═══ */}
      <section className={`bg-[#F0FFF4] ${SECTION_PAD}`}>
        <div className="max-w-2xl mx-auto text-center">
          {/* Círculo degradado con escudo */}
          <div
            className="mx-auto mb-6 flex items-center justify-center"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FF4D8D, #FF8FAB)",
              boxShadow: "0 10px 30px rgba(255, 77, 141, 0.35)",
            }}
          >
            <span style={{ fontSize: "48px", lineHeight: 1, color: "white" }}>🛡️</span>
          </div>

          <h2 style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "36px", fontWeight: 900, color: "#1a1a1a", marginBottom: "24px", lineHeight: 1.15 }}>
            Garantía de satisfacción total<br />— 7 días completos
          </h2>

          <div className="bg-white rounded-2xl shadow-lg text-left" style={{ padding: "24px" }}>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "18px", fontWeight: 400, color: "#444444", lineHeight: 2.0, marginBottom: "16px" }}>
              Sé que tu tiempo vale oro.<br />
              Y que confiar en algo nuevo requiere valentía.
            </p>

            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "18px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.6, marginBottom: "16px" }}>
              Por eso tienes 7 días completos<br />
              para probarlo sin ningún riesgo.
            </p>

            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "18px", fontWeight: 400, color: "#444444", lineHeight: 1.6, marginBottom: "8px" }}>
              Si por cualquier razón el material<br />
              no cumple tus expectativas —
            </p>

            <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "24px", fontWeight: 900, color: "#1a1a1a", marginBottom: "20px" }}>
              te devuelvo cada centavo.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "20px", fontWeight: 900, color: "#1a1a1a", lineHeight: 1.8, margin: 0 }}>Sin preguntas.</p>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "20px", fontWeight: 900, color: "#1a1a1a", lineHeight: 1.8, margin: 0 }}>Sin formularios.</p>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "20px", fontWeight: 900, color: "#1a1a1a", lineHeight: 1.8, margin: 0 }}>Sin dramas.</p>
            </div>

            <div style={{ borderTop: "1px solid #FFB6D9", margin: "16px 0" }} />

            <p className="text-center" style={{ fontFamily: "'Baloo 2', sans-serif", color: "#FF4D8D", fontSize: "24px", fontWeight: 900, fontStyle: "italic", lineHeight: 1.4, marginTop: "12px" }}>
              O quedas feliz — o te devuelvo tu dinero.<br />Así de simple.
            </p>

            {/* Caja rosa destacada */}
            <div style={{ background: "#FFF0F5", borderRadius: "12px", padding: "12px 20px", margin: "8px 0", textAlign: "center" }}>
              <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: "22px", fontWeight: 900, color: "#FF4D8D", margin: 0, lineHeight: 1.3 }}>
                O quedas feliz — o te devuelvo tu dinero.
              </p>
              <p style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: "20px", color: "#FF4D8D", margin: "4px 0 0" }}>
                Así de simple.
              </p>
            </div>


            <p style={{ fontFamily: "'Nunito', sans-serif", color: "#888888", fontSize: "14px", fontStyle: "italic", marginTop: "16px", textAlign: "center" }}>
              (La garantía existe porque creo en lo que vendo. Y quiero que tú también lo compruebes sin miedo.)
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
              <span className="text-[64px] md:text-[72px] font-black text-[#FF4D8D]">$7</span>
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

          <p style={{ fontSize: "28px", color: "#FF4D8D", fontWeight: 900, fontStyle: "italic", lineHeight: 1.4, marginBottom: "32px" }}>
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

La garantía existe porque creo en lo que vendo. Y en todo el tiempo que llevo vendiendo este pack, los reembolsos han sido casi cero — porque el material habla por sí solo desde el momento en que lo abres.`,
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
