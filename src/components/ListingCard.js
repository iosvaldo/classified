import React, { useState } from "react";

function ListingCard({ listing, deleteListing }) {
  const { id, image, description, location } = listing;
  const [favorite, setFavorite] = useState(false);

  function handleClick() {
    setFavorite(!favorite)
  }

  function handleDelete() {
    fetch(`http://localhost:3000/listings/${id}`, {method: "DELETE",})
      .then((res) => res.json())
      .then((data) => deleteListing(id));
   
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleClick} className="emoji__btn favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji__btn favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji__btn delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

//2. I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon

//create state variable to hold boolean value for toggle
//  const [favorite, setFavorite] = useState(false);
//use state variable to determine which button is displayed
// {favorite ? (
//  <button onClick={handleClick} className="emoji__btn favorite active">★<button>
//  ) : (
//  <button onClick={handleClick} className="emoji__btn favorite">☆</button>
//  )}
//add click event listeners to both buttons
// onClick={handleClick} 
//callback function to flip state from true to false & vice versa
// function handleClick() {
//    setFavorite(!favorite)
// }

//3. I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.

//add event listener to our delete button
//call back function:
//send delete request to our json-server(presist to backend)
//update state in App to reflect deleted listing