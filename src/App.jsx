import { useState } from 'react';
import TravelList from './components/TravelList/TravelList';
import Filter from './components/Filter/Filter';
import TravelForm from './components/TravelForm/TravelForm';
import { initialTravels } from './data/initialTravels';
import './App.css';

function App() {
  const [travels, setTravels] = useState(initialTravels);
  const [filterCountry, setFilterCountry] = useState('');

  const uniqueCountries = [...new Set(travels.map(travel => travel.country))];
  const filteredTravels = filterCountry
    ? travels.filter(travel => travel.country === filterCountry)
    : travels;

  const handleLike = (id) => {
    setTravels(prev =>
      prev.map(travel =>
        travel.id === id ? { ...travel, likes: travel.likes + 1 } : travel
      )
    );
  };

  const handleAddTravel = (newTravel) => {
    const newId = Date.now();
    setTravels(prev => [...prev, { ...newTravel, id: newId, likes: 0 }]);
  };

  return (
    <div className="app">
      <h1>Каталог путешествий</h1>
      <Filter
        countries={uniqueCountries}
        filterCountry={filterCountry}
        onFilterChange={setFilterCountry}
      />
      <TravelForm onAddTravel={handleAddTravel} />
      <TravelList travels={filteredTravels} onLike={handleLike} />
    </div>
  );
}

export default App;