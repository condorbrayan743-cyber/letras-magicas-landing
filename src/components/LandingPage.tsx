import { Check, Clock, Palette, TrendingUp, ChevronDown, ShieldCheck, Mail, CreditCard } from "lucide-react";
import pack1 from "@/assets/pack-1.png";
import pack2 from "@/assets/pack-2.png";
import pack3 from "@/assets/pack-3.png";
import pack4 from "@/assets/foto-1.png";
import pack5 from "@/assets/pack-5.png";
import pack6 from "@/assets/foto-2.png";
import pack7 from "@/assets/foto-3.png";
import testimonios from "@/assets/testimonios.png";
import heroShowcase from "@/assets/hero-showcase.png";
import extra1 from "@/assets/extra-1.png";
import extra2 from "@/assets/extra-2.png";
import extra3 from "@/assets/extra-3.png";
import extra4 from "@/assets/extra-4.png";
import extra5 from "@/assets/extra-5.png";
import benefitsBanner from "@/assets/benefits-banner.webp.asset.json";

const LandingPage = () => {
  const items = [
    { name: "51 Recursos Imprimibles", price: "$15.00" },
    { name: 'Guía "Mi Mundo de Letras"', price: "$10.00" },
    { name: "Cuaderno de Lectoescritura", price: "$7.00" },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-slate-800">
      {/* BARRA DE URGENCIA */}
      <div className="bg-rose-600 text-white text-center py-2 px-4 text-sm font-bold">
        🔥 ¡OFERTA POR TIEMPO LIMITADO! Acceso de por vida por solo $7.
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-pink-100 to-rose-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white text-pink-600 px-4 py-1 rounded-full text-sm font-bold shadow mb-6">
            Método 100% Práctico 🚀
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            Tu hijo leyendo y escribiendo con <span className="text-rose-600">Confianza</span> en 15 días
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-3 max-w-2xl mx-auto">
            El sistema diseñado para madres que quieren ver a sus hijos triunfar sin batallas ni lágrimas.
          </p>
          <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Con este pack de más de 51 recursos listos para <strong>IMPRIMIR</strong> lo podrás lograr.
          </p>
          <div className="max-w-xs sm:max-w-md mx-auto mb-8">
            <img
              src={heroShowcase}
              alt="Vista previa del pack Mi Mundo de Letras con material imprimible"
              className="w-full h-auto rounded-2xl shadow-xl"
              loading="eager"
            />
          </div>
          <a
            href="https://pay.hotmart.com/A105742687W?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white text-xl md:text-2xl font-black px-10 py-5 rounded-full shadow-xl animate-bounce-soft"
          >
            ¡QUIERO EL PACK POR $7!
          </a>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-slate-700">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-600" /> Pago seguro</span>
            <span className="flex items-center gap-1"><Mail className="w-4 h-4 text-green-600" /> Acceso instantáneo</span>
            <span className="flex items-center gap-1"><CreditCard className="w-4 h-4 text-green-600" /> Un solo pago</span>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { Icon: Clock, title: "Ahorra Horas", desc: "Material listo para imprimir. Olvídate de buscar en internet." },
            { Icon: Palette, title: "100% Lúdico", desc: "Actividades visuales y juegos que mantienen su atención." },
            { Icon: TrendingUp, title: "Resultados Reales", desc: "Progreso visible desde la primera semana de uso." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="text-center p-6 rounded-2xl bg-pink-50 shadow-sm">
              <Icon className="w-12 h-12 mx-auto text-pink-500 mb-4" />
              <h3 className="text-xl font-extrabold mb-2">{title}</h3>
              <p className="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE 1 */}
      <section className="py-12 px-4 bg-pink-50">
        <div className="max-w-3xl mx-auto">
          <img src={pack1} alt="Mega Pack Numeración Inicial" className="w-full h-auto rounded-3xl shadow-xl" loading="lazy" />
        </div>
      </section>

      {/* MOMENTOS REALES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
            Momentos reales ✨
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-3">Niños aprendiendo y disfrutando</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Así se ve el material en acción: actividades coloridas, divertidas y fáciles de imprimir desde casa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-pink-100 to-rose-100 md:col-span-2">
              <img src={extra1} alt="Niño jugando con material imprimible" className="w-full h-auto object-contain" loading="lazy" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg bg-white">
              <img src={extra2} alt="Niño practicando trazos de números" className="w-full h-auto object-contain" loading="lazy" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg bg-white">
              <img src={extra3} alt="Tarjetas de números y conteo" className="w-full h-auto object-contain" loading="lazy" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg bg-white md:col-span-2">
              <img src={extra4} alt="Tarjetas de sílabas con imágenes" className="w-full h-auto object-contain" loading="lazy" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg bg-white md:col-span-2">
              <img src={extra5} alt="Aprende a contar con tarjetas divertidas" className="w-full h-auto object-contain" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTO */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-3">¿Qué incluye tu pack "Mi Mundo de Letras"?</h2>
          <p className="text-slate-600 mb-10">Material visual de alta calidad listo para descargar</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: pack5, title: "Mega Pack Numeración Inicial", desc: "Material colorido para aprender los números" },
              { img: pack2, title: "Collage Infantil de Aprendizaje", desc: "Sílabas, sonidos y trazos divertidos" },
              { img: pack3, title: "Recursos Imprimibles", desc: "Fichas, tarjetas y actividades listas para usar" },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-56 overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-lg">{c.title}</h3>
                  <p className="text-slate-600 text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIO */}
      <section className="py-12 px-4 bg-gradient-to-br from-pink-200 to-rose-300">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
            ¿Lista para ver a tu hijo leer y escribir? 💖
          </h2>
          <p className="text-slate-700 mb-6">Llévate el pack completo hoy por solo $7.</p>
          <a
            href="https://pay.hotmart.com/A105742687W?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white text-xl font-black px-10 py-4 rounded-full shadow-xl animate-bounce-soft"
          >
            ¡QUIERO MI PACK AHORA!
          </a>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">Mamás y maestras felices</h2>
          <p className="text-center text-slate-600 mb-10">Cientos de familias ya están viendo resultados</p>

          <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={testimonios}
              alt="Reseñas reales de mamás y maestras"
              className="w-full h-auto block text-justify px-[15px]"
              
              loading="lazy"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mb-10 italic">Capturas reales de mensajes de nuestras clientas ❤️</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "Mi hijo de 5 años lloraba con las tareas. Con este pack ahora él mismo me pide hacer las actividades. ¡Ya lee solo!", who: "Laura M.", role: "Mamá", color: "bg-rose-500" },
              { quote: "Como maestra, me ahorra horas de planificación. Los recursos son visualmente hermosos y efectivos para mis alumnos.", who: "Andrea R.", role: "Maestra", color: "bg-orange-500" },
              { quote: "En dos semanas mi hija ya reconoce todas las letras. El material es divertido y muy fácil de imprimir.", who: "Camila S.", role: "Mamá", color: "bg-emerald-500" },
              { quote: "¡Excelente inversión! Lo uso con mis tres hijos y a todos les encanta. Vale muchísimo más de lo que cuesta.", who: "Patricia G.", role: "Mamá", color: "bg-sky-500" },
              { quote: "Las fichas son hermosas y los niños se enganchan al instante. Lo recomiendo 100% a otras maestras.", who: "Sofía L.", role: "Maestra", color: "bg-purple-500" },
              { quote: "Compré el pack y al día siguiente ya estaba imprimiendo. Mi peque por fin disfruta aprender a leer.", who: "Verónica T.", role: "Mamá", color: "bg-pink-500" },
            ].map((t) => (
              <div key={t.who} className="bg-pink-50 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full ${t.color} text-white font-black flex items-center justify-center text-lg shadow-md`}>
                    {t.who.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-tight">{t.who}</p>
                    <p className="text-xs text-slate-500">{t.role} <span className="text-yellow-500">★★★★★</span></p>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3">Una mirada al material</h2>
          <p className="text-center text-slate-600 mb-10">Cada recurso está pensado para que aprender sea un juego</p>
          <div className="space-y-10">
            {[
              { img: pack4, title: "Variedad de recursos imprimibles", desc: "Decenas de fichas, tarjetas y plantillas a todo color para practicar letras, sílabas y palabras desde el primer día." },
              { img: pack6, title: "Actividades listas para usar", desc: "Material organizado por niveles para que tu hijo avance paso a paso, sin frustraciones y disfrutando cada actividad." },
            ].map((g) => (
              <div key={g.title} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <img src={g.img} alt={g.title} className="py-16 bg-white px-[10px]" loading="lazy" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-extrabold mb-2 text-slate-900">{g.title}</h3>
                  <p className="text-slate-600">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE 2 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <img src={pack7} alt="Tarjetas y juegos del pack" className="w-full max-h-[480px] object-cover rounded-3xl shadow-xl" loading="lazy" />
        </div>
      </section>

      {/* OFERTA FINAL */}
      <section id="comprar" className="py-16 px-4 bg-gradient-to-br from-rose-100 to-orange-200">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-rose-600">¡Aprovecha el 80% de descuento hoy!</h2>
          <ul className="text-left space-y-3 mb-6">
            {items.map((it) => (
              <li key={it.name} className="flex justify-between border-b border-slate-100 pb-2">
                <span className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600" /> {it.name}</span>
                <span className="line-through text-slate-400">{it.price}</span>
              </li>
            ))}
            <li className="flex justify-between font-bold text-slate-900 pt-2">
              <span>VALOR TOTAL:</span><span className="line-through">$32.00</span>
            </li>
          </ul>
          <p className="text-5xl font-black text-rose-600 mb-6">$7.00 USD</p>
          <a href="https://pay.hotmart.com/A105742687W?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white text-xl font-black px-10 py-4 rounded-full shadow-xl">
            ¡COMPRAR AHORA!
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cómo recibo el material?", a: "Lo recibes al instante en tu correo una vez confirmado el pago. Puedes imprimirlo las veces que quieras." },
              { q: "¿Qué pasa si no me gusta?", a: "Tienes 7 días de garantía total. Si no estás satisfecha, te devolvemos tu dinero inmediatamente." },
            ].map((f) => (
              <details key={f.q} className="group bg-pink-50 rounded-2xl p-5 shadow-sm">
                <summary className="flex justify-between items-center cursor-pointer font-bold text-lg">
                  {f.q}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-slate-700">{f.a}</p>
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
