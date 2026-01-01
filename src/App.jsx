import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PropertyPage  from './pages/PropertyPage';
import SearchPage from './pages/SearchPage';
import FavouritePage from './pages/FavouritePage';
import AllPropertyPage from './pages/AllPropertyPage';
import HomePage from './pages/HomePage';
import Header from './components/header';
import Footer from './components/Footer';
import ContactPage from './pages/contact';

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

  const clearFavourites = () => {
    setFavourites([]);
  }

  return (
    <HashRouter>
    <div className='app-layout'>
      <Header />
      <main className="main-content">
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<AllPropertyPage addFavourite={addFavourite} favourites={favourites} removeFavourite={RemoveFavourite}/>} />
        <Route path='/SearchPage' element={<SearchPage favourites={favourites} addFavourite={addFavourite} removeFavourite={RemoveFavourite}/>} />
        <Route path="/property/:id" element={<PropertyPage addFavourite={addFavourite} favourites ={ favourites} removeFavourite= {RemoveFavourite}  />} />
        <Route path="/favourites" element={<FavouritePage favourites={favourites} RemoveFavourite={RemoveFavourite} clearFavourites={clearFavourites} />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      </main>

      <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

