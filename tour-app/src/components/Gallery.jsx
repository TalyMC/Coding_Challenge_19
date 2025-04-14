import React, { useEffect, useState } from "react";
import TourCard from "./tourCard";

const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch tour data
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("https://course-api.com/react-tours-project");
        if (!res.ok) {
          throw new Error("Failed to fetch tours");
        }
        const data = await res.json();
        setTours(data); 
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchTours(); // Call the fetch function
  }, [setTours]);

  // If loading, display loading message (loading and Error States)
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // If there is an error, display error message (loading and Error States)
  if (error) {
    return <div className="error">Error fetching tours</div>;
  }

  // If there are no tours left, display a message
  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours remaining</h2>
        <button className="btn" onClick={() => setTours([])}>Refresh</button>
      </div>
    );
  }

  return (
    <section className="tour-gallery">
      <h1>Our Tours</h1>
      <div className="tour-list">
        {tours.map((tourItem) => (
          <TourCard key={tourItem.id} {...tourItem} onRemove={onRemove} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;