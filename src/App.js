import './App.css';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element="Welcome!" />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
