import React from "react";
import { connect } from "react-redux";
// import { addCharacter } from "../../redux/actions";
import Card from "../Cards/Card/Card";
import NavBar from "../NavBar/NavBar";
import logo from "../../assets/image/rym.png";
import s from "./Favorite.Module.css";
function Favorites(props) {
  console.log(props.myFavorites);
  return (
    <div>
      <NavBar />
      <img src={logo} alt="Logo App" className={s.logo} />
      <div className={s.todo}>
        {props.myFavorites.map((favorito) => {
          console.log(favorito);
          return (
            <div>
              <Card
                name={favorito.name}
                species={favorito.species}
                gender={favorito.gender}
                image={favorito.image}
                id={favorito.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
