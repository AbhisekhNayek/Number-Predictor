import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumber(e.target.value);

    if (isNaN(value)) {
      setMessage('');
      return;
    }

    if (value < 0) {
      setMessage('Please enter a positive value');
    } else if (value % 2 === 0) {
      setMessage(`Next 3 even numbers: ${value + 2}, ${value + 4}, ${value + 6}`);
    } else {
      setMessage(`Next 3 odd numbers: ${value + 2}, ${value + 4}, ${value + 6}`);
    }
  };

  return (
    <div className="container">
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <p>{message}</p>
    </div>
  );
}

export default App;
