import { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [text, setText] = useState('');

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p data-testid='paragraph-element'>Text: {text}</p>
      <ChildComponent onTextChange={handleTextChange} />
    </div>
  )
}
export default ParentComponent