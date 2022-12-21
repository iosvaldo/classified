import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {
  
  const renderListings = listings.map((listing) => (
    <ListingCard deleteListing={deleteListing}  listing={listing} />
  ));
  return (
    <main>
      <ul className="cards">{renderListings}</ul>
    </main>
  );
}

export default ListingsContainer;


//the listingContainer function is accepting an array of objects (objects that represend listings from our database on db.json)

// then we're creating a variable called renderListings that is mapping over that array of objects & returning in the new array of <ListingCard> component which is cards for each entry by passing in the map variable name of listing={listing}

//then putting that on the DOM by putting it in JSX brackets in our return function. 