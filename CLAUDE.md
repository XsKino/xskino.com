# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build the project (includes Astro type checking)
- `npm run preview` - Preview the built site
- `npm run astro` - Run Astro CLI commands

## Project Architecture

This is a personal portfolio website built with Astro, React, and TailwindCSS, deployed on Vercel with serverless output.

### Key Architecture Components

**Astro Configuration (`astro.config.mjs`)**:
- Server-side rendering with Vercel adapter
- Bilingual support (English/Spanish) with routing configuration
- React and TailwindCSS integrations

**Internationalization System (`src/i18n/`)**:
- Centralized i18n management with locale-specific data
- Main entry point: `src/i18n/index.ts` with getter functions
- Language data in `en.js` and `es.js`
- Shared data (projects, timelines, resources) in `data.ts`
- Default locale: English, with Spanish translations

**Component Structure**:
- `src/components/` - Organized by feature (about, contact, header, navbar, work, landings)
- `src/components/i18n/` - Internationalized HTML wrapper components
- `src/icons/` - SVG icons split between Astro and JSX formats
- `src/layouts/Layout.astro` - Main layout with global styles and meta tags

**Styling System**:
- TailwindCSS with NextUI components
- Custom color themes in `src/styles/colorThemes.js`
- Global CSS variables and custom styles in `Layout.astro`
- Dark mode support configured

**Pages Structure**:
- `/` (English) and `/es/` (Spanish) routes
- Special `/landings/` section for additional content
- File-based routing with Astro

**Static Assets**:
- `public/img/` - Images organized by category (avatar, projects, resources, landings)
- `public/pdf/` - Resume/CV files in multiple languages

**Type System**:
- TypeScript configuration with strict settings
- Types defined in `src/types/app.ts`
- React component types throughout

The site showcases projects, professional timeline, resources, and contact information with full bilingual support and responsive design.