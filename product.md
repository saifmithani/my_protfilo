# Product Requirements Document (PRD) — Developer Portfolio

## 1. Overview
A high-end, responsive, interactive developer portfolio for **Saif Mithani**, a B.Tech student and Full Stack Web Developer. The portfolio positions Saif as a skilled freelance developer and creative software engineer who builds modern, intuitive, and high-performance web applications.

## 2. Target Audience & Goals
* **Freelance Clients & Small Businesses:** Looking for a developer to build modern websites, SaaS dashboards, or custom web apps.
* **Recruiters & Technical Event Judges:** Looking for clean code practices, modern UI design, authentic project demonstrations, and strong technical foundation.
* **Potential Employers & Founders:** Seeking talent with React, Python, Java, MySQL, and full-stack capabilities.

## 3. Core Principles
* **Authenticity:** No fake stats, client counts, or false claims. All experience metrics are grounded in reality (01+ Projects Built, 01+ Technologies mastered, 100% Passion).
* **High Aesthetic Standard:** Vercel/Linear dark aesthetics, glassmorphism, glowing micro-accents, Apple-like spacing, sleek dark palette.
* **Motion & Interactivity:** Framer Motion scroll reveals, custom mouse cursor, magnetic buttons, floating hero tech badges, typing code section.
* **Performance & Accessibility:** GPU-accelerated animations (`transform`, `opacity`), WCAG compliant contrast, screen reader semantics, `prefers-reduced-motion` support.

## 4. Key Sections & Functional Features
1. **Preloader & Page Entrance:** High-tech intro sequence (< 2 seconds) transitioning into hero visual.
2. **Scroll Progress Line:** Fixed top progress indicator showing scroll completion percentage.
3. **Floating Navbar:** Pill navigation with backdrop blur on scroll, section active state, and animated mobile drawer.
4. **Hero Section:** "AVAILABLE FOR FREELANCE WORK" badge, bold statement typography, interactive floating 3D tech badge visual, mouse parallax, scroll indicator.
5. **About Section:** Real student/freelance story, realistic metric cards.
6. **Skills Showcase:** Categorized interactive skill cards (Frontend, Backend, Database, Tools) with hover glow and descriptive reveals (no fake percentage bars).
7. **Featured Projects Showcase:** Case-study project presentation featuring **Inventra** (AI Inventory & Procurement Platform) and **Gaming Zone** (Interactive Web Experience) with live demo buttons and modal/card view mode.
8. **Development Journey (Timeline):** Vertical glowing timeline of Saif's B.Tech and freelance progression.
9. **Services Offered:** 6 tailored service cards (Business Websites, Web Apps, Full-Stack, Dashboards, Python/Java Apps, Website Improvements).
10. **Why Work With Me:** Core value propositions (Clean Code, Responsive Design, Modern Tech, Problem Solving, Clear Communication, Client-Focused).
11. **Behind The Interface (Code Editor):** Interactive code showcase with typing animation and configuration overview.
12. **Contact Form & CTA:** Interactive contact form (demo mode notification), direct email/social action buttons.
13. **Footer:** Clean copyright, quick links, and configuration profile links.

## 5. Configuration Strategy
All personal data, links, social handles, and project information are extracted into `src/config/profile.js` for zero-friction user updates.
