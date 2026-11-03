import ActivityCarousel from "./ActivityCarousel";

export default function PackContentsSection() {
  return (
    <section className="pack-contents" aria-labelledby="pack-contents-title">
      <div className="pack-contents-inner">
        <span className="pack-eyebrow">DENTRO DEL PACK ✨</span>
        <div className="pack-heading-wrap">
          <span className="pack-rays pack-rays-left" aria-hidden="true"><i /><i /><i /></span>
          <h2 id="pack-contents-title">El kit completo de alfabetización<br className="hidden sm:block" /> para <mark>aprender jugando</mark></h2>
          <span className="pack-rays pack-rays-right" aria-hidden="true"><i /><i /><i /></span>
        </div>
        <p className="pack-description">Un recurso educativo con actividades prácticas y visuales para acompañar a los niños en sus primeros pasos con las letras, las sílabas y las palabras.</p>
        <div className="pack-benefits">
          <div className="pack-benefit">
            <div className="pack-alphabet" aria-hidden="true"><span>A</span></div>
            <div><strong>+300</strong><p>Actividades educativas</p></div>
          </div>
          <div className="pack-benefit">
            <span className="pack-benefit-illustration" aria-hidden="true">🖨️</span>
            <div><strong>PDF</strong><p>Listo para imprimir en casa</p></div>
          </div>
          <div className="pack-benefit">
            <span className="pack-benefit-illustration" aria-hidden="true">🏅</span>
            <div><strong>∞</strong><p>Acceso de por vida</p></div>
          </div>
        </div>
        <h3>Actividades diseñadas para aprender haciendo</h3>
        <p className="pack-description pack-gallery-description">Cada ficha propone una actividad diferente para explorar las letras, reconocer sílabas, completar palabras y desarrollar habilidades iniciales de lectura y escritura.</p>
        <ActivityCarousel />
        <p className="pack-swipe-hint">👉 Desliza para descubrir más actividades</p>
        <div className="pack-closing">
          <span aria-hidden="true" className="pack-decoration-yellow">✦</span>
          <span aria-hidden="true" className="pack-decoration-pink">♥</span>
          <p>practicar y aprender a su propio ritmo.</p>
          <span aria-hidden="true" className="pack-decoration-blue">✦</span>
        </div>
      </div>
    </section>
  );
}