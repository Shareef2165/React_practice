import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ErrorBoundary from './utility/ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ErrorBoundary>

        <Counter title={"first"}/>
        </ErrorBoundary>

        <ErrorBoundary>

        <Counter title={"second"}/>
        </ErrorBoundary>
      </div>
    </>
  )
}

export default App
