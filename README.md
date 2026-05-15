# Signals Across Time: Museum of Communication

An interactive, chronological web exhibit exploring the history of long-distance human communication—from the telegraph to the digital age. Built with React, Tailwind CSS, and Framer Motion.

## 🌟 Features

* **Interactive Timeline:** A scroll-linked vertical timeline spine that tracks the user's progress through the eras.
* **Thematic Design:** Each era card features unique, historically inspired typography, colors, and border styling (e.g., heavy copper accents for the Telegraph, razor-thin minimalist styling for Digital).
* **Typewriter Effects:** Historical descriptions load with an authentic typewriter cadence using a custom React hook.
* **Animated Background:** A continuous SVG/Framer Motion signal pulse running in the background.
* **Responsive Layout:** Adapts from mobile-friendly stacked cards to a dual-column desktop layout.

## 🛠 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) / React
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Typography:** Google Fonts (DM Sans, Space Mono)

## 📂 Project Structure

To maintain a clean codebase, the original monolithic file has been separated into modular components:

\`\`\`text
src/
├── data/
│   └── eras.ts               # Content and styling data for each era
├── hooks/
│   └── useTypewriter.ts      # Custom hook for the typing text effect
├── components/
│   ├── SignalPulse.tsx       # Background animated signal rings
│   ├── PaperTexture.tsx      # SVG noise filter for vintage eras
│   ├── TimelineSpine.tsx     # Left-side sticky progress tracker
│   └── EraCard.tsx           # Individual era display card
└── app/
    └── page.tsx              # Main page assembling the components
\`\`\`

## 🚀 Getting Started

1. **Install dependencies:**
   Ensure you have `framer-motion` installed alongside your standard React/Next setup.
   \`\`\`bash
   npm install framer-motion
   \`\`\`

2. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
