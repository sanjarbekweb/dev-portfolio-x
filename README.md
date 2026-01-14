
# 🌑 Onyx / Dev Portfolio

> **"Wow, but quiet."** — A high-contrast, minimalist developer portfolio inspired by the modern **X (Twitter)** aesthetic. Focused on precision, performance, and clean code.

![Status](https://img.shields.io/badge/Status-Production--Ready-black?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-white?style=flat-square)
![Tech](https://img.shields.io/badge/Stack-React%20%2B%20GSAP-blue?style=flat-square)

---

## ⚡ Visual Philosophy

This portfolio is designed to impress recruiters with its restraint and developers with its technical execution.

- **High Contrast:** Pure black (`#000`) and white (`#FFF`) theme.
- **Subtle Depth:** Controlled use of soft shadows, glass effects, and radial glows.
- **Precision:** Sharp edges, tight typography (Inter), and strict alignment.
- **Motion:** GSAP-powered animations that support the content rather than distracting from it.

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | React 19 | Component-driven architecture |
| **Styling** | Tailwind CSS | Utility-first, rapid UI development |
| **Animation** | GSAP | High-performance motion & scroll triggers |
| **Language** | TypeScript | Type-safe, scalable codebase |
| **Typography** | Inter | Modern, readable sans-serif |

---

## ✨ Key Features

### 🖱️ Intelligent Cursor
A custom GSAP-powered cursor follower that reacts to interactive elements. It scales and changes opacity when hovering over links, buttons, or "hover-trigger" classes.

### 🎭 Motion System
- **Hero Reveal:** Staggered entrance for the main tagline.
- **Scroll Triggers:** Sections fade and slide into view as the user navigates.
- **Micro-interactions:** Subtle scaling on project cards and border-color transitions.

### 📊 System Log (About)
A unique representation of developer identity using a JSON-inspired visual block, emphasizing a "code-first" personality.

### 📦 Modular Deployments
A clean grid layout for projects featuring grayscale-to-color transitions on hover and sharp metadata tagging.

---

## 📂 Project Structure

```text
root/
├── components/
│   ├── About.tsx          # System philosophy & profile
│   ├── Contact.tsx        # CTA & social links
│   ├── CustomCursor.tsx   # GSAP cursor logic
│   ├── Hero.tsx           # High-impact landing
│   ├── Projects.tsx       # Deployment showcase
│   ├── Skills.tsx         # Toolkit & tech stack
│   └── Header.tsx         # Sticky glass navigation
├── constants.tsx          # Centralized data (Projects/Skills)
├── types.ts               # TypeScript definitions
├── App.tsx                # Main layout & ScrollTrigger logic
└── index.html             # Entry point with Inter font & global CSS
```

---

## 🚀 Getting Started

1.  **Clone the repository.**
2.  **Install dependencies:** `npm install`
3.  **Run development server:** `npm run dev`
4.  **Build for production:** `npm run build`

---

## 🎨 Customization

To change the content, simply update `constants.tsx`. The entire UI will react to the data provided there.

```typescript
// Example: Adding a new skill
export const SKILLS: Skill[] = [
  { name: "Rust", category: "backend" }, 
  // ...
];
```

---

<div align="center">
  <p>Designed with 🖤 for the modern web engineer.</p>
</div>
