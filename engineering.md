# Engineering Architecture & Implementation Plan

## 1. Tech Stack Overview
* **Framework:** React 18 + Vite
* **Styling:** Tailwind CSS + Custom CSS Variables (`index.css`)
* **Icons:** Lucide React (`lucide-react`)
* **Animations:** Framer Motion (`framer-motion`) + CSS keyframes for background lighting
* **Build System:** Vite (`npm run dev`, `npm run build`)

## 2. Directory & Architecture Structure
```
c:/Users/saifm/OneDrive/Desktop/my protfilo/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── product.md
├── ui.md
├── engineering.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── config/
    │   └── profile.js           # Centralized configuration for easy customization
    ├── data/
    │   ├── projects.js          # Detailed project data (Inventra, Gaming Zone)
    │   ├── skills.js            # Structured skills by category
    │   ├── services.js          # Services offered data
    │   └── journey.js           # Timeline journey data
    └── components/
        ├── Preloader.jsx        # High-tech loading sequence (< 2s)
        ├── ScrollProgress.jsx   # Top viewport scroll progress line
        ├── Navbar.jsx           # Floating pill nav + mobile drawer
        ├── Hero.jsx             # Hero section with interactive 3D tech matrix
        ├── About.jsx            # About section & authentic stats
        ├── Skills.jsx           # Skills grid & interactive cards
        ├── Projects.jsx         # Case-study project showcase
        ├── Journey.jsx          # Vertical glowing timeline
        ├── Services.jsx         # Services grid cards
        ├── WhyWorkWithMe.jsx    # Developer value propositions
        ├── CodeShowcase.jsx     # Static visual IDE code editor
        ├── Contact.jsx          # Contact CTA & demo form
        ├── Footer.jsx           # Footer & copyright
        ├── CustomCursor.jsx     # Desktop custom mouse cursor
        └── BackgroundEffects.jsx# Ambient grid & soft glowing light effects
```

## 3. Configuration System Design (`src/config/profile.js`)
All static details will be defined centrally:
```javascript
export const PROFILE = {
  name: "Saif Mithani",
  title: "Full Stack Web Developer",
  tagline: "Building modern websites, web applications, and digital experiences.",
  status: "AVAILABLE FOR FREELANCE WORK",
  education: "B.Tech Student",
  contact: {
    email: "saifmithani.dev@gmail.com", // Or placeholder
    github: "", // Empty strings hide or trigger "Coming Soon" state per spec
    linkedin: "",
    instagram: "",
    resume: "#"
  },
  metrics: {
    projectsBuilt: "01+",
    technologies: "01+",
    passion: "100%"
  }
};
```

## 4. Performance & Optimization Strategy
* **Zero Laying Out Shift (CLS):** Explicit sizing on images and SVGs.
* **GPU Acceleration:** All Framer Motion animations strictly animate `opacity`, `transform` (`scale`, `translate3d`).
* **Bundle Optimization:** Vite automatic tree-shaking for Lucide React icons.
* **Reduced Motion:** Hooks checking `prefers-reduced-motion` media query to adapt animation variants seamlessly.

## 5. Verification & Testing Plan
* **Dev Server:** Run Vite development server on local port.
* **Browser Automation Inspection:** Use headless browser subagent to visually verify desktop, tablet, and mobile layouts.
* **Interactive Testing:** Test button scroll jumps, project demo link popups, mobile hamburger toggle, contact form submission handling.
