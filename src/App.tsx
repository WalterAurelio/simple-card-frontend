import { useState } from 'react'
import Button from './Button'
import ParentComponent from './ParentComponent'

function App() {
  const [aux, setAux] = useState(true);

  const handleClick = () => {
    setAux(prev => !prev)
  }

  return (
    <div>
      <ParentComponent />
      <Button data-testid='mi-boton' state={aux ? 'enabled' : 'disabled'} variant={aux ? 'primary' : 'secondary'} onClick={handleClick}>Hola, soy un botón</Button>
    </div>
  )
}
export default App