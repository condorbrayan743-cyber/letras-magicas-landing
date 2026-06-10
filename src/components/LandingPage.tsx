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
    <div className="min-h-screen bg-[#FFF0F5] text-slate-800">
      {/* BARRA DE URGENCIA */}
      <div className="bg-[#FF4D8D] text-white text-center py-2 px-4 text-sm font-bold">
        🔥 Solo por lanzamiento: Tu hijo leyendo en 15 días por $7 — después vuelve a $32. ⏰ Precio limitado
      </div>

      {/* ═══ SECCIÓN 1 — HERO ═══ */}
      <section className="bg-gradient-to-b from-[#FFE4ED] to-white py-20 px-4">
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
            <p className="text-sm text-slate-500 line-through">Valor real del pack: $32.00</p>
            <p className="text-[32px] font-black text-[#FF4D8D] my-1">🔥 HOY SOLO: $7 USD</p>
            <p className="text-xs text-slate-500">Precio especial de lanzamiento — por tiempo limitado</p>
          </div>

          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN}>
            ¡QUIERO EL PACK POR $7!
          </a>
          <TrustLine />
        </div>
      </section>

      {/* ═══ SECCIÓN 2 — PRUEBA VISUAL INMEDIATA ═══ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-pink-100 text-[#FF4D8D] px-4 py-1 rounded-full text-sm font-bold mb-6">
            Momentos reales ✨
          </span>
          <div className="max-w-[80%] mx-auto">
            <img
              src={heroShowcase.url}
              alt="Vista del pack Mi Mundo de Letras con material colorido listo para imprimir"
              width={1376}
              height={768}
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="eager"
            />
          </div>
          <p className="mt-5 text-[16px] text-slate-700 font-semibold">Así se ve en la mesa de tu hijo 👆</p>
          <p className="text-[14px] text-slate-500">Real · Colorido · Listo para imprimir desde casa</p>
        </div>
      </section>

      {/* ═══ SECCIÓN 3 — RESULTADO SOÑADO ═══ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[36px] font-black text-slate-900 mb-8">Imagina esto...</h2>
          <p className="text-[18px] md:text-[20px] text-[#444] leading-[1.8]">
            Tu hijo agarra una ficha solo.<br />
            Sin que se lo pidas.<br />
            Y empieza a leer en voz alta.<br /><br />
            Sin llantos. Sin "mamá no puedo".<br />
            Sin frustraciones.<br /><br />
            Solo él — aprendiendo y disfrutando<br />
            como si fuera un juego.
          </p>
          <div className="w-20 h-[2px] bg-[#FF4D8D] mx-auto my-8" />
          <p className="text-[18px] font-bold text-[#FF4D8D]">
            Eso es exactamente lo que reportan<br />las mamás que usan Mi Mundo de Letras.
          </p>
        </div>
      </section>

      {/* ═══ SECCIÓN 4 — PROBABILIDAD PERCIBIDA ═══ */}
      <section className="py-20 px-4 bg-[#FFF0F5]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm mx-auto text-center mb-12">
            <p className="text-sm text-slate-500">Familias que ya lo usan</p>
            <p className="text-[48px] font-black text-[#FF4D8D] leading-none my-2">+200</p>
            <p className="text-sm text-slate-500">y creciendo cada semana</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⏰", title: "Ahorra Horas", desc: "Material listo para imprimir. Olvídate de buscar en internet o preparar actividades desde cero." },
              { icon: "🎨", title: "100% Lúdico", desc: "Actividades visuales y juegos que mantienen la atención de tu hijo desde el minuto 1." },
              { icon: "📈", title: "Resultados Reales", desc: "Funciona incluso con niños que 'odian sentarse a estudiar'. Progreso visible desde la primera semana." },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl shadow-md p-6 text-center">
                <div className="text-5xl mb-3">{c.icon}</div>
                <h3 className="text-xl font-extrabold mb-2 text-slate-900">{c.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN 5 — TIEMPO DE DEMORA ═══ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-black text-center text-slate-900 mb-12">
            ¿Qué pasa en los primeros 15 días?
          </h2>

          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
            {/* Paso 1 */}
            <div className="bg-pink-50 rounded-xl p-6 text-center">
              <Star className="w-10 h-10 mx-auto text-[#FF4D8D] mb-2" />
              <span className="inline-block bg-white text-[#FF4D8D] text-xs font-bold px-3 py-1 rounded-full mb-3">Días 1 al 5</span>
              <h3 className="font-extrabold text-lg mb-2">Reconoce letras</h3>
              <p className="text-sm text-slate-600">Identifica letras y sílabas jugando con las fichas. Sin presión. Sin memorización forzada.</p>
            </div>
            <ArrowRight className="hidden md:block w-8 h-8 text-[#FF4D8D] self-center mx-auto" />
            <div className="md:hidden w-px h-6 bg-[#FF4D8D] mx-auto" />
            {/* Paso 2 */}
            <div className="bg-pink-50 rounded-xl p-6 text-center">
              <BookOpen className="w-10 h-10 mx-auto text-[#FF4D8D] mb-2" />
              <span className="inline-block bg-white text-[#FF4D8D] text-xs font-bold px-3 py-1 rounded-full mb-3">Días 6 al 10</span>
              <h3 className="font-extrabold text-lg mb-2">Forma palabras</h3>
              <p className="text-sm text-slate-600">Combina sílabas y forma sus primeras palabras solo, sin ayuda de mamá.</p>
            </div>
            <ArrowRight className="hidden md:block w-8 h-8 text-[#FF4D8D] self-center mx-auto" />
            <div className="md:hidden w-px h-6 bg-[#FF4D8D] mx-auto" />
            {/* Paso 3 */}
            <div className="bg-[#FF4D8D] text-white rounded-xl p-6 text-center">
              <Trophy className="w-10 h-10 mx-auto mb-2" />
              <span className="inline-block bg-white text-[#FF4D8D] text-xs font-bold px-3 py-1 rounded-full mb-3">Día 15</span>
              <h3 className="font-extrabold text-lg mb-2">Lee en voz alta</h3>
              <p className="text-sm text-white/95">Te sorprende leyendo frases completas. Tú solo observas y sonríes. 🎉</p>
            </div>
          </div>

          <p className="text-center text-slate-500 text-[15px] mt-10 leading-relaxed">
            No necesitas ser maestra.<br />
            No necesitas preparar nada especial.<br />
            Solo imprime y pon el material sobre la mesa.
          </p>
        </div>
      </section>

      {/* ═══ SECCIÓN 6 — GALERÍA DEL MATERIAL ═══ */}
      <section className="py-20 px-4 bg-[#FFF0F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-black text-center text-slate-900 mb-3">
            51 recursos listos para usar
          </h2>
          <p className="text-center text-slate-600 text-[18px] mb-12">
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
                <p className="text-center font-bold text-slate-800 py-3 px-2 text-[15px]">{g.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN 7 — STACK DE VALOR ═══ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-black text-center text-slate-900 mb-3">
            ¿Qué incluye tu pack<br />"Mi Mundo de Letras"?
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Todo lo que tu hijo necesita para aprender a leer y escribir — listo para imprimir hoy
          </p>

          <div className="space-y-4 mb-10">
            {[
              { title: "Mega Pack — 51 Recursos Imprimibles", desc: "Fichas, tarjetas y actividades a todo color para practicar letras, sílabas y palabras organizadas por nivel de dificultad.", price: "$15.00" },
              { title: "Guía Completa Mi Mundo de Letras", desc: "Método paso a paso para aplicar desde el primer día sin necesitar ser maestra ni tener experiencia previa.", price: "$10.00" },
              { title: "Cuaderno de Lectoescritura", desc: "Trazos, sílabas y palabras organizadas por nivel para que tu hijo avance sin frustraciones.", price: "$7.00" },
            ].map((it) => (
              <div key={it.title} className="bg-white border-l-4 border-[#FF4D8D] rounded-xl shadow-md p-6 flex items-start gap-4">
                <Check className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-extrabold text-[18px] text-slate-900 mb-1">{it.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{it.desc}</p>
                </div>
                <span className="text-slate-400 line-through font-bold whitespace-nowrap">{it.price}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 mb-8" />

          {/* Caja resumen de valor */}
          <div className="bg-gradient-to-br from-[#FFE4ED] to-white rounded-2xl shadow-xl p-10 text-center">
            <p className="text-sm text-slate-500 mb-1">Si compraras cada cosa por separado:</p>
            <p className="text-[20px] text-slate-400 line-through mb-6">Valor total real: $32.00</p>
            <p className="text-sm font-bold text-[#FF4D8D] mb-1">🔥 Precio especial de lanzamiento</p>
            <p className="leading-none mb-3">
              <span className="text-[64px] font-black text-[#FF4D8D]">$7</span>
              <span className="text-xl text-slate-600 font-bold ml-2">USD</span>
            </p>
            <p className="text-green-600 font-bold text-sm mb-2">✅ Ahorras $25 — 78% de descuento</p>
            <p className="text-slate-500 italic text-sm">Un café cuesta más que esto.</p>
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
      <section className="py-20 px-4 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-black text-center text-white mb-3">
            Mamás y maestras que ya lo viven
          </h2>
          <p className="text-center text-slate-300 mb-6">
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
              <div key={t.who} className="bg-white border-l-[3px] border-[#FF4D8D] rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-full ${t.color} text-white font-black flex items-center justify-center text-lg`}>
                    {t.who.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-tight">{t.who}</p>
                    <p className="text-xs text-[#FF4D8D] font-semibold">{t.role} ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="text-slate-700 italic text-[15px]">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN 9 — GARANTÍA ═══ */}
      <section className="py-20 px-4 bg-[#F0FFF4]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-[64px] mb-4">🛡️</div>
          <h2 className="text-[28px] md:text-[36px] font-black text-slate-900 mb-8 leading-tight">
            Garantía de satisfacción total<br />— 7 días completos
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <p className="text-[17px] text-slate-700 leading-[1.8]">
              Sé que tu tiempo vale oro.<br />
              Y que confiar en algo nuevo requiere valentía.<br /><br />
              Por eso tienes 7 días completos<br />
              para probarlo sin ningún riesgo.<br /><br />
              Si por cualquier razón el material<br />
              no cumple tus expectativas —<br />
              te devuelvo cada centavo.<br /><br />
              Sin preguntas.<br />Sin formularios.<br />Sin dramas.
            </p>
            <div className="border-t border-slate-200 my-6" />
            <p className="font-bold text-[#FF4D8D] text-[16px]">
              O quedas feliz — o te devuelvo tu dinero.<br />Así de simple.
            </p>
            <p className="text-slate-500 italic text-sm mt-4">
              (La garantía existe porque creo en lo que vendo. Y quiero que tú también lo compruebes sin miedo.)
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN 10 — URGENCIA + OFERTA FINAL ═══ */}
      <section id="comprar" className="py-20 px-4 bg-gradient-to-br from-[#FF6B9D] to-[#FFB347]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-white/90 text-[#FF4D8D] px-4 py-1 rounded-full text-sm font-bold mb-6">
            ⏰ Precio especial de lanzamiento
          </span>
          <h2 className="text-[32px] md:text-[40px] font-black text-white leading-tight mb-10">
            ¿Lista para ver a tu hijo<br />leer y escribir con confianza?
          </h2>

          <div className="bg-white rounded-[20px] shadow-2xl p-8 md:p-10 max-w-[500px] mx-auto">
            <p className="font-bold text-slate-800 mb-5">¡Aprovecha el 80% de descuento hoy!</p>

            <ul className="text-left space-y-3 mb-6">
              {[
                { name: "51 Recursos Imprimibles", price: "$15" },
                { name: "Guía Mi Mundo de Letras", price: "$10" },
                { name: "Cuaderno de Lectoescritura", price: "$7" },
              ].map((it) => (
                <li key={it.name} className="flex justify-between items-center text-[15px] border-b border-slate-100 pb-2">
                  <span className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> {it.name}</span>
                  <span className="line-through text-slate-400 font-bold">{it.price}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-200 mb-4" />

            <p className="text-sm text-slate-500">Valor total:</p>
            <p className="text-[20px] text-slate-400 line-through font-bold mb-4">$32.00</p>

            <p className="text-sm font-bold text-[#FF4D8D]">🔥 Tú pagas hoy:</p>
            <p className="leading-none mb-6">
              <span className="text-[64px] md:text-[72px] font-black text-[#FF4D8D]">$7</span>
              <span className="text-xl text-slate-600 font-bold ml-2">USD</span>
            </p>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#22C55E] hover:bg-[#1eb556] text-white text-lg font-black h-[60px] flex items-center justify-center rounded-xl shadow-lg transition-all hover:scale-[1.02]"
            >
              ¡COMPRAR AHORA!
            </a>

            <p className="text-red-600 text-sm font-semibold mt-4 leading-snug">
              ⚠️ Este precio vence pronto.<br />Cuando termine el lanzamiento vuelve a $32.
            </p>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-4 text-[12px] text-slate-500">
              <span>🔒 Pago seguro</span>
              <span>⚡ Descarga inmediata</span>
              <span>🛡️ Garantía 7 días sin preguntas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN 11 — PÁRRAFO DE CIERRE ═══ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[18px] text-[#444] leading-[1.8] mb-8">
            Miles de mamás ya usan este material<br />
            con sus hijos cada semana.<br /><br />
            El único requisito es tener una impresora<br />
            y querer que tu hijo disfrute aprendiendo.<br /><br />
            Si eso eres tú —<br />
            ya tienes todo lo que necesitas.
          </p>

          <div className="flex flex-col items-center">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN}>
              ¡QUIERO EL PACK POR $7!
            </a>
          </div>

          <p className="text-slate-500 italic text-sm mt-6">
            Un café cuesta más que darle a tu hijo<br />las herramientas para leer solo.
          </p>
        </div>
      </section>

      {/* ═══ SECCIÓN 12 — FAQ ═══ */}
      <section className="py-20 px-4 bg-[#FFF0F5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-black text-center text-slate-900 mb-10">
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
              <details key={f.q} className="group bg-white rounded-2xl p-5 shadow-sm">
                <summary className="flex justify-between items-center cursor-pointer font-bold text-[17px] text-slate-900">
                  {f.q}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-[#FF4D8D]" />
                </summary>
                <p className="mt-4 text-slate-700 whitespace-pre-line leading-relaxed">{f.a}</p>
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
