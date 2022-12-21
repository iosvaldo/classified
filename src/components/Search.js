import React, { useState } from "react";

function Search({setQuery}) {

  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);
    
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search"
        // value={search}
        onChange={(e) => setSearch(e.target.value)}
       
      />
      <button onClick={search} type="submit">🔍</button>
    </form>
  );
}

export default Search;

//4. I can search for listings by their name.

//in App we set upa piece of state to be used for our search
//const [query,setQuery] = useState("");
//from the beginning its running this filter
//const filteredListings = listings.filter((listing) =>
//   listing.description.toLowerCase().includes(query.toLowerCase()))
//we passed down the filter to our listing container
//<ListingsContainer
//       deleteListing={deleteListing}
//      listings={filteredListings} />
//initially since its an empy string it leave the listings array unfiltered, untouched

//we passed this function to set our query state that has that effect down to our header
// <Header setQuery={setQuery} />
// it goes to our header, we accept it as a prop & pass it right to search
//<Search setQuery={setQuery} />

//search component has one input field, we store that value in state
//const [search, setSearch] = useState("");
//it updates anytime someone makes a change
//but it doesnt update the App until we submit the form
//
//collect input from form & store in the state in search component
//when user submits search, search term must be passed up to App
//in the App use th search term to filter listings
