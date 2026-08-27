# Tara

Escuela de tarot construida como single-page app: biblioteca de las 78 cartas del mazo Rider-Waite-Smith, la historia de los Arcanos Mayores como "El Viaje del Loco", práctica de tiradas y una carta del día — todo en una sola página, navegable por secciones ancladas, con idioma ES/EN.

Stack: React + TypeScript + Vite, React Router, Framer Motion, Tailwind v4.

## Secciones

- **Inicio** — hero, carta del día (persistida por `localStorage`) y guía de "tres pasos" para empezar.
- **Biblioteca** (`#biblioteca`) — las 78 cartas, filtrables por Arcanos Mayores o palo, con buscador y carga progresiva ("ver más").
- **El Viaje** (`#viaje`) — los 22 Arcanos Mayores narrados como el recorrido de El Loco, en 3 planos.
- **Tirada** (`#tirada`) — tiradas de una carta, tres cartas o Cruz Celta, con síntesis de la lectura.
- **Preguntas frecuentes** (`#faq`) — acordeón que se abre al pasar el mouse.

Al tocar cualquier carta se abre una ficha en modal (significado al derecho/invertido, cómo leerla en una tirada, cartas relacionadas), sin salir de la página. En mobile el nav se colapsa en un menú hamburguesa.

## Desarrollo

```bash
npm install
npm run dev
```

## Traducciones de las cartas

Los significados de las 78 cartas viven en español en `src/data/cards.ts`. La versión en inglés (`src/data/cards.en.json`) se genera una sola vez con un script offline — no hay ninguna llamada a un servicio de traducción en producción:

```bash
node scripts/translate-cards.mjs
```

Volvé a correrlo si cambiás el contenido de `cards.ts` y querés actualizar el caché en inglés.

## Build

```bash
npm run build
```
