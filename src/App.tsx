import { useState } from 'react'
import './App.css'

type Tool = 'tuner' | 'metronome'

function App() {
  const [activeTool, setActiveTool] = useState<Tool>('tuner')

  return (
    <main className="app">
      <header className="app-header">
        <a className="brand" href="/" aria-label="WonderTune home">
          <span className="brand-icon" aria-hidden="true">
            ♫
          </span>
          <span>WonderTune</span>
        </a>

        <nav className="tool-nav" aria-label="Music tools">
          <button
            type="button"
            className={
              activeTool === 'tuner'
                ? 'nav-button active'
                : 'nav-button'
            }
            onClick={() => setActiveTool('tuner')}
          >
            Tuner
          </button>

          <button
            type="button"
            className={
              activeTool === 'metronome'
                ? 'nav-button active'
                : 'nav-button'
            }
            onClick={() => setActiveTool('metronome')}
          >
            Metronome
          </button>
        </nav>
      </header>

      <section className="tool-panel" aria-live="polite">
        {activeTool === 'tuner' ? (
          <>
            <p className="eyebrow">CHROMATIC TUNER</p>

            <h1>Find your note.</h1>

            <p className="description">
              Tune your instrument with real-time pitch detection.
            </p>

            <div className="note-display">
              <span className="note-placeholder">A</span>
              <span className="frequency">440.00 Hz</span>
            </div>

            <button
              type="button"
              className="primary-button"
              disabled
            >
              Tuner coming soon
            </button>

            <p className="helper-text">
              Microphone input and pitch detection are coming next.
            </p>
          </>
        ) : (
          <>
            <p className="eyebrow">METRONOME</p>

            <h1>Find your tempo.</h1>

            <p className="description">
              Keep a steady beat while you practise.
            </p>

            <div className="tempo-display">
              <span className="tempo-value">120</span>
              <span className="tempo-unit">BPM</span>
            </div>

            <button
              type="button"
              className="primary-button"
              disabled
            >
              Metronome coming soon
            </button>

            <p className="helper-text">
              Tempo controls and audio playback are coming next.
            </p>
          </>
        )}
      </section>

      <footer className="app-footer">
        <span>Made for musicians.</span>
        <span>WonderTune · Early development</span>
      </footer>
    </main>
  )
}

export default App