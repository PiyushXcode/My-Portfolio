import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
 theme:{
  colors: {
    brown: "#53423e",
    lightBrown: "#645550",
    darkBrown: "#2c2523",
    black: "#1e1917",
    white: "#f1e1d9",
    cyan: "#15d1e9",
    lightCyan: "#88e5f0",
    darkCyan: "#009fb3",
    orange: "#fb9718",
    lightOrange: "#fac27b",
    darkOrange: "#d28422",
    gray: "#626965",
    lightGrey: "#978580",
    darkGrey: "#3f4441",
  },
  extend:{
    boxShadow:{
      cyanShadow:'0px 0px 20px 0px rgba(94,206,220, 0.5)',
    }
  },

  fontfamily: {
    body: ["Josefin Sans"],
    special: ["Roboto"],
  },
 },
  plugins: [react()
    , tailwindcss(),
  ],
})
