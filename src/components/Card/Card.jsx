import React from "react";
import styles from "./Styles.module.css";
import { Link } from "react-router-dom";
import { addCharacter } from "../../redux/actions";
import { deleteCharacter } from "../../redux/actions";
import { useState } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteCharacter(props.id);
    } else {
      setIsFav(true);
      props.addCharacter(props);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
    console.log(props.myFavorites);
  }, [props.myFavorites]);

  return (
    <div className={styles.card}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <img className={styles.image} src={props.image} alt={props.name} />
      <button
        onClick={props.onClose}
        className={styles.boton}
        key={props.id}
        value={props.id}
      >
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.textName}>{props.name}</h2>
      </Link>
      <div className={styles.contenedor2}>
        <h2 className={styles.textName2}>{props.species}</h2>
        <h2 className={styles.textName2}>{props.gender}</h2>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: (perso) => dispatch(addCharacter(perso)),
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
