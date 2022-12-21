import React from "react";
import Search from "./Search";
import { BsNewspaper } from 'react-icons/bs';
import "../components/Header.css";

function Header({setQuery}) {
  return (
    <header>
      <h1 className="title__container">
        <div className="news__icon">
          <BsNewspaper />
        </div>
        Classifieds
      </h1>
      <Search setQuery={setQuery} />
    </header>
  );
}

export default Header;
