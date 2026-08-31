# UI / UX Design & Animation Architecture Document

## 1. Design System & Tokens

### Color Palette (Futuristic Dark Theme)
* **Background Primary:** `#050505` (Deep space black)
* **Surface Card:** `#0D0D0F` (Dark titanium)
* **Surface Glass:** `rgba(13, 13, 15, 0.70)` (Glassmorphism backdrop)
* **Borders / Separators:** `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.15)`
* **Text Primary:** `#FFFFFF` (Pure white)
* **Text Secondary:** `#A1A1AA` (Zinc 400)
* **Text Muted:** `#71717A` (Zinc 500)
* **Accent Primary (Cyan/Blue):** `#38BDF8` (Sky blue glow)
* **Accent Secondary (Violet):** `#818CF8` (Indigo glow)
* **Accent Highlight (Emerald):** `#34D399` (Available for work dot)

### Typography Hierarchy
* **Primary Font Family:** `'Plus Jakarta Sans'`, `'Inter'`, sans-serif
* **Display / Mono Font:** `'Space Grotesk'`, `'Fira Code'`, monospace
* **Hero Display:** `clamp(2.5rem, 6vw, 4.5rem)` (Font weight: 800, line-height: 1.1)
* **Section Heading:** `clamp(2rem, 4vw, 3rem)` (Font weight: 700, letter-spacing: -0.02em)
* **Card Titles:** `1.25rem - 1.5rem` (Font weight: 600)
* **Body Text:** `1rem` (Font weight: 400, line-height: 1.6)

### Spacing & Layout Structure
* **Container Max Width:** `1280px` (`max-w-7xl`)
* **Section Padding:** Desktop `py-24 px-6`, Mobile `py-16 px-4`
* **Card Radius:** `rounded-2xl` (`24px`) to `rounded-3xl` (`32px`)
* **Gaps:** Grid layout gaps `gap-6` to `gap-8`

---

## 2. Component Architecture

1. **`Navbar.jsx`**: Floating glass pill, active indicator dot, scroll-triggered height/blur compression, animated mobile menu drawer.
2. **`Hero.jsx`**: Freelance status badge with pulsing green light, gradient text reveal, CTA action buttons, floating 3D tech badge matrix with mouse parallax, scroll down indicator.
3. **`About.jsx`**: Two-column layout with bio text and authentic counter stat cards with micro glowing borders.
4. **`Skills.jsx`**: Categorized tabbed/grid skill cards with ambient glow, hover icon floating motion, and expanded details on hover.
5. **`Projects.jsx`**: Cinematic case-study layout with sequential item reveals, hover custom cursor prompt ("VIEW PROJECT →"), tags, and live Netlify demo links.
6. **`Journey.jsx`**: Interactive scroll-linked glowing vertical line with step reveal nodes.
7. **`Services.jsx`**: Grid of 6 interactive service cards with hover tilt and border gradient highlights.
8. **`WhyWorkWithMe.jsx`**: Value proposition grid featuring key developer traits with sleek icon badges.
9. **`CodeShowcase.jsx`**: Visual IDE frame with line numbers, glowing tab controls, and animated code typing effect.
10. **`Contact.jsx`**: Dual column with contact CTA actions and validated contact form with demo notice modal/toast.
11. **`Footer.jsx`**: Clean footer with copyright, navigation links, and back-to-top button.
12. **`CustomCursor.jsx`**: Desktop custom dot cursor that expands and reveals context labels over interactive elements.
13. **`ScrollProgress.jsx`**: Thin top glowing progress bar tied to window scroll position.
14. **`BackgroundEffects.jsx`**: Ambient subtle grid overlay, floating soft gradient orbs, and particle subtle ambient glow.

---

## 3. Responsive Behavior
* **Desktop (> 1024px):** Full multi-column grid, custom cursor enabled, floating hero 3D workspace cards, scroll transitions enabled.
* **Tablet (768px - 1023px):** 2-column project and skill layouts, compact navbar, touch interaction.
* **Mobile (< 767px):** Single-column stacked layout, full-screen animated drawer navigation, custom cursor automatically hidden, touch targets minimum 48px, performance-optimized animations.

---

## 4. Animation Choreography (Framer Motion)
* **Preloader Sequence:** 0s -> Logo reveal, 0.6s -> Horizontal divider line expands, 1.2s -> Text reveals, 1.8s -> Unveil portfolio.
* **Hero Badges:** Floating continuous Y-axis sine-wave motion (`translateY: [0, -10, 0]`) with staggered delays (0s, 0.4s, 0.8s, 1.2s).
* **Scroll Entrance:** Staggered child variants (`fadeUp`, `scaleUp`, `slideIn`) with `viewport={{ once: true, margin: "-100px" }}`.
* **Button Hover:** Magnetic subtle translate, scale `1.03`, glowing box-shadow bloom.

---

## 5. Case-Study Project Showcase Design
* **Inventra Project Card:** Large titanium card featuring live preview banner, AI badge, multi-warehouse tag list, and direct action link to `https://inventra-app-demo.netlify.app/`.
* **Gaming Zone Card:** Vibrant gaming visual identity card featuring interactive web experience highlights and direct action link to `https://gamingzonewebsite1.netlify.app/`.

---

## 6. Accessibility & Motion Guidelines
* Full keyboard navigation focus rings (`focus-visible:ring-2 focus-visible:ring-sky-400`).
* ARIA attributes (`aria-label`, `aria-expanded`, `role="navigation"`).
* Automatic check for `window.matchMedia('(prefers-reduced-motion: reduce)')` to disable heavy parallax/floating effects.
