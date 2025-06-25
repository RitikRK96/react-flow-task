# 🚀 React Flow Interaction Board

This project is a task-based implementation demonstrating the use of **React**, **React Flow**, **Tailwind CSS**, and **Vite** to build a clean and responsive drag-and-drop interaction board.

> ✅ **Live Demo:** [https://ritik.lancway.com](https://ritik.lancway.com)

---

## 📋 Task Objectives

I was assigned a frontend developer task to build an interactive UI that fulfills the following:

- 📦 Show a draggable panel with `Block A` and `Block B`.
- 🧲 Allow dragging blocks into a central React Flow canvas.
- 🔗 Only allow valid connections: `Block A → Block B`.
- 🚫 Prevent invalid connections like `Block B → Block A`.
- 🖱️ Show a custom context menu with “Hello World” on right-click.

---

## 🎯 Additional Features Implemented

- 🎨 Tailwind-styled blocks with color coding:
  - Blue → Block A
  - Green → Block B
- 🔌 Animated connections (visually enhance data flow)
- 🗺️ MiniMap, Zoom Controls, and Background Grid
- 🌐 Deployed on Hostinger: [https://ritik.lancway.com](https://ritik.lancway.com)

---

## 📁 Project Structure

```

src/
├── components/
│   ├── FlowCanvas.jsx        // Main board & logic
│   ├── BlockPanel.jsx        // Right-side draggable block list
│   └── ContextMenu.jsx       // Right-click menu
├── constants/
│   └── blocks.js             // JSON-style static block config
├── utils/
│   └── connectionRules.js    // Connection validation logic
├── App.jsx
├── main.jsx
└── index.css

````

---

## 🧪 Installation Steps

```bash
# Clone the repository
git clone https://github.com/RitikRK96/react-flow-task.git
cd react-flow-task

# Install dependencies
npm install

# Run the development server
npm run dev
````

---

## 🖥️ How to Run the App

After running the app with `npm run dev`, visit:

📍 [http://localhost:5173](http://localhost:5173)

You can now drag Block A/B from the right panel into the canvas and connect A → B.

---

## 🧠 Summary of the Solution

The solution leverages React Flow for building node-based interactions and constraints. It includes a right-click custom context menu, strict connection validation (A → B only), and clean layout using TailwindCSS.

The board is responsive, includes animated edges, a MiniMap, and styled block nodes.

---

## 🧱 Notes on Design Decisions

* **React Flow** was used for its powerful node editor and custom connection handling.
* **TailwindCSS** allowed for fast prototyping and clean, utility-first styles.
* Separation of concerns was maintained by using:

  * `components/` for UI logic
  * `constants/` for static config
  * `utils/` for business rules like connection validation

---

## 🖼️ Project Outcome

### 1️⃣ Valid Connection (Block A → Block B)

![Dragging blocks](./src/assets/outcome1.png)

---

### 2️⃣ Invalid Connection (Block B → Block A)

![Invalid connection alert](./src/assets/outcome2.png)

---

### 3️⃣ Right-click Context Menu

![Context menu](./src/assets/outcome3.png)

---

