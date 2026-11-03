import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Mi Mundo de Letras | Kit de alfabetización para aprender jugando" },
    { name: "description", content: "Descubre Mi Mundo de Letras: actividades de alfabetización para imprimir y practicar letras, sílabas y primeras palabras en casa." },
    { property: "og:title", content: "Mi Mundo de Letras | Aprender jugando" },
    { property: "og:description", content: "Un kit educativo con fichas imprimibles para acompañar los primeros pasos en lectura y escritura." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LandingPage,
});
