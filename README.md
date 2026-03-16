# F1 Data & Strategy Presentation Website

This is a cinematic, presentation-style React application built with Vite, Tailwind CSS (v4), and Framer Motion.
It is designed to replace a traditional PowerPoint presentation with a dramatic, highly animated, Formula 1 (Ferrari) inspired web interface.

## Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

## Run Instructions
To run this presentation locally:
1. `npm install` (if not already installed)
2. `npm run dev`
3. Open the URL provided in the terminal (usually `http://localhost:5173/`).

To build for production (generating static files to host somewhere like Vercel or GitHub Pages):
`npm run build`

## Keyboard Navigation
The site behaves like a presentation deck:
- **Next Scene:** `Spacebar` or `Right Arrow`
- **Previous Scene:** `Left Arrow`
- **Toggle Presenter Notes:** Press `N` on the keyboard to bring up the hidden presenter notes in French.

## How to Swap Placeholder Assets

To maintain copyright safety, this project uses visually appealing technical placeholders. You can swap these generic placeholders with actual MP4/WEBM videos or images.

### 1. Scene 1 - Hero Car
**File:** `src/scenes/Scene1_HeroCar.tsx`
- Lines 18-24 contain a placeholder `div` labeled "CAR OBSERVATION DECK".
- You can replace this `div` with an `<img />` or `<video />` tag linking to a transparent PNG of an F1 car or a 3D rendered WebM video.

### 2. Scene 6 - Pit Stop Spotlight
**File:** `src/scenes/Scene6_FerrariSpotlight.tsx`
- This scene uses `<BackgroundVideo opacity={0.6} fallbackColor="bg-ferrari-dark" />`.
- To add a real pit-stop video, place your video in the `public/` folder (e.g., `public/pitstop.mp4`) and update the code:
  `<BackgroundVideo src="/pitstop.mp4" opacity={0.6} fallbackColor="bg-ferrari-dark" />`

### 3. General Background Loops
- Currently, backgrounds use animated gradients, grids, and Framer Motion elements.
- If you have abstract dark carbon-fiber or telemetry loops, you can inject them via the `BackgroundVideo` component inside any scene file.

## Presentation Structure (3 Speakers)
- **Speaker 1:** Scenes 0, 1, 2 (Intro, Hero Car, Sensors)
- **Speaker 2:** Scenes 3, 4 (Engineering Room, Decision Making)
- **Speaker 3:** Scenes 5, 6, 7 (Strategy, Pit Stop, Conclusion)
- Press `N` during any of these scenes to read the supporting notes written in French.
