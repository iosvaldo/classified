import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [query,setQuery] = useState("");

  function fetchListings() {
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((listingsData) => setListings(listingsData));
  }

  function deleteListing(id) { 
    const updatedListing = listings.filter((listing) => listing.id !== id)
    setListings(updatedListing)
  }
  
  useEffect(fetchListings, [])
  
  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(query.toLowerCase()))
  
  return (
    <div className="app">
      <Header setQuery={setQuery} />
      <ListingsContainer
        deleteListing={deleteListing}
        listings={filteredListings} />
    </div>
  );
}

export default App;

//1. when the app starts, I can see all listings

//fetch listing from json-server as an effect by using useEffect
//store listings in the listing state
//pass listings down to ListingsContainer as props to actually render