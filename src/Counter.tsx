import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>Count:</h2>
      <h4 data-testid='counter-value'>{count}</h4>
      <button type='button' onClick={increment}>Increment</button>
    </div>
  )
}
export default Counter