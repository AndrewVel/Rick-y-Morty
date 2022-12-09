import "./App.css";

import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites";

import { useNavigate } from "react-router-dom";

import styles from "./components/Styles.module.css";

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Froms from "./components/Form/Froms";

function App() {
  const username = "a@in.com";
  const password = "andres1";
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);

  function login(from) {
    if (from.pass === password && from.user === username) {
      setAccess(true);
      navigate("/home");
      console.log("si");
    }

    //navigate("/error");
    console.log("no");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (event) => {
    const id = event.target.value;

    console.log(id);

    setCharacters((characters) => characters.filter((perso) => perso.id != id));
  };

  return (
    <div className="App">
      <div className={styles.contenedorNav}>
        <div>
          <Froms login={login} />
        </div>
        <div>
          <Nav path="/" onSearch={onSearch} />
        </div>
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          ></Route>
          {/* <Route path="/" element={<Nav onSearch={onSearch} />}></Route> */}
          {/* <Route exact path="/" element={<Froms login={login} />}></Route> */}
          <Route path="/about" element={<About />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
