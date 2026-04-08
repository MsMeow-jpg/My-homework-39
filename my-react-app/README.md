# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# My React App (Homework 39)

## 📌 Project Description

This is a tutorial project created using **React + Vite**.

The project demonstrates working with **stateful** and **stateless** components, as well as an additional **class-based component**.

The project implements:
- `StatefulComponent` using **useState**
- `StatelessComponent` using **props**
- `ClassComponent` as an optional example of a class-based React component
- event handling with button clicks
- default Vite starter layout with logos, hero image, and info sections

---

## 🚀 Technologies

- React
- Vite
- JavaScript (ES6+)
- CSS

---

## 📁 Project Structure
```
homework-39/
   └── my-react-app/
         ├── dist/
         ├── public/
         ├── node_modules/
         ├── src/
         │   ├── assets/
         │   │     ├── hero.png
         │   │     ├── react.svg
         │   │     └── vite.svg
         │   ├── components/
         │   │     ├── ClassComponent.jsx
         │   │     ├── StatefulComponent.jsx
         │   │     └── StatelessComponent.jsx
         │   ├── App.css
         │   ├── App.jsx
         │   ├── index.css
         │   └── main.jsx
         ├── .gitignore
         ├── eslint.config.js
         ├── index.html
         ├── package-lock.json
         ├── package.json
         ├── README.md
         └── vite.config.js
```
        
---


## ⚙️ Installation and Launch

1. Clone the repository:
```bash
git clone https://github.com/MsMeow-jpg/My-homework-39.git
```
2. Go to the project folder:
```bash
cd My-homework-39/my-react-app
```
3. Install dependencies:
```bash
npm install
```
4. Launch the project:
```bash
npm run dev
```
---
After this, the project will be available at:
```
http://localhost:5173
```
---
🌐 Demo

🔗 Live demo:
https://my-homework-39.vercel.app/
---
📦 Functionality
- StatefulComponent manages internal state with useState
- StatelessComponent receives and displays props
- ClassComponent demonstrates state management in a class-based component
- button click handling
- Vite starter design with hero image, logos, and information sections
---
🧠 What we learned
- Creating React components
- Splitting components into separate files
- Passing props
- Working with state using useState
- Creating a class-based component
- Event handling
- Vite project structure
---
✍️ Author

GitHub: MsMeow-jpg
---
📌 Note

This project was completed as part of a React + Vite course assignment.
---