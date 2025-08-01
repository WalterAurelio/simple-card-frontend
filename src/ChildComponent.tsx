import { useState } from 'react'

function ChildComponent({ onTextChange }: { onTextChange: (arg: string) => void }) {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    onTextChange(inputValue);
  }
  
  return (
    <div>
      <h2>Child Component</h2>
      <input type='text' value={inputValue} onChange={handleChange} />
      <button data-testid='boton-child' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
export default ChildComponent