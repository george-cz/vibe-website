# Task 01: Project Setup

**Status**: [✓ COMPLETED]

**Dependencies**: None

**Estimated Complexity**: Low

## Objective

Initialize a React project with Vite, configure Tailwind CSS, and set up the basic project structure.

## Requirements

1. Initialize a new Vite + React project (if not already initialized)
2. Install and configure Tailwind CSS
3. Install additional dependencies (lucide-react for icons)
4. Create basic folder structure
5. Set up initial configuration files

## Steps

### 1. Initialize Vite Project

```bash
npm create vite@latest . -- --template react
npm install
```

### 2. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Tailwind

Update `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Update CSS Entry Point

Replace content in `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
```

### 5. Install Additional Dependencies

```bash
npm install lucide-react
```

### 6. Create Folder Structure

Create the following folders in `src/`:
- `src/components/`
- `src/sections/`

### 7. Clean Up Default Files

- Remove `src/App.css`
- Clear out default content from `src/App.jsx` (keep the component structure, but remove boilerplate)

## Acceptance Criteria

- [✓] Vite project is initialized
- [✓] Tailwind CSS is configured and working
- [✓] lucide-react is installed
- [✓] Folder structure is created
- [✓] Default boilerplate is cleaned up
- [✓] `npm run dev` starts the dev server without errors

## Files to Create/Modify

- `package.json` (modified)
- `tailwind.config.js` (created)
- `postcss.config.js` (created)
- `src/index.css` (modified)
- `src/App.jsx` (cleaned up)
- `src/components/` (directory created)
- `src/sections/` (directory created)

## Completion

When complete:
1. Update status to `[✓ COMPLETED]`
2. Commit changes with message: "feat: initial project setup with Vite, React, and Tailwind"
3. Proceed to Task 02
