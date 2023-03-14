import s from "./Card.Module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCharacter, addCharacter } from "../../../redux/actions";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Card = ({ id, name, species, gender, image }) => {
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => {
    return state.myFavorites;
  });
  const onClose = (id) => {
    dispatch(deleteCharacter(id));
  };

  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteCharacter(id));
    } else {
      setIsFav(true);
      const character = { id, name, species, gender, image };
      dispatch(addCharacter(character));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    console.log(myFavorites);
  }, [myFavorites, id]);

  return (
    <div className={s.Card}>
      <div className={s.contenedorButtons}>
        <button className={s.cerrar} onClick={() => onClose(id)}>
          X
        </button>
        {isFav ? (
          <button onClick={handleFavorite} className={s.redHeard}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite} className={s.whiteHeard}>
            🤍
          </button>
        )}
      </div>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <div className={s.dataChar}>
          <h4 className={species === "Human" ? s.speciesHuman : s.speciesAlien}>
            {species}
          </h4>

          <h4
            className={
              gender === "Male"
                ? s.genderMale
                : gender === "Female"
                ? s.genderFem
                : s.genderUnknown
            }
          >
            {gender}
          </h4>
        </div>
      </Link>
    </div>
  );
};
export default Card;
