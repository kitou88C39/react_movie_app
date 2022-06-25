import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Watchlist from './components/Watchlist';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Watchlist' element={<Watchlist />} />
      </Routes>
    </Router>
  );
}

export default App;
