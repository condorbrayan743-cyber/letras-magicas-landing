import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUTOPLAY_DELAY, PACK_ACTIVITIES } from "./pack-activities";

export default function ActivityCarousel() {
  const [viewportRef, api] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const synchronize = useCallback(() => {
    if (api) setSelected(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    synchronize();
    api.on("select", synchronize).on("reInit", synchronize);
    return () => { api.off("select", synchronize).off("reInit", synchronize); };
  }, [api, synchronize]);

  useEffect(() => {
    if (!api || paused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) api.scrollNext();
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [api, paused, selected]);

  return (
    <div role="region" aria-roledescription="carrusel" aria-label="Fichas del pack"
      className="pack-carousel"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); api?.scrollPrev(); }
        if (event.key === "ArrowRight") { event.preventDefault(); api?.scrollNext(); }
      }}>
      <div ref={viewportRef} className="pack-carousel-viewport"
        onPointerDown={() => setPaused(true)} onPointerUp={(event) => { if (event.pointerType !== "mouse") setPaused(false); }}
        onPointerCancel={() => setPaused(false)}>
        <div className="pack-carousel-track">
          {PACK_ACTIVITIES.map((image, index) => (
            <div key={image.src} role="group" aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${PACK_ACTIVITIES.length}`} aria-hidden={selected !== index}
              className="pack-carousel-slide">
              <img src={image.src} alt={image.alt} width={image.width} height={image.height}
                loading="lazy" decoding="async" className="pack-activity-image" />
            </div>
          ))}
        </div>
      </div>
      <Button type="button" variant="ghost" size="icon" aria-label="Actividad anterior" title="Actividad anterior"
        className="pack-carousel-arrow pack-carousel-prev" onClick={() => api?.scrollPrev()}><ChevronLeft /></Button>
      <Button type="button" variant="ghost" size="icon" aria-label="Actividad siguiente" title="Actividad siguiente"
        className="pack-carousel-arrow pack-carousel-next" onClick={() => api?.scrollNext()}><ChevronRight /></Button>
      <div className="pack-carousel-indicators" aria-label="Elegir actividad">
        {PACK_ACTIVITIES.map((image, index) => (
          <Button type="button" key={image.src} variant="ghost" size="icon"
            className="pack-carousel-dot" aria-label={`Ver actividad ${index + 1}`}
            title={`Actividad ${index + 1}`} aria-current={selected === index ? "true" : undefined}
            onClick={() => api?.scrollTo(index)}><span /></Button>
        ))}
      </div>
    </div>
  );
}