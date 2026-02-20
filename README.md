# Heidi's Place - Modern

A modern React application built with TypeScript and Vite. This project is a responsive web application with a clean, modern design featuring a hero section, about section, services section, and a footer with social media links.

## Features

- Responsive design with mobile-first approach
- Modern UI with gradient backgrounds and card layouts
- Hero section with call-to-action buttons
- About section with company description
- Services section showcasing three main offerings
- Footer with social media links and navigation
- Built with React, TypeScript, and Vite
- ESLint configuration for code quality

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installation

To get started with this project, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-username/heidis-place-modern.git
cd heidis-place-modern

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run lint` - Runs ESLint to check for code quality issues
- `npm run preview` - Previews the production build locally

## Project Structure

```
heidis-place-modern/
├── public/
│   ├── favicon.ico
│   └── logo192.png
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Services.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Customization

You can easily customize this template by:

1. **Updating Content**: Modify the content in the component files (Hero.jsx, About.jsx, Services.jsx) to reflect your business information.

2. **Changing Styles**: Update the CSS files in the assets/styles directory to match your brand colors and design preferences.

3. **Adding New Sections**: Create new component files in the components directory and import them into App.jsx.

4. **Adding Images**: Place your images in the public directory and update the image paths in the component files.

## Browser Compatibility

This template is designed to work with modern browsers. For best results, use the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
