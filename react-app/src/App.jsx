import reactLogo from './assets/react.svg'
import './App.css'
import Kings from './components/Kings'
import Queens from './components/Queens'

export default function App() {
  return (
    <main className="app-layout">
      <header className="logo-header">
        {/* Keep a single brand mark at the top. */}
        <img src={reactLogo} className="logo" alt="React logo" />
      </header>

      <section className="tables-grid">
        <div className="table-panel">
          <Kings />
        </div>
        <div className="table-panel">
          <Queens />
        </div>
      </section>
    </main>
  )
}

