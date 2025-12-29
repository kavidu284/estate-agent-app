import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PropertyPage  from './pages/PropertyPage';
import SearchPage from './pages/SearchPage';
import FavouritePage from './pages/FavouritePage';
import AllPropertyPage from './pages/AllPropertyPage';
import Header from './components/header';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (property) => {
    if (!favourites.find((fav) => fav.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };
  
  const RemoveFavourite = (id) => {
    setFavourites(favourites.filter((fav) => fav.id !== id));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllPropertyPage />} />
        <Route path='/SearchPage' element={<SearchPage favourites={favourites} removeFavourite={RemoveFavourite}/>} />
        <Route path="/property/:id" element={<PropertyPage addFavourite={addFavourite} />} />
        <Route path="/favourites" element={<FavouritePage favourites={favourites} RemoveFavourite={RemoveFavourite} />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

