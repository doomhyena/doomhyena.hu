# doomhyena.hu

Personal portfolio website built with React, TypeScript, and Vite.

The site is a single-page portfolio with a dark flat design, JetBrains Mono typography, terminal-inspired UI elements, and sections for background, technologies, projects, systems knowledge, goals, and contact details.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Framer Motion

## Features

- Single-page responsive portfolio layout
- Terminal-style hero and contact sections
- Plain, minimal dark theme
- Projects section with real project summaries
- Technologies grouped by category
- Systems and networking section
- Career goals section
- Contact links for GitHub, Discord, and email

## Project Structure

```text
src/
  components/
    layout/
    sections/
    ui/
  data/
  types/
  App.tsx
  main.tsx
  index.css
public/
  logo.png
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Content Customization

Most of the page content is stored in:

- `src/data/portfolio.ts`

This includes:

- navigation labels
- hero text
- about text
- technologies
- projects
- networking skills
- career goals
- contact links
