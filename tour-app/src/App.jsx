import React, { useState, useEffect } from "react";
import Gallery from "./components/gallery";
import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h2>Current Tours available</h2>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} /> 
    </main>
  );
}

export default App;