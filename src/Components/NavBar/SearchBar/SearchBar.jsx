import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "../../../redux/actions";
import "./SearchModule.css";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [cod, setCod] = useState("");

  const inputChange = (e) => {
    setCod(e.target.value);
  };

  const callCharacter = () => {
    dispatch(getCharacters(cod));
  };

  const callRandomCharacter = () => {
    for (let i = 0; i < 10; i++) {
      dispatch(getCharacters(Math.floor(Math.random() * 826) + 1));
    }
  };
  return (
    <div className="searchContainer">
      <button className="pack" onClick={() => callRandomCharacter()}>
        Pack Characters
      </button>
      <div className="form">
        <input
          id="search"
          onChange={(e) => inputChange(e)}
          value={cod}
          type="number"
          placeholder="Ingrese el numero de targeta virtual"
        />
        <button id="button" onClick={() => callCharacter()}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
