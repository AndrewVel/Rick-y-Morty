import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import logo from "../../assets/image/rym.png";
import s from "./Home.Module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getCharacters());
  }, [dispatch]);

  const characters = useSelector((state) => state.characters);

  return (
    <div>
      <NavBar />
      <img src={logo} alt="Logo App" className={s.logo} />
      <Cards characters={characters} />
    </div>
  );
};

export default Home;
