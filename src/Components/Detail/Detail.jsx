import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Back from "../Back/Back";
import s from "./Detail.Module.css";
import logo from "../../assets/image/rym.png";
import NavBar from "../NavBar/NavBar";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({
    episode: [],
  });

  useEffect(() => {
    if (character.episode.length === 0) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            char.episode.map((x) =>
              fetch(x)
                .then((response) => response.json())
                .then((ep) => {
                  character.episode.push(ep.name);
                  return;
                })
            );
            setCharacter({
              ...character,
              image: char.image,
              name: char.name,
              status: char.status ? char.status : "unknown",
              type: char.type ? char.type : "no Data",
              species: char.species,
              gender: char.gender,
              location: char.location.name,
              origin: char.origin.name,
            });
            return character;
          } else {
            window.alert("No hay personajes con ese ID");
          }
          return character;
        })
        .catch((error) => {
          window.alert("No hay personajes con ese ID");
          return setCharacter({});
        });
    }
    console.log("reder");
  }, [id, character]);

  const epix = new Set(character.episode);
  let episodios = [...epix];

  return (
    <div>
      <Back />
      <NavBar />

      <img src={logo} alt="Logo App" className={s.logo} />

      <div className={s.todo}>
        <h1 className={s.name}>{character.name}</h1>
        <div className={s.larg}>
          <div className={s.containerAll}>
            <div className={s.containerImagenDetail}>
              <img
                src={character.image}
                alt={character.name}
                className={s.imageChar}
              />
            </div>
            <div className={s.containerDetail}>
              <div className={s.containerData}>
                <div className={s.izqData}>
                  <p>Status: </p>
                  <p>Species: </p>
                  <p>Gender: </p>
                  <p>Type: </p>
                  <p>Location: </p>
                  <p>Origin: </p>
                </div>
                <div className={s.derData}>
                  <p> {character.status}</p>
                  <p> {character.species}</p>
                  <p> {character.gender}</p>
                  <p> {character.type}</p>
                  <p> {character.location}</p>
                  <p> {character.origin}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.containerListEpisodes}>
            <h3>Episodes where he appears:</h3>
            <div className={s.scrollList}>
              <p>
                {episodios.map((ep, index) => (
                  <p>
                    {index + 1}: {ep}
                  </p>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
