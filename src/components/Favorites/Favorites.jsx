import React from "react";
import { connect } from "react-redux";
import { addCharacter } from "../../redux/actions";
import Card from "../Card/Card";

function Favorites(props) {
  console.log(props.myFavorites);
  return (
    <div>
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
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
