import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropertyPage  from './pages/PropertyPage';
import SearchPage from './pages/SearchPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

