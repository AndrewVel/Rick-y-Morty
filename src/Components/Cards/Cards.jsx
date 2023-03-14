import React from "react";
import SearchBar from "../NavBar/SearchBar/SearchBar";
import Card from "./Card/Card";
import s from "./Cards.Module.css";

const Cards = ({ characters }) => {
  
  return (
    <div>
      <div className={s.conatinerSearch}>
        <SearchBar />
      </div>
      <div className={s.Cards}>
        {characters.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
