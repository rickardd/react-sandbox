# React + TypeScript + Vite

Requires node v 20.9.0

npx create-vite@latest react-sandbox --template react-ts
cd react-sandbox

npm install react-router-dom
npm install @tanstack/react-query
npm install react-hook-form
npm install zod
npm install zustand

npm install -D @vitejs/plugin-react
npm install -D @testing-library/react
npm install -D @testing-library/jest-dom
npm install -D @testing-library/user-event
npm install -D cypress

## ToDo

- Useref vs useMemo
- HOC
- Always ensure a shortcut returns a bool
- Milion lint (vscode plugin)?
- The use hook

# Interview comments on artist component

- Interview comments
- React query cashing
- Aborting earlier request
- Disable button on no search
- Router context
- Loosly coupledncomponent with store
- Solid
- Css approach
- Debugging pros and cons with store
- Performance - no extra rendering
- Keep state logic on one place with store
- No ts
- How to handle multiple stores
- How to handle nested routs
- EsLint
- Vite
- WebPack
- chrome dev tools

  - Debugging
  - save css when updated in dev tools

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
