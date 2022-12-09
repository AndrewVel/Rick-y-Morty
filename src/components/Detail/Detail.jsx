import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  console.log(id);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <h1>{character.name}</h1>
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Type: {character.type}</h3>
      </div>
    </div>
  );
}
