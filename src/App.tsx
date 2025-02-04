import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState<string>();
  const [serverTime, setServerTime] = useState<string>();
  const [fetchMs, setFetchMs] = useState<number>();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>vite-plugin-cloudflare</h1>
      <h3><a href="https://github.com/cloudflare/workers-sdk/tree/main/packages/vite-plugin-cloudflare#tutorial">GitHub cloudflare/workers-sdk</a></h3>
      <div className="card">
        <button
          onClick={async () => {
            const start = performance.now();
            const res = await fetch("/api/")
            setFetchMs(performance.now() - start)
            const data = await res.json() as { name: string, time: number }
            setName(data.name)
            setServerTime(new Date(data.time).toLocaleString())
          }}
          aria-label="get name"
        >
          {name ?? ''} {serverTime ?? 'Click to fetch /api/'} {fetchMs ? `(${fetchMs.toFixed(0)}ms)` : ''}
        </button>
        <p>
          Edit <code>api/index.ts</code> to change the name
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
