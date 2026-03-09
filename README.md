# `<JA />` — Portfolio Personal

> Portfolio de **Joaquín Aguilar** · Ingeniero Civil en Informática · Fullstack Dev


---

## 🚀 Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 + React 19 |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion — scroll-sync animations |
| Lenguaje | TypeScript |
| Package manager | pnpm |

---

## ✨ Características

- **Animaciones sincronizadas con el scroll** — cada elemento se revela en proporción directa a la velocidad y posición del scroll, usando `useScroll` + `useTransform` de Framer Motion
- **Navegación lateral (SideNav)** con efecto fisheye, transición de dot circular → línea activa, y labels en cascada al hover
- **Lightbox** para imágenes de proyectos con soporte de teclado (Esc)
- **Diseño responsive** adaptado a mobile y desktop
- Seguimiento de sección activa via `IntersectionObserver`

---

## 📁 Estructura del proyecto

```
app/
├── components/
│   ├── ActiveSectionContext.tsx   # Context global de sección activa + navegación programática
│   ├── CardDeck.tsx               # Wrapper de secciones con scroll tracking
│   ├── ProjectsGrid.tsx           # Grid de proyectos con lightbox
│   └── SideNav.tsx                # Navegación lateral flotante con animaciones
├── globals.css
├── layout.tsx
└── page.tsx                       # Página principal con todas las secciones y ScrollReveal
```

---

## 🛠️ Desarrollo local

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el browser.

---

## 📬 Contacto

[![LinkedIn](https://img.shields.io/badge/LinkedIn-joaquin--aguilar--ampuero-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/joaquin-aguilar-ampuero)
[![GitHub](https://img.shields.io/badge/GitHub-Juaker1-181717?style=flat&logo=github)](https://github.com/Juaker1)
[![Email](https://img.shields.io/badge/Email-joaquin.aguilar.ampuero%40gmail.com-EA4335?style=flat&logo=gmail)](mailto:joaquin.aguilar.ampuero@gmail.com)

