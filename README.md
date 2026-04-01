<div align="center">

# 🚀 DigiTools Buying Website

<p align="center">
  <img src="src/assets/banner.png" alt="DigiTools Banner" width="400" />
</p>

A premium, fast, and feature-rich digital tools buying platform built with React, Vite, Tailwind CSS, and DaisyUI. Designed for exploring curations of premium digital assets, UI kits, templates, and plugins.

[**Live Demo (Coming Soon)**](https://digitools-buying.surge.sh/) | [**Report Bug**](https://github.com/yourusername/digitools/issues) | [**Request Feature**](https://github.com/yourusername/digitools/issues)

</div>

<br/>

## ✨ Key Features

1. 🛒 **Interactive Cart System with State Sharing**  
   Seamless product selection logic that prevents duplicate cart items, auto-calculates total order value, tracks shopping cart states intuitively, and provides "Remove Item" and "Checkout" functionalities inside a togglable modal/section layout.

2. 💎 **Premium Modern Glassmorphic UI Aesthetics**  
   Utilizes highly optimized `tailwindcss` utility features coupled with `daisyui` for high-end component styling. Features custom hover interactions, pulse gradients, and fully responsive layouts that perform blazingly fast on both mobile and desktop.

3. 🔔 **Real-Time Notification Alerts (`react-toastify`)**  
   Fully integrated toaster alerts displaying success, warning, and informational popups when interacting with cart components. Immediate visual feedback enhances User Experience dramatically, preventing confusion during checkout activities.

## 🛠️ Technology Stack

- **Framework**: `React.js` (v19) via `Vite` for lightning-fast HMR and optimized production bundling.
- **Styling**: `Tailwind CSS` v4 for flexible utility-first design syntax.
- **UI Components**: `DaisyUI` for pre-built, theme-aware accessibility-compliant components.
- **Icons**: `Lucide-React` for beautifully consistent and infinitely customizable vector icons.
- **Alerts**: `React-Toastify` for elegant pop-up notifications based on global state behavior.
- **State Management**: React's native Hooks (`useState`, `useEffect`).

## 📁 Repository Structure & Data

The app is decoupled cleanly into functional React components located inside `/src/components` (e.g., `ProductCard`, `Cart`, `Banner`, `MainSection`, etc.). To mimic backend integration, an array of JSON objects drives the product details found under `/src/data/products.json`.

## 🚀 Recommended Setup

### 1-Click Install

Clone the repository and jump right into the development server:

```bash
# Clone the project
git clone https://github.com/yourusername/digitools

# Navigate into the project directory
cd digitools

# Install dependencies using NPM/Yarn
npm install

# Start the Vite local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser to view the application. 

### Production Build

To build the static distribution bundle tailored for production environments:

```bash
npm run build
```

*(This command utilizes ESBuild internally to minify your codebase and assets down to the smallest size feasible.)*

## 💡 Customization Notes
- **Themes**: Switch out the DaisyUI theme inside `src/index.css` or configure multiple themes inside `vite.config.js`.
- **Products**: Want to sell your own assets? Update `src/data/products.json` with accurate ids, prices, titles, icons, and descriptions!

<div align="center">
  <br/>
  <sub>Built with ❤️ by [Your Name] | Assignment 06 (100 Marks Attempt)</sub>
</div>
