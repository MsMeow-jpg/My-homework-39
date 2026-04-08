import { useState } from 'react'

function StatefulComponent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Stateful Component</h2>
      <p>This component uses the useState hook to manage internal state.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase state
      </button>
    </div>
  )
}

export default StatefulComponent