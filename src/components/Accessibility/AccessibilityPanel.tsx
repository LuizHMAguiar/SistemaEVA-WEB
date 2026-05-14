import { useEffect, useState } from "react"
import "./AccessibilityPanel.css"

const MIN_FONT = 100
const MAX_FONT = 200
const STEP_FONT = 10

export function AccessibilityPanel() {
  const [fontSize, setFontSize] = useState(MIN_FONT)
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--app-font-scale", `${fontSize}%`)
    root.style.zoom = `${fontSize}%`
    root.classList.toggle("theme-light", theme === "light")
    root.classList.toggle("theme-dark", theme === "dark")
  }, [fontSize, theme])

  const increaseFont = () => setFontSize((current) => Math.min(MAX_FONT, current + STEP_FONT))
  const decreaseFont = () => setFontSize((current) => Math.max(MIN_FONT, current - STEP_FONT))
  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"))

  return (
    <aside className={`accessibility-panel ${theme === "light" ? "accessibility-panel--light" : ""}`}>
      <div className="accessibility-panel__handle">
        <span className="accessibility-panel__icon" aria-hidden="true">♿</span>
        <span className="accessibility-panel__title">Acessibilidade</span>
      </div>
      <div className="accessibility-panel__content">
        <div className="accessibility-panel__controls">
          <button
            className="accessibility-panel__button"
            type="button"
            onClick={decreaseFont}
            disabled={fontSize <= MIN_FONT}
            aria-label="Diminuir fonte"
          >
            Fonte -
          </button>
          <button
            className="accessibility-panel__button"
            type="button"
            onClick={increaseFont}
            disabled={fontSize >= MAX_FONT}
            aria-label="Aumentar fonte"
          >
            Fonte +
          </button>
        </div>
        <button
          className="accessibility-panel__button accessibility-panel__button--theme"
          type="button"
          onClick={toggleTheme}
          aria-label="Alternar tema"
        >
          {theme === "dark" ? "Tema Claro" : "Tema Escuro"}
        </button>
      </div>
    </aside>
  )
}
