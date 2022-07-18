import { useState } from 'react';
import './App.css';
import Condicional from './components/Condicional';

function App() {
  const [email, setEmail] = useState()
  const[userEmail, setUserEmail] = useState()

  return (
    <div className="App">
      <h1>Renderização convencional</h1>
      <Condicional />
    </div>
  );
}

export default App;
