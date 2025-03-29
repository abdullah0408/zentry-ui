# Zentry UI - Immersive Gaming Experience Platform

![Zentry UI Preview](public/img/logo.png)

An immersive gaming portal featuring dynamic animations and smooth interactions built with modern web technologies.

## Key Features ✨
- Scroll-triggered GSAP animations
- 3D transform effects with perspective tilt
- Custom animated text components
- Responsive design with Tailwind CSS
- Video background sections
- Interactive bento-grid layout
- Smooth page transitions

## Technologies 🛠️
- **React 18** + Vite
- **GSAP 3** + ScrollTrigger
- Tailwind CSS 3
- React Icons
- React-Use hooks

## Setup Instructions 🚀

### Prerequisites
- Node.js v18+
- npm v9+

### Local Development
1. Clone repository:
```bash
git clone https://github.com/your-username/zentry-ui.git
cd zentry-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure 📂
```
/
├── public/              # Static assets
│   ├── audio/           # Audio files
│   ├── fonts/           # Font files
│   ├── img/             # Image assets
│   ├── videos/          # Video files
│   └── A.svg            # SVG asset
│
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── Hero.jsx     # Main hero section
│   │   ├── AnimatedTitle.jsx # Text animation component
│   │   └── ...          # Other components
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # React entry point
│
├── .gitignore           # Git ignore file
├── eslint.config.js     # ESLint configuration
├── index.html           # Main HTML file
├── package-lock.json    # Dependency lock file
├── package.json         # Project metadata and dependencies
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Animation System 🎬
- **GSAP Integration**: Smooth scroll-based animations using ScrollTrigger
- **Custom Hooks**: `useGSAP` for animation lifecycle management
- **Dynamic Effects**:
  - Parallax scrolling
  - 3D card tilts
  - Mask reveal animations
  - Staggered text reveals

## Styling System 💅
- **Tailwind CSS**: Utility-first styling
- **Custom Classes**:
  - `special-font`: Custom font treatments
  - `mask-clip-path`: Polygon masking effects
  - `bento-grid`: Responsive layout system

## Scripts 📜
- `dev`: Start development server
- `build`: Create production build
- `preview`: Preview production build
- `lint`: Run ESLint checks

---

**Experience the future of gaming interfaces** 🕹️  
Run `npm run dev` and visit `http://localhost:5173` to explore the interactive demo!

🌐 **Live Demo**: [Zentry UI](https://zentry-ui.notlocalhost.fun/)