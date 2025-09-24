# React Calculator 🧮

A modern, interactive calculator built with React, featuring smooth animations and a sleek design. Perfect for learning React hooks, state management, and building interactive user interfaces.

## ✨ Features

- 🔢 **Basic arithmetic operations** (addition, subtraction, multiplication, division)
- 📱 **Responsive design** with Tailwind CSS
- 🎨 **Smooth animations** with Framer Motion
- 🎯 **Clean and intuitive** user interface
- ⚡ **Real-time calculation** display
- 🚨 **Error handling** for invalid operations
- 🌙 **Modern glassmorphism** design elements
- ⌨️ **Keyboard support** for better accessibility
- 📐 **Memory functions** (MC, MR, M+, M-)
- 🔄 **Clear and All Clear** functionality

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdrishikharChowdhury/react-calculator.git
   cd react-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
react-calculator/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Calculator.jsx    # Main calculator component
│   │   ├── Display.jsx       # Display screen component
│   │   └── Button.jsx        # Calculator button component
│   ├── hooks/
│   │   └── useCalculator.js  # Custom hook for calculator logic
│   ├── utils/
│   │   └── calculations.js   # Calculation utilities
│   ├── App.jsx              # Root application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage

1. **Basic Operations**: Click number buttons and operation buttons to perform calculations
2. **Keyboard Support**: Use your keyboard for faster input
   - Numbers: `0-9`
   - Operations: `+`, `-`, `*`, `/`
   - Enter: `=` or `Enter`
   - Clear: `c` or `Escape`
3. **Memory Functions**: Store and recall values using memory buttons
4. **Continuous Calculations**: Chain operations for complex calculations

## 🛠️ Built With

- **React Hooks**: useState, useEffect, useCallback for state management
- **Custom Hooks**: Reusable calculator logic
- **Tailwind CSS**: Responsive design and utility classes
- **Framer Motion**: Button press animations and transitions
- **Vite**: Fast development and optimized builds

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**AdrishikharChowdhury**
- GitHub: [AdrishikharChowdhury](https://github.com/AdrishikharChowdhury)
- LinkedIn: [Connect with me](https://linkedin.com/in/adrishikharchowdhury)
- Portfolio: [View my work](https://adrishikhar.dev)

---

⭐ **If you found this project helpful, please give it a star!** ⭐

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
