import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import ComingSoon from './components/ComingSoon';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Mood Memo';
  }, []);

  return (
    <div className="App">
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
